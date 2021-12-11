import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro{
    static cadastrar() {
        throw new Error("Method not implemented.");
    }
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()

    }
    public cadastrar(): void {
        console.log(`\ncadastro de um serviço`);
        let idServico = this.entrada.receberNumero('digite uma id paro o novo serviço: ')
        let nomeServico = this.entrada.receberTexto('digite o nome do novo serviço: ')
        let valor = this.entrada.receberNumero('digite o valor do serviõ: ')
        let servico = new Servico()
        servico.id = idServico
        servico.nome = nomeServico
        servico.valor = valor
        this.servicos.push(servico)
        console.log(`\nCadastro completo :)\n`);
    }
    
}