export class Coracao{
    public cheio: boolean;
    public urlCoracaoCheio: string = "../../assets/coracao_cheio.png";
    public urlCoracaoVazio: string = "../../assets/coracao_vazio.png";

    constructor(cheio: boolean, urlCoracaoCheio: string, urlCoracaoVazio: string){
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }

    /**
     * exibeCoracao
     */
    public exibeCoracao(): string {
        if (this.cheio){
            return this.urlCoracaoCheio;
        }

        return this.urlCoracaoVazio;
    }
}