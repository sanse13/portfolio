import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent implements OnInit {
  displayedTextArray: string[] = [];
  bioText = 'Adri is a software engineer with over 3 years of experience in developing web and mobile applications. He is skilled in Javascript, Typescript, Angular and Node.js.';
  indexToShow = 0;

  ngOnInit(): void {
    this.displayedTextArray = this.bioText.split(' ');
    this.typeWriter();
  }

  typeWriter() {
    if (this.indexToShow < this.displayedTextArray.length) {
      this.indexToShow++;
      setTimeout(() => this.typeWriter(), 50);
    }
  }

}
