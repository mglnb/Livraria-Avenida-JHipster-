import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { LivroComponent } from './livro.component';
import { LivroDetailComponent } from './livro-detail.component';
import { LivroPopupComponent } from './livro-dialog.component';
import { LivroDeletePopupComponent } from './livro-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class LivroResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const livroRoute: Routes = [
    {
        path: 'livro',
        component: LivroComponent,
        resolve: {
            'pagingParams': LivroResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jHipsterProjectApp.livro.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'livro/:id',
        component: LivroDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jHipsterProjectApp.livro.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const livroPopupRoute: Routes = [
    {
        path: 'livro-new',
        component: LivroPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jHipsterProjectApp.livro.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'livro/:id/edit',
        component: LivroPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jHipsterProjectApp.livro.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'livro/:id/delete',
        component: LivroDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jHipsterProjectApp.livro.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
