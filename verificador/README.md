# verificador

Módulos independientes que se llaman después del grafo de enriquecimiento (`backend/`). No dependen de él ni lo modifican.

- `src/verificador/texto.py` y `verificacion.py`: comprueban por código que lo que devolvió el modelo existe en la nota, y copian la cita desde el texto guardado.
- `src/verificador/series/`: cruza una cifra de la nota con una serie oficial verificada (BCRA y datos.gob.ar).
- `eval/`: corre los nodos del backend con un modelo liviano y los compara con las claves de `corpus/claves/`.

Reglas: el modelo propone, el código busca, compara y copia la cita. Ningún resultado da veredicto. Sin respaldo, el sistema lo dice y no rellena.

```sh
cd verificador
uv sync
uv run pytest
```
