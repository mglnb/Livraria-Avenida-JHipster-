import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Instituicao } from './instituicao.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class InstituicaoService {

    private resourceUrl = 'api/instituicaos';

    constructor(private http: Http) { }

    create(instituicao: Instituicao): Observable<Instituicao> {
        const copy = this.convert(instituicao);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(instituicao: Instituicao): Observable<Instituicao> {
        const copy = this.convert(instituicao);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Instituicao> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(instituicao: Instituicao): Instituicao {
        const copy: Instituicao = Object.assign({}, instituicao);
        return copy;
    }
}
