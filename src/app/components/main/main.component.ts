import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  deck: any[] = [
    "2C.png", "2D.png", "2H.png", "2S.png", "3C.png", "3D.png", "3H.png", "3S.png",
    "4C.png", "4D.png", "4H.png", "4S.png", "5C.png", "5D.png", "5H.png", "5S.png",
    "6C.png", "6D.png", "6H.png", "6S.png", "7C.png", "7D.png", "7H.png", "7S.png",
    "8C.png", "8D.png", "8H.png", "8S.png", "9C.png", "9D.png", "9H.png", "9S.png",
    "10C.png", "10D.png", "10H.png", "10S.png", "AC.png", "AD.png", "AH.png", "AS.png",
    "JC.png", "JD.png", "JH.png", "JS.png", "QC.png", "QD.png", "QH.png", "QS.png",
    "KC.png", "KD.png", "KH.png", "KS.png"
  ];

  randomCard1 = this.deck[Math.floor(Math.random() * this.deck.length)];
  randomCard2 = this.deck[Math.floor(Math.random() * this.deck.length)];
  randomCard3 = this.deck[Math.floor(Math.random() * this.deck.length)];
  randomCard4 = this.deck[Math.floor(Math.random() * this.deck.length)];

  pickedCards: any[] = [
    this.randomCard1, this.randomCard1, this.randomCard2, this.randomCard2,
    this.randomCard3, this.randomCard3, this.randomCard4, this.randomCard4
  ];

  reOrderCards: any[] = this.pickedCards.sort(function (a, b) { return 0.5 - Math.random() });

  row1: any[] = this.reOrderCards.slice(0, 4);
  row2: any[] = this.reOrderCards.slice(4);

  /* pickingCards() {
    for (let i = 0; i <= 4; i++) {
      this.pickedCards.push(this.randomCard);
    }
  } */

  constructor() {

  }

  ngOnInit() {
  }

}
