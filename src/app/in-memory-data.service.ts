import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IEmployee } from './employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees: IEmployee[] = [
      {
        id: 1,
        pronoun: 'He',
        firstName: 'Jerry',
        lastName: 'Abatgis',
        nickname: '',
        pronounciation: 'JEHR-REE',
        jobTitle: 'Son',
        toc: 'Potential new client',
        role: 'RP',
        status: 'available'
      },
      {
        id: 2,
        pronoun: 'He',
        firstName: 'Tim',
        lastName: 'Heidecker',
        nickname: 'Timmy',
        pronounciation: '',
        jobTitle: 'Comedian',
        toc: 'MISC',
        role: '',
        status: 'unavailable'
      },
      {
        id: 3,
        pronoun: 'He',
        firstName: 'Eric',
        lastName: 'Wareheim',
        nickname: 'Rick rick rick rick',
        pronounciation: '',
        jobTitle: 'Comedian',
        toc: 'Current Clients',
        role: 'Billing',
        status: 'unavailable'
      }
    ];
    return {employees};
  }
}
