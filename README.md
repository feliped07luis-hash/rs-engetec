[README.md](https://github.com/user-attachments/files/35384809/README.md)
# RS Engetec

Site institucional da **RS Engetec**, empresa de engenharia elétrica em Brasília, DF, com 20 anos de mercado.

O visual é inspirado na paleta de cores do pôr do sol do GTA VI (rosa, laranja, amarelo, roxo e ciano neon). O projeto usa apenas HTML, CSS e JavaScript puro, sem frameworks e sem etapa de build.

**Site no ar:** https://feliped07luis-hash.github.io/rs-engetec/



## O que o site tem

- **Topo** com pôr do sol, mar com reflexo e palmeiras desenhados em SVG
- **Serviços:** instalações prediais e residenciais, projetos luminotécnicos, montagem de quadros, manutenção e laudos
- **Produtos** utilizados nas obras
- **Como trabalhamos**, em quatro etapas
- **Projetos executados**, com filtro por tipo (predial, residencial, iluminação e quadros)
- **Sobre**, com o responsável técnico Luis Felipe Silva
- **Contato:** formulário com validação que abre a conversa no WhatsApp com a mensagem pronta
- **Localização:** mapa da UDF, na Asa Sul, com botão "Como chegar"
- **Modo escuro e modo claro**, com a escolha salva no navegador
- **Botão flutuante de WhatsApp**
- Layout responsivo, para computador e celular

## Estrutura de arquivos

```
rs-engetec/
├── index.html      # estrutura e textos da página
├── style.css       # cores, layout e modo escuro/claro
├── script.js       # menu, filtro de projetos, formulário, tema e contadores
├── README.md
└── img/            # imagens dos projetos e da seção "Sobre"
    ├── predial.jpg / predial.svg
    ├── residencial.jpg / residencial.svg
    ├── iluminacao.jpg / iluminacao.svg
    ├── quadros.jpg / quadros.svg
    ├── apartamento.jpg / apartamento.svg
    ├── condominio.jpg / condominio.svg
    └── sobre.jpg / sobre.svg
```

Cada imagem tem uma versão `.jpg` (foto) e uma `.svg` (ilustração). O site usa a foto quando ela existe e mostra a ilustração como reserva quando ela não existe.

## Como rodar no seu computador

1. Baixe ou clone este repositório.
2. Abra a pasta no VS Code.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server** (extensão Live Server). Também funciona abrindo o `index.html` direto no navegador.

O mapa e as fontes precisam de internet para carregar.

## Como personalizar

| O que mudar | Onde |
|---|---|
| Número do WhatsApp do formulário | constante `WHATSAPP` no início do `script.js` |
| Projetos exibidos | lista `projetos` no `script.js` |
| Textos, serviços e produtos | `index.html` |
| Cores | variáveis no início do `style.css` (`--rosa`, `--laranja`, `--amarelo`, `--roxo`, `--ciano`) |
| Fotos | arquivos `.jpg` na pasta `img/`, com os nomes da estrutura acima |
| Endereço do mapa | seção `#local` do `index.html` |

## Tecnologias e créditos

- HTML5, CSS3 e JavaScript
- Fontes do Google Fonts: **Bowlby One** e **Rubik**
- Mapa incorporado do Google Maps
- Ilustrações em SVG criadas para este projeto
- A paleta é apenas inspirada no GTA VI. Nenhuma imagem, logo ou fonte do jogo é usada
- Confira a licença das fotos que você colocar na pasta `img/`

## Contato

**Luis Felipe Silva**, eletrotécnico responsável e proprietário

- WhatsApp e telefone: (61) 92002-3881
- E-mail: luisfelipe.dev.soares@gmail.com
- Atendimento: Brasília e região, DF
