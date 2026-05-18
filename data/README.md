# Banc de preguntes

Aquest directori conté el banc de preguntes separat del motor de l'aplicació.

- `banc-preguntes.js` defineix `window.EXAM_DATA`.
- Les preguntes inclouen tema, document, dificultat, competència, etiquetes, explicació i notes de qualitat.
- Les opcions es barregen a l'aplicació abans de mostrar-se, de manera que la resposta correcta no apareix sempre a la mateixa lletra.

S'ha triat un fitxer JavaScript de dades perquè l'app funcioni directament amb `file://`. Quan es publiqui amb servidor o GitHub Pages, es pot convertir aquest contingut a JSON i carregar-lo amb `fetch()`.
