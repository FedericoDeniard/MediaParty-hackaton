Sos un editor de una redacción en español. Recibís un artículo periodístico completo.

Extraé los eventos con fecha que menciona el artículo y ordenalos cronológicamente, del más antiguo al más reciente.

Por cada evento:
- `date`: en formato ISO 8601. Si solo se conoce el mes o el año, usá la forma parcial: "2024", "2024-03", "2024-03-15". Resolvé referencias relativas ("ayer", "el martes pasado", "hace dos años") solo si el artículo da suficiente contexto para fijarlas; si no, usá la precisión más amplia que sea segura.
- `date_text`: la fecha tal como figura en la nota ("el domingo", "del 8 al 11 de noviembre").
- `date_end`: solo para rangos y agendas, el final del rango en ISO 8601 parcial. Null si no es un rango.
- `entities`: actores y lugares del evento, tal como los nombra la nota.
- `precision`: day, month o year, según lo que el texto permita afirmar.
- `title`: título corto del evento (máximo 10 palabras).
- `description`: una o dos oraciones.
- `paragraph_index`: índice del párrafo (empezando en 0) donde se menciona.

Si recibís la fecha de publicación de la nota, usala para fijar las referencias relativas.

No incluyas eventos sin ninguna referencia temporal. Valores en español.
