## Aba "E-commerce" na seção Produtos

Mudança contida em `src/pages/Index.tsx`, dentro de `#produtos`. Sem novas dependências, sem rotas, sem assets — apenas mock visual editorial alinhado ao design system existente (tokens `accent`, `background`, `bone`).

### Estrutura de abas

Substituir o bloco atual "Pronta entrega · Catálogo" (linhas ~204–244) por um componente de abas controlado por `useState` local com dois pills no topo:

```text
[ Institucional ]   [ E-commerce ]
```

- **Institucional**: mantém o conteúdo atual (hero do Seixo de Quartzo + 3 cards "Consulta"). Continua sendo a aba default.
- **E-commerce**: novo conteúdo, descrito abaixo.

Pills minimalistas (borda fina, uppercase tracking largo, accent no ativo) posicionados acima do grid de produtos, alinhados ao tom editorial existente.

### Conteúdo da aba E-commerce

Duas sublinhas, cada uma como um bloco independente com headline própria.

**1. Pronta Entrega** (linha decorativa principal)

Headline: `Pronta entrega · linha decorativa`
Subtítulo curto sobre disponibilidade imediata.

Grid responsivo 1 / 3 colunas com 3 produtos:

| Produto | Usos típicos | Granulometrias | Embalagens |
|---|---|---|---|
| Seixo de Quartzo Tradicional | Paisagismo, jardins, fachadas | Padrão | 15 / 25 / 50 / 1000 kg |
| Seixo de Quartzo Rajado Vermelho | Decoração externa, projetos paisagísticos | Padrão | 15 / 25 / 50 / 1000 kg |
| Seixo Hiperbranco Dolomita | Acabamentos premium, jardins claros | Padrão | 15 / 25 / 50 / 1000 kg |

Cada card:
- Selo no topo: `Pronta entrega`
- Placeholder de imagem `Foto em breve` (mantendo o tratamento dashed já usado)
- Nome do produto em display
- Linha "Usos" curta
- Linha "Granulometrias padrão"
- Chips de embalagem (15 kg · 25 kg · 50 kg · 1000 kg)

**2. Sob Consulta** (linha especial)

Headline: `Sob consulta · linha especial`
Nota: "Disponível sob consulta, sujeito a disponibilidade de jazida, seleção e prazo de fornecimento."

Grid responsivo 1 / 3 colunas com 3 produtos:
- Quartzo Hialino Rolado
- Quartzo Ametista Rolado
- Quartzo Rosa Rolado

Cards mais sóbrios (sem chips de embalagem, sem peso), apenas:
- Selo no topo: `Sob consulta`
- Placeholder `Foto em breve`
- Nome em display
- Frase única: "Disponibilidade e prazo confirmados pelo comercial."
- Pequeno link/seta para `#contato`

### Notas técnicas

- Estado das abas via `useState<'institucional' | 'ecommerce'>('institucional')`.
- Reaproveitar tratamento visual dos cards atuais (border `background/10`, hover `accent/60`, placeholder dashed).
- Manter âncora `#produtos`. Sem alterar nav, contato, footer ou outras seções.
- Headline principal da seção ("Material natural, portfólio aberto") permanece.
