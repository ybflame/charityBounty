import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApproveWorkComponent } from './approve-work/approve-work.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { DonateToCtaComponent } from './donate-to-cta/donate-to-cta.component';
import { FullfillCtaComponent } from './fullfill-cta/fullfill-cta.component';
import { SubmitFullfillmentComponent } from './submit-fullfillment/submit-fullfillment.component';

const routes: Routes = [
  { path: 'cta', component: CallToActionComponent},
  { path: 'donate', component: DonateToCtaComponent},
  { path: 'fulfill', component: FullfillCtaComponent},
  { path: 'submitFulfillment', component: SubmitFullfillmentComponent},
  { path: 'approve', component: ApproveWorkComponent},
  { path: '', redirectTo: '/cta', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }

