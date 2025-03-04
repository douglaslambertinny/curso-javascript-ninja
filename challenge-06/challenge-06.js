/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Paulista'
console.log(championship)

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthians','São Paulo', 'Palmeiras', 'Bragantino', 'Ferroviário']

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
    */
function showTeamPosition2(posicao){
    if (posicao < 1 || posicao > 5){
        return console.log("Não temos a informação do time que está nessa posição.")
    };
    return console.log('O time que está em ' + posicao + 'º lugar é o ' + teams[posicao-1])

};
function showTeamPosition(posicao){
    //talvez receba dois parametros
    var team = '';
    switch (posicao) {
        case 1:
            team = teams[0]
            break;
        case 2:
            team = teams[1]
            break;        
        case 3:
            team = teams[2]
            break;               
            
        case 4:
            team = teams[3]
            break;        

        case 5:
            team = teams[4]
            break;
    
        default:
            return console.log("Não temos a informação do time que está nessa posição.")
        }
    return console.log('O time que está em ' + posicao + 'º lugar é o ' + team)

};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// showTeamPosition(0);
// showTeamPosition(1);
// showTeamPosition(2);
// showTeamPosition(3);
// showTeamPosition(6);
showTeamPosition2(0);
showTeamPosition2(1);
showTeamPosition2(2);
showTeamPosition2(3);
showTeamPosition2(6);



/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20
while (counter <= 30){
    console.log(counter);
    counter ++;
};

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
    var cores = {
        'Amarelo': '#FFFF00',
        'Vermelho': '#FF0000', 
        'Azul': '#0000FF',
        'Verde': '#008000',
        'Preto': '#000000'
    }
    frase = 'O hexadecimal para a cor ' + cor
    switch (cor) {
        case 'Amarelo':
            return console.log(frase + ' é ' + cores[cor])
            break;        
            case 'Vermelho':
            return console.log(frase + ' é ' + cores[cor])
            break;        
            case 'Azul':
            return console.log(frase + ' é ' + cores[cor])
            break;        
            case 'Verde':
            return console.log(frase + ' é ' + cores[cor])
            break;        
            case 'Preto':
            return console.log(frase + ' é ' + cores[cor])
            break;
        default:
            return console.log("Não temos o equivalente hexadecimal para " + cor + ".")
            break;
    }
};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('Verde');
convertToHex('Amarelo');
convertToHex('Azul');
convertToHex('Preto');
convertToHex('Marrom');
convertToHex('Vermelho');
convertToHex('Lilás');
convertToHex('Laranja');