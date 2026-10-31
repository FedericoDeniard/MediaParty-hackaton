NOTAS DE PRUEBA - MEDIA PARTY 2026
===================================

Para qué sirve esta carpeta
---------------------------
Son 18 notas periodísticas argentinas de la semana del 24 al 31 de octubre de 2026,
que usamos para probar el backend de la hackatón (cómo el sistema parte una nota
en párrafos y la enriquece con material respaldado). No se muestran a ningún
lector ni forman parte del producto.

Derechos de autor y créditos
----------------------------
- Cada nota pertenece al medio y a los autores que la publicaron (La Nación,
  Infobae y otros). El título, el medio, la fecha y el enlace a la nota original
  de cada una están en _indice.md.
- Según informó la organización de la hackatón, los medios autorizaron sumar sus
  contenidos a los sistemas que se desarrollan en el evento. Las notas se incluyen
  en esta carpeta con esa autorización y solo para esa finalidad.
- No se republican ni se redistribuyen fuera de este proyecto. Los textos se
  dejan tal como los publicó el medio, sin cambios de contenido (solo se quitó el
  ruido de la página: menús, avisos, "minutos de lectura", tuits incrustados).
- Si algún medio o autor pide que se retire una nota, se elimina de inmediato.

Estructura
----------
  notas/
    README.txt     este aviso
    _indice.md     fuentes de cada nota
    md/            una nota por archivo, en Markdown
    txt/           la misma nota en texto plano

Notas 16 y 17 son agendas de partidos y tablas, no notas escritas: sirven como
caso difícil para la ingesta en párrafos. Se descartó una nota (la 18, de
Página/12) porque no se pudo bajar.

Cómo regenerarlas
-----------------
Requiere Python 3 y una librería gratuita para extraer el texto de la página:

  pip install trafilatura
  python scripts/bajar_notas.py        # baja las notas de docs/corpus-prueba.md
  python scripts/compilar_notas.py     # las limpia y llena md/ y txt/
  python scripts/validar_notas.py      # revisa que no queden restos de la página

El script respeta el robots.txt de cada sitio y no esquiva suscripciones ni
bloqueos.
