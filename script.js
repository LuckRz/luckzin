// Função para enviar a mensagem do usuário e gerar uma resposta do bot
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();

    if (userMessage === '') {
        return; // Não faz nada se a caixa de texto estiver vazia
    }

    // Exibe a mensagem do usuário na tela
    displayMessage(userMessage, 'user');
    
    // Limpa a caixa de entrada
    userInput.value = '';

    // Resposta do bot (apenas uma simulação simples)
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
    }, 1000); // O bot responde após 1 segundo
}

// Função para exibir as mensagens no chat
function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática para a última mensagem
}

// Função simples para gerar uma resposta do bot
function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('olá') || lowerMessage.includes('oi')) {
        return 'Olá! Como posso ajudar você?';
    } else if (lowerMessage.includes('preço')) {
        return 'O preço do nosso produto é R$ 199,99. Posso te ajudar com mais alguma coisa?';
    } else if (lowerMessage.includes('ajuda')) {
        return 'Claro! Como posso te ajudar?';
    } else {
        return 'Desculpe, não entendi. Pode reformular a sua pergunta?';
    }
}
