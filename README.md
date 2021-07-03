# projeto-integrador

<p align="center">
<img src="https://i.imgur.com/SqKN2rp.png?1" alt="Imagem do logo do nosso projeto Do campo pra mesa é um círculo verde escuro com detalhes brancos e uma caixa com legumes em cima e em baixo escrito Do campo pra mesa" />
</p>

##  ⚙  Tecnologias utilizadas
<p align="center">
<img src="https://i.imgur.com/0yXQ93f.jpg" alt="tecnolgias utilizadas html, css, javascript, bootstrap, angular, typescript, java, spring boot, mysql, docker">
</p>

#### Modelagem: 
Usamos uma ferramenta online chamada db designer para montarmos o modelo do nosso banco de dados
<br>

#### Dependencias principais:
Utilizamos o Spring initializr para selecionar versão utilizada (Java 8) o gerenciador de dependências (Maven) e as dependencias iniciais do projeto: 
<br>
* **Spring Boot Dev Tools:** Permite que você consiga reiniciar sua aplicação. (melhora a experiência do desenvolvimento pois facilita o reaload do projeto)
* **Spring Web:** Para criar uma api usando spring mvc. (usa o apache contêiner incorporado por padrão
* **Spring Data Jpa:** Persistir dados em repositórios SQL com a API Java Persistence usando Spring Data e Hibernate
* **MySQL Driver:** Utilizamos o banco de dados relacional MySQL.
* **Validation:** Validador do Hibernate (Ex: @Size)
* **Spring Security:** Autenticação personalizavel e estrutura de controle de acesso para aplicativos Spring.

#### Camadas do projeto: 
<br>

* **Model:** Classe responsável pela abstração de nossos objetos e tabelas em nossos banco de dados.
* **Repository:** Interface responsável pela comunicação direta com o banco de dados.
* **Service:** Classe responsável por toda regra de negócio e tratativa de dados, sempre seguindo o modelo de negócio da aplicação.
* **Controller:** É a camada responsável por manipular todas as requisições feitas do lado de fora da nossa API, essas requisições são feitas através de URL's seguindo o protocolo HTTP.
* **Security:** Camada responsável por garantir a segurança do nosso endpoint. (Usamos Basic o usuário precisa de um login e senha para acessar a área logada para cadastro por exemplo dos produtos. O Spring security ele vai encryptar a senha e fazer uma consulta no nosso banco de dados para saber se o usuário existe. Se sim ele retorna como resposta o Authorization com o prefixo Basic + token)

<hr>

## 🚀 Deploy e Docker
<p>
<img align="left" src="https://i.imgur.com/illDKsD.png?1">
</p>

Deploy é a fase do desenvolvimento que passamos o que desenvolvemos para a produção. (Você desenvolve o aplicativo na sua máquina e depois coloca ele em um servidor). O deploy ele pode ser feito num contexto de máquina virtual ou em um contexto de contêiner.
<br></br>
Docker é um software contêiner da empresa Docker Inc com ele nós podemos colocar as aplicações em um contêiner que possui todos os recursos necessários e que permite e testar, implantar e publicar mais rapidamente.
<hr>



## 💪 O time
 <table>
  <tr>
    <td align="center"><a href="https://github.com/davidsalesdev"><img src="https://avatars0.githubusercontent.com/u/66379287?s=460&amp;u=52caf324c7257f87c67ecf0ddd9eff73c46b8e14&amp;v=4" width="100px;" alt=""/><br /><sub><b>David Sales</b></sub></a><br /><a href="#desenvolvedor-david" title="Desenvolvedor">:computer:</a></td>
    <td align="center"><a href="https://github.com/marcospacanaro"><img src="https://avatars2.githubusercontent.com/u/43709790?s=460&amp;u=b41e7633b5f9fd9e541d59a66a70d9ac4c357343&amp;v=4" width="100px;" alt=""/><br /><sub><b>Marcos Pacanaro </b></sub></a><br /><a href="#desenvolvedor-marcos" title="Desenvolvedor">:computer:</a></td>
   <td align="center"><a href="https://github.com/moniquejro"><img src="https://avatars1.githubusercontent.com/u/67790709?s=460&amp;u=b7e223fb6b05a908fbbf8cab9e7f7e8da05de57e&amp;v=4" width="100px;" alt=""/><br /><sub><b> Monique Jessica </b></sub></a><br /><a href="#desenvolvedora-monique" title="Desenvolvedora">:computer:</a></td>
   <td align="center"><a href="https://github.com/paulafigueiredo"><img src="https://avatars1.githubusercontent.com/u/55516024?s=460&amp;v=4" width="100px;" alt=""/><br /><sub><b> Paula Figueiredo </b></sub></a><br /><a href="#desenvolvedora-paula" title="Desenvolvedora">:computer:</a></td>
   <td align="center"><a href="https://github.com/vivianreis"><img src="https://avatars1.githubusercontent.com/u/14953339?s=460&amp;u=16d307524cfb0154d26492d08f954681d1e2150c&amp;v=4" width="100px;" alt=""/><br /><sub><b> Vivian Reis </b></sub></a><br /><a href="#desenvolvedora-vivian" title="Desenvolvedora">:computer:</a></td>
</table>
   
 

