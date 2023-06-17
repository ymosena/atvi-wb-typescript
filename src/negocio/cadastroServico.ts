import Entrada from "../io/entrada";
import Serviço from "../modelo/servico";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private serviços: Array<Serviço>;
    private entrada: Entrada;

    constructor(serviços: Array<Serviço>) {
        super();
        this.serviços = serviços;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`);
        const nome = this.entrada.receberTexto('Por favor, digite o nome do serviço:');
        const valor = this.entrada.receberNumero('Por favor, digite o valor do serviço:');
        
        const serviço = new Serviço(nome, valor);
        this.serviços.push(serviço);
        
        console.log("Serviço cadastrado com sucesso!");
    }
}
