import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logInIonic() {
    this.navCtrl.navigateRoot('/tabs/tab1')
  }

  logInBoot() {
    this.navCtrl.navigateRoot('/boot-tabs/tab1')
  }
}
