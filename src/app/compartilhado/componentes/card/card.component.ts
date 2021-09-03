import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './card.component.html'
})
export class CardComponent{

    @Input() titleCard: string = '';
    @Input() url: string = '';
    @Input() description: string = '';
}