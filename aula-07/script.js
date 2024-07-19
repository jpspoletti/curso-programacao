function cadastrar() {

    //atribuindo os valores dos campos nas variaveis
    const nome = document.getElementById('name').value;
    const email = document.getElementById('e-mail').value;
    const telefone = document.getElementById('telephone').value;
    const senha = document.getElementById('pass').value;
    const confirm = document.getElementById('confirmpass').value;

    //validação
    if (nome && email && telefone && senha) {
        if (senha !== confirm) {
            alert('a senha está diferente da confirmação');
            return;
        }
    }
    else {
        alert('Por favor preencha todos os campos');
        return;
    }
    //criando um obj do tipo usuario no formato JSON
    const usuario = {
        id: new Date().getTime(),
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha
    };


    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; //recuperar lista do LS ou criar lista vazia 
    usuarios.push(usuario); // adicionando usuario na lista
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); // armazenando a lista no formato string no LS
    document.getElementById('formulario').reset(); // limpando os campos do formulario

    alert('Usuário cadastrado com sucesso!👍')
}

function listarUsuarios() {

    //recuperar lista do LS ou criar lista vazia 
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    //obtendo a tabela do html
    var tabela = document.querySelector(".table tbody");
    tabela.innerHTML = ''; //limpando a tabela

    // inicializando o template.
    var tmplSource = document.getElementById("tmplLinha").innerHTML;
    var tmplHandle = Handlebars.compile(tmplSource);

    usuarios.forEach(usuario => {

        // preparando fragmento HTML.
        var linha = {};
        linha.template = document.createElement("template");
        linha.template.innerHTML = tmplHandle(usuario);
  
        // inserindo linha na tabela.
        tabela.appendChild(linha.template.content);

    });

}

function deletar(id) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios = usuarios.filter(usuario => usuario.id !== id);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    listarUsuarios();
}

function logar(){
    
}