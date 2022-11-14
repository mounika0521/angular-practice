import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponentComponent } from './firstcomponent/first-child-component/first-child-component.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { FormsComponent } from './forms/forms.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';

const routes: Routes = [
  {path:'first',component:FirstcomponentComponent},
  {path:'first-child',component:FirstChildComponentComponent},
  {path:'second',component:SecondcomponentComponent},
  {path:'third',component:ThirdcomponentComponent},
  {path:'form',component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
