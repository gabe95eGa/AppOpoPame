const QUESTION_BANK = [
  {
    id: "g1-01",
    theme: "Annex I - Tema 1",
    document: "Constitucio espanyola de 1978",
    prompt: "Quina afirmacio descriu millor la posicio de la Constitucio espanyola dins l'ordenament juridic?",
    options: [
      "Es la norma suprema a la qual resten subjectes els poders publics i la ciutadania.",
      "Es una norma administrativa aplicable nomes a l'Administracio general de l'Estat.",
      "Es un reglament que desplega l'Estatut d'autonomia de Catalunya.",
      "Es una guia politica sense eficacia juridica directa."
    ],
    correct: 0,
    explanation: "La Constitucio es la norma superior de l'ordenament i vincula els poders publics. Font: Annex I, tema 1."
  },
  {
    id: "g1-02",
    theme: "Annex I - Tema 1",
    document: "Constitucio espanyola de 1978",
    prompt: "Quins valors superiors proclama l'article 1.1 de la Constitucio espanyola?",
    options: [
      "Llibertat, justicia, igualtat i pluralisme politic.",
      "Eficiencia, jerarquia, descentralitzacio i coordinacio.",
      "Unitat, autonomia, solidaritat i subsidiarietat.",
      "Legalitat, publicitat, responsabilitat i proporcionalitat."
    ],
    correct: 0,
    explanation: "L'article 1.1 situa aquests quatre valors com a valors superiors de l'ordenament. Font: Constitucio, Annex I, tema 1."
  },
  {
    id: "g2-01",
    theme: "Annex I - Tema 2",
    document: "Constitucio espanyola de 1978",
    prompt: "Quin mecanisme protegeix especialment els drets fonamentals davant vulneracions per part dels poders publics?",
    options: [
      "El recurs d'empara davant el Tribunal Constitucional, quan escau.",
      "La mocio de censura municipal.",
      "L'aprovacio d'una ordenanca fiscal.",
      "La consulta previa al registre civil."
    ],
    correct: 0,
    explanation: "Les garanties constitucionals inclouen la tutela judicial i, per determinats drets, el recurs d'empara. Font: Annex I, tema 2."
  },
  {
    id: "g2-02",
    theme: "Annex I - Tema 2",
    document: "Constitucio espanyola de 1978",
    prompt: "En materia de drets fonamentals, que implica el principi d'igualtat de l'article 14?",
    options: [
      "Que no pot prevaler discriminacio per raons com naixement, sexe, religio, opinio o qualsevol altra condicio personal o social.",
      "Que totes les administracions han de tenir identica estructura organitzativa.",
      "Que tots els procediments administratius duren el mateix termini.",
      "Que les comunitats autonomes no poden tenir institucions propies."
    ],
    correct: 0,
    explanation: "L'article 14 formula la igualtat davant la llei i la prohibicio de discriminacio. Font: Annex I, tema 2."
  },
  {
    id: "g3-01",
    theme: "Annex I - Tema 3",
    document: "Estatut d'autonomia de Catalunya",
    prompt: "Com defineix l'Estatut d'autonomia la seva funcio principal?",
    options: [
      "Com la norma institucional basica de Catalunya.",
      "Com un reglament intern dels ajuntaments.",
      "Com una instruccio de servei per a escoles bressol.",
      "Com una ordenanca fiscal de caracter local."
    ],
    correct: 0,
    explanation: "L'Estatut es la norma institucional basica que defineix institucions, drets, deures i competencies. Font: Annex I, tema 3."
  },
  {
    id: "g3-02",
    theme: "Annex I - Tema 3",
    document: "Estatut d'autonomia de Catalunya",
    prompt: "Quin contingut forma part del nucli de l'Estatut d'autonomia de Catalunya segons el temari?",
    options: [
      "Estructura, contingut essencial i principis fonamentals.",
      "Exclusivament calendaris escolars anuals.",
      "Nomes sancions de transit municipal.",
      "Unicament el regim de contractes privats."
    ],
    correct: 0,
    explanation: "El tema 3 de l'Annex I identifica aquests tres blocs com a contingut d'estudi de l'Estatut."
  },
  {
    id: "g4-01",
    theme: "Annex I - Tema 4",
    document: "Administracio local",
    prompt: "Quines entitats integren de manera basica l'Administracio local?",
    options: [
      "Municipis, provincies i altres entitats locals reconegudes per l'ordenament.",
      "Ministeris, secretaries d'Estat i subdelegacions del Govern.",
      "Parlament, Govern i Sindic de Greuges.",
      "Exclusivament els organismes autonoms estatals."
    ],
    correct: 0,
    explanation: "El temari situa l'Administracio local com el conjunt d'ens locals, amb el municipi com a peca essencial. Font: Annex I, tema 4."
  },
  {
    id: "g5-01",
    theme: "Annex I - Tema 5",
    document: "Llei reguladora de les bases del regim local",
    prompt: "Quins organs municipals formen part de l'estructura basica de govern d'un ajuntament?",
    options: [
      "Alcaldia, ple i, quan correspon, junta de govern local.",
      "Congres, Senat i Tribunal Constitucional.",
      "Consell Escolar, claustre i equip directiu.",
      "Comite d'empresa, mesa electoral i registre civil."
    ],
    correct: 0,
    explanation: "La regulacio local preveu organs representatius i executius municipals com l'alcaldia, el ple i la junta de govern local. Font: Annex I, tema 5."
  },
  {
    id: "g5-02",
    theme: "Annex I - Tema 5",
    document: "El municipi",
    prompt: "Que expressa millor la designacio politica dels organs municipals?",
    options: [
      "El ple deriva de l'eleccio dels regidors i l'alcaldia es designa segons les regles electorals municipals.",
      "L'alcaldia es nomenada directament per cada escola bressol.",
      "El ple es triat per sorteig entre el personal laboral.",
      "La junta de govern local substitueix sempre el ple."
    ],
    correct: 0,
    explanation: "El tema 5 tracta els organs de representacio politica municipal i la seva designacio. Font: Annex I, tema 5."
  },
  {
    id: "g6-01",
    theme: "Annex I - Tema 6",
    document: "Llei de bases de regim local",
    prompt: "En relacio amb les competencies municipals, quina idea es correcta?",
    options: [
      "La llei atribueix competencies als municipis per gestionar interessos propis de la comunitat veinal.",
      "Els municipis no poden prestar cap servei public.",
      "Les competencies municipals nomes existeixen en materia militar.",
      "Totes les competencies municipals depenen d'una decisio privada."
    ],
    correct: 0,
    explanation: "La normativa local reconeix el municipi com a entitat de gestio dels interessos locals. Font: Annex I, tema 6."
  },
  {
    id: "g7-01",
    theme: "Annex I - Tema 7",
    document: "Acte administratiu",
    prompt: "Quina definicio s'ajusta millor al concepte d'acte administratiu?",
    options: [
      "Declaracio de voluntat, judici, coneixement o desig feta per una Administracio en exercici de potestats administratives.",
      "Acord privat entre dues families sense intervencio publica.",
      "Qualsevol conversa informal entre treballadors.",
      "Una recomanacio pedagogica sense efectes administratius."
    ],
    correct: 0,
    explanation: "El tema 7 demana concepte, classes i elements de l'acte administratiu; la definicio s'ajusta a la doctrina administrativa habitual."
  },
  {
    id: "g7-02",
    theme: "Annex I - Tema 7",
    document: "Acte administratiu",
    prompt: "Quin element es necessari per a la validesa d'un acte administratiu?",
    options: [
      "Que l'orgue que el dicta sigui competent i segueixi el procediment establert.",
      "Que sempre sigui verbal i sense constancia documental.",
      "Que no tingui motivacio en cap cas.",
      "Que l'emeti una persona sense relacio amb l'Administracio."
    ],
    correct: 0,
    explanation: "Els requisits dels actes administratius inclouen competencia, contingut possible, finalitat i procediment. Font: Annex I, tema 7."
  },
  {
    id: "g8-01",
    theme: "Annex I - Tema 8",
    document: "Procediment administratiu",
    prompt: "Quina sequencia resumeix millor les fases ordinàries del procediment administratiu?",
    options: [
      "Iniciacio, ordenacio/instruccio, finalitzacio i execucio quan correspongui.",
      "Diagnosi medica, prescripcio, cirurgia i alta.",
      "Eleccio municipal, presa de possessio i dissolucio del ple.",
      "Entrevista familiar, migdiada, berenar i sortida."
    ],
    correct: 0,
    explanation: "El procediment administratiu es treballa per fases generals: iniciacio, instruccio, finalitzacio i execucio. Font: Annex I, tema 8."
  },
  {
    id: "g8-02",
    theme: "Annex I - Tema 8",
    document: "Llei 39/2015",
    prompt: "Quin principi es propi del procediment administratiu comu?",
    options: [
      "La garantia dels drets de les persones interessades durant la tramitacio.",
      "La impossibilitat de presentar al-legacions.",
      "La inexistencia de terminis.",
      "La prohibicio de deixar constancia dels actes."
    ],
    correct: 0,
    explanation: "La Llei 39/2015 estructura el procediment comu amb drets de les persones interessades, terminis, al-legacions i resolucio. Font: Annex I, tema 8."
  },
  {
    id: "g9-01",
    theme: "Annex I - Tema 9",
    document: "Ajuntament de Llica d'Amunt",
    prompt: "Si una pregunta demana l'organitzacio de l'Ajuntament de Llica d'Amunt, quin enfocament d'estudi es mes adequat?",
    options: [
      "Relacionar l'organigrama i el funcionament municipal amb els organs locals previstos a la normativa.",
      "Estudiar nomes el currículum d'educacio infantil.",
      "Ignorar l'organitzacio municipal perque no forma part del temari.",
      "Substituir l'ajuntament per una empresa privada."
    ],
    correct: 0,
    explanation: "El tema 9 demana organitzacio i funcionament de l'Ajuntament de Llica d'Amunt, dins el marc local. Font: Annex I, tema 9."
  },
  {
    id: "g10-01",
    theme: "Annex I - Tema 10",
    document: "Personal al servei de les entitats locals",
    prompt: "Quina classificacio general del personal al servei de les entitats locals es coherent amb el temari?",
    options: [
      "Personal funcionari, personal laboral i personal eventual, entre altres categories previstes.",
      "Nomes voluntariat sense relacio juridica.",
      "Exclusivament empreses subcontractades sense personal municipal.",
      "Nomes carrecs electes, sense empleats publics."
    ],
    correct: 0,
    explanation: "El tema 10 inclou concepte i classes de personal, drets, deures i incompatibilitats. Font: Annex I, tema 10."
  },
  {
    id: "g10-02",
    theme: "Annex I - Tema 10",
    document: "Personal local",
    prompt: "Quina conducta s'alinea amb els deures del personal public local?",
    options: [
      "Actuar amb objectivitat, integritat, confidencialitat i servei a l'interes general.",
      "Fer prevaler interessos particulars en la tramitacio d'expedients.",
      "Divulgar dades personals d'infants sense base juridica.",
      "Desobeir sistematicament protocols de seguretat i salut."
    ],
    correct: 0,
    explanation: "Els deures del personal public inclouen integritat, confidencialitat i servei objectiu a l'interes general. Font: Annex I, tema 10."
  },
  {
    id: "g11-01",
    theme: "Annex I - Tema 11",
    document: "Llei organica 3/2018",
    prompt: "Quina es una finalitat essencial de la Llei organica 3/2018?",
    options: [
      "Adaptar l'ordenament espanyol al Reglament general de proteccio de dades i garantir drets digitals.",
      "Regular exclusivament les ràtios d'infants per aula.",
      "Establir el calendari laboral municipal.",
      "Crear els organs de govern de les diputacions."
    ],
    correct: 0,
    explanation: "La LOPDGDD adapta el dret intern al RGPD i garanteix drets digitals. Font: Annex I, tema 11."
  },
  {
    id: "g11-02",
    theme: "Annex I - Tema 11",
    document: "Proteccio de dades",
    prompt: "En una escola bressol, quina actuacio respecta millor la proteccio de dades?",
    options: [
      "Compartir dades de salut o imatge nomes amb base legitima, finalitat clara i mesures de confidencialitat.",
      "Publicar fotografies de tots els infants sense autoritzacio ni informacio previa.",
      "Enviar llistats medics per canals oberts a qualsevol familia.",
      "Guardar dades indefinidament sense necessitat educativa ni administrativa."
    ],
    correct: 0,
    explanation: "La proteccio de dades exigeix licitud, finalitat, minimitzacio, seguretat i confidencialitat. Font: Annex I, tema 11 i Annex II, tema 24."
  },
  {
    id: "g12-01",
    theme: "Annex I - Tema 12",
    document: "Prevencio de riscos laborals",
    prompt: "Quina accio es preventiva en l'exercici professional d'una tecnica d'educacio infantil?",
    options: [
      "Aplicar protocols d'higiene, ergonomia, ordre dels espais i actuacio davant emergències.",
      "Improvisar sempre sense valorar riscos.",
      "Bloquejar sortides d'emergencia amb material de joc.",
      "Ignorar qualsevol incident menor."
    ],
    correct: 0,
    explanation: "La prevencio de riscos laborals demana anticipar riscos, aplicar mesures preventives i seguir protocols. Font: Annex I, tema 12."
  },
  {
    id: "g13-01",
    theme: "Annex I - Tema 13",
    document: "Igualtat i no-discriminacio",
    prompt: "Quina practica respon als principis d'igualtat, inclusio i no-discriminacio a la primera infancia?",
    options: [
      "Oferir materials, llenguatges i expectatives lliures d'estereotips i accessibles per a tots els infants.",
      "Assignar jocs diferents segons estereotips de genere.",
      "Excloure un infant d'una proposta per la seva necessitat de suport.",
      "Evitar qualsevol relacio amb les families."
    ],
    correct: 0,
    explanation: "El tema 13 vincula l'atencio educativa a igualtat, inclusio i no-discriminacio. Font: Annex I, tema 13."
  },
  {
    id: "e1-01",
    theme: "Annex II - Tema 1",
    document: "Decret 102/2010",
    prompt: "Segons el Decret 102/2010, quins ambits abasta l'autonomia dels centres educatius?",
    options: [
      "Pedagogic, organitzatiu i de gestio de recursos humans i materials.",
      "Nomes economic i fiscal.",
      "Exclusivament esportiu i sanitari.",
      "Nomes protocol-lari i ceremonial."
    ],
    correct: 0,
    explanation: "El Decret 102/2010 situa l'autonomia en els ambits pedagogic, organitzatiu i de gestio. Font: Annex II, tema 1."
  },
  {
    id: "e1-02",
    theme: "Annex II - Tema 1",
    document: "Decret 102/2010",
    prompt: "Quin document expressa de manera central l'autonomia d'un centre educatiu?",
    options: [
      "El projecte educatiu de centre.",
      "El rebut individual del menjador.",
      "El calendari de festes particulars d'una familia.",
      "El contracte privat d'una empresa aliena."
    ],
    correct: 0,
    explanation: "El projecte educatiu es la maxima expressio de l'autonomia del centre. Font: Decret 102/2010, Annex II, tema 1."
  },
  {
    id: "e2-01",
    theme: "Annex II - Tema 2",
    document: "Decret 282/2006",
    prompt: "Quin ambit regula el Decret 282/2006 esmentat al temari?",
    options: [
      "El primer cicle de l'educacio infantil i els requisits dels centres.",
      "La selectivitat universitaria.",
      "La contractacio d'obres publiques estatals.",
      "El regim electoral general."
    ],
    correct: 0,
    explanation: "El títol del Decret 282/2006 regula el primer cicle d'educacio infantil i els requisits dels centres. Font: Annex II, tema 2."
  },
  {
    id: "e2-02",
    theme: "Annex II - Tema 2",
    document: "Decret 282/2006",
    prompt: "Quin perfil professional pot impartir atencio educativa al primer cicle segons el marc del Decret 282/2006?",
    options: [
      "Mestre/a especialista en educacio infantil o tecnic/a superior en educacio infantil, o titulacio equivalent.",
      "Qualsevol persona adulta sense qualificacio.",
      "Nomes personal administratiu municipal.",
      "Exclusivament monitors esportius."
    ],
    correct: 0,
    explanation: "El Decret 282/2006 estableix titulacions professionals per a l'atencio educativa del primer cicle. Font: Annex II, tema 2."
  },
  {
    id: "e3-01",
    theme: "Annex II - Tema 3",
    document: "Decret 150/2017",
    prompt: "Quina finalitat general te el Decret 150/2017 sobre sistema educatiu inclusiu?",
    options: [
      "Garantir que els centres siguin inclusius i ordenin mesures i suports per a tot l'alumnat.",
      "Separar sempre l'alumnat amb necessitats educatives en centres diferents.",
      "Eliminar la coordinacio entre serveis educatius.",
      "Regular nomes les vacances escolars."
    ],
    correct: 0,
    explanation: "El Decret 150/2017 orienta l'atencio educativa en un sistema inclusiu i ordena mesures i suports. Font: Annex II, tema 3."
  },
  {
    id: "e3-02",
    theme: "Annex II - Tema 3",
    document: "Decret 150/2017",
    prompt: "Quins tipus de mesures i suports son propis del marc inclusiu?",
    options: [
      "Universals, addicionals i intensius.",
      "Premis, sancions i expulsions.",
      "Ordinaris, secrets i privats.",
      "Nominals, fiscals i electorals."
    ],
    correct: 0,
    explanation: "El marc inclusiu estructura els suports en universals, addicionals i intensius. Font: Decret 150/2017, Annex II, tema 3."
  },
  {
    id: "e4-01",
    theme: "Annex II - Tema 4",
    document: "Documentacio obligatoria",
    prompt: "Quina opcio correspon millor a documentacio pedagogica habitual d'una escola bressol?",
    options: [
      "Projecte educatiu, normes d'organitzacio, programacions i registres d'observacio.",
      "Nomes factures domestiques de les families.",
      "Un contracte de telefonia sense relacio amb el servei.",
      "Llicencies de conduccio del personal."
    ],
    correct: 0,
    explanation: "El tema 4 tracta la documentacio obligatoria a les escoles bressol; inclou documents de centre i seguiment educatiu."
  },
  {
    id: "e5-01",
    theme: "Annex II - Tema 5",
    document: "Desenvolupament psicomotor",
    prompt: "Per que l'activitat lliure i autonoma es rellevant de zero a tres anys segons el temari?",
    options: [
      "Perque permet que l'infant explori, s'autoreguli i construeixi progressivament competències motrius i personals.",
      "Perque elimina la necessitat d'observacio adulta.",
      "Perque substitueix sempre l'acompanyament afectiu.",
      "Perque impedeix el moviment espontani."
    ],
    correct: 0,
    explanation: "El tema 5 associa desenvolupament psicomotor, activitat lliure i autonomia amb el rol d'acompanyament de la persona educadora."
  },
  {
    id: "e5-02",
    theme: "Annex II - Tema 5",
    document: "Emmi Pikler",
    prompt: "Quina intervencio s'ajusta millor a un enfocament respectuos amb la maduracio psicomotriu?",
    options: [
      "Preparar un entorn segur i observar, evitant forçar postures o moviments que l'infant encara no ha assolit.",
      "Asseure tots els nadons abans que puguin fer-ho autonomament.",
      "Interrompre qualsevol intent d'exploracio motriu.",
      "Fer la mateixa activitat dirigida a tots els infants sense observar ritmes."
    ],
    correct: 0,
    explanation: "El tema 5 cita Emmi Pikler i el respecte al ritme maduratiu, l'activitat lliure i el paper no invasiu de l'educadora."
  },
  {
    id: "e6-01",
    theme: "Annex II - Tema 6",
    document: "Neurociencia",
    prompt: "Segons el tema de neurociencia, quina idea es clau per entendre els nous aprenentatges?",
    options: [
      "Els aprenentatges es construeixen connectant experiencies noves amb coneixements i vivencies previs.",
      "L'infant apren sense cap relacio amb l'entorn.",
      "La repetició mecanica es l'unic factor d'aprenentatge.",
      "El joc no te cap relacio amb el desenvolupament cerebral."
    ],
    correct: 0,
    explanation: "El tema 6 parla de principis fisiologics i de com l'infant crea nous aprenentatges; la connexio amb experiencies previes es coherent amb el tema."
  },
  {
    id: "e7-01",
    theme: "Annex II - Tema 7",
    document: "Aprenentatge significatiu",
    prompt: "Quan podem parlar d'aprenentatge significatiu en un infant?",
    options: [
      "Quan el nou coneixement connecta amb allo que l'infant ja sap, viu o pot comprendre.",
      "Quan memoritza paraules sense cap context.",
      "Quan nomes rep instruccions sense experimentar.",
      "Quan s'evita qualsevol relacio amb el joc."
    ],
    correct: 0,
    explanation: "El tema 7 destaca la connexio entre processos nous i coneixements que l'infant ja disposa."
  },
  {
    id: "e8-01",
    theme: "Annex II - Tema 8",
    document: "Infant NESE i educacio inclusiva",
    prompt: "Quina resposta educativa es mes adequada davant un infant amb necessitats especifiques de suport educatiu?",
    options: [
      "Observar necessitats, coordinar-se amb familia i serveis, i ajustar mesures de suport dins un marc inclusiu.",
      "Apartar-lo de totes les activitats del grup.",
      "Esperar sense fer cap actuacio fins al final de curs.",
      "Comunicar dades sensibles a totes les families."
    ],
    correct: 0,
    explanation: "El tema 8 integra educacio inclusiva, acompanyament de l'infant i la familia, signes d'alerta i serveis educatius."
  },
  {
    id: "e8-02",
    theme: "Annex II - Tema 8",
    document: "Signes d'alerta",
    prompt: "Que ha de fer l'equip quan observa signes d'alerta en el desenvolupament d'un infant?",
    options: [
      "Registrar observacions, compartir-les amb l'equip i orientar la comunicacio amb la familia i serveis pertinents.",
      "Fer un diagnostic medic definitiu des de l'aula.",
      "Ignorar-los per evitar preocupacions.",
      "Publicar la informacio al taulell del centre."
    ],
    correct: 0,
    explanation: "El temari parla de signes d'alerta, acompanyament familiar i serveis educatius; l'escola observa, documenta i deriva o coordina quan cal."
  },
  {
    id: "e9-01",
    theme: "Annex II - Tema 9",
    document: "Alimentacio, descans i higiene",
    prompt: "Per que alimentacio, descans i higiene es consideren experiencies educatives fonamentals?",
    options: [
      "Perque son moments de cura, benestar, autonomia, vincle i aprenentatge quotidia.",
      "Perque son rutines sense valor educatiu.",
      "Perque han de fer-se sempre amb pressa.",
      "Perque nomes corresponen a les families i mai al centre."
    ],
    correct: 0,
    explanation: "El tema 9 presenta alimentacio, descans i higiene com a experiencies fonamentals de cura i benestar de zero a tres anys."
  },
  {
    id: "e9-02",
    theme: "Annex II - Tema 9",
    document: "Cura i benestar",
    prompt: "Quin criteri d'intervencio educativa es mes adequat durant el canvi de bolquer?",
    options: [
      "Respectar el ritme de l'infant, anticipar verbalment les accions i preservar intimitat i higiene.",
      "Fer-ho sense comunicacio i davant de qualsevol persona.",
      "Utilitzar el moment nomes com una tasca mecanica sense relacio afectiva.",
      "Evitar el rentat de mans si hi ha pressa."
    ],
    correct: 0,
    explanation: "El tema 10 tracta el control d'esfinters i el bloqueig al lavabo des d'una intervencio respectuosa; higiene i cura tambe apareixen al tema 9."
  },
  {
    id: "e10-01",
    theme: "Annex II - Tema 10",
    document: "Control d'esfinters",
    prompt: "Quin criteri metodologic es respectuos en el proces de control d'esfinters?",
    options: [
      "Acompanyar sense pressio, observant signes de maduracio i coordinant-se amb la familia.",
      "Forçar l'infant a seure al lavabo fins que ho aconsegueixi.",
      "Comparar-lo publicament amb altres infants.",
      "Castigar els accidents."
    ],
    correct: 0,
    explanation: "El tema 10 demana una perspectiva respectuosa envers la maduracio de l'infant en el control d'esfinters."
  },
  {
    id: "e11-01",
    theme: "Annex II - Tema 11",
    document: "Joc lliure",
    prompt: "Quin valor te el joc lliure a la primera infancia?",
    options: [
      "Afavoreix exploracio, autonomia, relacions, simbolitzacio i construccio d'aprenentatges.",
      "Es una activitat sense valor educatiu.",
      "Serveix nomes per omplir temps entre activitats reals.",
      "Ha de ser substituit sempre per fitxes dirigides."
    ],
    correct: 0,
    explanation: "El tema 11 situa el joc lliure, la manipulacio i l'experimentacio com a eixos educatius de la primera infancia."
  },
  {
    id: "e11-02",
    theme: "Annex II - Tema 11",
    document: "Rol de la persona educadora",
    prompt: "Durant el joc espontani, quin rol hauria d'assumir preferentment la persona educadora?",
    options: [
      "Preparar materials, observar, garantir seguretat i intervenir amb mesura quan cal.",
      "Dirigir cada moviment de tots els infants.",
      "Retirar tots els materials manipulatius.",
      "No observar ni documentar cap conducta."
    ],
    correct: 0,
    explanation: "El tema 11 demana criteris sobre el rol de la persona educadora durant el joc espontani."
  },
  {
    id: "e12-01",
    theme: "Annex II - Tema 12",
    document: "Joc simbolic",
    prompt: "Per que el joc simbolic ajuda a entendre el mon que envolta l'infant?",
    options: [
      "Perque permet representar situacions, rols i accions quotidianes amb significat propi.",
      "Perque impedeix el llenguatge.",
      "Perque elimina la imaginacio.",
      "Perque nomes serveix per aprendre normes administratives."
    ],
    correct: 0,
    explanation: "El tema 12 tracta el joc simbolic com a eina per comprendre el mon i elaborar experiencies."
  },
  {
    id: "e13-01",
    theme: "Annex II - Tema 13",
    document: "Espais i materials",
    prompt: "Quin criteri afavoreix el joc espontani i lliure dels infants de zero a tres anys?",
    options: [
      "Espais segurs, accessibles, rics en materials oberts i amb temps suficient d'exploracio.",
      "Espais saturats, sense ordre ni possibilitat de tria.",
      "Materials unics que nomes tenen una forma correcta d'us.",
      "Canvis constants que impedeixen anticipacio i seguretat."
    ],
    correct: 0,
    explanation: "El tema 13 relaciona organitzacio d'espais, temps, propostes i materials amb el joc espontani i lliure."
  },
  {
    id: "e14-01",
    theme: "Annex II - Tema 14",
    document: "Espais interiors i exteriors",
    prompt: "Quina relacio educativa ha d'existir entre espais interiors i exteriors?",
    options: [
      "Han de formar part d'un entorn educatiu coherent que afavoreixi continuitat, exploracio i benestar.",
      "L'exterior no te cap valor educatiu.",
      "L'interior s'ha d'usar nomes per disciplina.",
      "No cal pensar cap relacio entre els dos espais."
    ],
    correct: 0,
    explanation: "El tema 14 demana la relacio educativa entre espais interiors i exteriors."
  },
  {
    id: "e15-01",
    theme: "Annex II - Tema 15",
    document: "Espais exteriors",
    prompt: "Quin criteri pedagogic es coherent amb un enfocament de valor d'aprendre i jugar lliurement a l'exterior?",
    options: [
      "Permetre contacte amb natura, moviment, risc mesurat i exploracio autonoma amb supervisio.",
      "Evitar sempre sortir a l'exterior.",
      "Eliminar qualsevol element natural.",
      "Fer nomes activitats assegudes i identiques a l'aula."
    ],
    correct: 0,
    explanation: "El tema 15 destaca els espais exteriors, la natura i el rol educador en el joc lliure exterior."
  },
  {
    id: "e16-01",
    theme: "Annex II - Tema 16",
    document: "Familia i escola participativa",
    prompt: "Com s'ha d'entendre la familia en una escola bressol participativa?",
    options: [
      "Com a primer agent socialitzador i interlocutora clau en el proces educatiu.",
      "Com un agent extern sense relacio amb el centre.",
      "Com un element que nomes intervé en conflictes.",
      "Com a substitut complet de l'equip educatiu dins l'aula."
    ],
    correct: 0,
    explanation: "El tema 16 defineix la familia com a primer agent socialitzador i tracta la relacio amb families."
  },
  {
    id: "e16-02",
    theme: "Annex II - Tema 16",
    document: "Familiaritzacio",
    prompt: "Quin objectiu te l'organitzacio del temps de familiaritzacio a l'inici de curs?",
    options: [
      "Facilitar una adaptacio progressiva, segura i compartida entre infant, familia i escola.",
      "Accelerar la separacio sense tenir en compte el benestar.",
      "Evitar qualsevol comunicacio amb la familia.",
      "Aplicar el mateix horari rigid a tots els infants sense observacio."
    ],
    correct: 0,
    explanation: "El tema 16 inclou l'organitzacio del temps de familiaritzacio o inici de curs de l'escola bressol."
  },
  {
    id: "e17-01",
    theme: "Annex II - Tema 17",
    document: "Funcio educadora",
    prompt: "Quina funcio correspon a la persona educadora en el primer cicle d'educacio infantil?",
    options: [
      "Acompanyar el desenvolupament integral de l'infant, observar, intervenir educativament i treballar en equip.",
      "Limitar-se a vigilar sense intencionalitat educativa.",
      "Fer diagnostics clinics de manera autonoma.",
      "Substituir sempre la familia en totes les decisions."
    ],
    correct: 0,
    explanation: "El tema 17 recull competencies, habilitats i actituds de la persona educadora i el seu paper dins l'equip."
  },
  {
    id: "e17-02",
    theme: "Annex II - Tema 17",
    document: "Formacio continuada",
    prompt: "Per que es rellevant la formacio continuada de l'equip educatiu?",
    options: [
      "Per revisar la practica professional i transformar el projecte educatiu amb criteri compartit.",
      "Per evitar qualsevol coordinacio.",
      "Per substituir l'observacio quotidiana.",
      "Per fer canvis sense reflexio ni projecte."
    ],
    correct: 0,
    explanation: "El tema 17 vincula formacio continuada, revisio professional i transformacio del projecte educatiu."
  },
  {
    id: "e18-01",
    theme: "Annex II - Tema 18",
    document: "Accidents i primeres cures",
    prompt: "Davant un accident lleu a l'escola bressol, quina resposta inicial es mes adequada?",
    options: [
      "Mantenir la calma, protegir l'infant, aplicar el protocol del centre i informar segons correspongui.",
      "No registrar res i continuar com si no hagues passat.",
      "Administrar medicacio sense pauta ni autoritzacio.",
      "Fer circular imatges de l'accident entre families."
    ],
    correct: 0,
    explanation: "El tema 18 tracta accidents, prevencio i primeres cures; cal actuar amb protocol, seguretat i comunicacio adequada."
  },
  {
    id: "e19-01",
    theme: "Annex II - Tema 19",
    document: "Higiene i salut",
    prompt: "Quina mesura ajuda a prevenir malalties frequents a l'etapa zero a tres?",
    options: [
      "Rentat de mans, ventilacio, neteja de superfícies i seguiment del protocol d'higiene i salut.",
      "Compartir xumets i gots sense neteja.",
      "Ignorar febre o simptomes compatibles amb malaltia contagiosa.",
      "Eliminar qualsevol registre d'incidencies de salut."
    ],
    correct: 0,
    explanation: "El tema 19 inclou malalties frequents i protocol d'higiene i salut."
  },
  {
    id: "e20-01",
    theme: "Annex II - Tema 20",
    document: "Pla d'evacuacio",
    prompt: "Quin objectiu te un pla d'evacuacio a l'escola bressol?",
    options: [
      "Organitzar pautes per evacuar infants de zero a tres anys amb seguretat davant una emergencia.",
      "Substituir les activitats educatives quotidianes.",
      "Guardar dades academiques de l'alumnat.",
      "Regular exclusivament les reunions de families."
    ],
    correct: 0,
    explanation: "El tema 20 tracta el pla d'evacuacio i les pautes per evacuar infants de zero a tres anys."
  },
  {
    id: "e21-01",
    theme: "Annex II - Tema 21",
    document: "Psicoleg a l'escola bressol",
    prompt: "Quina tasca es coherent amb la figura del psicoleg a l'escola bressol?",
    options: [
      "Prevenir, orientar, acompanyar equips i families i ajudar en la deteccio de necessitats.",
      "Fer substitucions ordinàries de tutoria com a funcio principal.",
      "Assumir totes les decisions pedagogiques sense l'equip.",
      "Gestionar exclusivament la facturacio del centre."
    ],
    correct: 0,
    explanation: "El tema 21 esmenta tasques de prevencio i acompanyament de la figura del psicoleg."
  },
  {
    id: "e22-01",
    theme: "Annex II - Tema 22",
    document: "Observacio i documentacio pedagogica",
    prompt: "Per que l'observacio sistematica es important a l'escola bressol?",
    options: [
      "Per comprendre processos individuals i relacionals i ajustar l'acompanyament educatiu.",
      "Per etiquetar infants sense reflexio.",
      "Per substituir el vincle amb les families.",
      "Per evitar la presa de decisions pedagogiques."
    ],
    correct: 0,
    explanation: "El tema 22 situa l'observacio i la documentacio pedagogica com a cultura d'infant i projecte d'escola."
  },
  {
    id: "e22-02",
    theme: "Annex II - Tema 22",
    document: "Documentacio pedagogica",
    prompt: "Quin criteri fa que la documentacio pedagogica sigui valuosa?",
    options: [
      "Que reculli evidencies significatives i ajudi a comprendre i compartir processos d'aprenentatge.",
      "Que acumuli imatges sense consentiment ni finalitat.",
      "Que sigui nomes decorativa.",
      "Que no es comparteixi mai amb l'equip."
    ],
    correct: 0,
    explanation: "El tema 22 demana criteris per desenvolupar dues pedagogies quotidianes i comprendre reptes cognitius i relacionals."
  },
  {
    id: "e23-01",
    theme: "Annex II - Tema 23",
    document: "Comunicacio amb la familia",
    prompt: "Quina eina de comunicacio es valida si es fa servir amb criteri professional i proteccio de dades?",
    options: [
      "Entrevistes, agenda o plataforma del centre amb informacio necessaria i respectuosa.",
      "Xarxes obertes amb dades sensibles de tots els infants.",
      "Rumors entre families sense contrast.",
      "Missatges anonims sense traçabilitat ni finalitat."
    ],
    correct: 0,
    explanation: "El tema 23 parla de comunicacio amb la familia i eines valides en l'etapa zero a tres."
  },
  {
    id: "e24-01",
    theme: "Annex II - Tema 24",
    document: "Dret d'imatge",
    prompt: "Abans de difondre una fotografia identificable d'un infant, que cal garantir?",
    options: [
      "Base legitima o autoritzacio corresponent, informacio clara de finalitat i canals de difusio.",
      "Que la fotografia agradi a l'educadora.",
      "Que s'hagi fet dins l'aula, sense cap altre requisit.",
      "Que apareguin molts infants per evitar responsabilitat."
    ],
    correct: 0,
    explanation: "El tema 24 tracta la proteccio de dades i el dret d'imatge dels infants; cal consentiment o altra base legitimadora i finalitat clara."
  },
  {
    id: "e25-01",
    theme: "Annex II - Tema 25",
    document: "Nova guia d'alimentacio",
    prompt: "Quin criteri general es coherent amb una alimentacio educativa de zero a tres anys?",
    options: [
      "Respectar necessitats, autonomia progressiva, seguretat alimentaria i coordinacio amb la familia.",
      "Forçar sempre a acabar tot el plat.",
      "Introduir aliments sense tenir en compte pautes familiars o sanitaries.",
      "Fer del menjar un premi o castig."
    ],
    correct: 0,
    explanation: "El tema 25 demana canvis i novetats en l'alimentacio de zero a tres anys; els criteris han de protegir salut, autonomia i benestar."
  },
  {
    id: "e26-01",
    theme: "Annex II - Tema 26",
    document: "Coeducacio",
    prompt: "Quina actuacio expressa millor la coeducacio al currículum d'educacio infantil?",
    options: [
      "Revisar materials, llenguatge i propostes per evitar estereotips i garantir igualtat d'oportunitats.",
      "Assignar racons i colors segons el sexe.",
      "Evitar parlar de cura i afectes amb els infants.",
      "Donar menys veu a determinades families."
    ],
    correct: 0,
    explanation: "El tema 26 tracta coeducacio i igualtat de genere al nou currículum d'educacio infantil."
  },
  {
    id: "e27-01",
    theme: "Annex II - Tema 27",
    document: "Escoles bressol municipals de Llica d'Amunt",
    prompt: "Quin aspecte s'hauria de prioritzar en estudiar les escoles bressol municipals de Llica d'Amunt?",
    options: [
      "Caracteristiques, projecte educatiu i encaix amb el servei municipal d'escola bressol.",
      "La normativa universitaria estatal.",
      "La gestio d'aeroports.",
      "L'organitzacio de batxillerat nocturn."
    ],
    correct: 0,
    explanation: "El tema 27 demana caracteristiques i projecte educatiu de les escoles bressol municipals de Llica d'Amunt."
  }
];

