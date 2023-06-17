import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemClientesTop10 from "../negocio/listagem10clientesQtd"
import ListagemProdutos from "../negocio/listagemProdutos";
import SelecionadorCliente from "../negocio/selecionadorCliente";
import ListagemClientesPorGenero from "../negocio/listagemGenero";
import ListagemConsumoPorGenero from "../negocio/listagemConsumoGenero"
import ListagemConsumoGeral from "../negocio/listagemConsumoGeral";
import ListagemClientesMenosConsumidores from "../negocio/listagemMenorConsumo";
import ListagemClientesMaisConsumiramValor from "../negocio/listagem5clientesV";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar Produtos`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Exlcuir Cliente`);
    console.log(`6 - 10 clientes que mais consumiram produtos ou serviços em quantidade`);
    console.log(`7 - Listar clientes por gênero`);
    console.log(`8 - Listar serviços ou produtos mais consumidos por gênero`);
    console.log(`9 - Listar serviços ou produtos mais consumidos`);
    console.log(`10 - Listar 10 clientes que menos consumiram produtos ou serviços.`);
    console.log(`11- Listar os 5 clientes que mais consumiram em valor, não em quantidade`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 4:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
            case 5:
                let selecionadorCliente = new SelecionadorCliente(empresa.getClientes);
                let cpf = entrada.receberTexto('Por favor, digite o CPF do cliente para excluir:');
                let cliente = selecionadorCliente.selecionar(cpf);
                if (cliente) {
                  console.log(cliente.nome);
                } else {
                  console.log('Cliente não encontrado.');
                }
                break;
              
        case 6:
            let listagemTop10 = new ListagemClientesTop10(empresa.getClientes);
            listagemTop10.listarTop10Consumidores();
            break;
        case 7:
            let opcaoGenero = entrada.receberNumero('Por favor, selecione o gênero (1 para Masculino, 2 para Feminino):');
            let generoCliente: string;
            switch (opcaoGenero) {
                case 1:
                    generoCliente = 'Masculino';
                    break;
                case 2:
                    generoCliente = 'Feminino';
                    break;
                default:
                    console.log('Opção inválida');
                    continue;
                }
            let listagemPorGenero1 = new ListagemClientesPorGenero(empresa.getClientes, generoCliente);
            listagemPorGenero1.listar();
            break;  
        case 8:
            let opcaoGenero2 = entrada.receberNumero('Por favor, selecione o gênero (1 para Masculino, 2 para Feminino):');
            let generoCliente2: string;
                switch (opcaoGenero2) {
                    case 1:
                        generoCliente2 = 'Masculino';
                        break;
                        case 2:
                        generoCliente2 = 'Feminino';
                            break;
                        default:
                        console.log('Opção inválida');
                        continue;
                    }
                let listagemPorGenero = new ListagemConsumoPorGenero(empresa.getClientes, generoCliente2);
                listagemPorGenero.listar();
                break;  
        case 9:
            let listagemGeral = new ListagemConsumoGeral(empresa.getClientes);
            listagemGeral.listar();
            break;
        case 10:
            let listagemMenosConsumidores = new ListagemClientesMenosConsumidores(empresa.getClientes);
            listagemMenosConsumidores.listar();
            break; 
        case 11:
            let listagemMaisConsumiramValor = new ListagemClientesMaisConsumiramValor(empresa.getClientes);
            listagemMaisConsumiramValor.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}