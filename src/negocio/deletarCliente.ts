import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Deletar from "./deletar";

export default class DeletarCliente extends Deletar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\ndeletar um cliente selecionado`);
        let cpf = this.entrada.receberTexto('digite o CPF do cliente a ser deletado: ')
        this.clientes.forEach(cliente => {
            if(cpf === cliente.getCpf.getValor){

                let index = this.clientes.indexOf(cliente)
                this.clientes.splice(index,1)
            }       
        });
        console.log(`\nDelete completo :)`);
    }
}