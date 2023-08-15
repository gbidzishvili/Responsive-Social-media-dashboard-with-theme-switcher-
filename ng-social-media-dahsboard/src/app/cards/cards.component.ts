import { Component } from '@angular/core';
import { ThemeChangerService } from 'src/shared/theme-changer.service';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
    darkModeIsOn;
    constructor(public themeChangerService: ThemeChangerService) {}
    ngOnInit() {
        this.themeChangerService.darkModeIsOn.subscribe((v) => {
            this.darkModeIsOn = v;
            console.log(this.darkModeIsOn);
        });
    }
}
