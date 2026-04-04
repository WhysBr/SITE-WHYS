# WHYS Design System — Knowledge Base
> Padrão de UI obrigatório para todo o site da agência WHYS.
> Baseado na referência akaru.fr/en/contact/ + decisões de design da WHYS.

---

## 1. Identidade Visual

| Token | Valor |
|---|---|
| Background principal (dark) | `#000000` (via CSS var `--background`) |
| Background seção Contato | `#f4f4f0` cream — **não é branco puro** |
| Texto principal | `#1a1a1a` deep black — **não é preto 100%** |
| Roxo de destaque | `#965EC7` (hover, focus, accent) |
| Border sutil | `rgba(26,26,26,0.12)` (sobre cream) |

## 2. Tipografia

- **Fonte primária**: Inter (Google Fonts) — variável `--font-inter`
- **Fonte decorativa**: Playfair Display italic — variável `--font-playfair`
- **Menus e headings**: Sans-serif grotesca, bold/black, tamanhos massivos
- **Escala heading de contato**: `clamp(2.8rem, 9.5vw, 8.5rem)` — tipografia dominante
- **Escala itens de menu**: `clamp(1.5rem, 4.5vw, 3.25rem)` — bold, tracking-tight
- **Labels e metadados**: `10px uppercase tracking-[0.25em] font-black opacity-40`
- **Nunca usar tamanhos fixos pequenos para headings** — sempre `clamp()` ou `vw`

## 3. Regras de Animação (OBRIGATÓRIAS)

### ❌ NUNCA fazer
- Animações bruscas, sem easing
- `ease-in-out` genérico
- Duração < 0.5s em transições de página/seção
- `transform: none` sem transição

### ✅ SEMPRE fazer

#### Easing padrão (WHYS/Akaru):
```css
/* Easing suave para transform */
cubic-bezier(0.16, 1, 0.3, 1)   /* = Framer Motion [0.16, 1, 0.3, 1] */

/* Easing para opacity */
cubic-bezier(0.65, 0, 0.35, 1)

/* Easing alternativo fluido */
cubic-bezier(0.165, 0.84, 0.44, 1)
```

#### Durações mínimas:
- Transições de seção/página: **0.65s**
- Hover states: **0.3–0.4s**
- Stagger entre filhos: **0.06s por item**
- Scroll reveals: **1.2s para transform, 0.6s para opacity**

#### Padrão de reveal (Akaru-style):
```css
/* Container: overflow hidden */
/* filho: transform: translate(0, 100%) → translate(0, 0) */
.lines-wrapper { overflow: hidden; }
.lines { transform: translate(0, 100%); transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1); }
.lines.--in-view { transform: translateZ(0); }
```

#### Com Framer Motion:
```jsx
const ease = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3, ease } },
};
// Stagger filhos:
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };
```

## 4. Estrutura da Seção Contato (Funil Akaru)

### HTML/JSX Pattern:
```
<section id="contato" background="#f4f4f0" borderRadius="1.75rem">
  <label "Contact / {funil ativo}">
  <AnimatePresence key=heading>
    <h2 "Let's talk." | funil.title>
  </AnimatePresence>
  <AnimatePresence mode="wait" key=selected>
    // MENU:
    - <p subtítulo>
    - <nav>
        - 01 Start a project   →  ArrowRight circle
        - 02 Application       →  ArrowRight circle
        - 03 General Inquiry   →  ArrowRight circle
    - footer info (email, WhatsApp, localização)

    // FORM (após seleção):
    - <button ← Voltar whileHover={{ x: -4 }}>
    - <form específico>
```

### Formulários por funil:
| Funil | Campos |
|---|---|
| 01 Start a project | Nome, Empresa, Email, Budget (chips), Detalhes |
| 02 Application | Nome, Vaga, Portfolio URL, LinkedIn |
| 03 General Inquiry | Nome, Email, Mensagem |

### Submissão: WhatsApp
```js
const WA_NUMBER = "5569981162676";
// Todos os forms abrem: wa.me/5569981162676?text=*Campo:* valor...
```

## 5. Padrão de Hover em Itens de Menu

```jsx
// Hover item de menu: translada levemente para direita + roxo na tipografia
className="group hover:pl-3 md:hover:pl-6 transition-all duration-500"

// Ícone de seta em círculo:
onMouseEnter → background: INK, borderColor: INK, svg.color: CREAM
onMouseLeave → background: transparent, borderColor: INK_GHOST, svg.color: INK
```

## 6. Ícones Lucide — Regra Crítica

```jsx
// ✅ CORRETO — para uso dinâmico em array/map
const { Icon } = step;
<Icon className="w-6 h-6" strokeWidth={1.5} />

// ❌ ERRADO — ícone não herda currentColor
<FileText className="..." />  // direto, sem variável intermediária
```

## 7. Referência akaru.fr — CSS Extraído

### animation-show (scroll reveal):
```css
.animation-show {
  opacity: 0;
  transform: translate3d(0, var(--offset, 8rem), 0) skewY(3deg);
  transition: transform 0s cubic-bezier(.165, .84, .44, 1) 0.3s,
              opacity 0.3s cubic-bezier(.65, 0, .35, 1);
}
.animation-show.--in-view {
  opacity: 1;
  transform: translateZ(0) skewY(0);
  transition: transform 1.2s cubic-bezier(.165, .84, .44, 1),
              opacity 0.6s cubic-bezier(.65, 0, .35, 1);
  transition-delay: calc(var(--delay, 0) * 1s);
}
```

### ContactList (estrutura dos itens 01, 02, 03):
```css
.ContactList { padding: 9rem 0 0 7rem; }
.ContactList-itemTitle { font-size: 14.5rem; } /* landscape */
.ContactList-itemTitle { font-size: 4.2rem; }  /* portrait/mobile */
.ContactList-item { display: flex; align-items: flex-end; }
.ContactList-itemIndex { font-weight: 500; } /* 01, 02, 03 */
```

### Fade transition (page-level):
```css
.fade-enter-active { transition: opacity 0.3s cubic-bezier(.65, 0, .35, 1) 0.15s; }
.fade-leave-active { transition: opacity 0.3s cubic-bezier(.65, 0, .35, 1); }
```

## 8. Globals.css — Design Tokens Ativos

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --primary: #965EC7;
  --border: #e2e8f0;
}
.dark {
  --background: #000000;
  --foreground: #ffffff;
  --primary: #965EC7;
  --border: rgba(255,255,255,0.2);
}
```

## 9. Checklist de Qualidade UI

- [ ] Transições sempre com `cubic-bezier(0.16, 1, 0.3, 1)` ≥ 0.6s
- [ ] Headings com `clamp()` — nunca px fixo para tipografia display
- [ ] Ícones Lucide: referência de componente quando dinâmico
- [ ] Hover states com `transition-all duration-500` mínimo
- [ ] Background da seção Contato: cream `#f4f4f0` (inline style)
- [ ] Formulários: submissão abre WhatsApp com dados formatados
- [ ] AnimatePresence `mode="wait"` em todas transições de funil
