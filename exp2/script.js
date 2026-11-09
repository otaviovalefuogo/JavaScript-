const alunos = [
        { nome: "João", idade: 18, curso: "Informática", notas: [8.5, 7.0, 9.0] },
            { nome: "Maria", idade: 19, curso: "Agropecuária", notas: [6.0, 5.5, 7.0] },
                { nome: "Pedro", idade: 20, curso: "Informática", notas: [4.0, 3.5, 5.0] },
                    { nome: "Ana", idade: 18, curso: "Eletrônica", notas: [9.5, 9.0, 10.0] }
                    ];

                    function calcularMedia(notas) {
                        const soma = notas.reduce((acc, nota) => acc + nota, 0);
                            return soma / notas.length;
                            }

                            function situacaoAluno(media) {
                                if (media >= 7) return "Aprovado";
                                    if (media >= 5) return "Recuperação";
                                        return "Reprovado";
                                        }

                                        function listarAlunosEMedias(lista) {
                                            const div = document.querySelector("#resultado");
                                                div.innerHTML = "";
                                                    
                                                        lista.forEach(aluno => {
                                                                const media = calcularMedia(aluno.notas);
                                                                        const sit = situacaoAluno(media);
                                                                                const p = document.createElement("p");
                                                                                        p.className = "aluno-card";
                                                                                                p.textContent = `Aluno: ${aluno.nome} | Curso: ${aluno.curso} | Média: ${media.toFixed(2)} | Situação: ${sit}`;
                                                                                                        div.appendChild(p);
                                                                                                            });
                                                                                                            }

                                                                                                            function encontrarAprovados() {
                                                                                                                return alunos.filter(aluno => calcularMedia(aluno.notas) >= 7);
                                                                                                                }

                                                                                                                function encontrarMaiorMedia() {
                                                                                                                    return alunos.reduce((melhor, aluno) => {
                                                                                                                            return calcularMedia(aluno.notas) > calcularMedia(melhor.notas) ? aluno : melhor;
                                                                                                                                }, alunos[0]);
                                                                                                                                }

                                                                                                                                function calcularMediaGeral() {
                                                                                                                                    const somaMedias = alunos.reduce((acc, aluno) => acc + calcularMedia(aluno.notas), 0);
                                                                                                                                        return somaMedias / alunos.length;
                                                                                                                                        }

                                                                                                                                        document.querySelector("#btn-listar").addEventListener("click", () => {
                                                                                                                                            listarAlunosEMedias(alunos);
                                                                                                                                            });

                                                                                                                                            document.querySelector("#btn-aprovados").addEventListener("click", () => {
                                                                                                                                                const aprovados = encontrarAprovados();
                                                                                                                                                    listarAlunosEMedias(aprovados);
                                                                                                                                                    });

                                                                                                                                                    document.querySelector("#btn-maior").addEventListener("click", () => {
                                                                                                                                                        const melhor = encontrarMaiorMedia();
                                                                                                                                                            const div = document.querySelector("#resultado");
                                                                                                                                                                const media = calcularMedia(melhor.notas);
                                                                                                                                                                    div.innerHTML = `<h3>Maior Média:</h3><p>${melhor.nome} com média ${media.toFixed(2)}</p>`;
                                                                                                                                                                    });

                                                                                                                                                                    document.querySelector("#btn-geral").addEventListener("click", () => {
                                                                                                                                                                        const div = document.querySelector("#resultado");
                                                                                                                                                                            div.innerHTML = `<h3>Média Geral da Turma:</h3><p>${calcularMediaGeral().toFixed(2)}</p>`;
                                                                                                                                                                            });

