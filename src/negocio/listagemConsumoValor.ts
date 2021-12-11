import Cliente from "../modelo/cliente";
import Listagem from "./listagem"

export default class ListagemValor extends Listagem {
  private clientes: Array<Cliente>;
  constructor(
    clientes: Array<Cliente>,
  ) {
    super();
    this.clientes = clientes;
  }
  public listar(): void {
    
    let consumoQuantidade : any =  [];

    this.clientes.forEach((cliente) => {
      
      let cpf = cliente.getCpf.getValor;

      let nome = cliente.nome

      let consumoTotal : number = 0

      cliente.getProdutosConsumidos.forEach((produto: { valor: number; }) => {
          consumoTotal = consumoTotal + produto.valor
      })
      cliente.getServicosConsumidos.forEach((servico: { valor: number; }) => {
          consumoTotal = consumoTotal + servico.valor
      } )
      consumoQuantidade.push({
        cpf : cpf,
        nome : nome,
        quantidade : consumoTotal
      })
    });
    let ordem = consumoQuantidade.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade;
    });
    ordem = ordem.slice(0, 4);

    console.log(
      "\nOs 10 clientes que mais consumiram produtos/serviços (em valor)"
    );
    ordem.forEach((consumo: { cpf: string; nome: string; quantidade: string; }) => {
          console.log("CPF: " + consumo.cpf);
          console.log("Nome do cliente: " + consumo.nome);
          console.log("Quantidade Consumida: " + consumo.quantidade);
          console.log(`--------------------------------------\n`);
  });
  };
}