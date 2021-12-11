import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizar from "./atualizar";;
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class AtualizarConsumo extends Atualizar {
    private cliente: Array<Cliente>;
    private produto: Array<Produto>;
    private servico: Array<Servico>;
    private entrada: Entrada
    
    constructor(
    clientes: Array<Cliente>,
    produtos: Array<Produto>,
    servicos: Array<Servico>
      ) {
    super();
    this.cliente = clientes;
    this.produto = produtos;
    this.servico = servicos;
    this.entrada = new Entrada()
      }
public atualizar(): void {
    console.log(`\nCadastro de consumo do cliente`);
    let cpf = this.entrada.receberTexto('digite o CPF do cliente: ')
    this.cliente.forEach(cliente => {
    if(cpf === cliente.getCpf.getValor){
    let execucao = true
     while (execucao) {
            console.log(`O que foi consumido`);
            console.log(`1 - Produto`);
            console.log(`2 - Serviço`);
            console.log(`0 - Sair`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)     
    switch (opcao) {
        case 1:
        let idProduto = this.entrada.receberNumero('Por favor, digite o id do produto consumido: ')
        this.produto.forEach((produto) => {
            if (produto.id == idProduto) {
                        cliente.getProdutosConsumidos.push(produto);
                        } 
                 });
                  break;
        case 2:
         let idServico = this.entrada.receberNumero('Por favor, digite o id do serviço consumido: ')
         this.servico.forEach((servico) => {
            if (servico.id == idServico) {
                cliente.getServicosConsumidos.push(servico);
                    } 
                    });
                    break;
        case 0:
        execucao = false
        console.log('Saindo')
                    break;
        default:
            console.log('Erro :(')
            }
                }}});
        console.log('\nAtualização Completa :)');
    }
}