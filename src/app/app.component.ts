import { FilterComponent } from './components/filter/filter.component';
import { Component, OnInit } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { RouterOutlet } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PartnershipsComponent } from './components/partnerships/partnerships.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ContactsComponent, FooterComponent, AboutComponent,JobsComponent,PartnershipsComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  
}
