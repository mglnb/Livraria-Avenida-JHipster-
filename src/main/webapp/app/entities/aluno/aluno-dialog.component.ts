import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Aluno } from './aluno.model';
import { AlunoPopupService } from './aluno-popup.service';
import { AlunoService } from './aluno.service';

@Component({
    selector: 'jhi-aluno-dialog',
    templateUrl: './aluno-dialog.component.html'
})
export class AlunoDialogComponent implements OnInit {

    aluno: Aluno;
    authorities: any[];
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private alunoService: AlunoService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.aluno.id !== undefined) {
            this.subscribeToSaveResponse(
                this.alunoService.update(this.aluno), false);
        } else {
            this.subscribeToSaveResponse(
                this.alunoService.create(this.aluno), true);
        }
    }

    private subscribeToSaveResponse(result: Observable<Aluno>, isCreated: boolean) {
        result.subscribe((res: Aluno) =>
            this.onSaveSuccess(res, isCreated), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Aluno, isCreated: boolean) {
        this.alertService.success(
            isCreated ? 'jHipsterProjectApp.aluno.created'
            : 'jHipsterProjectApp.aluno.updated',
            { param : result.id }, null);

        this.eventManager.broadcast({ name: 'alunoListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-aluno-popup',
    template: ''
})
export class AlunoPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private alunoPopupService: AlunoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.modalRef = this.alunoPopupService
                    .open(AlunoDialogComponent, params['id']);
            } else {
                this.modalRef = this.alunoPopupService
                    .open(AlunoDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
