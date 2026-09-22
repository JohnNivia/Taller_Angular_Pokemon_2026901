import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

export interface PokemonTarjeta {
  imagen: string;
  tipo: string;
  baseExperience: string;
  esFavorito?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonStorage {

  private http = inject(HttpClient);
  private readonly STORAGE_KEY = 'equipo_pokemon_registrado';
  misPokemons = signal<PokemonTarjeta[]>([]);

  constructor() {
    this.cargarDesdeStorage();
  }

  private cargarDesdeStorage(): void {
    const data = localStorage.getItem(this.STORAGE_KEY);

    if (data) {
      this.misPokemons.set(JSON.parse(data));
    }
  }

  buscarEnApi(nombreId: string) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${nombreId}`);
  }

  guardarPokemon(nuevo: PokemonTarjeta){
    const actualizados = [...this.misPokemons(), nuevo];
    this.misPokemons.set(actualizados);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(actualizados))
  }
  actualizarPokemon{

  }

  eliminarPokemon{

  }

  export class ResaltarPokemon{
    
  }
}

