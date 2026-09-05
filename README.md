# FUNDAMENTOS FORTES DE TYPESCRIPT

## Fascículo de Exercícios Práticos

**10 Exercícios — Da Calculadora ao Sistema Completo de Loja**

### Conteúdos

* Variáveis e tipos de dados
* Operadores e condicionais
* Funções e métodos
* Arrays e loops
* Classes e objetos
* Encapsulamento
* Herança
* Polimorfismo
* Abstração
* Validações
* Debugging

---

# Índice de Exercícios

| #  | Exercício                       | Conteúdos                                |
| -- | ------------------------------- | ---------------------------------------- |
| 01 | Sistema de Calculadora          | Tipos, operadores, condicionais, funções |
| 02 | Sistema de Notas de Alunos      | Tipos, condicionais, funções, validações |
| 03 | Jogo de Adivinhação             | Loops, condicionais, funções, debugging  |
| 04 | Analisador de Números           | Arrays, loops, funções                   |
| 05 | Sistema de Cadastro de Produtos | Arrays, POO, funções                     |
| 06 | Sistema Bancário                | POO, encapsulamento, classes             |
| 07 | Sistema de Funcionários         | Herança, polimorfismo, classes           |
| 08 | Sistema de Biblioteca           | POO, arrays, encapsulamento              |
| 09 | Sistema de Gestão de Alunos     | POO, herança, polimorfismo               |
| 10 | Sistema Completo de Loja        | Projeto final — todos os fundamentos     |

---

# EXERCÍCIO 01

## Sistema de Calculadora

### Objetivo

Praticar:

* Variáveis e tipos de dados
* Operadores
* Entrada e saída de dados
* Condicionais
* Funções

### Enunciado

Crie um programa em **TypeScript** que funcione como uma calculadora básica.

O programa deve solicitar ao usuário dois números e apresentar um menu com as seguintes operações:

```text
===== CALCULADORA =====

1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
5 - Resto da divisão
0 - Sair

Escolha uma opção:
```

O usuário deverá escolher uma operação e o programa deverá executar a operação correspondente.

### Requisitos

O programa deve:

* Ler dois números do usuário.
* Mostrar o menu de operações.
* Executar a operação escolhida.
* Mostrar o resultado.
* Impedir divisão por zero.
* Informar quando uma opção inválida for escolhida.
* Organizar cada operação em uma função separada.

Por exemplo:

```ts
function somar(): number {}

function subtrair(): number {}

function multiplicar(): number {}

function dividir(): number {}
```

### Exemplo

```text
Primeiro número: 20
Segundo número: 5

===== CALCULADORA =====

1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
5 - Resto
0 - Sair

Escolha: 4

Resultado: 4
```

### Desafio Extra

Faça o programa continuar funcionando até o usuário escolher:

```text
0 - Sair
```

---

# EXERCÍCIO 02

## Sistema de Notas de Alunos

### Objetivo

Praticar:

* Variáveis
* Tipos
* Operadores
* Condicionais
* Funções
* Entrada de dados
* Validações

### Enunciado

Crie um programa que permita calcular a situação acadêmica de um aluno.

O programa deverá solicitar:

* Nome do aluno
* Nota da primeira prova
* Nota da segunda prova
* Nota do trabalho

Depois deverá calcular a média final.

### Fórmula

```text
média = (prova1 + prova2 + trabalho) / 3
```

### Regras

|           Média | Situação    |
| --------------: | ----------- |
|         `>= 14` | Aprovado    |
| `>= 10 && < 14` | Recuperação |
|          `< 10` | Reprovado   |

### Exemplo

```text
Nome: João
Nota da prova 1: 15
Nota da prova 2: 12
Nota do trabalho: 14

Média: 13.67
Situação: Recuperação
```

### Requisitos

Crie funções para:

```ts
calcularMedia()
verificarSituacao()
mostrarResultado()
```

### Validações

O programa não deve aceitar notas menores que `0` ou maiores que `20`.

Se o usuário informar:

```text
Nota: 25
```

Deve aparecer:

```text
Nota inválida!
Digite novamente.
```

### Desafio Extra

Permita cadastrar vários alunos e, no final, mostre:

```text
Total de alunos: 10
Aprovados: 6
Recuperação: 2
Reprovados: 2
```

---

# EXERCÍCIO 03

## Jogo de Adivinhação

### Objetivo

Praticar:

* Variáveis
* Tipos
* Condicionais
* Loops
* Operadores
* Funções
* Entrada de dados
* Debugging

### Enunciado

Crie um jogo em que o computador escolha aleatoriamente um número entre `1` e `100`.

O jogador deverá tentar descobrir qual é o número.

A cada tentativa, o programa deverá informar:

* Se o número informado é maior que o número secreto.
* Se é menor.
* Se acertou.

