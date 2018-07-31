import { Component, OnInit, Output } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew = true;
  action: string;

  constructor(private logService: LogService) {}

  ngOnInit() {
    // Subscribe to the selected log observable

    this.logService.selectedLog.subscribe(log => {
      this.action = 'Add a Log';
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
        this.action = 'Update Log';
      }
      console.log(log);
    });
  }

  onSubmit() {
    // Check if log is new
    if (this.isNew) {
      // create new log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      };
      // Add Log
      this.logService.addLog(newLog);
    } else {
      // Create log to be updated
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };
      // Update log
      this.logService.updateLog(updLog);
    }

    // Clear the state
    this.clearState();
  }

  clearState() {
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = '';
    this.action = 'Add a Log';
    this.logService.clearState();
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
