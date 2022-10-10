import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';

// Modulo personalizado
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar locale de la App
import localEs from '@angular/common/locales/es-US';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-US' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
