import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { APP_ROUTES } from '@tren-app/shared/core';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.landingPage.path,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTES.landingPage.path,

    loadChildren: () =>
      import('@tren-app/landing-page').then(
        (module) => module.LandingPageModule
      ),
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.page_not_found.path,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
