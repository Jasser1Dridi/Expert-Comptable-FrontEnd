import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {MessagesSpaceService} from "../services/messages-space.service";
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-espace-mesagerie-comptable',
  templateUrl: './espace-mesagerie-comptable.component.html',
  styleUrls: ['./espace-mesagerie-comptable.component.css']
})
export class EspaceMesagerieComptableComponent implements OnInit {

  clicked_crate_conv = false;
  sujet: string='';
  selectedReciver: number = 0;
  title = '';
  allThreades: any;
  messages: any;
  currentThread: any;
  currentReciver: string = "";
  idReciever: number = 0;
  RecieverUserName:string='';
  constructor(private userService: UserService, private messages_space: MessagesSpaceService, private tokenStorage: TokenStorageService)
  {
    this.getThreades();
  }

  all_Comptable: any;

  ngOnInit(): void {
    this.messages_space.getList_All_Comptable().subscribe(value => {
      this.all_Comptable = value;
      console.log(value)
    });
  }

  getMessages(thread: any)
  {
    this.currentThread = thread;
    this.messages_space.getMessages(this.currentThread.id).subscribe(value1 => {
      this.messages = value1
      this.messages_space.existReceiver(this.currentThread.id).subscribe(
        value =>
        {
          if(value==true)
          {
            this.messages_space.getReciverId(this.currentThread.id).subscribe(async value => {
              this.messages_space.getSender(this.currentThread.id).subscribe(value => {this.currentReciver=value.username})
              this.idReciever = value.id;
            })
          }
          else
          {
            this.messages_space.getSender(this.currentThread.id).subscribe(value => {this.currentReciver=value.username})          }
        })
    });
  }

  getThreades() {

    this.messages_space.getThreadesComptable().subscribe(value => {

      this.allThreades = value;
      console.log(value)
    })
  }



  submit() {
    console.log(this.currentThread)
    let threadId = this.currentThread.id;
    console.log(this.sujet);

    this.messages_space.existReceiver(threadId).subscribe(
      value =>
      {
        if(value == true)
        {
          this.messages_space.getReciverId(threadId).subscribe(async value => {
            this.RecieverUserName= value.username;
            this.idReciever = value.id;
            this.messages_space.saveMessage(this.sujet, threadId, this.idReciever).subscribe(
              value => {
                console.log(value);
                this.messages_space.getMessages(threadId).subscribe(value => {
                  this.messages = value
                })})})
        }
        else
        {
          console.log(this.selectedReciver);
          this.messages_space.saveMessage(this.sujet, threadId, this.selectedReciver).subscribe(
            value => {
              console.log(value);
              this.messages_space.getMessages(threadId).subscribe(value => {
                this.messages = value
              })})
        }
      })
  }
}
