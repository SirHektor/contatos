// class Contatos {
//     constructor(nome, email, telefone){
//         this.nome=nome;
//         this.email=email;
//         this.telefone=telefone;
//     }
// }

// class GerenciadorContatos {
//     constructor(){
//         this.contatos = []
//     }

//     adicionarContatos(contato) {
//         this.contatos.push(contato);

//     }

//     exibirContatos(){
//         const listaContatos = document.getElementById()
//         ('contato-lista')
//         listaContatos.innerHTML = ''

//         for(const contato of this.contatos){
//             const li = document.createElement('li');
//             li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`

//             listaContatos.appendChild(li)
//         }
//     }


// }

// const gerenciadorContatos = new GerenciadorContatos();

// const contatoForm = document.getElementById('contato-form')
// const nomeForm = document.getElementById('nome');
// const emailForm = document.getElementById('email');
// const telefoneForm = document.getElementById('tel');
// const mostrarContatos = document.getElementById('mostrar-contatos');
// const ocultarContatos = document.getElementById('ocultar-contatos');
// const listaContatos = document.getElementById('contato-lista');

// contatoForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const nome = nomeForm.value;
//     const email = emailForm.value;
//     const telefone = telefoneForm.value;

//     const contato = new Contatos(nome, email, telefone);

//     gerenciadorContatos.adicionarContatos(contato)

//     nomeForm = ''
//     emailForm = ''
//     telefoneForm = ''
// });

// mostrarContatos.addEventListener('click', function(){
//     gerenciadorContatos.exibirContatos();
//     listaContatos.style.display = 'block'
// })

// ocultarContatos.addEventListener('click', function(){
//     listaContatos.style.display = 'none'
// })

// definindo a classe contatos
class Contatos {
    constructor(nome, email, telefone, empresa){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.empresa = empresa;
    }
}
// defimimdo a classe gerenciadorContatos
class GerenciadorContatos {
    constructor(){
        // inicializa a lista de contato =s vazia 
        this.contatos = []
    }

    adicionarContatos(contato) {
        // adiciona um  contato a lista de contatos 
        this.contatos.push(contato);
    }

    exibirContatos(){
        // obtem a lista de contatos 
        const listaContatos = document.getElementById('contato-lista')

        // limpa a lista de contatos
        listaContatos.innerHTML = '';

        // para cada novo contato na lista de contatos, cria um novo elemento 'li' e adiciona na lista de contatos
        for(const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.empresa}`;

            listaContatos.appendChild(li)
        }
    }
}
//cria um objeto da classe ferenciadorContatos
const gerenciadorContatos = new GerenciadorContatos();

// cria os elementos nessesarios
const contatoForm = document.getElementById('contato-form');
const emailForm = document.getElementById('email');
const nomeForm = document.getElementById('nome');
const telefoneForm = document.getElementById('tel');
const empresaForm = document.getElementById('empresa');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const contatoContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit',(event) => {
    event.preventDefault();

    const nome = nomeForm.value;
    const email = emailForm.value;
    const telefone = telefoneForm.value;
    const empresa = empresaForm.value;

    // criando objeto da classe contaato]
    const contato = new Contatos(nome, email, telefone, empresa);

    gerenciadorContatos.adicionarContatos(contato);

    nomeForm.value = ''
    emailForm.value = ''
    telefoneForm.value = ''
    empresaForm.value = ''
});

// estamos adicionando um manipulador de eventos para o botao mostrar contatos, ele exibe a lista de contatos 
mostrarContatos.addEventListener('click', function(){
    gerenciadorContatos.exibirContatos();
    contatoContatos.style.display = 'block'; // Alterado para 'contatoContatos'
});

ocultarContatos.addEventListener('click', function(){
    contatoContatos.style.display = 'none'; // Alterado para 'contatoContatos'
});