const CASE_CONTEXT = "Suposit practic: ets tecnica d'educacio infantil en una escola bressol municipal de Llica d'Amunt. El grup d'1 a 2 anys inicia el curs amb infants amb ritmes diversos, una familia nova que viu la separacio amb angoixa, un infant amb possibles signes d'alerta comunicatius, canvis en l'alimentacio i la necessitat de revisar protocols de sortida al pati, higiene, imatge i evacuacio.";

const CASE_QUESTIONS = [
  {
    id: "case-01",
    theme: "Annex II - Tema 16",
    document: "Familiaritzacio",
    prompt: "Durant els primers dies, un infant plora intensament quan la familia marxa. Quina actuacio es mes adequada?",
    options: [
      "Fer una familiaritzacio progressiva, acollir l'emocio i coordinar pautes amb la familia.",
      "Demanar a la familia que marxi sempre d'amagat.",
      "Ignorar el plor perque desaparegui abans.",
      "Impedir que la familia comparteixi informacio sobre l'infant."
    ],
    correct: 0,
    explanation: "La familiaritzacio ha de facilitar una adaptacio segura i compartida entre infant, familia i escola. Font: Annex II, tema 16."
  },
  {
    id: "case-02",
    theme: "Annex II - Tema 8",
    document: "Infant NESE i signes d'alerta",
    prompt: "L'equip observa que un infant no respon gaire al nom i evita la mirada en moltes situacions. Que cal fer primer?",
    options: [
      "Registrar observacions, contrastar-les amb l'equip i preparar una comunicacio respectuosa amb la familia.",
      "Fer un diagnostic tancat i comunicar-lo al grup de families.",
      "Esperar mesos sense documentar res.",
      "Separar l'infant de les activitats del grup."
    ],
    correct: 0,
    explanation: "Els signes d'alerta requereixen observacio, documentacio, coordinacio i acompanyament, no diagnosi precipitada des de l'aula. Font: Annex II, tema 8."
  },
  {
    id: "case-03",
    theme: "Annex II - Tema 11",
    document: "Joc lliure",
    prompt: "Al pati, diversos infants manipulen sorra, fulles i recipients. Quin paper ha de tenir l'educadora?",
    options: [
      "Observar, garantir seguretat, enriquir l'entorn si cal i intervenir sense anul-lar la iniciativa.",
      "Retirar els materials perque embruten.",
      "Dirigir exactament que ha de fer cada infant.",
      "Convertir el joc en una fitxa individual."
    ],
    correct: 0,
    explanation: "El joc lliure i l'experimentacio necessiten entorns preparats, observacio i intervencio ajustada. Font: Annex II, tema 11."
  },
  {
    id: "case-04",
    theme: "Annex II - Tema 24",
    document: "Dret d'imatge",
    prompt: "El centre vol publicar una fotografia del grup a una xarxa municipal. Que cal comprovar?",
    options: [
      "Autoritzacions o base legitima, finalitat, canal de difusio i infants que no poden aparèixer.",
      "Nomes que la fotografia estigui ben enfocada.",
      "Que hi surti el maxim nombre d'infants possible.",
      "Que la publicacio no porti text."
    ],
    correct: 0,
    explanation: "La proteccio de dades i el dret d'imatge exigeixen base legitima, informacio i respecte a la finalitat. Font: Annex II, tema 24."
  },
  {
    id: "case-05",
    theme: "Annex II - Tema 10",
    document: "Control d'esfinters",
    prompt: "Una familia demana iniciar el control d'esfinters tot i que l'infant no mostra signes de preparacio. Quina resposta es millor?",
    options: [
      "Explicar criteris de maduracio, acordar observacio compartida i evitar pressions.",
      "Acceptar-ho i asseure l'infant cada deu minuts encara que es resisteixi.",
      "Dir a la familia que no pot opinar.",
      "Castigar qualsevol escapament."
    ],
    correct: 0,
    explanation: "El proces ha de respectar la maduracio de l'infant i coordinar escola i familia. Font: Annex II, tema 10."
  },
  {
    id: "case-06",
    theme: "Annex II - Tema 9",
    document: "Alimentacio",
    prompt: "En el moment de dinar, un infant rebutja un aliment nou. Quina intervencio es mes educativa?",
    options: [
      "Oferir-lo sense pressio, respectar senyals de gana i sacietat i mantenir una experiencia positiva.",
      "Forçar-lo a menjar-ho tot.",
      "Retirar-li el joc posterior com a castig.",
      "Comparar-lo amb altres infants."
    ],
    correct: 0,
    explanation: "L'alimentacio ha de ser una experiencia de benestar, autonomia i cura, no de pressio. Font: Annex II, temes 9 i 25."
  },
  {
    id: "case-07",
    theme: "Annex II - Tema 18",
    document: "Accidents",
    prompt: "Un infant cau i es fa una petita ferida. Quina sequencia es mes correcta?",
    options: [
      "Atendre'l, aplicar el protocol de primeres cures, registrar la incidencia i informar la familia segons el procediment.",
      "No dir res per evitar alarmar.",
      "Aplicar qualsevol medicament disponible.",
      "Fer una fotografia de la ferida i enviar-la a totes les families."
    ],
    correct: 0,
    explanation: "Davant accidents cal seguir protocols, preservar dades i comunicar correctament. Font: Annex II, tema 18."
  },
  {
    id: "case-08",
    theme: "Annex II - Tema 20",
    document: "Evacuacio",
    prompt: "En un simulacre d'evacuacio, que ha de prioritzar l'equip amb infants de zero a tres anys?",
    options: [
      "Sortida ordenada, recompte, calma, suports adequats i seguiment del pla establert.",
      "Que cada infant surti pel seu compte.",
      "Recollir primer tot el material de l'aula.",
      "Esperar instruccions informals d'altres families."
    ],
    correct: 0,
    explanation: "El pla d'evacuacio fixa pautes per evacuar amb seguretat infants petits. Font: Annex II, tema 20."
  },
  {
    id: "case-09",
    theme: "Annex II - Tema 13",
    document: "Espais i materials",
    prompt: "Vols preparar una proposta per afavorir joc espontani. Quin criteri tries?",
    options: [
      "Materials oberts, accessibles, segurs i temps suficient per explorar.",
      "Materials molt fragils i fora de l'abast.",
      "Una sola consigna tancada i igual per a tots.",
      "Canviar tots els racons cada deu minuts."
    ],
    correct: 0,
    explanation: "Els espais, temps i materials han de facilitar joc lliure, autonomia i exploracio. Font: Annex II, tema 13."
  },
  {
    id: "case-10",
    theme: "Annex II - Tema 22",
    document: "Observacio",
    prompt: "Despres d'una sessio de joc, que converteix l'observacio en documentacio pedagogica util?",
    options: [
      "Seleccionar evidencies significatives, interpretar-les en equip i vincular-les a decisions educatives.",
      "Guardar totes les fotos sense cap criteri.",
      "Fer una llista d'etiquetes fixes per infant.",
      "No compartir mai cap observacio amb l'equip."
    ],
    correct: 0,
    explanation: "La documentacio ha d'ajudar a comprendre processos i orientar l'acompanyament. Font: Annex II, tema 22."
  },
  {
    id: "case-11",
    theme: "Annex I - Tema 11",
    document: "Proteccio de dades",
    prompt: "Una educadora vol enviar per missatgeria personal dades de salut d'un infant. Quina valoracio es correcta?",
    options: [
      "No es adequat si no es fa per canal autoritzat, amb base legitima i confidencialitat.",
      "Es correcte sempre que sigui rapid.",
      "Es obligatori enviar-ho a totes les families.",
      "No cal protegir dades de salut a l'escola bressol."
    ],
    correct: 0,
    explanation: "Les dades de salut son especialment sensibles i exigeixen mesures de proteccio i finalitat clara. Font: Annex I, tema 11."
  },
  {
    id: "case-12",
    theme: "Annex II - Tema 3",
    document: "Sistema inclusiu",
    prompt: "Per facilitar la participacio d'un infant amb necessitat de suport, quin plantejament s'ajusta al Decret 150/2017?",
    options: [
      "Aplicar mesures universals i, si cal, addicionals o intensives dins un marc inclusiu.",
      "Retirar-lo de totes les activitats comunes.",
      "Fer suports nomes quan la familia ho exigeixi per escrit.",
      "Evitar qualsevol adaptacio de l'entorn."
    ],
    correct: 0,
    explanation: "El sistema inclusiu ordena mesures i suports universals, addicionals i intensius. Font: Annex II, tema 3."
  },
  {
    id: "case-13",
    theme: "Annex I - Tema 12",
    document: "Prevencio de riscos laborals",
    prompt: "L'aula te joguines al pas i una sortida parcialment bloquejada. Que ha de fer l'equip?",
    options: [
      "Ordenar l'espai, retirar obstacles i mantenir lliures les vies de pas i evacuacio.",
      "Deixar-ho igual si encara no ha passat cap accident.",
      "Bloquejar mes la sortida per guardar material.",
      "Esperar a final de curs per revisar l'espai."
    ],
    correct: 0,
    explanation: "La prevencio de riscos exigeix anticipar situacions de perill i mantenir espais segurs. Font: Annex I, tema 12 i Annex II, tema 20."
  },
  {
    id: "case-14",
    theme: "Annex II - Tema 26",
    document: "Coeducacio",
    prompt: "En revisar els contes i materials, quin criteri aplica una mirada coeducadora?",
    options: [
      "Incloure referents diversos i evitar estereotips de genere en rols, colors i activitats.",
      "Reservar les nines nomes a les nenes.",
      "Assignar construccions nomes als nens.",
      "Eliminar tots els contes amb cures i afectes."
    ],
    correct: 0,
    explanation: "La coeducacio revisa materials i propostes per garantir igualtat i no-discriminacio. Font: Annex II, tema 26."
  },
  {
    id: "case-15",
    theme: "Annex II - Tema 17",
    document: "Treball en equip",
    prompt: "L'equip detecta criteris diferents sobre el moment del descans. Quina decisio professional es mes adequada?",
    options: [
      "Posar-ho en comu, revisar el projecte i acordar criteris compartits respectant ritmes dels infants.",
      "Que cada educadora faci sempre el contrari de les altres.",
      "No parlar-ne per evitar discrepàncies.",
      "Aplicar un horari rigid sense tenir en compte l'observacio."
    ],
    correct: 0,
    explanation: "La persona educadora forma part d'un equip i la formacio/revisio professional transforma el projecte educatiu. Font: Annex II, tema 17."
  }
];

