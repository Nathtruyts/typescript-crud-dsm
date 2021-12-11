import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizar from "./atualizar";;

export default class atualizarCliente extends Atualizar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\natualização de um cliente selecionada`);
        let cpf = this.entrada.receberTexto('digite o CPF do cliente a ser atualizado: ')
        this.clientes.forEach(cliente => {
            if(cpf === cliente.getCpf.getValor){
                let execucao = true
                while (execucao) {
                    console.log(`O que você deverá ser atualizado?`);
                    console.log(`1 - Nome`);
                    console.log(`2 - Nome Social`);
                    console.log(`0 - Sair`);
                
                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero(`escolha uma opção: `)
                
                    switch (opcao) {
                        case 1:
                            let nome = this.entrada.receberTexto('digite o nome a ser atualizado: ')
                            cliente.nome = nome
                            break;
                        case 2:
                            let nomeSocial = this.entrada.receberTexto('digite o nome social a ser atualizado: ')
                            cliente.nomeSocial = nomeSocial
                            break;
                        case 0:
                            execucao = false
                            console.log(`saindo`)
                            break;
                        default:
                            console.log(`Operação não entendida :(`)   
            }        
                }}});
        console.log(`\nAtualização completa:)`);
    }
}