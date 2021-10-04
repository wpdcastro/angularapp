import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  
  nome_bebida = "";
  bebidas15 = ["Incêndio região sul", "Incêndio região sul"];

  add() { 
    let n = this.nome_bebida;
    this.bebidas15.push(this.nome_bebida);
    this.nome_bebida = "";
  }

  remove($lista: any) { 
    this.bebidas15.splice($lista, 1);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
