/*
    Atividade 2: Crie um Objeto Literal
    Vamos simular informações gerais de uma conta bancária. 
            
    Para isso deve-se basear nos seguintes recursos:
    (  ) Nome completo do usuário.
    (  ) Número da Agência.
    (  ) Número da Conta.
    (  ) Saldo Atual.
    (  ) Depósito.
    (  ) Saque.
*/

let dadosDoCliente = { NomeCompleto: 'Alexandre Andrade', 
NumeroAgencia: 9999,
NumeroConta: 123456,
SaldoAtual: 150.00,
Deposito: 200.00,
Saque: 50.00}


console.log(dadosDoCliente.NomeCompleto)



/*
    Atividade 3: Adicione funcionalidades ao Objeto Literal.
    (  ) O usuário deve ser capaz de visualizar seu Saldo Atual.
    (  ) O usuário deve ser capaz de Depositar. Após o depósito o sistema deve informar o Saldo Atual atualizado.
    (  ) O usuário deve ser capaz de Sacar. Após o saque o sistema deve informar o Saldo Atual atualizado.
    (  ) O usuário não pode ser capaz de sacar mais do que possui de Saldo. se não possui saldo o sistema deve responder uma mensagem de erro.
            
    Sujestões de mensagem:
    - Agora seu Saldo Atual é de R$ X.
    - Você realizou um saque de R$ X. Agora seu Saldo Atual é de R$ X.
    - Saldo insuficiente! Seu Saldo Atual é de R$ ${this.saldoAtual}.
*/

function apresentarSaldoAtualDaConta() {
        return dadosDoCliente.SaldoAtual
    }
     console.log("Agora seu Saldo Atual é de R$ " + dadosDoCliente.SaldoAtual)


function depositarValorDaConta(valorDoDeposito) {
    return dadosDoCliente.Deposito
    }
function calcular(dadosDoCliente.saldoAtual, dadosDoCliente.Deposito, callback) {
        let valorDoDeposito = callback(dadosDoCliente.saldoAtual, dadosDoCliente.Deposito)
return "Agora seu Saldo Atual é de R$ " + callback

function sacarValorDaConta(valorDoSaque) {

}