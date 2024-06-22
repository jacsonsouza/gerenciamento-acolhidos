import { ContactsComponent } from './components/contacts/contacts.component';
import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth/auth.guard';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointments', component: FormComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jobs', component: JobsComponent },
  {
    path: 'appointments-list',
    component: AppointmentsListComponent,
    canActivate: [authGuard],
  },
];
