import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let element: HTMLElement;
    let heroServiceStub: any;

    beforeEach(async(() => {

        heroServiceStub = {
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
            declarations: [ DashboardComponent ],
            providers: [ {provide: HeroService, useValue: heroServiceStub} ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get a list of heroes after ngOnInit() call', () => {
        component.ngOnInit();
        expect(component.heroes.length).toBeGreaterThan(0);
    });

    it('should create the dashboard once ngOnInit() is called', () => {
        // Arrange
        const dashboardItem = 'YOLO';
        const dashboardItems = element.querySelector('a');
        // Act
        component.ngOnInit();
        fixture.detectChanges();
        // Assert
        expect(dashboardItems.textContent).toContain(dashboardItem);
    });

});
