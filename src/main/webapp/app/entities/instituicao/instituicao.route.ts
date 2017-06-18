import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { InstituicaoComponent } from './instituicao.component';
import { InstituicaoDetailComponent } from './instituicao-detail.component';
import { InstituicaoPopupComponent } from './instituicao-dialog.component';
import { InstituicaoDeletePopupComponent } from './instituicao-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class InstituicaoResolvePagingParams implements Resolve<any> {

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

export const instituicaoRoute: Routes = [
    {
        path: 'instituicao',
        component: InstituicaoComponent,
        resolve: {
            'pagingParams': InstituicaoResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jHipsterProjectApp.instituicao.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'instituicao/:id',
        component: InstituicaoDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jHipsterProjectApp.instituicao.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const instituicaoPopupRoute: Routes = [
    {
        path: 'instituicao-new',
        component: InstituicaoPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jHipsterProjectApp.instituicao.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'instituicao/:id/edit',
        component: InstituicaoPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jHipsterProjectApp.instituicao.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'instituicao/:id/delete',
        component: InstituicaoDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jHipsterProjectApp.instituicao.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
