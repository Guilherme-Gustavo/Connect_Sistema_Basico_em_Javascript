//Seguindo o exercício 4, adicionarei na lista a coquinha, sorvete seco e paçoquinha)

alert("Bem vindo à cantina pão de açúcar.")
console.log("Bem vindo à cantina pão de açúcar.")
let nomeProduto = "";
const pedidos = [];

do {
    opcao = menu()
    if (opcao > 0 && opcao < 5)
        pedido(opcao)
    if (opcao == 5)
        menuCaixa()
} while (opcao != 0)

function menu() {
    let opcao;
    do {
        alert("Menu:\n1 cachorro quente R$8,00 e a partir de 2 unidades, R$ 7,50;\n1 Coquinha R$4,00 e a partir de 2 unidades, R$ 3,50;\n1 Sorvete Seco R$3,00 e a partir de 2 unidades R$ 2,75;\nPaçoquinha R$1,50")
        console.log("Menu:\n1 cachorro quente R$8,00 e a partir de 2 unidades, R$ 7,50;\n1 Coquinha R$4,00 e a partir de 2 unidades, R$ 3,50;\n1 Sorvete Seco R$3,00 e a partir de 2 unidades R$ 2,75;\nPaçoquinha R$1,50");
        opcao = parseInt(prompt("Digite a opção desejada:\n0 - Sair e não comprar mais nada\n1 - Cachorro Quente\n2 - Coquinha\n3 - Sorvete Seco\n4 - Paçoquinha;\n5 - Menu do Caixa"));
        if (opcao < 0 || opcao > 5)
            alert("A opção escolhida não existe. Escolha uma opção válida");
    } while (opcao < 0 || opcao > 5)
    return opcao;
}

function pedido(X) {
    switch (X) {
        case 1:
            item = {
                nome: "CachorroQuente",
            };
            item.quantidade = parseInt(prompt("Informe a quantidade de cachorros quentes desejados"))
            if (item.quantidade == 1) {
                item.custo = item.quantidade * 8
            }
            if (item.quantidade > 1) {
                item.custo = item.quantidade * 7.50
            }
            item.despesa = item.quantidade * 4.50
            pedidos.push(item);
            break;
        case 2:
            item = {
                nome: "Coquinha",
            };
            item.quantidade = parseInt(prompt("Informe a quantidade de Coquinhas desejadas"));
            if (item.quantidade == 1) {
                item.custo = item.quantidade * 4
            }
            if (item.quantidade > 1) {
                item.custo = item.quantidade * 3.50
            }
            item.despesa = item.quantidade * 1.75; //custo de R$1,75 por Coquinha. Valor aleatório escolhido pelo DEV.
            pedidos.push(item);
            break;
        case 3:
            item = {
                nome: "SorveteSeco",
            };
            item.quantidade = parseInt(prompt("Informe a quantidade de Sorvetes Secos desejados"));
            if (item.quantidade == 1) {
                item.custo = item.quantidade * 3
            }
            if (item.quantidade > 1) {
                item.custo = item.quantidade * 2.75
            }
            item.despesa = item.quantidade * 1.00 //custo de R$1,00 por sorvete. valor escolhido pelo DEV.
            pedidos.push(item);
            break;
        case 4:
            item = {
                nome: "Paçoquinha",
            };
            item.quantidade = parseInt(prompt("Informe a quantidade de Paçoquinhas desejadas"));
            item.custo = item.quantidade * 1.50;
            item.despesa = item.quantidade * 0.50; //custo de R$0.50 por paçoquinha.
            pedidos.push(item);
            break;
    }
}

function menuCaixa() {
    let opcao2;
    let opcaoDesejada;
    let lucroBruto = 0;
    let despesasTotais = 0;
    do {
        opcao2 = parseInt(prompt("Escolha uma das opções abaixo:\n0 - Para sair do menu caixa;\n1 - Para verificar o lucro bruto;\n2 - Para verificar o custo de produção;\n3 - Para verificar o lucro líquido;\n4 - Para verificar a lista de pedidos vendidos;\n5 - Quantidade total de produtos vendidos;\n6 - Para imprimir os dados de venda de todos os produtos;\n7 - Para imprimir extrato induvidual de um produto desejado"));
        switch (opcao2) {
            case 1:
                pedidos.forEach(function (item) {
                    lucroBruto = lucroBruto + item.custo;
                });
                alert("O valor arrecadado foi de R$" + lucroBruto.toFixed(2));
                console.log("O valor arrecadado foi de R$" + lucroBruto.toFixed(2));
                lucroBruto = 0;
                break;
            case 2:
                pedidos.forEach(function (item) {
                    despesasTotais = despesasTotais + item.despesa;
                })
                alert("O custo de produção foi de R$" + despesasTotais.toFixed(2));
                console.log("O custo de produção foi de R$" + despesasTotais.toFixed(2));
                despesasTotais = 0;
                break;
            case 3:
                pedidos.forEach(function (item) {
                    lucroBruto = lucroBruto + item.custo;
                });
                pedidos.forEach(function (item) {
                    despesasTotais = despesasTotais + item.despesa;
                })
                alert("O lucro líquido é de R$" + (lucroBruto - despesasTotais).toFixed(2));
                console.log("O luco líquido é de R$" + (lucroBruto - despesasTotais).toFixed(2));
                lucroBruto = 0;
                despesasTotais = 0;
                break;
            case 4:
                console.log("A lista de pedidos encontra-se abaixo:\n");
                console.table(pedidos);
                break;
            case 5:
                let totalProdutos = 0
                pedidos.forEach(function (item) {
                    totalProdutos = totalProdutos + item.quantidade;
                })
                console.log("O total de produtos pedidos foram " + totalProdutos);
                break;
            case 6:
                console.log(pedidos.nome);
                break;
            case 7:

                do {
                    opcaoDesejada = parseInt(prompt("Digite a opção desejada:\n0 - Sair e não consultar mais extratos\n1 - Extrato de Cachorro Quente\n2 - Extrato de Coquinha\n3 - Extrato de Sorvete Seco\n4 - Extrato de Paçoquinha;"));
                    switch (opcaoDesejada) {
                        case 1:
                            
                                nomeProduto = "CachorroQuente";
                                chamado(nomeProduto);

                                break;
                        case 2:

                            nomeProduto = "Coquinha";
                            chamado(nomeProduto);

                            break;
                        case 3:

                            nomeProduto = "SorveteSeco";
                            chamado(nomeProduto);

                            break;
                        case 4:

                            nomeProduto = "Paçoquinha";
                            chamado(nomeProduto);

                            break;
                    }
                } while (opcaoDesejada != 0);
                break;

        }
    } while (opcao2 != 0)
}

function chamado(nomeProduto) {
    let product = pedidos.filter(function (item) {
        return item.nome == nomeProduto;
        
    })
    
    extrato(product);

}
function extrato(product) {
    
     
    let dogao = {};
    console.log(product)
    dogao.nome = product.nome;
    dogao.quantidade = 0;
    dogao.custo = 0;
    dogao.despesa = 0;
    product.forEach(function (item) {
        dogao.quantidade = dogao.quantidade + item.quantidade
    });
    product.forEach(function (item) {
        dogao.custo = dogao.custo + item.custo;
    })
    product.forEach(function (item) {
        dogao.despesa = dogao.despesa + item.despesa;
    })
    console.table(dogao);
}

