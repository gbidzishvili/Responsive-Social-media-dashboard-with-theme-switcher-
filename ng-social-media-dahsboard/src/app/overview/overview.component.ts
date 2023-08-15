import { Component } from '@angular/core';
import { ThemeChangerService } from 'src/shared/theme-changer.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
    darkModeIsOn;
    constructor(public themeChangerService: ThemeChangerService) {}
    ngOnInit() {
        this.themeChangerService.darkModeIsOn.subscribe((v) => {
            this.darkModeIsOn = v;
            console.log(this.darkModeIsOn);
        });
    }
}
