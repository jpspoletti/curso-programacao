function cadastrar(){
    window.location.replace("tela-cadastro.html");
}

function login(){
    window.location.replace("tela-login.html");
}

function Lista(){
    window.location.replace("tela-lista-usuarios.html");
}

function logout(){
    localStorage.setItem('usulog', '')
    alert('usuario deslogado com sucesso')
}

function telaInicial(){
    window.location.replace("tela-inicial.html");
}

