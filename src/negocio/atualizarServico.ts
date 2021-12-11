import Servico from '../modelo/servico';
import Atualizar from "./atualizar";;
import Entrada from '../io/entrada';

export default class AtualizarServico extends Atualizar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\natualização de um serviço`);
        let id = this.entrada.receberNumero('digite o id de identificação do serviço a ser atualizado: ')
        let nome = this.entrada.receberTexto(' digite o nome a ser atualizado: ')
        let valor = this.entrada.receberNumero('digite o valor a ser atualizado: ')
        this.servicos.forEach(servico => {
            if(id === servico.id){
                servico.nome = nome
                servico.valor = valor
            }
        });
        console.log(`\nAtualização Completa :)`);
    }
}