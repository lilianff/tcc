<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Exemplo de validação básica
    if (empty($nome) || empty($email) || empty($senha)) {
        echo "Todos os campos são obrigatórios!";
        exit;
    }

    // Processa os dados (por exemplo, salvando em um banco de dados)
    // Aqui estamos apenas exibindo os dados para demonstração
    echo "<h3>Cadastro realizado com sucesso!</h3>";
    echo "<p><strong>Nome:</strong> " . htmlspecialchars($nome) . "</p>";
    echo "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
    // Nota: Em uma aplicação real, nunca exiba a senha diretamente e sempre armazene-a de forma segura.
}
?>
