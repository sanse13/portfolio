import { Component } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {}