### Exemplo

```text
===== JOGO DE ADIVINHAÇÃO =====

Estou pensando em um número entre 1 e 100.

Digite sua tentativa: 50

O número secreto é maior!

Digite sua tentativa: 75

O número secreto é menor!

Digite sua tentativa: 63

Parabéns! Você acertou!
```

### Requisitos

O programa deverá:

* Gerar um número aleatório.
* Solicitar tentativas continuamente.
* Comparar a tentativa com o número secreto.
* Contar o número de tentativas.
* Informar quantas tentativas foram necessárias.

### Exemplo final

```text
Parabéns!

Número descoberto: 63
Número de tentativas: 7
```

### Desafio Extra

Crie níveis:

```text
1 - Fácil   → 1 a 50
2 - Médio   → 1 a 100
3 - Difícil → 1 a 500
```

---

# EXERCÍCIO 04

## Analisador de Números

### Objetivo

Praticar:

* Arrays tipados
* Loops
* Condicionais
* Funções

### Enunciado

Crie um programa que solicite ao usuário **10 números inteiros**.

Armazene todos os números em um array:

```ts
const numeros: number[] = [];
```

Depois que os números forem inseridos, o programa deverá apresentar:

* Maior número
* Menor número
* Soma dos números
* Média
* Quantidade de números pares
* Quantidade de números ímpares

### Exemplo

```text
Entrada:

Digite o número 1: 10
Digite o número 2: 5
Digite o número 3: 8
...
```

Resultado:

```text
===== RESULTADO =====

Maior número: 20
Menor número: 2
Soma: 87
Média: 8.7
Pares: 6
Ímpares: 4
```

### Requisitos

Crie funções separadas para:

```ts
calcularMaior()
calcularMenor()
calcularSoma()
calcularMedia()
contarPares()
contarImpares()
```

### Desafio Extra

Permita que o usuário determine o tamanho do array:

```text
Quantos números deseja inserir? 20
```

---

# EXERCÍCIO 05

## Sistema de Cadastro de Produtos

### Objetivo

Praticar:

* Arrays
* Métodos
* Loops
* Condicionais
* Entrada e saída
* Programação Orientada a Objetos
* Tipagem

### Enunciado

Crie um sistema simples de cadastro de produtos.

Cada produto deverá possuir:

```ts
codigo: number
nome: string
preco: number
quantidadeEstoque: number
```

Crie uma classe:

```ts
class Produto {
    // ...
}
```

### Menu

```text
===== SISTEMA DE PRODUTOS =====

1 - Cadastrar produto
2 - Listar produtos
3 - Pesquisar produto
4 - Atualizar estoque
5 - Sair
```

### Cadastrar Produto

O usuário deverá informar:

```text
Código: 101
Nome: Teclado
Preço: 15000
Quantidade: 20
```

### Listar Produtos

O programa deverá mostrar:

```text
Código: 101
Nome: Teclado
Preço: 15000 Kz
Estoque: 20

----------------------

Código: 102
Nome: Mouse
Preço: 8000 Kz
Estoque: 15
```

### Pesquisar Produto

O usuário poderá pesquisar pelo código.

Se encontrar:

```text
Produto encontrado!

Código: 101
Nome: Teclado
Preço: 15000 Kz
Estoque: 20
```

Caso contrário:

```text
Produto não encontrado.
```

### Desafio Extra

Ao atualizar o estoque, não permita que a quantidade fique negativa.

---

# EXERCÍCIO 06

## Sistema Bancário

### Objetivo

Praticar fortemente:

* POO
* Classes
* Objetos
* Encapsulamento
* Métodos
* Condicionais
* Loops
* Modificadores de acesso do TypeScript

### Enunciado

Crie um pequeno sistema bancário.

Crie uma classe:

```ts
class ContaBancaria {
    // ...
}
```

Ela deverá possuir:

```ts
numeroConta
titular
saldo
```

Os atributos deverão ser privados:

```ts
private numeroConta: string;
private titular: string;
private saldo: number;
```

### Métodos

Crie métodos para:

```ts
depositar()
sacar()
consultarSaldo()
```

### Menu

```text
===== BANCO =====

1 - Depositar
2 - Sacar
3 - Consultar saldo
4 - Mostrar dados da conta
0 - Sair
```

### Depósito

O usuário informa:

```text
Valor do depósito: 50000
```

O saldo deverá ser atualizado.

### Levantamento

O usuário informa:

```text
Valor do levantamento: 10000
```

O sistema deverá verificar se existe saldo suficiente.

Caso contrário:

```text
Saldo insuficiente!
```

### Regras

Não permita:

* Depósito negativo.
* Levantamento negativo.
* Levantamento superior ao saldo.

### Desafio Extra

