//Consumindo a API

async function getPeople(){
    const response = await fetch('https://randomuser.me/api/?results=10')

    return response.json()
}

//testando o retorno de dados
//getPeople().then( data => console.log(data))

//função para retornar somente mulheres

/*getPeople().then(data =>{
    const people = data.results
    console.log(people.filter(p => p.gender == 'female'))
})*/


//trabalhando com dados

getPeople().then(data =>{
    const result = data.results
    const people = []

    for (let p of result){
        people.push( {
            'Nome' : `${p.name.first} ${p.name.last}`,
            'Sexo': p.gender,
            'idade': p.age
        } )
    }

    console.table(people)
})