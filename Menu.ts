import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta'
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca'
import { ContaController } from "./src/controller/ContaController";

export function main() {


    let contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupança']

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();
    
    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();

    while (true) {

        console.log(colors.bg.black, colors.fg.magentastrong,
            "************************************" )

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                  CARPENTER BANK                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",colors.reset);


        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.bg.black, colors.fg.magentastrong,
                "\nCarpenter Bank: Talhando oportunidades, lapidando conquistas.");
            sobre();
            console.log(colors.reset,)
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nCriar Conta\n\n",colors.reset);

                console.log("Digite o número da agência: ");
                agencia = readlinesync.questionFloat("");

                console.log("Digite o nome do titular da conta: ");
                titular = readlinesync.question("");

                console.log("Digite o tipo de conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "", {cancel:false}) + 1;

                console.log("Digite o saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");

                switch(tipo){
                    case 1:
                        console.log("Digite o limite da conta (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                            break;
                    
                    case 2:
                        console.log("Digite o dia do aniversário da Conta poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(),agencia, tipo, titular, saldo, aniversario));
                        break
                }

                keyPress()
                break;
            case 2:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nListar todas as Contas\n\n",colors.reset);
                
                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nConsultar dados da Conta - por número\n\n",colors.reset);
                
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nAtualizar dados da Conta\n\n",colors.reset);

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("")

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {
                    console.log("Digite o número da agência: ");
                    agencia = readlinesync.questionInt("")

                    console.log("Digite o nome do titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("Digite o Saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o limite da conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                                break;

                        case 2:
                            console.log("Digite o dia do aniversário da conta: ") 
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }

                    }else{
                        console.log(colors.fg.redstrong, "\nA conta número: " + numero + " não foi encontrada!", colors.reset)
                    }
                
                keyPress()
                break;

            case 5:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nApagar uma Conta\n\n",colors.reset);

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);
                
                keyPress()
                break;
            case 6:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nSaque\n\n",colors.reset);

                console.log("Digite o número da Conta: ");  
                numero = readlinesync.questionInt("");  
                console.log("\nDigite o valor do Saque (R$): ");  
                valor = readlinesync.questionFloat("");  
                contas.sacar (numero, valor);

                keyPress()
                break;

            case 7:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nDepósito\n\n",colors.reset);

                console.log("Digite o número da Conta: ");  
                numero = readlinesync.questionInt("");  
                    
                console.log("\nDigite o valor do Depósito (R$): ");  
                valor = readlinesync.questionFloat("");  
                    
                contas.depositar(numero, valor);

                keyPress()
                break;

            case 8:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nTransferência entre Contas\n\n",colors.reset);
                
                console.log("Digite o número da Conta de Origem: ");  
                numero = readlinesync.questionInt("");  
  
                console.log("Digite o número da Conta de Destino: ");  
                numeroDestino = readlinesync.questionInt("");  
                
                console.log("\nDigite o valor do Depósito (R$): ");  
                valor = readlinesync.questionFloat("");  
                
                contas.transferir(numero, numeroDestino, valor);  
                
                keyPress()
                break;
            default:
                console.log(colors.bg.black, colors.fg.magentastrong,"\nOpção Inválida!\n",colors.reset);

                keyPress()
                break;
        }
    }

}


export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Winnie Sant'Ana ");
    console.log("Generation Brasil - winnies@genstudents.org");
    console.log("https://github.com/wssant/Conta_bancaria_Generation");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();