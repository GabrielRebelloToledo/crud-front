import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TituloComponent } from './titulo.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TituloComponent
    ],
    exports: [
        TituloComponent
    ]
})
export class TituloModule{}