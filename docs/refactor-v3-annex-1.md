# Refactor v3 Annex I, temes 1-13

Data: 2026-05-19

## Punt de partida

He llegit `docs/pauta-refactor-temari-llica.md`, `docs/fonts/temari-caldes-extret-net.txt`, `data/banc-preguntes.js`, `data/contingut-text.js` i `data/contingut-slides.js`.

La lectura deixa una conclusio clara: el banc actual ja te una base bona, pero encara treballa els temes d'Annex I de forma massa ampla. La refactoritzacio v3 ha de fer tres moviments alhora:

1. Atendre el subtitol exacte de cada tema.
2. Baixar de l'abstraccio a l'aplicacio real, sobretot en els temes municipals.
3. Reutilitzar el que ja existeix, pero amb distractors mes fins i menys "genetics".

## Tema 1. Constitucio espanyola de 1978: estructura i principis generals

**Focus exacte del subtitol:** estructura de la Constitucio, paper de la norma suprema, estat social i democratic de dret, valors superiors, subjeccio a la Constitucio i principi de l'article 9.3.

**Què del banc actual és massa genèric o aprofitable:** les preguntes existents ja toquen norma suprema i valors de l'article 1.1, pero encara son molt "de manual". Falta treballar estructura, articles basics i distingir valors, principis i forma politica sense repetir sempre la mateixa definicio.

**Resum de contingut v3:** la v3 hauria de presentar la Constitucio com a text base, amb la seva estructura formal, el sentit de l'Estat social i democratic de dret, els valors superiors i la subjeccio de tothom a la Constitucio. El banc ha de poder preguntar tant el marc general com microdetalls dels articles 1 i 9.

**Preguntes candidates v3**

- **id:** `a1-v3-01-01`
  - **enunciat:** Quin apartat de la Constitucio expressa millor els valors superiors de l'ordenament?
  - **opcions:** A) L'article 1.1; B) L'article 9.1; C) L'article 10.1; D) L'article 14.
  - **correcta:** A
  - **explicacio:** L'article 1.1 proclama llibertat, justícia, igualtat i pluralisme politic.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229
  - **notes distractors:** B, C i D son articles molt coneguts i propers al mateix bloc constitucional, per aixo son distractors plausibles.

- **id:** `a1-v3-01-02`
  - **enunciat:** Quina afirmacio descriu millor la idea d'Estado social i democratic de dret?
  - **opcions:** A) L'Estat sotmet el poder a la llei i orienta l'accio publica cap a llibertat, igualtat i benestar; B) L'Estat deixa l'organitzacio social al criteri de cada administracio; C) L'Estat es limita a garantir eleccions periodiques; D) L'Estat nomes regula els drets civils.
  - **correcta:** A
  - **explicacio:** La formula constitucional combina Estat de dret, dimensio social i legitimacio democratica.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229
  - **notes distractors:** Les opcions B-D redueixen el model constitucional a una sola dimensio i per aixo son versemblants.

- **id:** `a1-v3-01-03`
  - **enunciat:** Quina es la funcio de l'article 9.1 de la Constitucio?
  - **opcions:** A) Subjectar ciutadans i poders publics a la Constitucio i a la resta de l'ordenament; B) Regular nomes la jerarquia entre lleis ordinaries; C) Definir els drets fonamentals; D) Establir la forma politica de l'Estat.
  - **correcta:** A
  - **explicacio:** L'article 9.1 formula la subjeccio general a l'ordenament.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229
  - **notes distractors:** Les altres opcions barregen funcions d'altres articles constitucionals molt proxims.

- **id:** `a1-v3-01-04`
  - **enunciat:** Quin conjunt recull exactament els principis de l'article 9.3?
  - **opcions:** A) Legalitat, jerarquia normativa, publicitat, irretroactivitat, seguretat juridica, responsabilitat i interdiccio de l'arbitrarietat; B) Igualtat, llibertat, pluralisme i autonomia; C) Eficacia, descentralitzacio, coordinacio i participacio; D) Dignitat, intimitat, tutela i empara.
  - **correcta:** A
  - **explicacio:** L'article 9.3 enumera aquests principis basics del sistema juridic.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229
  - **notes distractors:** B, C i D combinen valors, principis administratius i drets, que es justament la confusio habitual.

## Tema 2. Drets i deures fonamentals dels espanyols. Garanties constitucionals

**Focus exacte del subtitol:** drets fonamentals, drets i deures dels ciutadans, garanties constitucionals, tutela judicial, recurs d'empara i igualtat davant la llei.

**Què del banc actual és massa genèric o aprofitable:** les preguntes actuals insisteixen en igualtat i empara, que ja estan be, pero encara no exploten prou altres drets del bloc constitucional ni les garanties concretes de l'article 24 i els principis del Titol I.

**Resum de contingut v3:** la v3 hauria de treballar la seccio de drets fonamentals com un bloc de proteccio reforcada, amb exemples de discriminacio, participacio politica, tutela judicial efectiva i separacio entre drets fonamentals, drets dels ciutadans i principis rectors.

**Preguntes candidates v3**

- **id:** `a1-v3-02-01`
  - **enunciat:** Que protegeix principalment l'article 14 de la Constitucio?
  - **opcions:** A) La igualtat davant la llei i la prohibicio de discriminacio; B) La inviolabilitat del domicili; C) La llibertat d'expressio; D) El dret a la vaga.
  - **correcta:** A
  - **explicacio:** L'article 14 formula la igualtat juridica i la prohibicio de discriminacio.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229
  - **notes distractors:** B, C i D son drets fonamentals reals pero d'altres articles, per aixo enganyen be.

