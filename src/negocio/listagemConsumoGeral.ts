import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import Servico from "../modelo/servico";
import Produto from "../modelo/produto";

export default class ListagemConsumoGeral extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`Listagem de serviços ou produtos mais consumidos:`);
        const servicosOuProdutosMaisConsumidos = this.obterServicosOuProdutosMaisConsumidos();
        servicosOuProdutosMaisConsumidos.forEach((item, index) => {
            if (item instanceof Servico) {
                console.log(`${index + 1}. Nome: ${item.getNome()}, Consumo: ${item.getConsumo()}`);
            } else if (item instanceof Produto) {
                console.log(`${index + 1}. Nome: ${item.getNome()}, Consumo: Não se aplica`);
            }
        });
        console.log("\n");
    }

    private obterServicosOuProdutosMaisConsumidos(): Array<Servico | Produto> {
        const servicosOuProdutos: Array<Servico | Produto> = [];
        this.clientes.forEach((cliente) => {
            cliente.getServicosConsumidos().forEach((servico) => {
                servicosOuProdutos.push(servico);
            });
            cliente.getProdutosConsumidos().forEach((produto) => {
                servicosOuProdutos.push(produto);
            });
        });

        servicosOuProdutos.sort((a, b) => b.getConsumo() - a.getConsumo());

        return servicosOuProdutos;
    }
}
