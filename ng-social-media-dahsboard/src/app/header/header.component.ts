import { Component } from '@angular/core';
import 'hammerjs';
import { ThemeChangerService } from 'src/shared/theme-changer.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    color = 'indigo';
    checked = false;
    disabled = false;
    darkModeIsOn;
    constructor(public themeChangerService: ThemeChangerService) {}
    ngOnInit() {
        this.themeChangerService.darkModeIsOn.subscribe((v) => {
            this.darkModeIsOn = v;
            console.log(this.darkModeIsOn);
        });
    }
    changeTheme() {
        this.themeChangerService.changeTheme();
    }
    slideToggleChange() {}
}
