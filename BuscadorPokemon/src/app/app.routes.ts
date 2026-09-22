import { Routes } from '@angular/router';
import { RegistroUsuario } from './components/registro-usuario/registro-usuario'; 
import { BuscadorPokemon } from './components/buscador-pokemon/buscador-pokemon'; 
import { PsyduckComponent } from './components/pokemon/psyduck.component/psyduck.component';
import { GrowlitheComponent } from './components/pokemon/growlithe.component/growlithe.component';
import { BulbasaurComponent } from './components/pokemon/bulbasaur.component/bulbasaur.component';
import { MachopComponent } from './components/pokemon/machop.component/machop.component';
import { GastlyComponent } from './components/pokemon/gastly.component/gastly.component';
import { JolteonComponent } from './components/pokemon/jolteon.component/jolteon.component';
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