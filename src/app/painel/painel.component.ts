import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  private frases: Array<Frase> = FRASES;
  private instrucao: string = "Traduza a frase:";
  private resposta: string = "";
  private rodada: number = 0;
  private rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() { 
    this.atualizaRodada(); 
  }

  ngOnInit() {
  }

  /**
   * atualizaResposta
   */
  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  /**
   * verificarResposta
   */
  public verificarResposta(): void {

    console.log(this.resposta);
    console.log(this.rodadaFrase.frasePtBr);

    if(this.rodadaFrase.frasePtBr.toLowerCase == this.resposta.toLowerCase){
        alert("A tradução está corrreta");
        this.rodada++;
        this.atualizaRodada();
        this.progresso += (100 / this.frases.length);
       

    }else{
      alert("A tradução está Errada");
    }
    
  }

  private atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";
  }
}
