import { Injectable } from '@angular/core';

export interface Cocktail {
  name: string;
  price: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  public cocktails: Array<Cocktail> = [
    {name: "cocktail1", price: "7€", image: "url_image1"},
    {name: "cocktail2", price: "7€", image: "url_image2"},
    {name: "cocktail3", price: "7€", image: "url_image3"},
  ];

  public getCocktails(): Array<Cocktail> {
    return this.cocktails;
  }
}
