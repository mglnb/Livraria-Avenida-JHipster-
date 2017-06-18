import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Instituicao } from './instituicao.model';
import { InstituicaoPopupService } from './instituicao-popup.service';
import { InstituicaoService } from './instituicao.service';

@Component({
    selector: 'jhi-instituicao-dialog',
    templateUrl: './instituicao-dialog.component.html'
})
export class InstituicaoDialogComponent implements OnInit {

    instituicao: Instituicao;
    authorities: any[];
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private instituicaoService: InstituicaoService,
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
        if (this.instituicao.id !== undefined) {
            this.subscribeToSaveResponse(
                this.instituicaoService.update(this.instituicao), false);
        } else {
            this.subscribeToSaveResponse(
                this.instituicaoService.create(this.instituicao), true);
        }
    }

    private subscribeToSaveResponse(result: Observable<Instituicao>, isCreated: boolean) {
        result.subscribe((res: Instituicao) =>
            this.onSaveSuccess(res, isCreated), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Instituicao, isCreated: boolean) {
        this.alertService.success(
            isCreated ? 'jHipsterProjectApp.instituicao.created'
            : 'jHipsterProjectApp.instituicao.updated',
            { param : result.id }, null);

        this.eventManager.broadcast({ name: 'instituicaoListModification', content: 'OK'});
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
    selector: 'jhi-instituicao-popup',
    template: ''
})
export class InstituicaoPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private instituicaoPopupService: InstituicaoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.modalRef = this.instituicaoPopupService
                    .open(InstituicaoDialogComponent, params['id']);
            } else {
                this.modalRef = this.instituicaoPopupService
                    .open(InstituicaoDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
