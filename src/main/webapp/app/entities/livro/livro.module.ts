import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JHipsterProjectSharedModule } from '../../shared';
import {
    LivroService,
    LivroPopupService,
    LivroComponent,
    LivroDetailComponent,
    LivroDialogComponent,
    LivroPopupComponent,
    LivroDeletePopupComponent,
    LivroDeleteDialogComponent,
    livroRoute,
    livroPopupRoute,
    LivroResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...livroRoute,
    ...livroPopupRoute,
];

@NgModule({
    imports: [
        JHipsterProjectSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        LivroComponent,
        LivroDetailComponent,
        LivroDialogComponent,
        LivroDeleteDialogComponent,
        LivroPopupComponent,
        LivroDeletePopupComponent,
    ],
    entryComponents: [
        LivroComponent,
        LivroDialogComponent,
        LivroPopupComponent,
        LivroDeleteDialogComponent,
        LivroDeletePopupComponent,
    ],
    providers: [
        LivroService,
        LivroPopupService,
        LivroResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterProjectLivroModule {}
