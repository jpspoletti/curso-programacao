document.addEventListener('DOMContentLoaded', listarUsuarios);

function salvarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome && email && senha) {
        const usuario = {
            id: new Date().getTime(),
            nome: nome,
            email: email,
            senha: senha
        };

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Dados salvos com sucesso!');
        listarUsuarios();
        document.getElementById('cadastroForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function listarUsuarios() {
    const listaUsuarios = document.getElementById('listaUsuarios');
    listaUsuarios.innerHTML = '';

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.innerHTML = `${usuario.nome} (${usuario.email}) 
                        <span class="actions">
                            <button onclick="editarUsuario(${usuario.id})">Editar</button>
                            <button onclick="deletarUsuario(${usuario.id})">Deletar</button>
                        </span>`;
        listaUsuarios.appendChild(li);
    });
}

function editarUsuario(id) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(usr => usr.id === id);

    if (usuario) {
        document.getElementById('nome').value = usuario.nome;
        document.getElementById('email').value = usuario.email;
        document.getElementById('senha').value = usuario.senha;

        deletarUsuario(id);
    }
}

function deletarUsuario(id) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios = usuarios.filter(usuario => usuario.id !== id);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    listarUsuarios();
}

function pesquisarUsuario() {
    const pesquisa = document.getElementById('pesquisa').value.toLowerCase();
    const listaUsuarios = document.getElementById('listaUsuarios');
    listaUsuarios.innerHTML = '';

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios = usuarios.filter(usuario => usuario.nome.toLowerCase().includes(pesquisa));

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.innerHTML = `${usuario.nome} (${usuario.email}) 
                        <span class="actions">
                            <button onclick="editarUsuario(${usuario.id})">Editar</button>
                            <button onclick="deletarUsuario(${usuario.id})">Deletar</button>
                        </span>`;
        listaUsuarios.appendChild(li);
    });
}
