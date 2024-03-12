import { ApplicationConfig, Injectable, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './asses/i18n', '.json')
}

@Injectable({
  providedIn: 'root' ,
  // providers : [provideRouter(routes), provideHttpClient(), BrowserModule, CommonModule, 
  //   importProvidersFrom(HttpClientModule),
  //   importProvidersFrom(TranslateModule.forRoot({
  //     loader: {
  //       provide: TranslateModule,
  //       useFactory: HttpLoaderFactory,
  //       deps: [HttpClient]
  //     }
  //   }))]
})

// export const appConfig: ApplicationConfig = {
//   providers : [provideRouter(routes), provideHttpClient(), BrowserModule, CommonModule, 
//   importProvidersFrom(HttpClientModule),
//   importProvidersFrom(TranslateModule.forRoot({
//     loader: {
//       provide: TranslateModule,
//       useFactory: HttpLoaderFactory,
//       deps: [HttpClient]
//     }
//   }))]
// }

export class TranslatedataService {

  constructor() { }
}
