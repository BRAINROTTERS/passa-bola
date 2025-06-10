alert("Seja bem-vindo ao formulario! Responda as perguntas e verifique o resultado!");

document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        pergunta: document.getElementById('pergunta'),
        resposta: document.getElementById('resposta'),
        proximaPergunta: document.getElementById("proximo"),
        mensagem: document.getElementById('message'),
        containerPerguntas: document.getElementById('container-perguntas'),
        containerResultado: document.getElementById('container-resultado'),
        listaResultado: document.getElementById('lista-resultado'),
        reiniciarBotao: document.getElementById('inicio-btn')
    };

    const questoes = [
        " QUAL SEU NOME ?",
       "QUAL POSIÇAO VOCÊ JOGA ?",
        "DESTRA OU CANHOTA ?",
        "TEM EXPERIENCIA EM COMPETIÇÕES ?",
        "QUAL SUA ALTURA ?",
        "QUAL SEU PESO ?",
        "QUAL SUA IDADE ?",
       
    ];

    let perguntaAtual = 0;
    const respostas = [];

    function mostrarPergunta() {
        elements.pergunta.textContent = questoes[perguntaAtual];
        elements.resposta.value = '';
        elements.mensagem.textContent = '';
        elements.resposta.focus(); // Foca automaticamente no campo de resposta
    }

    function mostrarResultado() {
        elements.containerPerguntas.classList.add('hidden');
        elements.containerResultado.classList.remove('hidden');
        elements.listaResultado.innerHTML = '';

        questoes.forEach((questao, index) => {
            const listaItem = document.createElement('li');
            listaItem.innerHTML = `<strong>${questao}</strong><br> Sua Resposta: <span>${respostas[index]}</span>`;
            elements.listaResultado.appendChild(listaItem);
        });
    }

    function proximaQuestao() {
        const respostaAtual = elements.resposta.value.trim();
        if (respostaAtual === '') {
            elements.mensagem.textContent = "Por favor, digite sua resposta";
            return;
        }
        
        respostas.push(respostaAtual);
        perguntaAtual++;
        
        if (perguntaAtual < questoes.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    }

    function reiniciarQuiz() {
        perguntaAtual = 0;
        respostas.length = 0;
        elements.containerResultado.classList.add('hidden');
        elements.containerPerguntas.classList.remove('hidden');
        mostrarPergunta();
    }

    // Configura eventos
    elements.proximaPergunta.addEventListener('click', proximaQuestao);
    elements.reiniciarBotao.addEventListener('click', reiniciarQuiz);

    // Inicia o questionário
    mostrarPergunta();
});