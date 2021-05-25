# SQL

#### **Exercício 1**
a. 
* CREATE TABLE cria uma tabela e devemos colocar tudo o que essa tabela espera; 
* VARCHAR(n) é uma string com o máximo de caraceres a serem determinados em 'n';
* PRIMARY KEY é todo o identificador de todo item criado;
* NOT NULL indica que o valor não pode ser nulo;
* DATE espera uma data.

b.
* SHOW DATABASE: esse comando mostra o nome do banco de cada usuário;
* SHOW TABLES: mostra todas as tabelas que o seu usuário tem armazenado.

c. Mostra como a tabela é montada e quais dados essa tabela comporta.


#### **Exercício 2**
a.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b. Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' - Mostra que a chave primária está duplicada e por isso é impossível acrescentar o dado à tabela, pois cada item deve ter sua própria chave.

c. Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1 - Este erro mostra que existem mais itens listados do que "parâmetros" a serem recebidos.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d. Código de erro: 1364. O campo 'nome' não tem um valor padrão - Indica que o campo nome não pode ser nulo.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Eri Johnson",
  400000,
  "1949-04-18", 
  "male"
);

e. Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

f. 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Babu Santana",
  800000,
  "1978-07-10", 
  "male"
);




