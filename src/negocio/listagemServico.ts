import Serviço from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Serviço>
    constructor(produtos: Array<Serviço>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(serviço => {
            console.log(`Nome: ` + serviço.nome);
        });
        console.log(`\n`);
    }
}