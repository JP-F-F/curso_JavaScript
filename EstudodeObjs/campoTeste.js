const carro = {
    marca: 'ford',
    modelo: 'ka',
    placa: '666Hell',
    buzina: function() { alert('BI BI') },
    completo: function() {
        return `A marca é ${this.marca}, e o modelo é ${this.modelo}.`
    }
}

//chamando o metodo
console.log(carro.completo())