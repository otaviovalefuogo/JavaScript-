const produtos = [
    { nome: "Caderno", preco: 25.50, estoque: 10 },
    { nome: "Caneta", preco: 3.00, estoque: 0 },
    { nome: "Mochila", preco: 150.00, estoque: 5 },
    { nome: "Borracha", preco: 2.50, estoque: 20 },
    { nome: "Estojo", preco: 15.00, estoque: 0 }
];

const produtosComEstoque = produtos.filter(p => p.estoque > 0);
const nomesDosProdutos = produtos.map(p => p.nome);
const valorTotal = produtos.reduce((acc, p) => acc + (p.preco * p.estoque), 0);

function obterMaisCaro(lista) {
    return lista.reduce((maior, atual) => atual.preco > maior.preco ? atual : maior, lista[0]);
}

const form = document.querySelector("#form-produto");
const listaAprovados = document.querySelector("#lista-aprovados");
const inputNome = document.querySelector("#nome");
const inputPreco = document.querySelector("#preco");
const inputEstoque = document.querySelector("#estoque");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    inputNome.classList.remove("erro");
    inputPreco.classList.remove("erro");
    inputEstoque.classList.remove("erro");
    
    const nome = inputNome.value.trim();
    const preco = parseFloat(inputPreco.value);
    const estoque = parseInt(inputEstoque.value);
    
    let valido = true;
    
    if (nome === "") {
        inputNome.classList.add("erro");
        valido = false;
    }
    if (isNaN(preco) || preco <= 0) {
        inputPreco.classList.add("erro");
        valido = false;
    }
    if (isNaN(estoque) || estoque < 0) {
        inputEstoque.classList.add("erro");
        valido = false;
    }
    
    if (!valido) return;
    
    produtos.push({ nome, preco, estoque });
    atualizarTela();
});

function atualizarTela() {
    listaAprovados.innerHTML = "";
    const aprovados = produtos.filter(p => p.estoque > 0);
    
    aprovados.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.nome} - R$ ${p.preco.toFixed(2)} (${p.estoque} unid.)`;
        listaAprovados.appendChild(li);
    });
}

atualizarTela();
