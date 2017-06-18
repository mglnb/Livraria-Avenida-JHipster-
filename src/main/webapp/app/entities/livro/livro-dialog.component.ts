import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Livro } from './livro.model';
import { LivroPopupService } from './livro-popup.service';
import { LivroService } from './livro.service';
import { Instituicao, InstituicaoService } from '../instituicao';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-livro-dialog',
    templateUrl: './livro-dialog.component.html'
})
export class LivroDialogComponent implements OnInit {

    livro: Livro;
    authorities: any[];
    isSaving: boolean;

    instituicaos: Instituicao[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private livroService: LivroService,
        private instituicaoService: InstituicaoService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.instituicaoService.query()
            .subscribe((res: ResponseWrapper) => { this.instituicaos = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.livro.id !== undefined) {
            this.subscribeToSaveResponse(
                this.livroService.update(this.livro), false);
        } else {
            this.subscribeToSaveResponse(
                this.livroService.create(this.livro), true);
        }
    }

    private subscribeToSaveResponse(result: Observable<Livro>, isCreated: boolean) {
        result.subscribe((res: Livro) =>
            this.onSaveSuccess(res, isCreated), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Livro, isCreated: boolean) {
        this.alertService.success(
            isCreated ? 'jHipsterProjectApp.livro.created'
            : 'jHipsterProjectApp.livro.updated',
            { param : result.id }, null);

        this.eventManager.broadcast({ name: 'livroListModification', content: 'OK'});
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

    trackInstituicaoById(index: number, item: Instituicao) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-livro-popup',
    template: ''
})
export class LivroPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private livroPopupService: LivroPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.modalRef = this.livroPopupService
                    .open(LivroDialogComponent, params['id']);
            } else {
                this.modalRef = this.livroPopupService
                    .open(LivroDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
