import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastyModule } from 'ng2-toasty';
import { FormlyModule, FormlyBootstrapModule } from 'ng-formly';
import { FormlyConfig } from './ui/form/formly.config';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { LoopBackConfig } from './shared/sdk/index';
import { SDKBrowserModule } from './shared/sdk/index';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AppStoreModule } from './app.store';

import { TodoModule } from './todo/todo.module';
import { UiModule } from './ui/ui.module';
import { AuthModule } from './auth/auth.module';
import { NotificationsModule } from './notifications/notifications.module';
import { NoteModule } from './note/note.module';

import { FormService } from './ui/form/ui-form.service';
import { UIService } from './ui/ui.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(FormlyConfig),
    FormlyBootstrapModule,
    NgbModule.forRoot(),
    SDKBrowserModule.forRoot(),
    ToastyModule.forRoot(),

    AppRoutingModule,
    AppStoreModule,

    NoteModule,
    TodoModule,
    AuthModule,
    NotificationsModule,
    UiModule,
  ],
  exports: [
    ToastyModule,
  ],
  providers: [
    FormService,
    UIService,
    NgbActiveModal
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule {

  constructor() {
    const apiConfig = window['apiConfig'];

    LoopBackConfig.setBaseURL(apiConfig.baseUrl);
    LoopBackConfig.setApiVersion(apiConfig.version);
  }
}
