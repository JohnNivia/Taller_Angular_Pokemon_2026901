import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService, Pokemon } from './pokemon.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly pokemonService = inject(PokemonService);

  protected readonly query = signal('');
  protected readonly pokemon = signal<Pokemon | null>(null);
  protected readonly loading = signal(false);
  protected readonly error = signal('');

  buscar(): void {
    const term = this.query().trim();
    if (!term) {
      this.error.set('Escribe el nombre de un Pokémon.');
      this.pokemon.set(null);
      return;
    }

    this.loading.set(true);
    this.error.set('');

    this.pokemonService.getPokemon(term).subscribe({
      next: (data) => {
        this.pokemon.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.pokemon.set(null);
        this.error.set(`No se encontró ningún Pokémon con "${term}".`);
        this.loading.set(false);
      },
    });
  }
}
