import CPF from "./cpf";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

export default class Cliente {
	public nome: string;
	public sobrenome: string;
	public genero: "MASCULINO" | "FEMININO";
	private cpf: CPF;
	private rgs: Array<RG>;
	private dataCadastro: Date;
	private telefones: Array<Telefone>;
	private produtosConsumidos: Array<Produto>;
	private servicosConsumidos: Array<Servico>;
	constructor(nome: string, nomeSocial: string, cpf: CPF, genero: "MASCULINO" | "FEMININO") {
		this.nome = nome;
		this.sobrenome = nomeSocial;
		this.genero = genero;
		this.cpf = cpf;
		this.rgs = [];
		this.dataCadastro = new Date();
		this.telefones = [];
		this.produtosConsumidos = [];
		this.servicosConsumidos = [];
	}

  public getCpf(): CPF {
    return this.cpf;
  }

  public getRgs(): Array<RG> {
    return this.rgs;
  }

  public getDataCadastro(): Date {
    return this.dataCadastro;
  }

  public getTelefones(): Array<Telefone> {
    return this.telefones;
  }

  public getProdutosConsumidos(): Array<Produto> {
    return this.produtosConsumidos;
  }

  public getServicosConsumidos(): Array<Servico> {
    return this.servicosConsumidos;
  }

  public getTotalConsumedQuantity(): number {
    const totalProdutos = this.produtosConsumidos.length;
    const totalServicos = this.servicosConsumidos.length;
    return totalProdutos + totalServicos;
  }

  public getTotalConsumedValue(): number {
    const totalProdutos = this.produtosConsumidos.reduce(
      (total, produto) => total + produto.getValor(),
      0
    );
    const totalServicos = this.servicosConsumidos.reduce(
      (total, servico) => total + servico.getValor(),
      0
    );
    return totalProdutos + totalServicos;
  }
}
