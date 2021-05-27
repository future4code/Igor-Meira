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
  

#### **Exercício 5**


#### **Exercício 6**


#### **Exercício 7**


#### **Exercício 8**
