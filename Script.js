function realizarDivisao() {
    let primeiroValor = parseFloat(prompt("Informe o primeiro valor:"));
    let segundoValor;
  
    do {
      segundoValor = parseFloat(prompt("Informe o segundo valor (não pode ser zero ou negativo):"));
    } while (segundoValor <= 0);
    
  
    let resultado = primeiroValor / segundoValor;
    
  
    alert("O resultado da divisão é: " + resultado.toFixed(2));
  }
  

  function iniciarContagemRegressiva() {
    let segundos = 30;
  
    const countdown = setInterval(function() {
      document.write(segundos + "<br>");
      segundos--;
  
      if (segundos < 0) {
        clearInterval(countdown);
        document.write("EXPLOSÃO");
      }
    }, 1000);
  }

  function contagem() {
    for (let i = 10; i >= 1; i--) {
      document.write(i + "<br>");
    } }

    function calcularMediaAritmetica() {
      let soma = 0;
      let quantidadeNumeros = 0;
    
      for (let i = 15; i <= 100; i++) {
        soma += i;
        quantidadeNumeros++; 
      }
    
      const media = soma / quantidadeNumeros;

      document.write("A média aritmética dos números de 15 a 100 é: " + media);
    }

    function calcularMediaDoisNumeros() {
      
      let primeiroNumero = parseInt(prompt("Digite o primeiro número inteiro:"));
      let segundoNumero = parseInt(prompt("Digite o segundo número inteiro:"));
    
      if (primeiroNumero >= segundoNumero) {
        document.write("O primeiro número deve ser menor que o segundo.");
        return;
      }
    
      let soma = 0;
      let quantidadeNumeros = 0;
    
      for (let i = primeiroNumero; i <= segundoNumero; i++) {
        soma += i; 
        quantidadeNumeros++; 
      }
    

      const media = soma / quantidadeNumeros;
    
      document.write(
        `A média aritmética dos números inteiros entre ${primeiroNumero} e ${segundoNumero} é: ${media}`
      );
    }

    function calcularMedia() {
      let notas = [];
      let media = 0;
      let alunosAprovados = 0;
    
      do {
        let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
        let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
    
        notas.push((nota1 + nota2) / 2); 
    
        media = notas.reduce((total, nota) => total + nota) / notas.length;
    
        if (media >= 9.5) {
          alunosAprovados++;
        }
    
        let resposta = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();
        if (resposta !== 'S') {
          break;
        }
      } while (true);
    
      document.write(`Quantidade de alunos aprovados: ${alunosAprovados}`);
    }
    
    function calcularMediaAluno() {
      const totalNotas = 6;
      const notas = [];
      let media = 0;
    
      for (let i = 0; i < totalNotas; i++) {
        let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    
        while (nota < 0 || nota > 10 || isNaN(nota)) {
          nota = parseFloat(prompt(`Valor inválido. Digite uma nota entre 0 e 10 para a nota ${i + 1}:`));
        }
    
        notas.push(nota);
      }
      const soma = notas.reduce((acc, nota) => acc + nota, 0);
      media = soma / totalNotas;
    
      document.write(`A média do aluno é: ${media}`);
    }

    function imprimirValores() {
      const n = parseInt(prompt("Digite um valor para N:"));
    
      for (let i = 1; i <= n; i++) {
        document.write(i + "<br>");
      }
    }
    
    function imprimirNumerosMaioresQue100() {
      let count = 0;
      let num = 101;
    
      while (count < 10) {
        document.write(num + "<br>");
        count++;
        num++;
      }
    }
    function imprimirTabuadas() {
      const n = parseInt(prompt("Digite um valor para N:"));
    
      for (let i = 1; i <= n; i++) {
        document.write(`Tabuada do ${i}: <br>`);
        for (let j = 1; j <= 10; j++) {
          document.write(`${i} x ${j} = ${i * j} <br>`);
        }
        document.write("<br>");
      }
    }
    function verificarValores() {
      let dentroIntervalo = 0;
      let foraIntervalo = 0;
    
      for (let i = 0; i < 10; i++) {
        let valor = parseFloat(prompt(`Digite o valor ${i + 1}:`));
    
        if (valor >= 24 && valor <= 42) {
          dentroIntervalo++;
        } else {
          foraIntervalo++;
        }
      }
    
      document.write(`Valores dentro do intervalo [24, 42]: ${dentroIntervalo} <br>`);
      document.write(`Valores fora do intervalo [24, 42]: ${foraIntervalo}`);
    }
  

    
    
    