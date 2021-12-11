import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Deletar from "./deletar";

export default class DeletarProduto extends Deletar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\n Deletar um produto`);
        let id = this.entrada.receberNumero('digite o id do produto que será deletado: ')
        this.produtos.forEach(produto => {
            if(id === produto.id){
                this.produtos.splice(produto.id,1)  
            }
        });
        console.log(`\n Delete Complete :)`);
    }
}