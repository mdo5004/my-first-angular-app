import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-username-input',
    templateUrl: './username-input.component.html',
    styleUrls: ['./username-input.component.css']
})
export class UsernameInputComponent implements OnInit {
    username: String = '';
    constructor() { }

    ngOnInit() {
    }

    usernameIsValid() {
        return (this.username.length > 0);
    }
    onButtonClick() {
        this.username = '';
    }
}
