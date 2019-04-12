import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EstanciaComponent } from './movilidad/estancia/estancia.component';
import { IndexadaComponent } from './movilidad/indexada/indexada.component';
import { IntercambioComponent } from './movilidad/intercambio/intercambio.component';
import { InvestigadoresExternosComponent } from './movilidad/investigadores-externos/investigadores-externos.component';
import { ArticulosComponent } from './movilidad/articulos/articulos.component';
import { GestionComponent } from './movilidad/gestion/gestion.component';
import { ConsumirMovilidadService } from './services/consumir-movilidad.service';
import { HttpClientModule } from '@angular/common/http';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EstanciaComponent,
    IndexadaComponent,
    IntercambioComponent,
    InvestigadoresExternosComponent,
    ArticulosComponent,
    GestionComponent,
    ConvocatoriaComponent,
    



  ],
  providers: [ConsumirMovilidadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
