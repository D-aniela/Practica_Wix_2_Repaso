import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ElComponent } from './components/products/el/el.component';
import { EllaComponent } from './components/products/ella/ella.component';
import { NinosComponent } from './components/products/ninos/ninos.component';
import { BebeComponent } from './components/products/bebe/bebe.component';

const Rutas: Routes = [
    {path: '', component: HomeComponent},
    {path: 'el', component: ElComponent},
    {path: 'ella', component: EllaComponent},
    {path: 'ninos', component: NinosComponent},
    {path: 'bebe', component: BebeComponent}
]

export const APP_ROUTES = RouterModule.forRoot(Rutas);