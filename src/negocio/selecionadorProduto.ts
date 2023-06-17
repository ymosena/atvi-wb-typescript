import Produto from "../modelo/produto";
import CPF from "../modelo/cpf";

export default class SelecionadorProduto {
    private produtos: Array<Produto>;

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
    }

    public selecionar(cpf: string) {
        let cpfVazio = new CPF("", new Date());
        let produtoAlvo: Produto | null = null;

        this.produtos.forEach(produto => {
            if (cpf === produto.getCpf().getValor) {
                produtoAlvo = produto;
            }
        });

        return produtoAlvo;
    }
}
