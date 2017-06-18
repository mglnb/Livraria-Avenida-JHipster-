import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';

import { Instituicao } from './instituicao.model';
import { InstituicaoPopupService } from './instituicao-popup.service';
import { InstituicaoService } from './instituicao.service';

@Component({
    selector: 'jhi-instituicao-delete-dialog',
    templateUrl: './instituicao-delete-dialog.component.html'
})
export class InstituicaoDeleteDialogComponent {

    instituicao: Instituicao;

    constructor(
        private instituicaoService: InstituicaoService,
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.instituicaoService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'instituicaoListModification',
                content: 'Deleted an instituicao'
            });
            this.activeModal.dismiss(true);
        });
        this.alertService.success('jHipsterProjectApp.instituicao.deleted', { param : id }, null);
    }
}

@Component({
    selector: 'jhi-instituicao-delete-popup',
    template: ''
})
export class InstituicaoDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private instituicaoPopupService: InstituicaoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.instituicaoPopupService
                .open(InstituicaoDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
