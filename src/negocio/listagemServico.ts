import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServico extends Listagem {
    private servicos: Array<Servico>
    constructor(Servicos: Array<Servico>) {
        super()
        this.servicos = Servicos
    }
    public listar(): void {
        console.log(`\nLista dos serviços disponíveis:`);
        this.servicos.forEach(servico => {
            console.log('Id do Serviço: ' + servico.id);
            console.log('Nome do Serviço: ' + servico.nome);
            console.log('Valor: R$ ' + servico.valor);
        });
        console.log(`\n`);
    }
}