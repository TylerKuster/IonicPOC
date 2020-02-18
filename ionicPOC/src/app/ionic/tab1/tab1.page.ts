import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TerminalService } from 'src/app/terminal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  expanded = false
  cardData = []
  expandableCard = []

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private terminalService: TerminalService
    ) {}

  ngOnInit() {
    this.cardData = this.terminalService.getTerminals()
    this.expandableCard = this.cardData[0]
  }

  shouldExpand() {
    this.expanded = !this.expanded
  }
}
