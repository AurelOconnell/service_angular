import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  public cocktails: Array<object> = [
    {name: "cocktail1", price: "7€", image: "url_image1"},
    {name: "cocktail2", price: "7€", image: "url_image2"},
    {name: "cocktail3", price: "7€", image: "url_image3"},
  ];

  public getCocktails(): Array<object> {
    return this.cocktails;
  }
}
