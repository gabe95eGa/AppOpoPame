# Refactor v3 Annex II - Temes 25-27 i format

Data: 2026-05-19

Àmbit assignat: Annex II, temes 25-27, amb revisió transversal del format del contingut d'estudi.

Objectiu d'aquest document: refinar els temes 25, 26 i 27 perquè quedin clarament enfocats a educació infantil 0-3 a Catalunya i, en el cas del tema 27, plenament adaptats a Lliçà d'Amunt amb fonts municipals pròpies.

## Fonts de treball utilitzades

- `docs/pauta-refactor-temari-llica.md`
- `docs/fonts/temari-caldes-extret-net.txt`
- `data/banc-preguntes.js`
- `data/contingut-text.js`
- `data/contingut-slides.js`
- [Canal Salut - Alimentació saludable en la primera infància (0-3 anys)](https://canalsalut.gencat.cat/ca/vida-saludable/alimentacio/saludable/primera-infancia/)
- [XTEC - Currículum i orientació. Educació infantil](https://xtec.gencat.cat/ca/curriculum/infantil/)
- [XTEC - Decret 21/2023](https://xtec.gencat.cat/ca/curriculum/infantil/decret-21-2023/)
- [XTEC - Coeducació i perspectiva de gènere](https://xtec.gencat.cat/ca/alumnat/benestar/coeducacio-i-perspectiva-de-genere/)
- [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Nova Espurna](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html)
- [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Palaudàries](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html)

---

## Tema 25

### 1. Focus exacte del subtítol del temari

**Nova guia d'alimentació de zero a tres anys. Canvis i novetats en l'alimentació de zero a tres anys.**

El focus no és només "alimentació saludable" en general, sinó què canvia o què s'ha de destacar específicament en el marc actual per a escoles bressol i infants de 0 a 3 anys a Catalunya: lactància, prioritat de la llet, incorporació d'aliments, esmorzars i berenars saludables, menús segurs i sostenibles, i criteris de comunicació amb les famílies.

### 2. Què del banc actual és massa genèric o aprofitable

**Aprofitable**

- `e25-01` és una bona porta d'entrada perquè connecta alimentació, autonomia, seguretat alimentària i coordinació amb la família.
- `v2-a2-t25-01` és útil perquè concreta la continuïtat de la lactància a l'escola bressol.
- `v2-a2-t25-02` és útil perquè incorpora la recomanació específica de fruita fresca a l'esmorzar.
- El resum actual de `data/contingut-text.js` és correcte com a base de to: relació sana amb el menjar, sense pressió.

**Massa genèric**

- El títol actual de `data/contingut-text.js` i `data/contingut-slides.js` queda curt respecte al subtítol real del temari, perquè diu "Alimentació zero-tres" però no remarca "nova guia", "canvis" i "novetats".
- El contingut actual posa molt èmfasi en el clima de l'àpat, però encara no destaca prou:
  - la prioritat de la llet més enllà dels 6 mesos,
  - la recomanació de fruita fresca si s'ofereix esmorzar,
  - la recomanació d'evitar berenars ensucrats i brioixeria,
  - la idea que un registre diari d'ingestes pot ser inadequat si es dona descontextualitzat.

### 3. Resum de contingut v3

La nova guia d'alimentació 0-3 situa l'alimentació com una experiència de salut, aprenentatge, benestar i sostenibilitat. A les escoles bressol es recomana promoure la lactància materna, garantir l'aportació prioritària de llet més enllà dels 6 mesos i introduir progressivament altres aliments dins un patró saludable. Si el centre ofereix esmorzar, la fruita fresca és l'opció prioritària; si ofereix berenar, cal prioritzar opcions saludables sense sucres afegits ni sal i evitar brioixeria, galetes o postres làctiques ensucrades. Els menús s'han de dissenyar segons el calendari d'incorporació d'aliments i amb productes locals i de temporada. També és rellevant que la comunicació amb les famílies sobre l'alimentació es faci amb criteri pedagògic global i no només amb registres quantitatius d'ingesta que poden generar comparacions innecessàries.

### 4. Preguntes candidates v3

#### `v3-a2-t25-01`

- **Tema exacte:** Annex II - Tema 25
- **Focus:** Nova guia d'alimentació 0-3 i paper de l'escola bressol
- **Enunciat:** Quin criteri recull millor una novetat rellevant de la guia actual per a les escoles bressol?
- **Opcions:**
  1. Facilitar la continuïtat de la lactància materna, garantir llet com a aportació prioritària i oferir aliments nous de manera progressiva.
  2. Substituir la llet per aliments complementaris tan aviat com l'infant mengi triturats amb normalitat.
  3. Reservar la lactància per a l'àmbit familiar i evitar-la al centre per simplificar l'organització.
  4. Prioritzar la uniformitat de menús encara que no respectin el calendari d'incorporació d'aliments.
- **Resposta correcta:** 1
- **Explicació:** Canal Salut indica que les escoles bressol han de facilitar la lactància materna, garantir l'aportació prioritària de llet més enllà dels 6 mesos i oferir la resta d'aliments progressivament.
- **Fonts:** [Canal Salut - Alimentació saludable en la primera infància (0-3 anys)](https://canalsalut.gencat.cat/ca/vida-saludable/alimentacio/saludable/primera-infancia/)

#### `v3-a2-t25-02`

- **Tema exacte:** Annex II - Tema 25
- **Focus:** Esmorzar saludable a l'escola bressol
- **Enunciat:** Si l'escola bressol ofereix esmorzar, quina opció s'ajusta millor a la guia actual?
- **Opcions:**
  1. Fruita fresca, perquè és saludable i afavoreix experimentació sensorial i manipulació.
  2. Galetes industrials, perquè faciliten quantitats homogènies per a tot el grup.
  3. Batuts ensucrats, perquè aporten energia ràpida i eviten rebutjos.
  4. Pastisseria de consum habitual, perquè és fàcil d'acceptar pels infants.
- **Resposta correcta:** 1
- **Explicació:** La guia indica explícitament que, si s'ofereix esmorzar, convé optar per la fruita fresca.
- **Fonts:** [Canal Salut - Alimentació saludable en la primera infància (0-3 anys)](https://canalsalut.gencat.cat/ca/vida-saludable/alimentacio/saludable/primera-infancia/)

#### `v3-a2-t25-03`

- **Tema exacte:** Annex II - Tema 25
- **Focus:** Berenars i opcions a evitar
- **Enunciat:** Quin berenar s'ajusta millor a les recomanacions actuals per al 0-3?
- **Opcions:**
  1. Pa integral amb tomàquet i oli o fruita fresca, sense sucres afegits.
  2. Brioixeria industrial, perquè és pràctica i molt acceptada.
  3. Postres làctiques ensucrades com a opció habitual.
  4. Galetes i crema de xocolata per assegurar aportació energètica.
- **Resposta correcta:** 1
- **Explicació:** La guia recomana berenars saludables sense sucres afegits ni sal i desaconsella brioixeria, galetes i postres làctiques ensucrades.
- **Fonts:** [Canal Salut - Alimentació saludable en la primera infància (0-3 anys)](https://canalsalut.gencat.cat/ca/vida-saludable/alimentacio/saludable/primera-infancia/)

#### `v3-a2-t25-04`

- **Tema exacte:** Annex II - Tema 25
- **Focus:** Comunicació amb les famílies sobre l'alimentació
- **Enunciat:** Quin criteri de comunicació amb les famílies és més coherent amb la guia actual?
- **Opcions:**
  1. Contextualitzar l'alimentació dins observacions globals sobre les experiències de l'infant a l'escola bressol.
  2. Lliurar sempre un registre quantitatiu diari d'ingestes per comparar millor els infants.
  3. Informar només si l'infant s'acaba tot el plat o rebutja completament l'àpat.
  4. Evitar qualsevol comentari sobre alimentació perquè és un àmbit exclusivament familiar.
- **Resposta correcta:** 1
- **Explicació:** Canal Salut adverteix que el registre diari d'ingestes pot generar preocupacions i comparacions inadequades i recomana oferir informació dins pautes globals d'observació.
- **Fonts:** [Canal Salut - Alimentació saludable en la primera infància (0-3 anys)](https://canalsalut.gencat.cat/ca/vida-saludable/alimentacio/saludable/primera-infancia/)

#### `v3-a2-t25-05`

- **Tema exacte:** Annex II - Tema 25
- **Focus:** Menús i sostenibilitat
- **Enunciat:** Quin criteri és correcte a l'hora de dissenyar els menús del 0-3?
- **Opcions:**
  1. Ajustar-los al calendari d'incorporació d'aliments, a les freqüències recomanades i a un patró saludable i sostenible.
  2. Repetir un menú molt estable durant setmanes per evitar exposició a nous aliments.
  3. Prioritzar productes molt processats perquè faciliten estandardització i conservació.
  4. Organitzar els àpats sense relació amb la temporada o els productes locals.
- **Resposta correcta:** 1
- **Explicació:** La guia demana que els menús es dissenyin segons el calendari d'incorporació d'aliments, les freqüències recomanades i un patró saludable i sostenible amb productes locals i de temporada.
- **Fonts:** [Canal Salut - Alimentació saludable en la primera infància (0-3 anys)](https://canalsalut.gencat.cat/ca/vida-saludable/alimentacio/saludable/primera-infancia/)

---

## Tema 26

### 1. Focus exacte del subtítol del temari

**Coeducació o educació en la igualtat de gènere al nou currículum d'educació infantil.**

El centre del tema no és només definir coeducació, sinó veure com queda integrada dins el nou currículum d'educació infantil i quines implicacions té a la pràctica educativa 0-3: entorns, llenguatge, materials, expectatives, programacions i projecte educatiu.

### 2. Què del banc actual és massa genèric o aprofitable

**Aprofitable**

- `e26-01`, `v2-a2-t26-01`, `v2-a2-t26-02` i `case-14` tenen bona base conceptual.
- El resum actual de text i slides encerta els eixos principals: transversalitat, revisió d'estereotips i impacte real al 0-3.

**Massa genèric**

- Encara s'explica la coeducació sobretot com una mirada general, però es vincula poc de manera explícita amb el **nou currículum** i els seus vectors o amb la incorporació en programacions, projectes i activitats.
- Falten preguntes que obliguin a pensar en aplicació quotidiana 0-3, no només en definició o en estereotips obvis.
- El contingut actual no explota prou la connexió entre coeducació, igualtat d'oportunitats, benestar i organització del centre.

### 3. Resum de contingut v3

La coeducació, segons XTEC, és una acció educadora orientada a la igualtat real d'oportunitats i a l'eliminació d'estereotips i actituds discriminatòries. En el nou currículum d'educació infantil això no queda com un afegit extern, sinó que s'ha d'incorporar en les unitats, projectes i activitats d'aula, i també en el projecte educatiu i les programacions. En el 0-3 això implica revisar llenguatge, contes, propostes de joc, organització d'espais, expectatives adultes i representació de rols. També connecta amb la finalitat general de l'etapa: garantir un ambient de benestar, relació i aprenentatge que asseguri la igualtat d'oportunitats de tots i cadascun dels infants.

### 4. Preguntes candidates v3

#### `v3-a2-t26-01`

- **Tema exacte:** Annex II - Tema 26
- **Focus:** Definició de coeducació segons XTEC
- **Enunciat:** Quina formulació s'ajusta millor a la definició institucional de coeducació?
- **Opcions:**
  1. Acció educadora que potencia la igualtat real d'oportunitats i rebutja estereotips i actituds discriminatòries.
  2. Activitat puntual orientada a celebrar efemèrides relacionades amb la igualtat.
  3. Repartiment dels mateixos materials a tothom, encara que mantinguin rols sexistes.
  4. Proposta pensada sobretot per a etapes postobligatòries, no per al 0-3.
- **Resposta correcta:** 1
- **Explicació:** XTEC defineix la coeducació com una acció educadora per a la igualtat real d'oportunitats, sense estereotips sexistes, homòfobs, bifòbics, transfòbics o androcèntrics.
- **Fonts:** [XTEC - Coeducació i perspectiva de gènere](https://xtec.gencat.cat/ca/alumnat/benestar/coeducacio-i-perspectiva-de-genere/)

#### `v3-a2-t26-02`

- **Tema exacte:** Annex II - Tema 26
- **Focus:** Relació amb el nou currículum
- **Enunciat:** Com s'ha d'incorporar la coeducació segons l'enfocament actual del currículum?
- **Opcions:**
  1. Integrant-la en unitats didàctiques, projectes i activitats, i fent-la visible al projecte educatiu i a les programacions.
  2. Reservant-la per a tallers externs, sense necessitat d'incorporar-la a la vida d'aula.
  3. Delegant-la només a les famílies perquè és un àmbit de socialització privat.
  4. Aplicant-la només quan aparegui un conflicte explícit de discriminació.
- **Resposta correcta:** 1
- **Explicació:** XTEC assenyala que la coeducació i la perspectiva de gènere s'han d'incorporar en projectes, activitats d'aula i documents del centre.
- **Fonts:** [XTEC - Coeducació i perspectiva de gènere](https://xtec.gencat.cat/ca/alumnat/benestar/coeducacio-i-perspectiva-de-genere/)

#### `v3-a2-t26-03`

- **Tema exacte:** Annex II - Tema 26
- **Focus:** Coeducació al 0-3
- **Enunciat:** Quin exemple descriu millor una pràctica coeducadora a l'escola bressol?
- **Opcions:**
  1. Revisar contes, llenguatge, joguines i racons per ampliar referents i evitar rols de gènere rígids.
  2. Mantenir materials estereotipats si són els que més ràpidament identifiquen les famílies.
  3. Separar propostes de joc segons el sexe per adaptar-se a interessos suposadament naturals.
  4. Evitar intervenir en rols de joc perquè en 0-3 encara no tenen impacte social.
- **Resposta correcta:** 1
- **Explicació:** En el 0-3 la coeducació es concreta en decisions quotidianes sobre materials, llenguatge, rols i expectatives.
- **Fonts:** [XTEC - Coeducació i perspectiva de gènere](https://xtec.gencat.cat/ca/alumnat/benestar/coeducacio-i-perspectiva-de-genere/), [XTEC - Currículum i orientació. Educació infantil](https://xtec.gencat.cat/ca/curriculum/infantil/)

#### `v3-a2-t26-04`

- **Tema exacte:** Annex II - Tema 26
- **Focus:** Igualtat d'oportunitats al currículum d'infantil
- **Enunciat:** Amb quin principi general del currículum connecta més clarament la coeducació a l'etapa infantil?
- **Opcions:**
  1. Garantir la igualtat d'oportunitats de tots i cadascun dels infants en un ambient de benestar, relació i aprenentatge.
  2. Avançar continguts acadèmics abans d'assegurar experiències de relació i benestar.
  3. Uniformitzar les propostes per evitar diferències entre infants.
  4. Prioritzar el control disciplinari per sobre dels processos de convivència.
- **Resposta correcta:** 1
- **Explicació:** El currículum d'educació infantil situa la igualtat d'oportunitats dins la finalitat de l'etapa; la coeducació hi dona forma concreta.
- **Fonts:** [XTEC - Currículum i orientació. Educació infantil](https://xtec.gencat.cat/ca/curriculum/infantil/)

#### `v3-a2-t26-05`

- **Tema exacte:** Annex II - Tema 26
- **Focus:** Criteri professional davant falsa neutralitat
- **Enunciat:** Una educadora diu que a l'aula no cal revisar els estereotips perquè tracta tots els infants "igual". Quina valoració és més ajustada?
- **Opcions:**
  1. És insuficient, perquè la coeducació no consisteix només a declarar neutralitat, sinó a revisar entorns, llenguatge i expectatives.
  2. És correcte, perquè tractar tothom igual elimina automàticament els biaixos de gènere.
  3. És preferible no revisar res fins al segon cicle d'infantil.
  4. És adequat si les famílies no han expressat cap queixa sobre el tema.
- **Resposta correcta:** 1
- **Explicació:** La coeducació demana intencionalitat pedagògica i revisió activa; la neutralitat declarada no garanteix absència d'estereotips.
- **Fonts:** [XTEC - Coeducació i perspectiva de gènere](https://xtec.gencat.cat/ca/alumnat/benestar/coeducacio-i-perspectiva-de-genere/), [XTEC - Currículum i orientació. Educació infantil](https://xtec.gencat.cat/ca/curriculum/infantil/)

---

## Tema 27

### 1. Focus exacte del subtítol del temari

**Les escoles bressol municipals de Lliçà d'Amunt, característiques i projecte educatiu.**

Aquest tema és municipal i s'ha d'allunyar completament del material de Caldes. El focus real és: quines escoles bressol municipals té Lliçà d'Amunt, quines característiques bàsiques tenen i quins trets del projecte educatiu i del funcionament públic s'expressen a les fonts municipals.

### 2. Què del banc actual és massa genèric o aprofitable

**Aprofitable**

- `e27-01` és útil perquè ja posa el focus en característiques, projecte educatiu i servei municipal.
- `v2-a2-t27-01`, `v2-a2-t27-02` i `v2-a2-t27-03` ja han fet la substitució principal de Caldes per Lliçà.
- El fet que el tema estigui marcat amb revisió és correcte i s'ha de mantenir.

**Massa genèric o a refinar**

- El resum actual de `data/contingut-text.js` encara és bastant descriptiu i no concreta prou què diu el discurs pedagògic municipal.
- El contingut de slides és útil, però massa breu per a un tema municipal viu: hauria d'explicitar millor quins documents es poden consultar i quines idees pedagògiques són visibles a les fitxes oficials.
- Encara es pot guanyar precisió en trets concrets que sí apareixen a les pàgines municipals:
  - dues escoles,
  - Palaudàries al barri i Nova Espurna al centre urbà,
  - 6 i 8 estances, respectivament,
  - servei de menjador amb àpats cuinats al centre i productes de proximitat,
  - moments de cura com a estones educatives,
  - observació, ritme de creixement, descoberta, límits i joc.

### 3. Resum de contingut v3

**A revisar per la senyoreta Pame**

Les fonts municipals actuals descriuen dues escoles bressol municipals a Lliçà d'Amunt: Palaudàries, situada al barri de Palaudàries, i Nova Espurna, al centre urbà. La primera disposa de 6 estances i la segona de 8, totes destinades a infants de 0 a 3 anys. Les dues presenten un discurs pedagògic alineat amb el 0-3: desenvolupament de l'infant respectant el ritme de creixement, observació com a base de l'acompanyament, espais de descoberta, valor educatiu dels moments de cura i centralitat del joc. També s'hi destaca el servei de menjador amb àpats elaborats al mateix centre amb productes de proximitat. A més, les pàgines municipals enllacen documentació oficial actualitzada, com la informació general de les escoles bressol, el projecte educatiu 2026, el projecte lingüístic, les NOFC i el procés d'acolliment d'infants i famílies.

### 4. Preguntes candidates v3

#### `v3-a2-t27-01`

- **Tema exacte:** Annex II - Tema 27
- **Focus:** Característiques bàsiques de la xarxa municipal
- **Enunciat:** Quina descripció s'ajusta millor a les escoles bressol municipals de Lliçà d'Amunt segons les fitxes municipals actuals?
- **Opcions:**
  1. Hi ha dues escoles bressol municipals: Palaudàries, al barri de Palaudàries, i Nova Espurna, al centre urbà, per a infants de 0 a 3 anys.
  2. Hi ha una única escola bressol municipal amb dues seccions administratives però un sol edifici.
  3. Són centres pensats principalment per al segon cicle d'infantil.
  4. Es tracta de serveis de custòdia sense projecte educatiu propi.
- **Resposta correcta:** 1
- **Explicació:** Les pàgines municipals indiquen explícitament que a Lliçà d'Amunt hi ha dues escoles bressol municipals, una a Palaudàries i una al centre urbà.
- **Fonts:** [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Nova Espurna](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html), [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Palaudàries](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html)

#### `v3-a2-t27-02`

- **Tema exacte:** Annex II - Tema 27
- **Focus:** Estances i oferta 0-3
- **Enunciat:** Quin enunciat és correcte sobre la capacitat organitzativa descrita a les fitxes municipals?
- **Opcions:**
  1. Palaudàries disposa de 6 estances i Nova Espurna de 8, totes per a l'educació d'infants de 0 a 3 anys.
  2. Les dues escoles tenen exactament 8 estances i només una part es destina al 0-3.
  3. Nova Espurna té 6 estances i Palaudàries 8.
  4. El nombre d'estances no s'associa a cap oferta educativa concreta.
- **Resposta correcta:** 1
- **Explicació:** Les dues pàgines municipals coincideixen en la descripció de 6 estances per a Palaudàries i 8 per a Nova Espurna.
- **Fonts:** [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Nova Espurna](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html), [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Palaudàries](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html)

#### `v3-a2-t27-03`

- **Tema exacte:** Annex II - Tema 27
- **Focus:** Tret pedagògic visible a la descripció municipal
- **Enunciat:** Quin enfocament pedagògic destaca l'Ajuntament en la presentació de les seves escoles bressol municipals?
- **Opcions:**
  1. Afavorir el desenvolupament de l'infant respectant el seu ritme de creixement i adaptant-se a les seves necessitats.
  2. Uniformitzar propostes per assegurar que tots els infants avancin al mateix ritme.
  3. Prioritzar resultats acadèmics previs a l'etapa obligatòria.
  4. Reduir la funció del centre a la vigilància mentre les famílies treballen.
- **Resposta correcta:** 1
- **Explicació:** Les fitxes municipals remarquen explícitament el respecte al ritme de creixement i l'adaptació a les necessitats de cada infant.
- **Fonts:** [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Palaudàries](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html), [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Nova Espurna](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html)

#### `v3-a2-t27-04`

- **Tema exacte:** Annex II - Tema 27
- **Focus:** Moments de cura i projecte educatiu
- **Enunciat:** Com es presenten els moments de cura a la descripció pedagògica municipal?
- **Opcions:**
  1. Com estones educatives treballades per crear un moment acollidor, íntim i tranquil.
  2. Com pauses assistencials sense rellevància dins el projecte educatiu.
  3. Com espais que s'han d'accelerar per deixar més temps a activitats dirigides.
  4. Com responsabilitat exclusiva de cuina i suport, separada de l'acció educativa.
- **Resposta correcta:** 1
- **Explicació:** La fitxa de Palaudàries explicita que els moments de menjar, dormir i canvi de bolquer són estones educatives pensades i treballades.
- **Fonts:** [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Palaudàries](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html)

#### `v3-a2-t27-05`

- **Tema exacte:** Annex II - Tema 27
- **Focus:** Servei i documentació municipal
- **Enunciat:** Quina combinació d'elements forma part de la informació pública actual de les escoles bressol municipals?
- **Opcions:**
  1. Servei de menjador amb àpats cuinats al centre i documents com projecte educatiu, NOFC i procés d'acolliment.
  2. Absència de documentació pedagògica pública per protegir l'autonomia del centre.
  3. Servei de menjador externalitzat sense relació amb el projecte educatiu.
  4. Només informació administrativa mínima, sense cap referència a l'acolliment d'infants i famílies.
- **Resposta correcta:** 1
- **Explicació:** Les pàgines municipals indiquen servei de menjador amb productes de proximitat i cuina al centre, i enllacen documents com el projecte educatiu 2026, les NOFC i el procés d'acolliment 2026-27.
- **Fonts:** [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Nova Espurna](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html), [Ajuntament de Lliçà d'Amunt - Escola bressol municipal Palaudàries](https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html)

---

## Revisió transversal del format del contingut d'estudi

### Problemes detectats al format actual

- En alguns temes, `data/contingut-text.js` i `data/contingut-slides.js` simplifiquen massa el títol i perden el **subtítol exacte del temari**.
- El format actual és útil per estudiar ràpid, però no sempre diferencia prou bé:
  - allò nuclear del subtítol,
  - allò que només és context general,
  - allò que és dada viva municipal o tema sensible.
- Les slides funcionen bé com a síntesi, però en temes municipals o de guia nova convé remarcar millor què és **novetat**, què és **criteri 0-3** i què és **font viva**.

### Proposta breu de transformació a fitxers finals sense perdre backups

1. **Abans d'integrar res**, fer còpia de seguretat amb data dels tres fitxers de dades:
   - `data/banc-preguntes.js`
   - `data/contingut-text.js`
   - `data/contingut-slides.js`

2. **A `data/banc-preguntes.js`**
   - Mantenir les preguntes actuals com a base.
   - Afegir les preguntes noves amb `version: "v3"` i ids `v3-a2-t25-*`, `v3-a2-t26-*`, `v3-a2-t27-*`.
   - En el tema 27, mantenir `reviewLabel: "A revisar per la senyoreta Pame"` i afegir etiquetes municipals específiques.
   - No esborrar les preguntes v2 fins que hi hagi revisió editorial final.

3. **A `data/contingut-text.js`**
   - Substituir els títols curts per formulacions més ajustades al subtítol real del temari.
   - Afegir una estructura més consistent:
     - `title`
     - `subtitle`
     - `summary`
     - `keyConcepts`
     - `commonMistakes`
     - `studyGuide`
     - `sourceFocus`
   - En temes vius, afegir recordatori explícit de contrast de fonts.

4. **A `data/contingut-slides.js`**
   - Mantenir format compacte però fer que el `subtitle` reprodueixi millor el focus exacte del temari.
   - En temes 25 i 26, incloure una slide específica de "novetats" o "aplicació al 0-3".
   - En el tema 27, mantenir `reviewLabel` i separar millor:
     - característiques dels centres,
     - trets del projecte educatiu,
     - documentació municipal consultable.

5. **Després de la integració**
   - Deixar els backups fora de la càrrega de l'app, però dins el repo o en carpeta de còpies documentades.
   - Fer una comprovació final perquè text, slides i preguntes diguin el mateix i no quedin desalineats.

---

## Resum final

- **Temes coberts:** Annex II - Tema 25, Tema 26 i Tema 27.
- **Volum proposat:** 15 preguntes candidates v3, 5 per tema.
- **Fonts oficials principals:** Canal Salut, XTEC currículum infantil, XTEC coeducació i Ajuntament de Lliçà d'Amunt.
- **Punts febles o prudències:**
  - El tema 27 depèn de fonts municipals vives i ha de mantenir l'etiqueta **A revisar per la senyoreta Pame**.
  - El material de Caldes només ha servit com a orientació de profunditat i estructura; no és font final per a cap dada municipal.
  - En el tema 26 convé no caure en una coeducació massa abstracta: el valor del v3 és aterrar-la a decisions d'aula 0-3 i al nou currículum.
  - En el tema 25 la clau és no quedar-se en "alimentació saludable" genèrica, sinó destacar les recomanacions concretes de la guia actual per a escoles bressol.
