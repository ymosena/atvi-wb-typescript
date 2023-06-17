import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let sobrenome = this.entrada.receberTexto(`Por favor informe o sobrenome do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let selecionegenero = this.entrada.receberNumero(`Por favor, selecione o gênero (1 para Masculino, 2 para Feminino): `);
        let genero;
        switch (selecionegenero){
            case 1:
                genero = "Masculino"
                break;
            case 2:
                genero = "Feminino"
                break;
            default:
                return;
        }
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, sobrenome, cpf, genero);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}