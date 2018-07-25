import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated Components',
        date: new Date('07/25/2018 15:32:24')
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('07/25/2018 15:41:32')
      },
      {
        id: '3',
        text: 'Added Logs Component',
        date: new Date('07/25/2018 15:56:17')
      }];
   }

   getLogs() {
     return this.logs;
   }
}