- **id:** `a1-v3-02-02`
  - **enunciat:** Quin dret recull l'article 23 de la Constitucio?
  - **opcions:** A) Participar en els assumptes publics i accedir en igualtat a funcions i carrecs publics; B) Rebre prestacions socials no contributives; C) Gaudir de llibertat religiosa; D) Demanar informacio a qualsevol administracio sense limit.
  - **correcta:** A
  - **explicacio:** L'article 23 protegeix participacio politica i acces igualitari al servei public.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229
  - **notes distractors:** Les altres opcions son drets reals, pero de blocs constitucionals diferents.

- **id:** `a1-v3-02-03`
  - **enunciat:** Que garanteix l'article 24?
  - **opcions:** A) La tutela judicial efectiva i les garanties de defensa; B) La llibertat sindical; C) La inviolabilitat del domicili; D) La llibertat de circulacio.
  - **correcta:** A
  - **explicacio:** L'article 24 centra la proteccio en la tutela judicial i la indefensio.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229
  - **notes distractors:** B, C i D son drets molt propers en la memoria i funcionen com a distractors limpids.

- **id:** `a1-v3-02-04`
  - **enunciat:** Quin contingut explica millor l'article 15?
  - **opcions:** A) Dret a la vida i a la integritat fisica i moral, amb prohibicio de tortura i tractes inhumans o degradants; B) Dret a la propietat i a l'herencia; C) Dret a l'educacio; D) Dret a la negociacio collectiva.
  - **correcta:** A
  - **explicacio:** L'article 15 agrupa vida, integritat i prohibicio absoluta de maltractament.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229
  - **notes distractors:** Les altres opcions son drets de rang constitucional, pero no els de l'article 15.

## Tema 3. L'Estatut de Catalunya: estructura, contingut essencial i principis fonamentals

**Focus exacte del subtitol:** estructura de l'Estatut, contingut essencial, drets i deures, institucions de la Generalitat, competencies i principis d'autogovern.

**Què del banc actual és massa genèric o aprofitable:** el banc actual esta encertat en dir que l'Estatut es la norma institucional basica, pero li falta aterrissar en institucions concretes i en el nucli d'estructura, contingut i principis fonamentals que demana el temari.

**Resum de contingut v3:** la v3 ha de fer visibles els grans blocs de l'Estatut: estructura interna, contingut essencial, relacio amb la Generalitat i marc competencial. Cal evitar preguntes massa abstractes i fer-ne de mes fines sobre quina institucio fa cada funcio.

**Preguntes candidates v3**

- **id:** `a1-v3-03-01`
  - **enunciat:** Com defineix el Portal Juridic l'Estatut d'autonomia de Catalunya?
  - **opcions:** A) Com la norma institucional basica de Catalunya; B) Com un reglament municipal general; C) Com una llei ordinaria sense rang propi; D) Com un document d'orientacio politica sense valor juridic.
  - **correcta:** A
  - **explicacio:** L'Estatut es la norma institucional basica de l'autogovern catala.
  - **fonts:** https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/lestatut/index.html
  - **notes distractors:** Les opcions B-D intenten rebaixar el rang juridic de l'Estatut, que es la confusio mes utilitzable.

- **id:** `a1-v3-03-02`
  - **enunciat:** Quin contingut forma part del nucli de l'Estatut?
  - **opcions:** A) Institucions, drets i deures, competencies i relacions amb l'Estat; B) Nomes simbols i denominacions; C) Nomes el repartiment de tributs; D) Exclusivament el sistema electoral municipal.
  - **correcta:** A
  - **explicacio:** El text estatutari articula institucions, drets, deures i competencies.
  - **fonts:** https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/lestatut/index.html
  - **notes distractors:** Són respostes parcials que sonen versemblants si es pensa en una sola part del text.

- **id:** `a1-v3-03-03`
  - **enunciat:** Quin organisme exerceix la potestat legislativa de la Generalitat?
  - **opcions:** A) El Parlament de Catalunya; B) El Govern de la Generalitat; C) El Consell de Garanties Estatutaries; D) El Síndic de Greuges.
  - **correcta:** A
  - **explicacio:** El Parlament aprova les lleis i fa la funcio legislativa.
  - **fonts:** https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/lestatut/index.html
  - **notes distractors:** Les altres institucions son reals i per aixo funcionen molt be com a distractors.

- **id:** `a1-v3-03-04`
  - **enunciat:** Quina funcio correspon principalment al Govern de la Generalitat?
  - **opcions:** A) La funcio executiva i la potestat reglamentaria; B) La funcio jurisdiccional; C) La reforma estatutaria sense Parlament; D) La fiscalitzacio externa dels municipis.
  - **correcta:** A
  - **explicacio:** El Govern executa la politica i dicta reglament.
  - **fonts:** https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/lestatut/index.html
  - **notes distractors:** Són confusions habituals entre institucions catalanes, Estat i administracio local.

## Tema 4. L'Administracio local. Ens que la integren

**Focus exacte del subtitol:** concepte d'administracio local, ens locals, personalitat juridica, autonomia i criteris generals d'actuacio.

**Què del banc actual és massa genèric o aprofitable:** la pregunta existent es queda en "municipis, províncies i altres entitats", que esta be com a base, pero no fa treballar la funcio ni el marc general de la LBRL amb prou precisio.

