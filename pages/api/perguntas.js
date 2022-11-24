export default (req, res) => {
  var perguntas = [
    {
      id: 1,
      pergunta: 'QUANTOS continentes tem o mundo? ',
      respostas: { a: '1', b: '4', c: '3', d: '6' },
      resposta_certa: 'b',
    },
    {
      id: 2,
      pergunta: 'RAMO DO EXERCITO TEM COMO OBJECTIVO PROTEGER QUE ESPAÇO?',
      respostas: {
        a: 'ESPAÇO MARITIMO ',
        b: 'ESPAÇO AERO',
        c: 'ESPAÇO TERRESTRE',
        d: 'TODOS OS ESPAÇOS',
      },
      resposta_certa: 'c',
    },
    {
      id: 3,
      pergunta: 'Qual é a extenção territotial de Angola? ',
      respostas: {
        a: '80043500 km^2',
        b: '3453000400 km^2',
        c: '1246700km^2',
        d: '24455600km^2',
      },
      resposta_certa: 'c',
    },
    {
      id: 4,
      pergunta: 'QUEM FOI O PRIMEIRO HOMEM A PISAR NA LUA ',
      respostas: {
        a: 'ARÃO ELIAS ',
        b: 'YUR CARGARIM',
        c: 'ANDRE MANUEL ',
        d: ' JOSÉ DE SOUSA ',
      },
      respostacerta: 'b',
    },
    {
      id: 5,
      pergunta: 'QUAL É A RAIZ QUADRADA DE 81? ',
      respostas: { a: '16', b: '9', c: '4', 22: '36' },
      respostacerta: 'b',
    },
    {
      id: 6,
      pergunta: 'EM QUE ANO ANGOLA TORNOU-SE INDEPENDENTE? ',
      respostas: {},
      resposta_certa: '1975',
    },
    {
      id: 7,
      pergunta: 'QUAL É A DERIVADA DA FUNÇÃO X^2? ',
      respostas: { a: 'X', b: '3X^2', c: '2', d: '2X' },
      respostacerta: 'd',
    },
    {
      id: 8,
      pergunta: 'QUAL É O SIMBOLO QUIMICO DO DIOXIDO DE CARBONO? ',
      respostas: { a: 'H20', b: 'NA', c: 'CO2', d: 'H' },
      respostacerta: 'c',
    },
  ];
  res.status(200).json({ questions: perguntas });
};
