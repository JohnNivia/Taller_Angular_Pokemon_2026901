import { Routes } from '@angular/router';
import { RegistroUsuario } from './components/registro-usuario/registro-usuario'; 
import { BuscadorPokemon } from './components/buscador-pokemon/buscador-pokemon'; 
import { PsyduckComponent } from './components/psyduck/psyduck.component/psyduck.component';
import { GrowlitheComponent } from './components/growlithe/growlithe.component/growlithe.component';
import { BulbasaurComponent } from './components/bulbasaur/bulbasaur.component/bulbasaur.component';
import { MachopComponent } from './components/machop/machop.component/machop.component';
import { GastlyComponent } from './components/gastly/gastly.component/gastly.component';
import { JolteonComponent } from './components/jolteon/jolteon.component/jolteon.component';
export const routes: Routes = [
    { path: '', redirectTo: 'registro', pathMatch: 'full' },
    { path: 'registro', component: RegistroUsuario },
    { path: 'buscador', component: BuscadorPokemon },
    { path: 'pokemon/psyduck', component: PsyduckComponent },
    { path: 'pokemon/growlithe', component: GrowlitheComponent },
    { path: 'pokemon/bulbasaur', component: BulbasaurComponent },
    { path: 'pokemon/machop', component: MachopComponent },
    { path: 'pokemon/gastly', component: GastlyComponent },
    { path: 'pokemon/jolteon', component: JolteonComponent },
    { path: '**', redirectTo: 'registro' }
];