import { Component, Input } from '@angular/core';

@Component({
    selector: 'paciente-view',
    templateUrl: './paciente-view.component.html'
})
export class PacienteViewComponent{

    @Input() paciente_nome = '';
    @Input() leito = '';
    @Input() decubito = '';
    @Input() data = '';
}