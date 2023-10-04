import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    loadChildren: () => import('../app/app.module').then(m => m.AppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
