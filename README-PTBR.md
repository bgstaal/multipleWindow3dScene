# Cenário 3D de múltiplas janelas utilizando Three.js

## Introdução
Este projeto demonstra uma forma única de criar e gerenciar um cenário 3D através de múltiplas janelas de navegadores utilizando Three.js e localStorage. Foi feito com alvo em desenvolvedores interessados em gráficos web avançado e técnicas
de gerenciamento de janelas.

## Funções
- Criação e renderização de cenas 3D com Three.js.
- Sincronização de cenas 3D através de múltiplas janelas de navegador.
- Gerenciamento dinâmico de janelas e sincronização de estado utilizando localStorage.

## Instalação
Clone o repositório e abra 'index.html' no seu navegador para começar a explorar a cena 3D.

```
git clone https://github.com/bgstaal/multipleWindow3dScene
```
## Uso
A lógica da aplicação principal está contida em 'main.js' e 'WindowManager.js'. A cena 3D está renderizada em 'index'html', que serve como ponto de entrada para a aplicação.

## Estrutura e Componentes
- `index.html`: Ponto de entrada que configura a estrutura HTML e inclui a biblioteca Three.js e o script principal.
- `WindowManager.js`: Criação do núcleo de classe de gerenciamento de janela, sincronização, e gerenciamento de estado através de múltiplas janelas.
- `main.js`: Contém a lógica para a inicialização da cena 3D, manuseio de eventos das janelas, e renderização da cena.
- `three.r124.min.js`: Versão minimizada da biblioteca Three.js usada para a renderização de gráficos 3D.

## Funcionalidade Detalhada
- `WindowManager.js` Manuseia o ciclo de vida de múltiplas janelas de navegador, incluindo criação, sincronização, e remoção. É utilizado local o localStorage para manter o estado entre as janelas.
- `main.js` Inicializa a cena 3D utilizando Three.js, gerencia os eventos de redimensionar janelas, e atualiza a cena baseado nas interações nas janelas.

## Contribuições
Contribuições para melhorar ou expandir o projeto são bem-vindas. Sinta-se a vontade para dar fork no repositório, fazer mudanças, e enviar pull requests.

## Licença
Este projeto é open-source sob a Licença do MIT.

## Créditos
- Ao time do Three.js por esta biblioteca.
- x.com/didntdrinkwater por ter feito o readme original.

## Contact
Para mais informações e atualizações, siga [@_nonfigurativ_](https://twitter.com/_nonfigurativ_) no Twitter.
