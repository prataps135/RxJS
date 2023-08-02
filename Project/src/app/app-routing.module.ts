import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { ListComponent } from './observables/list/list.component';
import { FromEventComponent } from './observables/from-event/from-event.component';

const routes: Routes = [
  {
    path: 'promise', component: PromiseComponent
  },
  {
    path: 'observables', component: ObservablesComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'from-event', component: FromEventComponent }
    ]
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
