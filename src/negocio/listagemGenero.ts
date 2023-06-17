import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesPorGenero extends Listagem {
    private clientes: Array<Cliente>;
    private genero: string;

    constructor(clientes: Array<Cliente>, genero: string) {
        super();
        this.clientes = clientes;
        this.genero = genero;
    }

    public listar(): void {
        console.log(`Clientes do gênero ${this.genero}:`);
        
        const clientesPorGenero = this.clientes.filter(cliente => cliente.genero === this.genero);
        
        clientesPorGenero.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome} ${cliente.sobrenome}`);
            console.log(`CPF: ` + cliente.getCpf().getValor);
            console.log("--------------------------------------");
        });
        
        console.log("\n");
    }
}