const app = document.getElementById("app");
const homeTemplate = document.getElementById("homeTemplate");
const resetStatsBtn = document.getElementById("resetStatsBtn");
const STORAGE_KEY = "examenEducacioInfantilStats";
let session = null;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sample(items, count) {
  return shuffle(items).slice(0, Math.min(count, items.length));
}

function prepareQuestions(items) {
  return items.map((question) => ({
    ...question,
    shuffledOptions: shuffle(question.options.map((text, index) => ({ text, index })))
  }));
}

function prepareStudyQuestions(items) {
  return items.map((question) => ({
    ...question,
    studyOptions: shuffle(question.options.map((text, index) => ({ text, index })))
  }));
}

function getStats() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveAttempt(attempt) {
  const stats = getStats();
  stats.push(attempt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats.slice(-50)));
}

function formatScore(value) {
  return Number(value).toFixed(3).replace(/\.?0+$/, "");
}

function renderHome() {
  session = null;
  app.replaceChildren(homeTemplate.content.cloneNode(true));
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.mode;
      if (mode === "study") renderStudy();
      if (mode === "first") startExam("first");
      if (mode === "case") startExam("case");
    });
  });
  renderStats();
}

function renderStats() {
  const statsGrid = document.getElementById("statsGrid");
  const weakTopics = document.getElementById("weakTopics");
  const stats = getStats();
  if (!statsGrid || !weakTopics) return;

  if (!stats.length) {
    statsGrid.innerHTML = `
      <div class="stat-card"><span>Millor puntuacio</span><strong>-</strong></div>
      <div class="stat-card"><span>Ultima puntuacio</span><strong>-</strong></div>
      <div class="stat-card"><span>Percentatge d'encerts</span><strong>-</strong></div>
      <div class="stat-card"><span>Exàmens fets</span><strong>0</strong></div>
    `;
    weakTopics.innerHTML = `<p class="muted">Encara no hi ha resultats desats.</p>`;
    return;
  }

  const best = stats.reduce((top, item) => (item.score / item.max > top.score / top.max ? item : top), stats[0]);
  const last = stats[stats.length - 1];
  const correct = stats.reduce((sum, item) => sum + item.correct, 0);
  const total = stats.reduce((sum, item) => sum + item.total, 0);
  const percent = total ? Math.round((correct / total) * 100) : 0;

  statsGrid.innerHTML = `
    <div class="stat-card"><span>Millor puntuacio</span><strong>${formatScore(best.score)}/${formatScore(best.max)}</strong></div>
    <div class="stat-card"><span>Ultima puntuacio</span><strong>${formatScore(last.score)}/${formatScore(last.max)}</strong></div>
    <div class="stat-card"><span>Percentatge d'encerts</span><strong>${percent}%</strong></div>
    <div class="stat-card"><span>Exàmens fets</span><strong>${stats.length}</strong></div>
  `;

  const misses = {};
  stats.forEach((item) => {
    Object.entries(item.topicMisses || {}).forEach(([topic, amount]) => {
      misses[topic] = (misses[topic] || 0) + amount;
    });
  });
  const weakest = Object.entries(misses).sort((a, b) => b[1] - a[1]).slice(0, 4);
  weakTopics.innerHTML = weakest.length
    ? `<h3>Temes mes fallats</h3>${weakest.map(([topic, amount]) => `<div class="weak-topic"><span>${topic}</span><strong>${amount}</strong></div>`).join("")}`
    : `<p class="muted">Encara no es poden deduir temes mes fallats.</p>`;
}

