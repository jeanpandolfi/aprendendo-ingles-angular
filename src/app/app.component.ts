import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private jogoEmAndamento: boolean = true;
  private mensagem: string;
  /**
   * encerrar Jogo
   */
  public encerrarJogo(mensagem: string): void {
    this.jogoEmAndamento = false;
    this.mensagem = mensagem;
  }

  private reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.mensagem = undefined;
  }
}
