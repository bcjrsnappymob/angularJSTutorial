import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('HeroDetailComponent', () => {
    let component: HeroDetailComponent;
    let fixture: ComponentFixture<HeroDetailComponent>;
    let element: DebugElement;
    let heroServiceStub: any;
    let routeStub: any;

    beforeEach(async(() => {
        routeStub = {
            snapshot: {
                paramMap: {
                    get: () => 12,
                }
            }
        };

        heroServiceStub =  {

            getHero: () => {
                // Get the ID from routeStub
                let paramMapID = 0;
                paramMapID = routeStub.snapshot.paramMap.get();
                return of({id: paramMapID, name: 'YOLO2'});
            },

            getHeroes: () => of([
                {id: 11, name: 'YOLO1'},
                {id: 12, name: 'YOLO2'},
                {id: 13, name: 'YOLO3'},
                {id: 14, name: 'YOLO4'},
                {id: 15, name: 'YOLO5'},
                {id: 16, name: 'YOLO6'},
                {id: 17, name: 'YOLO7'}
            ])
        };

        TestBed.configureTestingModule({
            declarations: [ HeroDetailComponent ],
            providers: [
                { provide: ActivatedRoute, useValue: routeStub},
                { provide: HeroService, useValue: heroServiceStub}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroDetailComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get a hero based on an ID', () => {
        const tempHero = {id: 12, name: 'YOLO2'};
        component.ngOnInit();
        expect(component.hero.id).toEqual(tempHero.id);
        expect(component.hero.name).toEqual(tempHero.name);
    });

});
