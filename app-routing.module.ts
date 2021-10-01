import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './src/app/first/first.component';
import { HelloComponent } from './src/app/hello.component';
import { PageNotFoundComponent } from './src/app/page-not-found/page-not-found.component';
import { SecondComponent } from './src/app/second/second.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'helo', component: HelloComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [],
})
export class AppRoutingModule {}
