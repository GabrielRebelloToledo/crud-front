import { NgModule } from '@angular/core';

import { PesquisarComponent } from './pesquisar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PesquisarComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        PesquisarComponent
    ]
})
export class PesquisarModule{}