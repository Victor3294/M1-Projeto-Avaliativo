# ReciclaFloripa

ReciclaFloripa

---

## Descrição

O **ReciclaFloripa** é uma aplicação que resolve o problema de encontrar lugares que fazem coleta de material reciclável, ele faz isso através de sua incrivel base de dados que contem diversos locais de coletas registrados, e com a possibilidade de adição de mais locais através dos usuários. Foi desenvolvido usando o React, o CSS para sua estilização e o JSON-Server como sua base de dados e sua api. 

---

## Executando o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório do GitHub:
   ```bash
   git clone https://github.com/Victor3294/M1-Projeto-Avaliativo.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Inicie a aplicação:
   ```bash
   npm run dev
   ```

5. Inicie o json-server:
    ```bash
    json-server --watch db.json
    ```

6. Acesse a aplicação no seu navegador.

---

## Melhorias Futuras

Algumas melhorias que podem ser aplicadas ao projeto incluem:

- Adição de um mapa para mostrar os locais de coleta
- Controle de usuário, controlar quem pode editar um local de coleta, invés de ser aberto para qualquer usuário, apenas o que registrou ou o administrador poder alterar
- Uma melhoria na estilização e a adição de responsividade no projeto, pois ele suporta apenas telas grande no momento
- Uso de uma api real, em vez do json-server criar um banco de dados para esse projeto, e sua propria api em cima disso
- Uma validação melhor nos formulários, pois agora ele apenas valida a obrigatoriedade deles
- E assim por diante

---

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
