import { Component, OnInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent {

    getShiftText(): string {
        const currentHour = new Date().getHours();
        let shiftText = '';

        if (currentHour >= 6 && currentHour < 14) {
          shiftText = 'Shift FS : 06:00 to 14:00';
        } else if (currentHour >= 14 && currentHour < 22) {
          shiftText = 'Shift SS : 14:00 to 22:00';
        } else {
          shiftText = 'Shift NS : 22:00 to 06:00';
        }

        return shiftText;
      }
}