Crie uma segunda conta e permita realizar transferência entre duas contas.

Por exemplo:

```ts
contaOrigem.transferir(contaDestino, 10000);
```

---

# EXERCÍCIO 07

## Sistema de Funcionários

### Objetivo

Praticar:

* Classes
* Objetos
* Encapsulamento
* Herança
* Polimorfismo
* Métodos
* Tipagem

### Enunciado

Crie um sistema para representar funcionários de uma empresa.

Crie uma classe:

```ts
class Funcionario {
    // ...
}
```

Ela deverá possuir:

```ts
nome: string
idade: number
salario: number
```

Depois crie duas classes derivadas:

```text
Funcionario
├── Gerente
└── Desenvolvedor
```

### Gerente

O gerente recebe um bônus de `20%` sobre o salário.

Exemplo:

```text
Salário: 500000 Kz
Bônus: 100000 Kz
Salário final: 600000 Kz
```

### Desenvolvedor

O desenvolvedor recebe um bônus de `10%`.

### Requisito Importante

Na classe `Funcionario`, crie um método:

```ts
calcularSalario()
```

Depois faça as classes `Gerente` e `Desenvolvedor` sobrescreverem esse método.

O objetivo é praticar **polimorfismo**.

### Programa Principal

Crie vários funcionários e mostre:

```text
===== FUNCIONÁRIOS =====

Nome: João
Cargo: Gerente
Salário final: 600000 Kz

-------------------------

Nome: Carlos
Cargo: Desenvolvedor
Salário final: 440000 Kz
```

### Desafio Extra

Crie um array tipado como:

```ts
const funcionarios: Funcionario[] = [];
```

Adicione objetos `Gerente` e `Desenvolvedor`.

Depois percorra o array:

```ts
for (const funcionario of funcionarios) {
    funcionario.calcularSalario();
}
```

Sem precisar verificar manualmente qual é o tipo de funcionário.

---

# EXERCÍCIO 08

## Sistema de Biblioteca

### Objetivo

Praticar:

* POO
* Classes
* Objetos
* Encapsulamento
* Arrays
* Loops
* Condicionais
* Métodos
* Entrada e saída

### Enunciado

Crie um sistema simples de biblioteca.

Crie uma classe:

```ts
class Livro {
    // ...
}
```

Com:

```ts
id: number
titulo: string
autor: string
anoPublicacao: number
disponivel: boolean
```

Crie também uma classe:

```ts
class Biblioteca {
    // ...
}
```

A biblioteca deverá conseguir armazenar vários livros.

Por exemplo:

```ts
private livros: Livro[] = [];
```

### Menu

```text
===== BIBLIOTECA =====

1 - Cadastrar livro
2 - Listar livros
3 - Pesquisar livro
4 - Emprestar livro
5 - Devolver livro
0 - Sair
```

### Cadastrar

Exemplo:

```text
ID: 1
Título: TypeScript para Iniciantes
Autor: João Silva
Ano: 2025
```

### Emprestar

O usuário informa o ID.

Se o livro estiver disponível:

```text
Livro emprestado com sucesso!
```

Caso já esteja emprestado:

```text
Este livro não está disponível.
```

### Devolver

O sistema deverá alterar o estado do livro para disponível.

### Listagem

Mostrar:

```text
ID: 1
Título: TypeScript para Iniciantes
Autor: João Silva
Ano: 2025
Estado: Disponível
```

### Desafio Extra

Crie uma classe:

```ts
class Usuario {
    // ...
}
```

E permita registrar quem pegou cada livro.

---

# EXERCÍCIO 09

## Sistema de Gestão de Alunos

### Objetivo

Este é um exercício intermediário/avançado de fundamentos.

Você deverá combinar:

* Variáveis
* Tipos
* Condicionais
* Loops
* Funções
* Arrays
* POO
* Encapsulamento
* Herança
* Polimorfismo
* Debugging

### Enunciado

Crie um sistema de gestão acadêmica.

O sistema deverá permitir cadastrar alunos e suas notas.

Crie uma classe:

```ts
class Aluno {
    // ...
}
```

Com:

```ts
id: number
nome: string
idade: number
notas: number[]
```

O aluno deverá possuir três notas.

### Métodos

Crie:

```ts
calcularMedia()
verificarSituacao()
mostrarDados()
```

### Situação

Utilize:

```text
Média >= 14 → Aprovado
Média >= 10 → Recuperação
Média < 10  → Reprovado
```

### Menu

```text
===== GESTÃO ACADÊMICA =====

1 - Cadastrar aluno
2 - Listar alunos
3 - Pesquisar aluno
4 - Mostrar melhor aluno
5 - Mostrar pior aluno
6 - Estatísticas
0 - Sair
```

### Estatísticas

