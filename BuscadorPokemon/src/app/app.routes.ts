import { Routes } from '@angular/router';
import { RegistroUsuario } from './components/registro-usuario/registro-usuario'; 
import { BuscadorPokemon } from './components/buscador-pokemon/buscador-pokemon'; 
import { PsyduckComponent } from './components/pokemon/psyduck.component/psyduck.component';
import { GrowlitheComponent } from './components/pokemon/growlithe.component/growlithe.component';
import { BulbasaurComponent } from './components/pokemon/bulbasaur.component/bulbasaur.component';
import { MachopComponent } from './components/pokemon/machop.component/machop.component';
import { GastlyComponent } from './components/pokemon/gastly.component/gastly.component';
import { JolteonComponent } from './components/pokemon/jolteon.component/jolteon.component';
import { PokemonDetalles } from './components/pokemon-detalles/pokemon-detalles';
import { PokemonLista } from './components/pokemon-lista/pokemon-lista';
export const routes: Routes = [
    { path: '', redirectTo: 'registro', pathMatch: 'full' },
    { path: 'registro', component: RegistroUsuario },
    { path: 'buscador', component: BuscadorPokemon },

    { path: 'psyduck_manual', component: PsyduckComponent },
    { path: 'growlithe_manual', component: GrowlitheComponent },
    { path: 'bulbasaur_manual', component: BulbasaurComponent },
    { path: 'machop_manual', component: MachopComponent },
    { path: 'gastly_manual', component: GastlyComponent },
    { path: 'jolteon_manual', component: JolteonComponent },
    { path: 'pokemon_lista', component: PokemonLista},
    { path: 'pokemon_detalles', component: PokemonDetalles},
    { path: '**', redirectTo: 'registro' },
];