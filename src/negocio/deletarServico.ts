import Servico from "../modelo/servico";
import Deletar from "./deletar";
import Entrada from "../io/entrada";

export default class DeletarServico extends Deletar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\ndeletar um serviço`);
        let id = this.entrada.receberNumero('digite o id do serviço que será deletado: ')
        this.servicos.forEach(servico => {
            if(id === servico.id){
                this.servicos.splice(servico.id,1)    
            }       
        });
        console.log(`\nProduto Deletado :)`);
    }
}