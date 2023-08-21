import { Component } from '@angular/core';
import { ThemeChangerService } from 'src/shared/theme-changer.service';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
    constructor(public themeChangerService: ThemeChangerService) {}
    changeTheme() {
        this.themeChangerService.changeTheme();
    }
}
