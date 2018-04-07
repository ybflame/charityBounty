import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { DonateToCtaComponent } from './donate-to-cta/donate-to-cta.component';
import { FullfillCtaComponent } from './fullfill-cta/fullfill-cta.component';
import { SubmitFullfillmentComponent } from './submit-fullfillment/submit-fullfillment.component';
import { ApproveWorkComponent } from './approve-work/approve-work.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CallToActionComponent,
    DonateToCtaComponent,
    FullfillCtaComponent,
    SubmitFullfillmentComponent,
    ApproveWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
