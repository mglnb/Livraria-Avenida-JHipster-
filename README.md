# JHipster
JHipster é uma plataforma de desenvolvimento para geração, desenvolvimento e publicação de aplicativos web e _Spring microservices_ baseados nos frameworks [Spring Boot](http://projects.spring.io/spring-boot/) e [Angular](https://angularjs.org/)

## Objetivos
O JHipster tem como objetivo gerar uma aplicação web ou _microservice_ unindo: 
* Java no _server-side_ com alta performance e robusto através do Spring Boot
* Um moderno, lustroso, _mobile-first_ _front-end_ com Angular e Bootstrap
* Uma robusta arquitetura de _microservice_ com JHipster Registry, Netflix OSS, ELK Stack e Docker
* Um poderoso fluxo de trabalho para compilar sua aplicação com Yeoman, Webpack/Gulp e Maven/Gradle

### Alguns links do JHipster

[JHipster]( https://jhipster.github.io)  
[JHipster 4.5.4](https://jhipster.github.io/documentation-archive/v4.5.4)

[Introdução ao Framework JHipster - DevMedia](http://www.devmedia.com.br/introducao-ao-framework-jhipster/34043)

# Livraria Avenida
Essa aplicação foi gerada usando JHipster 4.5.4, voce pode encontrar a documentação e ajuda em [https://jhipster.github.io/documentation-archive/v4.5.4](https://jhipster.github.io/documentation-archive/v4.5.4).

## Desenvolvimento

Antes que você possa compilar este projeto voce deve instalar e configurar as seguintes dependências em sua máquina:

1. [Node.js](https://nodejs.org/en/): Nós usamos o Node para rodar um server de desenvolvimento web e compilar o projeto.

2. [Yarn](https://yarnpkg.com/pt-BR/): Nós usamos o Yarn para gerenciar as dependências do Node.

3. [Git](https://git-scm.com/): Para manter o controle de versão, e o terminal do git traz algumas vantagens que comentarei logo.

4. [Yeoman](http://yeoman.io/learning/index.html): Serve como o gerador de _scaffolding_ do projeto. Permite a gerar rapidamente novos projetos.

Após instalar o Node, você já tem a possibilidade de rodar os seguintes comandos para instalar as ferramentas de desenvolvimentos. 

## Iniciando o projeto 
Para instalar o gerador do JHipster, use este comando:

    yarn global add generator-jhipster

Logo que instalado já tens a possibilidade de rodar o comando `jhipster`.  
Crie uma pasta para armazenar o projeto.

    mkdir LivrariaAvenida
    cd LivrariaAvenida

Rode o comando `jhipster` e siga as instruções imprimidas na tela.

    (1/16) Which *type* of application would you like to create? 

Qual o tipo de aplicação você gostaria de criar? `Monolithic application (recommended for simple projects)`

    (2/16) What is the base name of your application? 
      
Qual vai ser o nome da sua aplicação? `LivrariaAvenida`

     (3/16) What is your default Java package name? 
 
Qual vai ser o nome da _package_ padrão do seu projeto? `br.com.livrariaavenida`
 
    (4/16) Do you want to use the JHipster Registry to configure, monitor and scale your application? 
 
Você deseja usar o `JHipster Registry` para configurar, monitorar, comparar sua aplicação? `Yes`  
 
    (5/16) Which *type* of database would you like to use? 
 
Qual tipo de banco de dados você irá utilizar? `SQL (H2, MySQL, MariaDB, PostgreSQL, Oracle, MSSQL)`
 
    (6/16) Which *production* database would you like to use?

Qual tipo de banco de dados você irá utilizar na produção? `MySQL`

    (7/16) Which *development* database would you like to use?
    
Qual tipo de banco de dados você irá utilizar no desenvolvimento? `H2 with disk-based persistence`
    
    (8/16) Do you want to use Hibernate 2nd level cache? 
    
Você deseja utilizar o 2º level de cache do Hibernate? `Yes, with ehcache (local cache, for a single node)`
    
    (9/16) Would you like to use Maven or Gradle for building the backend?
   
Você gostaria de utilizar `Maven` ou `Gradle` para compilar o _back-end_? `Maven`
   
    (10/16) Which other technologies would you like to use? (Press <space> to select, <a> to toggle all, <i> to inverse selection)
   
Que outras tecnologias você gostaria de usar? (Pressione `<espaço>` para selecionar, `<a>` para selecionar todos, `<i>` para inverter a seleção)   
   
    (11/16) Which *Framework* would you like to use for the client?
    
Que framework você gostaria de utilizar para o _front-end_? `Angular 4 (BETA)`
    
    (12/16) Would you like to use the LibSass stylesheet preprocessor for your CSS? 
    
Você gostaria de utilizar o SASS como pré-processador para seu CSS? `Yes`
    
    (13/16) Would you like to enable internationalization support?
     
Você gostaria de ativar o suporte a internacionalização `Yes`
     
    Please choose the native language of the application:
    
Por favor, selecione o idioma nativo da aplicação: `Portuguess (Brazil)`
    
    Please choose additional languages to install (Press <space> to select, <a> to toggle all, <i> to inverse selection)
 
Por favor, selecione idiomas adicionas para serem instalados (Pressione `<espaço>` para selecionar, `<a>` para selecionar todos, `<i>` para inverter a seleção)   
 
    (14/16) Besides JUnit and Karma, which testing frameworks would you like to use? 
    
Além do JUnit e do Karma, qual framework de teste você gostaria de utilizar?    
    
    (15/16) Would you like to install other generators from the JHipster Marketplace? 

Gostaria de instalar outros geradores disponiveis na `JHipster Marketplace` ?


Após responder estas perguntas, ele irá começar a gerar o projeto.

Logo então rode  para clonar o projeto

## Rodando o projeto

Para rodar o projeto no Windows, abra o Git Bash, vá até a pasta do projeto e digite

    ./mvnw

Assim irá rodar o _server-side_ do aplicativo, caso queira editar algum compontente cliente-side que necessite compilar o typescript, utilize também

    yarn start
    
E deixe os dois servers rodando para fazer as modificações.


## Rodando este projeto

Primeiramente deveremos clonar este repositorio com `git clone https://github.com/mglnb/Livraria-Avenida-JHipster.git`
Logo após clonar, para installar os arquivos necessários do framework rode

    yarn install

E então carregue as dependencias do maven através do git bash

    ./mvnw
   
e quanto o servidor server-side estiver rodando, digite:

    yarn start

## Vantagens
* Facilidade para iniciar o desenvolvimento.
* Rapidez na compilação.
* Browsersync para verificar as alterações no front-end sem precisar atualizar a pagina.
* Varios modulos prontos para iniciar o desenvolvimento.
* Diversas tecnologias com suporte padrão.
* Internacionalização de uma maneira bem facil.
* Geração de microservices.

## Desvantagens
* É uma tecnologia nova, portanto não tem tanta documentação brasileira na internet.
* Caso não tenha noções basicas de Spring ou Angular, poderá ficar muito confuso ser gerado tudo junto.

## Informações Adicionais

* [Video de configuração e instalação](https://www.youtube.com/watch?v=AVTfnMf_ghQ)

[Usando JHipster para desenvolvimento](https://jhipster.github.io/documentation-archive/v4.5.4/development/)  
[Usando Docker e Docker-Compose](https://jhipster.github.io/documentation-archive/v4.5.4/docker-compose)  
[Usando JHipster para produção](https://jhipster.github.io/documentation-archive/v4.5.4/production/)  
[Rodando paginas de teste](https://jhipster.github.io/documentation-archive/v4.5.4/running-tests/)  

* [Gatling](http://gatling.io/)  
* [Node.js](https://nodejs.org/)  
* [Yarn](https://yarnpkg.org/)  
* [Webpack](https://webpack.github.io/)  
* [Angular CLI](https://cli.angular.io/)  
* [BrowserSync](http://www.browsersync.io/)  
* [Karma](http://karma-runner.github.io/)  
* [Jasmine](http://jasmine.github.io/2.0/introduction.html)  
* [Protractor](https://angular.github.io/protractor/)  
* [Leaflet](http://leafletjs.com/)  
* [DefinitelyTyped](http://definitelytyped.org/)  
