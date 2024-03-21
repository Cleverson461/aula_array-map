const lista = [
    {
        nome: 'Jose',
        idade: 13
    },
    {
        nome: 'Marcelo',
        idade: 65
    },
    {
        nome: 'Fernanda',
        idade: 34
    },
    {
        nome: 'Gustavo',
        idade: 14
    },
    {
        nome: 'Heitor',
        idade: 10
    },
    {
        nome: 'Andre',
        idade: 69
    },
    {
        nome: 'Gabriela',
        idade: 56
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Sandra',
        idade: 23
    },
]

const converterObjeto = (objeto) => {
    return {
        ...objeto,
        nomeIdade: `${objeto.nome} - ${objeto.idade}`
    }
}

console.log(lista.map(converterObjeto))
