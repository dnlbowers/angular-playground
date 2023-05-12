import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: "",
    component: DogsComponent
  },
  {
    path: "tables",
    component: TablesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
