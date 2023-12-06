import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-details-lmc',
  templateUrl: './details-lmc.component.html',
  styleUrls: ['./details-lmc.component.scss']
})
export class DetailsLmcComponent {

    productionPlanList:any=[];
    slotList: any[] = [];
}
