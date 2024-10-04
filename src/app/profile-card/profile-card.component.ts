import { Component } from '@angular/core';
import { TextTransitionDirective } from '../text-transition.directive';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [TextTransitionDirective],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  bioText =
    'Adri is a software engineer with over 3 years of experience in developing web and mobile applications. He is skilled in Javascript, Typescript, Angular and Node.js.';
}
