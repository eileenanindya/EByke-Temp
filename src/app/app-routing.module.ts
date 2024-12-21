import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'set-up-profile',
    loadChildren: () => import('./set-up-profile/set-up-profile.module').then( m => m.SetUpProfilePageModule)
  },
  {
    path: 'rental',
    loadChildren: () => import('./rental/rental.module').then( m => m.RentalPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'mapsbaterai',
    loadChildren: () => import('./mapsbaterai/mapsbaterai.module').then( m => m.MapsbateraiPageModule)
  },  {
<<<<<<< HEAD
    path: 'reviewsummary',
    loadChildren: () => import('./reviewsummary/reviewsummary.module').then( m => m.ReviewsummaryPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
  },

=======
    path: 'afterpayment',
    loadChildren: () => import('./afterpayment/afterpayment.module').then( m => m.AfterpaymentPageModule)
  },
  {
    path: 'historytransaksi',
    loadChildren: () => import('./historytransaksi/historytransaksi.module').then( m => m.HistorytransaksiPageModule)
  },

<<<<<<< HEAD
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'set-up-profile',
    loadChildren: () => import('./set-up-profile/set-up-profile.module').then( m => m.SetUpProfilePageModule)
  },
  {
    path: 'rental',
    loadChildren: () => import('./rental/rental.module').then( m => m.RentalPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'mapsbaterai',
    loadChildren: () => import('./mapsbaterai/mapsbaterai.module').then( m => m.MapsbateraiPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
>>>>>>> 19db8cf6d843f5092d6583f502d84a28aa668561
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
=======
>>>>>>> a61b581e37762846cbd8a6dd77ee979d0d632fde
>>>>>>> 19db8cf6d843f5092d6583f502d84a28aa668561