**Resum de contingut v3:** la v3 ha de posar el focus en que l'administracio local no es nomes l'ajuntament. Cal incorporar la idea d'ens locals amb personalitat juridica propia, la seva autonomia i els principis d'actuacio que els vinculen al Dret.

**Preguntes candidates v3**

- **id:** `a1-v3-04-01`
  - **enunciat:** Quines entitats formen bàsicament l'Administracio local?
  - **opcions:** A) Municipis, províncies, illes i altres entitats locals reconegudes per l'ordenament; B) Nomes els ajuntaments; C) Nomes les comunitats autonomes; D) Els serveis públics educatius municipals.
  - **correcta:** A
  - **explicacio:** La LBRL parteix del municipi, la provincia i altres entitats locals.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** B i D son reduccions massa estretes; C barreja nivells de govern diferents.

- **id:** `a1-v3-04-02`
  - **enunciat:** Quina afirmacio es correcta sobre les entitats locals?
  - **opcions:** A) Tenen personalitat juridica plena i capacitat per gestionar interessos propis; B) Son simples oficines de tramit sense autonomia; C) Nomes poden actuar per delegacio puntual; D) No poden prestar serveis publics.
  - **correcta:** A
  - **explicacio:** La normativa local reconeix autonomia i capacitat propia.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** Les errònies exageren la tutela o redueixen l'ens local a un organisme auxiliar.

- **id:** `a1-v3-04-03`
  - **enunciat:** Amb quin criteri han d'actuar les entitats locals segons la LBRL?
  - **opcions:** A) Amb objectivitat i d'acord amb eficacia, descentralitzacio, desconcentracio i coordinacio; B) Amb autonomia absoluta fora de qualsevol marc legal; C) Amb criteri diferent a cada servei encara que contradigui la llei; D) Nomes amb criteri de proximitat, sense eficacia.
  - **correcta:** A
  - **explicacio:** La LBRL combina objectivitat, eficacia i subjeccio al Dret.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** Son distractors bons perquè barregen autonomia local i improvisacio.

- **id:** `a1-v3-04-04`
  - **enunciat:** Quina capacitat practica tenen les entitats locals per complir les seves finalitats?
  - **opcions:** A) Poden adquirir, posseir, reivindicar, permutar, gravar o alienar béns i exercir accions dins l'ambit de les seves competencies; B) Nomes poden redactar informes; C) Només poden actuar quan ho autoritza un jutjat; D) Nomes poden intervenir en educacio infantil.
  - **correcta:** A
  - **explicacio:** La LBRL dona una capacitat juridica amplia al servei de les finalitats locals.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** Les altres opcions posen una motxilla massa petita a l'ens local.

## Tema 5. El municipi (I). Organs de representacio politica i la seva designacio

**Focus exacte del subtitol:** organs basics de govern municipal, composicio, designacio i funcions del Ple, l'Alcaldia i la Junta de Govern Local.

**Què del banc actual és massa genèric o aprofitable:** el banc ja identifica els organs basics, pero encara fa preguntes molt curtes i gairebe "de llista". Cal convertir-ho en preguntes amb jerarquia funcional, composicio i matis de designacio.

**Resum de contingut v3:** la v3 ha d'explicar qui forma cada organ, qui el presideix, quina es la seva funcio politica i quines confusions habituals apareixen entre organ politic i organ tecnic.

**Preguntes candidates v3**

- **id:** `a1-v3-05-01`
  - **enunciat:** Quins organs existeixen en tots els ajuntaments?
  - **opcions:** A) Alcalde, tinents d'alcalde i Ple; B) Secretaria, intervencio i consell escolar; C) Junta de personal i comissio de serveis; D) Regidories delegades i assessoria tecnica.
  - **correcta:** A
  - **explicacio:** Aquests son els organs basics de govern local.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** Les altres opcions barregen organitzacio politica amb estructura tecnica o sectorial.

- **id:** `a1-v3-05-02`
  - **enunciat:** Com es composa el Ple municipal?
  - **opcions:** A) Per tots els regidors i es presidit per l'alcalde; B) Nomes per membres de la Junta de Govern; C) Per personal tecnic designat; D) Per representants de centres educatius.
  - **correcta:** A
  - **explicacio:** El Ple es l'orgue plenari de representacio politica.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392, https://www.llicamunt.cat/ajuntament/673-govern/organs-de-govern/ple-municipal
  - **notes distractors:** Son errònies plausibles per la confusio entre representacio politica i gestio tecnica.

- **id:** `a1-v3-05-03`
  - **enunciat:** Quan existeix la Junta de Govern Local?
  - **opcions:** A) En municipis de mes de 5.000 habitants i, en alguns de menors, si ho preveu la norma organica o el Ple; B) Nomes als municipis capital de provincia; C) Nomes amb autoritzacio autonòmica; D) A tots els municipis sempre, sense excepcio.
  - **correcta:** A
  - **explicacio:** La LBRL vincula la Junta a la mida municipal i a la regulacio organica.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** Els altres enunciats son molt creïbles per l'habit de pensar el municipi com si totes les estructures fossin universals.

- **id:** `a1-v3-05-04`
  - **enunciat:** Quina es una funcio del Ple municipal?
  - **opcions:** A) El control i la fiscalitzacio dels organs de govern; B) La gestio diaria de la neteja viaria; C) La direccio tecnica de les escoles bressol; D) La signatura de tots els contractes menors.
  - **correcta:** A
  - **explicacio:** El Ple exerceix funcions de representacio i control politic.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** Les altres opcions descriuen tasques reals, pero de gestio o servei, no del Ple.

