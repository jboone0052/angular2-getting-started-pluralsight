import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls:['star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
    constructor() { }

    @Input() rating: number;
    starWidth: number;

    ngOnInit() { }

    ngOnChanges() { 
        this.starWidth = this.rating * (86/5);
    }

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.ratingClicked.emit(`This rating ${this.rating} was clicked!`);
    }
}
