import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager  } from 'ng-jhipster';

import { Livro } from './livro.model';
import { LivroService } from './livro.service';

@Component({
    selector: 'jhi-livro-detail',
    templateUrl: './livro-detail.component.html'
})
export class LivroDetailComponent implements OnInit, OnDestroy {

    livro: Livro;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private livroService: LivroService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInLivros();
    }

    load(id) {
        this.livroService.find(id).subscribe((livro) => {
            this.livro = livro;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInLivros() {
        this.eventSubscriber = this.eventManager.subscribe(
            'livroListModification',
            (response) => this.load(this.livro.id)
        );
    }
}
