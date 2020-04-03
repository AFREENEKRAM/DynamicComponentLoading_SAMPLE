import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCompoModule } from 'src/myComponents/my-compo/my-compo.module';
import { LoadingCompoComponent } from './loading-compo/loading-compo.component';
import { DynamicCompo1Component } from './dynamic-compo1/dynamic-compo1.component';
import { DynamicCompo2Component } from './dynamic-compo2/dynamic-compo2.component';
import { HostDirective } from './host.directive';
import { appStoreProvider } from './mystore/app.store';
import rootReducer from './mystore/app.reducer';
import thunk from 'redux-thunk';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent,
    LoadingCompoComponent,
    DynamicCompo1Component,
    DynamicCompo2Component,
    HostDirective
  ],
  imports: [
    BrowserModule,
    MyCompoModule,
    NgReduxModule
  ],
  providers: [appStoreProvider],
  bootstrap: [AppComponent],
  entryComponents: [ 
    DynamicCompo1Component,
    DynamicCompo2Component]
})
export class AppModule {
  constructor(
    ngRedux : NgRedux<any>,
  
  ){
    ngRedux.configureStore(rootReducer, {}, [thunk], [])
  
  }
 }

