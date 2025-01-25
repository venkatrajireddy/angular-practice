// filepath: /c:/Project/angular/angular-practice/src/app/in-memory-data.service.ts
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1234, name: 'Venkat', age: 31, password: 'password' },
      { id: 1235, name: 'Susan Que', age: 45, eyeColor: 'hazel' },
      { id: 1236, name: 'John Doe', age: 53, eyeColor: 'brown' }
    ];
    return { users };
  }
}