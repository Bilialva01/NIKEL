const nome= "Pietro Bilialva";
let nome2 = "";
let pessoaDefault= {
    nome: "Pietro Bilialva",
    idade: "19",
    trabalho:"Designer"
}

let nomes = ["Pietro Bilialva", "Maria Silva", "Pedro Silva"]



function alterarNome() {
    nome2 = "Maria Silva";
    console.log("alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    name2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}


//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Maria Silva",
//    idade: "25",
//    trabaho: "UX/UI Designer"
//});

//recebeEalteraNome("João Silva Pereira")
//recebeEalteraNome("Maria Silva")

//alterarNome();