import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager  } from 'ng-jhipster';

import { Instituicao } from './instituicao.model';
import { InstituicaoService } from './instituicao.service';

@Component({
    selector: 'jhi-instituicao-detail',
    templateUrl: './instituicao-detail.component.html'
})
export class InstituicaoDetailComponent implements OnInit, OnDestroy {

    instituicao: Instituicao;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private instituicaoService: InstituicaoService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInInstituicaos();
    }

    load(id) {
        this.instituicaoService.find(id).subscribe((instituicao) => {
            this.instituicao = instituicao;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInInstituicaos() {
        this.eventSubscriber = this.eventManager.subscribe(
            'instituicaoListModification',
            (response) => this.load(this.instituicao.id)
        );
    }
}