## Tema 6. El municipi: la regulacio de les competencies a la Llei de Bases de Regim Local

**Focus exacte del subtitol:** competències pròpies i delegades, interessos locals, criteris d'atribucio i relacio entre autonomia local i marc legal.

**Què del banc actual és massa genèric o aprofitable:** la pregunta actual diu que el municipi gestiona interessos propis, que es correcte, pero encara no hi ha prou joc sobre la diferencia entre competencia propia, delegada i la lògica de proximitat.

**Resum de contingut v3:** la v3 ha de fer visible que les competencies municipals no surten del no-res: venen atribuides per llei i s'entenen en relacio amb la capacitat de gestio i els interessos locals.

**Preguntes candidates v3**

- **id:** `a1-v3-06-01`
  - **enunciat:** Quin criteri bàsic guia l'atribucio de competencies als municipis?
  - **opcions:** A) Intervenir en assumptes que afecten els seus interessos amb criteris de descentralitzacio i proximitat; B) Actuar nomes si l'Estat ho autoritza cada vegada; C) Limitar-se a executar ordres externes; D) Gestionar nomes funcions simbòliques.
  - **correcta:** A
  - **explicacio:** La LBRL vincula competencies i interessos locals amb criteris d'eficacia i proximitat.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** Les altres respostes son errors de centralitzacio molt tipics.

- **id:** `a1-v3-06-02`
  - **enunciat:** Quina diferència és més coherent entre competencias pròpies i delegades?
  - **opcions:** A) Les pròpies responen a interessos locals i les delegades s'exerceixen per encàrrec d'una altra administracio; B) Les propies depenen sempre d'una autoritzacio individual; C) Les delegades no tenen cap condicio legal; D) No hi ha cap diferencia juridica.
  - **correcta:** A
  - **explicacio:** La diferencia rau en l'origen i en el regim juridic.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** B-D confonen autonomia local amb delegacio i son molt utils com a distractors.

- **id:** `a1-v3-06-03`
  - **enunciat:** Què exigeix la LBRL quan es fixen competencies municipals?
  - **opcions:** A) Que es tingui en compte la capacitat de gestio de l'entitat local i la naturalesa de l'activitat; B) Que totes les competencies siguin iguals per a tothom; C) Que cada municipi inventi competencies noves sense marc legal; D) Que els serveis educatius quedin fora del ambit local.
  - **correcta:** A
  - **explicacio:** La norma connecta competencia amb capacitat de gestio i marc legal.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** Son plausibles perquè imiten mirades simplistes sobre uniformitat o improvisacio.

- **id:** `a1-v3-06-04`
  - **enunciat:** Quina actuacio es coherent amb el model competencial local?
  - **opcions:** A) El municipi pot actuar dins l'ambit dels interessos locals i cooperar amb altres administracions; B) El municipi nomes pot actuar si rep una ordre singular cada vegada; C) El municipi no pot col·laborar amb altres administracions; D) El municipi nomes pot gestionar urbanisme.
  - **correcta:** A
  - **explicacio:** El model local admet cooperacio i exercici dins de l'ambit propi.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392
  - **notes distractors:** Les opcions B-D son errors molt creïbles per excés de rigidesa.

## Tema 7. L'acte administratiu: concepte i classes. Elements de l'acte administratiu. Requisits dels actes administratius

**A revisar per la senyoreta Pame**

**Focus exacte del subtitol:** concepte, classes, elements, validesa, eficàcia, competència, motivacio, notificacio, publicacio i possibles vicis.

**Què del banc actual és massa genèric o aprofitable:** el banc actual fa servir definicions correctes pero molt clàssiques. Falta incorporar classes d'actes, eficacia, notificacio i els matisos de validesa que fan que la pregunta pugi de nivell.

**Resum de contingut v3:** la v3 hauria de separar clarament concepte, element i requisit. A mes, convé construir preguntes que obliguin a distingir validesa interna i produccio d'efectes externs.

**Preguntes candidates v3**

- **id:** `a1-v3-07-01`
  - **enunciat:** Quina definicio s'ajusta millor a l'acte administratiu?
  - **opcions:** A) Declaracio de voluntat, judici, coneixement o desig dictada per una Administracio en exercici d'una potestat administrativa; B) Qualsevol comunicacio interna; C) Nomes les sancions; D) Un escrit privat arxivat per l'Administracio.
  - **correcta:** A
  - **explicacio:** La definicio combina declaracio i exercici de potestat administrativa.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2015-10565
  - **notes distractors:** B-D son errors tipics perquè confonen forma, contingut i efectes.

- **id:** `a1-v3-07-02`
  - **enunciat:** Quin element es essencial per a la validesa d'un acte administratiu?
  - **opcions:** A) Competencia de l'orgue, objecte possible i finalitat publica; B) L'acord informal del personal; C) El fet que l'interessat hi estigui d'acord; D) La voluntat politica sense procediment.
  - **correcta:** A
  - **explicacio:** La validesa exigeix competencia, objecte licit i finalitat conforme a Dret.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2015-10565
  - **notes distractors:** Les altres opcions barregen conveniencia, acceptacio i voluntarisme.

