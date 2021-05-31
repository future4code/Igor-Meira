# APROFUNDANDO SQL

#### **Exercício 1**
a. retira a coluna SALÁRIO.

b. troca o nome da coluna e aceita uma string com 6 letras.

c. troca o número de strings para 255 na coluna gender.

d. ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


#### **Exercício 2**
a. 
```sql
UPDATE Actor 
SET 
	name = "Moacyr Franco", 
	birth_date = "1942/03/28"
WHERE id = "003"
```
b. 
```sql
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";

UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
```
c.
```sql
UPDATE Actor
SET 
	name = "André Marques",
	birth_date = "1988-09-23",
    salary = 250000,
    gender = "male"
WHERE id = "005";
```

#### **Exercício 3**
a. ```sql DELETE FROM Actor WHERE name = "Fernanda Montenegro" ```

b. ```sql DELETE FROM Actor WHERE gender = "male" AND salary > 1000000; ```


#### **Exercício 4**
a. SELECT MAX(salary) FROM Actor;

b. SELECT MIN(salary) FROM Actor WHERE gender = "female";

c. SELECT COUNT(*) FROM Actor WHERE gender = "female"

d. SELECT SUM(salary) FROM Actor;

#### **Exercício 5**

a. Essa query separa os dados por grupos, no caso do gênero temos 2 grupos, e recebemos o resultado da quantidade dessa operação.

b. SELECT id, name FROM Actor ORDER BY name DESC;

c. SELECT * FROM Actor ORDER BY salary;

d. SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e. SELECT AVG(salary), gender FROM Actor GROUP BY gender;


#### **Exercício 6**

a. ALTER TABLE Movie ADD playing_limit_date DATE;

b. ALTER TABLE Movie CHANGE rating rating FLOAT;

c. ```sql 
UPDATE Movie SET playing_limit_date = "2021-06-30" WHERE id = "002"; 

UPDATE Movie SET playing_limit_date = "2019-05-30" WHERE id = "003"; ```

d. ```sql
DELETE FROM Movie WHERE id = "001"
UPDATE Movie SET synopsis = "meu filme é bom" WHERE id = "001"; ```
Não foi possível atulizar a sinopse pois não existe mais filme com esse id.


#### **Exercício 7**

a. 3

b. 9

c. 1

d. 0

e. 10

f. 8

#### **Exercício 8**

a. SELECT * FROM Movie ORDER BY title;

b. SELECT * FROM Movie ORDER BY title LIMIT 5;

c. SELECT * FROM Movie WHERE release_date < CURDATE()  ORDER BY release_date DESC  LIMIT 3;

d. SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
