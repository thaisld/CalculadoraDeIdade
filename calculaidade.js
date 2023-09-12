function calculaIdade(anoNascimento, anoAtual = new Date().getFullYear()) {
    if (anoNascimento <= anoAtual) {
        const idade = anoAtual - anoNascimento;
        return `Você tem ${idade} anos de idade.`;
    } else {
        return "Erro: Ano de nascimento maior que o ano atual.";
    }
}

console.log(calculaIdade(1984, 2023));
console.log(calculaIdade(2000, 2023)); 
console.log(calculaIdade(2005, 1990));
