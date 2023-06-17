import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components for routing
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ToolsWeUseComponent } from './tools-we-use/tools-we-use.component';
import { OurApproachComponent } from './our-approach/our-approach.component';
import { IndustriesComponent } from './industries/industries.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'services', component: ServicesComponent },
//   { path: 'projects', component: ProjectsComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '**', redirectTo: '/home' } // Redirect to home for any other route
// ];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent, children: [
    // { path: 'custom-applications', component: CustomApplicationsComponent },
    // { path: 'product-design-development', component: ProductDesignDevelopmentComponent },
    // ... Add other service-related routes
  ]},
  { path: 'industries', component: IndustriesComponent, children: [
    // { path: 'travel-movement', component: TravelMovementComponent },
    // { path: 'healthcare', component: HealthcareComponent },
    // ... Add other industry-related routes
  ]},
  { path: 'our-approach', component: OurApproachComponent },
  { path: 'tools-we-use', component: ToolsWeUseComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'contact-us', component: ContactComponent },
  // ... Add other routes for different pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
