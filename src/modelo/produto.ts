import CPF from "./cpf";

export default class Produto {
  public nome: string;
  public consumo: number;
  public valor: number;
  private cpf: CPF;

  constructor(nome: string, valor: number, cpf: CPF) {
    this.nome = nome;
    this.consumo = 0;
    this.valor = valor;
    this.cpf = cpf;
  }

  public getNome(): string {
    return this.nome;
  }

  public getCpf(): CPF {
    return this.cpf;
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

