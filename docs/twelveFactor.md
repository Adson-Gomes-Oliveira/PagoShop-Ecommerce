# Documentação 12 Fatores

- **Primeiro Fator:** Base de Código - OK!
O Ecommerce segue o primeiro fator uma vez que existe apenas uma base de código com um
controle de versões feito pelo git e deploys sendo realizados, porém ainda não existe
outro ambiente para deploy senão o desenvolvimento, porém o código está pronto caso venha
a ter esses outros ambientes no futuro.

- **Segundo Fator:** Dependências - OK!
O segundo fator está sendo seguido uma vez que existe uma listagem das dependências no
arquivo package.json, que é facilmente executado através de um `npm install`.

- **Terceiro Fator:** Configurações - OK!
O terceiro fator está sendo implementado, utilizando as variaveis de ambiente foi possível
tornar a aplicação adaptavel a qualquer servidor não apenas ao servidor local de desenvolvimento.

- **Quarto Fator:** Serviços de Apoio - OK!
O quarto fator pede que os serviços de apoio sejam tratados como recursos ligados e isso acontece,
utilizando o mongoose e o sequelize, a taxa de acoplamento se torna baixa tornando possível a rapida
mudança se necessário.

- **Quinto Fator:** Construa, lançe e execute - OK!
No momento ainda existe apenas o ambiente de desenvolvimento, neste ambiente o Docker está cuidando desta
etapa, compilando o código, combinando com as configurações passadas, e disponibilizando para uso.

- **Sexto Fator:** Processos - OK!
O Ecommerce é uma aplicação executada como processo que não armazena estado, quaisquer dados que necessitam
de armazenamento são armazenados em serviços de apoio ( mysql e mongodb ).

- **Sétimo Fator:** Vínculo de Porta - OK!
O servidor expõe uma porta e apartir dela escuta requisições, se tornando assim auto-contido e não
dependente de outros serviços de servidores.

- **Oitavo Fator:** Concorrência - OK!
A aplicação foi pensada para o escalamento horizontal, sendo desenvolvida como microserviços tornando fácil
acoplar ou desacoplar modulos, como não existe um ambiente de produção não existem também ferramentas para lidar
com load balance, uma coisa que pode ser implementada é o uso de cachê.

- **Nono Fator:** Descartabilidade - OK!
A Aplicação sobe rapidamente e fecha suavemente reduzindo ao minimo ou impossibilitando a perda de dados.

- **Decimo Fator:** Dev/Prod Semelhantes - Ainda não implementado!
A aplicação ainda não foi lançada em produção nem tem um processo de CI/CD.

- **Decimo Primeiro Fator:** Logs - Em partes!
A aplicação lança os sucessos e erros de uma forma padronizada, porém ainda não existe uma centralização desses
logs, eles devem ser verificados em cada serviço.

- **Decimo Segundo Fator:** Processos de Admin - Em partes!
Existem já alguns processos administrativos, scripts que executam migrations por exemplo, porém por enquanto
estão sendo usados apenas em ambiente de teste. Ainda não existem outros tipos de processos administrativos
