import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main.component';
import { ProtectedComponent } from './components/protected.component';

import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'protected',
    component: ProtectedComponent,
    canActivate: [ AuthGuard ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
