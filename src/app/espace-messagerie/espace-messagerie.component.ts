import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {TokenStorageService} from "../services/token-storage.service";
import {MessagesSpaceService} from "../services/messages-space.service";

@Component({
  selector: 'app-espace-messagerie',
  templateUrl: './espace-messagerie.component.html',
  styleUrls: ['./espace-messagerie.component.css']
})
export class EspaceMessagerieComponent implements OnInit {
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
  constructor(private userService: UserService, private messages_space: MessagesSpaceService, private tokenStorage: TokenStorageService) {
  }

  all_Comptable: any;

  ngOnInit(): void {
    this.getThreades();
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
              this.currentReciver = value.username;
              this.idReciever = value.id;
            })
          }
          else
            {
              this.getCurrentReciver();
            }
        })
    });

  }
  getCurrentReciver()
  {
  this.messages_space.getReceiverUsername(this.selectedReciver).subscribe(value => {this.currentReciver=value.username})
    }
  getThreades() {

    this.messages_space.getThreades().subscribe(value => {
      this.allThreades = value;
      console.log(value)
    })
  }

  createSujet() {

    this.messages_space.createThread(this.title).subscribe(value => {
      this.clicked_crate_conv = true;
      console.log(value);
      this.getThreades()
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
