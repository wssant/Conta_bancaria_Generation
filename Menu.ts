import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta'

export function main() {

    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

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

                keyPress()
                break;
            case 2:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nListar todas as Contas\n\n",colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nConsultar dados da Conta - por número\n\n",colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nAtualizar dados da Conta\n\n",colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nApagar uma Conta\n\n",colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nSaque\n\n",colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nDepósito\n\n",colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.bg.black, colors.fg.magentastrong,"\n\nTransferência entre Contas\n\n",colors.reset);

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