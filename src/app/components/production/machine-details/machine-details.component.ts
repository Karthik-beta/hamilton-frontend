import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.scss']
})
export class MachineDetailsComponent {



    activityValues: number[] = [0, 100];

    machineList = [
        {
            plant: 'CHENNAI',
            shopfloor: 'SHOPFLOOR-1',
            assemblyline: 'ASSEMBLYLINE-1',
            machine_id: 'SG05-250T',
            state: 'ACTIVE',
            activity: 78
        },
        // {
        //     plant: 'CHENNAI',
        //     shopfloor: 'XYZ',
        //     assemblyline: 'TSE',
        //     machine_id: 'TSE-002',
        //     state: 'IDLE',
        //     activity: 32
        // },
        // {
        //     plant: 'CHENNAI',
        //     shopfloor: 'XYZ',
        //     assemblyline: 'TSE',
        //     machine_id: 'TSE-003',
        //     state: 'BREAKDOWN',
        //     activity: 87
        // }
    ]



}
