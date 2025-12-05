<?php
header("Content-Type: application/json");

$caminhoBanco = __DIR__ . '../database/dados_sensores.db';


$responseData = [
    'dados_atuais' => null,          
    'historico_24h' => [],          
    'atividade_cooler_24h' => [],    
    'ultimas_5_leituras' => []       
];

try {

    $pdo = new PDO('sqlite:' . $caminhoBanco);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmtAtual = $pdo->query("SELECT 
                                temperatura, 
                                umidade, 
                                pressao, 
                                razao_qualidade, 
                                status_cooler, 
                                timestamp 
                             FROM leituras 
                             ORDER BY timestamp DESC 
                             LIMIT 1");
    
    $dadosAtuais = $stmtAtual->fetch(PDO::FETCH_ASSOC);
    if ($dadosAtuais) {
        $responseData['dados_atuais'] = $dadosAtuais;
    }

    $sqlHistorico = "SELECT 
                        strftime('%Y-%m-%d %H:00', timestamp) as hora, 
                        AVG(razao_qualidade) as media_qualidade,
                        AVG(temperatura) as media_temperatura
                     FROM leituras 
                     WHERE timestamp >= datetime('now', '-24 hours') 
                     GROUP BY hora 
                     ORDER BY hora ASC";
                     
    $stmtHistorico = $pdo->query($sqlHistorico);
    $responseData['historico_24h'] = $stmtHistorico->fetchAll(PDO::FETCH_ASSOC);

    $sqlCooler = "SELECT 
                    status_cooler, 
                    COUNT(*) as total 
                  FROM leituras 
                  WHERE timestamp >= datetime('now', '-24 hours') 
                  GROUP BY status_cooler";
                  
    $stmtCooler = $pdo->query($sqlCooler);
    $dadosCooler = $stmtCooler->fetchAll(PDO::FETCH_ASSOC);
    
    $coolerFormatado = ['ligado' => 0, 'desligado' => 0];
    foreach ($dadosCooler as $row) {
        if ($row['status_cooler'] == 1) {
            $coolerFormatado['ligado'] = (int)$row['total'];
        } else {
            $coolerFormatado['desligado'] = (int)$row['total'];
        }
    }
    $responseData['atividade_cooler_24h'] = $coolerFormatado;

    $stmtTabela = $pdo->query("SELECT 
                                timestamp, 
                                temperatura, 
                                umidade, 
                                pressao, 
                                razao_qualidade 
                             FROM leituras 
                             ORDER BY timestamp DESC 
                             LIMIT 5");
                             
    $responseData['ultimas_5_leituras'] = $stmtTabela->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode($responseData);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'erro', 'mensagem' => 'Erro no servidor: ' . $e->getMessage()]);
}
?>