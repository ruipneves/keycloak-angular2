import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AuthGuard } from './_guards/auth.guard';
import { KeycloakService } from './services/keycloak.service';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { MainComponent } from './components/main.component';
import { ProtectedComponent } from './components/protected.component';

import { KeycloakHttp } from './http/keycloak.http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, MainComponent, ProtectedComponent ],
  providers: [ AuthGuard, KeycloakService {
      provide: Http,
      useFactory:
      (
        backend: XHRBackend,
        defaultOptions: RequestOptions,
        keycloakService: KeycloakService
      ) => new KeycloakHttp(backend, defaultOptions, keycloakService),
      deps: [XHRBackend, RequestOptions, KeycloakService]
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
