import { Component } from '@angular/core';
import { ThemeChangerService } from 'src/shared/theme-changer.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
    darkModeIsOn;
    constructor(public themeChangerService: ThemeChangerService) {}
    ngOnInit() {
        this.themeChangerService.darkModeIsOn.subscribe((v) => {
            this.darkModeIsOn = v;
            console.log(this.darkModeIsOn);
        });
    }
}
