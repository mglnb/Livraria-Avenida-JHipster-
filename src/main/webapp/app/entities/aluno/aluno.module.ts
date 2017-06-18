import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JHipsterProjectSharedModule } from '../../shared';
import {
    AlunoService,
    AlunoPopupService,
    AlunoComponent,
    AlunoDetailComponent,
    AlunoDialogComponent,
    AlunoPopupComponent,
    AlunoDeletePopupComponent,
    AlunoDeleteDialogComponent,
    alunoRoute,
    alunoPopupRoute,
    AlunoResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...alunoRoute,
    ...alunoPopupRoute,
];

@NgModule({
    imports: [
        JHipsterProjectSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        AlunoComponent,
        AlunoDetailComponent,
        AlunoDialogComponent,
        AlunoDeleteDialogComponent,
        AlunoPopupComponent,
        AlunoDeletePopupComponent,
    ],
    entryComponents: [
        AlunoComponent,
        AlunoDialogComponent,
        AlunoPopupComponent,
        AlunoDeleteDialogComponent,
        AlunoDeletePopupComponent,
    ],
    providers: [
        AlunoService,
        AlunoPopupService,
        AlunoResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterProjectAlunoModule {}
