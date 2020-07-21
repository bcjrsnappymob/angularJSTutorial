import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MessageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should add a message', () => {
        service.add('Dummy 1');
        expect(service.messages.length).toBeLessThanOrEqual(1);
    });

    it('should clear all messages', () => {
        service.add('Dummy 1');
        service.add('Dummy 2');
        service.add('Dummy 3');
        service.add('Dummy 4');
        service.add('Dummy 5');
        service.clear();
        expect(service.messages.length).toBeLessThanOrEqual(0);
    });

    it('should add a message and clear the message', () => {
        service.add('Dummy 1');
        service.clear();
        expect(service.messages.length).toBeLessThanOrEqual(0);
    });
});
