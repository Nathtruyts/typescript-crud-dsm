import Atualizar from "./atualizar"
import Entrada from "../io/entrada";
import Produto from "../modelo/produto";

export default class AtualizarProduto extends Atualizar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\n Atualização de um produto`);
        let id = this.entrada.receberNumero('digite o id do produto a ser atualizado: ')
        let nome = this.entrada.receberTexto('digite o nome a ser atualizado: ')
        let valor = this.entrada.receberNumero('digite o valor a ser atualizado: ')
        this.produtos.forEach(produto => {
            if(id === produto.id){
                produto.nome = nome
                produto.valor = valor
            }
        });
        console.log(`\nAtualização Completa :)`);
    }
}
