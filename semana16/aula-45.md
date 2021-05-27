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
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b. Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' - Mostra que a chave primária está duplicada e por isso é impossível acrescentar o dado à tabela, pois cada item deve ter sua própria chave.

c. Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1 - Este erro mostra que existem mais itens listados do que "parâmetros" a serem recebidos.
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d. Código de erro: 1364. O campo 'nome' não tem um valor padrão - Indica que o campo nome não pode ser nulo.
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Eri Johnson",
  400000,
  "1949-04-18", 
  "male"
);
```

e. Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1 - O formato precisa ser YYYY/MM/DD

f. 
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Babu Santana",
  800000,
  "1978-07-10", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Fatima Bernardes",
  1300000,
  "1975-11-28", 
  "female"
);
```


#### **Exercício 3**

a. SELECT * from Actor WHERE gender = "female";

b. SELECT name, salary from Actor WHERE id = "001";

c. SELECT id, name from Actor WHERE gender = "invalid"; - Não retorna nenhum valor e nem ocorre um erro, pois não existe este valor na query de atores.

d. SELECT id, name, salary from Actor WHERE salary < 500000;

e. Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' - O certo seria escrever NAME, que é o valor correto da coluna.


#### **Exercício 4**

a. De maneira simples a query acima restringe a busca para artistas cujo os nomes começam com a letra A ou a letra J, filtrando também os que recebem salário acima de 300000.

b. SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

c. SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d. SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  

#### **Exercício 5**

a.
```sql
CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
synopsy TEXT NOT NULL,
release_date DATE NOT NULL,
rating TINYINT NOT NULL
);
```

b. c. d. 
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
), (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
), (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
), (
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```


#### **Exercício 6**

a. SELECT id, title, rating FROM Movie WHERE id = "003";

b. SELECT * FROM Movie WHERE title = "Deus é brasileiro";

c. SELECT * FROM Movie WHERE rating >= 7;


#### **Exercício 7**

a. SELECT * FROM Movie WHERE title LIKE "%vida%";

b. SELECT * FROM Movie WHERE title LIKE "%Deus%" OR synopsis LIKE "%uma%";

c. SELECT * FROM Movie WHERE release_date < "2020-05-27";

d.
```sql
SELECT * FROM Movie WHERE release_date < "2020-05-27" AND 
      (title LIKE "%Deus%" OR
      synopsis LIKE "%Deus%") AND rating > 7;
```
