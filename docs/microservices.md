# Documentação Microserviços

- **Primeiro Padrão:** Data Services - OK! [ Aplicável ]
Já temos alguns serviços de dominio com sus proprias regras, sendo implementados.

- **Segundo Padrão:** Business Services - OK! [ Aplicável ]
O serviço de order atua como um Business Services uma vez que utiliza dos outros
Data Services para realizar uma operação mais complexa como gerar a nota fiscal.

- **Terceiro Padrão:** API Gateway - Ainda não implementado! [ Aplicável ]
Pode ser aplicado um API Gateway entre os serviços para lidar com autenticação,
ainda não existe a necessidade de Edge Services.

- **Quarto Padrão:** Process Aggregator - Ainda não implementado! [ Não Aplicavel ]
O sistema de Ecommerce que desenvolvemos não demanda um pattern de tão alto nivel por enquanto.

- **Quinto Padrão:** Edge Services - Ainda não implementado! [ Aplicavel ]
Ainda não existe a necessidade de Edge Services.

- **Sexto Padrão:** Single Service Database - Ainda não implementado! [ Aplicavel ]
Os bancos de dados estão sendo compartilhados, produtos - accounts e finance - order
mas com certeza é aplicavél essa separação uma vez que não existe necessidade de um
shared service database.

- **Sexto Padrão:** Async Events - Em partes! [ Aplicavel ]
Existem eventos assincronos como a geração de uma nota fiscal porém ainda é necessário
que o cliente espere a resposta.

- **Sétimo Padrão:** Logs Aggregation - Ainda não implementado! [ Aplicavel ]
Os Logs ainda não estão agregados.

- **Oitavo Padrão:** Metrics Aggregation - Ainda não implementado! [ Aplicavel ]
O sistema de Ecommerce ainda não possui um dashboard de métricas nem uma ferramenta
que trabalhe nesse sentido, mas é aplicável.
