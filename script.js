const personagemUm = document.querySelector('#personagem-um');
const nomeUm = document.querySelector('#p-um');
const personagemDois = document.querySelector('#personagem-dois');
const nomeDois = document.querySelector('#p-dois');
const personagemTres = document.querySelector('#personagem-tres');
const nomeTres = document.querySelector('#p-tres');
const personagemQuatro = document.querySelector('#personagem-quatro');
const nomeQuatro = document.querySelector('#p-quatro');
const botao = document.querySelector('button');



let nomeDoPersonagem = "";


gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);


}

pegarPersonagemUm = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then ((response) => response.json()).then((data) =>{
        personagemUm.src = data.image; 
        nomeUm.innerHTML = data.name;
        
    })
}

pegarPersonagemDois = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then ((response) => response.json()).then((data) =>{
        
        personagemDois.src = data.image;
        nomeDois.innerHTML = data.name;
        
    })
}

pegarPersonagemTres = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then ((response) => response.json()).then((data) =>{
        
        personagemTres.src = data.image;
        nomeTres.innerHTML = data.name;
        
    })
}

pegarPersonagemQuatro = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then ((response) => response.json()).then((data) =>{
        
        personagemQuatro.src = data.image;
        nomeQuatro.innerHTML = data.name;
        
    })
}


reload = () =>{
    pegarPersonagemUm();
    pegarPersonagemDois();
    pegarPersonagemTres();
    pegarPersonagemQuatro();
    botao.innerHTML = '+ personagens';
    nomeUm.style.opacity = 1;
    nomeDois.style.opacity = 1;
    nomeTres.style.opacity = 1;
    nomeQuatro.style.opacity = 1;
    nomeDoPersonagem = nomeDoPersonagem.toLowerCase();
    
}


botao.onclick = reload;