function startExam(type) {
  const isCase = type === "case";
  const baseQuestions = isCase ? CASE_QUESTIONS : sample(QUESTION_BANK, 40);
  session = {
    type,
    title: isCase ? "Segona prova - Cas practic" : "Primera prova - Tipus test",
    questions: prepareQuestions(baseQuestions),
    current: 0,
    answers: {},
    context: isCase ? CASE_CONTEXT : "",
    config: isCase
      ? { correct: 1.333, wrong: -0.333, blank: -0.333, max: 19.995, pass: null }
      : { correct: 0.75, wrong: -0.187, blank: 0, max: 30, pass: 15 }
  };
  renderExam();
}

function currentQuestion() {
  return session.questions[session.current];
}

function renderExam() {
  const question = currentQuestion();
  const answered = Object.keys(session.answers).length;
  const percent = ((session.current + 1) / session.questions.length) * 100;

  app.innerHTML = `
    <section class="exam-shell">
      <div class="exam-panel panel">
        <div class="exam-header">
          <div>
            <p class="eyebrow">${session.title}</p>
            <h2>Pregunta ${session.current + 1} de ${session.questions.length}</h2>
          </div>
          <button class="secondary-button" id="homeBtn" type="button">Torna a l'inici</button>
        </div>
        ${session.context ? `<p class="muted">${session.context}</p>` : ""}
        <div class="progress-wrap" aria-label="Progres">
          <div class="progress-bar" style="width: ${percent}%"></div>
        </div>
        <div class="question-card">
          <div class="question-meta">
            <span class="pill">${question.theme}</span>
            <span class="pill">${question.document}</span>
          </div>
          <h3 class="question-title">${question.prompt}</h3>
          <div class="options">
            ${question.shuffledOptions.map((option, index) => {
              const selected = session.answers[question.id] === option.index;
              return `
                <button class="option ${selected ? "is-selected" : ""}" data-option="${option.index}" type="button">
                  <span class="option-marker">${String.fromCharCode(65 + index)}</span>
                  <span>${option.text}</span>
                </button>
              `;
            }).join("")}
          </div>
          <div class="actions">
            <button class="secondary-button" id="blankBtn" type="button">Deixa en blanc</button>
            <button class="secondary-button" id="prevBtn" type="button" ${session.current === 0 ? "disabled" : ""}>Anterior</button>
            <button class="primary-button" id="nextBtn" type="button">${session.current === session.questions.length - 1 ? "Revisa" : "Seguent"}</button>
          </div>
        </div>
      </div>
      <aside class="panel side-panel">
        <p class="eyebrow">Seguiment</p>
        <h3>${answered} respostes marcades</h3>
        <div class="nav-grid">
          ${session.questions.map((item, index) => {
            const value = session.answers[item.id];
            const state = value === null ? "is-blank" : value === undefined ? "" : "is-answered";
            return `<button class="nav-dot ${index === session.current ? "is-active" : ""} ${state}" data-jump="${index}" type="button">${index + 1}</button>`;
          }).join("")}
        </div>
        <div class="actions">
          <button class="primary-button" id="reviewBtn" type="button">Revisar abans d'entregar</button>
        </div>
      </aside>
    </section>
  `;

  document.getElementById("homeBtn").addEventListener("click", renderHome);
  document.getElementById("blankBtn").addEventListener("click", () => {
    session.answers[question.id] = null;
    renderExam();
  });
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (session.current > 0) session.current -= 1;
    renderExam();
  });
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (session.current < session.questions.length - 1) {
      session.current += 1;
      renderExam();
    } else {
      renderReview();
    }
  });
  document.getElementById("reviewBtn").addEventListener("click", renderReview);
  document.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => {
      session.answers[question.id] = Number(button.dataset.option);
      renderExam();
    });
  });
  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      session.current = Number(button.dataset.jump);
      renderExam();
    });
  });
}

