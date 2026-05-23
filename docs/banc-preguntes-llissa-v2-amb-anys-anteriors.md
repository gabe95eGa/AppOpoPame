# Banc de preguntes Lliçà d’Amunt v2

Instruccions per a Codex: extreu el bloc `js` següent i substitueix o crea el fitxer `banc-preguntes.js`. La llista principal és `questionBank` i les preguntes d’anys anteriors són a `previousYearQuestions`.

```js
window.EXAM_DATA = {
  "version": "2026-05-23-v2-160-plus-anys-anteriors",
  "locale": "ca",
  "methodology": {
    "summary": "Banc millorat a partir de l’anàlisi de proves reals de Lliçà d’Amunt 2022 i 2023 i del test amb correccions aportat. Es mantenen 160 preguntes principals i s’afegeix una llista separada de preguntes d’anys anteriors.",
    "display": "L’aplicació pot barrejar l’ordre de preguntes i opcions; la resposta correcta es desa amb l’índex del camp correct.",
    "curriculumScope": "Les preguntes de l’Annex II fan referència al primer cicle d’educació infantil, especialment l’etapa 0-3, en el marc de Catalunya i de les escoles bressol municipals de Lliçà d’Amunt.",
    "questionDistribution": "40 temes x 4 preguntes = 160 preguntes. El test pot seleccionar-ne 40 de forma aleatòria.",
    "review": "Els ítems amb interpretació normativa, municipal, dades personals, salut o protocols interns poden portar etiqueta de revisió normativa recomanada.",
    "answerStyleReview": "S’han substituït distractors massa caricaturescos per alternatives plausibles: respostes parcials, òrgans o decrets propers, criteris pedagògics incomplets i formulacions massa absolutes."
  },
  "sources": [
    {
      "title": "Informe ampliat en Markdown del temari de Lliçà d’Amunt",
      "url": "docs/informe_estudi_temari_llissa_damunt_ampliat.md"
    },
    {
      "title": "F01 · Constitució Espanyola de 1978 — BOE",
      "url": "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
    },
    {
      "title": "F02 · Drets fonamentals — BOE",
      "url": "https://www.boe.es/legislacion/derechos_fundamentales.php"
    },
    {
      "title": "F05 · Llei 7/1985, de 2 d’abril, reguladora de les bases del règim local — BOE",
      "url": "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
    },
    {
      "title": "F09 · Llei 39/2015, d’1 d’octubre, del procediment administratiu comú — BOE",
      "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565"
    },
    {
      "title": "F10 · Reial decret legislatiu 5/2015, Estatut bàsic de l’empleat públic — BOE",
      "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719"
    },
    {
      "title": "F12 · Llei 53/1984, d’incompatibilitats del personal al servei de les administracions públiques — BOE",
      "url": "https://www.boe.es/buscar/act.php?id=BOE-A-1985-151"
    },
    {
      "title": "F13 · Llei orgànica 3/2018, de protecció de dades personals i garantia dels drets digitals — BOE",
      "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673"
    },
    {
      "title": "F14 · Llei 31/1995, de prevenció de riscos laborals — BOE",
      "url": "https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292"
    },
    {
      "title": "F03 · Estatut d’autonomia de Catalunya — Portal Jurídic de Catalunya",
      "url": "https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/lestatut/"
    },
    {
      "title": "F04 · Llei orgànica 6/2006, de reforma de l’Estatut d’autonomia de Catalunya — BOE",
      "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2006-13087"
    },
    {
      "title": "F15 · Decret 150/2017, de l’atenció educativa a l’alumnat en el marc d’un sistema educatiu inclusiu — Portal Jurídic",
      "url": "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=799722"
    },
    {
      "title": "F16 · Decret 21/2023, d’ordenació dels ensenyaments de l’educació infantil — Portal Jurídic",
      "url": "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=951431"
    },
    {
      "title": "F17 · Decret 102/2010, d’autonomia dels centres educatius — Portal Jurídic",
      "url": "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=545262"
    },
    {
      "title": "F18 · Decret 282/2006, primer cicle d’educació infantil i requisits dels centres — Portal Jurídic",
      "url": "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=404093"
    },
    {
      "title": "F24 · Documents per a l’organització i la gestió dels centres — Departament d’Educació",
      "url": "https://educació.gencat.cat/ca/arees-actuacio/centres-serveis-educatius/centres/organització-gestió/doigc/"
    },
    {
      "title": "F25 · Currículum i orientació. Educació infantil — XTEC",
      "url": "https://xtec.gencat.cat/ca/curriculum/infantil/"
    },
    {
      "title": "F26 · Mesures i suports — XTEC",
      "url": "https://xtec.gencat.cat/ca/curriculum/diversitat-i-inclusio/mesures-i-suports/"
    },
    {
      "title": "F27 · Coeducació i perspectiva de gènere — XTEC",
      "url": "https://xtec.gencat.cat/ca/alumnat/benestar/coeducació-i-perspectiva-de-genere/"
    },
    {
      "title": "F19 · Alimentació saludable en la primera infància 0-3 — Canal Salut",
      "url": "https://canalsalut.gencat.cat/ca/vida-saludable/alimentació/saludable/primera-infancia/"
    },
    {
      "title": "F20 · Recursos d’alimentació saludable — Departament d’Educació",
      "url": "https://educació.gencat.cat/ca/arees-actuacio/famílies/habits-saludables/alimentació/recursos-eines/"
    },
    {
      "title": "F29 · Descans 0-3 — Departament d’Educació",
      "url": "https://educació.gencat.cat/ca/arees-actuacio/famílies/habits-saludables/descans/0-3-anys/"
    },
    {
      "title": "F32 · Primers auxilis — Canal Salut",
      "url": "https://canalsalut.gencat.cat/ca/salut-a-z/p/primers-auxilis/"
    },
    {
      "title": "F33 · Rentar-se les mans — Canal Salut",
      "url": "https://canalsalut.gencat.cat/ca/vida-saludable/habits-higiene/rentarse-mans/"
    },
    {
      "title": "F34 · Simulacres en centres educatius — Protecció Civil",
      "url": "https://interior.gencat.cat/ca/arees_dactuacio/proteccio_civil/simulacres/simulacres-a-centres-educatius/"
    },
    {
      "title": "F36 · Infants de 0 a 3 anys — Drets Socials",
      "url": "https://dretssocials.gencat.cat/ca/ambits_tematics/famílies/crianca/infants-0-3-anys/"
    },
    {
      "title": "F37 · Atenció precoç — Drets Socials",
      "url": "https://dretssocials.gencat.cat/ca/ambits_tematics/infancia_i_adolescencia/atencio_precoc/"
    },
    {
      "title": "F38 · Sistema català de protecció a la infància i l’adolescència — Drets Socials",
      "url": "https://dretssocials.gencat.cat/ca/ambits_tematics/infancia_i_adolescencia/proteccio_a_la_infancia_i_ladolescencia/el_sistema_catala_de_proteccio_a_la_infancia_i_ladolescencia/"
    },
    {
      "title": "F30 · Protecció de dades personals als centres educatius — Departament d’Educació",
      "url": "https://educació.gencat.cat/ca/departament/protecció-dades/centres-educatius/"
    },
    {
      "title": "F31 · Pautes de protecció de dades per als centres educatius — APDCAT",
      "url": "https://apdcat.gencat.cat/ca/documentació/guies_basiques/Guies-apdcat/Pautes-de-protecció-de-dades-per-als-centres-educatius/"
    },
    {
      "title": "F49 · Menors i protecció de dades — APDCAT",
      "url": "https://apdcat.gencat.cat/ca/menors_i_joves/"
    },
    {
      "title": "F06 · Reglament orgànic municipal de Lliçà d’Amunt",
      "url": "https://www.llicamunt.cat/ajuntament/reglament-organic-municipal"
    },
    {
      "title": "F07 · Ple municipal de Lliçà d’Amunt",
      "url": "https://www.llicamunt.cat/ajuntament/673-govern/organs-de-govern/ple-municipal"
    },
    {
      "title": "F08 · Junta de Govern Local de Lliçà d’Amunt",
      "url": "https://www.llicamunt.cat/ajuntament/673-govern/organs-de-govern/junta-de-govern-local"
    },
    {
      "title": "F11 · Convenis del personal — Ajuntament de Lliçà d’Amunt",
      "url": "https://www.llicamunt.cat/seu-electronica/informació-oficial/recursos-humans/convenis-del-personal"
    },
    {
      "title": "F35 · Escoles bressol municipals — Ajuntament de Lliçà d’Amunt",
      "url": "https://www.llicamunt.cat/temes/educació"
    },
    {
      "title": "F46 · Regidoria d’Educació — Ajuntament de Lliçà d’Amunt",
      "url": "https://www.llicamunt.cat/ajuntament/673-govern/regidories-organització-municipal/regidoria-deducacio.html"
    },
    {
      "title": "F47 · Servei de logopèdia a les escoles — Ajuntament de Lliçà d’Amunt",
      "url": "https://www.llicamunt.cat/serveis-i-tramits/serveis/cataleg-de-serveis/servei-de-logopedia-a-les-escoles.html"
    },
    {
      "title": "F51 · Escola Bressol Municipal Palaudàries — Ajuntament de Lliçà d’Amunt",
      "url": "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html"
    },
    {
      "title": "F52 · Escola Bressol Municipal Nova Espurna — Ajuntament de Lliçà d’Amunt",
      "url": "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html"
    },
    {
      "title": "F53 · Pla Educatiu Local Educ360 — Ajuntament de Lliçà d’Amunt",
      "url": "https://www.llicamunt.cat/temes/educació/pla-educatiu-local-de-llica-damunt-educ360"
    }
  ],
  "caseContext": "Supòsit pràctic: ets tècnic/a d’educació infantil en una escola bressol municipal de Lliçà d’Amunt. El grup de 0 a 3 anys presenta ritmes diversos, situacions de familiarització, necessitats d’inclusió, cura, alimentació, higiene, comunicació amb famílies, protecció de dades i seguretat.",
  "questionBank": [
    {
      "id": "md-a1-t01-01",
      "theme": "Annex I - Tema 1",
      "document": "La Constitució Espanyola de 1978. Estructura i principis generals.",
      "prompt": "Quin apartat de la Constitució expressa millor els valors superiors de l'ordenament?",
      "options": [
        "L'article 1.1",
        "L'article 9.1",
        "L'article 14.",
        "L'article 10.1"
      ],
      "correct": 0,
      "explanation": "L'article 1.1 proclama llibertat, justícia, igualtat i pluralisme polític.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 1",
        "tema 1"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t01-02",
      "theme": "Annex I - Tema 1",
      "document": "La Constitució Espanyola de 1978. Estructura i principis generals.",
      "prompt": "Quina afirmacio descriu millor la idea d'Estado social i democratic de dret?",
      "options": [
        "L'Estat es limita a garantir eleccions periodiques",
        "L'Estat sotmet el poder a la llei i orienta l'acció pública cap a llibertat, igualtat i benestar",
        "L'Estat deixa l'organització social al criteri de cada administració",
        "L'Estat només regula els drets civils."
      ],
      "correct": 1,
      "explanation": "La formula constitucional combina Estat de dret, dimensio social i legitimacio democratica.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 1",
        "tema 1"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t01-03",
      "theme": "Annex I - Tema 1",
      "document": "La Constitució Espanyola de 1978. Estructura i principis generals.",
      "prompt": "Quina es la funció de l'article 9.1 de la Constitució?",
      "options": [
        "Regular només la jerarquia entre lleis ordinaries",
        "Establir la forma política de l'Estat.",
        "Subjectar ciutadans i poders públics a la Constitució i a la resta de l'ordenament",
        "Definir els drets fonamentals"
      ],
      "correct": 2,
      "explanation": "L'article 9.1 formula la subjeccio general a l'ordenament.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 1",
        "tema 1"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t01-04",
      "theme": "Annex I - Tema 1",
      "document": "La Constitució Espanyola de 1978. Estructura i principis generals.",
      "prompt": "Quin conjunt recull exactament els principis de l'article 9.3?",
      "options": [
        "Eficacia, descentralitzacio, coordinacio i participació",
        "Igualtat, llibertat, pluralisme i autonomia",
        "Dignitat, intimitat, tutela i empara.",
        "Legalitat, jerarquia normativa, públicitat, irretroactivitat, seguretat jurídica, responsabilitat i interdiccio de l'arbitrarietat"
      ],
      "correct": 3,
      "explanation": "L'article 9.3 enumera aquests principis basics del sistema jurídic.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 1",
        "tema 1"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t02-01",
      "theme": "Annex I - Tema 2",
      "document": "Drets i deures fonamentals dels espanyols. Garanties constitucionals.",
      "prompt": "Que protegeix principalment l'article 14 de la Constitució?",
      "options": [
        "El dret a la vaga.",
        "La llibertat d'expressio",
        "La inviolabilitat del domicili",
        "La igualtat davant la llei i la prohibicio de discriminació"
      ],
      "correct": 3,
      "explanation": "L'article 14 formula la igualtat jurídica i la prohibicio de discriminació.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 2",
        "tema 2"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t02-02",
      "theme": "Annex I - Tema 2",
      "document": "Drets i deures fonamentals dels espanyols. Garanties constitucionals.",
      "prompt": "Quin dret recull l'article 23 de la Constitució?",
      "options": [
        "Participar en els assumptes públics i accedir en igualtat a funcións i càrrecs públics",
        "Obtenir informació pública en els termes previstos per la normativa de transparència.",
        "Rebre prestacions socials no contributives",
        "Gaudir de llibertat religiosa"
      ],
      "correct": 0,
      "explanation": "L'article 23 protegeix participació política i acces igualitari al servei públic.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 2",
        "tema 2"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t02-03",
      "theme": "Annex I - Tema 2",
      "document": "Drets i deures fonamentals dels espanyols. Garanties constitucionals.",
      "prompt": "Que garanteix l'article 24?",
      "options": [
        "La llibertat sindical",
        "La tutela judicial efectiva i les garanties de defensa",
        "La inviolabilitat del domicili",
        "La llibertat de circulacio."
      ],
      "correct": 1,
      "explanation": "L'article 24 centra la protecció en la tutela judicial i la indefensio.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 2",
        "tema 2"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t02-04",
      "theme": "Annex I - Tema 2",
      "document": "Drets i deures fonamentals dels espanyols. Garanties constitucionals.",
      "prompt": "Quin contingut explica millor l'article 15?",
      "options": [
        "Dret a l'educació",
        "Dret a la negociacio collectiva.",
        "Dret a la vida i a la integritat fisica i moral, amb prohibicio de tortura i tractes inhumans o degradants",
        "Dret a la propietat i a l'herencia"
      ],
      "correct": 2,
      "explanation": "L'article 15 agrupa vida, integritat i prohibicio absoluta de maltractament.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 2",
        "tema 2"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t03-01",
      "theme": "Annex I - Tema 3",
      "document": "L'Estatut de Catalunya: estructura, contingut essencial i principis fonamentals.",
      "prompt": "Com defineix el Portal Juridic l'Estatut d'autonomia de Catalunya?",
      "options": [
        "Com un reglament municipal general",
        "Com una llei ordinaria sense rang propi",
        "Com la norma institucional basica de Catalunya",
        "Com un document d'orientacio política sense valor jurídic."
      ],
      "correct": 2,
      "explanation": "L'Estatut es la norma institucional basica de l'autogovern catala.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 3",
        "tema 3"
      ],
      "sourceRefs": [
        "https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/lestatut/index.html"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t03-02",
      "theme": "Annex I - Tema 3",
      "document": "L'Estatut de Catalunya: estructura, contingut essencial i principis fonamentals.",
      "prompt": "Quin contingut forma part del nucli de l'Estatut?",
      "options": [
        "Només el repartiment de tributs",
        "Només simbols i denominacions",
        "Exclusivament el sistema electoral municipal.",
        "Institucions, drets i deures, competències i relacions amb l'Estat"
      ],
      "correct": 3,
      "explanation": "El text estatutari articula institucions, drets, deures i competències.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 3",
        "tema 3"
      ],
      "sourceRefs": [
        "https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/lestatut/index.html"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t03-03",
      "theme": "Annex I - Tema 3",
      "document": "L'Estatut de Catalunya: estructura, contingut essencial i principis fonamentals.",
      "prompt": "Quin organisme exerceix la potestat legislativa de la Generalitat?",
      "options": [
        "El Parlament de Catalunya",
        "El Síndic de Greuges.",
        "El Govern de la Generalitat",
        "El Consell de Garanties Estatutaries"
      ],
      "correct": 0,
      "explanation": "El Parlament aprova les lleis i fa la funció legislativa.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 3",
        "tema 3"
      ],
      "sourceRefs": [
        "https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/lestatut/index.html"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t03-04",
      "theme": "Annex I - Tema 3",
      "document": "L'Estatut de Catalunya: estructura, contingut essencial i principis fonamentals.",
      "prompt": "Quina funció correspon principalment al Govern de la Generalitat?",
      "options": [
        "La funció jurisdiccional",
        "La funció executiva i la potestat reglamentaria",
        "La reforma estatutaria sense Parlament",
        "La fiscalitzacio externa dels municipis."
      ],
      "correct": 1,
      "explanation": "El Govern executa la política i dicta reglament.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 3",
        "tema 3"
      ],
      "sourceRefs": [
        "https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/lestatut/index.html"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t04-01",
      "theme": "Annex I - Tema 4",
      "document": "L'Administració local. Ens que la integren.",
      "prompt": "Quines entitats formen bàsicament l'Administració local?",
      "options": [
        "Només els ajuntaments",
        "Municipis, províncies, illes i altres entitats locals reconegudes per l'ordenament",
        "Només les comunitats autonomés",
        "Els serveis públics educatiús municipals."
      ],
      "correct": 1,
      "explanation": "La LBRL parteix del municipi, la provincia i altres entitats locals.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 4",
        "tema 4"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t04-02",
      "theme": "Annex I - Tema 4",
      "document": "L'Administració local. Ens que la integren.",
      "prompt": "Quina afirmacio es correcta sobre les entitats locals?",
      "options": [
        "Son simples oficines de tramit sense autonomia",
        "No poden prestar serveis públics.",
        "Tenen personalitat jurídica plena i capacitat per gestionar interèssos propis",
        "Només poden actuar per delegacio puntual"
      ],
      "correct": 2,
      "explanation": "La normativa local reconeix autonomia i capacitat propia.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 4",
        "tema 4"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t04-03",
      "theme": "Annex I - Tema 4",
      "document": "L'Administració local. Ens que la integren.",
      "prompt": "Amb quin criteri han d'actuar les entitats locals segons la LBRL?",
      "options": [
        "Amb autonomia de gestió, però dins del marc legal aplicable.",
        "Amb autonomia local i coordinació amb altres administracions quan sigui necessari.",
        "Amb proximitat al veïnat, encara que sense referència expressa a la coordinació.",
        "Amb objectivitat i d'acord amb eficàcia, descentralitzacio, desconcentracio i coordinacio"
      ],
      "correct": 3,
      "explanation": "La LBRL combina objectivitat, eficàcia i subjeccio al Dret.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 4",
        "tema 4"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t04-04",
      "theme": "Annex I - Tema 4",
      "document": "L'Administració local. Ens que la integren.",
      "prompt": "Quina capacitat pràctica tenen les entitats locals per complir les seves finalitats?",
      "options": [
        "Poden adquirir, posseir, reivindicar, permutar, gravar o alienar béns i exercir accións dins l'àmbit de les seves competències",
        "Poden emetre informes i certificats, però no exercir potestats patrimonials.",
        "Poden intervenir només en els serveis municipals que tinguin delegats.",
        "Poden actuar únicament quan una norma sectorial concreta ho autoritza."
      ],
      "correct": 0,
      "explanation": "La LBRL dona una capacitat jurídica amplia al servei de les finalitats locals.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 4",
        "tema 4"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t05-01",
      "theme": "Annex I - Tema 5",
      "document": "El municipi (I). Òrgans de representació política i la seva designació.",
      "prompt": "Quins organs existeixen en tots els ajuntaments?",
      "options": [
        "Alcalde, tinents d'alcalde i Ple",
        "Regidories delegades i assessoria tecnica.",
        "Secretaria, intervencio i consell escolar",
        "Junta de personal i comissio de serveis"
      ],
      "correct": 0,
      "explanation": "Aquests son els organs basics de govern local.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 5",
        "tema 5"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t05-02",
      "theme": "Annex I - Tema 5",
      "document": "El municipi (I). Òrgans de representació política i la seva designació.",
      "prompt": "Com es composa el Ple municipal?",
      "options": [
        "Només per membres de la Junta de Govern",
        "Per tots els regidors i es presidit per l'alcalde",
        "Per personal tecnic designat",
        "Per representants de centres educatiús."
      ],
      "correct": 1,
      "explanation": "El Ple es l'orgue plenari de representacio política.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 5",
        "tema 5"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392",
        "https://www.llicamunt.cat/ajuntament/673-govern/organs-de-govern/ple-municipal"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t05-03",
      "theme": "Annex I - Tema 5",
      "document": "El municipi (I). Òrgans de representació política i la seva designació.",
      "prompt": "Quan existeix la Junta de Govern Local?",
      "options": [
        "Només amb autoritzacio autonòmica",
        "A tots els municipis sempre, sense excepcio.",
        "En municipis de mes de 5.000 habitants i, en alguns de menors, si ho preveu la norma organica o el Ple",
        "Només als municipis capital de provincia"
      ],
      "correct": 2,
      "explanation": "La LBRL vincula la Junta a la mida municipal i a la regulacio organica.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 5",
        "tema 5"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t05-04",
      "theme": "Annex I - Tema 5",
      "document": "El municipi (I). Òrgans de representació política i la seva designació.",
      "prompt": "Quina es una funció del Ple municipal?",
      "options": [
        "La signatura de tots els contractes menors.",
        "La direccio tecnica de les escoles bressol",
        "La gestió diaria de la neteja viaria",
        "El control i la fiscalitzacio dels organs de govern"
      ],
      "correct": 3,
      "explanation": "El Ple exerceix funcións de representacio i control polític.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 5",
        "tema 5"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t06-01",
      "theme": "Annex I - Tema 6",
      "document": "El Municipi: La regulació de les competències a la Llei de Bases de Règim Local.",
      "prompt": "Quin criteri bàsic guia l'atribucio de competències als municipis?",
      "options": [
        "Gestionar només funcións simbòliques.",
        "Actuar només si l'Estat ho autoritza cada vegada",
        "Limitar-se a executar ordres externes",
        "Intervenir en assumptes que afecten els seús interèssos amb criteris de descentralitzacio i proximitat"
      ],
      "correct": 3,
      "explanation": "La LBRL vincula competències i interèssos locals amb criteris d'eficàcia i proximitat.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 6",
        "tema 6"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t06-02",
      "theme": "Annex I - Tema 6",
      "document": "El Municipi: La regulació de les competències a la Llei de Bases de Règim Local.",
      "prompt": "Quina diferència és més coherent entre competèncias pròpies i delegades?",
      "options": [
        "Les pròpies responen a interèssos locals i les delegades s'exerceixen per encàrrec d'una altra administració",
        "No hi ha cap diferencia jurídica.",
        "Les propies depenen sempre d'una autoritzacio individual",
        "Les delegades no tenen cap condicio legal"
      ],
      "correct": 0,
      "explanation": "La diferencia rau en l'origen i en el regim jurídic.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 6",
        "tema 6"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t06-03",
      "theme": "Annex I - Tema 6",
      "document": "El Municipi: La regulació de les competències a la Llei de Bases de Règim Local.",
      "prompt": "Què exigeix la LBRL quan es fixen competències municipals?",
      "options": [
        "Que totes les competències siguin iguals per a tothom",
        "Que es tingui en compte la capacitat de gestió de l'entitat local i la naturalesa de l'activitat",
        "Que el municipi assumeixi serveis noús sempre que responguin a necessitats veïnals, sense valorar-ne el cost.",
        "Que els serveis educatiús quedin fora del àmbit local."
      ],
      "correct": 1,
      "explanation": "La norma connecta competència amb capacitat de gestió i marc legal.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 6",
        "tema 6"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t06-04",
      "theme": "Annex I - Tema 6",
      "document": "El Municipi: La regulació de les competències a la Llei de Bases de Règim Local.",
      "prompt": "Quina actuacio es coherent amb el model competèncial local?",
      "options": [
        "El municipi només pot actuar si rep una ordre singular cada vegada",
        "El municipi no pot col·laborar amb altres administracions",
        "El municipi pot actuar dins l'àmbit dels interèssos locals i cooperar amb altres administracions",
        "El municipi només pot gestionar urbanisme."
      ],
      "correct": 2,
      "explanation": "El model local admet cooperacio i exercici dins de l'àmbit propi.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 6",
        "tema 6"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t07-01",
      "theme": "Annex I - Tema 7",
      "document": "L'acte administratiu: concepte i classes. Elements de l'acte administratiu. Requisits dels actes administratiús.",
      "prompt": "Quina definicio s'ajusta millor a l'acte administratiu?",
      "options": [
        "Una comunicació interna de l'Administració sense efectes jurídics externs.",
        "Un document presentat per una persona interèssada dins d'un expedient.",
        "Declaracio de voluntat, judici, coneixement o desig dictada per una Administració en exercici d'una potestat administrativa",
        "Només les resolucións que posen fi a un procediment sancionador."
      ],
      "correct": 2,
      "explanation": "La definicio combina declaracio i exercici de potestat administrativa.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 7",
        "tema 7"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2015-10565"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t07-02",
      "theme": "Annex I - Tema 7",
      "document": "L'acte administratiu: concepte i classes. Elements de l'acte administratiu. Requisits dels actes administratiús.",
      "prompt": "Quin element es essencial per a la validesa d'un acte administratiu?",
      "options": [
        "El fet que l'interèssat hi estigui d'acord",
        "L'acord informal del personal",
        "La voluntat política sense procediment.",
        "Competencia de l'orgue, objecte possible i finalitat pública"
      ],
      "correct": 3,
      "explanation": "La validesa exigeix competència, objecte licit i finalitat conforme a Dret.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 7",
        "tema 7"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2015-10565"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t07-03",
      "theme": "Annex I - Tema 7",
      "document": "L'acte administratiu: concepte i classes. Elements de l'acte administratiu. Requisits dels actes administratiús.",
      "prompt": "Quan adquireix eficàcia general un acte administratiu?",
      "options": [
        "Quan es notifica o es pública, segons correspongui",
        "Quan queda incorporat internament a l'expedient administratiu.",
        "Quan la persona interèssada coneix informalment que l'Administració l'ha dictat.",
        "Quan l'òrgan competent el comunica verbalment, sense notificació formal."
      ],
      "correct": 0,
      "explanation": "La eficàcia externa depen de notificació o públicacio.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 7",
        "tema 7"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2015-10565"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t07-04",
      "theme": "Annex I - Tema 7",
      "document": "L'acte administratiu: concepte i classes. Elements de l'acte administratiu. Requisits dels actes administratiús.",
      "prompt": "Quina afirmacio es mes precisa sobre la revocacio?",
      "options": [
        "La revocació produeix sempre els mateixos efectes que la nul·litat de ple dret.",
        "L'Administració pot revocar actes de gravamen o desfavorables si no vulnera la llei",
        "Només es poden revocar els actes favorables",
        "Només es pot revocar si la persona interèssada hi dona conformitat expressa."
      ],
      "correct": 1,
      "explanation": "La revocacio te un regim jurídic propi i no es confon amb anul·lacio ni rectificacio.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 7",
        "tema 7"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2015-10565"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t08-01",
      "theme": "Annex I - Tema 8",
      "document": "El procediment administratiu: concepte i principis generals. Fases del procediment administratiu.",
      "prompt": "Què reconeix principalment l'article 53 a la persona interèssada?",
      "options": [
        "Esperar la resolució final sense participar",
        "Accedir a l'expedient, conèixer la tramitació, formular al·legacions i aportar documents",
        "Rebre sempre una resolució favorable",
        "Eliminar el procediment si el considera llarg."
      ],
      "correct": 1,
      "explanation": "L'article 53 recull els drets basics de la persona interèssada.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 8",
        "tema 8"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2015-10565"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t08-02",
      "theme": "Annex I - Tema 8",
      "document": "El procediment administratiu: concepte i principis generals. Fases del procediment administratiu.",
      "prompt": "Quan es preceptiu el tràmit d'audiència?",
      "options": [
        "Només en procediments sancionadors o de responsabilitat patrimonial.",
        "Només quan l'òrgan instructor considera que pot modificar el sentit de la proposta.",
        "Abans de resoldre, quan s'han de tenir en compte noús fets, al·legacions o proves no aportades",
        "Només quan la persona interèssada ha presentat al·legacions prèvies."
      ],
      "correct": 2,
      "explanation": "L'audiència es una garantia procedimental, no un luxe opcional.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 8",
        "tema 8"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2015-10565"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t08-03",
      "theme": "Annex I - Tema 8",
      "document": "El procediment administratiu: concepte i principis generals. Fases del procediment administratiu.",
      "prompt": "Què ha de fer l'Administració una vegada iniciat un procediment?",
      "options": [
        "Resoldre només si la persona interèssada demana expressament una resposta.",
        "Esperar el venciment del termini i aplicar el règim de silenci administratiu sense resolució expressa.",
        "Suspendre la tramitació fins que hi hagi noves al·legacions de la persona interèssada.",
        "Dictar resolució expressa i notificar-la dins el termini legal"
      ],
      "correct": 3,
      "explanation": "L'obligacio de resoldre i notificar es central.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 8",
        "tema 8"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2015-10565"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t08-04",
      "theme": "Annex I - Tema 8",
      "document": "El procediment administratiu: concepte i principis generals. Fases del procediment administratiu.",
      "prompt": "Quan es pot usar la tramitació simplificada?",
      "options": [
        "Quan la matèria ho permet i hi ha poca complexitat, amb termini i tràmits reduïts",
        "Quan es vol concentrar tràmits sense eliminar les garanties essencials.",
        "Quan la persona interèssada ho sol·licita, encara que la matèria sigui complexa.",
        "Només en matèria sancionadora greu"
      ],
      "correct": 0,
      "explanation": "La simplificacio existeix, pero sense convertir-se en supressio de garanties.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 8",
        "tema 8"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2015-10565"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t09-01",
      "theme": "Annex I - Tema 9",
      "document": "Organització i funciónament de l’Ajuntament de Lliçà d’Amunt.",
      "prompt": "Quin es el propòsit general del Reglament organic municipal de Lliçà d'Amunt?",
      "options": [
        "Ordenar el correcte funciónament de l'entitat municipal i el compliment de les seves finalitats",
        "Determinar exclusivament salaris i complements.",
        "Regular només la matricula de l'escola bressol",
        "Substituir la LBRL"
      ],
      "correct": 0,
      "explanation": "El ROM estructura organització, funciónament i participació.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 9",
        "tema 9"
      ],
      "sourceRefs": [
        "https://www.llicamunt.cat/ajuntament/reglament-organic-municipal"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t09-02",
      "theme": "Annex I - Tema 9",
      "document": "Organització i funciónament de l’Ajuntament de Lliçà d’Amunt.",
      "prompt": "Quins àmbits tracta explícitament el ROM de Lliçà d'Amunt?",
      "options": [
        "Només transport escolar i beques",
        "Estatut dels regidors, grups municipals, organització, regim de funciónament i participació ciutadana",
        "Només neteja viaria",
        "Només normes internes de les escoles bressol."
      ],
      "correct": 1,
      "explanation": "El ROM delimita el nucli organitzatiu i de funciónament municipal.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 9",
        "tema 9"
      ],
      "sourceRefs": [
        "https://www.llicamunt.cat/ajuntament/reglament-organic-municipal"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t09-03",
      "theme": "Annex I - Tema 9",
      "document": "Organització i funciónament de l’Ajuntament de Lliçà d’Amunt.",
      "prompt": "Quin tret destaca la fitxa oficial de l'EBM Nova Espurna?",
      "options": [
        "Exclusivament lectoescriptura",
        "Servei només per a 3 a 6 anys",
        "Educació de 0 a 3, personal qualificat i servei amb orientacio educativa",
        "Model purament assistencial sense projecte."
      ],
      "correct": 2,
      "explanation": "La fitxa municipal presenta el centre com a servei educatiu del primer cicle.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 9",
        "tema 9"
      ],
      "sourceRefs": [
        "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t09-04",
      "theme": "Annex I - Tema 9",
      "document": "Organització i funciónament de l’Ajuntament de Lliçà d’Amunt.",
      "prompt": "Quina funció te el Pla educatiu local Educ360 de Lliçà d'Amunt?",
      "options": [
        "Limitar-se al calendari de matricula.",
        "Substituir els projectes educatiús dels centres",
        "Regular només la part administrativa de les escoles bressol",
        "Vertebrar la política educativa municipal 2022-2026 amb visió integral i treball en xarxa"
      ],
      "correct": 3,
      "explanation": "El pla educatiu local es una estrategia municipal de coordinacio educativa.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 9",
        "tema 9"
      ],
      "sourceRefs": [
        "https://www.llicamunt.cat/temes/educació/pla-educatiu-local-de-llica-damunt-educ360"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t10-01",
      "theme": "Annex I - Tema 10",
      "document": "El personal al servei de les entitats locals: concepte i classes. Drets, deures i incompatibilitats. El conveni Col·lectiu del Personal Laboral de l’Ajuntament de Lliçà d’Amunt.",
      "prompt": "Quina classificació general recull l'EBEP?",
      "options": [
        "Docent, sanitari i administratiu",
        "Politic, tecnic i auxiliar.",
        "Funcionari, laboral i eventual",
        "Fix, temporal i interí com a categories uniques"
      ],
      "correct": 2,
      "explanation": "L'EBEP distingeix aquestes tres grans classes de personal.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 10",
        "tema 10"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t10-02",
      "theme": "Annex I - Tema 10",
      "document": "El personal al servei de les entitats locals: concepte i classes. Drets, deures i incompatibilitats. El conveni Col·lectiu del Personal Laboral de l’Ajuntament de Lliçà d’Amunt.",
      "prompt": "Quina conducta s'ajusta millor als deures del personal públic?",
      "options": [
        "Compartir informació interna si accelera el servei",
        "Prioritzar sempre les indicacions informals",
        "Separar completament l'activitat professional del servei públic.",
        "Actuar amb objectivitat, integritat, neutralitat i servei a l'interès general"
      ],
      "correct": 3,
      "explanation": "El codi de conducta del personal públic exigeix servei a l'interès general.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 10",
        "tema 10"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t10-03",
      "theme": "Annex I - Tema 10",
      "document": "El personal al servei de les entitats locals: concepte i classes. Drets, deures i incompatibilitats. El conveni Col·lectiu del Personal Laboral de l’Ajuntament de Lliçà d’Amunt.",
      "prompt": "Quin principi general inspira la Llei 53/1984?",
      "options": [
        "La dedicacio a un sol lloc de treball, amb excepcions legals",
        "La compatibilitat ordinària amb activitats privades sempre que siguin fora de l'horari laboral.",
        "L'aplicacio només als càrrecs electes.",
        "La compatibilitat general, llevat que l'Administració acrediti un conflicte concret."
      ],
      "correct": 0,
      "explanation": "La llei parteix de la incompatibilitat i reserva les excepcions a la norma.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 10",
        "tema 10"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-151"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t10-04",
      "theme": "Annex I - Tema 10",
      "document": "El personal al servei de les entitats locals: concepte i classes. Drets, deures i incompatibilitats. El conveni Col·lectiu del Personal Laboral de l’Ajuntament de Lliçà d’Amunt.",
      "prompt": "Quan pot exercir-se una activitat privada si afecta personal al servei d'una administració?",
      "options": [
        "Quan hi ha autorització informal del centre o del servei on treballa.",
        "Quan no impedeixi ni menyscabi els deures ni comprometi imparcialitat o independencia",
        "Quan es fa fora de l'horari laboral, encara que pugui afectar la imparcialitat.",
        "Quan l'activitat té poca dedicació horària, encara que estigui relacionada amb el lloc públic."
      ],
      "correct": 1,
      "explanation": "La compatibilitat depen de la neutralitat i del bon servei.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 10",
        "tema 10"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1985-151"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t11-01",
      "theme": "Annex I - Tema 11",
      "document": "Llei orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals.",
      "prompt": "Quina es la finalitat essencial de la LOPDGDD?",
      "options": [
        "Regular només fitxers automatitzats de titularitat pública.",
        "Adaptar l'ordenament espanyol al RGPD i garantir els drets digitals",
        "Permetre la difusió de dades personals quan hi hagi una finalitat educativa general.",
        "Regular només el tractament de dades en l'àmbit laboral i administratiu."
      ],
      "correct": 1,
      "explanation": "La LOPDGDD adapta el dret intern al RGPD i incorpora drets digitals.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 11",
        "tema 11"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2018-16673",
        "https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t11-02",
      "theme": "Annex I - Tema 11",
      "document": "Llei orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals.",
      "prompt": "Quin principi exigeix recollir només les dades adequades, pertinents i limitades al necessari?",
      "options": [
        "Universalitat del registre",
        "Disponibilitat immediata.",
        "Minimitzacio de dades",
        "Publicitat activa"
      ],
      "correct": 2,
      "explanation": "El RGPD recull la minimitzacio com a principi del tractament.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 11",
        "tema 11"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t11-03",
      "theme": "Annex I - Tema 11",
      "document": "Llei orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals.",
      "prompt": "Que cal facilitar quan es recullen dades personals directament d'una persona?",
      "options": [
        "Només el consentiment.",
        "Només la finalitat",
        "Només un avís verbal",
        "Informació bàsica del tractament i acces facil a la resta d'informació"
      ],
      "correct": 3,
      "explanation": "El deure d'informar exigeix mes que un simple avís.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 11",
        "tema 11"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2018-16673"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t11-04",
      "theme": "Annex I - Tema 11",
      "document": "Llei orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals.",
      "prompt": "Que exigeix la normativa quan un centre vol difondre imatges identificables de menors?",
      "options": [
        "Base legitimadora o consentiment adequat, finalitat clara i canals de difusió correctes",
        "Que la imatge tingui una finalitat educativa genèrica i no comercial.",
        "Que la difusió es faci només en canals municipals o del centre.",
        "Que l'accés quedi limitat a famílies del grup, sense valorar la base legitimadora."
      ],
      "correct": 0,
      "explanation": "La difusió d'imatges de menors exigeix rigor jurídic i finalitat precisa.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 11",
        "tema 11"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2018-16673",
        "https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t12-01",
      "theme": "Annex I - Tema 12",
      "document": "Prevenció de riscos laborals en l’exercici professional del/de la tècnic/a d’educació infantil.",
      "prompt": "Que reconeix l'article 14 de la LPRL?",
      "options": [
        "El dret dels treballadors a una protecció eficaç en matèria de seguretat i salut",
        "El dret a delegar tota la prevenció en les famílies.",
        "El dret a decidir si s'apliquen protocols",
        "El dret a prescindir de la prevenció si l'activitat es educativa"
      ],
      "correct": 0,
      "explanation": "L'article 14 formula el dret basic a la protecció eficaç.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 12",
        "tema 12"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-1995-24292"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t12-02",
      "theme": "Annex I - Tema 12",
      "document": "Prevenció de riscos laborals en l’exercici professional del/de la tècnic/a d’educació infantil.",
      "prompt": "Que estableix l'article 15 sobre l'acció preventiva?",
      "options": [
        "Prioritzar la correcció del risc quan ja s'ha produït un incident.",
        "Cal evitar els riscos, avaluar els que no es puguin evitar i combatre'ls a l'origen",
        "Informar dels riscos principals amb cartells i instruccions visibles.",
        "Aplicar mesures preventives només en espais amb risc alt o aforament elevat."
      ],
      "correct": 1,
      "explanation": "L'article 15 recull els principis generals de l'acció preventiva.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 12",
        "tema 12"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-1995-24292"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t12-03",
      "theme": "Annex I - Tema 12",
      "document": "Prevenció de riscos laborals en l’exercici professional del/de la tècnic/a d’educació infantil.",
      "prompt": "Quina mesura forma part de l'organització preventiva?",
      "options": [
        "Actuacio exclusiva després d'un accident",
        "Suspensio de totes les activitats educatives.",
        "Avaluacio de riscos i planificació de l'activitat preventiva",
        "Revisio visual informal al final de curs"
      ],
      "correct": 2,
      "explanation": "L'avaluació i la planificació son la base del sistema preventiu.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 12",
        "tema 12"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-1995-24292"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t12-04",
      "theme": "Annex I - Tema 12",
      "document": "Prevenció de riscos laborals en l’exercici professional del/de la tècnic/a d’educació infantil.",
      "prompt": "Quina actuacio preventiva es coherent en una escola bressol?",
      "options": [
        "Prioritzar el ritme de la proposta encara que hi hagi riscos evidents.",
        "Deixar matèrial a prop de la porta si es mes còmode",
        "Esperar al simulacre per detectar obstacles",
        "Mantenir lliures les vies de pas, ordenar l'espai i revisar riscos abans de la jornada"
      ],
      "correct": 3,
      "explanation": "La prevenció exigeix anticipacio i ordre espacial.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 12",
        "tema 12"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-1995-24292"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t13-01",
      "theme": "Annex I - Tema 13",
      "document": "Principis d’igualtat, inclusió i no-discriminació en l’atenció educativa a la primera infància.",
      "prompt": "Quin es l'objectiu de la LO 3/2007?",
      "options": [
        "Substituir la Constitució",
        "Regular només quotes electorals",
        "Limitar-se a l'àmbit privat familiar.",
        "Fer efectiu el dret a la igualtat de tracte i oportunitats entre dones i homes i eliminar la discriminació"
      ],
      "correct": 3,
      "explanation": "L'article 1 de la LO 3/2007 formula aquest objectiu.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 13",
        "tema 13"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2007-6115"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t13-02",
      "theme": "Annex I - Tema 13",
      "document": "Principis d’igualtat, inclusió i no-discriminació en l’atenció educativa a la primera infància.",
      "prompt": "Què obliga els poders públics a fer l'article 9.2 de la Constitució?",
      "options": [
        "Promoure les condicions perquè la igualtat sigui real i efectiva",
        "Reconèixer la igualtat formal i deixar la intervenció educativa a criteri de cada família.",
        "Garantir només la igualtat formal",
        "Evitar qualsevol diferencia de tracte encara que sigui objectiva"
      ],
      "correct": 0,
      "explanation": "L'article 9.2 apunta a igualtat matèrial i efectiva.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 13",
        "tema 13"
      ],
      "sourceRefs": [
        "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t13-03",
      "theme": "Annex I - Tema 13",
      "document": "Principis d’igualtat, inclusió i no-discriminació en l’atenció educativa a la primera infància.",
      "prompt": "Quina actuacio es mes coherent amb una mirada coeducadora?",
      "options": [
        "Mantenir matèrials estereotipats per tradicio",
        "Revisar matèrials, llenguatge, rols de joc i expectatives per evitar estereotips",
        "Reservar la coeducació per dates commemoratives",
        "Pensar que abans dels 3 anys els estereotips no influeixen."
      ],
      "correct": 1,
      "explanation": "La coeducació es transversal i afecta la vida quotidiana del centre.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 13",
        "tema 13"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2007-6115"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a1-t13-04",
      "theme": "Annex I - Tema 13",
      "document": "Principis d’igualtat, inclusió i no-discriminació en l’atenció educativa a la primera infància.",
      "prompt": "Quina idea s'ajusta millor al principi d'igualtat en l'entorn educatiu?",
      "options": [
        "Igualtat equival a tractar totes les situacions idènticament",
        "La igualtat s'ha d'abordar només quan apareixen conflictes explícits.",
        "Igualtat no vol dir fer exactament el mateix a tothom, sino garantir oportunitats i eliminar barreres",
        "Igualtat només afecta el llenguatge administratiu"
      ],
      "correct": 2,
      "explanation": "La igualtat real exigeix mesures i eliminacio de barreres.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex i - tema 13",
        "tema 13"
      ],
      "sourceRefs": [
        "https://boe.es/buscar/act.php?id=BOE-A-2007-6115"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t01-01",
      "theme": "Annex II - Tema 1",
      "document": "Decret 102/2010, de 3 d’agost, d’autonomia dels centres educatiús.",
      "prompt": "En un centre, com s'ha d'entendre l'autonomia de centre en relació amb la feina diaria?",
      "options": [
        "Com un marge d'acció que es pot exercir encara que contradigui els documents de centre.",
        "Com la llibertat de cada professional per actuar al marge del projecte educatiu.",
        "Com una autonomia només economica, sense incidencia pedagògica.",
        "Com una autonomia collectiva que fixa criteris comuns i s'aplica amb coherencia en el dia a dia."
      ],
      "correct": 3,
      "explanation": "El Decret 102/2010 situa l'autonomia en una llogica collectiva i coherent amb el projecte educatiu, no com a improvisacio individual.",
      "difficulty": "mitjana",
      "competence": "Comprensio normativa",
      "tags": [
        "annex ii - tema 1",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/Codis-legislacio/Codi-Educació-de-Catalunya/",
        "https://xtec.gencat.cat/ca/projectes/lectura/pladelectura/pla-de-lectura-de-centre-i-projecte-educatiu-de-centre/",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t01-02",
      "theme": "Annex II - Tema 1",
      "document": "Decret 102/2010, de 3 d’agost, d’autonomia dels centres educatiús.",
      "prompt": "Quin element expressa millor la funció del projecte educatiu de centre?",
      "options": [
        "Recull identitat, objectiús i orienta l'activitat del centre.",
        "Serveix sobretot per justificar tramits administratiús interns.",
        "Es un text de referencia només per a inspeccio.",
        "Es un document que no ha d'influir en espais, temps ni matèrials."
      ],
      "correct": 0,
      "explanation": "El PEC dona sentit a l'activitat del centre i concreta la seva identitat i les seves prioritats.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 1",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/projectes/lectura/pladelectura/pla-de-lectura-de-centre-i-projecte-educatiu-de-centre/",
        "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=951431"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t01-03",
      "theme": "Annex II - Tema 1",
      "document": "Decret 102/2010, de 3 d’agost, d’autonomia dels centres educatiús.",
      "prompt": "Quina manera de planificar es mes coherent amb l'autonomia de centre a educació infantil 0-3?",
      "options": [
        "Una proposta unica i tancada per a tot el grup, sense adaptacions.",
        "Situacions amb sentit, flexibles i contextualitzades, ajustades al ritme dels infants.",
        "Activitats iguals cada dia per garantir homogeneitat.",
        "Una planificació que redueixi la decisio de l'infant al maxim."
      ],
      "correct": 1,
      "explanation": "El marc actual demana contextos educatiús amb sentit i flexibilitat, no uniformitat ni rigidesa.",
      "difficulty": "mitjana",
      "competence": "Comprensio pedagògica",
      "tags": [
        "annex ii - tema 1",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=951431",
        "https://xtec.gencat.cat/ca/curriculum/infantil/decret-21-2023/",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t01-04",
      "theme": "Annex II - Tema 1",
      "document": "Decret 102/2010, de 3 d’agost, d’autonomia dels centres educatiús.",
      "prompt": "Quin criteri resumeix millor la relació entre autonomia i organització quotidiana al primer cicle?",
      "options": [
        "L'organització ha de seguir sempre el mateix horari, encara que no encaixi amb els ritmes infants.",
        "L'organització es independent de la cura, del joc i de la vida quotidiana.",
        "L'organització ha de respondre al projecte de centre i a les necessitats vitals dels infants.",
        "L'organització només te valor si permet reduir decisions pedagogiques."
      ],
      "correct": 2,
      "explanation": "A 0-3, la vida quotidiana forma part del nucli educatiu i s'ha d'organitzar amb criteri pedagògic.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 1",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=951431",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t02-01",
      "theme": "Annex II - Tema 2",
      "document": "Decret 282/2006, de 4 de juliol, pel qual es regula el primer cicle de l’educació infantil i els requisits dels centres.",
      "prompt": "Quin àmbit regula principalment el Decret 282/2006?",
      "options": [
        "Exclusivament el curriculm del segon cicle d'infantil.",
        "La gestió economica dels ajuts municipals.",
        "El primer cicle de l'educació infantil i els requisits dels centres.",
        "Només el calendari escolar i les vacances del personal."
      ],
      "correct": 2,
      "explanation": "El decret se centra en el primer cicle i en els requisits dels centres que l'imparteixen.",
      "difficulty": "mitjana",
      "competence": "Comprensio normativa",
      "tags": [
        "annex ii - tema 2",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/Codis-legislacio/Codi-Educació-de-Catalunya/",
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais-exteriors/normativa/",
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0090/df91fa7d-976f-4876-9702-3f37cbe61faa/decret_ed_infantil.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t02-02",
      "theme": "Annex II - Tema 2",
      "document": "Decret 282/2006, de 4 de juliol, pel qual es regula el primer cicle de l’educació infantil i els requisits dels centres.",
      "prompt": "Quin element forma part dels requisits dels centres del primer cicle?",
      "options": [
        "La possibilitat de complementar l'equip amb suport familiar sense substituir el personal qualificat.",
        "Personal amb experiència en cura d'infants, encara que no tingui la titulació exigida.",
        "La decisió organitzativa municipal, sempre que el servei sigui de titularitat pública.",
        "Professionals amb titulacio adequada i qualificacio per a l'atencio educativa."
      ],
      "correct": 3,
      "explanation": "El marc normatiu vincula l'atencio educativa a professionals qualificats, no a criteris improvisats.",
      "difficulty": "mitjana",
      "competence": "Comprensio normativa",
      "tags": [
        "annex ii - tema 2",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0090/df91fa7d-976f-4876-9702-3f37cbe61faa/decret_ed_infantil.pdf",
        "https://portaljuridic.gencat.cat/ca/normativa/dret-a-catalunya/Codis-legislacio/Codi-Educació-de-Catalunya/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t02-03",
      "theme": "Annex II - Tema 2",
      "document": "Decret 282/2006, de 4 de juliol, pel qual es regula el primer cicle de l’educació infantil i els requisits dels centres.",
      "prompt": "Quina idea es coherent amb la regulacio dels centres del primer cicle?",
      "options": [
        "El centre necessita autoritzacio administrativa i ha de complir requisits objectiús.",
        "El centre pot concretar l'organització interna sempre que respecti el projecte educatiu.",
        "El centre pot iniciar l'activitat si disposa d'un projecte educatiu aprovat internament.",
        "El centre municipal té autonomia organitzativa i no requereix autorització específica."
      ],
      "correct": 0,
      "explanation": "El decret estableix un marc regulador i d'autoritzacio que no deixa l'obertura o el funciónament a la improvisacio.",
      "difficulty": "mitjana",
      "competence": "Comprensio normativa",
      "tags": [
        "annex ii - tema 2",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0090/df91fa7d-976f-4876-9702-3f37cbe61faa/decret_ed_infantil.pdf",
        "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=951431"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t02-04",
      "theme": "Annex II - Tema 2",
      "document": "Decret 282/2006, de 4 de juliol, pel qual es regula el primer cicle de l’educació infantil i els requisits dels centres.",
      "prompt": "Quin criteri s'ajusta millor a un centre del primer cicle?",
      "options": [
        "L'organització ha de prioritzar la uniformitat per sobre dels ritmes infants.",
        "L'organització del centre ha de posar al centre el benestar, la cura i el desenvolupament dels infants.",
        "El centre es sobretot un espai de custodia i no cal una mirada pedagògica.",
        "El projecte educatiu pot separar-se de les condicions dels espais i dels equips."
      ],
      "correct": 1,
      "explanation": "En 0-3, el marc normatiu i pedagògic exigeix pensar el centre com a espai educatiu, no com a simple custodia.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 2",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t03-01",
      "theme": "Annex II - Tema 3",
      "document": "Decret 150/2017, del 17 d’octubre, de l’atenció a l’alumnat en el marc del sistema inclusiu.",
      "prompt": "Quin objectiu general persegueix el Decret 150/2017?",
      "options": [
        "Activar mesures només quan hi ha un diagnostic tancat.",
        "Garantir que tots els centres sostinguts amb fons públics siguin inclusiús.",
        "Separar l'alumnat amb dificultats per assegurar ritmes homogenis.",
        "Aplicar sempre la mateixa resposta educativa a tot l'alumnat."
      ],
      "correct": 1,
      "explanation": "El decret desplega el sistema inclusiu per a tots els centres sostinguts amb fons públics.",
      "difficulty": "mitjana",
      "competence": "Comprensio normativa",
      "tags": [
        "annex ii - tema 3",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/diversitat-i-inclusio/marc-conceptual-i-normatiu/",
        "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=951431"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t03-02",
      "theme": "Annex II - Tema 3",
      "document": "Decret 150/2017, del 17 d’octubre, de l’atenció a l’alumnat en el marc del sistema inclusiu.",
      "prompt": "Quina classificació de mesures i suports es la propia del marc inclusiu?",
      "options": [
        "Ordinaries, especifiques i extraordinaries.",
        "Preventives, correctives i sancionadores.",
        "Universals, addicionals i intensiús.",
        "Individuals, familiars i comunitaries."
      ],
      "correct": 2,
      "explanation": "Aquesta es la classificació que fa servir el marc inclusiu de Catalunya.",
      "difficulty": "mitjana",
      "competence": "Comprensio normativa",
      "tags": [
        "annex ii - tema 3",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/diversitat-i-inclusio/marc-conceptual-i-normatiu/",
        "https://xtec.gencat.cat/web/.content/curriculum/diversitat-i-inclusio/mesures-i-suports/universals/mesures-suports-universals-centre-educatiu-2023.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t03-03",
      "theme": "Annex II - Tema 3",
      "document": "Decret 150/2017, del 17 d’octubre, de l’atenció a l’alumnat en el marc del sistema inclusiu.",
      "prompt": "Quan l'equip detecta barreres de participació, quina resposta es mes coherent?",
      "options": [
        "Considerar que la dificultat es només familiar i no de centre.",
        "Separar l'infant del grup com a primera mesura.",
        "Esperar un diagnostic extern abans de modificar res.",
        "Revisar l'entorn, observar i ajustar mesures universals abans de segregar."
      ],
      "correct": 3,
      "explanation": "La inclusio comenca amb la revisio del context i de les barreres, no amb l'aillament de l'infant.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 3",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/diversitat-i-inclusio/atencio-educativa-als-alumnes/",
        "https://xtec.gencat.cat/ca/curriculum/diversitat-i-inclusio/projectes-educatius-inclusius/disseny-universal-per-a-laprenentatge/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t03-04",
      "theme": "Annex II - Tema 3",
      "document": "Decret 150/2017, del 17 d’octubre, de l’atenció a l’alumnat en el marc del sistema inclusiu.",
      "prompt": "Quin paper s'atribueix millor a l'EAP dins del marc inclusiu?",
      "options": [
        "Col laborar en la deteccio, la valoracio inicial i la coordinacio amb el centre i la família.",
        "Substituir l'equip educatiu en la mirada quotidiana de l'aula.",
        "Gestionar sol les dificultats de l'infant des de fora del grup.",
        "Fer un diagnostic tancat i immediat sense observació de centre."
      ],
      "correct": 0,
      "explanation": "L'EAP acompanya, valora i coordina; no substitueix el criteri quotidià de l'equip educatiu.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 3",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/serveis/sez/eap/",
        "https://xtec.gencat.cat/ca/curriculum/diversitat-i-inclusio/atencio-educativa-als-alumnes/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t04-01",
      "theme": "Annex II - Tema 4",
      "document": "Documentació obligatòria a les escoles bressol.",
      "prompt": "Quin es el valor principal de la documentació pedagògica?",
      "options": [
        "Fer visible el proces d'aprenentatge i ajudar a la reflexió compartida.",
        "Substituir la relació educativa per un arxiu de proves.",
        "Demostrar que totes les activitats acaben igual.",
        "Classificar infants segons si avancen mes o menys ràpid."
      ],
      "correct": 0,
      "explanation": "La documentació dona visibilitat al proces i ajuda a pensar la pràctica, no a etiquetar infants.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 4",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/formacio/formaciogeneralprofessorat/curriculum/lavaluacio-i-la-documentació-pedagogica-a-leducacio-infantil/",
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t04-02",
      "theme": "Annex II - Tema 4",
      "document": "Documentació obligatòria a les escoles bressol.",
      "prompt": "Com s'ha d'entendre l'observació sistematica a l'educació infantil?",
      "options": [
        "Com una fotografia exacta i neutral de la realitat.",
        "Com una interpretacio professional que ajuda a comprendre processos.",
        "Com un registre per buscar errors de conducta.",
        "Com un substitut del vincle amb l'infant."
      ],
      "correct": 1,
      "explanation": "L'observació implica interpretar i contrastar, no simplement mirar o comptar conductes.",
      "difficulty": "mitjana",
      "competence": "Comprensio pedagògica",
      "tags": [
        "annex ii - tema 4",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t04-03",
      "theme": "Annex II - Tema 4",
      "document": "Documentació obligatòria a les escoles bressol.",
      "prompt": "Per a que serveixen conjuntament observació i documentació?",
      "options": [
        "Per justificar que el criteri adult no s'ha de revisar.",
        "Per acumular imatges i anotacions sense cap finalitat educativa.",
        "Per programar, avaluar i compartir la mirada entre equip i famílies.",
        "Per tenir moltes evidencies sense necessitat de reflexiónar-hi."
      ],
      "correct": 2,
      "explanation": "Les dues eines serveixen per ajustar l'acció educativa i fer-la compartible i discutible.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 4",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/formacio/formaciogeneralprofessorat/curriculum/lavaluacio-i-la-documentació-pedagogica-a-leducacio-infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t04-04",
      "theme": "Annex II - Tema 4",
      "document": "Documentació obligatòria a les escoles bressol.",
      "prompt": "Quin criteri es mes coherent amb la documentació de centre?",
      "options": [
        "Ha de substituir el criteri de l'equip educatiu.",
        "Ha de limitar-se a recollir fotos boniques de les activitats.",
        "Ha de quedar separada de la pràctica diària per mantenir objectivitat.",
        "Ha de servir per orientar decisions, no només per complir un arxiu."
      ],
      "correct": 3,
      "explanation": "La documentació te sentit si ajuda a pensar i orientar la pratica educativa.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 4",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/formacio/formaciogeneralprofessorat/curriculum/lavaluacio-i-la-documentació-pedagogica-a-leducacio-infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t05-01",
      "theme": "Annex II - Tema 5",
      "document": "El desenvolupament psicomotor dels infants de zero a tres anys. L’activitat lliure i autònoma des de l’enfocament d’Emmi Pikler a cada franja d’edat. Criteris a tenir en compte en el rol de la persona educadora.",
      "prompt": "Per que l'activitat lliure i autonoma es rellevant en el primer cicle?",
      "options": [
        "Perque convé substituir-la per exercicis iguals per a tot el grup.",
        "Perque serveix només per omplir temps entre activitats dirigides.",
        "Perque el moviment espontani s'ha de reduir al maxim.",
        "Perque afavoreix exploracio, autoregulacio i construccio progressiva d'autonomia."
      ],
      "correct": 3,
      "explanation": "L'activitat lliure no es una pausa del treball educatiu, sino un nucli del desenvolupament.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 5",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t05-02",
      "theme": "Annex II - Tema 5",
      "document": "El desenvolupament psicomotor dels infants de zero a tres anys. L’activitat lliure i autònoma des de l’enfocament d’Emmi Pikler a cada franja d’edat. Criteris a tenir en compte en el rol de la persona educadora.",
      "prompt": "Quin criteri s'ajusta millor a un enfocament respectuos amb la maduracio psicomotriu?",
      "options": [
        "Preparar un entorn segur i no forcar postures o moviments que l'infant encara no ha assolit.",
        "Controlar el moviment en els moments de més risc i deixar llibertat només en propostes concretes.",
        "Proposar postures noves si l'infant mostra interès, encara que no les mantingui autònomament.",
        "Intervenir per corregir els moviments insegurs abans que l'infant els pugui repetir."
      ],
      "correct": 0,
      "explanation": "L'enfocament respectuos acompanya la maduracio sense accelerar-la artificialment.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 5",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t05-03",
      "theme": "Annex II - Tema 5",
      "document": "El desenvolupament psicomotor dels infants de zero a tres anys. L’activitat lliure i autònoma des de l’enfocament d’Emmi Pikler a cada franja d’edat. Criteris a tenir en compte en el rol de la persona educadora.",
      "prompt": "Quin paper te la persona educadora en el desenvolupament psicomotor?",
      "options": [
        "Accelerar adquisicions per aconseguir resultats mes ràpids.",
        "Acompanyar, preparar l'entorn i observar sense invadir ni dirigir en excés.",
        "Repetir moviments fins que tots els infants facin el mateix.",
        "Intervenir sempre per corregir cada iniciativa de l'infant."
      ],
      "correct": 1,
      "explanation": "La persona educadora crea condicions i acompanya, no substitueix la iniciativa infantil.",
      "difficulty": "mitjana",
      "competence": "Comprensio pedagògica",
      "tags": [
        "annex ii - tema 5",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t05-04",
      "theme": "Annex II - Tema 5",
      "document": "El desenvolupament psicomotor dels infants de zero a tres anys. L’activitat lliure i autònoma des de l’enfocament d’Emmi Pikler a cada franja d’edat. Criteris a tenir en compte en el rol de la persona educadora.",
      "prompt": "Quin criteri d'organització d'espais i matèrials es mes coherent amb aquest tema?",
      "options": [
        "Han de prioritzar la vigilancia per sobre de la descoberta.",
        "Han de reduir la varietat de matèrials per simplificar la feina adulta.",
        "Han de afavorir autonomia, moviment, relació, seguretat i experimentacio.",
        "Han de ser uniformes i tancats per reduir al maxim la sorpresa."
      ],
      "correct": 2,
      "explanation": "Espais i matèrials son una part clau del desenvolupament psicomotor i del joc lliure.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 5",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf",
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais-exteriors/normativa/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t06-01",
      "theme": "Annex II - Tema 6",
      "document": "Neurociència. Principis fisiològics de què i com l’infant crea els seús noús aprenentatges.",
      "prompt": "Quina idea sobre la maduracio cerebral es coherent amb la XTEC?",
      "options": [
        "Que el cervell ja arriba plenament madur al primer any.",
        "Que tot depen només de repetir instruccions.",
        "Que es un proces gradual i no completament acabat al neixer.",
        "Que la maduracio no te cap relació amb l'educació."
      ],
      "correct": 2,
      "explanation": "La maduracio es progressiva, i per tant l'acompanyament educatiu hi te incidencia real.",
      "difficulty": "mitjana",
      "competence": "Comprensio pedagògica",
      "tags": [
        "annex ii - tema 6",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/alumnat/benestar/neurodesenvolupament-i-aprenentatge/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t06-02",
      "theme": "Annex II - Tema 6",
      "document": "Neurociència. Principis fisiològics de què i com l’infant crea els seús noús aprenentatges.",
      "prompt": "Quina relació estableix el recurs entre educació i cervell?",
      "options": [
        "El cervell evoluciona igual encara que no hi hagi experiencia educativa.",
        "L'educació només afecta la conducta visible, no el cervell.",
        "L'unic paper de l'educació es repetir consignes.",
        "L'educació incideix en el funciónament del cervell i en el desenvolupament de la conducta."
      ],
      "correct": 3,
      "explanation": "La relació educació-cervell dona fonament al valor de l'acompanyament educatiu a 0-3.",
      "difficulty": "mitjana",
      "competence": "Comprensio pedagògica",
      "tags": [
        "annex ii - tema 6",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/alumnat/benestar/neurodesenvolupament-i-aprenentatge/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t06-03",
      "theme": "Annex II - Tema 6",
      "document": "Neurociència. Principis fisiològics de què i com l’infant crea els seús noús aprenentatges.",
      "prompt": "Com s'entenen millor els aprenentatges nous?",
      "options": [
        "Com una construccio que connecta amb experiencies i coneixements previs.",
        "Com un proces independent de l'emocio i de la vida quotidiana.",
        "Com una copia immediata de continguts sense relació amb res anterior.",
        "Com una resposta automatica a la repeticio de consignes."
      ],
      "correct": 0,
      "explanation": "Els aprenentatges noús arrelen quan connecten amb el que l'infant ja viu i ja sap.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 6",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/alumnat/benestar/neurodesenvolupament-i-aprenentatge/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t06-04",
      "theme": "Annex II - Tema 6",
      "document": "Neurociència. Principis fisiològics de què i com l’infant crea els seús noús aprenentatges.",
      "prompt": "Quin context afavoreix mes el desenvolupament cerebral i l'aprenentatge?",
      "options": [
        "Un entorn que prioritza la correccio immediata de l'error.",
        "Un ambient segur, curios i amb una presencia adulta atenta i respectuosa.",
        "Una dinamica en que l'adult parla sempre i l'infant només escolta.",
        "Un espai que deslliga l'aprenentatge de les experiencias quotidianes."
      ],
      "correct": 1,
      "explanation": "La seguretat emocional i la curiositat són condicions centrals per aprendre amb sentit.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 6",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t07-01",
      "theme": "Annex II - Tema 7",
      "document": "L’aprenentatge significatiu. La importància dels processos i com els noús coneixements connecten amb els que ja disposa l’infant.",
      "prompt": "Quan hi ha aprenentatge significatiu?",
      "options": [
        "Quan l'activitat acaba amb un producte visible per a l'adult.",
        "Quan el nou coneixement connecta amb allo que l'infant ja sap, viu o pot comprendre.",
        "Quan tots els infants fan exactament la mateixa tasca.",
        "Quan el contingut es presenta sense context per evitar distraccións."
      ],
      "correct": 1,
      "explanation": "L'aprenentatge significatiu es defineix pel vincle amb l'experiencia i els sabers previs, no pel producte final.",
      "difficulty": "mitjana",
      "competence": "Comprensio pedagògica",
      "tags": [
        "annex ii - tema 7",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=951431"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t07-02",
      "theme": "Annex II - Tema 7",
      "document": "L’aprenentatge significatiu. La importància dels processos i com els noús coneixements connecten amb els que ja disposa l’infant.",
      "prompt": "Quin plantejament fa mes probable un aprenentatge amb sentit?",
      "options": [
        "Tasques abstrates i aillades de la vida quotidiana.",
        "Proves de memoritzacio sense manipulacio ni experiencia.",
        "Propostes vivencials i connectades amb la realitat propera de l'infant.",
        "Fitxes iguals per a tothom amb una unica resposta valida."
      ],
      "correct": 2,
      "explanation": "Les situacions d'aprenentatge tenen sentit quan parteixen del mon viscut i permeten actuar i explorar.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 7",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t07-03",
      "theme": "Annex II - Tema 7",
      "document": "L’aprenentatge significatiu. La importància dels processos i com els noús coneixements connecten amb els que ja disposa l’infant.",
      "prompt": "Quin paper te el coneixement previ de l'adult en la tasca educativa?",
      "options": [
        "Només serveix per corregir errors.",
        "S'ha d'imposar perque l'infant parteixi de zero.",
        "S'ha d'amagar per no influir en la descoberta.",
        "S'ha de posar en contacte amb les descobertes dels infants per construir significat."
      ],
      "correct": 3,
      "explanation": "L'orientacio oficial entén la intervencio com un diàleg entre sabers adults i descobertes infantils.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 7",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf",
        "https://portaljuridic.gencat.cat/ca/document-del-pjur/?documentId=951431"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t07-04",
      "theme": "Annex II - Tema 7",
      "document": "L’aprenentatge significatiu. La importància dels processos i com els noús coneixements connecten amb els que ja disposa l’infant.",
      "prompt": "Quin element reforca mes l'aprenentatge significatiu a aquesta etapa?",
      "options": [
        "La curiositat acompanyada de confiança i d'una presencia adulta atenta i no invasiva.",
        "L'absencia de relació amb les vivencies de l'infant.",
        "La pressio per acabar sempre abans que els altres.",
        "La prioritat absoluta de l'exercici repetitiu."
      ],
      "correct": 0,
      "explanation": "El text institucional vincula curiositat, benestar i acompanyament respectuos amb un aprenentatge amb sentit.",
      "difficulty": "mitjana",
      "competence": "Criteri pedagògic i professional",
      "tags": [
        "annex ii - tema 7",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t08-01",
      "theme": "Annex II - Tema 8",
      "document": "L’infant NESE a l’escola bressol. Educació inclusiva. Acompanyament de l’infant, de la família i de les educadores. Signes d’alerta en el desenvolupament de l’infant. Serveis educatiús que intervenen.",
      "prompt": "L'equip observa que un infant de 2 anys participa poc en les propostes de grup i evita algunes situacions. Quina primera actuacio es mes coherent?",
      "options": [
        "Registrar observacions, contrastar-les amb l'equip i parlar amb la família amb respecte.",
        "Comunicar-ho només quan la situació sigui ja molt evident per no preocupar la família.",
        "Esperar un diagnostic extern abans de modificar res de l'entorn.",
        "Separar temporalment l'infant per reduir-li la sobrecarga del grup."
      ],
      "correct": 0,
      "explanation": "A 0-3, la resposta comenca amb observació compartida, no amb segregacio ni espera passiva.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 8",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/diversitat-i-inclusio/atencio-educativa-als-alumnes/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/decret-21-2023/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t08-02",
      "theme": "Annex II - Tema 8",
      "document": "L’infant NESE a l’escola bressol. Educació inclusiva. Acompanyament de l’infant, de la família i de les educadores. Signes d’alerta en el desenvolupament de l’infant. Serveis educatiús que intervenen.",
      "prompt": "Quin enunciat s'ajusta millor al tractament del pla de suport individualitzat en el primer cicle d'educació infantil?",
      "options": [
        "El PI es obligatori per a qualsevol infant de 0-3 amb una rutina diferent del grup.",
        "El PI pot servir com a document de treball, pero no es prescriptiu al primer cicle en els mateixos termes que a altres etapes.",
        "El PI només s'usa quan la família el demana expressament.",
        "El PI substitueix la programacio d'aula i les observacions quotidianes."
      ],
      "correct": 1,
      "explanation": "Les orientacions de la XTEC indiquen que al primer cicle el PI no funcióna com a document prescriptiu generalitzat.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 8",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/diversitat-i-inclusio/atencio-educativa-als-alumnes/pla-de-suport-individualitzat-pi/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t08-03",
      "theme": "Annex II - Tema 8",
      "document": "L’infant NESE a l’escola bressol. Educació inclusiva. Acompanyament de l’infant, de la família i de les educadores. Signes d’alerta en el desenvolupament de l’infant. Serveis educatiús que intervenen.",
      "prompt": "Quin servei encaixa millor amb la funció d'assessorar el centre i la família davant necessitats educatives especifiques?",
      "options": [
        "El menjador escolar, perque veu els infants en moments quotidians.",
        "La direccio del centre només quan ja hi ha un conflicte greu.",
        "L'EAP, com a servei d'assessorament i orientacio psicopedagògica.",
        "El servei de neteja del centre, si fa una observació diaria del grup."
      ],
      "correct": 2,
      "explanation": "L'EAP dona suport a centres i famílies en la resposta a la variabilitat i a les necessitats educatives.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 8",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/serveis/sez/eap/",
        "https://xtec.gencat.cat/ca/serveis/see/",
        "https://xtec.gencat.cat/ca/curriculum/diversitat-i-inclusio/atencio-educativa-als-alumnes/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t08-04",
      "theme": "Annex II - Tema 8",
      "document": "L’infant NESE a l’escola bressol. Educació inclusiva. Acompanyament de l’infant, de la família i de les educadores. Signes d’alerta en el desenvolupament de l’infant. Serveis educatiús que intervenen.",
      "prompt": "Davant una barrera de participació en una proposta de joc, quina decisio es mes coherent amb la inclusio?",
      "options": [
        "Mantenir la proposta exactament igual fins que l'infant s'adapti sol.",
        "Canviar l'infant de grup per reduir-li la friccio amb els altres.",
        "Esperar que la família porti una solucio externa abans d'intervenir.",
        "Ajustar l'entorn, la proposta i els suports abans de plantejar una separacio de l'infant."
      ],
      "correct": 3,
      "explanation": "La inclusio a 0-3 comenca amb adaptacions a l'entorn i al joc, no amb separacio.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 8",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/diversitat-i-inclusio/atencio-educativa-als-alumnes/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t09-01",
      "theme": "Annex II - Tema 9",
      "document": "Dret a una alimentació, descans i higiene com a experiències fonamentals de cura i benestar de zero a tres anys. Criteris per a la intervenció educativa.",
      "prompt": "Per que alimentació, descans i higiene tenen valor educatiu en l'etapa 0-3?",
      "options": [
        "Perque es millor separar-les de tota intervencio educativa.",
        "Perque permeten descansar de l'activitat pedagògica principal.",
        "Perque només serveixen per mantenir l'ordre i la netedat del grup.",
        "Perque son situacions quotidianes on es construeixen benestar, autonomia i vincle."
      ],
      "correct": 3,
      "explanation": "A l'etapa infantil, la vida quotidiana educa i dona espai a relació, autonomia i cura.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 9",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/alumnat/benestar/habits-saludables/cura-del-cos/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t09-02",
      "theme": "Annex II - Tema 9",
      "document": "Dret a una alimentació, descans i higiene com a experiències fonamentals de cura i benestar de zero a tres anys. Criteris per a la intervenció educativa.",
      "prompt": "Un infant rebutja un aliment nou. Quina intervencio es mes coherent amb 0-3?",
      "options": [
        "Oferir-lo sense pressio i mantenir una experiencia positiva i segura.",
        "Fer-lo asseure mes estona a taula per reforcar l'habituacio.",
        "Insistir fins que acabi la racio prevista.",
        "Retirar-lo sempre i no tornar-lo a oferir per evitar conflictes."
      ],
      "correct": 0,
      "explanation": "L'alimentació educativa respecta senyals de gana/sacietat i evita convertir l'àpat en lluita.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 9",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/alumnat/benestar/habits-saludables/alimentació-saludable/",
        "https://xtec.gencat.cat/ca/alumnat/benestar/habits-saludables/cura-del-cos/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t09-03",
      "theme": "Annex II - Tema 9",
      "document": "Dret a una alimentació, descans i higiene com a experiències fonamentals de cura i benestar de zero a tres anys. Criteris per a la intervenció educativa.",
      "prompt": "Quin criteri s'ajusta millor a l'organització del descans en una llar d'infants?",
      "options": [
        "Mantenir un mateix horari universal per garantir disciplina.",
        "Ajustar el descans als senyals de cansament i no a un horari rigid per a tothom.",
        "Evitar les rutines per no condicionar el son.",
        "Deixar que l'infant dormi només quan ho demani verbalment."
      ],
      "correct": 1,
      "explanation": "El descans es regula per ritmes individuals, amb previsibilitat pero no uniformitat cega.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 9",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/ca/alumnat/benestar/habits-saludables/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t09-04",
      "theme": "Annex II - Tema 9",
      "document": "Dret a una alimentació, descans i higiene com a experiències fonamentals de cura i benestar de zero a tres anys. Criteris per a la intervenció educativa.",
      "prompt": "Durant el canvi de bolquer o la higiene de mans, quin criteri es mes adequat?",
      "options": [
        "Fer-ho amb ràpidesa per reduir el temps d'espera de la resta del grup.",
        "Convertir-ho en una rutina d'autonomia amb reforç extern quan l'infant coopera.",
        "Anticipar verbalment els passos, preservar intimitat i respectar el cos de l'infant.",
        "Reduir la conversa al mínim perquè la rutina sigui més àgil."
      ],
      "correct": 2,
      "explanation": "La cura corporal a 0-3 demana paraula, respecte i un ambient segur i discret.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 9",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/alumnat/benestar/habits-saludables/cura-del-cos/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/decret-21-2023/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t10-01",
      "theme": "Annex II - Tema 10",
      "document": "Acompanyament en el procés de control d’esfínters a l’escola bressol. Del bolquer al lavabo. Criteris conceptuals i metodològics per a la intervenció educativa des d’una perspectiva respectuosa vers la maduració de l’infant.",
      "prompt": "Quin criteri es mes coherent abans d'iniciar el pas estable al lavabo?",
      "options": [
        "Iniciar-lo només si l'infant ho demana amb paraules.",
        "Observar signes de preparacio i acordar un acompanyament compartit amb la família.",
        "Comencar el proces quan el grup ja fa servir el lavabo, encara que l'infant no mostri preparacio.",
        "Fixar una data unica per a tots els infants de l'aula."
      ],
      "correct": 1,
      "explanation": "La maduracio no es pot substituir per rutina comuna ni per pressa familiar.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 10",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/decret-21-2023/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t10-02",
      "theme": "Annex II - Tema 10",
      "document": "Acompanyament en el procés de control d’esfínters a l’escola bressol. Del bolquer al lavabo. Criteris conceptuals i metodològics per a la intervenció educativa des d’una perspectiva respectuosa vers la maduració de l’infant.",
      "prompt": "Si un infant que ja havia avanccat en el control d'esfinters torna a tenir accidents, quina lectura es mes adequada?",
      "options": [
        "Indica falta de voluntat i s'ha de corregir amb mes disciplina.",
        "Obliga a tornar a comencar des de zero amb tota la classe.",
        "Pot ser un retroces puntual lligat a maduracio, canvis o context emocional.",
        "Demostra que el centre ho havia fet malament i cal interrompre el proces."
      ],
      "correct": 2,
      "explanation": "Els retrocessos poden formar part del desenvolupament i demanen observació i calma.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 10",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/alumnat/benestar/habits-saludables/cura-del-cos/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t10-03",
      "theme": "Annex II - Tema 10",
      "document": "Acompanyament en el procés de control d’esfínters a l’escola bressol. Del bolquer al lavabo. Criteris conceptuals i metodològics per a la intervenció educativa des d’una perspectiva respectuosa vers la maduració de l’infant.",
      "prompt": "Quin criteri de l'espai del lavabo afavoreix millor l'autonomia progressiva?",
      "options": [
        "Un sol moment fix del dia per a tota la classe sense excepcions.",
        "Espai obert al passadis per veure qui hi entra i qui hi surt.",
        "Lavabo reservat només per a l'adult per evitar incidents.",
        "Materials accessibles, intimitat suficient i seqüencia comprensible per a l'infant."
      ],
      "correct": 3,
      "explanation": "L'organització de l'espai tambe educa; ha de facilitar autonomia, discrecio i seguretat.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 10",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais_mirada_estetica/mirada_estetica_espais/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t10-04",
      "theme": "Annex II - Tema 10",
      "document": "Acompanyament en el procés de control d’esfínters a l’escola bressol. Del bolquer al lavabo. Criteris conceptuals i metodològics per a la intervenció educativa des d’una perspectiva respectuosa vers la maduració de l’infant.",
      "prompt": "Quina resposta es mes adequada si la família demana accelerar el control d'esfinters?",
      "options": [
        "Explicar criteris de maduracio, compartir observacions i evitar pressions.",
        "Posposar la conversa fins que l'infant ho faci sol.",
        "Acceptar la demanda i establir una rutina fixa per coherencia.",
        "Dir que cada família ho resolgui a casa i al centre es fara el mateix amb tothom."
      ],
      "correct": 0,
      "explanation": "La família es part de l'acompanyament, pero no pot substituir el criteri de maduracio de l'infant.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 10",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/decret-21-2023/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t11-01",
      "theme": "Annex II - Tema 11",
      "document": "El valor del joc lliure a la primera infància. El joc de manipulació i experimentació. Criteris a tenir en compte en el rol de la persona educadora durant el joc espontani de l’infant.",
      "prompt": "Quin enunciat descriu millor el joc lliure a 0-3?",
      "options": [
        "Una activitat espontania escollida per l'infant, sense finalitat definida per l'adult.",
        "Una estona sense proposta que es fa servir per reposar entre tasques.",
        "Una pausa abans del joc de veritat.",
        "Una activitat amb consigna comuna per assegurar el mateix resultat."
      ],
      "correct": 0,
      "explanation": "El joc lliure te valor propi i emergeix de la iniciativa infantil.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 11",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t11-02",
      "theme": "Annex II - Tema 11",
      "document": "El valor del joc lliure a la primera infància. El joc de manipulació i experimentació. Criteris a tenir en compte en el rol de la persona educadora durant el joc espontani de l’infant.",
      "prompt": "Quan un infant repeteix una acció amb un objecte moltes vegades, quina lectura es mes ajustada?",
      "options": [
        "Vol dir que el matèrial no serveix i s'ha de retirar.",
        "Pot estar explorant una relació de causa-efecte o consolidant una habilitat.",
        "Segurament esta avorrit i cal canviar-li l'activitat.",
        "Només te sentit si al final genera una produccio visible."
      ],
      "correct": 1,
      "explanation": "La repeticio forma part de l'experimentacio i de la construccio de coneixement.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 11",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t11-03",
      "theme": "Annex II - Tema 11",
      "document": "El valor del joc lliure a la primera infància. El joc de manipulació i experimentació. Criteris a tenir en compte en el rol de la persona educadora durant el joc espontani de l’infant.",
      "prompt": "Durant el joc espontani, quina funció s'ajusta millor a la persona educadora?",
      "options": [
        "Dirigir el joc per garantir que tots segueixin el mateix objectiu.",
        "Deixar el grup sense presència adulta per afavorir autonomia total.",
        "Preparar entorn i matèrials, observar i intervenir amb mesura si cal.",
        "Corregir cada ús inesperat dels objectes."
      ],
      "correct": 2,
      "explanation": "L'adult soste el joc sense colonitzar-lo ni desaparèixer.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 11",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t11-04",
      "theme": "Annex II - Tema 11",
      "document": "El valor del joc lliure a la primera infància. El joc de manipulació i experimentació. Criteris a tenir en compte en el rol de la persona educadora durant el joc espontani de l’infant.",
      "prompt": "Quin efecte pedagògic es mes propi del joc de manipulacio i experimentacio?",
      "options": [
        "Practicar obediència i silenci.",
        "Memoritzar instruccions per repetir-les sense variacions.",
        "Arribar a un producte final identic al model de l'adult.",
        "Descobrir relacions entre acció, matèrial i resultat."
      ],
      "correct": 3,
      "explanation": "Manipular permet provar, repetir i entendre relacions concretes del mon.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 11",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais_mirada_estetica/mirada_estetica_espais/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t12-01",
      "theme": "Annex II - Tema 12",
      "document": "El joc simbòlic en el desenvolupament i com a eina per entendre el món que envolta a l’infant.",
      "prompt": "Quin comportament indica millor la presencia de joc simbòlic?",
      "options": [
        "Un infant repeteix una consigna de l'adult.",
        "Un infant ordena objectes per mida sense atribuir-los cap significat nou.",
        "Un infant encaixa peces en una unica posicio correcta.",
        "Un infant fa servir una capsa com si fos un cotxe."
      ],
      "correct": 3,
      "explanation": "El joc simbòlic apareix quan un objecte o una acció adquireixen un significat nou.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 12",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t12-02",
      "theme": "Annex II - Tema 12",
      "document": "El joc simbòlic en el desenvolupament i com a eina per entendre el món que envolta a l’infant.",
      "prompt": "Si un infant diu que un bloc es \"un pastis\", quina resposta adulta es mes adequada?",
      "options": [
        "Acceptar el significat del joc i acompanyar-lo sense corregir-lo.",
        "Corregir-lo de seguida per evitar confusions amb la realitat.",
        "Retirar el bloc i oferir una joguina amb un unic ús.",
        "Demanar-li que doni la resposta correcta abans de continuar jugant."
      ],
      "correct": 0,
      "explanation": "En el joc simbòlic, el significat el construeix l'infant i l'adult no l'ha de desfer.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 12",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t12-03",
      "theme": "Annex II - Tema 12",
      "document": "El joc simbòlic en el desenvolupament i com a eina per entendre el món que envolta a l’infant.",
      "prompt": "Quins matèrials afavoreixen millor el joc simbòlic en una aula 0-3?",
      "options": [
        "Fitxes amb imatges per reproduir exactament una historia tancada.",
        "Objectes quotidians, peces obertes i matèrials que admetin usos diversos.",
        "Joguines amb una sola funció i resposta unica.",
        "Material guardat fora de l'abast per mantenir-lo \"net\"."
      ],
      "correct": 1,
      "explanation": "El simbòlic creix amb matèrials oberts i accessibles que permeten transformacio i representacio.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 12",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais_mirada_estetica/mirada_estetica_espais/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t12-04",
      "theme": "Annex II - Tema 12",
      "document": "El joc simbòlic en el desenvolupament i com a eina per entendre el món que envolta a l’infant.",
      "prompt": "Quin valor pedagògic predomina quan un grup juga a \"cuidar ninos\" i \"cuinar\"?",
      "options": [
        "Aprendre a imitar fidelment les tasques adultes.",
        "Preparar-se per a activitats acadèmiques posteriors.",
        "Representar situacions quotidianes i elaborar relacions socials.",
        "Memoritzar frases adultes correctes."
      ],
      "correct": 2,
      "explanation": "El joc simbòlic permet reconstruir situacions de la vida quotidiana amb significat propi.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 12",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t13-01",
      "theme": "Annex II - Tema 13",
      "document": "Organització dels espais/territoris d’aprenentatge, temps i propostes educatives. Tipús de matèrials que afavoreixen el joc espontani i lliure de l’infant de zero a tres anys. Criteris en el rol de la persona educadora.",
      "prompt": "Quin criteri fa mes educatiu un espai d'aula per a infants de 0-3?",
      "options": [
        "Que estigui ple de matèrials encara que molts quedin fora de l'abast.",
        "Que canviï constantment per mantenir l'interès.",
        "Que sigui accessible, llegible i adaptat a la mida i autonomia dels infants.",
        "Que sigui neutre i poc definit per no condicionar la descoberta."
      ],
      "correct": 2,
      "explanation": "L'espai educa quan es pot usar i habitar amb autonomia i sentit.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 13",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais_mirada_estetica/mirada_estetica_espais/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t13-02",
      "theme": "Annex II - Tema 13",
      "document": "Organització dels espais/territoris d’aprenentatge, temps i propostes educatives. Tipús de matèrials que afavoreixen el joc espontani i lliure de l’infant de zero a tres anys. Criteris en el rol de la persona educadora.",
      "prompt": "Quin criteri sobre el temps afavoreix millor el joc espontani?",
      "options": [
        "Fer-lo durar poc per evitar que aparegui desordre.",
        "Mantenir el joc només mentre l'adult el pugui supervisar de prop.",
        "Tancar la proposta de seguida per passar a una altra activitat.",
        "Deixar prou temps per explorar, repetir i tornar a començar."
      ],
      "correct": 3,
      "explanation": "El joc necessita temps real per consolidar hipotesis i interèssos.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 13",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t13-03",
      "theme": "Annex II - Tema 13",
      "document": "Organització dels espais/territoris d’aprenentatge, temps i propostes educatives. Tipús de matèrials que afavoreixen el joc espontani i lliure de l’infant de zero a tres anys. Criteris en el rol de la persona educadora.",
      "prompt": "Quin criteri s'ajusta millor a la seleccio de matèrials per a 0-3?",
      "options": [
        "Prioritzar qualitat d'us, coherencia amb el projecte i possibilitats d'acció.",
        "Guardar els matèrials perque l'infant no en faci mal ús.",
        "Comprar molts objectes diferents per renovar constantment l'escena.",
        "Escollir matèrials molt tancats per reduir la variabilitat."
      ],
      "correct": 0,
      "explanation": "La qualitat del matèrial pesa mes que la simple acumulacio d'objectes.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 13",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais_mirada_estetica/mirada_estetica_espais/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t13-04",
      "theme": "Annex II - Tema 13",
      "document": "Organització dels espais/territoris d’aprenentatge, temps i propostes educatives. Tipús de matèrials que afavoreixen el joc espontani i lliure de l’infant de zero a tres anys. Criteris en el rol de la persona educadora.",
      "prompt": "Un equip reorganitza un raco d'aigua. Quin criteri es mes coherent?",
      "options": [
        "Omplir-lo de molts elements per augmentar l'atractiu visual.",
        "Fer-lo accessible, amb matèrials a l'abast i espai suficient per manipular.",
        "Posar-lo en un espai restringit per evitar desordre.",
        "Convertir-lo en una proposta d'exercicis igual per a tothom."
      ],
      "correct": 1,
      "explanation": "L'educadora prepara entorns que conviden a actuar i explorar, no a obeir consignes tancades.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 13",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais_mirada_estetica/mirada_estetica_espais/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t14-01",
      "theme": "Annex II - Tema 14",
      "document": "La relació educativa entre els espais interiors i exteriors.",
      "prompt": "Quin enunciat descriu millor la relació entre espais interiors i exteriors?",
      "options": [
        "L'exterior es sobretot una pausa de l'activitat de l'aula.",
        "Han de formar part d'un entorn educatiu coherent i continu.",
        "Interior i exterior responen a logiques independents.",
        "L'exterior només te valor si reprodueix exactament el de dins."
      ],
      "correct": 1,
      "explanation": "La continuitat educativa connecta els dos espais sense igualar-los.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 14",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t14-02",
      "theme": "Annex II - Tema 14",
      "document": "La relació educativa entre els espais interiors i exteriors.",
      "prompt": "Quin criteri fa mes educativa la transicio entre interior i exterior?",
      "options": [
        "Fer-la tan ràpidament com sigui possible.",
        "Deixar-la a la improvisacio si el grup ja coneix l'espai.",
        "Mantenir ritmes, seguretat i autonomia, evitant talls bruscos.",
        "Només cuidar-la quan hi ha sortida programada."
      ],
      "correct": 2,
      "explanation": "Les transicions també eduquen i poden donar continuitat i calma.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 14",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais-exteriors/normativa/",
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t14-03",
      "theme": "Annex II - Tema 14",
      "document": "La relació educativa entre els espais interiors i exteriors.",
      "prompt": "Per que l'exterior no s'ha de reduir a \"temps de pati\"?",
      "options": [
        "Perque el valor educatiu baixa com mes contacte hi ha amb el medi.",
        "Perque te sentit sobretot quan hi ha activitats dirigides.",
        "Perque només serveix per descarregar energia.",
        "Perque es un context d'aprenentatge, moviment, relació i descoberta."
      ],
      "correct": 3,
      "explanation": "L'exterior ofereix experiencies educatives especifices i quotidianes.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 14",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais_mirada_estetica/mirada_estetica_espais/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t14-04",
      "theme": "Annex II - Tema 14",
      "document": "La relació educativa entre els espais interiors i exteriors.",
      "prompt": "Un equip vol portar un raco de lectura a l'exterior. Quin criteri es mes coherent?",
      "options": [
        "Mantenir referents estables i un ambient acollidor, adaptant la proposta a l'entorn.",
        "Canviar completament els matèrials cada dia.",
        "Fer-ne una activitat excepcional i molt curta.",
        "Convertir-lo en una sessio dirigida per evitar distraccións."
      ],
      "correct": 0,
      "explanation": "L'exterior ha de sumar continuitat i sentit, no trencar el fil educatiu.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 14",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/curriculum/infantil/orientacions-curriculars/Orientacions-curriculars-educació-infantil_def.pdf",
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais_mirada_estetica/mirada_estetica_espais/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t15-01",
      "theme": "Annex II - Tema 15",
      "document": "Els espais exteriors de l’escola bressol. Criteris pedagògics d’un enfocament educatiu des del valor d’aprendre i jugar lliurement a l’exterior i a la natura. Criteris en el rol de la persona educadora.",
      "prompt": "Quin criteri defineix millor el risc mesurat a l'espai exterior?",
      "options": [
        "Gestionar riscos assumibles sense anul lar la descoberta ni el moviment.",
        "Prioritzar la vigilància constante per sobre de l'experiencia.",
        "Eliminar qualsevol risc encara que l'espai perdi valor de joc.",
        "Permetre l'exploració exterior sense intervenir mentre no hi hagi un perill immediat."
      ],
      "correct": 0,
      "explanation": "El risc mesurat no es absencia de risc, sino seleccio i gestió professional del que es pot assumir.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 15",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais-exteriors/normativa/",
        "https://canalsalut.gencat.cat/ca/salut-a-z/p/primers-auxilis/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t15-02",
      "theme": "Annex II - Tema 15",
      "document": "Els espais exteriors de l’escola bressol. Criteris pedagògics d’un enfocament educatiu des del valor d’aprendre i jugar lliurement a l’exterior i a la natura. Criteris en el rol de la persona educadora.",
      "prompt": "Quina afirmacio es mes coherent amb el valor educatiu de la natura en 0-3?",
      "options": [
        "La natura te valor sobretot com a decorat.",
        "La natura es un context quotidià d'exploracio, observació i relació.",
        "La natura serveix si l'adult hi prepara una activitat tancada.",
        "La natura es secundaria respecte de l'interior."
      ],
      "correct": 1,
      "explanation": "El medi natural no es ornamental: ofereix situacions riques i vives d'aprenentatge.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 15",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/",
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais_mirada_estetica/mirada_estetica_espais/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t15-03",
      "theme": "Annex II - Tema 15",
      "document": "Els espais exteriors de l’escola bressol. Criteris pedagògics d’un enfocament educatiu des del valor d’aprendre i jugar lliurement a l’exterior i a la natura. Criteris en el rol de la persona educadora.",
      "prompt": "Quina proposta encaixa millor amb un pati educatiu a 0-3?",
      "options": [
        "Una superficie uniforme i buida per tenir control visual absolut.",
        "Un lloc per repetir sempre la mateixa sequencia motriu.",
        "Diversitat de textures, ombres, elements naturals i possibilitats de moviment.",
        "Un espai només per a activitats dirigides de curta durada."
      ],
      "correct": 2,
      "explanation": "Un pati educatiu ha de convidar a explorar i moure's amb riquesa sensorial.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 15",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais-exteriors/normativa/",
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais_mirada_estetica/mirada_estetica_espais/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t15-04",
      "theme": "Annex II - Tema 15",
      "document": "Els espais exteriors de l’escola bressol. Criteris pedagògics d’un enfocament educatiu des del valor d’aprendre i jugar lliurement a l’exterior i a la natura. Criteris en el rol de la persona educadora.",
      "prompt": "Quin paper ha d'assumir preferentment la persona educadora a l'espai exterior?",
      "options": [
        "Deixar l'exterior sense presència adulta per potenciar autonomia.",
        "Dirigir constantment el joc per evitar imprevistos.",
        "Convertir cada troballa en una activitat tancada.",
        "Observar, garantir seguretat i intervenir amb mesura quan cal."
      ],
      "correct": 3,
      "explanation": "L'adult soste el risc i el joc sense colonitzar-lo ni desaparèixer.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 15",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/centres/espais_escolars/espais-exteriors/normativa/",
        "https://canalsalut.gencat.cat/ca/salut-a-z/p/primers-auxilis/traumatismes/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t16-01",
      "theme": "Annex II - Tema 16",
      "document": "La família com a primer agent socialitzador. La relació amb les famílies a una escola participativa. Organització del temps de la familiarització o inici de curs de l’escola bressol.",
      "prompt": "Quin plantejament descriu millor la relació educativa entre la llar d'infants i les famílies?",
      "options": [
        "Una relació informal que pot prescindir de criteri professional.",
        "Una relació centrada només en informar de les incidencies.",
        "Una relació on la família supervisa cada decisio tecnica del centre.",
        "Una relació basada en confiança, respecte mutu, professionalitat i corresponsabilitat."
      ],
      "correct": 3,
      "explanation": "Les orientacions de 0-3 insisteixen en cordialitat, respecte i responsabilitat compartida, no en ingerencia ni en comunicació unidireccional.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 16",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://educació.gencat.cat/ca/arees-actuacio/famílies/famílies-escola/acció-tutorial-compartida/0-3-anys/",
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t16-02",
      "theme": "Annex II - Tema 16",
      "document": "La família com a primer agent socialitzador. La relació amb les famílies a una escola participativa. Organització del temps de la familiarització o inici de curs de l’escola bressol.",
      "prompt": "Quin criteri es mes coherent en la planificació de la familiarització?",
      "options": [
        "Ajustar el ritme d'incorporacio a cada infant i a cada família, amb acompanyament progressiu.",
        "Convertir la familiarització en una rutina curta i fixa independent de les reaccións de l'infant.",
        "Fer una separacio igual per a tots els infants per guanyar eficàcia.",
        "Mantenir els familiars sempre al marge des del primer dia."
      ],
      "correct": 0,
      "explanation": "El currículum 0-3 descriu l'acollida com un procés que s'ha de planificar amb cura i segons les necessitats reals de cada infant i família.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 16",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf",
        "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t16-03",
      "theme": "Annex II - Tema 16",
      "document": "La família com a primer agent socialitzador. La relació amb les famílies a una escola participativa. Organització del temps de la familiarització o inici de curs de l’escola bressol.",
      "prompt": "Per a que serveix sobretot la primera entrevista amb les famílies?",
      "options": [
        "Per recollir tota la informació possible encara que no sigui necessaria.",
        "Per començar a construir confiança i obtenir la informació imprescindible per acollir cada infant.",
        "Per substituir el seguiment quotidià de l'equip.",
        "Per repartir instruccions tancades sense escoltar la família."
      ],
      "correct": 1,
      "explanation": "La primera entrevista es una pedra angular de la relació escola-família i s'ha de centrar en la informació pertinent, no en un interrogatori extens.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 16",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t16-04",
      "theme": "Annex II - Tema 16",
      "document": "La família com a primer agent socialitzador. La relació amb les famílies a una escola participativa. Organització del temps de la familiarització o inici de curs de l’escola bressol.",
      "prompt": "Quin canal es mes propi de la comunicació quotidiana entre escola i família a 0-3?",
      "options": [
        "Només les circulars generals.",
        "Només les converses informals entre adults sense registre ni criteri.",
        "Entrades i sortides, entrevistes, reunions i recursos escrits o digitals del centre.",
        "Només els missatges urgents quan hi ha un problema."
      ],
      "correct": 2,
      "explanation": "Les fonts oficials destaquen el valor dels contactes diaris, entrevistes i canals definits pel projecte educatiu.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 16",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://educació.gencat.cat/ca/arees-actuacio/famílies/famílies-escola/acció-tutorial-compartida/0-3-anys/",
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t17-01",
      "theme": "Annex II - Tema 17",
      "document": "La funció de la persona educadora en el primer cicle d’educació infantil. Competències, habilitats i actitud com acompanyant referent del desenvolupament i l’aprenentatge integral de l’infant. El seu paper com a membre d’un equip. La formació continuada per a la revisió professional i transformació del projecte educatiu.",
      "prompt": "Quina combinacio recull millor les funcións educatives de la persona educadora?",
      "options": [
        "Vigilar, custodiar i aplicar rutines sense reflexió pedagògica.",
        "Organitzar només el matèrial i deixar la resta a la improvisacio.",
        "Planificar l'ambient, promoure capacitats, acompanyar l'activitat i observar/documentar.",
        "Desplacar el criteri professional a perfils externs."
      ],
      "correct": 2,
      "explanation": "El currículum 0-3 formula aquestes quatre funcións de manera explicita com a nucli del fer educador.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 17",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t17-02",
      "theme": "Annex II - Tema 17",
      "document": "La funció de la persona educadora en el primer cicle d’educació infantil. Competències, habilitats i actitud com acompanyant referent del desenvolupament i l’aprenentatge integral de l’infant. El seu paper com a membre d’un equip. La formació continuada per a la revisió professional i transformació del projecte educatiu.",
      "prompt": "Quin paper fa la persona educadora quan es presenta com a referent de l'infant?",
      "options": [
        "Manté una distancia emotiva per no generar dependencia.",
        "Substitueix el pare i la mare en tots els aspectes afectiús.",
        "Es limita a controlar que el grup segueixi l'horari.",
        "Dona seguretat i confiança en la separacio de la família i en la relació amb el nou entorn."
      ],
      "correct": 3,
      "explanation": "El currículum subratlla que el vincle amb la persona educadora dona seguretat i facilita l'adaptació.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 17",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t17-03",
      "theme": "Annex II - Tema 17",
      "document": "La funció de la persona educadora en el primer cicle d’educació infantil. Competències, habilitats i actitud com acompanyant referent del desenvolupament i l’aprenentatge integral de l’infant. El seu paper com a membre d’un equip. La formació continuada per a la revisió professional i transformació del projecte educatiu.",
      "prompt": "Quina idea expressa millor el sentit educatiu dels moments de cura?",
      "options": [
        "Son situacions educatives que acompanyen la vida quotidiana i construeixen vincle.",
        "Son tasques exclusives del personal de suport.",
        "Son interrupcions assistencials que cal fer el mes ràpid possible.",
        "Son moments neutres que no tenen impacte en l'aprenentatge."
      ],
      "correct": 0,
      "explanation": "A l'etapa 0-3, alimentar, canviar, vestir o dormir no son actes aliens a l'educació, sino part del projecte.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 17",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf",
        "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t17-04",
      "theme": "Annex II - Tema 17",
      "document": "La funció de la persona educadora en el primer cicle d’educació infantil. Competències, habilitats i actitud com acompanyant referent del desenvolupament i l’aprenentatge integral de l’infant. El seu paper com a membre d’un equip. La formació continuada per a la revisió professional i transformació del projecte educatiu.",
      "prompt": "Per que la formacio continuada es rellevant dins l'equip educatiu?",
      "options": [
        "Per complir un requisit formal sense impacte a l'aula.",
        "Per revisar la pràctica, acordar criteris comuns i transformar el projecte educatiu.",
        "Per permetre que cada persona mantingui criteris contradictoris.",
        "Per delegar la responsabilitat pedagògica en una persona externa."
      ],
      "correct": 1,
      "explanation": "El projecte educatiu s'alimenta de la reflexió compartida i la formacio continuada, que dona coherencia a la intervencio.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 17",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t18-01",
      "theme": "Annex II - Tema 18",
      "document": "Accidents a l’etapa zero a tres anys. Prevenció i primeres cures.",
      "prompt": "Quin ordre resumeix millor la resposta inicial davant un accident lleu?",
      "options": [
        "Informar la família, registrar i despres veure si cal actuar.",
        "Protegir, alertar i socórrer.",
        "Esperar que l'infant es recuperi per si sol.",
        "Prioritzar l'explicacio del que ha passat abans d'atendre."
      ],
      "correct": 1,
      "explanation": "El protocol de primers auxilis de Canal Salut parteix del PAS com a seqüencia bàsica.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 18",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://canalsalut.gencat.cat/ca/salut-a-z/p/primers-auxilis/index.html"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t18-02",
      "theme": "Annex II - Tema 18",
      "document": "Accidents a l’etapa zero a tres anys. Prevenció i primeres cures.",
      "prompt": "En quina situació cal valorar amb mes urgencia una trucada als serveis d'emergencia?",
      "options": [
        "Quan l'infant plora després d'un petit ensurt sense altres signes.",
        "Quan la família demana que es truqui abans d'avaluar.",
        "Quan hi ha perdua de consciencia o dificultat respiratoria.",
        "Quan la incidencia sembla menor i l'infant continua jugant."
      ],
      "correct": 2,
      "explanation": "Els criteris de Canal Salut per a primers auxilis mostren que la perdua de consciencia i els problemes respiratoris exigeixen resposta immediata.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 18",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://canalsalut.gencat.cat/ca/salut-a-z/p/primers-auxilis/index.html",
        "https://canalsalut.gencat.cat/ca/salut-a-z/p/primers-auxilis/ennuegaments/index.html"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t18-03",
      "theme": "Annex II - Tema 18",
      "document": "Accidents a l’etapa zero a tres anys. Prevenció i primeres cures.",
      "prompt": "Quin criteri de prevenció es mes coherent amb una llar d'infants?",
      "options": [
        "Deixar que l'ordenacio depengui de cada estona i de cada adulta.",
        "Acumular matèrials de joc a l'abast per guanyar temps d'organització.",
        "Prioritzar la decoracio encara que dificulti el pas.",
        "Mantenir passadissos i sortides lliures, matèrials ben ubicats i espais pensats per a infants petits."
      ],
      "correct": 3,
      "explanation": "La prevenció d'accidents en 0-3 requereix entorns organitzats, no solament bones intencions.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 18",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://educació.gencat.cat/ca/arees-actuacio/famílies/famílies-escola/escolaritat/salut-seguretat-escola/",
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t18-04",
      "theme": "Annex II - Tema 18",
      "document": "Accidents a l’etapa zero a tres anys. Prevenció i primeres cures.",
      "prompt": "Que ha de passar despres d'atendre un accident lleu?",
      "options": [
        "Registrar la incidencia i comunicar-la a la família segons el procediment del centre.",
        "No registrar res si l'infant es calma de seguida.",
        "Deixar la decisio a criteri personal de cada educadora.",
        "Comunicar primer el cas i registrar-lo despres, si encara es considera rellevant."
      ],
      "correct": 0,
      "explanation": "El banc ja ho tracta, i les fonts oficials sostenen que la resposta educativa inclou registre i comunicació ordenada.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 18",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://canalsalut.gencat.cat/ca/salut-a-z/p/primers-auxilis/index.html",
        "https://educació.gencat.cat/ca/arees-actuacio/famílies/famílies-escola/escolaritat/salut-seguretat-escola/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t19-01",
      "theme": "Annex II - Tema 19",
      "document": "Malalties més freqüents a l’etapa zero a tres anys. Protocol d’higiene i salut.",
      "prompt": "Despres de canviar un bolquer, quina actuacio es mes coherent amb la prevenció de contagis?",
      "options": [
        "Rentar-se les mans amb aigua i sabo.",
        "Fer servir la mateixa tovallola per a tothom durant tota la jornada.",
        "Posar-se guants i donar la tasca per acabada.",
        "Rentar-se només si hi havia bruticia visible."
      ],
      "correct": 0,
      "explanation": "Canal Salut destaca el rentat de mans frequent i correcte com una de les mesures mes eficaces.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 19",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://canalsalut.gencat.cat/ca/vida-saludable/habits-higiene/rentarse-mans/",
        "https://canalsalut.gencat.cat/ca/salut-a-z/b/boca-ma-peu/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t19-02",
      "theme": "Annex II - Tema 19",
      "document": "Malalties més freqüents a l’etapa zero a tres anys. Protocol d’higiene i salut.",
      "prompt": "Per que la higiene nasal es rellevant en l'etapa 0-3?",
      "options": [
        "Perque només te utilitat quan hi ha un brot greu.",
        "Perque els refredats son frequents i una bona higiene ajuda a prevenir complicacions i a descansar millor.",
        "Perque substitueix el rentat de mans.",
        "Perque es una pràctica exclusiva del domicili familiar."
      ],
      "correct": 1,
      "explanation": "El currículum 0-3 vincula la higiene nasal amb el control de malalties de refredat i amb un descans mes reparador.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 19",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t19-03",
      "theme": "Annex II - Tema 19",
      "document": "Malalties més freqüents a l’etapa zero a tres anys. Protocol d’higiene i salut.",
      "prompt": "Quan s'ha de començar a cuidar la higiene bucodental segons Canal Salut?",
      "options": [
        "A partir del moment en què l'infant ja menja aliments sòlids de manera habitual.",
        "Quan la família comunica que ja ha iniciat l'hàbit a casa.",
        "Des del naixement i, des de la primera dent, com a minim dues vegades al dia.",
        "Quan l'infant pot raspallar-se de manera autònoma amb supervisió adulta."
      ],
      "correct": 2,
      "explanation": "La guia de primera infancia ho formula de manera explicita i ho vincula a salut i higiene quotidiana.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 19",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://canalsalut.gencat.cat/ca/vida-saludable/alimentació/saludable/primera-infancia/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t19-04",
      "theme": "Annex II - Tema 19",
      "document": "Malalties més freqüents a l’etapa zero a tres anys. Protocol d’higiene i salut.",
      "prompt": "Quin factor fa especialment important la higiene en una llar d'infants?",
      "options": [
        "La creença que la neteja només importa abans dels àpats.",
        "El fet que els infants de 0-3 no es contagiïn entre ells.",
        "La idea que les malalties digestives no es relacionen amb els habits higienics.",
        "La convivencia estreta i la presencia de malalties transmissibles com la shigel·losi o l'hepatitis A."
      ],
      "correct": 3,
      "explanation": "Canal Salut assenyala que algunes malalties son frequents a les escoles bressol i que els bons habits higiènics en redueixen la transmissio.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 19",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://canalsalut.gencat.cat/ca/detalls/article/shigel-losi",
        "https://canalsalut.gencat.cat/ca/salut-a-z/h/hepatitis/hepatitis-a/",
        "https://canalsalut.gencat.cat/ca/vida-saludable/habits-higiene/rentarse-mans/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t20-01",
      "theme": "Annex II - Tema 20",
      "document": "Pla d’evacuació a l’escola bressol. Pautes per evacuar infants de zero a tres anys.",
      "prompt": "Quin es el propòsit principal d'un pla d'emergencia en una escola bressol?",
      "options": [
        "Substituir la formacio del personal per un document guardat.",
        "Decidir cada evacuació segons la persona que estigui a prop.",
        "Organitzar la resposta del centre per reduir la improvisacio i protegir les persones.",
        "Fer visible que el centre compleix un tràmit administratiu."
      ],
      "correct": 2,
      "explanation": "El pla d'emergencia recull totes les actuacions davant d'una emergencia i posa l'accent en la col·laboracio i la preparacio.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 20",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://educació.gencat.cat/ca/departament/publicacions/monografies/gestió-centre/pla-emergencia-centre/",
        "https://repositori.educació.gencat.cat/bitstream/handle/20.500.12694/2900/pla_emergencia_centre_docent_adaptat_llars_infants_2003.pdf?isAllowed=y&sequence=1"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t20-02",
      "theme": "Annex II - Tema 20",
      "document": "Pla d’evacuació a l’escola bressol. Pautes per evacuar infants de zero a tres anys.",
      "prompt": "Quin criteri ha de recollir un pla d'emergencia adaptat a llars d'infants?",
      "options": [
        "Només les sorties al pati i les activitats de curs.",
        "Només els horaris de revisio del matèrial.",
        "Només el nom de la coordinadora.",
        "Quan cal evacuar i quan cal confinar, i com fer-ho en cada cas."
      ],
      "correct": 3,
      "explanation": "El document adaptat a llars d'infants detalla l'organització en cas d'emergencia, amb fitxes concretes per a evacuació i confinament.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 20",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://repositori.educació.gencat.cat/bitstream/handle/20.500.12694/2900/pla_emergencia_centre_docent_adaptat_llars_infants_2003.pdf?isAllowed=y&sequence=1"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t20-03",
      "theme": "Annex II - Tema 20",
      "document": "Pla d’evacuació a l’escola bressol. Pautes per evacuar infants de zero a tres anys.",
      "prompt": "Quina característica del primer cicle condiciona mes una evacuació?",
      "options": [
        "La dependencia de l'ajuda adulta i la dificultat de desplacament autònom de molts infants.",
        "La possibilitat de sortir igual que en una escola de primària.",
        "La capacitat de seguir instruccions complexes sense suport.",
        "El fet que tots els infants es desplacin sols amb facilitat."
      ],
      "correct": 0,
      "explanation": "El pla per a llars d'infants i el propi sentit educatiu del 0-3 obliguen a pensar en infants que no tenen autonomia homogenea.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 20",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://repositori.educació.gencat.cat/bitstream/handle/20.500.12694/2900/pla_emergencia_centre_docent_adaptat_llars_infants_2003.pdf?isAllowed=y&sequence=1"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t20-04",
      "theme": "Annex II - Tema 20",
      "document": "Pla d’evacuació a l’escola bressol. Pautes per evacuar infants de zero a tres anys.",
      "prompt": "Quin paper tenen els adults del centre durant una evacuació de llar d'infants?",
      "options": [
        "Primer s'espera que cada infant localitzi la seva família.",
        "Cada adult es fa carrec del seu grup i segueix el pla previst, ajudant si cal altres infants o adults.",
        "Tothom surt de manera espontania pel mateix lloc.",
        "La coordinacio es deixa per a després de la sortida."
      ],
      "correct": 1,
      "explanation": "El document adaptat estableix una responsabilitat clara per grup i una cadena d'ajuda, especialment amb infants amb mobilitat reduïda.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 20",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://repositori.educació.gencat.cat/bitstream/handle/20.500.12694/2900/pla_emergencia_centre_docent_adaptat_llars_infants_2003.pdf?isAllowed=y&sequence=1"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t21-01",
      "theme": "Annex II - Tema 21",
      "document": "La figura del psicòleg a l’escola bressol. Tasques de prevenció i acompanyament.",
      "prompt": "Quin paper descriu millor l'EAP en relació amb una escola bressol?",
      "options": [
        "Actua només quan ja hi ha un diagnostici tancat.",
        "Dona suport al centre, al professorat i a les famílies davant la variabilitat i les necessitats educatives.",
        "Substitueix l'observació de l'equip quan hi ha una sospita.",
        "Pren totes les decisions pedagogiques quotidianes."
      ],
      "correct": 1,
      "explanation": "L'EAP dona suport als centres i a les famílies, i no fa de substitut del treball educatiu ordinari.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 21",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/serveis/sez/eap/",
        "https://xtec.gencat.cat/ca/serveis/sobre-els-serveis-educatius/"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t21-02",
      "theme": "Annex II - Tema 21",
      "document": "La figura del psicòleg a l’escola bressol. Tasques de prevenció i acompanyament.",
      "prompt": "Davant possibles signes d'alerta en un infant, quin primer enfocament es mes coherent?",
      "options": [
        "Esperar sense registrar res per no alarmar ningú.",
        "Externalitzar-ho tot de seguida sense compartir observacions.",
        "Observar, contrastar amb l'equip, parlar amb la família i, si cal, demanar orientacio especialitzada.",
        "No fer res fins que hi hagi un diagnostici formal."
      ],
      "correct": 2,
      "explanation": "Les fonts oficials situen l'observació i la coordinacio amb la família i amb els serveis educatiús com a primers passos.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 21",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/serveis/sez/eap/",
        "https://educació.gencat.cat/ca/arees-actuacio/famílies/famílies-escola/acció-tutorial-compartida/0-3-anys/"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t21-03",
      "theme": "Annex II - Tema 21",
      "document": "La figura del psicòleg a l’escola bressol. Tasques de prevenció i acompanyament.",
      "prompt": "Quin tipús d'actuacio encaixa millor amb la funció d'orientacio psicopedagògica i no amb una intervencio clinica directa?",
      "options": [
        "Assumir la tutoria del grup per resoldre el dia a dia.",
        "Dictar criteris unidireccionals a l'equip sense contrast.",
        "Fer teràpia individual setmanal dins l'aula com a funció principal.",
        "Identificar necessitats, elaborar informes i treballar en xarxa amb serveis i centres."
      ],
      "correct": 3,
      "explanation": "L'EAP treballa en xarxa i en assessorament; no substitueix la tasca docent ni fa una funció clinica directa a l'aula.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 21",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/serveis/sez/eap/"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t21-04",
      "theme": "Annex II - Tema 21",
      "document": "La figura del psicòleg a l’escola bressol. Tasques de prevenció i acompanyament.",
      "prompt": "Quina és la millor manera d'entendre la prevenció en aquest tema?",
      "options": [
        "Com una tasca d'acompanyament i orientacio que ajuda el centre a ajustar la resposta educativa.",
        "Com una espera passiva fins que aparegui un diagnòstic.",
        "Com una decisio que correspon només a la família.",
        "Com una intervencio externa que elimina la necessitat d'observar."
      ],
      "correct": 0,
      "explanation": "La prevenció en el marc de l'EAP es un suport per ordenar la resposta educativa, no una substitucio ni una passivitat.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 21",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/serveis/sez/eap/",
        "https://xtec.gencat.cat/ca/serveis/sobre-els-serveis-educatius/"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t22-01",
      "theme": "Annex II - Tema 22",
      "document": "L’observació sistemàtica i la documentació pedagògica de la cultura de l’infant com a projecte d’escola. Criteris pel desenvolupament d’aquestes dues eines pedagògiques de forma quotidiana de forma individual, en parella educativa i en equip per a la comprensió i acompanyament dels reptes cognitiús i relacionals dels infants de zero a tres anys.",
      "prompt": "Quin enunciat descriu millor la diferencia entre observació i documentació pedagògica?",
      "options": [
        "L'observació dona informació i la documentació fa visible el treball pedagògic i els processos.",
        "La documentació només val si no es comparteix amb ningú.",
        "L'observació consisteix a fer fotos de tot i la documentació a arxivar-les.",
        "Les dues coses serveixen només per classificar infants."
      ],
      "correct": 0,
      "explanation": "El currículum 0-3 separa la funció de conèixer el que passa i la de fer-ne visible el sentit pedagògic.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 22",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf",
        "https://xtec.gencat.cat/ca/formacio/formaciogeneralprofessorat/curriculum/lavaluacio-i-la-documentació-pedagogica-a-leducacio-infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t22-02",
      "theme": "Annex II - Tema 22",
      "document": "L’observació sistemàtica i la documentació pedagògica de la cultura de l’infant com a projecte d’escola. Criteris pel desenvolupament d’aquestes dues eines pedagògiques de forma quotidiana de forma individual, en parella educativa i en equip per a la comprensió i acompanyament dels reptes cognitiús i relacionals dels infants de zero a tres anys.",
      "prompt": "Per que el currículum insisteix que l'observació no es un registre fidel i complet?",
      "options": [
        "Perque només s'ha de fer amb eines digitals.",
        "Perque sempre implica seleccio i interpretacio de qui observa.",
        "Perque tota observació es objectiva per definicio.",
        "Perque la subjectivitat només apareix a les fotografies."
      ],
      "correct": 1,
      "explanation": "El text explicita que l'observació es una interpretacio entre moltes possibles, no una copia fidel de la realitat.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 22",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t22-03",
      "theme": "Annex II - Tema 22",
      "document": "L’observació sistemàtica i la documentació pedagògica de la cultura de l’infant com a projecte d’escola. Criteris pel desenvolupament d’aquestes dues eines pedagògiques de forma quotidiana de forma individual, en parella educativa i en equip per a la comprensió i acompanyament dels reptes cognitiús i relacionals dels infants de zero a tres anys.",
      "prompt": "Quin matèrial pot formar part de la documentació pedagògica amb criteri?",
      "options": [
        "Mostres finals de l'activitat, especialment quan permeten comparar evolució.",
        "Un recull d'imatges i notes, encara que no s'analitzin en equip de manera sistemàtica.",
        "Notes, audios, videos, fotografies i produccions dels infants seleccionades amb sentit.",
        "Qualsevol producció o imatge de l'infant, sempre que s'arxivi cronològicament."
      ],
      "correct": 2,
      "explanation": "El matèrial ha de ser significatiu i servir per reflexiónar, no per acumular indiscriminadament.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 22",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf",
        "https://xtec.gencat.cat/ca/formacio/formaciogeneralprofessorat/curriculum/lavaluacio-i-la-documentació-pedagogica-a-leducacio-infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t22-04",
      "theme": "Annex II - Tema 22",
      "document": "L’observació sistemàtica i la documentació pedagògica de la cultura de l’infant com a projecte d’escola. Criteris pel desenvolupament d’aquestes dues eines pedagògiques de forma quotidiana de forma individual, en parella educativa i en equip per a la comprensió i acompanyament dels reptes cognitiús i relacionals dels infants de zero a tres anys.",
      "prompt": "Per a que serveix sobretot la documentació pedagògica en una llar d'infants?",
      "options": [
        "Per substituir les reunions d'equip per evidències visuals objectives.",
        "Per confirmar que la planificació prevista s'ha executat sense canvis.",
        "Per mostrar el nombre d'activitats realitzades durant el trimestre.",
        "Per compartir criteris amb l'equip i amb les famílies i projectar noves propostes."
      ],
      "correct": 3,
      "explanation": "La documentació ajuda a entendre l'infant, a visibilitzar el projecte i a obrir reflexió compartida.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 22",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf",
        "https://xtec.gencat.cat/ca/formacio/formaciogeneralprofessorat/curriculum/lavaluacio-i-la-documentació-pedagogica-a-leducacio-infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t23-01",
      "theme": "Annex II - Tema 23",
      "document": "La comunicació amb la família. Eines de comunicació vàlides en l’etapa de zero a tres anys.",
      "prompt": "Com ha de ser, en essencia, la relació entre la família i la llar d'infants?",
      "options": [
        "Basada en comunicar només incidencies negatives.",
        "Basada en supervisio familiar de totes les decisions.",
        "Basada en canals informals que poden perdre coherència.",
        "Basada en respecte mutu, confiança, col·laboracio i corresponsabilitat."
      ],
      "correct": 3,
      "explanation": "El currículum 0-3 remarca la confiança mútua, la professionalitat i la responsabilitat compartida.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 23",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf",
        "https://educació.gencat.cat/ca/arees-actuacio/famílies/famílies-escola/acció-tutorial-compartida/0-3-anys/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t23-02",
      "theme": "Annex II - Tema 23",
      "document": "La comunicació amb la família. Eines de comunicació vàlides en l’etapa de zero a tres anys.",
      "prompt": "Quin canal es mes propi de la comunicació quotidiana amb famílies a 0-3?",
      "options": [
        "Entrades i sortides, entrevistes, reunions i canals escrits o digitals del centre.",
        "Només els missatges informals en aplicacions personals.",
        "Només els missatges urgents.",
        "Només la cartellera."
      ],
      "correct": 0,
      "explanation": "Les orientacions curriculars enumeren diversos canals bidireccionals i contextuals, no un de sol.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 23",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://educació.gencat.cat/ca/arees-actuacio/famílies/famílies-escola/acció-tutorial-compartida/0-3-anys/",
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t23-03",
      "theme": "Annex II - Tema 23",
      "document": "La comunicació amb la família. Eines de comunicació vàlides en l’etapa de zero a tres anys.",
      "prompt": "Quan una família demana orientacio sobre hàbits o rebequeries, que es mes adequat?",
      "options": [
        "Diu-li que esperi a que l'infant ho resolgui sol.",
        "Proposar entrevista i pautes concretes per a casa i escola.",
        "Resoldre-ho amb un missatge curt i prou.",
        "Desviar la consulta a un grup informal de famílies."
      ],
      "correct": 1,
      "explanation": "Les fonts de 0-3 indiquen que la relació amb la família ha de permetre acordar pautes i donar continuïtat entre contextos.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 23",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://educació.gencat.cat/ca/arees-actuacio/famílies/famílies-escola/acció-tutorial-compartida/0-3-anys/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t23-04",
      "theme": "Annex II - Tema 23",
      "document": "La comunicació amb la família. Eines de comunicació vàlides en l’etapa de zero a tres anys.",
      "prompt": "Quin criteri fa mes coherent la comunicació centre-família?",
      "options": [
        "Que la família rebi informació breu i tancada per no interferir en el criteri del centre.",
        "Que es prioritzi el canal més ràpid, encara que no sigui el més adequat per al contingut.",
        "Que la informació serveixi per contrastar punts de vista i millorar el desenvolupament de l'infant.",
        "Que la comunicació sigui principalment informativa i unidireccional."
      ],
      "correct": 2,
      "explanation": "El currículum parla d'una relació de feedback permanent i de canals que permetin anar i tornar.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 23",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/web/.content/alfresco/d/d/workspace/SpacesStore/0080/bfd2cd16-10d5-4103-aba2-ee9744b2399d/Curriculum-Infantil-0-3.pdf"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t24-01",
      "theme": "Annex II - Tema 24",
      "document": "La protecció de dades i el dret d’imatge dels infants.",
      "prompt": "Abans de públicar una imatge identificable d'un infant en un web o xarxa del centre, que cal garantir?",
      "options": [
        "Una autoritzacio generica que val per a sempre.",
        "Que la difusió sigui interna encara que no s'hagi informat ningú.",
        "Consentiment informat o una altra base legitimadora adequada.",
        "Que la imatge sigui bonica o pedagògica."
      ],
      "correct": 2,
      "explanation": "APDCAT i Departament d'Educació indiquen que la públicacio d'imatges en obert requereix consentiment o base legitimadora, amb informació prèvia.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 24",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://apdcat.gencat.cat/ca/documentació/preguntes-frequents/preguntes-per-a-persones-afectades/ambit-educatiu/",
        "https://educació.gencat.cat/ca/departament/protecció-dades/centres-educatius/index.html"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t24-02",
      "theme": "Annex II - Tema 24",
      "document": "La protecció de dades i el dret d’imatge dels infants.",
      "prompt": "Quan pot difondre's una imatge sense consentiment segons les pautes de l'APDCAT?",
      "options": [
        "Sempre que es comparteixi en un grup privat de famílies.",
        "Sempre que l'activitat sigui educativa.",
        "Quan la direccio consideri que l'acte ha estat reeixit.",
        "Quan es capta en un acte o esdeveniment públic i la imatge es accessoria i no afecta la intimitat."
      ],
      "correct": 3,
      "explanation": "L'excepcio es molt limitada i exigeix finalitat informativa/divulgativa, accessorietat i respecte a la intimitat.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 24",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://apdcat.gencat.cat/ca/documentació/preguntes-frequents/preguntes-per-a-persones-afectades/ambit-educatiu/"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t24-03",
      "theme": "Annex II - Tema 24",
      "document": "La protecció de dades i el dret d’imatge dels infants.",
      "prompt": "Quan una fotografia deixa de ser dada personal a efectes de protecció de dades?",
      "options": [
        "Quan la persona no es identificable sense esforcos desproporcionats.",
        "Quan es fa servir dins l'aula i no a internet.",
        "Quan es comparteix només amb famílies conegudes.",
        "Quan s'ha fet amb un telefon del centre."
      ],
      "correct": 0,
      "explanation": "APDCAT defineix dada personal com informació sobre persona identificada o identificable; si no ho es sense esforços desproporcionats, no hi ha dada personal.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 24",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://apdcat.gencat.cat/ca/documentació/preguntes-frequents/dades_personals",
        "https://apdcat.gencat.cat/ca/documentació/preguntes-frequents/preguntes-per-a-persones-afectades/ambit-educatiu/"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t24-04",
      "theme": "Annex II - Tema 24",
      "document": "La protecció de dades i el dret d’imatge dels infants.",
      "prompt": "Quin criteri es mes prudent en relació amb una autoritzacio de difusió d'imatges?",
      "options": [
        "Entendre que una autorització signada permet reutilitzar imatges en activitats semblants.",
        "Tractar-la per finalitats concretes i recordar que es pot revocar",
        "Aplicar-la també a noves activitats del centre si mantenen una finalitat educativa.",
        "No revisar-la si la difusió es limita a un grup tancat de famílies."
      ],
      "correct": 1,
      "explanation": "APDCAT assenyala que el consentiment no te una vigencia fixa i que es bona pràctica informar del dret a revocar-lo.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 24",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://apdcat.gencat.cat/ca/documentació/preguntes-frequents/preguntes-per-a-persones-afectades/ambit-educatiu/"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t25-01",
      "theme": "Annex II - Tema 25",
      "document": "Nova guia d’alimentació de zero a tres anys. Canvis i novetats en l’alimentació de zero a tres anys.",
      "prompt": "Quin criteri recull millor una novetat rellevant de la guia actual per a les escoles bressol?",
      "options": [
        "Substituir la llet per aliments complementaris tan aviat com l'infant mengi triturats amb normalitat.",
        "Facilitar la continuïtat de la lactància materna, garantir llet com a aportació prioritària i oferir aliments noús de manera progressiva.",
        "Reservar la lactància per a l'àmbit familiar i evitar-la al centre per simplificar l'organització.",
        "Prioritzar la uniformitat de menús encara que no respectin el calendari d'incorporació d'aliments."
      ],
      "correct": 1,
      "explanation": "Canal Salut indica que les escoles bressol han de facilitar la lactància materna, garantir l'aportació prioritària de llet més enllà dels 6 mesos i oferir la resta d'aliments progressivament.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 25",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://canalsalut.gencat.cat/ca/vida-saludable/alimentació/saludable/primera-infancia/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t25-02",
      "theme": "Annex II - Tema 25",
      "document": "Nova guia d’alimentació de zero a tres anys. Canvis i novetats en l’alimentació de zero a tres anys.",
      "prompt": "Si l'escola bressol ofereix esmorzar, quina opció s'ajusta millor a la guia actual?",
      "options": [
        "Galetes o cereals ensucrats, perquè són fàcils d'acceptar i repartir.",
        "Productes dolços ocasionals com a part de la rutina d'esmorzar.",
        "Fruita fresca, perquè és saludable i afavoreix experimentació sensorial i manipulació.",
        "Làctics ensucrats o batuts com a opció principal d'esmorzar."
      ],
      "correct": 2,
      "explanation": "La guia indica explícitament que, si s'ofereix esmorzar, convé optar per la fruita fresca.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 25",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://canalsalut.gencat.cat/ca/vida-saludable/alimentació/saludable/primera-infancia/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t25-03",
      "theme": "Annex II - Tema 25",
      "document": "Nova guia d’alimentació de zero a tres anys. Canvis i novetats en l’alimentació de zero a tres anys.",
      "prompt": "Quin berenar s'ajusta millor a les recomanacions actuals per al 0-3?",
      "options": [
        "Postres làctiques ensucrades com a opció habitual.",
        "Brioixeria industrial, perquè és pràctica i molt acceptada.",
        "Galetes i crema de xocolata per assegurar aportació energètica.",
        "Pa integral amb tomàquet i oli o fruita fresca, sense sucres afegits."
      ],
      "correct": 3,
      "explanation": "La guia recomana berenars saludables sense sucres afegits ni sal i desaconsella brioixeria, galetes i postres làctiques ensucrades.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 25",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://canalsalut.gencat.cat/ca/vida-saludable/alimentació/saludable/primera-infancia/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t25-04",
      "theme": "Annex II - Tema 25",
      "document": "Nova guia d’alimentació de zero a tres anys. Canvis i novetats en l’alimentació de zero a tres anys.",
      "prompt": "Quin criteri de comunicació amb les famílies és més coherent amb la guia actual?",
      "options": [
        "Contextualitzar l'alimentació dins observacions globals sobre les experiències de l'infant a l'escola bressol.",
        "Limitar la informació a si l'infant ha menjat molt, poc o gens.",
        "Registrar quantitats per comparar evolució entre infants del mateix grup.",
        "Informar només de les incidències alimentàries més visibles."
      ],
      "correct": 0,
      "explanation": "Canal Salut adverteix que el registre diari d'ingestes pot generar preocupacions i comparacions inadequades i recomana oferir informació dins pautes globals d'observació.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 25",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://canalsalut.gencat.cat/ca/vida-saludable/alimentació/saludable/primera-infancia/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t26-01",
      "theme": "Annex II - Tema 26",
      "document": "Coeducació o educació en la igualtat de gènere al nou currículum d’educació infantil.",
      "prompt": "Quina formulació s'ajusta millor a la definició institucional de coeducació?",
      "options": [
        "Acció educadora que potencia la igualtat real d'oportunitats i rebutja estereotips i actituds discriminatòries.",
        "Proposta pensada sobretot per a etapes postobligatòries, no per al 0-3.",
        "Activitat puntual orientada a celebrar efemèrides relacionades amb la igualtat.",
        "Repartiment dels mateixos matèrials a tothom, encara que mantinguin rols sexistes."
      ],
      "correct": 0,
      "explanation": "XTEC defineix la coeducació com una acció educadora per a la igualtat real d'oportunitats, sense estereotips sexistes, homòfobs, bifòbics, transfòbics o androcèntrics.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 26",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/alumnat/benestar/coeducació-i-perspectiva-de-genere/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t26-02",
      "theme": "Annex II - Tema 26",
      "document": "Coeducació o educació en la igualtat de gènere al nou currículum d’educació infantil.",
      "prompt": "Com s'ha d'incorporar la coeducació segons l'enfocament actual del currículum?",
      "options": [
        "Reservant-la per a tallers externs, sense necessitat d'incorporar-la a la vida d'aula.",
        "Integrant-la en unitats didàctiques, projectes i activitats, i fent-la visible al projecte educatiu i a les programacions.",
        "Delegant-la només a les famílies perquè és un àmbit de socialització privat.",
        "Aplicant-la només quan aparegui un conflicte explícit de discriminació."
      ],
      "correct": 1,
      "explanation": "XTEC assenyala que la coeducació i la perspectiva de gènere s'han d'incorporar en projectes, activitats d'aula i documents del centre.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 26",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/alumnat/benestar/coeducació-i-perspectiva-de-genere/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t26-03",
      "theme": "Annex II - Tema 26",
      "document": "Coeducació o educació en la igualtat de gènere al nou currículum d’educació infantil.",
      "prompt": "Quin exemple descriu millor una pràctica coeducadora a l'escola bressol?",
      "options": [
        "Mantenir alguns matèrials estereotipats si conviuen amb altres propostes obertes.",
        "Observar els rols de joc sense revisar matèrials ni llenguatge, perquè són edats primerenques.",
        "Revisar contes, llenguatge, joguines i racons per ampliar referents i evitar rols de gènere rígids.",
        "Oferir propostes diferenciades si es detecten preferències habituals entre nens i nenes."
      ],
      "correct": 2,
      "explanation": "En el 0-3 la coeducació es concreta en decisions quotidianes sobre matèrials, llenguatge, rols i expectatives.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 26",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/alumnat/benestar/coeducació-i-perspectiva-de-genere/",
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t26-04",
      "theme": "Annex II - Tema 26",
      "document": "Coeducació o educació en la igualtat de gènere al nou currículum d’educació infantil.",
      "prompt": "Amb quin principi general del currículum connecta més clarament la coeducació a l'etapa infantil?",
      "options": [
        "Prioritzar el control disciplinari per sobre dels processos de convivència.",
        "Avançar continguts acadèmics abans d'assegurar experiències de relació i benestar.",
        "Uniformitzar les propostes per evitar diferències entre infants.",
        "Garantir la igualtat d'oportunitats de tots i cadascun dels infants en un ambient de benestar, relació i aprenentatge."
      ],
      "correct": 3,
      "explanation": "El currículum d'educació infantil situa la igualtat d'oportunitats dins la finalitat de l'etapa; la coeducació hi dona forma concreta.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 26",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://xtec.gencat.cat/ca/curriculum/infantil/"
      ],
      "reviewLabel": null,
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t27-01",
      "theme": "Annex II - Tema 27",
      "document": "Les escoles bressol municipals de Lliçà d’Amunt, característiques i projecte educatiu.",
      "prompt": "Quina descripció s'ajusta millor a les escoles bressol municipals de Lliçà d'Amunt segons les fitxes municipals actuals?",
      "options": [
        "Es tracta de serveis de custòdia sense projecte educatiu propi.",
        "Hi ha una única escola bressol municipal amb dues seccions administratives però un sol edifici.",
        "Són centres pensats principalment per al segon cicle d'infantil.",
        "Hi ha dues escoles bressol municipals: Palaudàries, al barri de Palaudàries, i Nova Espurna, al centre urbà, per a infants de 0 a 3 anys."
      ],
      "correct": 3,
      "explanation": "Les pàgines municipals indiquen explícitament que a Lliçà d'Amunt hi ha dues escoles bressol municipals, una a Palaudàries i una al centre urbà.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 27",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html",
        "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t27-02",
      "theme": "Annex II - Tema 27",
      "document": "Les escoles bressol municipals de Lliçà d’Amunt, característiques i projecte educatiu.",
      "prompt": "Quin enunciat és correcte sobre la capacitat organitzativa descrita a les fitxes municipals?",
      "options": [
        "Palaudàries disposa de 6 estances i Nova Espurna de 8, totes per a l'educació d'infants de 0 a 3 anys.",
        "El nombre d'estances no s'associa a cap oferta educativa concreta.",
        "Les dues escoles tenen exactament 8 estances i només una part es destina al 0-3.",
        "Nova Espurna té 6 estances i Palaudàries 8."
      ],
      "correct": 0,
      "explanation": "Les dues pàgines municipals coincideixen en la descripció de 6 estances per a Palaudàries i 8 per a Nova Espurna.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 27",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html",
        "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t27-03",
      "theme": "Annex II - Tema 27",
      "document": "Les escoles bressol municipals de Lliçà d’Amunt, característiques i projecte educatiu.",
      "prompt": "Quin enfocament pedagògic destaca l'Ajuntament en la presentació de les seves escoles bressol municipals?",
      "options": [
        "Prioritzar resultats acadèmics previs a l'etapa obligatòria.",
        "Afavorir el desenvolupament de l'infant respectant el seu ritme de creixement i adaptant-se a les seves necessitats.",
        "Uniformitzar propostes per assegurar que tots els infants avancin al mateix ritme.",
        "Reduir la funció del centre a la vigilància mentre les famílies treballen."
      ],
      "correct": 1,
      "explanation": "Les fitxes municipals remarquen explícitament el respecte al ritme de creixement i l'adaptació a les necessitats de cada infant.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 27",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html",
        "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-nova-espurna.html"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    },
    {
      "id": "md-a2-t27-04",
      "theme": "Annex II - Tema 27",
      "document": "Les escoles bressol municipals de Lliçà d’Amunt, característiques i projecte educatiu.",
      "prompt": "Com es presenten els moments de cura a la descripció pedagògica municipal?",
      "options": [
        "Com rutines necessàries però separades de les propostes d'aprenentatge.",
        "Com moments que cal organitzar ràpidament per mantenir el ritme del grup.",
        "Com estones educatives treballades per crear un moment acollidor, íntim i tranquil.",
        "Com moments de suport logístic que no formen part central del projecte pedagògic."
      ],
      "correct": 2,
      "explanation": "La fitxa de Palaudàries explicita que els moments de menjar, dormir i canvi de bolquer són estones educatives pensades i treballades.",
      "difficulty": "mitjana",
      "competence": "Aplicació del temari",
      "tags": [
        "annex ii - tema 27",
        "educació infantil 0-3"
      ],
      "sourceRefs": [
        "https://www.llicamunt.cat/el-municipi/equipaments/escola-bressol-municipal-palaudaries.html"
      ],
      "reviewLabel": "Revisió recomanada",
      "optionNotes": [
        "Distractors revisats perquè siguin plausibles, propers al temari i no caricaturescos."
      ]
    }
  ],
  "caseQuestions": [],
  "previousYearQuestions": [
    {
      "id": "past-2022-q-01",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 1,
      "isReserve": false,
      "prompt": "Què és el NOFC?",
      "options": [
        "Normes de funcionament del centre",
        "Normes d'organització i funcionament del centre",
        "Normes d'organització del centre"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-02",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 2,
      "isReserve": false,
      "prompt": "Quins són els òrgans col·legiats de participació de la comunitat escolar a les escoles bressol?",
      "options": [
        "El consell escolar i l'AMPA",
        "No n'hi ha",
        "El consell escolar i el claustre"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-03",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 3,
      "isReserve": false,
      "prompt": "Qui presideix el Consell Escolar de centre?",
      "options": [
        "El director o directora",
        "El cap o la cap d'estudis",
        "Un o una representant de l'ajuntament de la localitat on es troba situat el centre"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-04",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 4,
      "isReserve": false,
      "prompt": "Quin és el decret que defineix l'autonomia de centres?",
      "options": [
        "Decret 119/2015, de 23 de juny",
        "Decret 150/2017, de 17 d'octubre",
        "Decret 102/2010, de 3 d'agost"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-05",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 5,
      "isReserve": false,
      "prompt": "En el PEC, el projecte educatiu del centre recull:",
      "options": [
        "Les normes internes del centre",
        "La identitat del centre, els objectius, l'orientació de l'activitat i el sentit educatiu",
        "El conjunt d'acords d'organització i funcionament del dia a dia"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-06",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 6,
      "isReserve": false,
      "prompt": "És el mateix una llar d'infants que una escola bressol?",
      "options": [
        "Sí, són sinònims; és un centre educatiu d'educació infantil no obligatòria fins als 3 anys",
        "No, la llar d'infants imparteix fins als 4 anys",
        "No, l'escola bressol és un espai més petit en dimensions"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-07",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 7,
      "isReserve": false,
      "prompt": "Les famílies dels alumnes del primer cicle d'educació infantil formalitzen l'admissió al centre amb:",
      "options": [
        "La preinscripció",
        "La matrícula",
        "La carta de compromís"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-08",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 8,
      "isReserve": false,
      "prompt": "Les escoles bressol de Lliçà d'Amunt són:",
      "options": [
        "Públiques",
        "Privades",
        "Una pública i l'altra externalitzada"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-09",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 9,
      "isReserve": false,
      "prompt": "Les escoles bressol participen en els Consells Escolars Municipals?",
      "options": [
        "No",
        "Sí",
        "Quan elles vulguin"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-10",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 10,
      "isReserve": false,
      "prompt": "Per afavorir la confiança mútua, les persones educadores haurien de tenir cura de:",
      "options": [
        "No jutjar les famílies",
        "Fer-los sentir pares i mares competents",
        "Les dues respostes són correctes"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-11",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 11,
      "isReserve": false,
      "prompt": "Si a la teva estança tens un infant NESE, on el derivaràs?",
      "options": [
        "A l'EAP",
        "Al CDIAP",
        "A l'EAP i CDIAP"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-12",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 12,
      "isReserve": false,
      "prompt": "Les escoles bressol de Lliçà d'Amunt segueixen un mateix projecte pedagògic?",
      "options": [
        "Sí",
        "No",
        "A vegades"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-13",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 13,
      "isReserve": false,
      "prompt": "Davant l'organització dels espais a les estances oferim:",
      "options": [
        "Territori de manipulació i descans",
        "Territori de manipulació, descans i moviment",
        "Distribuïm l'espai en racons de joc"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-14",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 14,
      "isReserve": false,
      "prompt": "A l'escola bressol, el més adequat és:",
      "options": [
        "Fer una sessió a la setmana de psicomotricitat",
        "Dedicar una estona al dia a fer psicomotricitat",
        "Ni la a ni la b són correctes"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-15",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 15,
      "isReserve": false,
      "prompt": "Com presentaries el material a les estances de 2-3 anys?",
      "options": [
        "Distribuït en diferents paneres",
        "Exposat en diferents taules",
        "Les dues són correctes"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-16",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 16,
      "isReserve": false,
      "prompt": "Veus positiu que hi hagi motos al jardí de l'escola?",
      "options": [
        "Sí, perquè potencia la psicomotricitat",
        "No, perquè fan molt soroll i creen conflictes",
        "Sí, perquè als infants els agrada molt"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-17",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 17,
      "isReserve": false,
      "prompt": "Què recomanem als pares a l'adaptació?",
      "options": [
        "Que es faci al ritme dels pares",
        "Que es faci al ritme de cada infant perquè l'adaptació sigui un èxit",
        "Que l'infant segueixi sempre les mateixes rutines i horaris"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-18",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 18,
      "isReserve": false,
      "prompt": "Quan un nadó està en braços:",
      "options": [
        "Se sent tranquil, baixa el seu to muscular i el seu estrès",
        "Es fa dependent de l'adult",
        "Cal no allargar el temps de tenir-lo i deixar-lo a terra"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-19",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 19,
      "isReserve": false,
      "prompt": "Segons Pikler, quan un infant plora, què s'hauria de fer?",
      "options": [
        "Ha d'aprendre a esperar",
        "Ha de tolerar la seva frustració",
        "Agafar-lo en braços"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-20",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 20,
      "isReserve": false,
      "prompt": "En el cas que un infant es faci una ferida, què faries?",
      "options": [
        "Posar-li iode",
        "Posar aigua i sabó",
        "Posar-li aigua oxigenada"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-21",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 21,
      "isReserve": false,
      "prompt": "Com s'ha de considerar el joc a l'educació infantil?",
      "options": [
        "El recurs més adequat per a estones de transició",
        "Una necessitat que cal compaginar amb activitats dirigides",
        "Una necessitat de l'infant i font d'aprenentatge"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-22",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 22,
      "isReserve": false,
      "prompt": "Com ha de ser el clima a l'estança per afavorir un bon desenvolupament psicoemocional?",
      "options": [
        "Un context on els infants puguin manifestar els seus sentiments",
        "Cal evitar situacions on manifestin pors",
        "Ha de ser sempre un context de satisfacció i felicitat"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-23",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 23,
      "isReserve": false,
      "prompt": "Què descriu millor el concepte d'infant autònom?",
      "options": [
        "L'infant que s'ha desprès de l'adult",
        "L'infant que té hàbits consolidats i fa sol determinades accions",
        "L'infant capaç d'actuar a partir de la seva pròpia iniciativa"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-24",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 24,
      "isReserve": false,
      "prompt": "Per què és important el joc de falda?",
      "options": [
        "Perquè potencia la música i el ritme",
        "Perquè potencia la música, el vincle amb l'adult i la psicomotricitat",
        "Perquè potencia la música i la psicomotricitat"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-25",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 25,
      "isReserve": false,
      "prompt": "Quina és la ràtio de 0-3 anys que segueixen les escoles bressol de Lliçà d'Amunt?",
      "options": [
        "I-0 8 infants, I-1 13 infants, I-2 20 infants",
        "I-0 6 infants, I-1 11 infants, I-2 18 infants",
        "I-0 7 infants, I-1 13 infants, I-2 20 infants"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-26",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 26,
      "isReserve": false,
      "prompt": "L'edat mínima per a l'admissió d'un infant a l'escola bressol és:",
      "options": [
        "16 setmanes",
        "16 setmanes i excepcionalment inferior quan la situació familiar ho requereixi",
        "Quan comencin a caminar"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-27",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 27,
      "isReserve": false,
      "prompt": "Com donaries el menjar a un infant de 9 mesos?",
      "options": [
        "En una gandula perquè estigui còmode",
        "En una trona per enfortir l'esquena",
        "A la falda de la mestra"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-28",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 28,
      "isReserve": false,
      "prompt": "El canvi de bolquer ha de ser:",
      "options": [
        "Ràpid i pendent dels altres infants",
        "Amb dedicació exclusiva a l'infant per potenciar el vincle amb la mestra",
        "Prioritzant al màxim la higiene i la seguretat"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-29",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 29,
      "isReserve": false,
      "prompt": "Segons l'OMS, quanta estona s'aconsella l'ús de pantalles per a infants de 0-2 anys?",
      "options": [
        "15 minuts al dia",
        "Mai",
        "L'estona necessària per distreure l'infant"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-30",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 30,
      "isReserve": false,
      "prompt": "Quin material predomina en una estança de 1-2 anys?",
      "options": [
        "Material natural",
        "Material de plàstic",
        "Material de plàstic i natural"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-31",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 31,
      "isReserve": false,
      "prompt": "Si un infant té intolerància a la lactosa, on el faries menjar?",
      "options": [
        "En una taula separat de la resta del grup",
        "Li donaria el dinar abans que als altres",
        "L'asseuria amb els altres a prop de la mestra"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-32",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 32,
      "isReserve": false,
      "prompt": "Si un infant comença a tenir una reacció anafilàctica, com actuaries?",
      "options": [
        "Trucaria a les famílies",
        "Avisaria la directora o responsable",
        "Trucaria directament a l'ambulància"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-33",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 33,
      "isReserve": false,
      "prompt": "Si a l'estança hi ha un infant NESE...",
      "options": [
        "Ocupa una plaça ordinària",
        "Ocupa dues places, si té dictamen",
        "Ocupa tres places si té una paràlisi cerebral greu"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-34",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 34,
      "isReserve": false,
      "prompt": "Al jardí, la mestra:",
      "options": [
        "Ha de seure, preferentment al mateix lloc, i observar els infants",
        "Ha de jugar contínuament amb els infants",
        "Ha d'aprofitar per parlar amb les altres mestres"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-35",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 35,
      "isReserve": false,
      "prompt": "A les escoles municipals de Lliçà d'Amunt, les famílies poden entrar a l'escola:",
      "options": [
        "Sempre que vulguin",
        "Només dues famílies per estança",
        "A les entrades i sortides poden estar l'estona que necessitin"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-36",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 36,
      "isReserve": false,
      "prompt": "Al final de curs, els infants de 1-2...",
      "options": [
        "No han de portar bolquer",
        "Han de menjar sols",
        "Cap de les dues és correcta"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-37",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 37,
      "isReserve": false,
      "prompt": "Les escoles de Lliçà d'Amunt fan:",
      "options": [
        "Piscina, sortides al voltant de l'escola i colònies",
        "Piscina i sortides al voltant de l'escola",
        "Sortides al voltant de l'escola"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-38",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 38,
      "isReserve": false,
      "prompt": "El projecte de les escoles de Lliçà d'Amunt es basa en:",
      "options": [
        "Criança lliure i respectuosa amb l'infant",
        "Criança lliure amb activitats dirigides",
        "Potenciar els hàbits perquè siguin el màxim d'autònoms"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-39",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 39,
      "isReserve": false,
      "prompt": "L'equip directiu de les escoles bressol de Lliçà d'Amunt està format per:",
      "options": [
        "Les directores de les dues escoles",
        "Les directores de les dues escoles i el cap d'estudis",
        "La directora de les dues escoles i el regidor de l'Ajuntament"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-q-40",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 40,
      "isReserve": false,
      "prompt": "Les escoles bressol de Lliçà d'Amunt ofereixen servei de:",
      "options": [
        "Psicòleg municipal",
        "Psicòleg extern",
        "No en tenen"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-r-01",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 1,
      "isReserve": true,
      "prompt": "El menú de les escoles bressol de Lliçà d'Amunt:",
      "options": [
        "És un menú equilibrat i el mateix per a totes les edats",
        "És un menú equilibrat i diferent per a cada edat d'infants",
        "Es fa un menú per cada infant segons el que demanen les famílies"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-r-02",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 2,
      "isReserve": true,
      "prompt": "Si es pengen llistes a la vista de les famílies:",
      "options": [
        "Posarem nom i cognoms per facilitar la identificació",
        "No es poden penjar llistes a la vista de les famílies",
        "Posarem nom i inicials dels cognoms"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2022-r-03",
      "year": "2022",
      "sourceExam": "Prova test 2022 - Lliçà d'Amunt",
      "questionNumber": 3,
      "isReserve": true,
      "prompt": "Un infant pot repetir curs a l'escola bressol si:",
      "options": [
        "L'EAP, el CDIAP i les famílies es posen d'acord",
        "Si la família ho demana",
        "En cap cas"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-01",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 1,
      "isReserve": false,
      "prompt": "En cas d'evacuació d'una escola per incendi, què no pots deixar mai d'agafar?",
      "options": [
        "Unes mantes per abrigar els infants si és hivern",
        "El llistat d'assistència de l'estança",
        "Una mica de fruita per si s'allarga l'estona"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-02",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 2,
      "isReserve": false,
      "prompt": "Què recomanaries a les famílies quan un infant té conjuntivitis?",
      "options": [
        "Pot tornar a l'escola amb la medicació un cop diagnosticada",
        "Ha d'estar a casa fins que se li curi",
        "Pot tornar 24 hores després de l'inici de la medicació"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-03",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 3,
      "isReserve": false,
      "prompt": "Els accidents més freqüents en el primer cicle d'educació infantil són:",
      "options": [
        "Lesions oculars greus",
        "Asfíxia durant la ingesta alimentària",
        "Caigudes, cremades i asfíxia per cossos estranys"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-04",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 4,
      "isReserve": false,
      "prompt": "Les etapes del desenvolupament cerebral s'allarguen:",
      "options": [
        "Durant els primers mesos i fins als 6 anys",
        "No acabaran fins passada l'adolescència",
        "Durant els primers mesos"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-05",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 5,
      "isReserve": false,
      "prompt": "L'empatia, la presa de decisions i la gestió emocional es generen en l'escorça cerebral?",
      "options": [
        "Sí",
        "No",
        "Només la gestió emocional"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-06",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 6,
      "isReserve": false,
      "prompt": "És un principi del NOFC reforçar el sentiment de pertinença al municipi i potenciar la tradició, la llengua i la cultura?",
      "options": [
        "Fals, no està redactat com a principi",
        "Veritat",
        "Sí, però és un principi educatiu"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-07",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 7,
      "isReserve": false,
      "prompt": "En el NOFC dels centres es parla de l'atenció a la diversitat?",
      "options": [
        "Sí",
        "No",
        "No, surt al PEC"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-08",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 8,
      "isReserve": false,
      "prompt": "Quan es pot introduir la fruita seca als infants?",
      "options": [
        "A partir d'un any i sempre molta o en crema",
        "A partir dels 6 mesos i sempre molta o en crema",
        "A partir d'un any i mig sencera"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-09",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 9,
      "isReserve": false,
      "prompt": "Davant d'un grup d'infants de 0-1 anys, quin és un signe d'alerta?",
      "options": [
        "No camina sol",
        "No inicia el joc amb els altres infants",
        "No somriu a les persones conegudes"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-10",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 10,
      "isReserve": false,
      "prompt": "Quin decret parla de l'ordenació dels ensenyaments de l'educació infantil?",
      "options": [
        "Decret 21/2023, de 7 de febrer",
        "Decret 119/2015, de 23 de juny",
        "Decret 150/2017, de 17 d'octubre"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-11",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 11,
      "isReserve": false,
      "prompt": "Uns dels eixos de desenvolupament i aprenentatge a l'educació infantil són:",
      "options": [
        "Un infant que creix amb autonomia i confiança",
        "Un infant que es comunica amb diferents llenguatges",
        "Les dues són correctes"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-12",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 12,
      "isReserve": false,
      "prompt": "Si un familiar fa fotos d'infants fora del recinte escolar:",
      "options": [
        "Li prohibiràs perquè ets responsable del dret d'imatge",
        "L'advertiràs que només pot fer ús domèstic de les imatges, però no li pots prohibir",
        "Li demanaràs les fotos que ha fet"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-13",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 13,
      "isReserve": false,
      "prompt": "Quin saber és propi del primer cicle i no del segon en el nou currículum d'educació infantil?",
      "options": [
        "Participació en accions quotidianes d'alimentació, higiene personal i descans",
        "Identificació i regulació de necessitats fisiològiques",
        "Hàbits de superació, perseverança, atenció i iniciativa"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-14",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 14,
      "isReserve": false,
      "prompt": "Què NO tindries en una estança d'infants de 2-3 anys?",
      "options": [
        "Un espai tranquil amb contes",
        "Una construcció perquè s'enfilin",
        "El nom en lletra de pal sota la fotografia de cada infant per potenciar la lectoescriptura"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-15",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 15,
      "isReserve": false,
      "prompt": "En penjar llistes d'infants a l'escola, com protegiries el dret d'intimitat?",
      "options": [
        "Nom i cognoms, si no hi ha DNI no es vulnera el dret",
        "Nom i inicials dels cognoms",
        "No penjaria mai cap llista d'infants"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-16",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 16,
      "isReserve": false,
      "prompt": "Què és el RALC?",
      "options": [
        "Un registre de dades de tot el personal d'educació de Catalunya",
        "Un registre de dades dels alumnes de Catalunya",
        "Un registre de dades de les escoles de Catalunya"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-17",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 17,
      "isReserve": false,
      "prompt": "Es considera NESE A un alumne amb necessitats socioeconòmiques?",
      "options": [
        "Sí",
        "No",
        "Es considera NESE B"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-18",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 18,
      "isReserve": false,
      "prompt": "Si en Joan arriba a l'escola amb un vestit rosa, què li diries?",
      "options": [
        "Bon dia Joana, estàs guapíssim",
        "Bon dia Joan, estàs guapíssim amb aquest vestit rosa",
        "Bon dia Joan, estàs guapíssim amb aquest vestit de nena"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-19",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 19,
      "isReserve": false,
      "prompt": "Si a la teva estança hi ha un infant TEA, com actuaràs a l'hora del joc lliure?",
      "options": [
        "L'observació és la millor manera d'acompanyar-lo",
        "L'observació i la intervenció és la millor manera d'acompanyar-lo",
        "Les dues són correctes"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-20",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 20,
      "isReserve": false,
      "prompt": "Quina és la funció d'un psicòleg a l'escola bressol?",
      "options": [
        "Acompanyar les famílies i les mestres en la criança dels infants",
        "Acompanyar les mestres només quan hi ha conflictes",
        "Fer entrevistes amb famílies quan hi ha problemes a casa"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-21",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 21,
      "isReserve": false,
      "prompt": "Davant d'una parella separada, com donaries l'informe de final de curs?",
      "options": [
        "Una còpia per cadascú",
        "Només un i cal que ells s'entenguin",
        "Faria una reunió amb cadascú i evitaria informe"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-22",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 22,
      "isReserve": false,
      "prompt": "Segons les fases de desenvolupament motor postural autònom d'Emmi Pikler, quan comença a gatejar l'infant?",
      "options": [
        "Del 7è al 13è mes",
        "Del 12è al 21è mes",
        "Del 8è al 16è mes"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-23",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 23,
      "isReserve": false,
      "prompt": "Davant d'un canvi d'organització de personal a l'escola bressol, qui pren la decisió definitiva?",
      "options": [
        "El Departament d'Educació",
        "La direcció i l'equip docent del centre",
        "L'equip de govern de l'ajuntament"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-24",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 24,
      "isReserve": false,
      "prompt": "Les escoles bressol del municipi formen part del Consell Escolar Municipal?",
      "options": [
        "Sempre",
        "Mai, perquè no són estudis obligatoris",
        "Quan l'ajuntament ho decideix"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-25",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 25,
      "isReserve": false,
      "prompt": "La selecció de materials ha de tenir presents aquests criteris:",
      "options": [
        "Materials de la vida quotidiana",
        "Materials que afavoreixen el joc en llibertat",
        "Funcionalitat, polivalència, resistència, estètica, ergonomia i seguretat"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-26",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 26,
      "isReserve": false,
      "prompt": "Què s'entén per expedient administratiu?",
      "options": [
        "Conjunt ordenat de documents i actuacions que fonamenten la resolució i la seva execució",
        "Actuacions de l'administració que ordenen documentació en paper",
        "Cap de les anteriors"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-27",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 27,
      "isReserve": false,
      "prompt": "Quan el còmput de terminis s'assenyali per dies, s'entén que:",
      "options": [
        "Aquests dies són hàbils",
        "Són hàbils, excloent dissabtes, diumenges i festius, i es compten des de l'endemà de la notificació/publicació o del silenci",
        "Aquests dies són naturals"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-28",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 28,
      "isReserve": false,
      "prompt": "L'Ajuntament de Lliçà d'Amunt:",
      "options": [
        "Disposa de Reglament d'Organització Municipal",
        "No disposa de Reglament Orgànic Municipal",
        "Disposa de Reglament Orgànic Municipal, publicat a la web municipal"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-29",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 29,
      "isReserve": false,
      "prompt": "L'elecció d'un/a alcalde/alcaldessa s'efectua:",
      "options": [
        "De forma directa en les eleccions municipals",
        "En la sessió constitutiva de la corporació municipal",
        "Pels veïns"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-30",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 30,
      "isReserve": false,
      "prompt": "En una excedència voluntària per motius personals segons el conveni, tindrà aquesta consideració:",
      "options": [
        "Reserva del lloc amb antiguitat superior a un any",
        "Reserva amb antiguitat superior a cinc anys i durada mínima d'un any",
        "Reserva del lloc durant un any amb antiguitat superior a cinc anys"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-31",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 31,
      "isReserve": false,
      "prompt": "L'alcalde no pot delegar la següent competència:",
      "options": [
        "Dirigir el Govern i l'Administració municipal",
        "Dirigir el personal, separació de funcionaris i acomiadament laboral",
        "Totes les anteriors"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-32",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 32,
      "isReserve": false,
      "prompt": "La formació és un dret individual dels treballadors públics i també un deure?",
      "options": [
        "Sí, és dret d'accés a formació contínua i deure de mantenir la qualificació",
        "Només és un dret individual",
        "Només és un deure"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-33",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 33,
      "isReserve": false,
      "prompt": "Els empleats públics es classifiquen en:",
      "options": [
        "Només funcionaris de carrera",
        "Funcionaris de carrera, interins, personal laboral temporal, laboral indefinit i eventual",
        "Funcionaris de carrera, interins, personal laboral temporal i indefinit"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-34",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 34,
      "isReserve": false,
      "prompt": "Les retribucions bàsiques dels empleats públics segons grup o subgrup es fixen:",
      "options": [
        "Segons el salari mínim interprofessional",
        "Cada administració fixa les seves pròpies retribucions",
        "A través de les Lleis Generals de Pressupostos Generals de l'Estat"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-35",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 35,
      "isReserve": false,
      "prompt": "La forma política de l'Estat espanyol és:",
      "options": [
        "El parlamentarisme bicameral",
        "La monarquia parlamentària",
        "El parlamentarisme democràtic"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-36",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 36,
      "isReserve": false,
      "prompt": "La llengua oficial de l'Estat és:",
      "options": [
        "L'espanyol",
        "L'idioma autòcton en comunitats amb llengua pròpia",
        "El castellà"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-37",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 37,
      "isReserve": false,
      "prompt": "Quin tipus de personalitat jurídica s'atribueix als municipis?",
      "options": [
        "Organitzativa",
        "Orgànica",
        "Plena"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-38",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 38,
      "isReserve": false,
      "prompt": "Quin és l'òrgan que pot sotmetre a consulta popular un assumpte?",
      "options": [
        "Alcalde",
        "Consell Executiu",
        "Ple municipal"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-39",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 39,
      "isReserve": false,
      "prompt": "Segons l'article 48 de l'EBEP, quina és la durada del permís per matrimoni?",
      "options": [
        "20 dies",
        "15 dies",
        "10 dies"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-40",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 40,
      "isReserve": false,
      "prompt": "Quin organisme independent garanteix, en l'àmbit de la Generalitat, els drets de protecció de dades personals i accés a la informació vinculada?",
      "options": [
        "El delegat o delegada de protecció de dades",
        "L'Agència Espanyola de Protecció de Dades",
        "L'Autoritat Catalana de Protecció de Dades"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-41",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 41,
      "isReserve": false,
      "prompt": "Segons el Decret 150/2017, com s'ha d'assegurar la detecció precoç de necessitats educatives específiques durant infantil?",
      "options": [
        "Mitjançant l'observació de mestres, educadors i tècnics, amb EAP i equips d'atenció primerenca",
        "Mitjançant l'observació de les famílies dels infants amb NEE",
        "Actualment no es fa detecció precoç a menors de 6 anys"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": "Resposta marcada al document original; revisió normativa recomanada"
    },
    {
      "id": "past-2023-q-42",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 42,
      "isReserve": false,
      "prompt": "Quan deixem als infants gestionar el seu temps, per fer possible l'autoregulació cal que:",
      "options": [
        "L'infant trobi sentit a les propostes i les pugui fer seves",
        "S'anticipi l'activitat encara que no hi trobi sentit",
        "Se li imposi allò que volem que passi"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-43",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 43,
      "isReserve": false,
      "prompt": "Segons el Decret 150/2017, quins tipus de mesures poden requerir els alumnes?",
      "options": [
        "Generals, universals i particulars",
        "Universals, addicionals i intensives",
        "Generals i particulars"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-44",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 44,
      "isReserve": false,
      "prompt": "És funció del centre vetllar per coeducació, diversitat sexual i afectiva, identitat de gènere i models familiars?",
      "options": [
        "No, correspon a les famílies",
        "No, només aspectes acadèmics i models de família",
        "Sí, totes aquestes funcions corresponen al centre educatiu"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-45",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 45,
      "isReserve": false,
      "prompt": "Per acreditar que consta inscrit al padró municipal des d'una data i domicili, una persona necessita:",
      "options": [
        "Una carta",
        "Un ofici",
        "Un certificat"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-46",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 46,
      "isReserve": false,
      "prompt": "Quan es parla d'eficàcia dels actes administratius:",
      "options": [
        "Es presumeixen vàlids i produeixen efectes des de l'endemà de la data en què es dicten",
        "Produeixen efectes des de la data en què es dicten encara que la resolució disposi una altra cosa",
        "Es presumeixen vàlids i produeixen efectes des de la data en què es dicten, llevat que s'hi disposi una altra cosa"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-47",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 47,
      "isReserve": false,
      "prompt": "En quins supòsits els treballadors públics tenen el deure de guardar secret professional?",
      "options": [
        "Només en documents i matèries declarades segons llei",
        "En matèries classificades o de difusió prohibida segons llei",
        "En tots els assumptes als quals es tingui accés pel càrrec"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-48",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 48,
      "isReserve": false,
      "prompt": "Segons l'EBEP, els treballadors públics tenen dret a:",
      "options": [
        "La negociació col·lectiva i representació institucional",
        "La participació institucional",
        "Les dues anteriors són correctes"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-49",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 49,
      "isReserve": false,
      "prompt": "El Ple és un òrgan necessari a l'Ajuntament de Lliçà d'Amunt?",
      "options": [
        "Sí",
        "No",
        "Ho serà quan s'arribi a 20.000 habitants"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-q-50",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 50,
      "isReserve": false,
      "prompt": "Les sessions de la Junta de Govern Local de l'Ajuntament de Lliçà d'Amunt:",
      "options": [
        "Són públiques",
        "No són públiques",
        "Tindran caràcter públic o intern segons els temes"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-r-01",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 1,
      "isReserve": true,
      "prompt": "Un dels objectius de la coeducació és:",
      "options": [
        "Revalorar la cura, associada tradicionalment al model de feminitat",
        "Educar en la diversitat, reconèixer-la, fer-la visible i empoderar dissidències i nenes/dones",
        "Les dues són correctes"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-r-02",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 2,
      "isReserve": true,
      "prompt": "El PEC recull, en els seus continguts:",
      "options": [
        "El programa anual d'activitats",
        "La concreció dels mitjans de relació amb les famílies",
        "Els senyals d'alarma en el desenvolupament de l'infant"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-r-03",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 3,
      "isReserve": true,
      "prompt": "Com s'adquireix la condició de veí/veïna d'un municipi?",
      "options": [
        "Amb l'empadronament",
        "Residint habitualment al municipi",
        "Rebent assistència sanitària del CAP"
      ],
      "correct": 0,
      "answerLetter": "a",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-r-04",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 4,
      "isReserve": true,
      "prompt": "Els poders de l'Estat emanen:",
      "options": [
        "De les Corts Generals",
        "Del Rei",
        "Del poble"
      ],
      "correct": 2,
      "answerLetter": "c",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    },
    {
      "id": "past-2023-r-05",
      "year": "2023",
      "sourceExam": "Prova test 2023 - Lliçà d'Amunt",
      "questionNumber": 5,
      "isReserve": true,
      "prompt": "Com es denomina generalment l'òrgan legislatiu de la comunitat autònoma?",
      "options": [
        "Consell legislatiu",
        "Assemblea",
        "Corts autonòmiques"
      ],
      "correct": 1,
      "answerLetter": "b",
      "sourceType": "pregunta d'any anterior",
      "reviewLabel": null
    }
  ]
};
```
