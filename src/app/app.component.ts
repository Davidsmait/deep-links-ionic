import { Component } from '@angular/core';
import {Deeplinks} from "@awesome-cordova-plugins/deeplinks/ngx";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private deepLinks: Deeplinks) {}
}