function renderReview() {
  const blankCount = session.questions.filter((question) => session.answers[question.id] === undefined || session.answers[question.id] === null).length;
  app.innerHTML = `
    <section class="panel review-panel">
      <p class="eyebrow">${session.title}</p>
      <h2>Revisio abans d'entregar</h2>
      <p class="muted">Tens ${blankCount} preguntes en blanc. Pots tornar a qualsevol pregunta o entregar l'examen.</p>
      <div class="review-list">
        ${session.questions.map((question, index) => {
          const answer = session.answers[question.id];
          const label = answer === undefined || answer === null ? "En blanc" : question.options[answer];
          return `
            <div class="review-item ${answer === undefined || answer === null ? "blank" : ""}">
              <strong>${index + 1}. ${question.prompt}</strong>
              <p class="muted">Resposta marcada: ${label}</p>
              <button class="secondary-button" data-edit="${index}" type="button">Revisa aquesta pregunta</button>
            </div>
          `;
        }).join("")}
      </div>
      <div class="actions">
        <button class="secondary-button" id="backExamBtn" type="button">Continua revisant</button>
        <button class="primary-button" id="submitBtn" type="button">Entrega examen</button>
      </div>
    </section>
  `;
  document.getElementById("backExamBtn").addEventListener("click", renderExam);
  document.getElementById("submitBtn").addEventListener("click", finishExam);
  document.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      session.current = Number(button.dataset.edit);
      renderExam();
    });
  });
}

