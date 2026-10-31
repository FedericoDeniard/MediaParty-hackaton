NOTAS DE PRUEBA - MEDIA PARTY 2026
===================================

Para qué sirve esta carpeta
---------------------------
Son notas periodísticas argentinas de la semana del 24 al 31 de octubre de 2026,
que usamos únicamente para probar internamente el backend de la hackatón (cómo
el sistema parte una nota en párrafos y la enriquece). No son parte del producto
ni se muestran a ningún lector.

Aviso sobre derechos de autor
-----------------------------
- Cada nota pertenece al medio y a los autores que la publicaron (La Nación,
  Infobae y otros). Los créditos están en _indice.md, con título, medio, fecha y
  enlace a la nota original.
- Los textos completos NO están en este repositorio. Como el repositorio es
  público, no republicamos contenido de terceros. En esta carpeta solo hay
  este aviso y el índice de fuentes.
- Quien quiera probar el sistema con las notas las genera en su propia máquina
  (ver abajo). Esos archivos quedan en las carpetas md/ y txt/, que git ignora, y
  son de uso interno: no se publican ni se redistribuyen.
- Si algún medio o autor pide que se quite una referencia, se elimina de
  inmediato.

Estructura
----------
  notas/
    README.txt     este aviso
    _indice.md     fuentes de cada nota (esto sí está en el repositorio)
    md/            una nota por archivo, en Markdown (generada localmente)
    txt/           la misma nota en texto plano (generada localmente)

Cómo generar las notas en tu máquina
------------------------------------
Requiere Python 3 y una librería gratuita para extraer el texto de la página:

  pip install trafilatura
  python scripts/bajar_notas.py        # baja las notas de docs/corpus-prueba.md
  python scripts/compilar_notas.py     # las limpia y llena md/ y txt/
  python scripts/validar_notas.py      # revisa que no queden restos de la página

El script respeta el robots.txt de cada sitio y no esquiva suscripciones ni
bloqueos. Las notas que un sitio no deja bajar se pegan a mano.

Qué se hizo con cada nota
-------------------------
Se sacó el ruido de la página (menús, avisos, "minutos de lectura", tuits
incrustados) y se dejó el título y los párrafos, como los entregaría una
periodista. El contenido de la nota no se modifica.
