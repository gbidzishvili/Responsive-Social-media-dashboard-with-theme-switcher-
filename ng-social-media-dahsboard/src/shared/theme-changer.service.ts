import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeChangerService {
  darkModeIsOn = new BehaviorSubject(false);
  constructor() {}
  changeTheme() {
    this.darkModeIsOn.next(!this.darkModeIsOn.getValue());
  }
}
