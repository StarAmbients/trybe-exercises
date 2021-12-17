# BLOCO 5 - JAVASCRIPT - DOM, EVENTOS E WEB STORAGE :white_check_mark: 

Esse bloco pertence ao mÃ³dulo de `fundamentos` do curso da [Trybe](https://www.betrybe.com/). Nesse bloco aprendi sobre o famoso DOM, a estrutura que faz a ponte entre o HTML e o JavaScript e que permite interação entre os dois. Por fim, aprendi um pouco sobre algumas das interações possíveis: vi como recuperar dados do HTML através do JavaScript.

Em resumo, a página HTML/CSS/JS que eu faço é um programa. O navegador é quem interpreta esse código e, a partir dele, gera a página que eu vejo na Internet.

Pois bem, o DOM é uma estrutura da minha página que o navegador monta quando lê. O seu intuito é justamente permitir ao programa acessar os elementos da página usando código e dar a ele o poder de manipulá-las.
Exemplos de manipulaçoes:
- Adicionar e remover elementos HTML da página via JavaScript;
- Buscar os elementos da página com a propriedade parentNode;
- Mudar o conteúdo, estilo e outros atributos de elementos HTML a partir de eventos do JavaScript;
- Aplicar no meu código JavaScript eventos de click e change , entre outros.

Alem disso, aprendi sobre Web Storage . Web Storage provê mecanismos para que as aplicações web possam salvar dados nos browsers das pessoas.
Antes do HTML 5 , as aplicações tinham que salvar os dados locais em cookies, que eram enviados para o servidor a cada requisição do browser. Web Storage é mais seguro e tem a capacidade de salvar uma quantidade maior de dados sem afetar o desempenho da página.
Ao contrário dos Cookies, o limite de armazenamento é muito maior (pelo menos 5MB), e as informações não são transferidas para o servidor durante as requisições.
Web Storage é por origem (por domínio e protocolo). Todas as páginas de uma origem podem salvar e acessar os mesmos dados. Por exemplo, se o domínio betrybe.com salva o dado X no Web Storage , o domínio course.betrybe.com consegue ler esse dado X.
