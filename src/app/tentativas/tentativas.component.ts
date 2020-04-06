import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  private coracaoVazio: string = "../../assets/coracao_vazio.png";
  private caracaoCheio: string = "../../assets/coracao_cheio.png";
  
  private coracoes: Array<Coracao> = [
    new Coracao(true, this.caracaoCheio, this.coracaoVazio), 
    new Coracao(true, this.caracaoCheio, this.coracaoVazio),
    new Coracao(true, this.caracaoCheio, this.coracaoVazio)
  ]

  @Input('control-tentativas') private tentativas: number;

  constructor() { 
    
  }

  /** 
   * @brief Esse método é chamado toda vez que um dos valores que é 
   * recebido de um componente pai é passado para o componente filho.
   * Ele é chamdo antes do @onInit
   */
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
    if(this.tentativas !== this.coracoes.length){
      let indice: number = this.coracoes.length - this.tentativas;
      this.coracoes[indice -1].cheio = false;
    }
  }

  ngOnInit() {
    
  }
}
