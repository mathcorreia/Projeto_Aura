<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard (Atualização Automática)</title>
    <style>
        /* O seu CSS (estilo) continua igual */
        body { font-family: Arial, sans-serif; margin: 20px; background-color: #f4f4f4; }
        h1 { color: #333; }
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-top: 20px; 
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #007bff; color: white; }
        tr:nth-child(even) { background-color: #f9f9f9; }
        tr:hover { background-color: #f1f1f1; }
        /* Estilo para a linha do "a carregar..." */
        .loading-row { text-align: center; color: #999; font-style: italic; }
    </style>
</head>
<body>

    <h1>Painel de Monitoramento do Ar (Automático)</h1>
    
    <table>
        <thead>
            <tr>
                <th>Data e Hora</th>
                <th>Temp. (°C)</th>
                <th>Umidade (%)</th>
                <th>Pressão (hPa)</th>
                <th>Qualidade (Razão)</th>
                <th>Valor MQ-135</th>
                <th>Cooler Ligado?</th>
            </tr>
        </thead>
        <tbody id="tabela-dados">
            <tr class="loading-row">
                <td colspan="7">A carregar dados...</td>
            </tr>
        </tbody>
    </table>

    <script>
        
        // Esta função é quem vai buscar os dados
        async function buscarDados() {
            
            // Procura o corpo da tabela no HTML
            const tabelaCorpo = document.getElementById('tabela-dados');
            let htmlLinhas = ''; // Variável para construir o novo HTML da tabela

            try {
                // 1. Faz o pedido ao nosso "fornecedor de dados"
                const resposta = await fetch('./src/get_dados.php');
                
                // 2. Converte a resposta (que é JSON) num objeto JavaScript
                const dados = await resposta.json();

                // 3. Se não houver dados, mostra uma mensagem
                if (dados.length === 0) {
                    htmlLinhas = '<tr class="loading-row"><td colspan="7">Nenhum dado encontrado ainda.</td></tr>';
                } else {
                    // 4. Se houver dados, cria uma linha (<tr>) para cada registo
                    dados.forEach(registo => {
                        // Converte 1/0 para Sim/Não
                        const statusCooler = registo.status_cooler ? 'Sim' : 'Não';
                        
                        // Formata os números para 2 casas decimais
                        const temp = parseFloat(registo.temperatura).toFixed(2);
                        const umid = parseFloat(registo.umidade).toFixed(2);
                        const pres = parseFloat(registo.pressao).toFixed(2);
                        const razao = parseFloat(registo.razao_qualidade).toFixed(2);

                        // Constrói a linha da tabela
                        htmlLinhas += `
                            <tr>
                                <td>${registo.data_formatada}</td>
                                <td>${temp}</td>
                                <td>${umid}</td>
                                <td>${pres}</td>
                                <td>${razao}</td>
                                <td>${registo.valor_mq135}</td>
                                <td>${statusCooler}</td>
                            </tr>
                        `;
                    });
                }

            } catch (erro) {
                // Se o pedido falhar (ex: servidor desligado)
                console.error('Erro ao buscar dados:', erro);
                htmlLinhas = `<tr class="loading-row"><td colspan="7">Erro ao carregar dados. Verifique a consola.</td></tr>`;
            }
            
            // 5. Finalmente, substitui o conteúdo da tabela pelo novo HTML
            tabelaCorpo.innerHTML = htmlLinhas;
        }

        // --- PONTO PRINCIPAL ---
        
        // 1. Chama a função buscarDados() assim que a página carrega
        buscarDados();
        
        // 2. Cria um "temporizador" que chama a função buscarDados() a cada 5 segundos
        setInterval(buscarDados, 5000); // 5000 milissegundos = 5 segundos

    </script>
    </body>
</html>