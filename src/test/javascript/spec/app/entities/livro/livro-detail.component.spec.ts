import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { JHipsterProjectTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { LivroDetailComponent } from '../../../../../../main/webapp/app/entities/livro/livro-detail.component';
import { LivroService } from '../../../../../../main/webapp/app/entities/livro/livro.service';
import { Livro } from '../../../../../../main/webapp/app/entities/livro/livro.model';

describe('Component Tests', () => {

    describe('Livro Management Detail Component', () => {
        let comp: LivroDetailComponent;
        let fixture: ComponentFixture<LivroDetailComponent>;
        let service: LivroService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JHipsterProjectTestModule],
                declarations: [LivroDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    LivroService,
                    JhiEventManager
                ]
            }).overrideTemplate(LivroDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LivroDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LivroService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Livro(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.livro).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
