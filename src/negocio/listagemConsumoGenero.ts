import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import Servico from "../modelo/servico";
import Produto from "../modelo/produto";

export default class ListagemConsumoPorGenero extends Listagem {
    private clientes: Array<Cliente>;
    private genero: string;

    constructor(clientes: Array<Cliente>, genero: string) {
        super();
        this.clientes = clientes;
        this.genero = genero;
    }

    public listar(): void {
        console.log(`Listagem de serviços ou produtos mais consumidos por gênero (${this.genero}):`);
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
        const clientesPorGenero = this.clientes.filter((cliente) => cliente.genero === this.genero);
        clientesPorGenero.forEach((cliente) => {
            cliente.getServicosConsumidos().forEach((servico) => {
                servicosOuProdutos.push(servico);
            });
            cliente.getProdutosConsumidos().forEach((produto) => {
                servicosOuProdutos.push(produto);
            });
        });

        return servicosOuProdutos;
    }
}
