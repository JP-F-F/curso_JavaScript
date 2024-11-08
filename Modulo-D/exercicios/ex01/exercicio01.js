function carregar() {
    var msg = window.document.getElementById('msg')
    var ft = document.getElementById('ft')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        document.getElementById('ft').style = 'background-color: gold'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 18) {
        ft.style = 'background-color: brown'
        document.body.style.background = '#b9846f'
    } else {
        ft.style = 'background-color: black'
        document.body.style.background = '#515154'
    }
}