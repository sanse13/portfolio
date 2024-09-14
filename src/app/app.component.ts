import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProfileCardComponent,
    ResumeComponent,
    ResumeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
