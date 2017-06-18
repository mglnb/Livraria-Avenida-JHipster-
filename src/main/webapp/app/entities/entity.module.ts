import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JHipsterProjectInstituicaoModule } from './instituicao/instituicao.module';
import { JHipsterProjectAlunoModule } from './aluno/aluno.module';
import { JHipsterProjectLivroModule } from './livro/livro.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JHipsterProjectInstituicaoModule,
        JHipsterProjectAlunoModule,
        JHipsterProjectLivroModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterProjectEntityModule {}
