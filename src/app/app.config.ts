// import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { routes } from './app.routes';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { fakeBackendInterceptor } from './help-backend/fake-backend.interceptor';
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),

//     // Routing
//     provideRouter(routes),

//     // Angular Material animations
//     provideAnimationsAsync(),
//     importProvidersFrom(BrowserAnimationsModule),

//     // HttpClient + Fake Backend
//     provideHttpClient(
//       withInterceptors([fakeBackendInterceptor])
//     )
//   ]
// };
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { fakeBackendInterceptor } from './help-backend/fake-backend.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(withInterceptors([fakeBackendInterceptor]))
  ]
};
