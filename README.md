<div align="center"><h1>Trooper-Ecommerce</h1></div>
<br />
<div align="center"><img src="https://i.ibb.co/jLKw3Mx/image.png" alt="thumbnail" /></div>
<br />
<br />
<div align="center">Este projeto foi desenvolvido para  mostrar minhas habilidades técnicas é um projeo fictício e não utilizado com fins comerciais, todo o código foi desenvolvido por mim e se trata de um Ecommerce de produtos da cultura POP, utilizando diversas tecnologias e conceitos, como estratégias e estruturas de microserviços, multi-repo, mensageria, entre outros.</div>
<br />
<br />
<h4>INSTRUÇÕES DE INSTALAÇÃO</h4>
<details>
<summary>:computer: Instalação Local</summary>
<br>

> Clone este repositório na sua maquina: `git clone git@github.com:Adson-Gomes-Oliveira/Trooper-Ecommerce.git`

> Agora faça o clone dos submodulos: `git submodule init && git submodule update`

> Instale as dependências necessárias em cada submodulo: `cd scripts && bash installDependencies.sh && cd ..`

> Inicie todos os servidores: `cd scripts && bash initiateServers.sh && cd ..`

> o frontend estará rodando na porta 3000 e o gateway na 5000
</details>
<details>
<summary>:whale: Utilizando o Docker</summary>
<br>

> Clone este repositório na sua maquina: `git clone git@github.com:Adson-Gomes-Oliveira/Trooper-Ecommerce.git`

> Agora execute os containers: `cd scripts && bash UpContainers.sh && cd ..`

> o frontend estará rodando na porta 3000 e o gateway na 5000
<br>
</details>
<details>
<summary>:floppy_disk: Populando o Banco</summary>
<br>

> No serviço de products, entre na pasta src > sedders e utilize mongoosh para popular o banco com os arquivos ali incluídos

> No serviço de accounts, entre na pasta src > sedders e utilize mongoosh para popular o banco com os arquivos ali incluídos

> No serviço de orders, após o npm install ser realizado com sucesso execute `npm run pre-start`

> No serviço de payments, após o npm install ser realizado com sucesso execute `npm run pre-start`
</details>
<br />
<h4>TECNOLOGIAS UTILIZADAS</h4>
<br />
<div align="center">
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="css3" />
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node.js" />
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react" />
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react-router" />
<img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" alt="jest" />
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="docker" />
<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="express" />
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
<img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql" />
<img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" alt="redis" />
<img src="https://img.shields.io/badge/rabbitmq-%23FF6600.svg?&style=for-the-badge&logo=rabbitmq&logoColor=white" alt="rabbitmq" />
</div>
<br />
<h4>CHECKLIST</h4>

- [x] Microserviços Essênciais
- [x] Cobertura de testes 90% +
- [x] API Gateway
- [x] Mensageria
- [x] Frontend
- [x] Actions
- [x] Deploy em cloud
- [ ] Corrigir pequenos bugs
<br />
<h4>INFORMAÇÕES ADICIONAIS</h4>

- Aplicação ainda não adaptada para dispositivos móveis
<br />

---

*Template desenvolvido com :white_heart: por <a href="https://github.com/Adson-Gomes-Oliveira">Adson Gomes Oliveira</a>* 
