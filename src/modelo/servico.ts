export default class Servico {
  public nome: string;
  public consumo: number;
  public valor: number;

  constructor(nome: string, valor: number) {
      this.nome = nome;
      this.consumo = 0;
      this.valor = valor;
  }

  public getNome(): string {
      return this.nome;
  }

  public getConsumo(): number {
      return this.consumo;
  }

  public getValor(): number {
      return this.valor;
  }

  public adicionarConsumo(): void {
      this.consumo++;
  }
}
