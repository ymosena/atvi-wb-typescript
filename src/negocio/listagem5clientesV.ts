import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesMaisConsumiramValor extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`Listagem dos 5 clientes que mais consumiram em valor:`);
        const clientesMaisConsumiramValor = this.obterClientesMaisConsumiramValor();
        clientesMaisConsumiramValor.forEach((cliente, index) => {
            console.log(`${index + 1}. Nome: ${cliente.nome}, Valor Consumido: ${cliente.getTotalConsumedValue()}`);
        });
        console.log("\n");
    }

    private obterClientesMaisConsumiramValor(): Array<Cliente> {
        const clientesMaisConsumiramValor = this.clientes.slice();
        clientesMaisConsumiramValor.sort((a, b) => b.getTotalConsumedValue() - a.getTotalConsumedValue());

        return clientesMaisConsumiramValor.slice(0, 5);
    }
}
