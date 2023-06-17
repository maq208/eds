import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import the AppRoutingModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ToolsWeUseComponent } from './tools-we-use/tools-we-use.component';
import { OurApproachComponent } from './our-approach/our-approach.component';
import { IndustriesComponent } from './industries/industries.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    BlogsComponent,
    ToolsWeUseComponent,
    OurApproachComponent,
    IndustriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add the AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
