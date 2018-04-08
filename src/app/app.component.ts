import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Skill} from './model/skill';
import {error} from 'selenium-webdriver';
import JavascriptError = error.JavascriptError;
import {MessagingService} from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message: any;
  title = 'My Profile';
  skillsCollection: AngularFirestoreCollection<Skill>;
  skill: Observable<Skill[]>;

  constructor(private db: AngularFirestore, private msgService: MessagingService) {
    this.skillsCollection = db.collection('Skills');
    this.skill = this.skillsCollection.valueChanges();
  }

  ngOnInit() {
    this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage;
  }

  getSkills(): Observable<Skill[]> {
    return this.skill;

  }


}
