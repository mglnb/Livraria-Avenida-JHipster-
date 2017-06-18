import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';

import { Livro } from './livro.model';
import { LivroPopupService } from './livro-popup.service';
import { LivroService } from './livro.service';

@Component({
    selector: 'jhi-livro-delete-dialog',
    templateUrl: './livro-delete-dialog.component.html'
})
export class LivroDeleteDialogComponent {

    livro: Livro;

    constructor(
        private livroService: LivroService,
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.livroService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'livroListModification',
                content: 'Deleted an livro'
            });
            this.activeModal.dismiss(true);
        });
        this.alertService.success('jHipsterProjectApp.livro.deleted', { param : id }, null);
    }
}

@Component({
    selector: 'jhi-livro-delete-popup',
    template: ''
})
export class LivroDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private livroPopupService: LivroPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.livroPopupService
                .open(LivroDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
