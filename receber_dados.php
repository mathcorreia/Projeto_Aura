<?php
header("Content-Type: application/json");
$caminhoBanco = __DIR__ . '/database/dados_sensores.db';

try {
    $pdo = new PDO('sqlite:' . $caminhoBanco);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->exec("CREATE TABLE IF NOT EXISTS leituras (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        valor_mq135 INTEGER,
        razao_qualidade REAL,
        temperatura REAL,
        umidade REAL,
        pressao REAL,
        status_cooler INTEGER,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    $jsonRecebido = file_get_contents('php://input');
    $dados = json_decode($jsonRecebido, true);

    if (json_last_error() !== JSON_ERROR_NONE || 
        !isset($dados['valor_sensor_mq135']) || 
        !isset($dados['razao_qualidade']) ||
        !isset($dados['temperatura']) || 
        !isset($dados['umidade']) ||
        !isset($dados['pressao']) ||
        !isset($dados['status_cooler']) 
    ) {
        http_response_code(400);
        echo json_encode(['status' => 'erro', 'mensagem' => 'JSON inválido ou dados incompletos.']);
        exit;
    }

    $sql = "INSERT INTO leituras (valor_mq135, razao_qualidade, temperatura, umidade, pressao, status_cooler) 
            VALUES (:valor_mq135, :razao_qualidade, :temperatura, :umidade, :pressao, :status_cooler)";
    $stmt = $pdo->prepare($sql);

    $stmt->bindValue(':valor_mq135', $dados['valor_sensor_mq135'], PDO::PARAM_INT);
    $stmt->bindValue(':razao_qualidade', $dados['razao_qualidade']);
    $stmt->bindValue(':temperatura', $dados['temperatura']);
    $stmt->bindValue(':umidade', $dados['umidade']);
    $stmt->bindValue(':pressao', $dados['pressao']);
    $stmt->bindValue(':status_cooler', $dados['status_cooler'], PDO::PARAM_INT); // O PHP converte true/false para 1/0

    $stmt->execute();

    http_response_code(200);
    echo json_encode(['status' => 'sucesso', 'mensagem' => 'Todos os dados foram armazenados com sucesso.']);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'erro', 'mensagem' => 'Erro no servidor: ' . $e->getMessage()]);
}
?>