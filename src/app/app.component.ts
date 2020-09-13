import { Component, ElementRef , OnInit, ViewChild} from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* export class Restaurant    {
  constructor(public res: string,
              public ciu: string,
               ) {

  }
} */

export class AppComponent implements OnInit {
  title = 'guia-restaurantes';
  restaurantes: Restaurant[] = [];
  @ViewChild('restaurante') restaurante: ElementRef;
  @ViewChild('ciudad') ciudad: ElementRef;
  constructor() { }

  ngOnInit(): void {
    let rest = new Restaurant('El Soperito','La Victoria');
    this.restaurantes.push(rest);
  }
  
 addRestaurante(restaurante: string, ciudad:string){
  let rest = new Restaurant(restaurante,ciudad);

  if (restaurante.length < 1 ){
    console.log("Ingresa valor en Restaurante");
    alert("Ingresa valor en Restaurante");
      return;
  }

  if (ciudad.length <1){
   console.log("Ingresa valor en Ciudad");
    alert("Ingresa valor en Ciudad");
      return;
  }

  for (let a of this.restaurantes){
    if ( a.res == restaurante && a.ciu == ciudad)
      {
       console.log("Elementos Existentes");
       alert("Elementos Existentes");
        return;
      }
  };

  this.restaurantes.push(rest);
  console.log(this.restaurantes);
  this.restaurante.nativeElement.value = '';
  this.ciudad.nativeElement.value = '';
 }

 }
 
 class Restaurant    {
  constructor(public res: string,
              public ciu: string,
               ) {


  }
 
 }
