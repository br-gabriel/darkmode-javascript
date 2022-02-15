//Animations
//Cursor animation
//Responsive menu
//Seção com 3 icones com animação de 'aparecer'
//Carrossel

//Dark mode do menu

//Caso tenha mais conteúdo na página, adiciona a personalização do scroll

//Próximo passo - Criar o menu com o javascript

const alerta = () => {
    window.alert('Alerta!')
}

const darkMode = () => {
    buttonText = document.querySelector('.button')

    background = document.querySelector('body')
    title = document.querySelector('h1')
    text = document.querySelector('p')
    textLink = document.querySelector('p.link')
    box = document.querySelector('main')
    
    background.classList.toggle('dm-background')
    title.classList.toggle('dm-text')
    text.classList.toggle('dm-text')
    textLink.classList.toggle('dm-text')
    box.classList.toggle('dm-box')

    if (buttonText.innerHTML == 'Dark mode')
        buttonText.innerHTML = 'Light mode'
    else if (buttonText.innerHTML == 'Light mode')
        buttonText.innerHTML = 'Dark mode'
}

document.querySelector('.button-outline').addEventListener('click', alerta)
document.querySelector('.button').addEventListener('click', darkMode)