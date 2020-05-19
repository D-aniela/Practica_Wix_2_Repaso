import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ElComponent } from './components/products/el/el.component';
import { EllaComponent } from './components/products/ella/ella.component';
import { NinosComponent } from './components/products/ninos/ninos.component';
import { BebeComponent } from './components/products/bebe/bebe.component';
import { ZapateriaComponent } from './components/products/zapateria/zapateria.component';
import { SobreNosotrosComponent } from './components/Nosotros/sobre-nosotros/sobre-nosotros.component';
import { InfoComponent } from './components/info/info.component';

const Rutas: Routes = [
    {path: '', component: HomeComponent},
    {path: 'el', component: ElComponent},
    {path: 'ella', component: EllaComponent},
    {path: 'ninos', component: NinosComponent},
    {path: 'bebe', component: BebeComponent},
    {path: 'zapateria', component: ZapateriaComponent},
    {path: 'nosotros', component: SobreNosotrosComponent},
    {path: 'home', component: HomeComponent},

    {path: 'info/:id', component: InfoComponent}
]

export const APP_ROUTES = RouterModule.forRoot(Rutas);