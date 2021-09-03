import { NgModule } from '@angular/core';

import { PacienteViewComponent } from './paciente-view.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PacienteViewComponent],
    imports: [CommonModule],
    exports: [PacienteViewComponent]
})
export class PacienteViewModule{

}