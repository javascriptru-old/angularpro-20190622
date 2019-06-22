import { NgModule }       from '@angular/core';
import { BrowserModule, BrowserTransferStateModule }  from '@angular/platform-browser';
import { TransferHttpCacheModule }  from '@nguniversal/common';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent }         from './app.component';
import { HomeComponent } from './home.component';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
   // { path: 'lazy', loadChildren: './lazy.module#LazyModule' },
  { path: 'lazy', loadChildren : () => import('./lazy.module').then(m => m.LazyModule) },
];


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ssr-app' }),
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
