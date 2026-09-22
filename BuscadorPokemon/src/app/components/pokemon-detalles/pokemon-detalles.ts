import { Component, inject, OnInit,  } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { PokemonStorage} from '../../services/pokemon-storage';

@Component({
  selector: 'app-pokemon-detalles',
  imports: [RouterLink],
  templateUrl: './pokemon-detalles.html',
  styleUrl: './pokemon-detalles.css',
})
export class PokemonDetalles implements OnInit {
  private route = inject(ActivatedRoute);
  private pokeService= inject(PokemonStorage);
  pokemonData:any = null;
  cargando: boolean = true;

  ngOnInit(): void {
    const pokeName = this.route.snapshot.params['name'];
    this.pokeService.consultarPokemon(pokeName).subscribe({
      next: (data) =>{
        this.pokemonData = data;
        this.cargando= false;

      },
      error: (err) => {
        console.error('Se quemo esta vaina. No llego ningun dato. ', err)
        this.cargando = false;
      }
    });
  }
}
