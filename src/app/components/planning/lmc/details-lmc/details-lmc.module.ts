import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DetailsLmcComponent } from '../details-lmc/details-lmc.component';

import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { InputDemoModule } from 'src/app/demo/components/uikit/input/inputdemo.module';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';




@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        SplitButtonModule,
        TableModule,
        InputDemoModule,
        InputTextModule,
        DialogModule,
    ],
    declarations: [

    ],
    // exports: [ViewLmcComponent]
})
export class DetailsLmcModule { }
