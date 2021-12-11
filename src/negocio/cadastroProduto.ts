import Cadastro from "./cadastro";
import Entrada from "../io/entrada";
import Produto from "../modelo/produto";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()

    }
    public cadastrar(): void {
        console.log(`\n Cadastro de um produto`);
        let idProduto = this.entrada.receberNumero('digite um id o produto: ')
        let nomeProduto = this.entrada.receberTexto('digite um nome para o produto: ')
        let valor = this.entrada.receberNumero('digite o valor do produto : ')
        let produto = new Produto()
        produto.id = idProduto
        produto.nome = nomeProduto
        produto.valor = valor
        this.produtos.push(produto)
        console.log(`\nCadastro completo :)\n`);
    }
}