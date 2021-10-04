import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infochamas',
  templateUrl: './infochamas.component.html',
  styleUrls: ['./infochamas.component.css']
})
export class InfochamasComponent implements OnInit {

  constructor() { 
    
  }
  
  ngOnInit(): void {
  }

  notifications = ["Alerta de foco de incêndio na região de São Paulo, fique atento.", "Alerta de foco de incêndio na região de Marília, fique atento.", "Alerta de foco de incêndio na região de Curitiba, fique atento."];
  phone_area = "";
  phone = "";

  add() {
    this.phone;
    this.phone_area;

    // criar objeto
  }

}
