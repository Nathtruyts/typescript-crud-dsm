import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import Cadastro from "../negocio/cadastro";
import atualizarCliente from "../negocio/atualizarCliente";
import CadastroCliente from "../negocio/cadastroCliente";
import deletarCliente from "../negocio/deletarCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroServico from "../negocio/cadastroServico"
import ListagemServico from "../negocio/listagemServico";
import AtualizarServico from "../negocio/atualizarServico";
import DeletarServico from "../negocio/deletarServico";
import CadastroProduto from "../negocio/cadastroProduto";
import AtualizarProduto from "../negocio/atualizarProduto";
import DeletarProduto from "../negocio/deletarProduto";
import ListagemProduto from "../negocio/listagemProdutos";
import CadastroConsumo from "../negocio/cadastroCosumo";
import ListagemQuantidade from "../negocio/listagemConsumoQuantidade";
import ListagemMenorQuantidade from "../negocio/listagemMenorQuantidade";
import ListagemConsumoValor from "../negocio/listagemConsumoValor"

console.log('Cadastro de clientes do Grupo World Beauty')
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log('Opções:');
    console.log('1-Cadastrar cliente');
    console.log('3-Atualizar Cliente');
    console.log('4-Deletar Cliente');
    console.log('5-Inserir Consumo');
    console.log('6-Cadastrar Serviço');
    console.log('7-Listar serviços');
    console.log('8-Atualizar Serviço');
    console.log('9-Deletar Serviço');
    console.log('10-Cadastrar Produto');
    console.log('11-Listar produtos');
    console.log('12-Atualizar Produto');
    console.log('13-Deletar Produto');
    console.log('14-Listar os 10 Clientes que mais consumiram (quantidade)');
    console.log('15-Listar os 05 Clientes que menos consumiram (quantidade)');
    console.log('16-Listar os 05 Clientes que mais consumiram (valor)');
    console.log('17-Listar os produtos/serviços mais consumidos');
    console.log('0-Sair');

    let entrada = new Entrada()
    let opcao = entrada.receberNumero('O que deseja fazer?: ')

    switch (opcao) {
        case 1:
            let Cadastro = new CadastroCliente(empresa.getClientes)
            Cadastro.cadastrar()
            break;
        case 2:
            let Listagem = new ListagemClientes(empresa.getClientes)
            Listagem.listar()
            break;
        case 3:
            let atualizarClientes = new atualizarCliente(empresa.getClientes)
            atualizarClientes.atualizar()
            break;
        case 4:
            let DeletarClientes = new deletarCliente(empresa.getClientes)
            DeletarClientes.deletar()
            break;
        case 5:
            let inserirConsumo = new CadastroConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            inserirConsumo.atualizar()
            break;
        case 6:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            CadastroServico.cadastrar()
            break;
        case 7:
            let listagemServico = new ListagemServico(empresa.getServicos)
            listagemServico.listar()
            break;
        case 8:
            let atualizarServico = new AtualizarServico(empresa.getServicos)
            atualizarServico.atualizar()
            break;
        case 9:
            let deletarServico = new DeletarServico(empresa.getServicos)
            deletarServico.deletar()
            break;
        case 10:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 11:
            let listagemProduto = new ListagemProduto(empresa.getProdutos)
            listagemProduto.listar()
            break;
        case 12:
            let atualizarProdutos = new AtualizarProduto(empresa.getProdutos)
            atualizarProdutos.atualizar()
            break;
        case 13:
            let deletarProdutos = new DeletarProduto(empresa.getProdutos)
            deletarProdutos.deletar()
            break;
        case 14:
            let listarQuantidade = new ListagemQuantidade(empresa.getClientes)
            listarQuantidade.listar()
            break;
        case 15:
            let listarMenorQuantidade = new ListagemMenorQuantidade(empresa.getClientes)
            listarMenorQuantidade.listar()
            break;
        case 16:
            let listarConsumoValor = new ListagemConsumoValor(empresa.getClientes)
            listarConsumoValor.listar()
            break;
        case 0:
            execucao = false
            console.log(`Encerrando...`)
            break;
        default:
            console.log('erro, por favor tente novamente :(')
    }
}