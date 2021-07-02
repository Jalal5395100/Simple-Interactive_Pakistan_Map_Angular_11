import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PakmapComponent } from './pakmap/pakmap.component';
import { UsmapComponent } from './usmap/usmap.component';

const routes: Routes = [
  { path:'usmap',
    component:UsmapComponent,
    data: { extraParameter: "usMap" },
  },
  { path:'pakmap',
    component:PakmapComponent,
    data: { extraParameter: "pakMap" },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