function calculateResults() {
  let correct = 0;
  let wrong = 0;
  let blank = 0;
  let score = 0;
  const topicMisses = {};

  const details = session.questions.map((question) => {
    const answer = session.answers[question.id];
    let state = "blank";
    if (answer === undefined || answer === null) {
      blank += 1;
      score += session.config.blank;
    } else if (answer === question.correct) {
      correct += 1;
      score += session.config.correct;
      state = "correct";
    } else {
      wrong += 1;
      score += session.config.wrong;
      state = "wrong";
    }

    if (state !== "correct") {
      topicMisses[question.theme] = (topicMisses[question.theme] || 0) + 1;
    }

    return { question, answer, state };
  });

  return { correct, wrong, blank, score, details, topicMisses };
}

function finishExam() {
  const result = calculateResults();
  saveAttempt({
    mode: session.type,
    score: result.score,
    max: session.config.max,
    correct: result.correct,
    wrong: result.wrong,
    blank: result.blank,
    total: session.questions.length,
    topicMisses: result.topicMisses,
    date: new Date().toISOString()
  });
  renderResults(result);
}

function renderResults(result) {
  const pass = session.config.pass === null ? null : result.score >= session.config.pass;
  app.innerHTML = `
    <section class="panel review-panel">
      <p class="eyebrow">${session.title}</p>
      <h2>Resultats</h2>
      ${pass === null ? "" : `<span class="status ${pass ? "pass" : "fail"}">${pass ? "Apte/a" : "No apte/a"}</span>`}
      <div class="result-hero">
        <div class="result-card"><span>Encerts</span><strong>${result.correct}</strong></div>
        <div class="result-card"><span>Errors</span><strong>${result.wrong}</strong></div>
        <div class="result-card"><span>No contestades</span><strong>${result.blank}</strong></div>
        <div class="result-card"><span>Puntuacio</span><strong>${formatScore(result.score)}</strong></div>
        <div class="result-card"><span>Maxim</span><strong>${formatScore(session.config.max)}</strong></div>
      </div>
      <div class="actions">
        <button class="primary-button" id="repeatBtn" type="button">Repeteix amb preguntes noves</button>
        <button class="secondary-button" id="homeBtn" type="button">Torna a l'inici</button>
      </div>
    </section>
    <section class="panel review-panel">
      <p class="eyebrow">Correccio</p>
      <h2>Pregunta per pregunta</h2>
      <div class="review-list">
        ${result.details.map(({ question, answer, state }, index) => {
          const answerLabel = answer === undefined || answer === null ? "No contestada" : question.options[answer];
          return `
            <article class="review-item ${state}">
              <div class="question-meta">
                <span class="pill">${state === "correct" ? "Correcta" : state === "wrong" ? "Incorrecta" : "En blanc"}</span>
                <span class="pill">${question.theme}</span>
              </div>
              <h3>${index + 1}. ${question.prompt}</h3>
              <p><strong>La teva resposta:</strong> ${answerLabel}</p>
              <p><strong>Resposta correcta:</strong> ${question.options[question.correct]}</p>
              <p class="muted">${question.explanation}</p>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
  document.getElementById("repeatBtn").addEventListener("click", () => startExam(session.type));
  document.getElementById("homeBtn").addEventListener("click", renderHome);
}

