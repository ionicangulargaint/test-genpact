//Core module import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//absolute import @abs configured for typescript

//shared module import
import { SharedModule } from './shared/shared.module';
//Data services
import { GetFinanceData } from './services/data.services';
// App component import
import { AppComponent } from './app.component';


    /**
     * main module which is going to be bootstraped first, as declared in main.ts to bootstrap first
     * @AppModule
     */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [GetFinanceData],
  bootstrap: [AppComponent]
})
export class AppModule { }
