import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";
import CPF from "../modelo/cpf";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        const nome = this.entrada.receberTexto('Por favor, digite o nome do produto:');
        const valor = this.entrada.receberNumero('Por favor, digite o valor do produto:');
        const cpf = new CPF("", new Date()); // Substitua os valores vazios pelos valores corretos do CPF

        const produto = new Produto(nome, valor, cpf);
        this.produtos.push(produto);
        
        console.log("Produto cadastrado com sucesso!");
    }
}