O sistema deverá apresentar:

```text
Total de alunos: 20
Aprovados: 12
Recuperação: 5
Reprovados: 3

Média geral da turma: 13.7

Melhor aluno: João
Maior média: 18.2
```

### Requisito

Evite colocar toda a lógica dentro da função `main()`.

Crie classes e métodos responsáveis pelas suas próprias tarefas.

### Desafio Extra

Crie uma classe abstrata ou utilize herança para representar diferentes tipos de alunos:

```text
Aluno
├── AlunoRegular
└── AlunoBolsista
```

Em TypeScript, você pode utilizar:

```ts
abstract class Aluno {
    // ...
}
```

---

# EXERCÍCIO 10 — PROJETO FINAL

# Sistema Completo de Loja

### Objetivo

Este é o projeto final.

Aqui você deverá juntar praticamente tudo que estudou.

### Enunciado

Crie um sistema de gerenciamento de uma pequena loja.

O sistema deverá permitir gerenciar:

* Produtos
* Clientes
* Vendas
* Estoque

### Classes Mínimas

Crie pelo menos:

```text
Loja
├── Produto
├── Cliente
├── Venda
└── ItemVenda
```

### Produto

Deverá possuir:

```ts
codigo: number
nome: string
preco: number
quantidadeEstoque: number
```

### Cliente

Deverá possuir:

```ts
id: number
nome: string
telefone: string
```

### Venda

Deverá possuir:

```ts
id: number
cliente: Cliente
itens: ItemVenda[]
total: number
```

### ItemVenda

Deverá representar um produto vendido.

Por exemplo:

```ts
class ItemVenda {
    produto: Produto;
    quantidade: number;
    subtotal: number;
}
```

---

# Menu Principal

```text
===============================
        SISTEMA DA LOJA
===============================

1 - Gerenciar produtos
2 - Gerenciar clientes
3 - Realizar venda
4 - Consultar estoque
5 - Consultar vendas
6 - Relatórios
0 - Sair
```

---

# Gerenciamento de Produtos

```text
1 - Cadastrar
2 - Listar
3 - Pesquisar
4 - Atualizar preço
5 - Atualizar estoque
```

---

# Gerenciamento de Clientes

```text
1 - Cadastrar cliente
2 - Listar clientes
3 - Pesquisar cliente
```

---

# Realizar Venda

O sistema deverá:

1. Solicitar o cliente.
2. Solicitar o produto.
3. Solicitar a quantidade.
4. Verificar se existe estoque suficiente.
5. Calcular o subtotal.
6. Permitir adicionar outros produtos.
7. Calcular o total da venda.
8. Diminuir os produtos vendidos do estoque.
9. Mostrar o recibo.

### Exemplo

```text
========== RECIBO ==========

Cliente: João Manuel

Produto       Qtd     Preço     Subtotal
Teclado       2       15.000    30.000
Mouse         1        8.000     8.000
Monitor       1       80.000    80.000

-----------------------------------------

TOTAL: 118.000 Kz

-----------------------------------------

Venda realizada com sucesso!
```

---

# Relatórios

O sistema deverá conseguir mostrar:

```text
===== RELATÓRIOS =====

1 - Produto mais vendido
2 - Produto com menor estoque
3 - Total de vendas
4 - Valor total vendido
5 - Número de clientes
6 - Número de produtos
```

---

# Regras Importantes

O sistema não deve permitir:

* Cadastrar produto com preço negativo.
* Cadastrar quantidade negativa.
* Vender produto sem estoque.
* Vender quantidade negativa.
* Pesquisar produto inexistente sem informar o usuário.
* Cadastrar cliente com dados vazios.
* Realizar venda sem cliente.
* Realizar venda sem produtos.

---

# Regra de Implementação

Não coloque todo o programa dentro de uma única função `main()`.

Organize o projeto utilizando classes, funções e responsabilidades bem definidas.

Uma possível estrutura:

```text
src/
│
├── main.ts
│
├── models/
│   ├── Produto.ts
│   ├── Cliente.ts
│   ├── Venda.ts
│   └── ItemVenda.ts
│
└── Loja.ts
```

A arquitetura básica deverá seguir a ideia:

```text
Main
 │
 └── Loja
      ├── Produto
      ├── Cliente
      ├── Venda
      └── ItemVenda
```

---

# Desafio Final

Depois de terminar o projeto, tente melhorar o sistema utilizando recursos do TypeScript como:

* `interface`
* `type`
* `private`
* `public`
* `protected`
* `readonly`
* `abstract`
* `extends`
* `implements`
* Generics
* Union Types
* Optional Properties
* Type Guards

O objetivo não é apenas fazer o programa funcionar, mas **aprender a modelar o problema utilizando o sistema de tipos do TypeScript**.
