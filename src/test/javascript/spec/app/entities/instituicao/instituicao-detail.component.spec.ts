import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { JHipsterProjectTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { InstituicaoDetailComponent } from '../../../../../../main/webapp/app/entities/instituicao/instituicao-detail.component';
import { InstituicaoService } from '../../../../../../main/webapp/app/entities/instituicao/instituicao.service';
import { Instituicao } from '../../../../../../main/webapp/app/entities/instituicao/instituicao.model';

describe('Component Tests', () => {

    describe('Instituicao Management Detail Component', () => {
        let comp: InstituicaoDetailComponent;
        let fixture: ComponentFixture<InstituicaoDetailComponent>;
        let service: InstituicaoService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JHipsterProjectTestModule],
                declarations: [InstituicaoDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    InstituicaoService,
                    JhiEventManager
                ]
            }).overrideTemplate(InstituicaoDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(InstituicaoDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(InstituicaoService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Instituicao(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.instituicao).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
