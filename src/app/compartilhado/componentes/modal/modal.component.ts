import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent{
   
    @Input() titleModal = '';
    @Input() idModal = '';
    @Input() titleBtn1: string = '';
    @Input() titleBtn2: string = '';
    @Output() btn1: EventEmitter<any> = new EventEmitter();
    @Output() btn2: EventEmitter<any> = new EventEmitter();

}