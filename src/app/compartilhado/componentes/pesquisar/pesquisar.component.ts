import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pesquisar',
    templateUrl: './pesquisar.component.html'
})
export class PesquisarComponent{

    @Input() search : string = '';
    @Input() period : string = '';
    @Input() searchPlaceholder: string = '';
    @Output() btnSearch: EventEmitter<any> = new EventEmitter();
    periodo = {
        periodIni: Date,
        periodFim: Date
    }

    
}