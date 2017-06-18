import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Instituicao } from './instituicao.model';
import { InstituicaoService } from './instituicao.service';

@Injectable()
export class InstituicaoPopupService {
    private isOpen = false;
    constructor(
        private modalService: NgbModal,
        private router: Router,
        private instituicaoService: InstituicaoService

    ) {}

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.instituicaoService.find(id).subscribe((instituicao) => {
                this.instituicaoModalRef(component, instituicao);
            });
        } else {
            return this.instituicaoModalRef(component, new Instituicao());
        }
    }

    instituicaoModalRef(component: Component, instituicao: Instituicao): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.instituicao = instituicao;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
