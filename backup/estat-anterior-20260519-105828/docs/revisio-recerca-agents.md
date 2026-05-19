# Revisió de la recerca dels agents

Data de revisió: 2026-05-18

## Volum rebut

| Bloc | Fitxer | Propostes | Duplicats d'id |
| --- | --- | ---: | ---: |
| Annex I, temes 1-13 | `docs/recerca-annex-1.md` | 52 | 0 |
| Annex II, temes 1-9 | `docs/recerca-annex-2-temes-01-09.md` | 36 | 0 |
| Annex II, temes 10-18 | `docs/recerca-annex-2-temes-10-18.md` | 36 | 0 |
| Annex II, temes 19-27 | `docs/recerca-annex-2-temes-19-27.md` | 36 | 0 |

Total: 160 propostes úniques.

## Valoració general

La divisió per blocs ha funcionat bé. Les propostes no dupliquen ids i, en general, mantenen el criteri que volíem: preguntes basades en fonts oficials o institucionals, amb distractors del mateix camp conceptual i menys opcions absurdes que al primer banc.

Les preguntes són coherents amb la direcció actual del projecte: banc separat, fonts documentades, orientació a currículum i normativa educativa de Catalunya per a l'Annex II, i normativa general o municipal per a l'Annex I.

## Punts forts detectats

- Annex I aporta una base molt més sòlida per als temes jurídics i municipals, amb fonts BOE, Portal Jurídic i Ajuntament de Lliçà d'Amunt.
- Annex II 1-9 reforça molt bé normativa educativa catalana, inclusió, autonomia de centre, psicomotricitat, neurociència i vida quotidiana.
- Annex II 10-18 millora especialment joc, espais, exterior, família, funció educadora i primers auxilis amb situacions pràctiques.
- Annex II 19-27 aporta bones preguntes sobre salut, evacuació, protecció de dades, comunicació amb famílies, alimentació, coeducació i municipi.
- Els distractors són majoritàriament plausibles: confonen autonomia amb individualisme, inclusió amb segregació, cura amb assistencialisme, documentació amb acumulació d'evidències, o confidencialitat amb rapidesa comunicativa.

## Punts que cal revisar abans d'integrar

1. **Uniformitzar ids**
   - Annex I usa `a1-t01-01`.
   - Annex II 1-9 usa `a2-t1-01` sense zero inicial.
   - Annex II 10-27 usa `a2-10-01`.
   - Recomanació: normalitzar tot a `a1-t01-01` i `a2-t01-01`.

2. **Revisar preguntes amb fonts municipals vives**
   - Annex I tema 9 i Annex II tema 27 depenen de pàgines municipals que poden canviar.
   - Cal marcar-les amb etiqueta `municipal` i revisar-les abans de cada convocatòria.

3. **Revisar temes interpretatius**
   - Annex I temes 7 i 8: precisió jurídica sobre validesa, eficàcia, audiència, nul·litat/anul·labilitat i fases del procediment.
   - Annex II temes 17 i 18: algunes preguntes són criteri professional derivat de fonts oficials, no literalitat normativa.
   - Annex II tema 21: la figura del psicòleg s'ha treballat sovint a través de l'EAP com a proxy institucional.

4. **Evitar inflar massa el banc**
   - Integrar les 160 de cop faria créixer molt el banc i dificultaria revisar qualitat.
   - Recomanació inicial: seleccionar 2 preguntes per tema, prioritzant aplicació pràctica i conceptes no coberts.
   - Això afegiria aproximadament 80 preguntes noves i deixaria la resta com a reserva.

5. **Convertir les opcions a esquema de dades**
   - Els fitxers de recerca són Markdown.
   - Abans d'integrar cal convertir a l'esquema de `data/banc-preguntes.js`: `id`, `theme`, `document`, `prompt`, `options`, `correct`, `explanation`, `difficulty`, `competence`, `tags`, `optionNotes`.

## Criteri d'integració recomanat

1. Primera passada: integrar 2 preguntes per tema.
2. Segona passada: provar l'app, revisar dificultat i detectar repetides conceptuals.
3. Tercera passada: incorporar preguntes addicionals només en temes amb poc volum o molta importància.
4. Mantenir les preguntes no integrades als fitxers de recerca com a reserva documentada.

## Veredicte

La recerca és aprofitable i coherent amb el banc existent, però no recomano integrar-la sencera sense filtratge. La millor decisió és convertir-la en una cua de preguntes candidates i seleccionar primer les més fortes per cada tema.

Estat suggerit: **apta per integració parcial i revisió editorial**.
