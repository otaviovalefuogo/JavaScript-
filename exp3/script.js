const produtosLoja = [
        { nome: "Teclado Mecânico", categoria: "Periféricos", preco: 250.00, estoque: 15 },
            { nome: "Mouse Gamer", categoria: "Periféricos", preco: 120.00, estoque: 3 },
                { nome: "Monitor 24", categoria: "Monitores", preco: 800.00, estoque: 8 },
                    { nome: "Cadeira Gamer", categoria: "Móveis", preco: 1200.00, estoque: 2 },
                        { nome: "Headset", categoria: "Periféricos", preco: 150.00, estoque: 20 }
                        ];

                        function listarNaTela(lista) {
                            const div = document.querySelector("#vitrine");
                                div.innerHTML = "";
                                    lista.forEach(p => {
                                            const item = document.createElement("div");
                                                    item.className = "produto";
                                                            item.innerHTML = `<strong>${p.nome}</strong> (${p.categoria}) <br> Preço: R$ ${p.preco.toFixed(2)} | Estoque: ${p.estoque}`;
                                                                    div.appendChild(item);
                                                                        });
                                                                        }

                                                                        function buscarPorCategoria(categoria) {
                                                                            return produtosLoja.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
                                                                            }

                                                                            function calcularTotalEstoque() {
                                                                                return produtosLoja.reduce((acc, p) => acc + (p.preco * p.estoque), 0);
                                                                                }

                                                                                function realizarCompra(nomeProduto) {
                                                                                    const produto = produtosLoja.find(p => p.nome.toLowerCase() === nomeProduto.toLowerCase());
                                                                                        if (produto) {
                                                                                                if (produto.estoque > 0) {
                                                                                                            produto.estoque--;
                                                                                                                        alert(`Compra de ${produto.nome} realizada com sucesso!`);
                                                                                                                                } else {
                                                                                                                                            alert(`Produto ${produto.nome} fora de estoque!`);
                                                                                                                                                    }
                                                                                                                                                        } else {
                                                                                                                                                                alert("Produto não encontrado!");
                                                                                                                                                                    }
                                                                                                                                                                        listarNaTela(produtosLoja);
                                                                                                                                                                        }

                                                                                                                                                                        function listarPoucoEstoque() {
                                                                                                                                                                            return produtosLoja.filter(p => p.estoque < 5);
                                                                                                                                                                            }

                                                                                                                                                                            function encontrarMaisCaro() {
                                                                                                                                                                                return produtosLoja.reduce((caro, p) => p.preco > caro.preco ? p : caro, produtosLoja[0]);
                                                                                                                                                                                }

                                                                                                                                                                                document.querySelector("#btn-todos").addEventListener("click", () => listarNaTela(produtosLoja));

                                                                                                                                                                                document.querySelector("#btn-buscar").addEventListener("click", () => {
                                                                                                                                                                                    const cat = document.querySelector("#busca-categoria").value;
                                                                                                                                                                                        listarNaTela(buscarPorCategoria(cat));
                                                                                                                                                                                        });

                                                                                                                                                                                        document.querySelector("#btn-pouco").addEventListener("click", () => {
                                                                                                                                                                                            listarNaTela(listarPoucoEstoque());
                                                                                                                                                                                            });

                                                                                                                                                                                            document.querySelector("#btn-comprar").addEventListener("click", () => {
                                                                                                                                                                                                const nome = document.querySelector("#nome-compra").value;
                                                                                                                                                                                                    realizarCompra(nome);
                                                                                                                                                                                                    });

                                                                                                                                                                                                    document.querySelector("#btn-info").addEventListener("click", () => {
                                                                                                                                                                                                        const div = document.querySelector("#vitrine");
                                                                                                                                                                                                            const total = calcularTotalEstoque();
                                                                                                                                                                                                                const maisCaro = encontrarMaisCaro();
                                                                                                                                                                                                                    div.innerHTML = `
                                                                                                                                                                                                                            <div class="produto">
                                                                                                                                                                                                                                        <h3>Resumo da Loja</h3>
                                                                                                                                                                                                                                                    <p>Valor total do estoque: R$ ${total.toFixed(2)}</p>
                                                                                                                                                                                                                                                                <p>Produto mais caro: ${maisCaro.nome} (R$ ${maisCaro.preco.toFixed(2)})</p>
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                            `;
                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                            listarNaTela(produtosLoja);

