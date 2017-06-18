import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JHipsterProjectSharedModule } from '../../shared';
import {
    InstituicaoService,
    InstituicaoPopupService,
    InstituicaoComponent,
    InstituicaoDetailComponent,
    InstituicaoDialogComponent,
    InstituicaoPopupComponent,
    InstituicaoDeletePopupComponent,
    InstituicaoDeleteDialogComponent,
    instituicaoRoute,
    instituicaoPopupRoute,
    InstituicaoResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...instituicaoRoute,
    ...instituicaoPopupRoute,
];

@NgModule({
    imports: [
        JHipsterProjectSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        InstituicaoComponent,
        InstituicaoDetailComponent,
        InstituicaoDialogComponent,
        InstituicaoDeleteDialogComponent,
        InstituicaoPopupComponent,
        InstituicaoDeletePopupComponent,
    ],
    entryComponents: [
        InstituicaoComponent,
        InstituicaoDialogComponent,
        InstituicaoPopupComponent,
        InstituicaoDeleteDialogComponent,
        InstituicaoDeletePopupComponent,
    ],
    providers: [
        InstituicaoService,
        InstituicaoPopupService,
        InstituicaoResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterProjectInstituicaoModule {}
