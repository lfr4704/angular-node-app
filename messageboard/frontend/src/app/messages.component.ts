import { Component } from '@angular/core'

@Component({
	selector: 'messages',
	template:
		`<div *ngFor="let message of messages">
			<mat-card>{{message.text}} by: {{message.owner}}</mat-card>
		</div>

	`
})
export class MessagesComponent {
	messages = [{text:'some text', owner:'Tim'},{text:'other message', owner:'Jane'}];	
}