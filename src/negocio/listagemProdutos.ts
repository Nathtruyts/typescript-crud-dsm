import Listagem from "./listagem";
import Produto from "../modelo/produto";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nListagem de produtos disponíveis:`);
        this.produtos.forEach(produto => {
            console.log(`\nID: ` + produto.id);
            console.log(`Nome do Produto: ` + produto.nome);
            console.log('Valor: R$ ' + produto.valor)
            
        });
        console.log(`\n`);
    }
}