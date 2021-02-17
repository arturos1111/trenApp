import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from '@tren-app/shared/core';
import { LandingPageComponent } from './landing-page.component';

const landingPageRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(landingPageRoutes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
landingPageRoutes;
