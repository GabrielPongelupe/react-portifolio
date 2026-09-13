---
title: Notação Big O: como medir a eficiência de um algoritmo
excerpt: Como medir e comparar a eficiência de algoritmos: o que é a notação Big O, em que ela difere de Ômega e Teta, e como cada classe de complexidade se parece na prática, com exemplo de código para cada uma.
readTime: 10 min de leitura
---

Um código rápido no seu notebook pode virar um gargalo em produção, e isso não é falta de sorte, é matemática. Cronômetro mede a máquina, não o algoritmo. Quem mede o algoritmo de verdade é a notação Big O: ela descreve como o custo de uma solução cresce junto com o tamanho da entrada (n), não em segundos. Abaixo, cada conceito vem com um exemplo em JavaScript e uma analogia curta, pra você nunca mais confundir O(n) com O(n²).

## Por que não um cronômetro?

Roda a mesma função no seu notebook e num servidor na nuvem: os números saem diferentes, mas o algoritmo continua sendo o mesmo. É que o tempo de execução depende de fatores que nada dizem sobre a qualidade do código: hardware, linguagem, ambiente, até o formato dos dados de entrada. Por isso a análise de algoritmos ignora o cronômetro e usa funções de complexidade: expressões que descrevem como o número de operações cresce com o tamanho da entrada, analisadas em três cenários (melhor caso, caso médio, pior caso). Falta só uma pergunta: como comparar duas dessas funções de forma justa?

## Big O, Ômega e Teta: os três limites assintóticos

A resposta são três réguas assintóticas. Big O (O) mede o limite superior: "no pior cenário, quanto esse algoritmo pode custar?", e é de longe a mais usada, porque garante um teto de segurança. Ômega (Ω) é o espelho, o limite inferior, o melhor cenário possível. Teta (Θ) aparece quando os dois coincidem, descrevendo o comportamento exato. Exemplo: busca binária tem melhor caso Ω(1) e pior caso O(log n); Bubble Sort sem otimização de parada antecipada é Θ(n²) sempre, porque sua estrutura de comparações não muda.

## As classes de complexidade, uma por uma

Com essas réguas em mãos, dá pra colocar qualquer algoritmo numa escala clara, da mais barata pra mais cara. Cada classe abaixo vem com um exemplo de código e uma analogia.

## O(1): tempo constante

O número de operações não muda, não importa o tamanho da entrada. É como pegar a carta do topo de um baralho, tenha ele 10 ou 10 mil cartas.

~~~js
function primeiroElemento(lista) {
  return lista[0];
}
~~~

## O(log n): tempo logarítmico

A cada passo, uma parte da entrada é descartada, geralmente a metade. É como abrir um dicionário no meio e ignorar metade das páginas a cada tentativa. Só funciona em listas já ordenadas:

~~~js
function buscaBinaria(lista, alvo) {
  let inicio = 0;
  let fim = lista.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    if (lista[meio] === alvo) return meio;
    if (lista[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }

  return -1;
}
~~~

## O(n): tempo linear

O custo cresce na mesma proporção da entrada: dobrar a lista dobra as operações. É como conferir uma lista de compras item por item, sem atalho:

~~~js
function maiorValor(lista) {
  let maior = lista[0];
  for (const valor of lista) {
    if (valor > maior) maior = valor;
  }
  return maior;
}
~~~

## O(n log n): tempo linearítmico

Aparece quando um algoritmo divide o problema ao meio repetidamente e ainda processa cada elemento em cada divisão. É a classe dos algoritmos de ordenação mais eficientes, como o Merge Sort:

~~~js
function mergeSort(lista) {
  if (lista.length <= 1) return lista;

  const meio = Math.floor(lista.length / 2);
  const esquerda = mergeSort(lista.slice(0, meio));
  const direita = mergeSort(lista.slice(meio));

  return intercalar(esquerda, direita);
}

function intercalar(esquerda, direita) {
  const resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] <= direita[j]) resultado.push(esquerda[i++]);
    else resultado.push(direita[j++]);
  }

  return resultado.concat(esquerda.slice(i), direita.slice(j));
}
~~~

## O(n²): tempo quadrático

Um loop dentro de outro, cada um percorrendo a entrada inteira. É como perguntar, numa festa de n pessoas, se cada uma faz aniversário no mesmo mês que todas as outras. Exemplo clássico: Bubble Sort:

~~~js
function bubbleSort(lista) {
  const n = lista.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (lista[j] > lista[j + 1]) {
        [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
      }
    }
  }
  return lista;
}
~~~

## O(2ⁿ): tempo exponencial

Cada elemento a mais na entrada dobra o número de operações. Típico de algoritmos que exploram todas as combinações possíveis sem descartar nada, como o Fibonacci recursivo "ingênuo", que recalcula os mesmos subproblemas repetidas vezes:

~~~js
function fibonacciRecursivo(n) {
  if (n <= 1) return n;
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}
~~~

## O(n!): tempo fatorial

A pior classe de todas: o custo cresce com o fatorial da entrada. Aparece em problemas que geram todas as ordens possíveis de um conjunto, como as permutações de uma lista. Só 10 elementos já dão mais de 3 milhões de combinações:

~~~js
function permutacoes(lista, inicio = 0) {
  if (inicio === lista.length - 1) {
    console.log(lista);
    return;
  }

  for (let i = inicio; i < lista.length; i++) {
    [lista[inicio], lista[i]] = [lista[i], lista[inicio]];
    permutacoes(lista, inicio + 1);
    [lista[inicio], lista[i]] = [lista[i], lista[inicio]];
  }
}
~~~

Na prática, algoritmos exponenciais e fatoriais só servem para entradas pequenas. Passado um certo n, nem o computador mais potente do mundo dá conta.

## Fibonacci: o mesmo problema, três custos diferentes

Fibonacci mostra bem isso: o mesmo problema pode ter implementações com custos radicalmente diferentes. A versão recursiva "ingênua" acima gera uma árvore de chamadas que cresce exponencialmente, porque fibonacciRecursivo(n - 2) é recalculado dezenas de vezes dentro da árvore de fibonacciRecursivo(n - 1). A versão iterativa resolve o mesmo problema em O(n), calculando cada termo uma única vez:

~~~js
function fibonacciIterativo(n) {
  let anterior = 0;
  let atual = 1;
  for (let i = 0; i < n; i++) {
    [anterior, atual] = [atual, anterior + atual];
  }
  return anterior;
}
~~~

E existe um meio-termo: a memoização guarda resultados já calculados num cache, transformando a versão recursiva de exponencial em linear sem perder a elegância da recursão:

~~~js
function fibonacciMemo(n, cache = new Map()) {
  if (n <= 1) return n;
  if (cache.has(n)) return cache.get(n);

  const resultado = fibonacciMemo(n - 1, cache) + fibonacciMemo(n - 2, cache);
  cache.set(n, resultado);
  return resultado;
}
~~~

## Complexidade de tempo vs. complexidade de espaço

Até aqui, "custo" significou número de operações. Mas existe uma segunda dimensão: a memória usada. A versão iterativa de Fibonacci é O(n) em tempo e O(1) em espaço, porque usa só duas variáveis. A memoizada também é O(n) em tempo, mas O(n) em espaço, porque o cache guarda um resultado por valor de n. Memoização troca memória por velocidade: uma decisão de engenharia real, não só acadêmica.

## O Teorema Mestre, com exemplos

Para recorrências de divisão e conquista, no formato T(n) = a·T(n/b) + f(n) (a é o número de subproblemas, n/b o tamanho de cada um, f(n) o custo fora da recursão), o Teorema Mestre resolve a complexidade direto, sem expandir a recorrência manualmente.

A ideia: comparar f(n) com n^(log_b a), o custo que a recursão teria sozinha. Daí saem três casos.

Caso 1: f(n) cresce mais devagar que n^(log_b a), ou seja, f(n) = O(n^c) para algum c < log_b a. O custo é dominado pelas folhas da árvore, e T(n) = Θ(n^(log_b a)).
Exemplo: T(n) = 8T(n/2) + n². a = 8, b = 2, log_b a = 3. Como f(n) = n² cresce mais devagar que n³, T(n) = Θ(n³).

Caso 2: f(n) cresce na mesma taxa que n^(log_b a). O custo se distribui entre os níveis da árvore, e T(n) = Θ(n^(log_b a) · log n).
Exemplo: o próprio Merge Sort. a = 2, b = 2, log_b a = 1. Como f(n) = n cresce na mesma taxa que n¹, T(n) = Θ(n log n).

Caso 3: f(n) cresce mais rápido que n^(log_b a), satisfazendo uma condição de regularidade (a·f(n/b) ≤ k·f(n) para algum k < 1). O custo é dominado pela raiz, e T(n) = Θ(f(n)).
Exemplo: T(n) = 2T(n/2) + n². a = 2, b = 2, log_b a = 1. Como f(n) = n² cresce mais rápido que n¹, T(n) = Θ(n²).

Quando f(n) fica "entre" dois casos, como f(n) = n / log n, o teorema não se aplica e é preciso outra ferramenta, como o método da substituição.

Fica o essencial: antes de otimizar qualquer coisa, é preciso saber nomear o problema. Big O é o vocabulário para isso.

## Para quem quiser se aprofundar

- Cormen, Leiserson, Rivest & Stein, "Introduction to Algorithms" (o "CLRS"): a referência clássica sobre análise de algoritmos e recorrências.
- MIT OpenCourseWare, curso 6.006 "Introduction to Algorithms": aulas gravadas sobre notação assintótica e o Teorema Mestre.
