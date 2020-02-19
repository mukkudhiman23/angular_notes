import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PipeDemoComponent } from "./pipe-demo/pipe-demo.component";
import { SummaryPipe } from "./summary.pipe";
import { from } from "rxjs";
@NgModule({
  declarations: [AppComponent, PipeDemoComponent, SummaryPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