- **id:** `a1-v3-07-03`
  - **enunciat:** Quan adquireix eficacia general un acte administratiu?
  - **opcions:** A) Quan es notifica o es publica, segons correspongui; B) Quan es redacta per primera vegada; C) Quan l'orgue el comenta oralment; D) Quan l'interessat l'endevina.
  - **correcta:** A
  - **explicacio:** La eficacia externa depen de notificacio o publicacio.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2015-10565
  - **notes distractors:** Les altres respostes confonen elaboracio interna amb produccio d'efectes.

- **id:** `a1-v3-07-04`
  - **enunciat:** Quina afirmacio es mes precisa sobre la revocacio?
  - **opcions:** A) L'Administracio pot revocar actes de gravamen o desfavorables si no vulnera la llei; B) Només es poden revocar els actes favorables; C) Tota revocacio anul·la automàticament l'expedient complet; D) Només es pot revocar amb consentiment notarial de tercers.
  - **correcta:** A
  - **explicacio:** La revocacio te un regim juridic propi i no es confon amb anul·lacio ni rectificacio.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2015-10565
  - **notes distractors:** Es un bloc sensible i els errors aqui solen ser juridicament molt plausibles.

## Tema 8. El procediment administratiu: concepte i principis generals. Fases del procediment administratiu

**A revisar per la senyoreta Pame**

**Focus exacte del subtitol:** concepte de procediment, principis generals, iniciacio, instruccio, audiencia, resolucio, termini, silenci i tramitacio simplificada.

**Què del banc actual és massa genèric o aprofitable:** el banc actual ja mostra les fases generals, pero encara no explora prou la posicio de l'interessat ni els moments de garantia procedimental. Aquest tema demana precisio fina.

**Resum de contingut v3:** la v3 ha de presentar el procediment com una xarxa de garanties, no com una simple seqüència de passos. Les preguntes han de fer treballar audiència, termini, resolucio expressa i drets de tramitacio.

**Preguntes candidates v3**

- **id:** `a1-v3-08-01`
  - **enunciat:** Què reconeix principalment l'article 53 a la persona interessada?
  - **opcions:** A) Accedir a l'expedient, conèixer la tramitacio, formular al·legacions i aportar documents; B) Esperar la resolucio final sense participar; C) Rebre sempre una resolucio favorable; D) Eliminar el procediment si el considera llarg.
  - **correcta:** A
  - **explicacio:** L'article 53 recull els drets basics de la persona interessada.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2015-10565
  - **notes distractors:** Les altres opcions rebaixen o caricaturitzen la posicio de l'interessat.

- **id:** `a1-v3-08-02`
  - **enunciat:** Quan es preceptiu el tràmit d'audiència?
  - **opcions:** A) Abans de resoldre, quan s'han de tenir en compte nous fets, al·legacions o proves no aportades; B) Nomes si l'interessat ho demana; C) Nomes en procediments sancionadors greus; D) Nomes si l'orgue instrutor ho veu convenient per costum.
  - **correcta:** A
  - **explicacio:** L'audiencia es una garantia procedimental, no un luxe opcional.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2015-10565
  - **notes distractors:** Les opcions B-D son errors molt comuns i per aixo funcionen molt be.

- **id:** `a1-v3-08-03`
  - **enunciat:** Què ha de fer l'Administracio una vegada iniciat un procediment?
  - **opcions:** A) Dictar resolucio expressa i notificar-la dins el termini legal; B) Esperar indefinidament; C) Tancar l'expedient si no hi ha recurs; D) Resoldre nomes si hi ha pressio externa.
  - **correcta:** A
  - **explicacio:** L'obligacio de resoldre i notificar es central.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2015-10565
  - **notes distractors:** Els altres enunciats exploten errors habituals sobre silenci i inaccio.

- **id:** `a1-v3-08-04`
  - **enunciat:** Quan es pot usar la tramitacio simplificada?
  - **opcions:** A) Quan la materia ho permet i hi ha poca complexitat, amb termini i tràmits reduïts; B) Sempre que ho demani l'interessat; C) Nomes en materia sancionadora greu; D) Quan es vol eliminar l'audiencia.
  - **correcta:** A
  - **explicacio:** La simplificacio existeix, pero sense convertir-se en supressio de garanties.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2015-10565
  - **notes distractors:** D es temptador perquè confon simplificar amb retallar drets.

## Tema 9. Organitzacio i funcionament de l'Ajuntament de Lliça d'Amunt

**A revisar per la senyoreta Pame**

**Focus exacte del subtitol:** organitzacio municipal propia de Lliça d'Amunt, ROM, funcionament intern, participacio ciutadana i relacio amb el servei d'educacio municipal.

**Què del banc actual és massa genèric o aprofitable:** ara mateix hi ha una sola pregunta que només demana "com estudiar" l'ajuntament. Per a un tema d'aquest pes, cal baixar a documents municipals reals i a peces concretes de l'organitzacio local.

**Resum de contingut v3:** la v3 hauria de distingir clarament entre el reglament organic municipal, la pagina institucional de govern, el pla educatiu local i les fitxes de l'EBM. Aquest tema es viu i s'ha de contrastar amb fonts municipals actuals.

**Preguntes candidates v3**

- **id:** `a1-v3-09-01`
  - **enunciat:** Quin es el propòsit general del Reglament organic municipal de Lliça d'Amunt?
  - **opcions:** A) Ordenar el correcte funcionament de l'entitat municipal i el compliment de les seves finalitats; B) Regular nomes la matricula de l'escola bressol; C) Substituir la LBRL; D) Determinar exclusivament salaris i complements.
  - **correcta:** A
  - **explicacio:** El ROM estructura organitzacio, funcionament i participacio.
  - **fonts:** https://www.llicamunt.cat/ajuntament/reglament-organic-municipal
  - **notes distractors:** Les altres opcions son reals a nivell administratiu, pero massa parcials o impossibles.

