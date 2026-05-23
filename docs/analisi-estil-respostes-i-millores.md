# Anàlisi del format de respostes i millores aplicades al banc

## 1. Què mostren les proves reals

Les dues proves de Lliçà d’Amunt de 2022 i 2023 funcionen majoritàriament amb **3 opcions per pregunta**. El test comparatiu de Caldes utilitza **4 opcions** i una plantilla final de correcció.

Les preguntes reals no solen tenir distractors absurds. Les respostes incorrectes acostumen a ser:

1. **Parcialment certes però incompletes.** Exemple: una opció menciona només observació, però la bona afegeix intervenció o coordinació.
2. **Molt properes normativament.** Exemple: confondre Decret 102/2010, Decret 150/2017 i Decret 21/2023.
3. **Massa absolutes.** Exemple: "sempre", "mai", "només", "cap cas".
4. **Basades en pràctiques quotidianes versemblants però pedagògicament febles.** Exemple: distreure l'infant perquè mengi, accelerar el canvi de bolquer o separar un infant amb intolerància.
5. **Respostes de sentit comú administratiu però tècnicament imprecises.** Exemple: carta/ofici/certificat, alcalde/ple/junta, notificació/publicació.

## 2. Com solen ser les respostes correctes

Les correctes tendeixen a ser:

- més completes i matisades;
- menys absolutes;
- alineades amb respecte, autonomia, observació, inclusió i seguretat;
- en normativa, molt exactes en l’òrgan, el decret, el termini o la definició;
- en pedagogia, formulades com a criteri professional, no com a simple preferència.

## 3. Problema detectat al banc anterior

El banc anterior tenia bones preguntes, però algunes opcions incorrectes eren massa fàcils de descartar perquè eren caricaturesques. Per exemple: "quan l'interessat l'endevina", "només amb consentiment notarial", "esperar indefinidament" o formulacions que sonaven massa evidentment falses.

Això feia que algunes preguntes mesuressin més la intuïció que l'estudi real del temari.

## 4. Criteri de millora aplicat

En la versió nova s’ha mantingut la llista principal de **160 preguntes**, però s’han reescrit molts distractors perquè siguin:

- plausibles;
- propers al temari;
- incorrectes per un matís real;
- semblants al patró de les proves 2022 i 2023;
- menys humorístics o absurds.

## 5. Estructura nova generada

- `questionBank`: 160 preguntes principals millorades, 4 opcions per pregunta.
- `previousYearQuestions`: 98 preguntes d’anys anteriors.
  - 43 preguntes de 2022: 40 principals + 3 extres.
  - 55 preguntes de 2023: 50 principals + 5 reserva.

## 6. Punt que requereix revisió

A la prova 2023 hi ha una pregunta sobre el Decret 150/2017 i la detecció precoç de necessitats educatives específiques. Al document original la resposta marcada sembla ser l’opció b, però normativament la resposta més coherent sembla l’opció a. L’he mantinguda segons el document original dins la llista d’anys anteriors i marcada amb `reviewLabel` perquè Codex o tu la pugueu revisar abans d’utilitzar-la com a resposta definitiva.
