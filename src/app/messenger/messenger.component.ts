import { Component, OnInit } from '@angular/core';
import { MessengerDataService } from '../messenger-data.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  contacts: any[] = [];
  selectedContact: any = null;

  constructor(private dataService: MessengerDataService) { }

  ngOnInit(): void {
    this.dataService.getContacts().subscribe(
      (data: any) => {
        this.contacts = data as any[];
      },
      (error: any) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }

  selectContact(contact: any): void {
    this.selectedContact = contact;
  }
}
