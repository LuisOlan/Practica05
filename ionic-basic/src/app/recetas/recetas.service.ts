import { Injectable } from '@angular/core';
import { Receta } from './receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1,
      nombre: 'Pizza',
      image: 'https://www.istockphoto.com/es/foto/pizza-de-pepperoni-cheesy-gm938742222-256696208',
      ingredientes: ["queso","salsa","peperoni","harina","especies","sal"]
    },
    {
      id: 2,
      nombre: 'Chop suey de pollo',
      image: 'https://www.istockphoto.com/es/foto/chop-suey-gm97481076-11752725',
      ingredientes: ['2 cucharadas de aceite de ajonjoli','1/2 cebolla fileteada',
      '1 diente de ajo picado finamente','2 zanahorias en tiras','2 tazas de Germen de soya',
      '1 calabaza cortada en tiras']
    },
    {
      id: 3,
      nombre: 'Pollo a la mexicana',
      image:'https://www.123rf.com/photo_53244643_arroz-con-pollo-a-la-mexicana-chicken-and-rice-dish-from-latin-america.html',
      ingredientes: ['1/2 cebolla asada','4 jitomates asados','2 dientes de ajo asados',
      '2 cucharadas de aceite de maiz','1/2 cebolla fileteada']
    },
    {
      id: 4,
      nombre: 'Paleta de fresa',
      image: 'https://www.istockphoto.com/es/foto/paletas-de-yogur-fresa-saludable-vista-a%C3%A9rea-en-m%C3%A1rmol-gm676616296-125560841',
      ingredientes: ['2 tazas de fresas congeladas','1/2 tazas de agua','1/2 taza de azucar',
      '8 palitos de madera para paleta','8 vasos de plastico'] 
    }
  ];
  constructor() { }

  getReceta(idReceta: number){
    return {...
      this.recetas.find((recetas: Receta)=>{
        return recetas.id === idReceta
      })
    };
  }

  getRecetas(){
    return [...this.recetas];
  }
}
