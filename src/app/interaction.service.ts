import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _teacherMessageScore = new Subject<string>();
  teacherMessage$ = this._teacherMessageScore.asObservable();
  constructor() { }

  sendMessage(message: string) {
    this._teacherMessageScore.next(message);
  }
}
