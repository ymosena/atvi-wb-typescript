import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesTop10 extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    private ordenarPorConsumo(): void {
        this.clientes.sort((a, b) => {
            const consumoA = a.getTotalConsumedQuantity();
            const consumoB = b.getTotalConsumedQuantity();
            return consumoB - consumoA;
        });
    }

    public listar(): void {
        console.log("Lista de todos os clientes:");
        this.clientes.forEach((cliente) => {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.sobrenome);
            console.log(`CPF: ` + cliente.getCpf().getValor);
            console.log("--------------------------------------");
        });
        console.log("\n");
    }

    public listarTop10Consumidores(): void {
        console.log("Top 10 clientes com maior consumo:");
        this.ordenarPorConsumo();
        const top10 = this.clientes.slice(0, 10);
        top10.forEach((cliente, index) => {
            console.log(`${index + 1}. Nome: ${cliente.nome}`);
            console.log(`   Quantidade consumida: ${cliente.getTotalConsumedQuantity()}`);
            console.log("--------------------------------------");
        });
        console.log("\n");
    }
}