- **id:** `a1-v3-09-02`
  - **enunciat:** Quins àmbits tracta explícitament el ROM de Lliça d'Amunt?
  - **opcions:** A) Estatut dels regidors, grups municipals, organitzacio, regim de funcionament i participacio ciutadana; B) Nomes transport escolar i beques; C) Nomes neteja viaria; D) Nomes normes internes de les escoles bressol.
  - **correcta:** A
  - **explicacio:** El ROM delimita el nucli organitzatiu i de funcionament municipal.
  - **fonts:** https://www.llicamunt.cat/ajuntament/reglament-organic-municipal
  - **notes distractors:** Són molt plausibles perquè barregen política local amb serveis concrets.

- **id:** `a1-v3-09-03`
  - **enunciat:** Quin tret destaca la fitxa oficial de l'EBM Nova Espurna?
  - **opcions:** A) Educacio de 0 a 3, personal qualificat i servei amb orientacio educativa; B) Exclusivament lectoescriptura; C) Servei només per a 3 a 6 anys; D) Model purament assistencial sense projecte.
  - **correcta:** A
  - **explicacio:** La fitxa municipal presenta el centre com a servei educatiu del primer cicle.
  - **fonts:** https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html
  - **notes distractors:** Les errònies contraposen un model educatiu integral amb altres models que son molt recognoscibles.

- **id:** `a1-v3-09-04`
  - **enunciat:** Quina funcio te el Pla educatiu local Educ360 de Lliça d'Amunt?
  - **opcions:** A) Vertebrar la politica educativa municipal 2022-2026 amb visio integral i treball en xarxa; B) Substituir els projectes educatius dels centres; C) Regular nomes la part administrativa de les escoles bressol; D) Limitar-se al calendari de matricula.
  - **correcta:** A
  - **explicacio:** El pla educatiu local es una estrategia municipal de coordinacio educativa.
  - **fonts:** https://www.llicamunt.cat/temes/educacio/pla-educatiu-local-de-llica-damunt-educ360
  - **notes distractors:** Les altres opcions son molt versemblants si es confon pla local amb reglament o calendari.

## Tema 10. El personal al servei de les entitats locals: concepte i classes. Drets, deures i incompatibilitats. El conveni collectiu del personal laboral de l'Ajuntament de Lliça d'Amunt

**Focus exacte del subtitol:** tipus de personal, drets, deures, codi de conducta, incompatibilitats i referencia al conveni collectiu del personal laboral municipal.

**Què del banc actual és massa genèric o aprofitable:** el banc ja recull la classificacio basica i algun deure general, pero encara no entra a la part mes especifica del tema: incompatibilitats i el vincle amb el conveni collectiu local.

**Resum de contingut v3:** la v3 ha de relacionar la categoria professional amb el regim juridic corresponent i, en el cas del personal laboral de l'Ajuntament, amb el conveni collectiu propi. A mes, cal treballar el llenguatge de conducta publica, no nomes el deures abstractes.

**Preguntes candidates v3**

- **id:** `a1-v3-10-01`
  - **enunciat:** Quina classificacio general recull l'EBEP?
  - **opcions:** A) Funcionari, laboral i eventual; B) Docent, sanitari i administratiu; C) Fix, temporal i interí com a categories uniques; D) Politic, tecnic i auxiliar.
  - **correcta:** A
  - **explicacio:** L'EBEP distingeix aquestes tres grans classes de personal.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719
  - **notes distractors:** Les altres categories barregen funcio, temporalitat i nivell professional.

- **id:** `a1-v3-10-02`
  - **enunciat:** Quina conducta s'ajusta millor als deures del personal public?
  - **opcions:** A) Actuar amb objectivitat, integritat, neutralitat i servei a l'interes general; B) Prioritzar sempre les indicacions informals; C) Compartir informacio interna si accelera el servei; D) Separar completament l'activitat professional del servei public.
  - **correcta:** A
  - **explicacio:** El codi de conducta del personal public exigeix servei a l'interes general.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719
  - **notes distractors:** Són opcions molt creïbles perquè posen en joc agilitat, informalitat i distància institucional.

- **id:** `a1-v3-10-03`
  - **enunciat:** Quin principi general inspira la Llei 53/1984?
  - **opcions:** A) La dedicacio a un sol lloc de treball, amb excepcions legals; B) La compatibilitat automàtica amb qualsevol activitat; C) La llibertat absoluta de compatibilitats; D) L'aplicacio nomes als càrrecs electes.
  - **correcta:** A
  - **explicacio:** La llei parteix de la incompatibilitat i reserva les excepcions a la norma.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-151
  - **notes distractors:** B-D son errors habituals perquè semblen solucions pràctiques.

- **id:** `a1-v3-10-04`
  - **enunciat:** Quan pot exercir-se una activitat privada si afecta personal al servei d'una administracio?
  - **opcions:** A) Quan no impedeixi ni menyscabi els deures ni comprometi imparcialitat o independencia; B) Sempre que es faci fora d'horari; C) Nomes si el centre hi esta d'acord verbalment; D) Nomes si l'activitat es petita.
  - **correcta:** A
  - **explicacio:** La compatibilitat depen de la neutralitat i del bon servei.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1985-151
  - **notes distractors:** Les altres respostes son temptadores pero juridicament febles.

