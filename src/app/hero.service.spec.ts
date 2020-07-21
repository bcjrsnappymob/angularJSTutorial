import { of } from 'rxjs';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';

describe('HeroService', () => {

    let heroService: HeroService;
    let httpClientSpy: { get: jasmine.Spy};
    const messageService =  new MessageService();

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        heroService = new HeroService( <any> httpClientSpy, messageService);
    });

    it('should return a list of heroes through HttpClient', () => {
        const expectedHeroes: Hero[] = [
            { id: 1, name: 'Placeholder' }
        ];

        httpClientSpy.get.and.returnValue(of(expectedHeroes));

        heroService.getHeroes().subscribe(
            heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
            fail
        );

        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

    });

    it('should return a specific hero through HttpClient with a Hero ID', () => {
        const expectedHero: Hero = { id: 1, name: 'Placeholder'};
        const heroID = 1;
        httpClientSpy.get.and.returnValue(of(expectedHero));

        heroService.getHero(heroID).subscribe(
            hero => expect(hero).toEqual(expectedHero, 'Expected Hero'),
            fail
        );
    });

});
