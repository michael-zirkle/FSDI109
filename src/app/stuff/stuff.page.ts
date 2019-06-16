import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Friend } from '../friend';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.page.html',
  styleUrls: ['./stuff.page.scss'],
})
export class StuffPage implements OnInit {
  friendName= '';
  friendList: Friend[] = [];

  constructor(private shared: SharedService, private data : DataService) { 
    var myUserName = this.shared.getUserName();

  this.data.getFriends().subscribe(list => {
    this.friendList = [];
    for(var i=0; i < list.length; i++){
      var f = list[i];
      if(f.user == myUserName){
        this.friendList.push(f);
        
      }
    }
  });

  }

  ngOnInit() {
  }

  register(){
    var friend = new Friend();
    friend.name = this.friendName;
    friend.user = this.shared.getUserName();
    this.data.saveFriend(friend);
    this.friendName = '';

  }

}
