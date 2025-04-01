let valueButton = []
let vezJogador = "X"
let venceu = false

function newGame() {
    window.location.reload()
}

function trocaVez() {
    if(vezJogador == "X") {
        vezJogador = "O"
    }
    else if(vezJogador == "O") {
        vezJogador = "X"
    }
}

function acaoBotao(botao) {
    if(document.getElementById(botao.id).innerHTML == "" && venceu == false) {
        document.getElementById(botao.id).innerHTML = vezJogador
        trocaVez()
        verificaGanhador()
        velha()
    }
}

function verificaGanhador() {
    for(i = 1; i <= 9; i = i + 3) {
        let valorBotao = document.getElementById(`button${i}`).innerHTML
        if(valorBotao != "" && document.getElementById(`button${i + 1}`).innerHTML == valorBotao && document.getElementById(`button${i + 2}`).innerHTML == valorBotao) {
            document.getElementById("resultado").innerHTML = `O jogador ${valorBotao} venceu!!!`
            venceu = true
        }
    }
    for(i = 1; i <= 3; i = i + 1) {
        let valorBotao = document.getElementById(`button${i}`).innerHTML
        if(valorBotao != "" && document.getElementById(`button${i + 3}`).innerHTML == valorBotao && document.getElementById(`button${i + 6}`).innerHTML == valorBotao) {
            document.getElementById("resultado").innerHTML = `O jogador ${valorBotao} venceu!!!`
            venceu = true
        }
    }
    for(i = 1; i <= 3; i = i + 2) {
        let valorBotao = document.getElementById(`button${i}`).innerHTML
        if(valorBotao != "" && document.getElementById("button5").innerHTML == valorBotao && document.getElementById(`button${10 - i}`).innerHTML == valorBotao) {
            document.getElementById("resultado").innerHTML = `O jogador ${valorBotao} venceu!!!`
            venceu = true
        }
    }
}

function velha() {
    for(i = 1; i <= 9; i++) {
        let valorBotao = document.getElementById(`button${i}`).innerHTML
        if(valorBotao == "") {
            return
        }
    }
    (document.getElementById("resultado").innerHTML = "Deu velha!!!")
}