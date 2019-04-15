//Core module import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//absolute import @abs configured for typescript

//shared module import
import { SharedModule } from '@abs/shared/shared.module';
//Data services
import { GetFinanceData } from '@abs/services/data.services';
// App component import
import { AppComponent } from '@abs/app.component';


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
