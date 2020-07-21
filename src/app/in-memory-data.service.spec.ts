import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
    let service: InMemoryDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(InMemoryDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should create a DB using createDB', () => {
        const heroesDB = service.createDb();
        expect(heroesDB.heroes).toContain({ id: 20, name: 'Tornado' });
    });

    it('should return highest ID + 1if there are more than 1 hero', () => {
        const heroes = [
            {id: 1, name: 'Red'},
            {id: 2, name: 'Blue'}
        ];
        const heroIDs = service.genId(heroes);
        expect(heroIDs).toEqual(3);
    });

    it('should return highest ID + 1 if there is only 1 hero', () => {
        const heroes = [
            {id: 1, name: 'Red'}
        ];
        const heroIDs = service.genId(heroes);
        expect(heroIDs).toEqual(2);
    });

    it('should return ID = 11 if there are no heroes', () => {
        const heroes = [];
        const heroIDs = service.genId(heroes);
        expect(heroIDs).toEqual(11);
    });
});