function renderStudy() {
  const themes = [...new Set(QUESTION_BANK.map((question) => question.theme))];
  app.innerHTML = `
    <section class="panel review-panel">
      <div class="exam-header">
        <div>
          <p class="eyebrow">Mode estudi</p>
          <h2>Preguntes per tema</h2>
        </div>
        <button class="secondary-button" id="homeBtn" type="button">Torna a l'inici</button>
      </div>
      <div class="study-controls">
        <label for="themeSelect">Tema</label>
        <select id="themeSelect">
          <option value="all">Tots els temes</option>
          ${themes.map((theme) => `<option value="${theme}">${theme}</option>`).join("")}
        </select>
      </div>
      <div class="study-list" id="studyList"></div>
    </section>
  `;
  document.getElementById("homeBtn").addEventListener("click", renderHome);
  const select = document.getElementById("themeSelect");
  const renderStudyList = () => {
    const chosen = select.value;
    const questions = prepareStudyQuestions(chosen === "all" ? QUESTION_BANK : QUESTION_BANK.filter((question) => question.theme === chosen));
    document.getElementById("studyList").innerHTML = questions.map((question) => `
      <article class="study-item" data-study="${question.id}">
        <div class="question-meta">
          <span class="pill">${question.theme}</span>
          <span class="pill">${question.document}</span>
        </div>
        <h3>${question.prompt}</h3>
        <div class="options">
          ${question.studyOptions.map((option, index) => `
            <button class="option" data-study-option="${question.id}:${option.index}" type="button">
              <span class="option-marker">${String.fromCharCode(65 + index)}</span>
              <span>${option.text}</span>
            </button>
          `).join("")}
        </div>
        <div class="feedback" id="feedback-${question.id}" hidden></div>
      </article>
    `).join("");

    document.querySelectorAll("[data-study-option]").forEach((button) => {
      button.addEventListener("click", () => {
        const [questionId, optionIndex] = button.dataset.studyOption.split(":");
        const question = QUESTION_BANK.find((item) => item.id === questionId);
        const chosenIndex = Number(optionIndex);
        const wrapper = document.querySelector(`[data-study="${questionId}"]`);
        wrapper.querySelectorAll(".option").forEach((optionButton) => {
          const [, rawIndex] = optionButton.dataset.studyOption.split(":");
          const itemIndex = Number(rawIndex);
          optionButton.classList.toggle("is-correct", itemIndex === question.correct);
          optionButton.classList.toggle("is-wrong", itemIndex === chosenIndex && itemIndex !== question.correct);
        });
        const feedback = document.getElementById(`feedback-${questionId}`);
        feedback.hidden = false;
        feedback.className = `feedback ${chosenIndex === question.correct ? "good" : "bad"}`;
        feedback.innerHTML = `
          <strong>${chosenIndex === question.correct ? "Resposta correcta." : "Resposta incorrecta."}</strong>
          <p>Resposta correcta: ${question.options[question.correct]}</p>
          <p>${question.explanation}</p>
        `;
      });
    });
  };

  select.addEventListener("change", renderStudyList);
  renderStudyList();
}

resetStatsBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  if (!session) renderStats();
});

renderHome();
