import { Component } from '@angular/core';
import {Deeplinks} from "@awesome-cordova-plugins/deeplinks/ngx";
import {Platform} from "@ionic/angular";
import { StatusBar, Style } from '@capacitor/status-bar';
import {alert} from "ionicons/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isAlertOpen = false;
  alertButtons = ['Action'];
  message = 'deep link message :D'

  constructor(
    private platform: Platform,
    private deepLinks: Deeplinks
  ) {
    this.platform.ready().then(() => {
      console.log("platform ready")
      this.deepLinks.route({
        "/" : {}
      }).subscribe((match) => {
        this.message = JSON.stringify(match)
        this.setOpen(true)
        console.log("match: ", match)
      },(noMatch)=> {
        this.message = JSON.stringify(noMatch)
        this.setOpen(true)
        console.log("no match: ", noMatch)
      })
    })
  }


  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
