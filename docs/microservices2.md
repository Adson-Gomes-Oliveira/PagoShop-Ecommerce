# Documentação Microserviços II

- **Padronização**: As stacks estão padronizadas.
Temos o javascript como linguagem principal, o Express está sendo usado para
contruir nossa aplicação, mysql para serviços que envolvem financeiro e
mongo para os demais.

- **Service Discovery**: Em prod o projeto não utiliza o IP diretamente
Ainda não foi implementado uma solução personalizada de DNS mas utilizando o
Docker as requisições são feitas utilizando o nome do container não o IP.

- **Segurança**: Temos alguns pontos de segurança
Não estamos armazenando as senhas dos usuarios diretamente no banco, elas passam
por uma criptografia, além de termos um sistema de autenticação e um gateway
estar sendo desenvolvido, mas ainda existem pontos a serem implementados como,
por exemplo, criptografia de disco, e banco de dados cifrado.

- **Falhas**: Ainda não foi impolementada nenhuma solução nesse sentido
Um circuit beraker precisaria de algo, no gateway talvez, que fechasse a
conexão a um serviço falho.

- **Comunicação Assíncrona**: Será implementado com RabbitMQ
O RabbitMQ será implementado para lidar com comunicação assíncrona, assim
processos demorados não travarão o usuário e uma notificação seria enviada
posteriormente quando o processo for finalizado.
