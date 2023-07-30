import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  {
    path: 'promise', component: PromiseComponent
  },
  {
    path: 'observables', component: ObservablesComponent
  },
  {
    path: '**', redirectTo: 'promise', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
