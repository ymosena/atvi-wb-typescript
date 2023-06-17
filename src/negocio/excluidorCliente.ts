import Cliente from "../modelo/cliente"

export default class ExcluidorCliente{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        this.clientes = clientes
    }
    public excluir(clienteAlvo: Cliente){
        this.clientes.forEach(cliente =>{
            if(cliente.nome == clienteAlvo.nome){
                let indice = this.clientes.indexOf(cliente)
                delete this.clientes[indice]
            }
        })
    }
}