import { Instituicao } from '../instituicao';
export class Livro {
    constructor(
        public id?: number,
        public nome?: string,
        public isbn?: string,
        public ano?: string,
        public edicao?: string,
        public editora?: string,
        public livro?: Instituicao,
    ) {
    }
}
