# BLOCO 9 - JAVASCRIPT E TESTES ASSINCRONOS

Neste bloco, que finaliza o primeiro modulo do curso da Trybe, fui capacidada a:
- Aplicar corretamente operações assíncronas;
- Utilizar callbacks corretamente;
- Utilizar o Jest para testar suas callbacks ;
- Reaproveitar configurações para diversos testes por meio do uso de beforeEach e afterEach.

Páginas da web não existem sozinhas. Elas carregam imagens, iframes, conteúdo ou recuperam todo tipo de informações de outros lugares que não seus próprios servidores. E depender de algo externo ao meu sistema para fazer algo traz uma problemática: e se o serviço do qual eu dependo sair do ar? E se os servidores dele estiverem lentos? O que acontece com minha página?

Em uma lógica normal, sequencial de programação, minha página esperaria o serviço dar retorno ou voltar ao ar para continuar. Ou seja, a página ficaria quebrada, ou teria todo o seu carregamento freado em função de um problema totalmente fora do seu controle. Para lidar com esse problema e outros de natureza similar, existe um conceito que é muito poderoso e presente no JavaScript: a assincronicidade.

 Em vez de o programa ser carregado todo em sequência, uma linha após a outra, linhas que podem trazer esse tipo de problema podem "ficar carregando", enquanto o resto do meu programa executa normalmente. A execução dessa linha, a espera pela disponibilidade desse serviço, corre paralelamente ao desenvolver do restante do código. É uma execução assíncrona . E isso tem muito poder.

A comunicação com serviços de terceiros é parte do dia a dia de qualquer pessoa que programa. Seja para coletar tweets, seja para abrir um mapa do Google Maps, ou até mesmo se comunicar com um banco de dados ou serviço interno da organização, APIs são sempre a forma de se fazer isso. Entender o que são e como usá-las, ou seja, como fazer sua aplicação se comunicar com elas, é absolutamente fundamental. Entrei em contato com esse conceito e o praticarei por todo o restante do curso.
Tenham em mente que assincronismo não é um conceito trivial!

Finalmente, neste bloco tambem organizei melhor o ambiente de testes por meio da divisão em blocos, evitando repetição de código e facilitando na escrita e leitura dos testes.