## Tema 11. Llei organica 3/2018, de proteccio de dades personals i garantia dels drets digitals

**Focus exacte del subtitol:** proteccio de dades personals, dades de menors, finalitat, minimitzacio, base legitimadora, deure d'informar i garantia de drets digitals.

**Què del banc actual és massa genèric o aprofitable:** el banc actual ja ha fet un primer pas bo, pero encara hi ha preguntes massa planes sobre "compartir o no compartir". El tema necessita mes treball sobre principis del tractament i deure d'informacio.

**Resum de contingut v3:** la v3 ha de fer treballar dades personals, dades de salut, minimitzacio, licitud i canals. En un entorn educatiu, la pregunta important no es nomes si es pot compartir, sino com, amb quina base i amb quina informacio.

**Preguntes candidates v3**

- **id:** `a1-v3-11-01`
  - **enunciat:** Quina es la finalitat essencial de la LOPDGDD?
  - **opcions:** A) Adaptar l'ordenament espanyol al RGPD i garantir els drets digitals; B) Regular nomes arxius en paper; C) Permetre qualsevol difusio si la finalitat es educativa; D) Limitar-se a dades d'adults.
  - **correcta:** A
  - **explicacio:** La LOPDGDD adapta el dret intern al RGPD i incorpora drets digitals.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2018-16673, https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807
  - **notes distractors:** Les altres opcions redueixen o deformen la funcio de la llei.

- **id:** `a1-v3-11-02`
  - **enunciat:** Quin principi exigeix recollir nomes les dades adequades, pertinents i limitades al necessari?
  - **opcions:** A) Minimitzacio de dades; B) Publicitat activa; C) Universalitat del registre; D) Disponibilitat immediata.
  - **correcta:** A
  - **explicacio:** El RGPD recull la minimitzacio com a principi del tractament.
  - **fonts:** https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807
  - **notes distractors:** Les altres opcions son concepts administratius reals pero no propis de proteccio de dades.

- **id:** `a1-v3-11-03`
  - **enunciat:** Que cal facilitar quan es recullen dades personals directament d'una persona?
  - **opcions:** A) Informacio bàsica del tractament i acces facil a la resta d'informacio; B) Nomes un avís verbal; C) Nomes la finalitat; D) Nomes el consentiment.
  - **correcta:** A
  - **explicacio:** El deure d'informar exigeix mes que un simple avís.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2018-16673
  - **notes distractors:** B-D son temptadors perquè semblen suficients, pero es queden curts.

- **id:** `a1-v3-11-04`
  - **enunciat:** Que exigeix la normativa quan un centre vol difondre imatges identificables de menors?
  - **opcions:** A) Base legitimadora o consentiment adequat, finalitat clara i canals de difusio correctes; B) Nomes que la foto sigui educativa; C) Nomes que la vegin les famílies del grup; D) Cap requisit especial si es una xarxa municipal.
  - **correcta:** A
  - **explicacio:** La difusio d'imatges de menors exigeix rigor juridic i finalitat precisa.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2018-16673, https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807
  - **notes distractors:** Les altres opcions son molt plausibles perquè apel·len a bones intencions educatives o comunitaries.

## Tema 12. Prevencio de riscos laborals en l'exercici professional del/de la tecnic/a d'educacio infantil

**Focus exacte del subtitol:** proteccio eficaç, accio preventiva, avaluacio de riscos, planificacio, ordre de l'espai, vies de pas, higiene i protocols d'actuacio.

**Què del banc actual és massa genèric o aprofitable:** el banc actual fa bé de connectar prevencio amb higiene i emergencies, pero encara li falta més article 14, 15 i 16 de LPRL, i sobretot portar-ho a la feina real d'una tècnica d'educacio infantil.

**Resum de contingut v3:** la v3 ha de convertir PRL en conducta quotidiana: anticipar riscos, revisar espais, ordenar materials, tenir protocols i entendre que la prevencio no es reactiva.

**Preguntes candidates v3**

- **id:** `a1-v3-12-01`
  - **enunciat:** Que reconeix l'article 14 de la LPRL?
  - **opcions:** A) El dret dels treballadors a una proteccio eficaç en matèria de seguretat i salut; B) El dret a decidir si s'apliquen protocols; C) El dret a prescindir de la prevencio si l'activitat es educativa; D) El dret a delegar tota la prevencio en les famílies.
  - **correcta:** A
  - **explicacio:** L'article 14 formula el dret basic a la proteccio eficaç.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-1995-24292
  - **notes distractors:** Les altres respostes son erros plausibles perquè semblen flexibilitat o repartiment de responsabilitats.

- **id:** `a1-v3-12-02`
  - **enunciat:** Que estableix l'article 15 sobre l'accio preventiva?
  - **opcions:** A) Cal evitar els riscos, avaluar els que no es puguin evitar i combatre'ls a l'origen; B) Nomes cal actuar després de l'accident; C) Nomes cal posar cartells; D) La prevencio es opcional si l'espai es petit.
  - **correcta:** A
  - **explicacio:** L'article 15 recull els principis generals de l'accio preventiva.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-1995-24292
  - **notes distractors:** Son distractors molt utilitzables perquè reprodueixen errors de passivitat preventiva.

