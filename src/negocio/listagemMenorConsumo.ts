import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesMenosConsumidores extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`Listagem dos 10 clientes que menos consumiram produtos ou serviços:`);
        const clientesMenosConsumidores = this.obterClientesMenosConsumidores();
        clientesMenosConsumidores.forEach((cliente, index) => {
            console.log(`${index + 1}. Nome: ${cliente.nome}, Total de Consumo: ${cliente.getTotalConsumedQuantity()}`);
        });
        console.log("\n");
    }

    private obterClientesMenosConsumidores(): Array<Cliente> {
        const clientesMenosConsumidores = this.clientes.slice();
        clientesMenosConsumidores.sort((a, b) => a.getTotalConsumedQuantity() - b.getTotalConsumedQuantity());

        return clientesMenosConsumidores.slice(0, 10);
    }
}
