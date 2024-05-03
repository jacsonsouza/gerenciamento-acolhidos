import { ContactsComponent } from './components/contacts/contacts.component';
import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'appointments', component: FormComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
 
];
