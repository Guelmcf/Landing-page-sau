# SAÚ Culinária — Landing Page

> Landing page de captação de leads B2B para um serviço de marmitas corporativas em Belo Horizonte.  
> Desenvolvido como projeto real para um cliente e parte do meu portfólio front-end.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&labelColor=20232A)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&labelColor=1a1a2e)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white&labelColor=1a1a2e)

---

## Visão Geral

A SAÚ Culinária entrega refeições caseiras para empresas todos os dias. O objetivo da landing page é uma única conversão: fazer um representante da empresa preencher o formulário de contato e se tornar um lead.

Cada decisão técnica foi tomada com esse objetivo em mente — carregamento rápido, hierarquia clara, formulário sem atrito e dois canais redundantes de captura de lead para que nenhuma submissão seja perdida.

---

## Demo

🔗 _Em breve_

---

## Funcionalidades

- **Animações de scroll reveal** — hook `useReveal` customizado usando a API `IntersectionObserver`, com delay em cascata via CSS custom properties e suporte completo a `prefers-reduced-motion`
- **Nav responsiva** — efeito de blur ao rolar a página, menu hamburger acessível (`aria-expanded`, `aria-controls`)
- **Cardápio semanal rotativo** — plano de refeições interativo com abas por dia
- **Depoimentos reais** — avaliações de clientes com estrelas
- **Formulário com validação** — erros inline por campo, máscara de telefone `(XX) XXXXX-XXXX` (sem biblioteca externa), regex de e-mail, bloqueio de envio duplicado via `localStorage`
- **Dupla captura de lead** — EmailJS envia notificação por e-mail; Google Apps Script registra o lead em uma planilha em paralelo (fire-and-forget: falha no Sheets nunca bloqueia o usuário)
- **Performance** — imagem hero em AVIF com `fetchPriority="high"`, Google Fonts com `preconnect`, sem bibliotecas de UI pesadas

---

## Stack

| Camada | Tecnologia | Motivo |
|---|---|---|
| Framework | React 19 | Recursos concorrentes, estável |
| Linguagem | TypeScript 5.9 | Tipagem em todos os componentes |
| Bundler | Vite 7 | HMR instantâneo, builds otimizados |
| Estilização | CSS puro + custom properties | Sem overhead em runtime, controle total do design |
| E-mail | EmailJS | Envio de e-mail client-side sem backend |
| Base de leads | Google Sheets via Apps Script | Zero infraestrutura, tier gratuito, acesso em planilha para o cliente |

---

## Destaques de Arquitetura

### Sistema de Design Tokens

Todas as decisões visuais vivem em `src/styles/tokens.css` como CSS custom properties com estrutura de duas camadas: primitivos brutos (ex: `--raw-green-600`) que os componentes nunca usam diretamente, e tokens semânticos (ex: `--color-brand`, `--color-text-secondary`) que carregam intenção. Mudar a cor da marca significa editar uma linha.

### Hook de Scroll Reveal

```ts
// src/hooks/useReveal.ts
// Observa elementos [data-reveal] e adiciona .is-visible quando entram no viewport.
// O efeito de cascata é controlado pela custom property --reveal-delay via CSS,
// definida por JS a partir do atributo data-reveal-delay — sem setTimeout, sem timers.
export function useReveal() { ... }
```

Respeita `prefers-reduced-motion`: elementos ficam visíveis imediatamente, sem transição.

### Pipeline Duplo de Lead

```
Usuário envia formulário
       │
       ├─► EmailJS.send()          ← aguardado; controla o estado de sucesso
       │         │
       │    ✓ sucesso
       │         │
       │         └─► sendToSheets()   ← fire-and-forget (.catch loga aviso)
       │
       └─► em erro → exibe mensagem de erro (Sheets nunca é envolvido)
```

O e-mail é a fonte de verdade. O Sheets é uma camada de conveniência para o cliente visualizar leads sem precisar checar o e-mail.

### Validação de Formulário (sem biblioteca)

```ts
function maskPhone(value: string): string {
    const d = value.replace(/\D/g, '').slice(0, 11)
    if (d.length <= 2)  return d.length ? `(${d}` : ''
    if (d.length <= 7)  return `(${d.slice(0, 2)}) ${d.slice(2)}`
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}
```

Os erros são exibidos por campo e somem individualmente conforme o usuário corrige cada input.

---

## Estrutura do Projeto

```
src/
├── assets/images/          # Imagens otimizadas em WebP/AVIF
├── components/             # Um par .tsx + .css por seção
│   ├── Nav.tsx             # Header fixo, menu hamburger
│   ├── hero.tsx            # CTA acima da dobra + estatísticas
│   ├── how_it_works.tsx    # Processo em 3 etapas
│   ├── clients.tsx         # Depoimentos de clientes
│   ├── cardapio.tsx        # Cardápio semanal rotativo + faixas de preço
│   ├── forms.tsx           # Formulário de captura (validação + envio duplo)
│   └── footer.tsx
├── hooks/
│   └── useReveal.ts        # Animações de scroll com IntersectionObserver
└── styles/
    ├── tokens.css          # Sistema de design tokens (primitivos + semânticos)
    └── reveal.css          # Classes [data-reveal] + .is-visible
```

---

## Como Rodar

```bash
# 1. Clone
git clone https://github.com/Guelmcf/Landing-page-sau.git
cd Landing-page-sau

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente (veja abaixo)
cp .env.example .env

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# EmailJS — https://www.emailjs.com
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# URL do Google Apps Script Web App — deixe vazio para desativar a integração com Sheets
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/.../exec
```

### Configurando a integração com Google Sheets

1. Crie uma planilha com as colunas: `Data | Nome | Empresa | Email | Telefone | Refeições`
2. Acesse **Extensões → Apps Script** e publique o código abaixo como Web App (acesso: *Qualquer pessoa*):

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
  const data  = JSON.parse(e.postData.contents);
  sheet.appendRow([data.data, data.nome, data.empresa, data.email, data.numero, data.numeroRefeicoes]);
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Cole a URL da implantação em `VITE_GOOGLE_SHEETS_URL`.

---

## Autor

**Miguel Chaves** — [github.com/Guelmcf](https://github.com/Guelmcf)
