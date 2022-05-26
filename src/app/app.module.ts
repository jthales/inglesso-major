import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiLoaderConfig, NgxUiLoaderModule, POSITION, SPINNER } from 'ngx-ui-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'rgba(12,80,219,0.98)',
  bgsOpacity: 1,
  bgsPosition: POSITION.bottomRight,
  bgsSize: 40,
  bgsType: SPINNER.cubeGrid,
  fgsColor: 'rgba(12,80,219,0.98)',
  fgsPosition: POSITION.centerCenter,
  fgsType: SPINNER.threeStrings,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ShareButtonsModule,
    ShareIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
