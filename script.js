//configuração Firebase

const firebaseConfig = {

     apiKey: "AIzaSyAsFyvefj6hTUTZJ52jDX9wa_uqWFbeQFk",
     authDomain: "atividade-b80ae.firebaseapp.com",
     projectId: "atividade-b80ae",
     storageBucket: "atividade-b80ae.firebasestorage.app",
     messagingSenderId: "341377935732",
     appId: "1:341377935732:web:959b94629a218e304da421",
     measurementId: "G-EGES8GYVE3"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const btn = document.querySelector('button');
const campoNome = document.getElementById('campo-nome');
const campoEmail = document.getElementById('campo-email');
const campoSenha = document.getElementById('senha');

btn.addEventListener('click', () => {
        const nome = campoNome.value;
        const email = campoEmail.value;
        const senha = campoSenha.value;

        // 1. Definição da Regex (Expressão Regular)
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // 2. Verificação de campos vazios
        if (nome === "" || email === "" || senha === "") {
            alert("Ops! Você esqueceu de preencher algum campo.");
            return;
        }

        // 3. Validação do formato do e-mail usando .test()
        if (!regexEmail.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        // Se passou pelas validações acima:
        console.log("--- Novo Cadastro ---");
        console.log("Usuário:", nome);
        console.log("E-mail:", email);

        alert("Cadastro de " + nome + " realizado com sucesso!");
        window.location.href = "pagina-de-sucesso.html";

        // Limpar campos apenas para não mostrar o "rastros"
        campoNome.value = "";
        campoEmail.value = "";
        campoSenha.value = "";
    });


//cadastro

    document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita envio automático

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const cupom = document.getElementById('cupom').value.trim();
        const produto = document.getElementById('produto').value;

        let errorMsg = '';

        if (!nome || !email || !telefone || !cpf || !cupom || !produto) {
            errorMsg = 'Por favor, preencha todos os campos obrigatórios.';
        } else if (!/^\d{11}$/.test(cpf)) {
            errorMsg = 'CPF inválido. Digite apenas 11 números.';
        } else if (!/^\d{10,11}$/.test(telefone)) {
            errorMsg = 'Telefone inválido. Digite 10 ou 11 números.';
        }

        if (errorMsg) {
            document.getElementById('errorMsg').textContent = errorMsg;
        } else {
            document.getElementById('errorMsg').textContent = '';
            alert('Cadastro realizado com sucesso!');
            // Aqui você enviaria os dados para o servidor via fetch/AJAX
            // fetch('/cadastrar', { method: 'POST', body: new FormData(this) })
        }
    });

//home

 document.getElementById('HomeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita envio automático

     const produto = document.getElementById('produto').value;
 if (errorMsg) {
            document.getElementById('errorMsg').textContent = errorMsg;
        } else {
            document.getElementById('errorMsg').textContent = '';
            alert('Cadastro realizado com sucesso!');
            // Aqui você enviaria os dados para o servidor via fetch/AJAX
            // fetch('/cadastrar', { method: 'POST', body: new FormData(this) })
        }
    });