import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TextService } from './text-service/text.service';
import { FooterComponent } from './footer/footer.component';
import { DatamuseComponent } from './datamuse/datamuse.component';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ControlPanelComponent,
    HeaderComponent,
    FooterComponent,
    DatamuseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TextService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
