import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

/** Resultado limpio que consume el componente. */
export interface Pokemon {
  name: string;
  image: string;
}

/** Forma parcial de la respuesta cruda de la PokeAPI. */
interface PokeApiResponse {
  name: string;
  sprites: {
    front_default: string | null;
    other?: {
      ['official-artwork']?: {
        front_default: string | null;
      };
    };
  };
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  /**
   * Busca un Pokémon por nombre o id.
   * Devuelve el nombre y la mejor imagen disponible.
   */
  getPokemon(query: string): Observable<Pokemon> {
    const name = query.trim().toLowerCase();

    return this.http.get<PokeApiResponse>(`${this.baseUrl}/${name}`).pipe(
      map((res) => ({
        name: res.name,
        image:
          res.sprites.other?.['official-artwork']?.front_default ??
          res.sprites.front_default ??
          '',
      })),
    );
  }
}
