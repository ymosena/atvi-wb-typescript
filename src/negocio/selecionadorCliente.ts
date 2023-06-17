import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";

export default class SelecionadorCliente {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public selecionar(cpf: string): Cliente | undefined {
        return this.clientes.find((cliente) => cliente.getCpf().getValor === cpf);
    }
}