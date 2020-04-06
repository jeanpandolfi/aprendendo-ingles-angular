import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  public tentativas: number = 3;

  @Output() public  encerrarJogo: EventEmitter<string> = new EventEmitter(); 

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


    if(this.rodadaFrase.frasePtBr == this.resposta){
      
        this.rodada++;
        this.progresso += (100 / this.frases.length);
        
        if(this.rodada === this.frases.length){
          this.encerrarJogo.emit("vitoria");
        }

        this.atualizaRodada();
       
       

    }else{
      this.tentativas--;
      if(this.tentativas == 0){
        this.encerrarJogo.emit("derrota");
      }
    }
    
  }

  /**
   * Atualiza a rodada
   */
  private atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";
  }
}