- **id:** `a1-v3-12-03`
  - **enunciat:** Quina mesura forma part de l'organitzacio preventiva?
  - **opcions:** A) Avaluacio de riscos i planificacio de l'activitat preventiva; B) Revisio visual informal al final de curs; C) Actuacio exclusiva després d'un accident; D) Suspensio de totes les activitats educatives.
  - **correcta:** A
  - **explicacio:** L'avaluacio i la planificacio son la base del sistema preventiu.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-1995-24292
  - **notes distractors:** Les opcions B-D són errors molt versemblants en una practica quotidiana desordenada.

- **id:** `a1-v3-12-04`
  - **enunciat:** Quina actuacio preventiva es coherent en una escola bressol?
  - **opcions:** A) Mantenir lliures les vies de pas, ordenar l'espai i revisar riscos abans de la jornada; B) Deixar material a prop de la porta si es mes còmode; C) Esperar al simulacre per detectar obstacles; D) Prioritzar el ritme de la proposta encara que hi hagi riscos evidents.
  - **correcta:** A
  - **explicacio:** La prevencio exigeix anticipacio i ordre espacial.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-1995-24292
  - **notes distractors:** Les altres opcions son temptadores perquè son "practiques", pero no son preventives.

## Tema 13. Principis d'igualtat, inclusio i no-discriminacio en l'atencio educativa a la primera infancia

**Focus exacte del subtitol:** igualtat real i efectiva, no-discriminacio, coeducacio transversal i eliminacio d'estereotips en l'atencio educativa.

**Què del banc actual és massa genèric o aprofitable:** el banc actual ja posa be la idea de materials i expectatives lliures d'estereotips, pero falta més connexio amb l'article 9.2 de la Constitucio i amb la igualtat efectiva de la LO 3/2007.

**Resum de contingut v3:** la v3 ha de treballar la igualtat com una mirada transversal i no com una activitat puntual. També ha de separar igualtat formal, igualtat real i no-discriminacio educativa.

**Preguntes candidates v3**

- **id:** `a1-v3-13-01`
  - **enunciat:** Quin es l'objectiu de la LO 3/2007?
  - **opcions:** A) Fer efectiu el dret a la igualtat de tracte i oportunitats entre dones i homes i eliminar la discriminacio; B) Regular nomes quotes electorals; C) Substituir la Constitucio; D) Limitar-se a l'ambit privat familiar.
  - **correcta:** A
  - **explicacio:** L'article 1 de la LO 3/2007 formula aquest objectiu.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2007-6115
  - **notes distractors:** Les altres opcions redueixen la llei a un àmbit parcial o impossible.

- **id:** `a1-v3-13-02`
  - **enunciat:** Què obliga els poders publics a fer l'article 9.2 de la Constitucio?
  - **opcions:** A) Promoure les condicions perquè la igualtat sigui real i efectiva; B) Garantir només la igualtat formal; C) Evitar qualsevol diferencia de tracte encara que sigui objectiva; D) Traslladar la responsabilitat a les families.
  - **correcta:** A
  - **explicacio:** L'article 9.2 apunta a igualtat material i efectiva.
  - **fonts:** https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229
  - **notes distractors:** Les altres opcions son atractives perquè sonen prudents, pero no son la formula constitucional.

- **id:** `a1-v3-13-03`
  - **enunciat:** Quina actuacio es mes coherent amb una mirada coeducadora?
  - **opcions:** A) Revisar materials, llenguatge, rols de joc i expectatives per evitar estereotips; B) Reservar la coeducacio per dates commemoratives; C) Mantenir materials estereotipats per tradicio; D) Pensar que abans dels 3 anys els estereotips no influeixen.
  - **correcta:** A
  - **explicacio:** La coeducacio es transversal i afecta la vida quotidiana del centre.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2007-6115
  - **notes distractors:** Son errònies molt plausibles perquè reflecteixen inercia, puntualitat i falsa neutralitat.

- **id:** `a1-v3-13-04`
  - **enunciat:** Quina idea s'ajusta millor al principi d'igualtat en l'entorn educatiu?
  - **opcions:** A) Igualtat no vol dir fer exactament el mateix a tothom, sino garantir oportunitats i eliminar barreres; B) Igualtat equival a tractar totes les situacions idènticament; C) Igualtat només afecta el llenguatge administratiu; D) Igualtat es una questio opcional si no hi ha queixes.
  - **correcta:** A
  - **explicacio:** La igualtat real exigeix mesures i eliminacio de barreres.
  - **fonts:** https://boe.es/buscar/act.php?id=BOE-A-2007-6115
  - **notes distractors:** Les opcions B-D són molt creïbles perquè barregen uniformitat, formalisme i inaccio.

## Resum final

**Temes coberts:** Annex I complet, temes 1-13.

**Fonts base i de contrast utilitzades:** `docs/pauta-refactor-temari-llica.md`, `docs/fonts/temari-caldes-extret-net.txt`, `data/banc-preguntes.js`, `data/contingut-text.js`, `data/contingut-slides.js`, i fonts oficials de BOE, Portal Juridic de Catalunya i Ajuntament de Lliça d'Amunt.

**Punts febles a revisar manualment:**

1. Tema 7: la frontera entre validesa, eficacia, notificacio i revocacio demana revisio juridica fina.
2. Tema 8: el procediment administratiu te molts matisos sobre audiencia, termini i tramitacio simplificada.
3. Tema 9: es un tema viu i dependent de dades municipals que poden canviar; cal contrastar abans d'usar-lo en produccio.
4. Tema 10: el conveni collectiu del personal laboral de Lliça d'Amunt convé validar-lo amb la font municipal concreta si es vol fer una segona volta.
