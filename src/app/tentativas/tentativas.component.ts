import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  private coracaoVazio: string = "../../assets/coracao_vazio.png";
  private caracaoCheio: string = "../../assets/coracao_cheio.png";
  
  constructor() { }

  ngOnInit() {
  }

}
