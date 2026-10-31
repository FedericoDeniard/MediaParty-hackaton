/* Datos reales de ejemplo, generados por el verificador sobre las 18 notas del corpus
   (`armar_graficos` con las series guardadas al 2026-10-31). No se editan a mano: se regeneran con
   `verificador/scripts/generar_ejemplos_ui.py`. */
import type { FilasDeAnalisis } from '../components/graficos/pasos.ts'
import type { GraficosNota } from '../components/graficos/types.ts'

export interface EjemploDeNota {
  titulo: string
  cuerpo: string
  /** Las filas del análisis tal como las escribe el backend, recortadas a lo que usa el recorrido. */
  filas: FilasDeAnalisis
  datos: GraficosNota
}

export const ejemplos: Record<string, EjemploDeNota> = {
  "01": {
    "titulo": "A cuánto llegará el índice de inflación de octubre según las consultoras",
    "cuerpo": "Luego de que la inflación se ubicara en 1,9% en septiembre, un salto intermensual respecto del 1,7% de agosto, la expectativa para octubre está centrada en si podrá lograrse una desaceleración. Hasta la tercera semana del mes, los relevamientos de las consultoras son optimistas al respecto, aunque no anticipan una baja abrupta. Sin embargo, el Gobierno podría lograr el segundo dato más bajo del último año.\n\nLas estimaciones privadas ubican la variación mensual de octubre en 1,8%, una desaceleración de 0,1 puntos porcentuales, muy leve, aún lejos de la expectativa oficial de que la inflación comenzara en algún mes del 2026 en cero.\n\nEl resultado de septiembre interrumpió la tendencia descendente. Las mediciones de las consultoras muestran que los precios siguen con aumentos, aunque a un ritmo menor que el registrado durante el mes previo.\n\nNuevas proyecciones\n\nEl dato de 1,8% se repite en distintos relevamientos. La diferencia con el mes anterior sería acotada, aunque el alcanzaría al Gobierno para mostrar una desaceleración.\n\nEl número tendría un peso político y económico por su comparación con los registros recientes. Según las estimaciones privadas, octubre podría convertirse en el segundo dato más bajo de 2026 y de los últimos doce meses. El guarismo final depende de cómo cierren los precios esta semana.\n\nLa evolución de los alimentos aparece como uno de los puntos centrales para seguir esa dinámica. Las mediciones semanales difundidas por LCG, Invecq y Eco Go muestran aumentos en distintos segmentos, aunque también registran factores que moderan el nivel general de precios.\n\nLa presión de alimentos\n\nLCG informó que el segmento de alimentos y bebidas aumentó 0,5% durante la tercera semana de octubre. El dato marcó la séptima semana consecutiva con incrementos para ese conjunto de productos, aunque la firma indicó que las subas fueron más acotadas.\n\nLa consultora señaló que la inflación promedio de las últimas cuatro semanas desaceleró. En esa medición, la variación quedó en 3,8%, con un avance de 0,6 puntos porcentuales respecto de la semana anterior. Carnes y bebidas explicaron más de la mitad de la inflación semanal.\n\nLas carnes subieron 0,5% semanal, mientras que las bebidas aumentaron 1,1%. Esos dos rubros tuvieron una participación central en el incremento de la tercera semana de octubre dentro de la canasta de alimentos y bebidas.En la medición mensual de LCG, las carnes, los panificados y las verduras explicaron más de la mitad de la suba acumulada. El informe ubicó ese aporte en 2,4 p.p..\n\nEcoGo también informó una variación semanal de 0,59% en alimentos durante la tercera semana de octubre. Para el mes completo, proyectó que su Relevamiento de Precios Minoristas marcaría una suba de 1,8 por ciento.\n\nLa firma señaló que alimentos y bebidas no alcohólicas realizaron el mayor aporte al nivel general. Ese comportamiento mantuvo a la canasta alimentaria como una de las principales referencias para seguir la evolución de los precios durante octubre. Eco Go también identificó un factor que contuvo el indicador: las prendas registraron una baja de 1,75%, que compensó una parte de los aumentos observados en otros componentes del relevamiento.\n\nMayor fue el dato que informó Invecq. Para la consultora dirigida por Esteban Domecq, los precios aumentaron 0,9% durante la tercera semana de octubre (una diferencia de 0,4 p.p. con LCG y Eco Go). Con ese resultado, la inflación promedio móvil de cuatro semanas quedó en 1,8 por ciento.\n\nLa justificación oficial\n\nAnte los relevamientos de los privados y la expectativa por el dato de octubre, la semana pasada, el presidente Javier Milei admitió que “el ritmo al que baja la inflación es más lento”. El mandatario habló con Radio Rivadavia y relacionó la evolución de los precios con los efectos del escenario mundial sobre la Argentina.\n\nMilei sostuvo que los acontecimientos internacionales afectan al país a través del riesgo país y de los precios. En ese marco, señaló que el indicador superó los 700 puntos básicos (p.b.) y afirmó que la economía crece por debajo de lo previsto. “La economía está creciendo menos de lo que se esperaba. Eso hace que la demanda de dinero crezca menos de lo que debería crecer y, consecuentemente, el ritmo al que baja la inflación es menor”, dijo el Presidente durante la entrevista.\n\nLa referencia de Milei al contexto mundial se vincula con el argumento que podrían utilizar el Gobierno si el resultado mensual se ubica cerca de la estimación privada. Es que si bien se trataría de una desaceleración del ritmo de aumento de precios está lejos de la expectativa que puso el oficialismo sobre que iba a pasar este año con la inflación.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "La inflación mensual de septiembre fue de 1,9%."
          },
          {
            "text": "La inflación mensual de agosto fue de 1,7%."
          },
          {
            "text": "Las estimaciones privadas ubican la inflación de octubre en 1,8% mensual, una desaceleración de 0,1 puntos porcentuales respecto de septiembre."
          },
          {
            "text": "El Gobierno había planteado la expectativa de que la inflación llegara a cero en algún mes de 2026."
          },
          {
            "text": "Según estimaciones privadas, la inflación de octubre podría ser el segundo dato más bajo de 2026 y de los últimos doce meses."
          },
          {
            "text": "Según LCG, alimentos y bebidas aumentaron 0,5% durante la tercera semana de octubre."
          },
          {
            "text": "Según LCG, la tercera semana de octubre marcó la séptima semana consecutiva de aumentos en alimentos y bebidas."
          },
          {
            "text": "Según LCG, la inflación promedio de alimentos de las últimas cuatro semanas quedó en 3,8%, con un avance de 0,6 puntos porcentuales respecto de la semana anterior, pese a que la consultora habló de desaceleración."
          },
          {
            "text": "Según LCG, carnes y bebidas explicaron más de la mitad de la inflación semanal de alimentos en la tercera semana de octubre."
          },
          {
            "text": "Según LCG, las carnes subieron 0,5% semanal y las bebidas 1,1% en la tercera semana de octubre."
          },
          {
            "text": "Según LCG, carnes, panificados y verduras explicaron más de la mitad de la suba mensual acumulada, con un aporte de 2,4 puntos porcentuales."
          },
          {
            "text": "Eco Go informó una variación semanal de 0,59% en alimentos durante la tercera semana de octubre."
          },
          {
            "text": "Eco Go proyectó que su Relevamiento de Precios Minoristas marcaría una suba de 1,8% en octubre."
          },
          {
            "text": "Según Eco Go, las prendas registraron una baja de 1,75% en su relevamiento de octubre."
          },
          {
            "text": "Invecq, consultora dirigida por Esteban Domecq, registró un aumento de precios de 0,9% en la tercera semana de octubre y una inflación promedio móvil de cuatro semanas de 1,8%."
          },
          {
            "text": "Javier Milei dijo en Radio Rivadavia que \"el ritmo al que baja la inflación es más lento\"."
          },
          {
            "text": "Milei afirmó que el riesgo país superó los 700 puntos básicos."
          },
          {
            "text": "Milei dijo: \"La economía está creciendo menos de lo que se esperaba. Eso hace que la demanda de dinero crezca menos de lo que debería crecer y, consecuentemente, el ritmo al que baja la inflación es menor\"."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "LCG",
            "mentions": 5
          },
          {
            "name": "Invecq",
            "mentions": 3
          },
          {
            "name": "Eco Go",
            "mentions": 5
          },
          {
            "name": "Esteban Domecq",
            "mentions": 1
          },
          {
            "name": "Javier Milei",
            "mentions": 5
          },
          {
            "name": "Radio Rivadavia",
            "mentions": 1
          },
          {
            "name": "Argentina",
            "mentions": 2
          },
          {
            "name": "Gobierno nacional",
            "mentions": 5
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Inflación de agosto se ubicó en 1,7%"
          },
          {
            "title": "Inflación de septiembre subió a 1,9%"
          },
          {
            "title": "LCG: alimentos subieron 0,5% en tercera semana"
          },
          {
            "title": "Eco Go: alimentos subieron 0,59% semanal"
          },
          {
            "title": "Invecq: precios subieron 0,9% en tercera semana"
          },
          {
            "title": "Milei admitió que la inflación baja más lento"
          },
          {
            "title": "Consultoras estiman inflación de octubre en 1,8%"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 18,
            "ok": 24
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "La inflación mensual de septiembre fue de 1,9%."
              },
              "resultado": "coincide",
              "serie": {
                "nombre": "Inflación mensual (IPC)",
                "valor": 1.9
              }
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La inflación mensual de agosto fue de 1,7%."
              },
              "resultado": "coincide",
              "serie": {
                "nombre": "Inflación mensual (IPC)",
                "valor": 1.7
              }
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Las estimaciones privadas ubican la inflación de octubre en 1,8% mensual, una desaceleración de 0,1 puntos porcentuales respecto de septiembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según LCG, alimentos y bebidas aumentaron 0,5% durante la tercera semana de octubre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según LCG, la inflación promedio de alimentos de las últimas cuatro semanas quedó en 3,8%, con un avance de 0,6 puntos porcentuales respecto de la semana anterior, pese a que la consultora habló de desaceleración."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según LCG, las carnes subieron 0,5% semanal y las bebidas 1,1% en la tercera semana de octubre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según LCG, carnes, panificados y verduras explicaron más de la mitad de la suba mensual acumulada, con un aporte de 2,4 puntos porcentuales."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Eco Go informó una variación semanal de 0,59% en alimentos durante la tercera semana de octubre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Eco Go proyectó que su Relevamiento de Precios Minoristas marcaría una suba de 1,8% en octubre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según Eco Go, las prendas registraron una baja de 1,75% en su relevamiento de octubre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Invecq, consultora dirigida por Esteban Domecq, registró un aumento de precios de 0,9% en la tercera semana de octubre y una inflación promedio móvil de cuatro semanas de 1,8%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Milei afirmó que el riesgo país superó los 700 puntos básicos."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "serie-bcra-27",
          "tipo": "serie",
          "titulo": "Inflación mensual (IPC)",
          "fuente": "bcra",
          "enlace": "https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/27",
          "unidad": "porcentaje",
          "origen_datos": "guardado",
          "puntos": [
            {
              "x": "2026-01-31",
              "y": 2.9,
              "etiqueta": "2026-01-31",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-02-28",
              "y": 2.9,
              "etiqueta": "2026-02-28",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-03-31",
              "y": 3.4,
              "etiqueta": "2026-03-31",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-04-30",
              "y": 2.6,
              "etiqueta": "2026-04-30",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-05-31",
              "y": 2.1,
              "etiqueta": "2026-05-31",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-06-30",
              "y": 1.9,
              "etiqueta": "2026-06-30",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-07-31",
              "y": 2.1,
              "etiqueta": "2026-07-31",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-08-31",
              "y": 1.7,
              "etiqueta": "2026-08-31",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-09-30",
              "y": 1.9,
              "etiqueta": "2026-09-30",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            }
          ],
          "marcas": [
            {
              "tarjeta_id": "a20b6e3fc5",
              "x": "2026-09-30",
              "y": 1.9,
              "texto": "La inflación mensual de septiembre fue de 1,9%.",
              "resultado": "coincide",
              "valor_serie": 1.9,
              "diferencia": 0.0,
              "enlace": "https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/27",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 0,
                "fin": 193,
                "cita": "Luego de que la inflación se ubicara en 1,9% en septiembre, un salto intermensual respecto del 1,7% de agosto, la expectativa para octubre está centrada en si podrá lograrse una desaceleración."
              },
              "advertencias": [
                "datos de la copia guardada (último dato 2026-09-30)"
              ]
            },
            {
              "tarjeta_id": "d2628e1693",
              "x": "2026-08-31",
              "y": 1.7,
              "texto": "La inflación mensual de agosto fue de 1,7%.",
              "resultado": "coincide",
              "valor_serie": 1.7,
              "diferencia": 0.0,
              "enlace": "https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/27",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 0,
                "fin": 193,
                "cita": "Luego de que la inflación se ubicara en 1,9% en septiembre, un salto intermensual respecto del 1,7% de agosto, la expectativa para octubre está centrada en si podrá lograrse una desaceleración."
              },
              "advertencias": [
                "datos de la copia guardada (último dato 2026-09-30)"
              ]
            }
          ],
          "avisos": []
        },
        {
          "id": "linea-tiempo",
          "tipo": "linea_tiempo",
          "titulo": "Línea de tiempo",
          "fuente": null,
          "enlace": null,
          "unidad": null,
          "origen_datos": null,
          "puntos": [
            {
              "x": "2026-08",
              "y": null,
              "etiqueta": "Inflación de agosto se ubicó en 1,7%",
              "descripcion": "El índice de precios de agosto registró una variación mensual de 1,7%.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 103,
                "fin": 109,
                "cita": "agosto"
              },
              "alertas": []
            },
            {
              "x": "2026-09",
              "y": null,
              "etiqueta": "Inflación de septiembre subió a 1,9%",
              "descripcion": "La inflación de septiembre fue de 1,9%, un salto respecto de agosto que interrumpió la tendencia descendente.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 48,
                "fin": 58,
                "cita": "septiembre"
              },
              "alertas": []
            },
            {
              "x": "2026-10",
              "y": null,
              "etiqueta": "LCG: alimentos subieron 0,5% en tercera semana",
              "descripcion": "LCG informó que alimentos y bebidas aumentaron 0,5% en la tercera semana de octubre, séptima semana consecutiva de alzas, con carnes y bebidas como principales impulsores.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 131,
                "fin": 138,
                "cita": "octubre"
              },
              "alertas": []
            },
            {
              "x": "2026-10",
              "y": null,
              "etiqueta": "Eco Go: alimentos subieron 0,59% semanal",
              "descripcion": "Eco Go registró una variación semanal de 0,59% en alimentos durante la tercera semana de octubre y proyectó una suba mensual de 1,8%, con prendas en baja de 1,75%.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 131,
                "fin": 138,
                "cita": "octubre"
              },
              "alertas": []
            },
            {
              "x": "2026-10",
              "y": null,
              "etiqueta": "Invecq: precios subieron 0,9% en tercera semana",
              "descripcion": "La consultora Invecq midió un aumento de precios de 0,9% en la tercera semana de octubre, con un promedio móvil de cuatro semanas de 1,8%.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 131,
                "fin": 138,
                "cita": "octubre"
              },
              "alertas": []
            },
            {
              "x": "2026-10",
              "y": null,
              "etiqueta": "Milei admitió que la inflación baja más lento",
              "descripcion": "En entrevista con Radio Rivadavia, el presidente Javier Milei reconoció que la inflación baja a un ritmo más lento, atribuyéndolo al contexto mundial, el riesgo país sobre 700 p.b. y un menor crecimiento.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 131,
                "fin": 138,
                "cita": "octubre"
              },
              "alertas": []
            },
            {
              "x": "2026-10",
              "y": null,
              "etiqueta": "Consultoras estiman inflación de octubre en 1,8%",
              "descripcion": "Las estimaciones privadas ubican la inflación de octubre en 1,8%, una leve desaceleración que podría ser el segundo dato más bajo del último año.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 131,
                "fin": 138,
                "cita": "octubre"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        },
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "LCG",
              "y": 4.0,
              "etiqueta": "LCG",
              "descripcion": "Consultora que informó un aumento de 0,5% en alimentos y bebidas durante la tercera semana de octubre.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p7",
                "inicio": 1467,
                "fin": 1470,
                "cita": "LCG"
              },
              "alertas": []
            },
            {
              "x": "Gobierno nacional",
              "y": 3.0,
              "etiqueta": "Gobierno nacional",
              "descripcion": "Gobierno que busca mostrar una desaceleración de la inflación en octubre.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 346,
                "fin": 354,
                "cita": "Gobierno"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Gobierno»"
              ]
            },
            {
              "x": "Eco Go",
              "y": 3.0,
              "etiqueta": "Eco Go",
              "descripcion": "Consultora que informó una suba semanal de 0,59% en alimentos y proyectó 1,8% de inflación para octubre.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p7",
                "inicio": 1481,
                "fin": 1487,
                "cita": "Eco Go"
              },
              "alertas": []
            },
            {
              "x": "Invecq",
              "y": 2.0,
              "etiqueta": "Invecq",
              "descripcion": "Consultora que registró un aumento de precios de 0,9% en la tercera semana de octubre.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p7",
                "inicio": 1472,
                "fin": 1478,
                "cita": "Invecq"
              },
              "alertas": []
            },
            {
              "x": "Esteban Domecq",
              "y": 1.0,
              "etiqueta": "Esteban Domecq",
              "descripcion": "Director de la consultora Invecq.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p14",
                "inicio": 3275,
                "fin": 3289,
                "cita": "Esteban Domecq"
              },
              "alertas": []
            },
            {
              "x": "Javier Milei",
              "y": 1.0,
              "etiqueta": "Javier Milei",
              "descripcion": "Presidente que admitió que la inflación baja a un ritmo más lento y lo atribuyó al contexto mundial.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p16",
                "inicio": 3632,
                "fin": 3644,
                "cita": "Javier Milei"
              },
              "alertas": []
            },
            {
              "x": "Radio Rivadavia",
              "y": 1.0,
              "etiqueta": "Radio Rivadavia",
              "descripcion": "Emisora en la que Milei dio la entrevista sobre la inflación.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p16",
                "inicio": 3731,
                "fin": 3746,
                "cita": "Radio Rivadavia"
              },
              "alertas": []
            },
            {
              "x": "Argentina",
              "y": 1.0,
              "etiqueta": "Argentina",
              "descripcion": "País afectado por el escenario mundial a través del riesgo país y los precios.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p16",
                "inicio": 3834,
                "fin": 3843,
                "cita": "Argentina"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [
        {
          "id": "poder_adquisitivo",
          "visual": "lineas",
          "titulo": "Poder adquisitivo entre noviembre de 2023 y agosto de 2026: salario mínimo −40,8%, haber mínimo +10,1% y AUH +102%",
          "unidad": "poder adquisitivo, base 100 = noviembre de 2023",
          "referencia": 100.0,
          "series": [
            {
              "clave": "smvm",
              "nombre": "Salario mínimo, vital y móvil",
              "puntos": [
                {
                  "x": "2023-11",
                  "y": 100.0
                },
                {
                  "x": "2023-12",
                  "y": 85.16218884720254
                },
                {
                  "x": "2024-01",
                  "y": 70.60708522827682
                },
                {
                  "x": "2024-02",
                  "y": 71.9438602489683
                },
                {
                  "x": "2024-03",
                  "y": 73.01771746030799
                },
                {
                  "x": "2024-04",
                  "y": 73.13048550048693
                },
                {
                  "x": "2024-05",
                  "y": 74.41088277411819
                },
                {
                  "x": "2024-06",
                  "y": 71.15391894663428
                },
                {
                  "x": "2024-07",
                  "y": 74.21062252592733
                },
                {
                  "x": "2024-08",
                  "y": 73.53637242706692
                },
                {
                  "x": "2024-09",
                  "y": 72.59372641728487
                },
                {
                  "x": "2024-10",
                  "y": 71.61780176990128
                },
                {
                  "x": "2024-11",
                  "y": 69.92112642848694
                },
                {
                  "x": "2024-12",
                  "y": 70.12248349089005
                },
                {
                  "x": "2025-01",
                  "y": 70.32073294371166
                },
                {
                  "x": "2025-02",
                  "y": 70.04511618656949
                },
                {
                  "x": "2025-03",
                  "y": 68.53955773848726
                },
                {
                  "x": "2025-04",
                  "y": 67.98097013609856
                },
                {
                  "x": "2025-05",
                  "y": 68.21506273377558
                },
                {
                  "x": "2025-06",
                  "y": 68.26090546709328
                },
                {
                  "x": "2025-07",
                  "y": 67.92749286087698
                },
                {
                  "x": "2025-08",
                  "y": 67.55796510500457
                },
                {
                  "x": "2025-09",
                  "y": 66.18401128982825
                },
                {
                  "x": "2025-10",
                  "y": 64.66948866078485
                },
                {
                  "x": "2025-11",
                  "y": 64.36319485074947
                },
                {
                  "x": "2025-12",
                  "y": 63.80218667628333
                },
                {
                  "x": "2026-01",
                  "y": 63.16357485430384
                },
                {
                  "x": "2026-02",
                  "y": 62.4297466586069
                },
                {
                  "x": "2026-03",
                  "y": 61.362188449301705
                },
                {
                  "x": "2026-04",
                  "y": 60.734205459959966
                },
                {
                  "x": "2026-05",
                  "y": 60.32000790375771
                },
                {
                  "x": "2026-06",
                  "y": 59.98577339935194
                },
                {
                  "x": "2026-07",
                  "y": 59.478757720005326
                },
                {
                  "x": "2026-08",
                  "y": 59.167853943704806
                }
              ],
              "cambio_pct": -40.832146056295194
            },
            {
              "clave": "haber",
              "nombre": "Haber mínimo jubilatorio (sin bono)",
              "puntos": [
                {
                  "x": "2023-11",
                  "y": 100.0
                },
                {
                  "x": "2023-12",
                  "y": 96.33745942736549
                },
                {
                  "x": "2024-01",
                  "y": 79.87238586208665
                },
                {
                  "x": "2024-02",
                  "y": 70.53330008762387
                },
                {
                  "x": "2024-03",
                  "y": 80.80757890972019
                },
                {
                  "x": "2024-04",
                  "y": 94.59400852176758
                },
                {
                  "x": "2024-05",
                  "y": 100.79938016809326
                },
                {
                  "x": "2024-06",
                  "y": 104.89839704118442
                },
                {
                  "x": "2024-07",
                  "y": 105.04870634718053
                },
                {
                  "x": "2024-08",
                  "y": 105.4598626690658
                },
                {
                  "x": "2024-09",
                  "y": 106.03144228306583
                },
                {
                  "x": "2024-10",
                  "y": 107.55778081280675
                },
                {
                  "x": "2024-11",
                  "y": 108.65349628087829
                },
                {
                  "x": "2024-12",
                  "y": 108.63857558855653
                },
                {
                  "x": "2025-01",
                  "y": 108.87129639422268
                },
                {
                  "x": "2025-02",
                  "y": 109.18852024238035
                },
                {
                  "x": "2025-03",
                  "y": 107.58922300054633
                },
                {
                  "x": "2025-04",
                  "y": 107.19057015452765
                },
                {
                  "x": "2025-05",
                  "y": 109.54439818947588
                },
                {
                  "x": "2025-06",
                  "y": 110.79602713124632
                },
                {
                  "x": "2025-07",
                  "y": 110.35928335591014
                },
                {
                  "x": "2025-08",
                  "y": 110.08219072615732
                },
                {
                  "x": "2025-09",
                  "y": 109.89242842582118
                },
                {
                  "x": "2025-10",
                  "y": 109.39640426319896
                },
                {
                  "x": "2025-11",
                  "y": 108.97693856041303
                },
                {
                  "x": "2025-12",
                  "y": 108.4415427544424
                },
                {
                  "x": "2026-01",
                  "y": 108.00767996408356
                },
                {
                  "x": "2026-02",
                  "y": 107.9590598113539
                },
                {
                  "x": "2026-03",
                  "y": 107.4341894187729
                },
                {
                  "x": "2026-04",
                  "y": 107.76704363919016
                },
                {
                  "x": "2026-05",
                  "y": 109.06470790809573
                },
                {
                  "x": "2026-06",
                  "y": 109.80666622253497
                },
                {
                  "x": "2026-07",
                  "y": 109.8456239113603
                },
                {
                  "x": "2026-08",
                  "y": 110.095003280277
                }
              ],
              "cambio_pct": 10.095003280276993
            },
            {
              "clave": "auh",
              "nombre": "Asignación Universal por Hijo (monto por hijo)",
              "puntos": [
                {
                  "x": "2023-11",
                  "y": 100.0
                },
                {
                  "x": "2023-12",
                  "y": 96.34032736099782
                },
                {
                  "x": "2024-01",
                  "y": 159.74952727207898
                },
                {
                  "x": "2024-02",
                  "y": 141.07079968029433
                },
                {
                  "x": "2024-03",
                  "y": 161.6189861655332
                },
                {
                  "x": "2024-04",
                  "y": 148.50329300081228
                },
                {
                  "x": "2024-05",
                  "y": 142.55032736101157
                },
                {
                  "x": "2024-06",
                  "y": 192.85789006713043
                },
                {
                  "x": "2024-07",
                  "y": 193.13424382337675
                },
                {
                  "x": "2024-08",
                  "y": 193.89074003661744
                },
                {
                  "x": "2024-09",
                  "y": 194.94229384720475
                },
                {
                  "x": "2024-10",
                  "y": 197.7501654661126
                },
                {
                  "x": "2024-11",
                  "y": 199.7662047227415
                },
                {
                  "x": "2024-12",
                  "y": 199.73980929306734
                },
                {
                  "x": "2025-01",
                  "y": 200.1682522760177
                },
                {
                  "x": "2025-02",
                  "y": 200.7519095301709
                },
                {
                  "x": "2025-03",
                  "y": 197.81220570965982
                },
                {
                  "x": "2025-04",
                  "y": 197.08092155141185
                },
                {
                  "x": "2025-05",
                  "y": 201.4088725553879
                },
                {
                  "x": "2025-06",
                  "y": 203.7106819400247
                },
                {
                  "x": "2025-07",
                  "y": 202.90864739830644
                },
                {
                  "x": "2025-08",
                  "y": 202.40010120990578
                },
                {
                  "x": "2025-09",
                  "y": 202.05137945271773
                },
                {
                  "x": "2025-10",
                  "y": 201.13996851174306
                },
                {
                  "x": "2025-11",
                  "y": 200.36898747801644
                },
                {
                  "x": "2025-12",
                  "y": 199.38496341562916
                },
                {
                  "x": "2026-01",
                  "y": 198.5879517365371
                },
                {
                  "x": "2026-02",
                  "y": 198.49969002220257
                },
                {
                  "x": "2026-03",
                  "y": 197.5346831875491
                },
                {
                  "x": "2026-04",
                  "y": 198.1472570247376
                },
                {
                  "x": "2026-05",
                  "y": 200.53420365831863
                },
                {
                  "x": "2026-06",
                  "y": 201.89956636894973
                },
                {
                  "x": "2026-07",
                  "y": 201.97250798996743
                },
                {
                  "x": "2026-08",
                  "y": 202.4322123192606
                }
              ],
              "cambio_pct": 102.4322123192606
            }
          ],
          "barras": [],
          "fuentes": [
            {
              "nombre": "Salario mínimo, vital y móvil",
              "institucion": "Secretaría de Trabajo",
              "id": "57.1_SMVMM_0_M_34",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=57.1_SMVMM_0_M_34&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-10",
              "rezago_meses": 0,
              "origen_datos": "guardado"
            },
            {
              "nombre": "Haber mínimo jubilatorio (sin bono)",
              "institucion": "ANSES",
              "id": "58.1_MP_0_M_24",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=58.1_MP_0_M_24&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-09",
              "rezago_meses": 1,
              "origen_datos": "guardado"
            },
            {
              "nombre": "Asignación Universal por Hijo (monto por hijo)",
              "institucion": "ANSES",
              "id": "165.1_AAUH_0_0_3",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=165.1_AAUH_0_0_3&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-09",
              "rezago_meses": 1,
              "origen_datos": "guardado"
            },
            {
              "nombre": "IPC nacional, nivel general",
              "institucion": "INDEC",
              "id": "148.3_INIVELNAL_DICI_M_26",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNAL_DICI_M_26&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-08",
              "rezago_meses": 2,
              "origen_datos": "guardado"
            }
          ],
          "como_leerlo": "Cada línea es el monto nominal dividido por el IPC, con el valor de noviembre de 2023 igual a 100. Por debajo de 100 compra menos que en ese mes; por encima, más.",
          "advertencias": [
            "El haber mínimo no incluye el bono previsional.",
            "La AUH cambió de regla entre 2023 y 2024, y eso explica parte del salto.",
            "Se corta en el mes con dato de precios más reciente y en el mes en curso para los montos que fija el Estado.",
            "Los montos del salario mínimo posteriores a octubre de 2026 son escalas ya fijadas, no observadas: no se muestran."
          ],
          "motivos": [
            "inflación (×8)"
          ]
        },
        {
          "id": "cobertura_canasta",
          "visual": "lineas",
          "titulo": "En agosto de 2026 un salario mínimo equivale a 0,72 canastas básicas y un haber mínimo a 0,81 (en septiembre de 2023: 1,14 y 0,85)",
          "unidad": "canastas básicas totales por adulto equivalente",
          "referencia": 1.0,
          "series": [
            {
              "clave": "smvm",
              "nombre": "Salario mínimo",
              "puntos": [
                {
                  "x": "2023-09",
                  "y": 1.14149917342884
                },
                {
                  "x": "2023-10",
                  "y": 1.18124927849831
                },
                {
                  "x": "2023-11",
                  "y": 1.1554173205128437
                },
                {
                  "x": "2023-12",
                  "y": 0.9722501726834721
                },
                {
                  "x": "2024-01",
                  "y": 0.8076764050695984
                },
                {
                  "x": "2024-02",
                  "y": 0.8050350829816747
                },
                {
                  "x": "2024-03",
                  "y": 0.8102716231850196
                },
                {
                  "x": "2024-04",
                  "y": 0.8247828570294296
                },
                {
                  "x": "2024-05",
                  "y": 0.8504527906117813
                },
                {
                  "x": "2024-06",
                  "y": 0.829202492797675
                },
                {
                  "x": "2024-07",
                  "y": 0.8722352208435784
                },
                {
                  "x": "2024-08",
                  "y": 0.8627824912900807
                },
                {
                  "x": "2024-09",
                  "y": 0.858674645959458
                },
                {
                  "x": "2024-10",
                  "y": 0.8505642632443382
                },
                {
                  "x": "2024-11",
                  "y": 0.8379264860655274
                },
                {
                  "x": "2024-12",
                  "y": 0.8437123330589409
                },
                {
                  "x": "2025-01",
                  "y": 0.8570413091812595
                },
                {
                  "x": "2025-02",
                  "y": 0.8541810492530246
                },
                {
                  "x": "2025-03",
                  "y": 0.8336257355434465
                },
                {
                  "x": "2025-04",
                  "y": 0.8423248354745577
                },
                {
                  "x": "2025-05",
                  "y": 0.8574803881965627
                },
                {
                  "x": "2025-06",
                  "y": 0.8582131394512831
                },
                {
                  "x": "2025-07",
                  "y": 0.8543955410984015
                },
                {
                  "x": "2025-08",
                  "y": 0.8571649821910665
                },
                {
                  "x": "2025-09",
                  "y": 0.845458863214392
                },
                {
                  "x": "2025-10",
                  "y": 0.8197239846782894
                },
                {
                  "x": "2025-11",
                  "y": 0.8070727491050684
                },
                {
                  "x": "2025-12",
                  "y": 0.7904955424834688
                },
                {
                  "x": "2026-01",
                  "y": 0.7746018018600846
                },
                {
                  "x": "2026-02",
                  "y": 0.7667121697516662
                },
                {
                  "x": "2026-03",
                  "y": 0.7591101238945701
                },
                {
                  "x": "2026-04",
                  "y": 0.7522289776598505
                },
                {
                  "x": "2026-05",
                  "y": 0.7484079630772209
                },
                {
                  "x": "2026-06",
                  "y": 0.7420973592189052
                },
                {
                  "x": "2026-07",
                  "y": 0.7354152919183014
                },
                {
                  "x": "2026-08",
                  "y": 0.7248183878610973
                }
              ],
              "cambio_pct": -36.50294238200061
            },
            {
              "clave": "haber",
              "nombre": "Haber mínimo",
              "puntos": [
                {
                  "x": "2023-09",
                  "y": 0.8460613876973282
                },
                {
                  "x": "2023-10",
                  "y": 0.7826649878608738
                },
                {
                  "x": "2023-11",
                  "y": 0.6921405585746329
                },
                {
                  "x": "2023-12",
                  "y": 0.6588428365697941
                },
                {
                  "x": "2024-01",
                  "y": 0.5473198449302722
                },
                {
                  "x": "2024-02",
                  "y": 0.47279263181800985
                },
                {
                  "x": "2024-03",
                  "y": 0.5371677083265078
                },
                {
                  "x": "2024-04",
                  "y": 0.6390873540309857
                },
                {
                  "x": "2024-05",
                  "y": 0.6901238568445308
                },
                {
                  "x": "2024-06",
                  "y": 0.7322949707955891
                },
                {
                  "x": "2024-07",
                  "y": 0.7396285703959812
                },
                {
                  "x": "2024-08",
                  "y": 0.741210815883358
                },
                {
                  "x": "2024-09",
                  "y": 0.7513108205117199
                },
                {
                  "x": "2024-10",
                  "y": 0.7652148748009607
                },
                {
                  "x": "2024-11",
                  "y": 0.7800036470326516
                },
                {
                  "x": "2024-12",
                  "y": 0.7830267464332222
                },
                {
                  "x": "2025-01",
                  "y": 0.7948536748533341
                },
                {
                  "x": "2025-02",
                  "y": 0.7976355057235733
                },
                {
                  "x": "2025-03",
                  "y": 0.7838879932247689
                },
                {
                  "x": "2025-04",
                  "y": 0.7956173666225527
                },
                {
                  "x": "2025-05",
                  "y": 0.8248776038559129
                },
                {
                  "x": "2025-06",
                  "y": 0.8344546286893204
                },
                {
                  "x": "2025-07",
                  "y": 0.8315295451886925
                },
                {
                  "x": "2025-08",
                  "y": 0.8366818536602689
                },
                {
                  "x": "2025-09",
                  "y": 0.8409353169618713
                },
                {
                  "x": "2025-10",
                  "y": 0.8306664852412133
                },
                {
                  "x": "2025-11",
                  "y": 0.8185875194702615
                },
                {
                  "x": "2025-12",
                  "y": 0.8048500490400013
                },
                {
                  "x": "2026-01",
                  "y": 0.7934542013504468
                },
                {
                  "x": "2026-02",
                  "y": 0.7942464884118353
                },
                {
                  "x": "2026-03",
                  "y": 0.7961627974130027
                },
                {
                  "x": "2026-04",
                  "y": 0.7995729618378977
                },
                {
                  "x": "2026-05",
                  "y": 0.8106188080322853
                },
                {
                  "x": "2026-06",
                  "y": 0.8137607811432214
                },
                {
                  "x": "2026-07",
                  "y": 0.8135962765552508
                },
                {
                  "x": "2026-08",
                  "y": 0.8079163909864387
                }
              ],
              "cambio_pct": -4.5085377096224954
            }
          ],
          "barras": [],
          "fuentes": [
            {
              "nombre": "Salario mínimo, vital y móvil",
              "institucion": "Secretaría de Trabajo",
              "id": "57.1_SMVMM_0_M_34",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=57.1_SMVMM_0_M_34&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-10",
              "rezago_meses": 0,
              "origen_datos": "guardado"
            },
            {
              "nombre": "Haber mínimo jubilatorio (sin bono)",
              "institucion": "ANSES",
              "id": "58.1_MP_0_M_24",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=58.1_MP_0_M_24&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-09",
              "rezago_meses": 1,
              "origen_datos": "guardado"
            },
            {
              "nombre": "Canasta básica total (por adulto equivalente)",
              "institucion": "INDEC",
              "id": "150.1_CSTA_BATAL_0_D_20",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BATAL_0_D_20&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-08",
              "rezago_meses": 2,
              "origen_datos": "guardado"
            }
          ],
          "como_leerlo": "Cada línea es cuántas canastas básicas totales (por adulto equivalente) equivale el ingreso de un mes. 1 es una canasta completa.",
          "advertencias": [
            "La canasta es por adulto equivalente; el salario mínimo y el haber son ingresos individuales.",
            "El haber mínimo no incluye el bono previsional.",
            "Los montos del salario mínimo posteriores a octubre de 2026 son escalas ya fijadas, no observadas: no se muestran."
          ],
          "motivos": [
            "inflación (×8)",
            "canasta (×2)"
          ]
        }
      ],
      "avisos": []
    }
  },
  "02": {
    "titulo": "La inflación se resiste a bajar del 2%",
    "cuerpo": "La inflación argentina parece encontrar dificultades para profundizar su desaceleración. Después de alcanzar el 1,7% mensual en agosto, el índice de precios al consumidor volvió a subir en septiembre, cuando fue 1,9%, y las primeras estimaciones privadas para octubre anticipan un resultado similar.\n\nAunque el ritmo de aumento de los precios se mantiene por debajo del 2%, los economistas no esperan una reducción significativa en los últimos meses de 2026 y advierten que el escenario de 2027 dependerá, en buena medida, de la evolución del dólar, los precios internacionales de la energía y la incertidumbre propia de un año electoral.\n\nEl próximo dato oficial se conocerá el 12 de noviembre, cuando el Indec publique la inflación correspondiente a octubre. Por ahora, los relevamientos de las consultoras privadas ubican el incremento mensual entre 1,8% y 2%, prácticamente en línea con septiembre. La estacionalidad, que habitualmente presiona sobre los precios durante determinados meses del año, también aparece entre los factores que explican las dificultades para consolidar una trayectoria descendente.\n\nLa estacionalidad también aparece entre los factores que explican las dificultades para consolidar una trayectoria descendente\n\nLa relativa estabilidad de los últimos registros convive con dos fuerzas contrapuestas:\n\n- La debilidad de la demanda limita la capacidad de las empresas para trasladar mayores costos a los consumidores.\n\n- La inercia de los ajustes de tarifas y combustibles y determinados aumentos estacionales impiden que el índice general descienda con mayor rapidez.\n\nSegún Lorenzo Sigaut Gravina, economista del centro de estudios Equilibra, la inflación de octubre se ubicaría en torno al 1,9%, después de que la tercera semana mostrara un incremento algo superior al previsto inicialmente por la consultora. El economista explicó que el relevamiento semanal registró una variación del 0,4%, frente al 0,3% esperado, principalmente por aumentos en verduras e indumentaria asociados, en este último caso, al cambio de temporada.\n\nSigaut Gravina consideró que un resultado del 2% representaría una dificultad adicional para el Gobierno. Para noviembre, estimó que el índice podría mantenerse ligeramente por debajo de ese umbral, aunque advirtió sobre las presiones habituales de fin de año.\n\nDesde Analytica, el economista Claudio Caprarulo también proyectó una inflación cercana al 2% para octubre, en línea con el registro de septiembre. Explicó que los aumentos de alimentos y bebidas relevados durante las primeras dos semanas del mes resultaron similares a los del período anterior, mientras que los ajustes tarifarios continuaron en niveles cercanos al promedio de 2,3% mensual que registra la categoría de precios regulados.\n\nQué muestran los precios de octubre\n\nLos últimos datos de Eco Go reflejan las diferencias entre la evolución del índice general y el comportamiento de algunos rubros de consumo cotidiano. La consultora proyectó una inflación mensual del 1,8% para octubre, bajo el supuesto de aumentos del 0,5% en cada una de las semanas restantes. Sin embargo, detrás de ese promedio aparecen movimientos de precios muy diferentes.\n\nLos alimentos y bebidas no alcohólicas aumentaron 0,59% en la tercera semana, casi cinco veces más que el nivel general. Los mayores incrementos se concentraron en panificados y cereales, con 2,1%; frutas, con 1,7%; azúcar y dulces, con 1,2%; y verduras, con 0,8%. En cambio, los lácteos y huevos retrocedieron 0,5%, mientras que las carnes prácticamente no registraron variaciones.\n\nLa caída de los precios de la indumentaria resultó determinante para contener el índice semanal. El rubro prendas de vestir y calzado bajó 1,75%, impulsado por reducciones del 7,1% en pantalones y del 4,2% en calzado.\n\nEn sentido contrario, los servicios registraron aumentos importantes. Los pasajes aéreos subieron 6,4%, el alojamiento 5,3% y las naftas y peajes 2,7%. Eco Go estimó incrementos del 3% en restaurantes y hoteles, del 2,6% en prendas de vestir y calzado y del 2,4% en alimentos y bebidas no alcohólicas.\n\nLa carne y los combustibles pueden meter ruido y hacer que la inflación esté más cerca del 2% que del 1,5% (Menescaldi)\n\nSebastián Menescaldi, economista de Eco Go, dijo a Infobae que la consultora espera una inflación de entre 1,8% y 1,9% para octubre, sin grandes diferencias respecto de septiembre. Para los próximos meses, consideró probable que la suba del índice continúe oscilando entre 1,5% y 2%, con mayor cercanía al límite superior de ese rango por las presiones que podrían ejercer algunos alimentos y los combustibles.\n\nLas presiones que pueden aparecer antes de diciembre\n\nLa evolución de la carne constituye uno de los principales factores de atención para los próximos meses. Aunque los precios minoristas prácticamente no variaron durante la tercera semana de octubre, los mayoristas acumularon tres semanas consecutivas de aumentos, con una suba del 3,6% en ese período, según Eco Go.\n\nMenescaldi advirtió que noviembre suele presentar presiones estacionales sobre el precio de la carne, a las que podrían sumarse factores climáticos que afecten la producción y la salida de animales. También mencionó la posibilidad de nuevos ajustes en los combustibles.\n\nA esas presiones se suma la evolución de los precios mayoristas. Claudio Caprarulo destacó que el índice mayorista se aceleró hasta el 3,2% en septiembre, impulsado especialmente por los costos de combustibles y energía, una dinámica que podría generar nuevos aumentos en los próximos meses. “Para noviembre y diciembre esperamos que la inflación oscile entre 1,7% y 2%”, sostuvo el economista de Analytica.\n\nLas estimaciones para el cierre de 2026 muestran diferencias acotadas. Equilibra proyecta una inflación anual de entre 30% y 31%, mientras que Eco Go espera un resultado cercano al 30%, aunque ligeramente inferior a ese nivel. En ambos casos, las previsiones suponen que el ritmo mensual de aumento de los precios continuará relativamente estable hasta diciembre.\n\nPara noviembre y diciembre esperamos que la inflación oscile entre 1,7% y 2% (Caprarulo)\n\nPara Menescaldi, el comportamiento de la demanda resulta central para entender esa estabilidad. La debilidad del consumo restringe la posibilidad de convalidar incrementos mayores, pero la persistencia de la inercia inflacionaria dificulta una reducción más pronunciada.\n\nEl economista Gabriel Caamaño coincidió en que, si no aparecen sorpresas negativas, la inflación podría mantenerse entre 1,7% y 2% mensual durante lo que resta del año. En este sentido, consideró que el margen de la política económica para modificar significativamente esa trayectoria en el corto plazo resulta limitado. “La ventana para bajar la inflación este año ya se cerró; intervenir precios sería contraproducente”, afirmó.\n\nSegún su análisis, una definición más clara del régimen monetario podría contribuir a mejorar el anclaje de las expectativas, pero difícilmente tendría efectos inmediatos sobre los índices de noviembre y diciembre. Otras alternativas, como contener artificialmente las tarifas, podrían generar dificultades posteriores.\n\nEl dólar y las elecciones\n\nLa perspectiva para el próximo año incorpora un elemento de incertidumbre adicional: las elecciones de 2027 y su posible impacto sobre la demanda de dólares. Los economistas coinciden en que la evolución del tipo de cambio será uno de los factores centrales para determinar si la inflación consigue desacelerarse o permanece cerca de los niveles actuales.\n\nAunque la Argentina registra un superávit comercial importante, la compra de divisas por parte de los particulares podría intensificarse ante la incertidumbre electoral (Sigaut Gravina)\n\nSigaut Gravina explicó que, aunque la Argentina registra un superávit comercial importante, la compra de divisas por parte de los particulares podría intensificarse ante la incertidumbre electoral. En ese escenario, el dólar podría acercarse al techo de la banda cambiaria y generar nuevas presiones sobre los precios, incluso si el traslado de la depreciación a la inflación resulta relativamente bajo.\n\nEl economista de Equilibra considera que la inflación de 2027 podría ubicarse entre 25% y 30% si coinciden presiones cambiarias y precios internacionales de la energía elevados. En cambio, un escenario más favorable, con menores tensiones sobre el dólar y una reducción del precio del petróleo, permitiría pensar en un índice cercano al 20% anual.\n\nActualmente, el barril se encuentra por encima de los USD 110, por lo que un eventual regreso hacia los USD 70 contribuiría a reducir las presiones inflacionarias, según Lorenzo Sigaut Gravina. No obstante, aclaró que se trata de un factor externo sobre el cual la política económica argentina tiene escaso margen de intervención.\n\nClaudio Caprarulo también identificó la estabilidad cambiaria como una condición necesaria para sostener la desaceleración. Según explicó, si el Gobierno logra contener las presiones sobre el tipo de cambio y la inflación mensual se mantiene ligeramente por debajo del 2%, el incremento acumulado durante 2027 podría rondar el 25 por ciento.\n\nMenescaldi, a su vez, planteó que las proyecciones para el próximo año dependen del escenario político y financiero. Bajo el supuesto de continuidad de un gobierno con orientación favorable al mercado, consideró que las estimaciones podrían variar alrededor de cinco puntos porcentuales respecto del nivel con el que termine 2026, según las condiciones que prevalezcan. De ganar en primera vuelta el presidente Javier Milei, podría cerrar más cerca de 25%, pero si va a un ballotage con un candidato opuesto ideológicamente, la inflación podría superar el 35%, sostuvo.\n\nUna eventual normalización de la región, acompañada por una reducción de los costos energéticos, podría favorecer una desaceleración más rápida de la inflación (Caamaño)\n\nCaamaño también resaltó que el contexto político y cambiario será determinante, pero puso especial atención en los precios internacionales de la energía y la evolución del conflicto en Medio Oriente. Una eventual normalización de la región, acompañada por una reducción de los costos energéticos, podría favorecer una desaceleración más rápida de la inflación.\n\nEl economista sostuvo que una definición más precisa del régimen monetario y una mejor comunicación de sus objetivos podrían contribuir a ordenar las expectativas. También mencionó la posibilidad de coordinar pautas futuras de salarios y tarifas, aunque consideró que el calendario electoral reduce el margen para que esas medidas produzcan resultados en el corto plazo.\n\nEn relación con el tipo de cambio, Sigaut Gravina planteó distintos escenarios para el período electoral. Uno contempla una mayor demanda de dólares que provoque un incremento sostenido de la cotización, con efectos sobre los precios internos. Otro supone que las presiones cambiarias resulten transitorias y que, una vez superada la incertidumbre electoral, el dólar retroceda, como ocurrió después de las elecciones de 2025.\n\nPara el economista de Equilibra, esa diferencia será importante para determinar el resultado inflacionario de 2027. Su escenario central contempla una inflación inferior a la de 2026, aunque no demasiado alejada del 25% anual, mientras que una reducción hacia el 20% dependerá de una combinación de condiciones cambiarias e internacionales más favorables.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "El índice de precios al consumidor de Argentina registró una inflación mensual del 1,7% en agosto."
          },
          {
            "text": "La inflación mensual de Argentina fue del 1,9% en septiembre."
          },
          {
            "text": "El Indec publicará la inflación de octubre el 12 de noviembre."
          },
          {
            "text": "Los relevamientos de consultoras privadas ubican la inflación de octubre entre 1,8% y 2% mensual."
          },
          {
            "text": "Según Lorenzo Sigaut Gravina, de Equilibra, la inflación de octubre se ubicaría en torno al 1,9%."
          },
          {
            "text": "El relevamiento semanal de Equilibra registró una variación de precios del 0,4% en la tercera semana de octubre, frente al 0,3% esperado, por aumentos en verduras e indumentaria."
          },
          {
            "text": "Claudio Caprarulo, de Analytica, proyectó una inflación cercana al 2% para octubre."
          },
          {
            "text": "La categoría de precios regulados registra un promedio de aumento de 2,3% mensual, según Analytica."
          },
          {
            "text": "Eco Go proyectó una inflación mensual del 1,8% para octubre, suponiendo aumentos del 0,5% en cada semana restante."
          },
          {
            "text": "Los alimentos y bebidas no alcohólicas aumentaron 0,59% en la tercera semana de octubre, casi cinco veces más que el nivel general, según Eco Go."
          },
          {
            "text": "En la tercera semana de octubre, panificados y cereales subieron 2,1%, frutas 1,7%, azúcar y dulces 1,2% y verduras 0,8%, mientras lácteos y huevos bajaron 0,5%."
          },
          {
            "text": "El rubro prendas de vestir y calzado bajó 1,75% en la semana, con caídas del 7,1% en pantalones y del 4,2% en calzado."
          },
          {
            "text": "Los pasajes aéreos subieron 6,4%, el alojamiento 5,3% y las naftas y peajes 2,7%."
          },
          {
            "text": "Eco Go estimó para octubre incrementos del 3% en restaurantes y hoteles, 2,6% en prendas de vestir y calzado y 2,4% en alimentos y bebidas no alcohólicas."
          },
          {
            "text": "Sebastián Menescaldi, de Eco Go, dijo a Infobae que espera una inflación de entre 1,8% y 1,9% para octubre."
          },
          {
            "text": "Los precios mayoristas de la carne acumularon tres semanas consecutivas de aumentos, con una suba del 3,6%, según Eco Go."
          },
          {
            "text": "El índice de precios mayoristas se aceleró al 3,2% en septiembre, impulsado por combustibles y energía."
          },
          {
            "text": "Caprarulo afirmó: \"Para noviembre y diciembre esperamos que la inflación oscile entre 1,7% y 2%\"."
          },
          {
            "text": "Equilibra proyecta una inflación anual de entre 30% y 31% para 2026, y Eco Go una cercana pero ligeramente inferior al 30%."
          },
          {
            "text": "Gabriel Caamaño afirmó: \"La ventana para bajar la inflación este año ya se cerró; intervenir precios sería contraproducente\"."
          },
          {
            "text": "Sigaut Gravina estima que la inflación de 2027 podría ubicarse entre 25% y 30% con presiones cambiarias y energía cara, o cerca del 20% en un escenario favorable."
          },
          {
            "text": "El barril de petróleo se encuentra por encima de los USD 110."
          },
          {
            "text": "Según Caprarulo, si se contienen las presiones cambiarias, la inflación acumulada de 2027 podría rondar el 25%."
          },
          {
            "text": "Menescaldi sostuvo que si Javier Milei gana en primera vuelta la inflación podría cerrar cerca del 25%, pero con un ballotage ante un candidato opuesto podría superar el 35%."
          },
          {
            "text": "El dólar retrocedió después de las elecciones de 2025 una vez superada la incertidumbre electoral."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Instituto Nacional de Estadística y Censos (Indec)",
            "mentions": 1
          },
          {
            "name": "Lorenzo Sigaut Gravina",
            "mentions": 9
          },
          {
            "name": "Equilibra",
            "mentions": 4
          },
          {
            "name": "Claudio Caprarulo",
            "mentions": 5
          },
          {
            "name": "Analytica",
            "mentions": 2
          },
          {
            "name": "Eco Go",
            "mentions": 6
          },
          {
            "name": "Sebastián Menescaldi",
            "mentions": 6
          },
          {
            "name": "Infobae",
            "mentions": 1
          },
          {
            "name": "Gabriel Caamaño",
            "mentions": 4
          },
          {
            "name": "Javier Milei",
            "mentions": 1
          },
          {
            "name": "Argentina",
            "mentions": 3
          },
          {
            "name": "Medio Oriente",
            "mentions": 1
          },
          {
            "name": "Elecciones de 2027",
            "mentions": 4
          },
          {
            "name": "Elecciones de 2025",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Elecciones de 2025 y posterior retroceso del dólar"
          },
          {
            "title": "Inflación de agosto llega al 1,7%"
          },
          {
            "title": "La inflación sube al 1,9% en septiembre"
          },
          {
            "title": "Índice mayorista se acelera al 3,2%"
          },
          {
            "title": "Consultoras estiman inflación de octubre entre 1,8% y 2%"
          },
          {
            "title": "Tercera semana de octubre muestra suba del 0,4%"
          },
          {
            "title": "Precios mayoristas de la carne suben 3,6% en tres semanas"
          },
          {
            "title": "Indec publicará la inflación de octubre"
          },
          {
            "title": "Proyección de inflación para noviembre y diciembre"
          },
          {
            "title": "Cierre de 2026 con inflación anual cercana al 30%"
          },
          {
            "title": "Elecciones de 2027 y proyecciones de inflación"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 24,
            "ok": 46
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "La inflación mensual de Argentina fue del 1,9% en septiembre."
              },
              "resultado": "coincide",
              "serie": {
                "nombre": "Inflación mensual (IPC)",
                "valor": 1.9
              }
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El índice de precios al consumidor de Argentina registró una inflación mensual del 1,7% en agosto."
              },
              "resultado": "coincide",
              "serie": {
                "nombre": "Inflación mensual (IPC)",
                "valor": 1.7
              }
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El Indec publicará la inflación de octubre el 12 de noviembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Los relevamientos de consultoras privadas ubican la inflación de octubre entre 1,8% y 2% mensual."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El relevamiento semanal de Equilibra registró una variación de precios del 0,4% en la tercera semana de octubre, frente al 0,3% esperado, por aumentos en verduras e indumentaria."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según Lorenzo Sigaut Gravina, de Equilibra, la inflación de octubre se ubicaría en torno al 1,9%."
              },
              "resultado": "sin_dato_oficial",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La categoría de precios regulados registra un promedio de aumento de 2,3% mensual, según Analytica."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Claudio Caprarulo, de Analytica, proyectó una inflación cercana al 2% para octubre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Eco Go proyectó una inflación mensual del 1,8% para octubre, suponiendo aumentos del 0,5% en cada semana restante."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Los alimentos y bebidas no alcohólicas aumentaron 0,59% en la tercera semana de octubre, casi cinco veces más que el nivel general, según Eco Go."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En la tercera semana de octubre, panificados y cereales subieron 2,1%, frutas 1,7%, azúcar y dulces 1,2% y verduras 0,8%, mientras lácteos y huevos bajaron 0,5%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El rubro prendas de vestir y calzado bajó 1,75% en la semana, con caídas del 7,1% en pantalones y del 4,2% en calzado."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Los pasajes aéreos subieron 6,4%, el alojamiento 5,3% y las naftas y peajes 2,7%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Eco Go estimó para octubre incrementos del 3% en restaurantes y hoteles, 2,6% en prendas de vestir y calzado y 2,4% en alimentos y bebidas no alcohólicas."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Sebastián Menescaldi, de Eco Go, dijo a Infobae que espera una inflación de entre 1,8% y 1,9% para octubre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Los precios mayoristas de la carne acumularon tres semanas consecutivas de aumentos, con una suba del 3,6%, según Eco Go."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El índice de precios mayoristas se aceleró al 3,2% en septiembre, impulsado por combustibles y energía."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Equilibra proyecta una inflación anual de entre 30% y 31% para 2026, y Eco Go una cercana pero ligeramente inferior al 30%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Caprarulo afirmó: \"Para noviembre y diciembre esperamos que la inflación oscile entre 1,7% y 2%\"."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Sigaut Gravina estima que la inflación de 2027 podría ubicarse entre 25% y 30% con presiones cambiarias y energía cara, o cerca del 20% en un escenario favorable."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El barril de petróleo se encuentra por encima de los USD 110."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según Caprarulo, si se contienen las presiones cambiarias, la inflación acumulada de 2027 podría rondar el 25%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Menescaldi sostuvo que si Javier Milei gana en primera vuelta la inflación podría cerrar cerca del 25%, pero con un ballotage ante un candidato opuesto podría superar el 35%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "serie-bcra-27",
          "tipo": "serie",
          "titulo": "Inflación mensual (IPC)",
          "fuente": "bcra",
          "enlace": "https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/27",
          "unidad": "porcentaje",
          "origen_datos": "guardado",
          "puntos": [
            {
              "x": "2026-01-31",
              "y": 2.9,
              "etiqueta": "2026-01-31",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-02-28",
              "y": 2.9,
              "etiqueta": "2026-02-28",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-03-31",
              "y": 3.4,
              "etiqueta": "2026-03-31",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-04-30",
              "y": 2.6,
              "etiqueta": "2026-04-30",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-05-31",
              "y": 2.1,
              "etiqueta": "2026-05-31",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-06-30",
              "y": 1.9,
              "etiqueta": "2026-06-30",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-07-31",
              "y": 2.1,
              "etiqueta": "2026-07-31",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-08-31",
              "y": 1.7,
              "etiqueta": "2026-08-31",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-09-30",
              "y": 1.9,
              "etiqueta": "2026-09-30",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            },
            {
              "x": "2026-10",
              "y": null,
              "etiqueta": "Sin dato oficial",
              "descripcion": null,
              "grupo": null,
              "precision": null,
              "cita": null,
              "alertas": []
            }
          ],
          "marcas": [
            {
              "tarjeta_id": "e2eaaad86b",
              "x": "2026-09-30",
              "y": 1.9,
              "texto": "La inflación mensual de Argentina fue del 1,9% en septiembre.",
              "resultado": "coincide",
              "valor_serie": 1.9,
              "diferencia": 0.0,
              "enlace": "https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/27",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 0,
                "fin": 299,
                "cita": "La inflación argentina parece encontrar dificultades para profundizar su desaceleración. Después de alcanzar el 1,7% mensual en agosto, el índice de precios al consumidor volvió a subir en septiembre, cuando fue 1,9%, y las primeras estimaciones privadas para octubre anticipan un resultado similar."
              },
              "advertencias": [
                "datos de la copia guardada (último dato 2026-09-30)"
              ]
            },
            {
              "tarjeta_id": "ff182c864b",
              "x": "2026-08-31",
              "y": 1.7,
              "texto": "El índice de precios al consumidor de Argentina registró una inflación mensual del 1,7% en agosto.",
              "resultado": "coincide",
              "valor_serie": 1.7,
              "diferencia": 0.0,
              "enlace": "https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/27",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 0,
                "fin": 299,
                "cita": "La inflación argentina parece encontrar dificultades para profundizar su desaceleración. Después de alcanzar el 1,7% mensual en agosto, el índice de precios al consumidor volvió a subir en septiembre, cuando fue 1,9%, y las primeras estimaciones privadas para octubre anticipan un resultado similar."
              },
              "advertencias": [
                "datos de la copia guardada (último dato 2026-09-30)"
              ]
            },
            {
              "tarjeta_id": "fc6c5eb3b7",
              "x": "2026-10",
              "y": 1.9,
              "texto": "Según Lorenzo Sigaut Gravina, de Equilibra, la inflación de octubre se ubicaría en torno al 1,9%.",
              "resultado": "sin_dato_oficial",
              "valor_serie": null,
              "diferencia": null,
              "enlace": null,
              "cita": {
                "parrafo_id": "p8",
                "inicio": 1598,
                "fin": 1840,
                "cita": "Según Lorenzo Sigaut Gravina, economista del centro de estudios Equilibra, la inflación de octubre se ubicaría en torno al 1,9%, después de que la tercera semana mostrara un incremento algo superior al previsto inicialmente por la consultora."
              },
              "advertencias": [
                "datos de la copia guardada (último dato 2026-09-30)",
                "el período 2026-10 es posterior al último dato publicado (2026-09-30)"
              ]
            }
          ],
          "avisos": []
        },
        {
          "id": "linea-tiempo",
          "tipo": "linea_tiempo",
          "titulo": "Línea de tiempo",
          "fuente": null,
          "enlace": null,
          "unidad": null,
          "origen_datos": null,
          "puntos": [
            {
              "x": "2025",
              "y": null,
              "etiqueta": "Elecciones de 2025 y posterior retroceso del dólar",
              "descripcion": "Tras las elecciones de 2025, superada la incertidumbre electoral, el dólar retrocedió, según recordó Sigaut Gravina.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p38",
                "inicio": 11048,
                "fin": 11052,
                "cita": "2025"
              },
              "alertas": []
            },
            {
              "x": "2026-08",
              "y": null,
              "etiqueta": "Inflación de agosto llega al 1,7%",
              "descripcion": "El índice de precios al consumidor alcanzó el 1,7% mensual en agosto, su registro más bajo reciente.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 128,
                "fin": 134,
                "cita": "agosto"
              },
              "alertas": []
            },
            {
              "x": "2026-09",
              "y": null,
              "etiqueta": "La inflación sube al 1,9% en septiembre",
              "descripcion": "El índice de precios al consumidor volvió a subir en septiembre y se ubicó en 1,9% mensual.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 189,
                "fin": 199,
                "cita": "septiembre"
              },
              "alertas": []
            },
            {
              "x": "2026-09",
              "y": null,
              "etiqueta": "Índice mayorista se acelera al 3,2%",
              "descripcion": "El índice de precios mayoristas se aceleró hasta el 3,2% en septiembre, impulsado por combustibles y energía.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 189,
                "fin": 199,
                "cita": "septiembre"
              },
              "alertas": []
            },
            {
              "x": "2026-10",
              "y": null,
              "etiqueta": "Consultoras estiman inflación de octubre entre 1,8% y 2%",
              "descripcion": "Los relevamientos privados ubican la inflación de octubre entre 1,8% y 2%, en línea con septiembre. Equilibra la estima en 1,9% y Eco Go en 1,8%.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 260,
                "fin": 267,
                "cita": "octubre"
              },
              "alertas": []
            },
            {
              "x": "2026-10",
              "y": null,
              "etiqueta": "Tercera semana de octubre muestra suba del 0,4%",
              "descripcion": "El relevamiento semanal de Equilibra registró una variación del 0,4% frente al 0,3% esperado, por aumentos en verduras e indumentaria.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 260,
                "fin": 267,
                "cita": "octubre"
              },
              "alertas": []
            },
            {
              "x": "2026-10",
              "y": null,
              "etiqueta": "Precios mayoristas de la carne suben 3,6% en tres semanas",
              "descripcion": "Según Eco Go, los precios mayoristas de la carne acumularon tres semanas consecutivas de aumentos hasta la tercera semana de octubre.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 260,
                "fin": 267,
                "cita": "octubre"
              },
              "alertas": []
            },
            {
              "x": "2026-11",
              "y": null,
              "etiqueta": "Proyección de inflación para noviembre y diciembre",
              "descripcion": "Los economistas esperan que la inflación oscile entre 1,7% y 2% mensual en noviembre y diciembre, con presiones estacionales en la carne y posibles ajustes de combustibles.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p3",
                "inicio": 685,
                "fin": 694,
                "cita": "noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-11-12",
              "y": null,
              "etiqueta": "Indec publicará la inflación de octubre",
              "descripcion": "El Indec dará a conocer el dato oficial de inflación correspondiente a octubre.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p3",
                "inicio": 679,
                "fin": 694,
                "cita": "12 de noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-12",
              "y": null,
              "etiqueta": "Cierre de 2026 con inflación anual cercana al 30%",
              "descripcion": "Equilibra proyecta una inflación anual de 30% a 31% para 2026 y Eco Go un resultado ligeramente inferior al 30%.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p18",
                "inicio": 4663,
                "fin": 4672,
                "cita": "diciembre"
              },
              "alertas": []
            },
            {
              "x": "2027",
              "y": null,
              "etiqueta": "Elecciones de 2027 y proyecciones de inflación",
              "descripcion": "Las elecciones de 2027 podrían presionar la demanda de dólares; las proyecciones de inflación anual van del 20% a más del 35% según el escenario político y cambiario.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p2",
                "inicio": 490,
                "fin": 494,
                "cita": "2027"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        },
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Eco Go",
              "y": 5.0,
              "etiqueta": "Eco Go",
              "descripcion": "Consultora que proyectó una inflación de 1,8% para octubre y releva precios semanales.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p12",
                "inicio": 2822,
                "fin": 2828,
                "cita": "Eco Go"
              },
              "alertas": []
            },
            {
              "x": "Argentina",
              "y": 4.0,
              "etiqueta": "Argentina",
              "descripcion": "País cuya inflación es analizada en el artículo.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 13,
                "fin": 22,
                "cita": "argentina"
              },
              "alertas": []
            },
            {
              "x": "Equilibra",
              "y": 4.0,
              "etiqueta": "Equilibra",
              "descripcion": "Centro de estudios que proyecta una inflación anual 2026 de entre 30% y 31%.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p8",
                "inicio": 1662,
                "fin": 1671,
                "cita": "Equilibra"
              },
              "alertas": []
            },
            {
              "x": "Claudio Caprarulo",
              "y": 3.0,
              "etiqueta": "Claudio Caprarulo",
              "descripcion": "Economista de Analytica que proyecta inflación cercana al 2% y alrededor del 25% para 2027.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p10",
                "inicio": 2354,
                "fin": 2371,
                "cita": "Claudio Caprarulo"
              },
              "alertas": []
            },
            {
              "x": "Lorenzo Sigaut Gravina",
              "y": 2.0,
              "etiqueta": "Lorenzo Sigaut Gravina",
              "descripcion": "Economista de Equilibra que proyecta una inflación de octubre cercana al 1,9% y analiza escenarios para 2027.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p8",
                "inicio": 1604,
                "fin": 1626,
                "cita": "Lorenzo Sigaut Gravina"
              },
              "alertas": []
            },
            {
              "x": "Analytica",
              "y": 2.0,
              "etiqueta": "Analytica",
              "descripcion": "Consultora económica donde trabaja Claudio Caprarulo.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p10",
                "inicio": 2329,
                "fin": 2338,
                "cita": "Analytica"
              },
              "alertas": []
            },
            {
              "x": "Instituto Nacional de Estadística y Censos (Indec)",
              "y": 1.0,
              "etiqueta": "Instituto Nacional de Estadística y Censos (Indec)",
              "descripcion": "Organismo oficial que publicará el 12 de noviembre la inflación de octubre.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 706,
                "fin": 711,
                "cita": "Indec"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Indec»"
              ]
            },
            {
              "x": "Sebastián Menescaldi",
              "y": 1.0,
              "etiqueta": "Sebastián Menescaldi",
              "descripcion": "Economista de Eco Go que espera inflación de entre 1,8% y 1,9% en octubre y analiza escenarios electorales.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p17",
                "inicio": 4208,
                "fin": 4228,
                "cita": "Sebastián Menescaldi"
              },
              "alertas": []
            },
            {
              "x": "Infobae",
              "y": 1.0,
              "etiqueta": "Infobae",
              "descripcion": "Medio al que Menescaldi brindó declaraciones.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p17",
                "inicio": 4259,
                "fin": 4266,
                "cita": "Infobae"
              },
              "alertas": []
            },
            {
              "x": "Gabriel Caamaño",
              "y": 1.0,
              "etiqueta": "Gabriel Caamaño",
              "descripcion": "Economista que estima inflación entre 1,7% y 2% mensual y destaca el impacto de la energía y Medio Oriente.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p25",
                "inicio": 6412,
                "fin": 6427,
                "cita": "Gabriel Caamaño"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [
        {
          "id": "poder_adquisitivo",
          "visual": "lineas",
          "titulo": "Poder adquisitivo entre noviembre de 2023 y agosto de 2026: salario mínimo −40,8%, haber mínimo +10,1% y AUH +102%",
          "unidad": "poder adquisitivo, base 100 = noviembre de 2023",
          "referencia": 100.0,
          "series": [
            {
              "clave": "smvm",
              "nombre": "Salario mínimo, vital y móvil",
              "puntos": [
                {
                  "x": "2023-11",
                  "y": 100.0
                },
                {
                  "x": "2023-12",
                  "y": 85.16218884720254
                },
                {
                  "x": "2024-01",
                  "y": 70.60708522827682
                },
                {
                  "x": "2024-02",
                  "y": 71.9438602489683
                },
                {
                  "x": "2024-03",
                  "y": 73.01771746030799
                },
                {
                  "x": "2024-04",
                  "y": 73.13048550048693
                },
                {
                  "x": "2024-05",
                  "y": 74.41088277411819
                },
                {
                  "x": "2024-06",
                  "y": 71.15391894663428
                },
                {
                  "x": "2024-07",
                  "y": 74.21062252592733
                },
                {
                  "x": "2024-08",
                  "y": 73.53637242706692
                },
                {
                  "x": "2024-09",
                  "y": 72.59372641728487
                },
                {
                  "x": "2024-10",
                  "y": 71.61780176990128
                },
                {
                  "x": "2024-11",
                  "y": 69.92112642848694
                },
                {
                  "x": "2024-12",
                  "y": 70.12248349089005
                },
                {
                  "x": "2025-01",
                  "y": 70.32073294371166
                },
                {
                  "x": "2025-02",
                  "y": 70.04511618656949
                },
                {
                  "x": "2025-03",
                  "y": 68.53955773848726
                },
                {
                  "x": "2025-04",
                  "y": 67.98097013609856
                },
                {
                  "x": "2025-05",
                  "y": 68.21506273377558
                },
                {
                  "x": "2025-06",
                  "y": 68.26090546709328
                },
                {
                  "x": "2025-07",
                  "y": 67.92749286087698
                },
                {
                  "x": "2025-08",
                  "y": 67.55796510500457
                },
                {
                  "x": "2025-09",
                  "y": 66.18401128982825
                },
                {
                  "x": "2025-10",
                  "y": 64.66948866078485
                },
                {
                  "x": "2025-11",
                  "y": 64.36319485074947
                },
                {
                  "x": "2025-12",
                  "y": 63.80218667628333
                },
                {
                  "x": "2026-01",
                  "y": 63.16357485430384
                },
                {
                  "x": "2026-02",
                  "y": 62.4297466586069
                },
                {
                  "x": "2026-03",
                  "y": 61.362188449301705
                },
                {
                  "x": "2026-04",
                  "y": 60.734205459959966
                },
                {
                  "x": "2026-05",
                  "y": 60.32000790375771
                },
                {
                  "x": "2026-06",
                  "y": 59.98577339935194
                },
                {
                  "x": "2026-07",
                  "y": 59.478757720005326
                },
                {
                  "x": "2026-08",
                  "y": 59.167853943704806
                }
              ],
              "cambio_pct": -40.832146056295194
            },
            {
              "clave": "haber",
              "nombre": "Haber mínimo jubilatorio (sin bono)",
              "puntos": [
                {
                  "x": "2023-11",
                  "y": 100.0
                },
                {
                  "x": "2023-12",
                  "y": 96.33745942736549
                },
                {
                  "x": "2024-01",
                  "y": 79.87238586208665
                },
                {
                  "x": "2024-02",
                  "y": 70.53330008762387
                },
                {
                  "x": "2024-03",
                  "y": 80.80757890972019
                },
                {
                  "x": "2024-04",
                  "y": 94.59400852176758
                },
                {
                  "x": "2024-05",
                  "y": 100.79938016809326
                },
                {
                  "x": "2024-06",
                  "y": 104.89839704118442
                },
                {
                  "x": "2024-07",
                  "y": 105.04870634718053
                },
                {
                  "x": "2024-08",
                  "y": 105.4598626690658
                },
                {
                  "x": "2024-09",
                  "y": 106.03144228306583
                },
                {
                  "x": "2024-10",
                  "y": 107.55778081280675
                },
                {
                  "x": "2024-11",
                  "y": 108.65349628087829
                },
                {
                  "x": "2024-12",
                  "y": 108.63857558855653
                },
                {
                  "x": "2025-01",
                  "y": 108.87129639422268
                },
                {
                  "x": "2025-02",
                  "y": 109.18852024238035
                },
                {
                  "x": "2025-03",
                  "y": 107.58922300054633
                },
                {
                  "x": "2025-04",
                  "y": 107.19057015452765
                },
                {
                  "x": "2025-05",
                  "y": 109.54439818947588
                },
                {
                  "x": "2025-06",
                  "y": 110.79602713124632
                },
                {
                  "x": "2025-07",
                  "y": 110.35928335591014
                },
                {
                  "x": "2025-08",
                  "y": 110.08219072615732
                },
                {
                  "x": "2025-09",
                  "y": 109.89242842582118
                },
                {
                  "x": "2025-10",
                  "y": 109.39640426319896
                },
                {
                  "x": "2025-11",
                  "y": 108.97693856041303
                },
                {
                  "x": "2025-12",
                  "y": 108.4415427544424
                },
                {
                  "x": "2026-01",
                  "y": 108.00767996408356
                },
                {
                  "x": "2026-02",
                  "y": 107.9590598113539
                },
                {
                  "x": "2026-03",
                  "y": 107.4341894187729
                },
                {
                  "x": "2026-04",
                  "y": 107.76704363919016
                },
                {
                  "x": "2026-05",
                  "y": 109.06470790809573
                },
                {
                  "x": "2026-06",
                  "y": 109.80666622253497
                },
                {
                  "x": "2026-07",
                  "y": 109.8456239113603
                },
                {
                  "x": "2026-08",
                  "y": 110.095003280277
                }
              ],
              "cambio_pct": 10.095003280276993
            },
            {
              "clave": "auh",
              "nombre": "Asignación Universal por Hijo (monto por hijo)",
              "puntos": [
                {
                  "x": "2023-11",
                  "y": 100.0
                },
                {
                  "x": "2023-12",
                  "y": 96.34032736099782
                },
                {
                  "x": "2024-01",
                  "y": 159.74952727207898
                },
                {
                  "x": "2024-02",
                  "y": 141.07079968029433
                },
                {
                  "x": "2024-03",
                  "y": 161.6189861655332
                },
                {
                  "x": "2024-04",
                  "y": 148.50329300081228
                },
                {
                  "x": "2024-05",
                  "y": 142.55032736101157
                },
                {
                  "x": "2024-06",
                  "y": 192.85789006713043
                },
                {
                  "x": "2024-07",
                  "y": 193.13424382337675
                },
                {
                  "x": "2024-08",
                  "y": 193.89074003661744
                },
                {
                  "x": "2024-09",
                  "y": 194.94229384720475
                },
                {
                  "x": "2024-10",
                  "y": 197.7501654661126
                },
                {
                  "x": "2024-11",
                  "y": 199.7662047227415
                },
                {
                  "x": "2024-12",
                  "y": 199.73980929306734
                },
                {
                  "x": "2025-01",
                  "y": 200.1682522760177
                },
                {
                  "x": "2025-02",
                  "y": 200.7519095301709
                },
                {
                  "x": "2025-03",
                  "y": 197.81220570965982
                },
                {
                  "x": "2025-04",
                  "y": 197.08092155141185
                },
                {
                  "x": "2025-05",
                  "y": 201.4088725553879
                },
                {
                  "x": "2025-06",
                  "y": 203.7106819400247
                },
                {
                  "x": "2025-07",
                  "y": 202.90864739830644
                },
                {
                  "x": "2025-08",
                  "y": 202.40010120990578
                },
                {
                  "x": "2025-09",
                  "y": 202.05137945271773
                },
                {
                  "x": "2025-10",
                  "y": 201.13996851174306
                },
                {
                  "x": "2025-11",
                  "y": 200.36898747801644
                },
                {
                  "x": "2025-12",
                  "y": 199.38496341562916
                },
                {
                  "x": "2026-01",
                  "y": 198.5879517365371
                },
                {
                  "x": "2026-02",
                  "y": 198.49969002220257
                },
                {
                  "x": "2026-03",
                  "y": 197.5346831875491
                },
                {
                  "x": "2026-04",
                  "y": 198.1472570247376
                },
                {
                  "x": "2026-05",
                  "y": 200.53420365831863
                },
                {
                  "x": "2026-06",
                  "y": 201.89956636894973
                },
                {
                  "x": "2026-07",
                  "y": 201.97250798996743
                },
                {
                  "x": "2026-08",
                  "y": 202.4322123192606
                }
              ],
              "cambio_pct": 102.4322123192606
            }
          ],
          "barras": [],
          "fuentes": [
            {
              "nombre": "Salario mínimo, vital y móvil",
              "institucion": "Secretaría de Trabajo",
              "id": "57.1_SMVMM_0_M_34",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=57.1_SMVMM_0_M_34&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-10",
              "rezago_meses": 0,
              "origen_datos": "guardado"
            },
            {
              "nombre": "Haber mínimo jubilatorio (sin bono)",
              "institucion": "ANSES",
              "id": "58.1_MP_0_M_24",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=58.1_MP_0_M_24&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-09",
              "rezago_meses": 1,
              "origen_datos": "guardado"
            },
            {
              "nombre": "Asignación Universal por Hijo (monto por hijo)",
              "institucion": "ANSES",
              "id": "165.1_AAUH_0_0_3",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=165.1_AAUH_0_0_3&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-09",
              "rezago_meses": 1,
              "origen_datos": "guardado"
            },
            {
              "nombre": "IPC nacional, nivel general",
              "institucion": "INDEC",
              "id": "148.3_INIVELNAL_DICI_M_26",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNAL_DICI_M_26&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-08",
              "rezago_meses": 2,
              "origen_datos": "guardado"
            }
          ],
          "como_leerlo": "Cada línea es el monto nominal dividido por el IPC, con el valor de noviembre de 2023 igual a 100. Por debajo de 100 compra menos que en ese mes; por encima, más.",
          "advertencias": [
            "El haber mínimo no incluye el bono previsional.",
            "La AUH cambió de regla entre 2023 y 2024, y eso explica parte del salto.",
            "Se corta en el mes con dato de precios más reciente y en el mes en curso para los montos que fija el Estado.",
            "Los montos del salario mínimo posteriores a octubre de 2026 son escalas ya fijadas, no observadas: no se muestran."
          ],
          "motivos": [
            "inflación (×23)"
          ]
        },
        {
          "id": "cobertura_canasta",
          "visual": "lineas",
          "titulo": "En agosto de 2026 un salario mínimo equivale a 0,72 canastas básicas y un haber mínimo a 0,81 (en septiembre de 2023: 1,14 y 0,85)",
          "unidad": "canastas básicas totales por adulto equivalente",
          "referencia": 1.0,
          "series": [
            {
              "clave": "smvm",
              "nombre": "Salario mínimo",
              "puntos": [
                {
                  "x": "2023-09",
                  "y": 1.14149917342884
                },
                {
                  "x": "2023-10",
                  "y": 1.18124927849831
                },
                {
                  "x": "2023-11",
                  "y": 1.1554173205128437
                },
                {
                  "x": "2023-12",
                  "y": 0.9722501726834721
                },
                {
                  "x": "2024-01",
                  "y": 0.8076764050695984
                },
                {
                  "x": "2024-02",
                  "y": 0.8050350829816747
                },
                {
                  "x": "2024-03",
                  "y": 0.8102716231850196
                },
                {
                  "x": "2024-04",
                  "y": 0.8247828570294296
                },
                {
                  "x": "2024-05",
                  "y": 0.8504527906117813
                },
                {
                  "x": "2024-06",
                  "y": 0.829202492797675
                },
                {
                  "x": "2024-07",
                  "y": 0.8722352208435784
                },
                {
                  "x": "2024-08",
                  "y": 0.8627824912900807
                },
                {
                  "x": "2024-09",
                  "y": 0.858674645959458
                },
                {
                  "x": "2024-10",
                  "y": 0.8505642632443382
                },
                {
                  "x": "2024-11",
                  "y": 0.8379264860655274
                },
                {
                  "x": "2024-12",
                  "y": 0.8437123330589409
                },
                {
                  "x": "2025-01",
                  "y": 0.8570413091812595
                },
                {
                  "x": "2025-02",
                  "y": 0.8541810492530246
                },
                {
                  "x": "2025-03",
                  "y": 0.8336257355434465
                },
                {
                  "x": "2025-04",
                  "y": 0.8423248354745577
                },
                {
                  "x": "2025-05",
                  "y": 0.8574803881965627
                },
                {
                  "x": "2025-06",
                  "y": 0.8582131394512831
                },
                {
                  "x": "2025-07",
                  "y": 0.8543955410984015
                },
                {
                  "x": "2025-08",
                  "y": 0.8571649821910665
                },
                {
                  "x": "2025-09",
                  "y": 0.845458863214392
                },
                {
                  "x": "2025-10",
                  "y": 0.8197239846782894
                },
                {
                  "x": "2025-11",
                  "y": 0.8070727491050684
                },
                {
                  "x": "2025-12",
                  "y": 0.7904955424834688
                },
                {
                  "x": "2026-01",
                  "y": 0.7746018018600846
                },
                {
                  "x": "2026-02",
                  "y": 0.7667121697516662
                },
                {
                  "x": "2026-03",
                  "y": 0.7591101238945701
                },
                {
                  "x": "2026-04",
                  "y": 0.7522289776598505
                },
                {
                  "x": "2026-05",
                  "y": 0.7484079630772209
                },
                {
                  "x": "2026-06",
                  "y": 0.7420973592189052
                },
                {
                  "x": "2026-07",
                  "y": 0.7354152919183014
                },
                {
                  "x": "2026-08",
                  "y": 0.7248183878610973
                }
              ],
              "cambio_pct": -36.50294238200061
            },
            {
              "clave": "haber",
              "nombre": "Haber mínimo",
              "puntos": [
                {
                  "x": "2023-09",
                  "y": 0.8460613876973282
                },
                {
                  "x": "2023-10",
                  "y": 0.7826649878608738
                },
                {
                  "x": "2023-11",
                  "y": 0.6921405585746329
                },
                {
                  "x": "2023-12",
                  "y": 0.6588428365697941
                },
                {
                  "x": "2024-01",
                  "y": 0.5473198449302722
                },
                {
                  "x": "2024-02",
                  "y": 0.47279263181800985
                },
                {
                  "x": "2024-03",
                  "y": 0.5371677083265078
                },
                {
                  "x": "2024-04",
                  "y": 0.6390873540309857
                },
                {
                  "x": "2024-05",
                  "y": 0.6901238568445308
                },
                {
                  "x": "2024-06",
                  "y": 0.7322949707955891
                },
                {
                  "x": "2024-07",
                  "y": 0.7396285703959812
                },
                {
                  "x": "2024-08",
                  "y": 0.741210815883358
                },
                {
                  "x": "2024-09",
                  "y": 0.7513108205117199
                },
                {
                  "x": "2024-10",
                  "y": 0.7652148748009607
                },
                {
                  "x": "2024-11",
                  "y": 0.7800036470326516
                },
                {
                  "x": "2024-12",
                  "y": 0.7830267464332222
                },
                {
                  "x": "2025-01",
                  "y": 0.7948536748533341
                },
                {
                  "x": "2025-02",
                  "y": 0.7976355057235733
                },
                {
                  "x": "2025-03",
                  "y": 0.7838879932247689
                },
                {
                  "x": "2025-04",
                  "y": 0.7956173666225527
                },
                {
                  "x": "2025-05",
                  "y": 0.8248776038559129
                },
                {
                  "x": "2025-06",
                  "y": 0.8344546286893204
                },
                {
                  "x": "2025-07",
                  "y": 0.8315295451886925
                },
                {
                  "x": "2025-08",
                  "y": 0.8366818536602689
                },
                {
                  "x": "2025-09",
                  "y": 0.8409353169618713
                },
                {
                  "x": "2025-10",
                  "y": 0.8306664852412133
                },
                {
                  "x": "2025-11",
                  "y": 0.8185875194702615
                },
                {
                  "x": "2025-12",
                  "y": 0.8048500490400013
                },
                {
                  "x": "2026-01",
                  "y": 0.7934542013504468
                },
                {
                  "x": "2026-02",
                  "y": 0.7942464884118353
                },
                {
                  "x": "2026-03",
                  "y": 0.7961627974130027
                },
                {
                  "x": "2026-04",
                  "y": 0.7995729618378977
                },
                {
                  "x": "2026-05",
                  "y": 0.8106188080322853
                },
                {
                  "x": "2026-06",
                  "y": 0.8137607811432214
                },
                {
                  "x": "2026-07",
                  "y": 0.8135962765552508
                },
                {
                  "x": "2026-08",
                  "y": 0.8079163909864387
                }
              ],
              "cambio_pct": -4.5085377096224954
            }
          ],
          "barras": [],
          "fuentes": [
            {
              "nombre": "Salario mínimo, vital y móvil",
              "institucion": "Secretaría de Trabajo",
              "id": "57.1_SMVMM_0_M_34",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=57.1_SMVMM_0_M_34&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-10",
              "rezago_meses": 0,
              "origen_datos": "guardado"
            },
            {
              "nombre": "Haber mínimo jubilatorio (sin bono)",
              "institucion": "ANSES",
              "id": "58.1_MP_0_M_24",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=58.1_MP_0_M_24&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-09",
              "rezago_meses": 1,
              "origen_datos": "guardado"
            },
            {
              "nombre": "Canasta básica total (por adulto equivalente)",
              "institucion": "INDEC",
              "id": "150.1_CSTA_BATAL_0_D_20",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BATAL_0_D_20&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-08",
              "rezago_meses": 2,
              "origen_datos": "guardado"
            }
          ],
          "como_leerlo": "Cada línea es cuántas canastas básicas totales (por adulto equivalente) equivale el ingreso de un mes. 1 es una canasta completa.",
          "advertencias": [
            "La canasta es por adulto equivalente; el salario mínimo y el haber son ingresos individuales.",
            "El haber mínimo no incluye el bono previsional.",
            "Los montos del salario mínimo posteriores a octubre de 2026 son escalas ya fijadas, no observadas: no se muestran."
          ],
          "motivos": [
            "inflación (×23)"
          ]
        }
      ],
      "avisos": []
    }
  },
  "03": {
    "titulo": "Con un dólar más demandado, el Banco Central pausa la compra de reservas",
    "cuerpo": "Por tercer día consecutivo, la entidad monetaria no intervino sobre el mercado; no había pasado nunca desde que comenzó a aplicar su plan de acumulación en enero pasado\n\nEn un contexto en el que el dólar se mantiene demandado, el Banco Central (BCRA) se abstuvo de comprar reservas en el mercado cambiario local por tercer día consecutivo, algo inédito desde que comenzó a aplicar su plan de acumulación el 3 de enero pasado.\n\nLa entidad que conduce Santiago Bausili reportó nuevamente que cerró sus operaciones “sin intervención”, como había hecho el lunes, cuando el billete había abierto con un alza cercana al 1% en respuesta a la fuerte devaluación que registraba ese día el real en Brasil, luego de definirse el proceso electoral a favor de una nueva reelección de Luiz Inácio Lula da Silva.\n\nEse aumento, que no fue mayor porque el Tesoro Nacional volcó al mercado unos US$100 millones de sus ahorros mediante ventas sostenidas para mantener estable la cotización, dejó al BCRA al margen de las operaciones. En ese contexto, la decisión no llamó la atención.\n\nLa situación se repitió ayer, en un escenario complejo porque la Letra ajustable por dólar que vence a fin de mes marcaría el precio de referencia, lo que suma demanda al mercado spot. Esta vez, la decisión sí causó cierta extrañeza, porque el billete se negoció en baja durante casi toda la jornada y, cada vez que encuentra espacio para comprar dólares, suele ser el BCRA el que lo hace.\n\nLuego se supo que la presencia oficial detectada en el mercado correspondía al Tesoro, que había salido a comprar divisas cuando el billete tocó un piso intradiario de $1536: adquirió US$44 millones de los US$100 millones que había vendido el día previo, mayoritariamente a $1541.\n\nEsto explicaría que el BCRA se haya mantenido al margen de las operaciones —en una jornada de bajo volumen— para permitir que el Gobierno recuperara parte de lo vendido 24 horas antes. Después de todo, la decisión se da, además, cuando se sabe que en una semana debe pagar US$877 millones en concepto de intereses al Fondo Monetario Internacional (FMI) y otros US$60 millones a organismos internacionales y “apenas tendría en su cuenta en el BCRA US$869 millones”, hicieron notar desde Portfolio Personal Inversiones (PPI).\n\nLo ocurrido hoy estaría relacionado con la presión que ejerció la demanda sobre la cotización del billete durante la segunda mitad de la rueda, luego de una apertura tranquila, cuando el dólar mayorista vendedor cotizaba a $1535, unos $3 por debajo del cierre anterior.\n\n“Ya cerca del mediodía, el mayorista avanzó hasta la zona de $1538, donde encontró cierto equilibrio y se mantuvo durante buena parte de la rueda, antes de que se hiciera sentir, durante la última hora de operaciones, una intensificación de la demanda, que absorbió la oferta disponible en esos niveles y llevó progresivamente la cotización hasta los $1540 y $1542, nivel en el que finalmente cerró la jornada, marcando una suba de $4 (+0,26%) respecto de ayer”, reseñó el operador Francisco Díaz Mayer, de ABC Mercado de Cambios.\n\nLa incidencia de una demanda más fuerte también se reflejó en el aumento del 46% del monto total de operaciones al contado, que alcanzó los US$628 millones durante la jornada.\n\nLas reservas y los próximos vencimientos\n\nLa duda que comienza a plantearse en el mercado es qué decisión tomará el BCRA si esta tendencia se mantiene en las próximas jornadas, dado que la compra de reservas es, tal vez, el único recurso genuino con el que cuenta el Gobierno para afrontar los próximos vencimientos de deuda externa.\n\nEn ese sentido, fueron públicas las recomendaciones del FMI y de distintos bancos de inversión internacionales para que la entidad siguiera acumulando divisas, en momentos en que el BCRA parecía comenzar a moderar esas compras tras haber cumplido sus previsiones. La acumulación de reservas también le permitiría al Gobierno contar con una importante munición para enfrentar un 2027 electoral.\n\nLa importancia de estas compras aumentó, además, luego de que el Gobierno decidiera discontinuar la emisión del Bonar 2029 (AO29) en el mercado local para hacerse de divisas. Todavía le quedan unos US$800 millones por colocar, pero habría optado por no convalidar tasas del 12% o 13% anual. De allí la inquietud que genera la pausa en las compras del BCRA, más allá de que haya acumulado por esa vía US$1252 millones este mes y US$15820 millones en el año.\n\nEs que las proyecciones indican que, “de no mediar nuevas colocaciones en el mercado local ni nuevas compras del Tesoro en el MULC, terminaría con depósitos en moneda extranjera en el BCRA por unos US$1800 millones, por debajo de los US$3700 millones previstos al presentar el programa financiero a mitad de año”, explicó PPI en su informe diario.\n\nAl respecto, vale recordar que el Gobierno no hizo ninguna revisión de aquel programa ni explicó de dónde obtendría los recursos hoy faltantes, aunque divulgó consecutivamente por distintas vías cifras millonarias y muy diferentes sobre la liquidez total a la que podría acceder para enfrentar posibles corridas el año que viene.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "El Banco Central (BCRA) no compró reservas en el mercado cambiario por tercer día consecutivo, algo que no ocurría desde que comenzó su plan de acumulación."
          },
          {
            "text": "El BCRA comenzó a aplicar su plan de acumulación de reservas el 3 de enero."
          },
          {
            "text": "Santiago Bausili conduce el Banco Central de la República Argentina."
          },
          {
            "text": "El lunes el dólar abrió con un alza cercana al 1% en respuesta a la fuerte devaluación del real en Brasil."
          },
          {
            "text": "El proceso electoral en Brasil se definió a favor de una nueva reelección de Luiz Inácio Lula da Silva."
          },
          {
            "text": "El Tesoro Nacional vendió unos US$100 millones de sus ahorros en el mercado el lunes para mantener estable la cotización del dólar."
          },
          {
            "text": "La Letra ajustable por dólar que vence a fin de mes tomaría como referencia el precio del mercado, lo que suma demanda al mercado spot."
          },
          {
            "text": "El Tesoro compró US$44 millones cuando el dólar tocó un piso intradiario de $1536, mayoritariamente a $1541."
          },
          {
            "text": "El Tesoro debe pagar en una semana US$877 millones en intereses al FMI."
          },
          {
            "text": "El Tesoro debe pagar además US$60 millones a organismos internacionales."
          },
          {
            "text": "Según PPI, el Tesoro apenas tendría US$869 millones en su cuenta en el BCRA."
          },
          {
            "text": "El dólar mayorista abrió a $1535, unos $3 por debajo del cierre anterior."
          },
          {
            "text": "Según Francisco Díaz Mayer, de ABC Mercado de Cambios, el dólar mayorista cerró a $1542, con una suba de $4 (+0,26%) respecto del día anterior."
          },
          {
            "text": "El monto total de operaciones al contado aumentó 46% y alcanzó US$628 millones en la jornada."
          },
          {
            "text": "El FMI y distintos bancos de inversión internacionales recomendaron públicamente que el BCRA siguiera acumulando divisas."
          },
          {
            "text": "El Gobierno decidió discontinuar la emisión del Bonar 2029 (AO29) en el mercado local."
          },
          {
            "text": "Al Gobierno le quedan unos US$800 millones del Bonar 2029 por colocar y habría optado por no convalidar tasas del 12% o 13% anual."
          },
          {
            "text": "El BCRA acumuló por compras en el mercado US$1252 millones en el mes y US$15820 millones en el año."
          },
          {
            "text": "Según PPI, sin nuevas colocaciones ni compras del Tesoro en el MULC, el Tesoro terminaría con depósitos en moneda extranjera en el BCRA por unos US$1800 millones, por debajo de los US$3700 millones previstos en el programa financiero de mitad de año."
          },
          {
            "text": "El Gobierno no hizo ninguna revisión del programa financiero presentado a mitad de año."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Banco Central de la República Argentina (BCRA)",
            "mentions": 18
          },
          {
            "name": "Santiago Bausili",
            "mentions": 1
          },
          {
            "name": "Brasil",
            "mentions": 1
          },
          {
            "name": "Luiz Inácio Lula da Silva",
            "mentions": 1
          },
          {
            "name": "Tesoro Nacional",
            "mentions": 5
          },
          {
            "name": "Fondo Monetario Internacional (FMI)",
            "mentions": 3
          },
          {
            "name": "Portfolio Personal Inversiones (PPI)",
            "mentions": 3
          },
          {
            "name": "Francisco Díaz Mayer",
            "mentions": 1
          },
          {
            "name": "ABC Mercado de Cambios",
            "mentions": 1
          },
          {
            "name": "Gobierno nacional",
            "mentions": 8
          },
          {
            "name": "Bonar 2029 (AO29)",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "El BCRA inicia su plan de acumulación de reservas"
          },
          {
            "title": "Gobierno presenta su programa financiero"
          },
          {
            "title": "Dólar sube tras la reelección de Lula"
          },
          {
            "title": "El Tesoro recompra US$44 millones"
          },
          {
            "title": "BCRA no compra reservas por tercer día consecutivo"
          },
          {
            "title": "Vencimiento de pago de intereses al FMI"
          },
          {
            "title": "Año electoral en la Argentina"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 20,
            "ok": 26,
            "fecha_inferida": 6
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "El BCRA comenzó a aplicar su plan de acumulación de reservas el 3 de enero."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El lunes el dólar abrió con un alza cercana al 1% en respuesta a la fuerte devaluación del real en Brasil."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El Tesoro Nacional vendió unos US$100 millones de sus ahorros en el mercado el lunes para mantener estable la cotización del dólar."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El Tesoro compró US$44 millones cuando el dólar tocó un piso intradiario de $1536, mayoritariamente a $1541."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según PPI, el Tesoro apenas tendría US$869 millones en su cuenta en el BCRA."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El Tesoro debe pagar en una semana US$877 millones en intereses al FMI."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El Tesoro debe pagar además US$60 millones a organismos internacionales."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El dólar mayorista abrió a $1535, unos $3 por debajo del cierre anterior."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según Francisco Díaz Mayer, de ABC Mercado de Cambios, el dólar mayorista cerró a $1542, con una suba de $4 (+0,26%) respecto del día anterior."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El monto total de operaciones al contado aumentó 46% y alcanzó US$628 millones en la jornada."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El Gobierno decidió discontinuar la emisión del Bonar 2029 (AO29) en el mercado local."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Al Gobierno le quedan unos US$800 millones del Bonar 2029 por colocar y habría optado por no convalidar tasas del 12% o 13% anual."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El BCRA acumuló por compras en el mercado US$1252 millones en el mes y US$15820 millones en el año."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según PPI, sin nuevas colocaciones ni compras del Tesoro en el MULC, el Tesoro terminaría con depósitos en moneda extranjera en el BCRA por unos US$1800 millones, por debajo de los US$3700 millones previstos en el programa financiero de mitad de año."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Banco Central de la República Argentina (BCRA)",
              "y": 9.0,
              "etiqueta": "Banco Central de la República Argentina (BCRA)",
              "descripcion": "Entidad monetaria que se abstuvo por tercer día consecutivo de comprar reservas en el mercado cambiario.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 245,
                "fin": 249,
                "cita": "BCRA"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «BCRA»"
              ]
            },
            {
              "x": "Gobierno nacional",
              "y": 5.0,
              "etiqueta": "Gobierno nacional",
              "descripcion": "Gobierno argentino que enfrenta vencimientos de deuda y discontinuó la emisión del Bonar 2029.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p7",
                "inicio": 1869,
                "fin": 1877,
                "cita": "Gobierno"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Gobierno»"
              ]
            },
            {
              "x": "Santiago Bausili",
              "y": 1.0,
              "etiqueta": "Santiago Bausili",
              "descripcion": "Titular del Banco Central.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 450,
                "fin": 466,
                "cita": "Santiago Bausili"
              },
              "alertas": []
            },
            {
              "x": "Brasil",
              "y": 1.0,
              "etiqueta": "Brasil",
              "descripcion": "País cuya devaluación del real tras las elecciones impulsó el alza del dólar.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 688,
                "fin": 694,
                "cita": "Brasil"
              },
              "alertas": []
            },
            {
              "x": "Luiz Inácio Lula da Silva",
              "y": 1.0,
              "etiqueta": "Luiz Inácio Lula da Silva",
              "descripcion": "Presidente brasileño cuya reelección se definió en el proceso electoral.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 771,
                "fin": 796,
                "cita": "Luiz Inácio Lula da Silva"
              },
              "alertas": []
            },
            {
              "x": "Tesoro Nacional",
              "y": 1.0,
              "etiqueta": "Tesoro Nacional",
              "descripcion": "Vendió US$100 millones para estabilizar el dólar y luego recompró US$44 millones.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 839,
                "fin": 854,
                "cita": "Tesoro Nacional"
              },
              "alertas": []
            },
            {
              "x": "Fondo Monetario Internacional (FMI)",
              "y": 1.0,
              "etiqueta": "Fondo Monetario Internacional (FMI)",
              "descripcion": "Organismo al que el Gobierno debe pagar US$877 millones en intereses y que recomendó acumular reservas.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p7",
                "inicio": 2057,
                "fin": 2086,
                "cita": "Fondo Monetario Internacional"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Fondo Monetario Internacional»"
              ]
            },
            {
              "x": "Portfolio Personal Inversiones (PPI)",
              "y": 1.0,
              "etiqueta": "Portfolio Personal Inversiones (PPI)",
              "descripcion": "Consultora que analizó la situación de los depósitos del Tesoro y las proyecciones financieras.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p7",
                "inicio": 2226,
                "fin": 2256,
                "cita": "Portfolio Personal Inversiones"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Portfolio Personal Inversiones»"
              ]
            },
            {
              "x": "Francisco Díaz Mayer",
              "y": 1.0,
              "etiqueta": "Francisco Díaz Mayer",
              "descripcion": "Operador de ABC Mercado de Cambios que reseñó la evolución del dólar mayorista.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p9",
                "inicio": 3018,
                "fin": 3038,
                "cita": "Francisco Díaz Mayer"
              },
              "alertas": []
            },
            {
              "x": "ABC Mercado de Cambios",
              "y": 1.0,
              "etiqueta": "ABC Mercado de Cambios",
              "descripcion": "Casa de cambios donde trabaja el operador Francisco Díaz Mayer.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p9",
                "inicio": 3043,
                "fin": 3065,
                "cita": "ABC Mercado de Cambios"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": [
        "línea de tiempo omitida: 1 evento(s) sostenidos por la nota, hacen falta 3"
      ]
    }
  },
  "04": {
    "titulo": "El Banco Central no compró reservas y el Tesoro habría vendido dólares",
    "cuerpo": "El billete estadounidense abrió en alza y se mantuvo estable durante toda la rueda; en el mercado creen que hubo ventas para evitar que el tipo de cambio subiera\n\nEl Banco Central (BCRA) se abstuvo hoy de comprar reservas ante un dólar que, en respuesta al vuelco registrado ayer en la elección en Brasil, se mantuvo muy demandado y en alza durante toda la jornada en la plaza local.\n\nFue al cabo de una rueda en la que el dólar mayorista abrió bajo fuerte presión y cerró a $1532 para la compra y $1541 para la venta, con un aumento de $11,50 (0,75%) respecto de su nivel de cierre del viernes.\n\n“A lo largo de la rueda, el tipo de cambio mostró escasas variaciones, operando entre un mínimo de $1539 y un máximo de $1542, con una importante concentración de operaciones entre $1540 y $1541. Pero durante la última hora se observó una aceleración del volumen negociado, con operaciones de mayor tamaño concentradas en $1541, nivel de cierre”, explicó el analista Francisco Díaz Mayer, de ABC Mercado de Cambios.\n\nEl avance del billete, que lo llevó a marcar nuevos máximos nominales, fue el mayor registrado “desde el 24 de agosto pasado”, hizo notar el operador Gustavo Quintana, de PR Cambios. La suba no resultó mayor porque se habrían registrado nuevas ventas del Tesoro Nacional (que cuenta con tenencias ahorradas para afrontar futuros pagos de deuda) para contenerla. Esto, habida cuenta de que el BCRA solo podría haber vendido reservas con ese fin si el dólar mayorista superaba en algún momento el techo de la banda cambiaria vigente, establecido para hoy en $1946,73.\n\n“Se percibió intervención oficial en spot y activos vinculados al dólar en medio de un mercado de bonos y acciones muy afectado por el risk-off en Brasil”, observaron, por caso, desde Target de Mercado.\n\nLas señales de esas ventas surgen de la notoria estabilidad que mostró la cotización durante toda la jornada, luego de la trepada inicial. Se trató de un comportamiento que, según los operadores, es una característica que delataría la actuación oficial sobre el mercado.\n\nDe hecho, según calculan en el mercado, el Gobierno habría sacrificado hoy unos US$100 millones de su tenencia en la jornada para lograr mantener al billete estabilizado.\n\nDe haber sido así, según los últimos datos, los depósitos en dólares del Tesoro en el BCRA habrían caído hasta los US$ 825 millones con lo que “marcarían nuevo mínimo desde el 15/05/2026, previo a una compra de dólares al BCRA por US$ 1700 millones”, señaló al respecto el economista Federico García Martínez, lo que sería una inquietante noticia tomando en cuenta que mantiene pausada la emisión del Bonar2029 y en poco más de tres meses el Gobierno debe afrontar un nuevo pago de los bonos surgidos de la última reestructuración de deuda.\n\nCon la abstención de hoy, el BCRA cortó una racha de 20 intervenciones en el mercado cambiario de contado con saldo positivo, ya que también había cerrado con saldo neutro el 25 de septiembre último.\n\nLa aclaración sobre el mercado de contado es pertinente porque, fuera de ese segmento, la entidad que conduce Santiago Bausili se mostró muy activa ofreciendo derivados y bonos ajustables por el tipo de cambio oficial, con el objetivo de aplacar, por esa vía, parte de la demanda de dólares físicos.\n\nLa intervención se produjo en una rueda en la que el volumen operado en el mercado de contado escaló hasta los US$735,23 millones, un 31% más que el viernes, mientras que en futuros alcanzó un equivalente a US$2140 millones, con una suba del 158% respecto de la rueda previa.\n\nLo concreto es que se trata de la quinta rueda del año en la que el BCRA no opera para sumar reservas, si se toma en cuenta la primera jornada hábil del año, cuando todavía no había comenzado a ejecutar su programa de acumulación. Desde entonces, la entidad compró US$1252 millones en lo que va del mes y US$15.820 millones en el año.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "El Banco Central de la República Argentina (BCRA) no compró reservas en el mercado cambiario en la jornada."
          },
          {
            "text": "El dólar subió en la plaza local en respuesta al resultado de la elección en Brasil del día anterior."
          },
          {
            "text": "El dólar mayorista cerró a $1532 para la compra y $1541 para la venta."
          },
          {
            "text": "El dólar mayorista subió $11,50 (0,75%) respecto del cierre del viernes."
          },
          {
            "text": "Según Francisco Díaz Mayer, de ABC Mercado de Cambios, el tipo de cambio operó entre un mínimo de $1539 y un máximo de $1542, con concentración de operaciones entre $1540 y $1541."
          },
          {
            "text": "Según Díaz Mayer, durante la última hora hubo una aceleración del volumen negociado con operaciones concentradas en $1541, nivel de cierre."
          },
          {
            "text": "El dólar mayorista marcó nuevos máximos nominales."
          },
          {
            "text": "Según Gustavo Quintana, de PR Cambios, la suba del dólar fue la mayor desde el 24 de agosto."
          },
          {
            "text": "El Tesoro Nacional habría vendido dólares para contener la suba del tipo de cambio."
          },
          {
            "text": "El techo de la banda cambiaria vigente estaba fijado para la jornada en $1946,73."
          },
          {
            "text": "Target de Mercado observó intervención oficial en el spot y en activos vinculados al dólar en medio de un mercado afectado por el risk-off en Brasil."
          },
          {
            "text": "Según cálculos del mercado, el Gobierno habría vendido unos US$100 millones de su tenencia para estabilizar el dólar."
          },
          {
            "text": "Según el economista Federico García Martínez, los depósitos en dólares del Tesoro en el BCRA habrían caído a US$825 millones, nuevo mínimo desde el 15/05/2026."
          },
          {
            "text": "El 15/05/2026 el Tesoro compró US$1700 millones al BCRA."
          },
          {
            "text": "El Gobierno mantiene pausada la emisión del Bonar 2029."
          },
          {
            "text": "En poco más de tres meses el Gobierno debe afrontar un nuevo pago de los bonos surgidos de la última reestructuración de deuda."
          },
          {
            "text": "El BCRA cortó una racha de 20 intervenciones consecutivas con saldo positivo en el mercado de contado."
          },
          {
            "text": "El BCRA había cerrado con saldo neutro el 25 de septiembre."
          },
          {
            "text": "Santiago Bausili conduce el BCRA."
          },
          {
            "text": "El BCRA ofreció derivados y bonos ajustables por el tipo de cambio oficial para aplacar la demanda de dólares."
          },
          {
            "text": "El volumen operado en el mercado de contado fue de US$735,23 millones, 31% más que el viernes."
          },
          {
            "text": "El volumen en futuros alcanzó un equivalente a US$2140 millones, con una suba del 158% respecto de la rueda previa."
          },
          {
            "text": "Es la quinta rueda del año en la que el BCRA no compra reservas, contando la primera jornada hábil del año."
          },
          {
            "text": "El BCRA compró US$1252 millones en lo que va del mes y US$15.820 millones en el año."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Banco Central de la República Argentina (BCRA)",
            "mentions": 9
          },
          {
            "name": "Tesoro Nacional",
            "mentions": 4
          },
          {
            "name": "Brasil",
            "mentions": 2
          },
          {
            "name": "Elección en Brasil",
            "mentions": 1
          },
          {
            "name": "Francisco Díaz Mayer",
            "mentions": 1
          },
          {
            "name": "ABC Mercado de Cambios",
            "mentions": 1
          },
          {
            "name": "Gustavo Quintana",
            "mentions": 1
          },
          {
            "name": "PR Cambios",
            "mentions": 1
          },
          {
            "name": "Target de Mercado",
            "mentions": 1
          },
          {
            "name": "Gobierno",
            "mentions": 2
          },
          {
            "name": "Federico García Martínez",
            "mentions": 1
          },
          {
            "name": "Santiago Bausili",
            "mentions": 1
          },
          {
            "name": "Bonar2029",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "BCRA no opera en la primera jornada hábil del año"
          },
          {
            "title": "Depósitos del Tesoro en mínimo previo a compra al BCRA"
          },
          {
            "title": "Mayor suba previa del dólar mayorista"
          },
          {
            "title": "BCRA cierra con saldo neutro en el mercado"
          },
          {
            "title": "Vuelco en la elección de Brasil"
          },
          {
            "title": "El BCRA se abstiene de comprar reservas"
          },
          {
            "title": "El Tesoro habría vendido unos US$100 millones"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 23,
            "ok": 31,
            "evidencia_no_encontrada": 1,
            "fecha_inferida": 1,
            "fuente_parcial": 1
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "El dólar mayorista cerró a $1532 para la compra y $1541 para la venta."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El dólar mayorista subió $11,50 (0,75%) respecto del cierre del viernes."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según Francisco Díaz Mayer, de ABC Mercado de Cambios, el tipo de cambio operó entre un mínimo de $1539 y un máximo de $1542, con concentración de operaciones entre $1540 y $1541."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según Díaz Mayer, durante la última hora hubo una aceleración del volumen negociado con operaciones concentradas en $1541, nivel de cierre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según Gustavo Quintana, de PR Cambios, la suba del dólar fue la mayor desde el 24 de agosto."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El techo de la banda cambiaria vigente estaba fijado para la jornada en $1946,73."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según cálculos del mercado, el Gobierno habría vendido unos US$100 millones de su tenencia para estabilizar el dólar."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según el economista Federico García Martínez, los depósitos en dólares del Tesoro en el BCRA habrían caído a US$825 millones, nuevo mínimo desde el 15/05/2026."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El 15/05/2026 el Tesoro compró US$1700 millones al BCRA."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El BCRA cortó una racha de 20 intervenciones consecutivas con saldo positivo en el mercado de contado."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El BCRA había cerrado con saldo neutro el 25 de septiembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El volumen operado en el mercado de contado fue de US$735,23 millones, 31% más que el viernes."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El volumen en futuros alcanzó un equivalente a US$2140 millones, con una suba del 158% respecto de la rueda previa."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El BCRA compró US$1252 millones en lo que va del mes y US$15.820 millones en el año."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "linea-tiempo",
          "tipo": "linea_tiempo",
          "titulo": "Línea de tiempo",
          "fuente": null,
          "enlace": null,
          "unidad": null,
          "origen_datos": null,
          "puntos": [
            {
              "x": "2026",
              "y": null,
              "etiqueta": "Vuelco en la elección de Brasil",
              "descripcion": "La elección en Brasil, realizada el día anterior a la rueda, registró un vuelco que generó un clima de risk-off en los mercados.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p9",
                "inicio": 2411,
                "fin": 2415,
                "cita": "2026"
              },
              "alertas": []
            },
            {
              "x": "2026",
              "y": null,
              "etiqueta": "El BCRA se abstiene de comprar reservas",
              "descripcion": "El Banco Central no compró reservas y cortó una racha de 20 intervenciones con saldo positivo; el dólar mayorista cerró a $1541, con una suba de $11,50.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p9",
                "inicio": 2411,
                "fin": 2415,
                "cita": "2026"
              },
              "alertas": []
            },
            {
              "x": "2026",
              "y": null,
              "etiqueta": "El Tesoro habría vendido unos US$100 millones",
              "descripcion": "Según el mercado, el Tesoro habría vendido alrededor de US$100 millones para contener la suba del dólar, lo que dejaría sus depósitos en el BCRA en US$825 millones.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p9",
                "inicio": 2411,
                "fin": 2415,
                "cita": "2026"
              },
              "alertas": []
            },
            {
              "x": "2026-05-15",
              "y": null,
              "etiqueta": "Depósitos del Tesoro en mínimo previo a compra al BCRA",
              "descripcion": "Fecha del mínimo anterior de los depósitos en dólares del Tesoro en el BCRA, previo a una compra de US$1700 millones al BCRA.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p9",
                "inicio": 2405,
                "fin": 2410,
                "cita": "15/05"
              },
              "alertas": []
            },
            {
              "x": "2026-08-24",
              "y": null,
              "etiqueta": "Mayor suba previa del dólar mayorista",
              "descripcion": "Según Gustavo Quintana, la suba del dólar de la jornada fue la mayor registrada desde el 24 de agosto.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p5",
                "inicio": 1119,
                "fin": 1131,
                "cita": "24 de agosto"
              },
              "alertas": []
            },
            {
              "x": "2026-09-25",
              "y": null,
              "etiqueta": "BCRA cierra con saldo neutro en el mercado",
              "descripcion": "El Banco Central había cerrado con saldo neutro en el mercado de contado, antes de una racha de 20 intervenciones con saldo positivo.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p10",
                "inicio": 2946,
                "fin": 2962,
                "cita": "25 de septiembre"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": [
            "evento sin cita en la nota, no se grafica: BCRA no opera en la primera jornada hábil del año (2026-01-02)"
          ]
        },
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Banco Central de la República Argentina (BCRA)",
              "y": 6.0,
              "etiqueta": "Banco Central de la República Argentina (BCRA)",
              "descripcion": "Autoridad monetaria que se abstuvo de comprar reservas en la jornada y cortó una racha de 20 intervenciones con saldo positivo.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 181,
                "fin": 185,
                "cita": "BCRA"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «BCRA»"
              ]
            },
            {
              "x": "Brasil",
              "y": 2.0,
              "etiqueta": "Brasil",
              "descripcion": "País cuya elección y el consecuente risk-off presionaron al dólar en la plaza local.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 298,
                "fin": 304,
                "cita": "Brasil"
              },
              "alertas": []
            },
            {
              "x": "Gobierno",
              "y": 2.0,
              "etiqueta": "Gobierno",
              "descripcion": "Habría sacrificado unos US$100 millones para estabilizar el dólar y debe afrontar pagos de deuda.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p8",
                "inicio": 2100,
                "fin": 2108,
                "cita": "Gobierno"
              },
              "alertas": []
            },
            {
              "x": "Elección en Brasil",
              "y": 1.0,
              "etiqueta": "Elección en Brasil",
              "descripcion": "Comicios cuyo vuelco impulsó la demanda de dólares en Argentina.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 286,
                "fin": 304,
                "cita": "elección en Brasil"
              },
              "alertas": []
            },
            {
              "x": "Francisco Díaz Mayer",
              "y": 1.0,
              "etiqueta": "Francisco Díaz Mayer",
              "descripcion": "Analista de ABC Mercado de Cambios que describió la evolución de la rueda.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 964,
                "fin": 984,
                "cita": "Francisco Díaz Mayer"
              },
              "alertas": []
            },
            {
              "x": "ABC Mercado de Cambios",
              "y": 1.0,
              "etiqueta": "ABC Mercado de Cambios",
              "descripcion": "Casa de cambios donde trabaja el analista Francisco Díaz Mayer.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 989,
                "fin": 1011,
                "cita": "ABC Mercado de Cambios"
              },
              "alertas": []
            },
            {
              "x": "Gustavo Quintana",
              "y": 1.0,
              "etiqueta": "Gustavo Quintana",
              "descripcion": "Operador de PR Cambios que señaló que la suba fue la mayor desde el 24 de agosto.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p5",
                "inicio": 1164,
                "fin": 1180,
                "cita": "Gustavo Quintana"
              },
              "alertas": []
            },
            {
              "x": "PR Cambios",
              "y": 1.0,
              "etiqueta": "PR Cambios",
              "descripcion": "Casa de cambios donde opera Gustavo Quintana.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p5",
                "inicio": 1185,
                "fin": 1195,
                "cita": "PR Cambios"
              },
              "alertas": []
            },
            {
              "x": "Tesoro Nacional",
              "y": 1.0,
              "etiqueta": "Tesoro Nacional",
              "descripcion": "Habría vendido dólares de sus tenencias para contener la suba del tipo de cambio.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p5",
                "inicio": 1269,
                "fin": 1284,
                "cita": "Tesoro Nacional"
              },
              "alertas": []
            },
            {
              "x": "Target de Mercado",
              "y": 1.0,
              "etiqueta": "Target de Mercado",
              "descripcion": "Consultora que percibió intervención oficial en el mercado spot.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p6",
                "inicio": 1765,
                "fin": 1782,
                "cita": "Target de Mercado"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": []
    }
  },
  "05": {
    "titulo": "Según un estudio privado, la IA podría aportar USD 17.700 millones a la economía argentina hacia 2030",
    "cuerpo": "La inteligencia artificial (IA) podría generar un impacto económico de USD 17.714 millones en la Argentina en 2030, el equivalente al 2,13% del PBI proyectado para ese año. La estimación forma parte de un estudio de la Universidad de San Andrés (UdeSA) y depende de una condición: que el país acelere la adopción de esta tecnología en las empresas.\n\nEl cálculo suma dos componentes: el gasto en productos y servicios de IA y su efecto derrame sobre la productividad. Si no se aplica ninguna de las recomendaciones del informe y la difusión sigue su curso actual, el impacto llegaría a USD 12.708 millones en 2030, un 1,5% del PBI. La diferencia, USD 5.006 millones, es lo que los autores atribuyen a una estrategia de competitividad.\n\nPara llegar a esa cifra, el modelo supone que la adopción empresarial pasa del 11,2% de 2025 al 16,5% en 2030, el nivel que hoy tiene Uruguay, el líder de América Latina en este indicador. También estima que el gasto anual en IA del país sería de USD 3.539 millones en 2030, frente a los USD 2.763 millones del escenario sin cambios.\n\nHoy, según el estudio, la IA ya aporta USD 4.316 millones a la economía argentina, un 0,6% del PBI. El gasto en esta tecnología es de USD 798 millones en 2026, el 0,12% del producto, por debajo del 0,22% que registra en promedio América Latina.\n\nUna adopción amplia pero poco profunda\n\nEl informe describe un uso extendido, pero superficial. Según sus estimaciones, el 34,7% de las aproximadamente 4.000 grandes empresas del país adoptó alguna aplicación de IA. Sin embargo, las entrevistas con ejecutivos de 30 compañías muestran que el perfil predominante es el de una “adopción simple y exploratoria”, con pocas áreas involucradas y pocos casos de uso. Aún así, el 42,5% de los encuestados dijo contar con una estrategia de IA estructurada y comunicada, aunque apenas el 17,6% exige un caso de negocio con retorno financiero para aprobar proyectos.\n\nBuena parte del uso, además, ocurre fuera del control de las organizaciones. Los autores lo denominan “shadow AI”: empleados que incorporan herramientas de consumo por iniciativa propia, muchas veces desde cuentas personales y sin conocimiento del área de tecnología.\n\nEn las pymes, la adopción se estima en 16% entre las medianas y 8,5% entre las pequeñas. El trabajo de campo de UdeSA, indica que el proceso es muy reciente: la mayoría empezó a usarla en los últimos dos años y sin presupuesto específico.\n\nEl estudio sostiene que las pymes argentinas “no perdieron el tren” de la adopción, pero advierte que el problema no está en el acceso, sino en su integración al negocio. “El principal recurso escaso para implementar inteligencia artificial en las PyMEs es el tiempo de quien decide”, explican.\n\nQué sectores aparecen mejor posicionados\n\nEl informe no calcula cuánto del impacto económico corresponde a cada actividad, pero sus datos permiten identificar dónde está la ventaja. Entre las pymes, el software y las tecnologías de la información lideran la adopción: el 85,4% de las empresas del sector usa IA. Les siguen las finanzas y los seguros, con 30,5 por ciento. En el extremo opuesto aparecen la construcción, el turismo y el agro. El estudio aclara que el sector influye pero no determina el resultado: hay casos de empresas de rubros tradicionales que avanzaron más por la formación de sus directivos.\n\nEn el gasto, los servicios financieros encabezan con USD 171 millones en 2026, seguidos por salud, con USD 75 millones. El informe observa que esa distribución no se corresponde con el peso de cada sector en la producción nacional: los servicios financieros explican el 3,9% del PBI, mientras que el comercio, la industria y las actividades inmobiliarias y empresariales pesan mucho más. El informe agrega que la agroindustria, la energía y la manufactura muestran desembolsos inferiores a su potencial.\n\nLo que falta para capturar el potencial\n\nLa primera condición que plantea el estudio para obtener todo el potencial económico de la IA es institucional. Desde 2017 el país lanzó un observatorio, un plan nacional y varios programas de IA, pero el informe no encontró evidencia de funcionamiento operativo en la mayoría. “La principal dificultad de Argentina radica en la falta de acople entre formulación de la estrategia y su implementación”, afirma.\n\nLa segunda condición está en las empresas. Los autores piden a las grandes compañías definir una estrategia, crear comités de gobernanza y alinear incentivos, y recomiendan para las pymes asistencia técnica permanente y centros donde probar soluciones antes de invertir. A esto se suma la “necesidad de construir plataformas digitales compartidas que mejoren la productividad de cadenas enteras”.\n\nLa tercera es el financiamiento. Desde 2022, 42 empresas argentinas de IA recibieron fondos, contra 350 en Brasil. El estudio propone mecanismos de coinversión con capital privado y programas de acompañamiento para las firmas con mayor potencial de crecer y exportar.\n\nEn infraestructura, el diagnóstico es aún más delicado. Argentina cuenta con cuatro centros de datos de hiperescaladores, frente a 29 de Brasil, y los autores consideran que “la ventana de oportunidad para la atracción de inversiones en data centers locales (hiperescaladores, neoclouds) en el corto plazo está cerrada”. Aun así, sostienen que esto no impide el desarrollo de la IA en el país, porque las empresas pueden usar la capacidad instalada en países vecinos.\n\nEl talento es el cuarto punto. El estudio estima 36.000 trabajadores especializados en IA en 2026 y 94.000 en 2029. Con una matrícula de 177.525 estudiantes de informática y solo 3.883 egresados en 2023, el escenario más restrictivo anticipa una brecha de unos 25.000 puestos en 2029. La respuesta que proponen incluye actualizar contenidos, ampliar las tecnicaturas y crear una ruta nacional de reconversión laboral.\n\nEl efecto sobre el empleo\n\nLa investigación de UdeSA también dimensiona la presión sobre el mercado de trabajo. En las empresas que adopten IA, estima que podrían desaparecer entre 212.000 y 416.000 puestos en 2030, según el criterio de exposición que se use. Frente a eso, la demanda de trabajadores especializados en IA llegaría a 160.000 en ese año.\n\nLos autores aclaran que no hay una correspondencia directa entre unos y otros, y que la cifra mide una presión de transición. En las entrevistas realizada por los autores del informe, ninguna empresa dijo haber despedido personal por la IA, aunque aparece un fenómeno que llaman “contratación evitada”: compañías que absorbieron más demanda sin sumar gente.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "Según un estudio de la Universidad de San Andrés, la IA podría generar un impacto económico de USD 17.714 millones en la Argentina en 2030, equivalente al 2,13% del PBI proyectado."
          },
          {
            "text": "Sin aplicar las recomendaciones del informe, el impacto de la IA en Argentina llegaría a USD 12.708 millones en 2030, un 1,5% del PBI."
          },
          {
            "text": "La diferencia de USD 5.006 millones entre escenarios es atribuida por los autores a una estrategia de competitividad."
          },
          {
            "text": "El modelo supone que la adopción empresarial de IA en Argentina pasa del 11,2% en 2025 al 16,5% en 2030."
          },
          {
            "text": "Uruguay es el líder de América Latina en adopción empresarial de IA, con un nivel de 16,5%."
          },
          {
            "text": "El gasto anual en IA de Argentina sería de USD 3.539 millones en 2030 en el escenario acelerado, frente a USD 2.763 millones en el escenario sin cambios."
          },
          {
            "text": "Según el estudio, la IA ya aporta USD 4.316 millones a la economía argentina, un 0,6% del PBI."
          },
          {
            "text": "El gasto en IA en Argentina es de USD 798 millones en 2026, el 0,12% del PBI, por debajo del promedio latinoamericano de 0,22%."
          },
          {
            "text": "El 34,7% de las aproximadamente 4.000 grandes empresas de Argentina adoptó alguna aplicación de IA."
          },
          {
            "text": "El estudio incluyó entrevistas con ejecutivos de 30 compañías."
          },
          {
            "text": "El 42,5% de los encuestados dijo contar con una estrategia de IA estructurada y comunicada, y apenas el 17,6% exige un caso de negocio con retorno financiero para aprobar proyectos."
          },
          {
            "text": "La adopción de IA se estima en 16% entre las pymes medianas y 8,5% entre las pequeñas en Argentina."
          },
          {
            "text": "El estudio afirma: \"El principal recurso escaso para implementar inteligencia artificial en las PyMEs es el tiempo de quien decide\"."
          },
          {
            "text": "Entre las pymes, el 85,4% de las empresas de software y tecnologías de la información usa IA, seguidas por finanzas y seguros con 30,5%."
          },
          {
            "text": "En gasto en IA, los servicios financieros encabezan con USD 171 millones en 2026, seguidos por salud con USD 75 millones."
          },
          {
            "text": "Los servicios financieros explican el 3,9% del PBI argentino."
          },
          {
            "text": "Desde 2017 Argentina lanzó un observatorio, un plan nacional y varios programas de IA, pero el informe no encontró evidencia de funcionamiento operativo en la mayoría."
          },
          {
            "text": "El informe afirma: \"La principal dificultad de Argentina radica en la falta de acople entre formulación de la estrategia y su implementación\"."
          },
          {
            "text": "Desde 2022, 42 empresas argentinas de IA recibieron financiamiento, contra 350 en Brasil."
          },
          {
            "text": "Argentina cuenta con cuatro centros de datos de hiperescaladores, frente a 29 de Brasil."
          },
          {
            "text": "Los autores consideran que \"la ventana de oportunidad para la atracción de inversiones en data centers locales (hiperescaladores, neoclouds) en el corto plazo está cerrada\"."
          },
          {
            "text": "El estudio estima 36.000 trabajadores especializados en IA en Argentina en 2026 y 94.000 en 2029."
          },
          {
            "text": "En 2023 había una matrícula de 177.525 estudiantes de informática en Argentina y solo 3.883 egresados."
          },
          {
            "text": "El escenario más restrictivo anticipa una brecha de unos 25.000 puestos de talento en IA en 2029."
          },
          {
            "text": "En las empresas que adopten IA podrían desaparecer entre 212.000 y 416.000 puestos de trabajo en 2030."
          },
          {
            "text": "La demanda de trabajadores especializados en IA en Argentina llegaría a 160.000 en 2030."
          },
          {
            "text": "En las entrevistas del informe, ninguna empresa dijo haber despedido personal por la IA."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Universidad de San Andrés (UdeSA)",
            "mentions": 4
          },
          {
            "name": "Argentina",
            "mentions": 9
          },
          {
            "name": "Uruguay",
            "mentions": 1
          },
          {
            "name": "América Latina",
            "mentions": 2
          },
          {
            "name": "Brasil",
            "mentions": 2
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Argentina comienza a lanzar iniciativas públicas de IA"
          },
          {
            "title": "Inicio del período de financiamiento a empresas de IA"
          },
          {
            "title": "Solo 3.883 egresados de informática"
          },
          {
            "title": "Adopción empresarial de IA del 11,2%"
          },
          {
            "title": "Gasto en IA de USD 798 millones"
          },
          {
            "title": "Servicios financieros lideran el gasto en IA"
          },
          {
            "title": "36.000 trabajadores especializados en IA"
          },
          {
            "title": "Proyectada brecha de 25.000 puestos de talento IA"
          },
          {
            "title": "IA podría aportar USD 17.714 millones a la economía"
          },
          {
            "title": "Escenario sin cambios: impacto de USD 12.708 millones"
          },
          {
            "title": "Adopción empresarial proyectada del 16,5%"
          },
          {
            "title": "Hasta 416.000 puestos podrían desaparecer por la IA"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 24,
            "ok": 28,
            "fuente_parcial": 2
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según un estudio de la Universidad de San Andrés, la IA podría generar un impacto económico de USD 17.714 millones en la Argentina en 2030, equivalente al 2,13% del PBI proyectado."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Sin aplicar las recomendaciones del informe, el impacto de la IA en Argentina llegaría a USD 12.708 millones en 2030, un 1,5% del PBI."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La diferencia de USD 5.006 millones entre escenarios es atribuida por los autores a una estrategia de competitividad."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Uruguay es el líder de América Latina en adopción empresarial de IA, con un nivel de 16,5%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El modelo supone que la adopción empresarial de IA en Argentina pasa del 11,2% en 2025 al 16,5% en 2030."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El gasto anual en IA de Argentina sería de USD 3.539 millones en 2030 en el escenario acelerado, frente a USD 2.763 millones en el escenario sin cambios."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El gasto en IA en Argentina es de USD 798 millones en 2026, el 0,12% del PBI, por debajo del promedio latinoamericano de 0,22%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según el estudio, la IA ya aporta USD 4.316 millones a la economía argentina, un 0,6% del PBI."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El 34,7% de las aproximadamente 4.000 grandes empresas de Argentina adoptó alguna aplicación de IA."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El estudio incluyó entrevistas con ejecutivos de 30 compañías."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El 42,5% de los encuestados dijo contar con una estrategia de IA estructurada y comunicada, y apenas el 17,6% exige un caso de negocio con retorno financiero para aprobar proyectos."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La adopción de IA se estima en 16% entre las pymes medianas y 8,5% entre las pequeñas en Argentina."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Entre las pymes, el 85,4% de las empresas de software y tecnologías de la información usa IA, seguidas por finanzas y seguros con 30,5%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En gasto en IA, los servicios financieros encabezan con USD 171 millones en 2026, seguidos por salud con USD 75 millones."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Los servicios financieros explican el 3,9% del PBI argentino."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Desde 2022, 42 empresas argentinas de IA recibieron financiamiento, contra 350 en Brasil."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Argentina cuenta con cuatro centros de datos de hiperescaladores, frente a 29 de Brasil."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El estudio estima 36.000 trabajadores especializados en IA en Argentina en 2026 y 94.000 en 2029."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El escenario más restrictivo anticipa una brecha de unos 25.000 puestos de talento en IA en 2029."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En 2023 había una matrícula de 177.525 estudiantes de informática en Argentina y solo 3.883 egresados."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En las empresas que adopten IA podrían desaparecer entre 212.000 y 416.000 puestos de trabajo en 2030."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La demanda de trabajadores especializados en IA en Argentina llegaría a 160.000 en 2030."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "linea-tiempo",
          "tipo": "linea_tiempo",
          "titulo": "Línea de tiempo",
          "fuente": null,
          "enlace": null,
          "unidad": null,
          "origen_datos": null,
          "puntos": [
            {
              "x": "2017",
              "y": null,
              "etiqueta": "Argentina comienza a lanzar iniciativas públicas de IA",
              "descripcion": "Desde 2017 el país lanzó un observatorio, un plan nacional y varios programas de IA, aunque el informe no halló evidencia de funcionamiento operativo en la mayoría.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p14",
                "inicio": 4007,
                "fin": 4011,
                "cita": "2017"
              },
              "alertas": []
            },
            {
              "x": "2022",
              "y": null,
              "etiqueta": "Inicio del período de financiamiento a empresas de IA",
              "descripcion": "Desde 2022, 42 empresas argentinas de IA recibieron fondos, frente a 350 en Brasil.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p16",
                "inicio": 4737,
                "fin": 4741,
                "cita": "2022"
              },
              "alertas": []
            },
            {
              "x": "2023",
              "y": null,
              "etiqueta": "Solo 3.883 egresados de informática",
              "descripcion": "Con una matrícula de 177.525 estudiantes de informática, en 2023 egresaron solo 3.883.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p18",
                "inicio": 5634,
                "fin": 5638,
                "cita": "2023"
              },
              "alertas": []
            },
            {
              "x": "2025",
              "y": null,
              "etiqueta": "Adopción empresarial de IA del 11,2%",
              "descripcion": "El modelo parte de una adopción empresarial de IA del 11,2% en 2025.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p3",
                "inicio": 823,
                "fin": 827,
                "cita": "2025"
              },
              "alertas": []
            },
            {
              "x": "2026",
              "y": null,
              "etiqueta": "Gasto en IA de USD 798 millones",
              "descripcion": "El gasto en IA en Argentina es de USD 798 millones en 2026, el 0,12% del PBI, por debajo del promedio latinoamericano del 0,22%.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p4",
                "inicio": 1224,
                "fin": 1228,
                "cita": "2026"
              },
              "alertas": []
            },
            {
              "x": "2026",
              "y": null,
              "etiqueta": "Servicios financieros lideran el gasto en IA",
              "descripcion": "Los servicios financieros encabezan el gasto en IA con USD 171 millones en 2026, seguidos por salud con USD 75 millones.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p4",
                "inicio": 1224,
                "fin": 1228,
                "cita": "2026"
              },
              "alertas": []
            },
            {
              "x": "2026",
              "y": null,
              "etiqueta": "36.000 trabajadores especializados en IA",
              "descripcion": "El estudio estima que en 2026 habrá 36.000 trabajadores especializados en IA en el país.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p4",
                "inicio": 1224,
                "fin": 1228,
                "cita": "2026"
              },
              "alertas": []
            },
            {
              "x": "2029",
              "y": null,
              "etiqueta": "Proyectada brecha de 25.000 puestos de talento IA",
              "descripcion": "Se estiman 94.000 trabajadores especializados en IA en 2029, y el escenario más restrictivo anticipa una brecha de unos 25.000 puestos.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p18",
                "inicio": 5546,
                "fin": 5550,
                "cita": "2029"
              },
              "alertas": []
            },
            {
              "x": "2030",
              "y": null,
              "etiqueta": "IA podría aportar USD 17.714 millones a la economía",
              "descripcion": "Con una adopción acelerada, la IA generaría un impacto de USD 17.714 millones en 2030, el 2,13% del PBI proyectado.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 110,
                "fin": 114,
                "cita": "2030"
              },
              "alertas": []
            },
            {
              "x": "2030",
              "y": null,
              "etiqueta": "Escenario sin cambios: impacto de USD 12.708 millones",
              "descripcion": "Si la difusión sigue su curso actual, el impacto llegaría a USD 12.708 millones en 2030, un 1,5% del PBI.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 110,
                "fin": 114,
                "cita": "2030"
              },
              "alertas": []
            },
            {
              "x": "2030",
              "y": null,
              "etiqueta": "Adopción empresarial proyectada del 16,5%",
              "descripcion": "El modelo supone que la adopción empresarial alcanza el 16,5% en 2030, nivel actual de Uruguay, con un gasto anual en IA de USD 3.539 millones.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 110,
                "fin": 114,
                "cita": "2030"
              },
              "alertas": []
            },
            {
              "x": "2030",
              "y": null,
              "etiqueta": "Hasta 416.000 puestos podrían desaparecer por la IA",
              "descripcion": "En empresas que adopten IA podrían desaparecer entre 212.000 y 416.000 puestos en 2030, mientras la demanda de especialistas en IA llegaría a 160.000.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 110,
                "fin": 114,
                "cita": "2030"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        },
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Argentina",
              "y": 4.0,
              "etiqueta": "Argentina",
              "descripcion": "País cuyo potencial económico vinculado a la IA analiza el estudio.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 97,
                "fin": 106,
                "cita": "Argentina"
              },
              "alertas": []
            },
            {
              "x": "América Latina",
              "y": 2.0,
              "etiqueta": "América Latina",
              "descripcion": "Región usada como parámetro de comparación del gasto y la adopción de IA.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 890,
                "fin": 904,
                "cita": "América Latina"
              },
              "alertas": []
            },
            {
              "x": "Brasil",
              "y": 2.0,
              "etiqueta": "Brasil",
              "descripcion": "País comparado con Argentina en financiamiento de empresas de IA y centros de datos.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p16",
                "inicio": 4805,
                "fin": 4811,
                "cita": "Brasil"
              },
              "alertas": []
            },
            {
              "x": "Universidad de San Andrés (UdeSA)",
              "y": 1.0,
              "etiqueta": "Universidad de San Andrés (UdeSA)",
              "descripcion": "Institución autora del estudio sobre el impacto económico de la inteligencia artificial en la Argentina.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 219,
                "fin": 244,
                "cita": "Universidad de San Andrés"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Universidad de San Andrés»"
              ]
            },
            {
              "x": "Uruguay",
              "y": 1.0,
              "etiqueta": "Uruguay",
              "descripcion": "País líder de América Latina en adopción empresarial de IA, tomado como referencia para el escenario de 2030.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 869,
                "fin": 876,
                "cita": "Uruguay"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": []
    }
  },
  "06": {
    "titulo": "El maíz lleva vendido el 65% de la producción y la soja, el 50%",
    "cuerpo": "El mercado internacional de granos atraviesa una etapa de presión bajista por el avance de la cosecha estadounidense, las perspectivas de una mayor oferta y la toma de ganancias de los fondos de inversión. En Argentina, este contexto lleva a los productores a postergar operaciones a la espera de mejores precios, aunque con diferencias entre cultivos. Según Dante Romano, profesor e investigador del Centro de Agronegocios y Alimentos de la Universidad Austral, el maíz conserva un desempeño comercial relativamente sólido, mientras que la soja muestra un ritmo de ventas más lento.\n\nEn maíz, la siembra temprana cubre el 39,8% de las 8,4 millones de hectáreas previstas, con un avance semanal de cinco puntos porcentuales y seis puntos por encima del registro de la campaña anterior. Las bajas temperaturas generaron emergencias desparejas y amarillamiento en algunas zonas, mientras que las lluvias pronosticadas podrían mejorar la humedad de los suelos, aunque también demorar las labores. En el plano comercial, los negocios con precio representan el 65% de la producción y la originación alcanza el 75%, nueve y ocho puntos por encima de sus respectivos promedios históricos.\n\nLa situación de la soja es menos favorable en términos comerciales. Al 14 de octubre, las operaciones con precio de la campaña 2025/26 sumaban 211.000 toneladas semanales, frente a un promedio superior a las 350.000 toneladas para esta época. Así, las ventas con precio cubren el 50% de la producción y la originación llega al 62%, ambos niveles tres puntos porcentuales por debajo de los registros históricos. Si bien las compras chinas sostienen parte de la demanda internacional, el avance de la siembra brasileña —que en Mato Grosso ya alcanzó el 76% del área prevista— agrega un factor relevante para la evolución de las cotizaciones.\n\nEn el mercado del trigo, la proximidad de la cosecha argentina coincide con una oferta global abundante y expectativas de una posible reanudación de las negociaciones entre Rusia y Ucrania, explica Romano. Y agrega que las estimaciones privadas sitúan la producción nacional entre 22 y 23,8 millones de toneladas, aunque la proporción de cultivos en condición buena o excelente cayó al 61,7%, frente al 88% registrado un año atrás, debido al impacto de las heladas. Por el momento, este deterioro no se traduce en una previsión de menor producción total.\n\nOtro factor de presión para el trigo es el volumen de mercadería de la campaña anterior que todavía permanece sin vender. A unos 15 días del ingreso de la nueva cosecha, quedan entre cuatro y cinco millones de toneladas pendientes de comercialización, mientras que el espacio disponible para recibir la nueva producción equivale al 21% de la cosecha estimada, por debajo del promedio histórico del 28%. La demanda brasileña podría contribuir a absorber parte de la oferta, aunque el ritmo de las ventas será determinante para la formación de precios.\n\nEn el escenario externo, los mayores stocks proyectados en Estados Unidos presionan sobre el maíz, mientras que la demanda china y el avance de la siembra en Brasil condicionan las perspectivas de la soja. Para el trigo, las restricciones logísticas rusas en el mar Negro conviven con la expectativa de una mayor disponibilidad de mercadería y con las necesidades de importación de los mercados compradores. En este contexto, el ingreso de las cosechas, la evolución de la demanda internacional y la capacidad de los productores argentinos para sostener o acelerar las ventas serán claves para definir el rumbo comercial de los tres granos en las próximas semanas, concluye el profesor e investigador del Centro de Agronegocios y Alimentos de la Universidad Austral.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "Las ventas con precio de maíz representan el 65% de la producción y las de soja el 50%."
          },
          {
            "text": "Dante Romano es profesor e investigador del Centro de Agronegocios y Alimentos de la Universidad Austral."
          },
          {
            "text": "Según Dante Romano, el maíz conserva un desempeño comercial relativamente sólido mientras que la soja muestra un ritmo de ventas más lento."
          },
          {
            "text": "La siembra temprana de maíz cubre el 39,8% de las 8,4 millones de hectáreas previstas, con un avance semanal de cinco puntos porcentuales."
          },
          {
            "text": "El avance de la siembra de maíz está seis puntos por encima del registro de la campaña anterior."
          },
          {
            "text": "En maíz, la originación alcanza el 75% de la producción, y los negocios con precio (65%) y la originación están nueve y ocho puntos por encima de sus promedios históricos."
          },
          {
            "text": "Al 14 de octubre, las operaciones con precio de soja de la campaña 2025/26 sumaban 211.000 toneladas semanales, frente a un promedio superior a 350.000 toneladas para esta época."
          },
          {
            "text": "En soja, las ventas con precio cubren el 50% de la producción y la originación llega al 62%, ambos tres puntos por debajo de los registros históricos."
          },
          {
            "text": "La siembra de soja en Mato Grosso, Brasil, ya alcanzó el 76% del área prevista."
          },
          {
            "text": "Las estimaciones privadas sitúan la producción argentina de trigo entre 22 y 23,8 millones de toneladas."
          },
          {
            "text": "La proporción de trigo en condición buena o excelente cayó al 61,7%, frente al 88% de un año atrás, por el impacto de las heladas."
          },
          {
            "text": "A unos 15 días del ingreso de la nueva cosecha, quedan entre cuatro y cinco millones de toneladas de trigo de la campaña anterior sin comercializar."
          },
          {
            "text": "El espacio disponible para recibir la nueva cosecha de trigo equivale al 21% de la cosecha estimada, por debajo del promedio histórico del 28%."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Dante Romano",
            "mentions": 4
          },
          {
            "name": "Centro de Agronegocios y Alimentos",
            "mentions": 2
          },
          {
            "name": "Universidad Austral",
            "mentions": 2
          },
          {
            "name": "Argentina",
            "mentions": 4
          },
          {
            "name": "Estados Unidos",
            "mentions": 2
          },
          {
            "name": "China",
            "mentions": 2
          },
          {
            "name": "Brasil",
            "mentions": 3
          },
          {
            "name": "Mato Grosso",
            "mentions": 1
          },
          {
            "name": "Rusia",
            "mentions": 2
          },
          {
            "name": "Ucrania",
            "mentions": 1
          },
          {
            "name": "Mar Negro",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Trigo en condición buena o excelente alcanzaba 88%"
          },
          {
            "title": "Ventas semanales de soja 2025/26 sumaban 211.000 toneladas"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 13,
            "ok": 20,
            "fecha_inferida": 1
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "La siembra temprana de maíz cubre el 39,8% de las 8,4 millones de hectáreas previstas, con un avance semanal de cinco puntos porcentuales."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Las ventas con precio de maíz representan el 65% de la producción y las de soja el 50%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En maíz, la originación alcanza el 75% de la producción, y los negocios con precio (65%) y la originación están nueve y ocho puntos por encima de sus promedios históricos."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Al 14 de octubre, las operaciones con precio de soja de la campaña 2025/26 sumaban 211.000 toneladas semanales, frente a un promedio superior a 350.000 toneladas para esta época."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En soja, las ventas con precio cubren el 50% de la producción y la originación llega al 62%, ambos tres puntos por debajo de los registros históricos."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La siembra de soja en Mato Grosso, Brasil, ya alcanzó el 76% del área prevista."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La proporción de trigo en condición buena o excelente cayó al 61,7%, frente al 88% de un año atrás, por el impacto de las heladas."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Las estimaciones privadas sitúan la producción argentina de trigo entre 22 y 23,8 millones de toneladas."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "A unos 15 días del ingreso de la nueva cosecha, quedan entre cuatro y cinco millones de toneladas de trigo de la campaña anterior sin comercializar."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El espacio disponible para recibir la nueva cosecha de trigo equivale al 21% de la cosecha estimada, por debajo del promedio histórico del 28%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Argentina",
              "y": 2.0,
              "etiqueta": "Argentina",
              "descripcion": "País cuyos productores postergan ventas de granos a la espera de mejores precios.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 209,
                "fin": 218,
                "cita": "Argentina"
              },
              "alertas": []
            },
            {
              "x": "Centro de Agronegocios y Alimentos",
              "y": 2.0,
              "etiqueta": "Centro de Agronegocios y Alimentos",
              "descripcion": "Centro de la Universidad Austral al que pertenece Dante Romano.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 401,
                "fin": 435,
                "cita": "Centro de Agronegocios y Alimentos"
              },
              "alertas": []
            },
            {
              "x": "Universidad Austral",
              "y": 2.0,
              "etiqueta": "Universidad Austral",
              "descripcion": "Universidad de la que depende el Centro de Agronegocios y Alimentos.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 442,
                "fin": 461,
                "cita": "Universidad Austral"
              },
              "alertas": []
            },
            {
              "x": "Dante Romano",
              "y": 1.0,
              "etiqueta": "Dante Romano",
              "descripcion": "Profesor e investigador de la Universidad Austral que analiza el mercado de granos.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 359,
                "fin": 371,
                "cita": "Dante Romano"
              },
              "alertas": []
            },
            {
              "x": "Mato Grosso",
              "y": 1.0,
              "etiqueta": "Mato Grosso",
              "descripcion": "Estado brasileño donde la siembra de soja alcanzó el 76% del área prevista.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 1708,
                "fin": 1719,
                "cita": "Mato Grosso"
              },
              "alertas": []
            },
            {
              "x": "Rusia",
              "y": 1.0,
              "etiqueta": "Rusia",
              "descripcion": "País cuyas posibles negociaciones con Ucrania y restricciones logísticas afectan al trigo.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 1997,
                "fin": 2002,
                "cita": "Rusia"
              },
              "alertas": []
            },
            {
              "x": "Ucrania",
              "y": 1.0,
              "etiqueta": "Ucrania",
              "descripcion": "País en posible reanudación de negociaciones con Rusia.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 2005,
                "fin": 2012,
                "cita": "Ucrania"
              },
              "alertas": []
            },
            {
              "x": "Estados Unidos",
              "y": 1.0,
              "etiqueta": "Estados Unidos",
              "descripcion": "País cuya cosecha y mayores stocks presionan los precios del maíz.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p6",
                "inicio": 2991,
                "fin": 3005,
                "cita": "Estados Unidos"
              },
              "alertas": []
            },
            {
              "x": "China",
              "y": 1.0,
              "etiqueta": "China",
              "descripcion": "País cuyas compras sostienen parte de la demanda internacional de soja.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p6",
                "inicio": 3055,
                "fin": 3060,
                "cita": "china"
              },
              "alertas": []
            },
            {
              "x": "Brasil",
              "y": 1.0,
              "etiqueta": "Brasil",
              "descripcion": "País cuyo avance de siembra de soja y demanda de trigo influyen en el mercado.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p6",
                "inicio": 3090,
                "fin": 3096,
                "cita": "Brasil"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": [
        "línea de tiempo omitida: 1 evento(s) sostenidos por la nota, hacen falta 3"
      ]
    }
  },
  "07": {
    "titulo": "Con cambios, el Senado aprobó y giró a Diputados la reforma a la ley de salud mental",
    "cuerpo": "El texto en discusión sufrió modificaciones aceptadas por el oficialismo con el fin de poder aprobarlo; se mantiene la prohibición de crear manicomios y la internación como una medida excepcional\n\nEl Senado aprobó y giró en revisión a la Cámara de Diputados la reforma de la Ley Nacional de Salud Mental (26.657), un proyecto enviado por el Poder Ejecutivo pero que sufrió severas modificaciones en el recinto mismo de la Cámara alta.\n\nLa iniciativa fue aprobada poco antes de la 1 de la madrugada por 42 votos a favor, aportados por el oficialismo y sus aliados, y 21 en contra, todos del kirchnerismo.\n\nEl texto sometido a discusión es el dictamen de comisión impulsado por el oficialismo hace dos semanas que, no obstante, sufrió modificaciones hasta minutos antes del inicio del debate con la intención de conseguir los votos que permitan su aprobación.\n\nPor lo pronto, el proyecto que pasará en revisión a la Cámara de Diputados ya no es el que redactó la Casa Rosada con la intención de levantar la prohibición en la creación de manicomios que había establecido la ley sancionada por el kirchnerismo en 2010. Esa restricción seguirá vigente y se considera a la internación como una medida de carácter excepcional.\n\nLa iniciativa genera mucha resistencia, como lo afirmó el peronista disidente Guillermo Andrada (Catamarca), quien destacó la voluntad de consensuar manifestada por el oficialismo, pero aseguró que “no alcanza con cambiar el criterio clínico de la internación de un paciente y con aplicar controles judiciales o de internación sino tenemos las herramientas necesarias para controlarlos”.\n\n“No vamos a cercenar garantías y no vamos a cejar para que el paradigma comunitario esté presente”, afirmó el senador catamarqueño, quien reclamó garantías de financiamiento al Estado nacional. De hecho, dijo que una de las causas del fracaso de la ley kirchnerista fue, precisamente, la falta de presupuesto.\n\nEn la misma sintonía, se manifestó el misionero Carlos Arce, quien también apoyó el pedido de financiamiento nacional para las provincias, al tiempo que destacó “la enorme importancia de una evaluación clínica integral”, instancia que se incorporó al texto como parte de la discusión entre los bloques del Senado.\n\nEn el cierre del debate, la jefe del oficialismo, Patricia Bullrich (Capital), defendió la iniciativa y destacó las fallas del régimen vigente al recordar el caso de Juan Pablo Roldán, el policía de la Ciudad que murió asesinado a manos de Rodrigo Roza, un enfermo de esquizofrenia que había abandonado los medicamentos como consecuencia de la laxitud de la ley votada en 2010.\n\n“Esto salva vidas”\n\n“Intervenir a tiempo cuida a la sociedad y cuida también a las personas con problemas mentales”, afirmó la jefa de la bancada oficialista. “Esto salva vidas”, agregó.\n\nLa iniciativa en debate busca actualizar el marco regulatorio para garantizar la protección integral de la salud mental incorporando pautas específicas para la prevención, tratamiento, rehabilitación e inclusión comunitaria en todo el territorio argentino.\n\nEntre sus ejes conceptuales, el dictamen define a la salud mental como un proceso determinado por componentes históricos, socioeconómicos, culturales, biológicos y psicológicos, partiendo de la presunción legal de capacidad de todas las personas. Asimismo, reafirma la prohibición estricta de formular diagnósticos basados en criterios discriminatorios -tales como estatus socioeconómico, pertenencia cultural, identidad sexual o demandas familiares-, y establece que la existencia de un diagnóstico no implica por sí misma presunción de riesgo o restricción de la capacidad.\n\nEn lo relativo a la conformación de los equipos de atención, el texto dispone que la asistencia estará a cargo de profesionales interdisciplinarios de la salud que incluyan obligatoriamente a un médico psiquiatra, junto a psicólogos, trabajadores sociales, enfermeros y terapistas ocupacionales.\n\nComo innovación relevante, ante la imposibilidad de garantizar la presencia física del psiquiatra en determinadas jurisdicciones, se autoriza su intervención remota a través de teleconsultas sincrónicas para avalar evaluaciones y tratamientos.\n\nRespecto a las modalidades asistenciales, la iniciativa reafirma que la internación es una medida terapéutica de carácter excepcional que solo procede cuando ofrece mayores beneficios que los abordajes ambulatorios.\n\nPara evitar la institucionalización indefinida, se estipula que desde el primer día de diagnóstico debe elaborarse un plan de egreso que integre la historia clínica, fijando el límite de 180 días para considerar una internación como prolongada, supuesto que activa la intervención de oficio del Órgano de Revisión.\n\nEl régimen para internaciones involuntarias exige la verificación de un riesgo grave de daño para la vida o la integridad física de la persona o de terceros, evaluado bajo un criterio situacional e interdisciplinario con la firma de dos profesionales.\n\nDichas medidas deberán ser notificadas en un plazo máximo de 24 horas al juez competente y al órgano de revisión, otorgando al magistrado un lapso de tres días para convalidar la medida, requerir peritajes adicionales o disponer la inmediata externación.\n\nEn materia de infraestructura, las internaciones deberán efectuarse en hospitales generales o centros especializados en psiquiatría y salud mental, prohibiéndose expresamente la creación de nuevos manicomios o el desarrollo de prácticas manicomiales.\n\nEl proyecto reconoce la facultad de fijar directivas anticipadas sobre tratamientos futuros y adecuar el consentimiento informado a pautas de pleno discernimiento. En paralelo, se contemplan los derechos de los familiares a recibir psicoeducación y apoyo, al tiempo que se establece la obligación legal de los representantes o allegados de presentarse al momento del alta hospitalaria para acompañar el proceso de externación.\n\nPara la franja infantojuvenil y el abordaje de consumos problemáticos en menores, se fijan salvaguardas específicas que imponen la atención en dispositivos diferenciados de los adultos, restringiendo las internaciones en unidades de adultos únicamente a casos excepcionales y por el tiempo mínimo. Asimismo, la normativa garantiza la autonomía progresiva, el derecho a ser escuchado y la no criminalización de las situaciones de consumo en niños, niñas y adolescentes.\n\nPor último, el proyecto incorpora un esquema de financiamiento federal mediante el cual el Estado nacional brindará asistencia técnica y económica a las provincias y a la Ciudad Autónoma de Buenos Aires a través de convenios bilaterales. Estos recursos, coordinados en el ámbito del Consejo Federal de Salud (COFESA), se destinarán prioritariamente al fortalecimiento de personal, desarrollo de telemedicina, dispositivos comunitarios y partidas presupuestarias específicas del Ministerio de Salud de la Nación.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "El Senado aprobó y giró en revisión a la Cámara de Diputados la reforma de la Ley Nacional de Salud Mental 26.657."
          },
          {
            "text": "El proyecto de reforma de la Ley de Salud Mental fue enviado por el Poder Ejecutivo."
          },
          {
            "text": "La reforma fue aprobada en el Senado poco antes de la 1 de la madrugada por 42 votos a favor y 21 en contra."
          },
          {
            "text": "Los 42 votos afirmativos fueron aportados por el oficialismo y sus aliados, y los 21 negativos fueron todos del kirchnerismo."
          },
          {
            "text": "El texto debatido es el dictamen de comisión impulsado por el oficialismo dos semanas antes de la sesión, con modificaciones hasta minutos antes del debate."
          },
          {
            "text": "El proyecto original de la Casa Rosada buscaba levantar la prohibición de crear manicomios establecida por la ley de 2010."
          },
          {
            "text": "La Ley 26.657 de Salud Mental fue sancionada en 2010."
          },
          {
            "text": "El texto aprobado mantiene la prohibición de crear manicomios y considera la internación como medida excepcional."
          },
          {
            "text": "El senador Guillermo Andrada (Catamarca) afirmó que \"no alcanza con cambiar el criterio clínico de la internación de un paciente y con aplicar controles judiciales o de internación sino tenemos las herramientas necesarias para controlarlos\"."
          },
          {
            "text": "Andrada afirmó: \"No vamos a cercenar garantías y no vamos a cejar para que el paradigma comunitario esté presente\"."
          },
          {
            "text": "Andrada dijo que una de las causas del fracaso de la ley de 2010 fue la falta de presupuesto."
          },
          {
            "text": "El senador misionero Carlos Arce destacó \"la enorme importancia de una evaluación clínica integral\" y apoyó el pedido de financiamiento nacional para las provincias."
          },
          {
            "text": "La evaluación clínica integral se incorporó al texto como resultado de la negociación entre bloques del Senado."
          },
          {
            "text": "El policía de la Ciudad Juan Pablo Roldán fue asesinado por Rodrigo Roza, un enfermo de esquizofrenia que había abandonado la medicación."
          },
          {
            "text": "Patricia Bullrich, jefa del bloque oficialista, afirmó: \"Intervenir a tiempo cuida a la sociedad y cuida también a las personas con problemas mentales\" y \"Esto salva vidas\"."
          },
          {
            "text": "El proyecto exige que los equipos de atención incluyan obligatoriamente un médico psiquiatra, junto a psicólogos, trabajadores sociales, enfermeros y terapistas ocupacionales."
          },
          {
            "text": "El proyecto autoriza la intervención remota del psiquiatra mediante teleconsultas sincrónicas cuando no se pueda garantizar su presencia física."
          },
          {
            "text": "El proyecto fija en 180 días el límite para considerar prolongada una internación, lo que activa la intervención de oficio del Órgano de Revisión."
          },
          {
            "text": "Las internaciones involuntarias requieren riesgo grave de daño verificado con la firma de dos profesionales."
          },
          {
            "text": "Las internaciones involuntarias deben notificarse en un máximo de 24 horas al juez y al órgano de revisión, y el juez tiene tres días para convalidarlas, pedir peritajes o disponer la externación."
          },
          {
            "text": "El proyecto incorpora un esquema de financiamiento federal mediante convenios bilaterales con las provincias y la CABA, coordinado en el ámbito del COFESA."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Senado de la Nación",
            "mentions": 5
          },
          {
            "name": "Cámara de Diputados",
            "mentions": 2
          },
          {
            "name": "Ley Nacional de Salud Mental (26.657)",
            "mentions": 5
          },
          {
            "name": "Poder Ejecutivo Nacional (Casa Rosada)",
            "mentions": 2
          },
          {
            "name": "Kirchnerismo",
            "mentions": 3
          },
          {
            "name": "Guillermo Andrada",
            "mentions": 3
          },
          {
            "name": "Catamarca",
            "mentions": 2
          },
          {
            "name": "Carlos Arce",
            "mentions": 1
          },
          {
            "name": "Misiones",
            "mentions": 1
          },
          {
            "name": "Patricia Bullrich",
            "mentions": 3
          },
          {
            "name": "Juan Pablo Roldán",
            "mentions": 1
          },
          {
            "name": "Rodrigo Roza",
            "mentions": 1
          },
          {
            "name": "Policía de la Ciudad",
            "mentions": 1
          },
          {
            "name": "Ciudad Autónoma de Buenos Aires",
            "mentions": 2
          },
          {
            "name": "Órgano de Revisión",
            "mentions": 2
          },
          {
            "name": "Consejo Federal de Salud (COFESA)",
            "mentions": 1
          },
          {
            "name": "Ministerio de Salud de la Nación",
            "mentions": 1
          },
          {
            "name": "Argentina",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Sanción de la Ley Nacional de Salud Mental 26.657"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 21,
            "ok": 37,
            "nombre_no_encontrado": 2,
            "fuente_parcial": 2
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "La Ley 26.657 de Salud Mental fue sancionada en 2010."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El Senado aprobó y giró en revisión a la Cámara de Diputados la reforma de la Ley Nacional de Salud Mental 26.657."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La reforma fue aprobada en el Senado poco antes de la 1 de la madrugada por 42 votos a favor y 21 en contra."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Los 42 votos afirmativos fueron aportados por el oficialismo y sus aliados, y los 21 negativos fueron todos del kirchnerismo."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El proyecto fija en 180 días el límite para considerar prolongada una internación, lo que activa la intervención de oficio del Órgano de Revisión."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Las internaciones involuntarias deben notificarse en un máximo de 24 horas al juez y al órgano de revisión, y el juez tiene tres días para convalidarlas, pedir peritajes o disponer la externación."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Senado de la Nación",
              "y": 2.0,
              "etiqueta": "Senado de la Nación",
              "descripcion": "Cámara alta que aprobó y giró a Diputados la reforma de la ley de salud mental.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 200,
                "fin": 206,
                "cita": "Senado"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Senado»"
              ]
            },
            {
              "x": "Cámara de Diputados",
              "y": 2.0,
              "etiqueta": "Cámara de Diputados",
              "descripcion": "Cámara que recibirá en revisión el proyecto aprobado por el Senado.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 238,
                "fin": 257,
                "cita": "Cámara de Diputados"
              },
              "alertas": []
            },
            {
              "x": "Kirchnerismo",
              "y": 2.0,
              "etiqueta": "Kirchnerismo",
              "descripcion": "Espacio que votó en contra y que sancionó la ley vigente en 2010.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 590,
                "fin": 602,
                "cita": "kirchnerismo"
              },
              "alertas": []
            },
            {
              "x": "Órgano de Revisión",
              "y": 2.0,
              "etiqueta": "Órgano de Revisión",
              "descripcion": "Organismo que interviene de oficio en internaciones prolongadas e involuntarias.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p17",
                "inicio": 4692,
                "fin": 4710,
                "cita": "Órgano de Revisión"
              },
              "alertas": []
            },
            {
              "x": "Ley Nacional de Salud Mental (26.657)",
              "y": 1.0,
              "etiqueta": "Ley Nacional de Salud Mental (26.657)",
              "descripcion": "Ley sancionada en 2010 cuya reforma fue aprobada por el Senado.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 275,
                "fin": 303,
                "cita": "Ley Nacional de Salud Mental"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Ley Nacional de Salud Mental»"
              ]
            },
            {
              "x": "Poder Ejecutivo Nacional (Casa Rosada)",
              "y": 1.0,
              "etiqueta": "Poder Ejecutivo Nacional (Casa Rosada)",
              "descripcion": "Envió el proyecto de reforma, que sufrió modificaciones en el Senado.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p5",
                "inicio": 961,
                "fin": 972,
                "cita": "Casa Rosada"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Casa Rosada»"
              ]
            },
            {
              "x": "Guillermo Andrada",
              "y": 1.0,
              "etiqueta": "Guillermo Andrada",
              "descripcion": "Senador peronista disidente por Catamarca que reclamó financiamiento nacional.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p6",
                "inicio": 1299,
                "fin": 1316,
                "cita": "Guillermo Andrada"
              },
              "alertas": []
            },
            {
              "x": "Catamarca",
              "y": 1.0,
              "etiqueta": "Catamarca",
              "descripcion": "Provincia representada por Guillermo Andrada.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p6",
                "inicio": 1318,
                "fin": 1327,
                "cita": "Catamarca"
              },
              "alertas": []
            },
            {
              "x": "Carlos Arce",
              "y": 1.0,
              "etiqueta": "Carlos Arce",
              "descripcion": "Senador misionero que apoyó el pedido de financiamiento y destacó la evaluación clínica integral.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p8",
                "inicio": 1969,
                "fin": 1980,
                "cita": "Carlos Arce"
              },
              "alertas": []
            },
            {
              "x": "Patricia Bullrich",
              "y": 1.0,
              "etiqueta": "Patricia Bullrich",
              "descripcion": "Jefa del bloque oficialista en el Senado que defendió la iniciativa en el cierre del debate.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p9",
                "inicio": 2286,
                "fin": 2303,
                "cita": "Patricia Bullrich"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": [
            "2 entidad(es) no se encontraron en la nota y se omitieron"
          ]
        }
      ],
      "contextos": [],
      "avisos": [
        "línea de tiempo omitida: 1 evento(s) sostenidos por la nota, hacen falta 3"
      ]
    }
  },
  "08": {
    "titulo": "Tras ceder cambios, el Gobierno dictaminó el proyecto Malvinas",
    "cuerpo": "El oficialismo consiguió este miércoles el dictamen de mayoría del proyecto de Defensa de la Soberanía Nacional, que busca, entre otros puntos, defender los recursos naturales en las Islas Malvinas. Tras varias conexiones a los bloques aliados, el texto quedó listo para ser tratado en el recinto y la fecha tentativa que manejan los libertarios es el jueves 12 de noviembre. De todas formas, podría haber cambios en el cronograma ya que se trata de una semana “corta” por la visita del Papa León XIV a la Argentina.\n\nEl proyecto del Gobierno, impulsado principalmente por el asesor presidencial Santiago Caputo, agrava las sanciones por explotación no autorizada de recursos naturales en el Atlántico Sur. No se limita a la actividad hidrocarburífera sino que incluye toda explotación de recursos renovables o no renovables. También incluye sanciones para empresas, socios y proveedores: prevé multas y suspensión o cancelación de habilitaciones vigentes en la Argentina.\n\nJustamente este fue uno de los puntos que generó mayores cuestionamientos. Por ejemplo, subsecretario de Estado de Estados Unidos, Christopher Landau, le transmitió en persona al presidente Milei la preocupación de la Administración Trump sobre las posibles consecuencias que las sanciones del primer capítulo podrían generar para las empresas estadounidenses.\n\nEn ese sentido, los libertarios aceptaron limitar las sanciones a quienes ejecuten negocios ilegales dentro del territorio argentino en carácter de operadoras directas, licenciatarias, proveedores de estas y accionistas directos de los proyectos. De esta forma, quedan eximidos de responsabilidad los accionistas minoritarios, con participaciones de hasta el 2%, y los fondos de inversión indirectos que tengan algún tipo de participación en las empresas explotadoras.\n\nPor otro lado, la iniciativa crea el Consejo de Seguridad Nacional, integrado de forma permanente por el Presidente, el jefe de Gabinete, los ministros de Relaciones Exteriores, Defensa y Economía, el secretario de Inteligencia de Estado y la secretaria Legal y Técnica.\n\nEste órgano será el encargado de coordinar de manera unificada la estrategia de defensa, inteligencia y seguridad interior. Estará presidido por el Presidente y tendrá la facultad de controlar, aceptar o rechazar las inversiones impulsadas por Estados extranjeros y empresas con capitales del mismo origen en sectores como defensa, telecomunicaciones, energía, hidrocarburos, minería y actividades espaciales.\n\nAnte los pedidos de varios aliados, el oficialismo habilitó la participación del Presidente de la Cámara de Diputados, el presidente provisional del Senado, gobernadores y el Ministerio de Seguridad Interior como miembros no permanentes cuando el asunto en cuestión lo amerite.\n\nLa Libertad Avanza tamién aceptó conformar una Comisión Bicameral de Seguimiento dentro del Congreso, facultada para auditar las decisiones y procesos del Consejo, de manera similar a la bicameral que controla a la Secretaría de Inteligencia del Estado. La propuesta había sido impulsada por el diputado Eduardo Falcone, del Movimiento de Integración y Desarrollo (MID), para garantizar la participación del Parlamento en el control del nuevo organismo, que estará integrado únicamente por miembros del Poder Ejecutivo. Según el cambio anunciado, el Ejecutivo deberá informar a la bicameral, dentro de las 48 horas, las medidas de seguridad que adopte el Consejo.\n\nOtro de los puntos modificados es el artículo que sanciona con penas de cinco a doce años de prisión a quienes, por cuenta, orden o financiamiento de un Estado extranjero, alteren procesos electorales o manipulen la opinión pública. El dictamen define qué se entiende por “campaña de injerencia extranjera”: acciones planificadas, sistemáticas, clandestinas, engañosas, coercitivas o ilícitas, destinadas a alterar elecciones, afectar la formación de la voluntad política o condicionar decisiones de autoridades. A la vez, introduce exclusiones expresas: no considera campaña de injerencia a la actividad diplomática conforme al derecho internacional, la expresión pública y atribuida de opiniones de un Estado extranjero, la actividad periodística, la investigación académica ni la representación abierta y regulada de intereses.\n\nSin embargo, bloques aliados que firmaron con disidencias exigen más cambios en la redacción, fundamentalmente de los artículos 127, 128 y 129. “Si no hacen más cambios, yo voto en contra y se va a terminar cayendo en el recinto”, aseguró una diputada aliada. “Va a haber más cambios, no queda claro dónde quedan paradas las ONG que busca influir sobre las políticas del gobierno”, reconoció un alfil libertario.\n\nAdemás, se incorporó al Ministerio de Seguridad, a cargo de Alejandra Monteoliva, como miembro permanente del Consejo de Seguridad Nacional, y se precisaron las competencias de la Prefectura Naval y el Comando Conjunto Marítimo, aunque sin establecer una regla de intervención primaria y subsidiaria entre ambas fuerzas.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "El oficialismo obtuvo un miércoles el dictamen de mayoría del proyecto de Defensa de la Soberanía Nacional, que busca defender los recursos naturales en las Islas Malvinas."
          },
          {
            "text": "La fecha tentativa que maneja La Libertad Avanza para tratar el proyecto en el recinto es el jueves 12 de noviembre."
          },
          {
            "text": "El Papa León XIV visitará la Argentina durante la semana prevista para la sesión."
          },
          {
            "text": "El proyecto de Defensa de la Soberanía Nacional fue impulsado principalmente por el asesor presidencial Santiago Caputo."
          },
          {
            "text": "El proyecto agrava las sanciones por explotación no autorizada de recursos naturales renovables y no renovables en el Atlántico Sur, e incluye multas y suspensión o cancelación de habilitaciones para empresas, socios y proveedores."
          },
          {
            "text": "El subsecretario de Estado de Estados Unidos, Christopher Landau, transmitió en persona al presidente Milei la preocupación de la Administración Trump por las consecuencias de las sanciones del proyecto para empresas estadounidenses."
          },
          {
            "text": "El dictamen limita las sanciones a operadoras directas, licenciatarias, sus proveedores y accionistas directos, y exime a accionistas minoritarios con participaciones de hasta el 2% y a fondos de inversión indirectos."
          },
          {
            "text": "El proyecto crea un Consejo de Seguridad Nacional integrado de forma permanente por el Presidente, el jefe de Gabinete, los ministros de Relaciones Exteriores, Defensa y Economía, el secretario de Inteligencia de Estado y la secretaria Legal y Técnica."
          },
          {
            "text": "El Consejo de Seguridad Nacional, presidido por el Presidente, podrá controlar, aceptar o rechazar inversiones de Estados extranjeros y empresas con sus capitales en defensa, telecomunicaciones, energía, hidrocarburos, minería y actividades espaciales."
          },
          {
            "text": "El oficialismo habilitó como miembros no permanentes del Consejo al presidente de la Cámara de Diputados, al presidente provisional del Senado, a gobernadores y al Ministerio de Seguridad Interior."
          },
          {
            "text": "La Libertad Avanza aceptó crear una Comisión Bicameral de Seguimiento del Consejo, propuesta por el diputado Eduardo Falcone (MID), a la que el Ejecutivo deberá informar en 48 horas las medidas que adopte el Consejo."
          },
          {
            "text": "El proyecto sanciona con penas de cinco a doce años de prisión a quienes, por cuenta de un Estado extranjero, alteren procesos electorales o manipulen la opinión pública, y el dictamen define y excluye supuestos de 'campaña de injerencia extranjera'."
          },
          {
            "text": "Bloques aliados que firmaron el dictamen con disidencias exigen cambios en los artículos 127, 128 y 129."
          },
          {
            "text": "Una diputada aliada no identificada afirmó: 'Si no hacen más cambios, yo voto en contra y se va a terminar cayendo en el recinto'."
          },
          {
            "text": "Un dirigente libertario no identificado reconoció que habrá más cambios porque no queda clara la situación de las ONG que buscan influir sobre las políticas del gobierno."
          },
          {
            "text": "Se incorporó al Ministerio de Seguridad, a cargo de Alejandra Monteoliva, como miembro permanente del Consejo de Seguridad Nacional (en contradicción con lo dicho antes, que lo ubicaba como miembro no permanente)."
          },
          {
            "text": "El dictamen precisó las competencias de la Prefectura Naval y el Comando Conjunto Marítimo sin establecer una regla de intervención primaria y subsidiaria entre ambas fuerzas."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Gobierno nacional",
            "mentions": 4
          },
          {
            "name": "La Libertad Avanza",
            "mentions": 5
          },
          {
            "name": "Islas Malvinas",
            "mentions": 2
          },
          {
            "name": "Papa León XIV",
            "mentions": 1
          },
          {
            "name": "Argentina",
            "mentions": 3
          },
          {
            "name": "Santiago Caputo",
            "mentions": 1
          },
          {
            "name": "Atlántico Sur",
            "mentions": 1
          },
          {
            "name": "Estados Unidos",
            "mentions": 2
          },
          {
            "name": "Christopher Landau",
            "mentions": 1
          },
          {
            "name": "Javier Milei",
            "mentions": 3
          },
          {
            "name": "Administración Trump",
            "mentions": 1
          },
          {
            "name": "Consejo de Seguridad Nacional",
            "mentions": 6
          },
          {
            "name": "Cámara de Diputados",
            "mentions": 1
          },
          {
            "name": "Senado",
            "mentions": 1
          },
          {
            "name": "Ministerio de Seguridad",
            "mentions": 2
          },
          {
            "name": "Comisión Bicameral de Seguimiento",
            "mentions": 3
          },
          {
            "name": "Congreso de la Nación",
            "mentions": 2
          },
          {
            "name": "Secretaría de Inteligencia del Estado",
            "mentions": 2
          },
          {
            "name": "Eduardo Falcone",
            "mentions": 1
          },
          {
            "name": "Movimiento de Integración y Desarrollo",
            "mentions": 1
          },
          {
            "name": "Alejandra Monteoliva",
            "mentions": 1
          },
          {
            "name": "Prefectura Naval",
            "mentions": 1
          },
          {
            "name": "Comando Conjunto Marítimo",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "El oficialismo obtiene dictamen del proyecto de Soberanía Nacional"
          },
          {
            "title": "Visita del Papa León XIV a la Argentina"
          },
          {
            "title": "Fecha tentativa para tratar el proyecto en el recinto"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 17,
            "ok": 41,
            "nombre_parcial": 1,
            "evidencia_no_encontrada": 3,
            "fecha_inferida": 3
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "La fecha tentativa que maneja La Libertad Avanza para tratar el proyecto en el recinto es el jueves 12 de noviembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El dictamen limita las sanciones a operadoras directas, licenciatarias, sus proveedores y accionistas directos, y exime a accionistas minoritarios con participaciones de hasta el 2% y a fondos de inversión indirectos."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La Libertad Avanza aceptó crear una Comisión Bicameral de Seguimiento del Consejo, propuesta por el diputado Eduardo Falcone (MID), a la que el Ejecutivo deberá informar en 48 horas las medidas que adopte el Consejo."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Bloques aliados que firmaron el dictamen con disidencias exigen cambios en los artículos 127, 128 y 129."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Argentina",
              "y": 2.0,
              "etiqueta": "Argentina",
              "descripcion": "País donde se tramita el proyecto y que recibirá la visita del Papa.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 506,
                "fin": 515,
                "cita": "Argentina"
              },
              "alertas": []
            },
            {
              "x": "Gobierno nacional",
              "y": 2.0,
              "etiqueta": "Gobierno nacional",
              "descripcion": "Oficialismo que consiguió el dictamen de mayoría del proyecto de Defensa de la Soberanía Nacional.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 534,
                "fin": 542,
                "cita": "Gobierno"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Gobierno»"
              ]
            },
            {
              "x": "Consejo de Seguridad Nacional",
              "y": 2.0,
              "etiqueta": "Consejo de Seguridad Nacional",
              "descripcion": "Órgano creado por el proyecto para coordinar defensa, inteligencia y seguridad interior.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p5",
                "inicio": 1843,
                "fin": 1872,
                "cita": "Consejo de Seguridad Nacional"
              },
              "alertas": []
            },
            {
              "x": "Ministerio de Seguridad",
              "y": 2.0,
              "etiqueta": "Ministerio de Seguridad",
              "descripcion": "Cartera incorporada como miembro permanente del Consejo de Seguridad Nacional.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p7",
                "inicio": 2664,
                "fin": 2687,
                "cita": "Ministerio de Seguridad"
              },
              "alertas": []
            },
            {
              "x": "Islas Malvinas",
              "y": 1.0,
              "etiqueta": "Islas Malvinas",
              "descripcion": "Territorio cuyos recursos naturales busca defender el proyecto.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 183,
                "fin": 197,
                "cita": "Islas Malvinas"
              },
              "alertas": []
            },
            {
              "x": "Papa León XIV",
              "y": 1.0,
              "etiqueta": "Papa León XIV",
              "descripcion": "Pontífice cuya visita a la Argentina podría alterar el cronograma legislativo.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 487,
                "fin": 500,
                "cita": "Papa León XIV"
              },
              "alertas": []
            },
            {
              "x": "Santiago Caputo",
              "y": 1.0,
              "etiqueta": "Santiago Caputo",
              "descripcion": "Asesor presidencial que impulsó principalmente el proyecto.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 596,
                "fin": 611,
                "cita": "Santiago Caputo"
              },
              "alertas": []
            },
            {
              "x": "Atlántico Sur",
              "y": 1.0,
              "etiqueta": "Atlántico Sur",
              "descripcion": "Zona donde el proyecto agrava las sanciones por explotación no autorizada de recursos.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 692,
                "fin": 705,
                "cita": "Atlántico Sur"
              },
              "alertas": []
            },
            {
              "x": "Estados Unidos",
              "y": 1.0,
              "etiqueta": "Estados Unidos",
              "descripcion": "País cuyo gobierno expresó preocupación por las sanciones a sus empresas.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 1089,
                "fin": 1103,
                "cita": "Estados Unidos"
              },
              "alertas": []
            },
            {
              "x": "Christopher Landau",
              "y": 1.0,
              "etiqueta": "Christopher Landau",
              "descripcion": "Subsecretario de Estado de EE.UU. que transmitió a Milei la preocupación de la Administración Trump.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 1105,
                "fin": 1123,
                "cita": "Christopher Landau"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": [
        "línea de tiempo omitida: 0 evento(s) sostenidos por la nota, hacen falta 3"
      ]
    }
  },
  "09": {
    "titulo": "Martínez de Giorgi cerró el caso $LIBRA solo un día después de que el fiscal pidió los sobreseimientos",
    "cuerpo": "LA NACION accedió al dictamen de Taiano, que sostiene que no había delito por investigar y que es la base del fallo del juez; se presentó el jueves y el viernes al mediodía el magistrado firmó la sentencia de 60 hojas con la que cerró la causa\n\nEl juez federal Marcelo Martínez de Giorgi cerró el caso $LIBRA el viernes pasado. Sobreseyó a Javier y a Karina Milei, y al resto de los acusados, con un fallo de 60 hojas basado, fundamentalmente, en un dictamen del fiscal del caso, Eduardo Taiano, que hasta el momento no se conocía. El dato más notable es su fecha: está firmado el día anterior a la sentencia de los sobreseimientos.\n\nLA NACION accedió a su contenido y ratificó la fecha de presentación con fuentes oficiales.\n\nEsto quiere decir que el jueves, el juez recibió el dictamen, una presentación espontánea que no dice responder a consulta alguna, en la que, de forma inesperada, Taiano decide no seguir adelante con la investigación que tenía delegada. Y un día después, Martínez de Giorgi sobresee a todos los acusados. El juez hubiera podido limitarse a decir que, sin impulso fiscal, no podía seguir adelante. Pero eligió adentrarse en la revisión completa de las pruebas de la causa y en el análisis jurídico de las figuras penales adjudicadas al Presidente, a su hermana y al resto de los acusados. En 26 horas, revisó las 58 hojas del dictamen fiscal y tuvo lista la sentencia final para su causa.\n\nTaiano firmó su dictamen a las 11:32 del jueves y Martínez de Giorgi suscribió su fallo a las 14:29 del viernes. La sentencia estaba escrita desde al menos las 13:30 de ese día, que fue cuando la firmó el secretario de la causa.\n\nFuentes del juzgado dijeron a LA NACION que Taiano ya le había avisado a Martínez de Giorgi que iba a presentar su dictamen y que el juez quiso dejar firmada su sentencia el viernes mismo porque “tenía un viaje programado”.\n\nPor decisión del propio Martínez de Giorgi, Taiano era el único capaz de impulsar esta investigación porque el 3 de julio pasado el juez les quitó a las presuntas víctimas del caso la condición de querellantes (acusadores particulares) que tenían desde el 20 de marzo de 2025. Esa decisión fue confirmada el 4 de septiembre pasado por la Sala I de la Cámara Federal, en su primer día de integración con los nuevos jueces nombrados por el propio Milei.\n\nLos cinco inversores desplazados de la causa apuestan ahora a un último recurso: que la Cámara Federal de Casación revise esta situación y los reponga como querellantes. Llegan en una situación de debilidad a ese tribunal porque la Cámara Federal no les concedió el recurso (no les habilitó el camino) y, por ende, fueron “en queja”. Por eso, lo primero que deberá hacer ahora la Casación es resolver si les abre o no el recurso. Ayer, Juan Patricio Marchetto, uno de los inversores, presentó un “pronto despacho” para apurar esa decisión del tribunal. Con la expectativa de que le den la razón, Marchetto -patrocinado por los abogados Juan Grabois y Nicolás Rechanik- apeló en paralelo el cierre de la causa.\n\nEl dictamen de Taiano\n\nEn su dictamen del jueves pasado, Taiano hizo un resumen de las pruebas reunidas hasta el momento en el expediente y concluyó que no había “sustento fáctico alguno” para continuar con la investigación. Según el fiscal, no hay delito posible y no vale la pena seguir investigando.\n\nEl inversor Marchetto, en su presentación de ayer, se quejó de que Taiano no hubiera esperado siquiera pruebas que él mismo había ordenado y que estaban en trámite. “Al momento de dictarse el sobreseimiento existían medidas ya ordenadas y todavía en curso, peritajes pendientes de ampliación y personas directamente vinculadas con acontecimientos relevantes que ni siquiera habían sido escuchadas”, afirmó.\n\nPara Marchetto, “la contradicción resulta evidente” porque “si la propia investigación todavía procuraba determinar quién controlaba determinadas billeteras, reconstruir movimientos de activos, completar extracciones forenses y esclarecer relaciones personales y económicas entre los protagonistas, difícilmente pudiera afirmarse simultáneamente que se encontraba agotada toda posibilidad razonable de atribuir relevancia penal a los hechos”.\n\nEl presunto inversor damnificado destacó que una de las pruebas pendientes, dispuesta por el fiscal y no terminada, fue la ampliación de un análisis sobre “los dispositivos de Orlando Mellino y Camilo Rodríguez Blanco”, un jubilado argentino y un trader colombiana que recibieron cinco millones de dólares de Hayden Davis. Marchetto dijo: “El sobreseimiento no puede convertirse en el mecanismo mediante el cual se declare irrelevante aquello que la propia investigación todavía no terminó de investigar”.\n\nEn su presentación del jueves, Taiano dedicó 40 páginas a repasar todas las pruebas reunidas en la causa y analizó luego la relación de los acusados con los delitos que se les habían imputado.\n\nEn cuanto a Karina Milei, sostuvo que “los denunciantes señalaron que habría recibido una suma de dinero para facilitar las reuniones del Presidente de la Nación con los empresarios extranjeros Hayden Davis, Julian Peh y Bartosz Lipinski”, pero que “lo cierto es que de la prueba incorporada al expediente no ha sido factible acreditar esa sospecha preliminar”.\n\nEl fiscal, que en representación de la sociedad es quien impulsa las investigaciones penales, dijo que “no se puede sostener una imputación con meras suposiciones e inferencias sin sustento fáctico alguno que den cuenta de la posible comisión de un delito” y afirmó que, en este caso, “no se ha podido probar un intercambio indebido, es decir, una conexión entre un beneficio ofrecido o pactado y una actuación funcional concreta”.\n\nEn cuanto a la supuesta estafa adjudicada a Javier Milei y el resto de los acusados, el fiscal sostuvo que no estaban “configurados los elementos requeridos por la norma para afirmar la comisión” del delito de estafa, dado que “el proyecto efectivamente existía; que el token fue efectivamente lanzado; que el ecosistema blockchain involucrado era real; que las empresas participantes tenían existencia concreta y que la operatoria desarrollada se ejecutó públicamente a través de herramientas abiertas y trazables en blockchain”.\n\nSegún el fiscal, “podrá discutirse la conveniencia económica del proyecto, el éxito posterior de la iniciativa o incluso la razonabilidad especulativa de adquirir el token”, pero “nada de ello convierte los hechos en una estafa”.\n\nEn cuanto a los dos hombres que recibieron los millones de Davis, Taiano dijo que “se detectaron movimientos de dinero por parte de dos personas que habrían sido identificadas como Flavio Camilo Rodriguez Blanco y Orlando Mellino, días antes del lanzamiento de $LIBRA”. Pero afirmó: “Lo cierto es que, de los informes de la UFECI, del análisis de trazabilidad efectuado por el Departamento de Cibercrimen de la Policía Federal Argentina y del análisis producido por la DATIP no fue posible relacionar a los nombrados con las maniobras denunciadas, como así tampoco acreditar que estos tuvieran un vínculo o relación con las personas investigadas”.\n\nPara descartar los otros delitos adjudicados a Milei (abuso de autoridad, violación de sus deberes de funcionario, negociaciones incompatibles con su cargo), el fiscal se apoya en informes originados por organismos dependientes del propio Poder Ejecutivo.\n\nTaiano dice que “no debe perderse de vista que la resolución del titular de la Oficina Anticorrupción en el marco del expediente SISA 22.632, concluyó que el nombrado [Milei] no había cometido infracción alguna a la ley 25.188 de Ética Pública en el Ejercicio de la Función Pública”. El fiscal afirma: “En definitiva, las circunstancias valoradas y las conclusiones arribadas por la Oficina Anticorrupción, organismo encargado de interpretar los alcances de la ley de ética pública, me eximen de efectuar mayores consideraciones respecto del delito reprimido en el artículo 248 del CPN [abuso de autoridad y violación de los deberes de los funcionarios públicos].”\n\nY añade: “Aunado a ello, es menester destacar que tanto la Secretaría de Legal y Técnica de la Presidencia de la Nación y Asuntos Presidenciales de la Secretaría General de Presidencia [secretaría cuya titular es Karina Milei] fueron contundentes al informar que no se registraron actos administrativos y que no constan registros sobre un acuerdo confidencial entre Hayden Davis y el presidente de la nación Javier Milei relativo a la implementación y desarrollo de soluciones tecnológicas e innovadoras que contribuyan al aprovechamiento de las oportunidades que la economía digital y las nuevas tecnologías ofrecen a la República Argentina, específicamente con el objeto de brindar asesoramiento en Blockchain y Criptomonedas, que habría sido firmado por los nombrados días previos al lanzamiento del Token “$Libra”.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "El juez federal Marcelo Martínez de Giorgi cerró el caso $LIBRA el viernes pasado y sobreseyó a Javier Milei, Karina Milei y al resto de los acusados."
          },
          {
            "text": "El fallo de sobreseimiento de Martínez de Giorgi tiene 60 hojas y se basa fundamentalmente en un dictamen del fiscal Eduardo Taiano."
          },
          {
            "text": "El dictamen del fiscal Taiano está firmado el día anterior a la sentencia de sobreseimiento."
          },
          {
            "text": "LA NACION accedió al dictamen de Taiano y ratificó su fecha de presentación con fuentes oficiales."
          },
          {
            "text": "El dictamen de Taiano fue una presentación espontánea que no dice responder a consulta alguna."
          },
          {
            "text": "El dictamen fiscal de Taiano tiene 58 hojas y el juez tuvo lista la sentencia en 26 horas."
          },
          {
            "text": "Taiano firmó su dictamen a las 11:32 del jueves y Martínez de Giorgi firmó su fallo a las 14:29 del viernes."
          },
          {
            "text": "El secretario de la causa firmó la sentencia a las 13:30 del viernes."
          },
          {
            "text": "Según fuentes del juzgado, Taiano había avisado a Martínez de Giorgi que presentaría su dictamen y el juez quiso firmar la sentencia el viernes porque tenía un viaje programado."
          },
          {
            "text": "El 3 de julio el juez Martínez de Giorgi quitó a las presuntas víctimas del caso $LIBRA la condición de querellantes que tenían desde el 20 de marzo de 2025."
          },
          {
            "text": "La Sala I de la Cámara Federal confirmó el 4 de septiembre el apartamiento de los querellantes, en su primer día de integración con jueces nombrados por Milei."
          },
          {
            "text": "Cinco inversores fueron desplazados de la causa y recurrieron en queja ante la Cámara Federal de Casación porque la Cámara Federal no les concedió el recurso."
          },
          {
            "text": "Juan Patricio Marchetto, patrocinado por Juan Grabois y Nicolás Rechanik, presentó un pronto despacho ante Casación y apeló el cierre de la causa."
          },
          {
            "text": "Taiano concluyó en su dictamen que no había \"sustento fáctico alguno\" para continuar con la investigación."
          },
          {
            "text": "Marchetto afirmó que al momento del sobreseimiento existían medidas ordenadas en curso, peritajes pendientes y personas vinculadas que no habían sido escuchadas."
          },
          {
            "text": "Orlando Mellino y Camilo Rodríguez Blanco recibieron cinco millones de dólares de Hayden Davis."
          },
          {
            "text": "Una prueba pendiente ordenada por el fiscal era la ampliación del análisis de los dispositivos de Orlando Mellino y Camilo Rodríguez Blanco."
          },
          {
            "text": "Taiano dedicó 40 páginas de su dictamen a repasar las pruebas reunidas en la causa."
          },
          {
            "text": "Taiano sostuvo que no fue factible acreditar que Karina Milei recibiera dinero para facilitar reuniones del Presidente con Hayden Davis, Julian Peh y Bartosz Lipinski."
          },
          {
            "text": "Taiano afirmó que no se pudo probar un intercambio indebido entre un beneficio ofrecido y una actuación funcional concreta."
          },
          {
            "text": "Taiano sostuvo que no se configuró estafa porque el proyecto existía, el token fue lanzado y la operatoria fue pública y trazable en blockchain."
          },
          {
            "text": "Taiano afirmó que los informes de la UFECI, de Cibercrimen de la PFA y de la DATIP no permitieron vincular a Rodríguez Blanco y Mellino con las maniobras denunciadas."
          },
          {
            "text": "La Oficina Anticorrupción, en el expediente SISA 22.632, concluyó que Milei no infringió la ley 25.188 de Ética Pública."
          },
          {
            "text": "La Secretaría Legal y Técnica y la Secretaría General de Presidencia informaron que no hay registros de un acuerdo confidencial entre Hayden Davis y Javier Milei sobre blockchain y criptomonedas."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Marcelo Martínez de Giorgi",
            "mentions": 14
          },
          {
            "name": "Eduardo Taiano",
            "mentions": 16
          },
          {
            "name": "Caso $LIBRA",
            "mentions": 8
          },
          {
            "name": "Javier Milei",
            "mentions": 9
          },
          {
            "name": "Karina Milei",
            "mentions": 5
          },
          {
            "name": "LA NACION",
            "mentions": 4
          },
          {
            "name": "Cámara Federal",
            "mentions": 3
          },
          {
            "name": "Cámara Federal de Casación",
            "mentions": 3
          },
          {
            "name": "Juan Patricio Marchetto",
            "mentions": 7
          },
          {
            "name": "Juan Grabois",
            "mentions": 1
          },
          {
            "name": "Nicolás Rechanik",
            "mentions": 1
          },
          {
            "name": "Orlando Mellino",
            "mentions": 3
          },
          {
            "name": "Flavio Camilo Rodríguez Blanco",
            "mentions": 3
          },
          {
            "name": "Hayden Davis",
            "mentions": 5
          },
          {
            "name": "Julian Peh",
            "mentions": 1
          },
          {
            "name": "Bartosz Lipinski",
            "mentions": 1
          },
          {
            "name": "UFECI",
            "mentions": 1
          },
          {
            "name": "Policía Federal Argentina",
            "mentions": 1
          },
          {
            "name": "DATIP",
            "mentions": 1
          },
          {
            "name": "Oficina Anticorrupción",
            "mentions": 2
          },
          {
            "name": "Secretaría de Legal y Técnica de la Presidencia de la Nación",
            "mentions": 1
          },
          {
            "name": "Secretaría General de Presidencia",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Inversores reconocidos como querellantes en el caso $LIBRA"
          },
          {
            "title": "Martínez de Giorgi quita la condición de querellantes"
          },
          {
            "title": "Cámara Federal confirma el desplazamiento de los querellantes"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 24,
            "ok": 61,
            "evidencia_no_encontrada": 2,
            "fuente_parcial": 1
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "El fallo de sobreseimiento de Martínez de Giorgi tiene 60 hojas y se basa fundamentalmente en un dictamen del fiscal Eduardo Taiano."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El dictamen fiscal de Taiano tiene 58 hojas y el juez tuvo lista la sentencia en 26 horas."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Taiano firmó su dictamen a las 11:32 del jueves y Martínez de Giorgi firmó su fallo a las 14:29 del viernes."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El secretario de la causa firmó la sentencia a las 13:30 del viernes."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El 3 de julio el juez Martínez de Giorgi quitó a las presuntas víctimas del caso $LIBRA la condición de querellantes que tenían desde el 20 de marzo de 2025."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La Sala I de la Cámara Federal confirmó el 4 de septiembre el apartamiento de los querellantes, en su primer día de integración con jueces nombrados por Milei."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Taiano dedicó 40 páginas de su dictamen a repasar las pruebas reunidas en la causa."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La Oficina Anticorrupción, en el expediente SISA 22.632, concluyó que Milei no infringió la ley 25.188 de Ética Pública."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "linea-tiempo",
          "tipo": "linea_tiempo",
          "titulo": "Línea de tiempo",
          "fuente": null,
          "enlace": null,
          "unidad": null,
          "origen_datos": null,
          "puntos": [
            {
              "x": "2025-03-20",
              "y": null,
              "etiqueta": "Inversores reconocidos como querellantes en el caso $LIBRA",
              "descripcion": "Desde esta fecha, las presuntas víctimas del caso tenían la condición de querellantes (acusadores particulares) en la causa.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p7",
                "inicio": 2127,
                "fin": 2138,
                "cita": "20 de marzo"
              },
              "alertas": []
            },
            {
              "x": "2025-07-03",
              "y": null,
              "etiqueta": "Martínez de Giorgi quita la condición de querellantes",
              "descripcion": "El juez Martínez de Giorgi les quitó a las presuntas víctimas la condición de querellantes, lo que dejó al fiscal Taiano como único impulsor de la investigación. El año se infiere del contexto.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p7",
                "inicio": 1982,
                "fin": 1992,
                "cita": "3 de julio"
              },
              "alertas": []
            },
            {
              "x": "2025-09-04",
              "y": null,
              "etiqueta": "Cámara Federal confirma el desplazamiento de los querellantes",
              "descripcion": "La Sala I de la Cámara Federal, en su primer día con los nuevos jueces nombrados por Milei, confirmó la decisión de quitarles a los inversores la condición de querellantes. El año se infiere del contexto.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p7",
                "inicio": 2179,
                "fin": 2194,
                "cita": "4 de septiembre"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        },
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "LA NACION",
              "y": 6.0,
              "etiqueta": "LA NACION",
              "descripcion": "Diario que accedió al dictamen de Taiano y verificó su fecha.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 0,
                "fin": 9,
                "cita": "LA NACION"
              },
              "alertas": []
            },
            {
              "x": "Karina Milei",
              "y": 3.0,
              "etiqueta": "Karina Milei",
              "descripcion": "Hermana del Presidente y secretaria general de la Presidencia, sobreseída en la causa.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 351,
                "fin": 363,
                "cita": "Karina Milei"
              },
              "alertas": []
            },
            {
              "x": "Cámara Federal",
              "y": 3.0,
              "etiqueta": "Cámara Federal",
              "descripcion": "Tribunal cuya Sala I confirmó el desplazamiento de los querellantes y no les concedió el recurso.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p7",
                "inicio": 2222,
                "fin": 2236,
                "cita": "Cámara Federal"
              },
              "alertas": []
            },
            {
              "x": "Hayden Davis",
              "y": 3.0,
              "etiqueta": "Hayden Davis",
              "descripcion": "Empresario extranjero vinculado al token $LIBRA que transfirió millones a Mellino y Rodríguez Blanco.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p13",
                "inicio": 4500,
                "fin": 4512,
                "cita": "Hayden Davis"
              },
              "alertas": []
            },
            {
              "x": "Orlando Mellino",
              "y": 2.0,
              "etiqueta": "Orlando Mellino",
              "descripcion": "Jubilado argentino que recibió dinero de Hayden Davis días antes del lanzamiento de $LIBRA.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p13",
                "inicio": 4367,
                "fin": 4382,
                "cita": "Orlando Mellino"
              },
              "alertas": []
            },
            {
              "x": "Javier Milei",
              "y": 2.0,
              "etiqueta": "Javier Milei",
              "descripcion": "Presidente de la Nación, sobreseído en el caso $LIBRA.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p17",
                "inicio": 5732,
                "fin": 5744,
                "cita": "Javier Milei"
              },
              "alertas": []
            },
            {
              "x": "Oficina Anticorrupción",
              "y": 2.0,
              "etiqueta": "Oficina Anticorrupción",
              "descripcion": "Organismo que concluyó que Milei no infringió la ley de Ética Pública.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p21",
                "inicio": 7436,
                "fin": 7458,
                "cita": "Oficina Anticorrupción"
              },
              "alertas": []
            },
            {
              "x": "Marcelo Martínez de Giorgi",
              "y": 1.0,
              "etiqueta": "Marcelo Martínez de Giorgi",
              "descripcion": "Juez federal que cerró el caso $LIBRA y sobreseyó a todos los acusados un día después del dictamen fiscal.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 261,
                "fin": 287,
                "cita": "Marcelo Martínez de Giorgi"
              },
              "alertas": []
            },
            {
              "x": "Caso $LIBRA",
              "y": 1.0,
              "etiqueta": "Caso $LIBRA",
              "descripcion": "Causa judicial por el lanzamiento del token $LIBRA, cerrada con sobreseimientos.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 297,
                "fin": 308,
                "cita": "caso $LIBRA"
              },
              "alertas": []
            },
            {
              "x": "Eduardo Taiano",
              "y": 1.0,
              "etiqueta": "Eduardo Taiano",
              "descripcion": "Fiscal del caso $LIBRA cuyo dictamen pidió no seguir con la investigación y fue base del fallo.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 480,
                "fin": 494,
                "cita": "Eduardo Taiano"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": []
    }
  },
  "10": {
    "titulo": "Caso $LIBRA: jueces, fiscales y vínculos con el poder",
    "cuerpo": "Caso $LIBRA. Jueces, fiscales y vínculos con el poder: el derrotero de una causa destinada al archivo\n\nLos sobreseimientos de Javier y Karina Milei ya no tienen quién los apele; cómo fue la ingeniería judicial y política que fulminó la causa; el camino cuesta arriba que afronta el último recurso pendiente\n\nEl fallo del juez Marcelo Martínez de Giorgi, que sobreseyó a Javier y Karina Milei en el caso $LIBRA sin que quedara en pie un acusador que pudiera apelarlo, es el final de una compleja ingeniería judicial.\n\nEl 4 de septiembre pasado, la Sala I de la Cámara Federal, en su primer día con los nuevos jueces nombrados por el propio Milei, confirmó la decisión de apartar del expediente a cinco inversores que pedían ser reconocidos como querellantes por las pérdidas que sufrieron con la compra de la criptomoneda que promocionó el Presidente. Sin querellantes, quedaba como único acusador el fiscal Eduardo Taiano, quien –se supo el viernes- promovió el sobreseimiento de todos los imputados en un dictamen que se mantuvo en reserva.\n\nCon el fiscal pidiendo lo que pretendían las defensas y sin posibles víctimas que pudieran ser escuchadas en el expediente, no quedó quien apelara y solicitara la reapertura del caso. Al menos, no en principio. Todavía hay un camino, pero no es nada sencillo. “La causa ya está herida de muerte”, dijo un experimentado funcionario de Comodoro Py.\n\nAquel fallo de la Cámara Federal que validó las exclusiones de los querellantes dispuestas por Martínez de Giorgi fue clave para este desenlace. Lo firmaron Mariano Llorens y Pablo Bertuzzi.\n\nMeses antes, el concurso del Consejo de la Magistratura que permitió que Bertuzzi entrara en la terna de candidatos de donde lo eligió Milei tuvo un desenlace poco ortodoxo. Tras corregirse los exámenes escritos y analizarse los antecedentes de todos los concursantes, Bertuzzi había quedado en el puesto 21°. Después de la entrevista personal –la parte más discrecional del proceso-, el dictamen de mayoría de comisión lo llevó al lugar 16°, lejos todavía de las ternas (tenía que entrar entre los seis primeros). Pero este año, el consejero juez Diego Barroetaveña volvió a analizar las entrevistas de todos los postulantes (son filmadas y subidas a YouTube) y, tras esa revisión, Bertuzzi pasó al sexto lugar. Justo lo que necesitaba para llegar. El 2 de septiembre Milei lo nombró y dos días después confirmó la exclusión de los querellantes de $LIBRA. Fue una de las decenas de designaciones de jueces de Milei, que incluyeron el nombramiento de la mujer de Martínez de Giorgi, Ana Juan, dos meses antes, como magistrada federal de Hurlingham.\n\nA fines de 2023, Llorens y Bertuzzi (por entonces camarista trasladado, no titular) habían revocado un sobreseimiento de la expresidenta Cristina Kirchner en el caso de la ruta del dinero K. Aquel fallo solo fue posible porque esa vez ambos camaristas hicieron una interpretación amplia sobre quién puede ser querellante. Cristina Kirchner estaba sobreseída a pedido de la fiscalía y se presentó la Asociación Civil Bases Republicanas, una ONG cercana a Pro: pidió ser aceptada como querellante (es decir, como damnificada) y reclamó que el caso, del que hasta ese momento no había participado, se reabriera. Llorens dijo entonces que los argumentos expuestos por Bases Republicanas resultaban “suficientes como para advertir la necesidad de despejar por completo la incertidumbre que presenta conocer la verdad de los hechos y la participación de la imputada” en esa causa.\n\nEn el caso $LIBRA, en cambio, Llorens y Bertuzzi fueron estrictos al sostener que los damnificados no habían logrado probar su condición de víctimas del supuesto delito, que no acreditaron la existencia de un engaño que los hubiera hecho invertir en la criptomoneda. Avalaron así lo que había sostenido Martínez de Giorgi. Era, en los hechos, prácticamente pedirles a los querellantes que probaran el delito que la propia causa estaba investigando.\n\nFue así como el expediente quedó con Taiano como único acusador. Tampoco intervino en esta causa la Procuraduría de Investigaciones Administrativas (PIA) -organismo del Ministerio Público que suele participar junto a los fiscales en las causas contra funcionarios públicos-. Taiano no le dio intervención, pese a que la PIA, antes de que el caso se judicializara, había abierto un expediente sobre $LIBRA.\n\nEsta Procuraduría, dirigida por el fiscal Sergio Rodríguez, llevó adelante causas de las que los fiscales se habían bajado. Fue así, por ejemplo, como consiguió la reapertura del caso Skanska. La PIA insistió durante años en que debía incorporarse como prueba una grabación secreta, interna de la empresa, sobre los sobornos; la Corte Suprema finalmente validó su planteo y eso permitió reabrir el expediente.\n\nMás cerca en el tiempo -y también con Taiano como fiscal del caso-, la PIA reclamó en soledad la reapertura de la causa que investigó el desvío de vacunas durante la pandemia (conocida como Vacunatorio VIP) y la Cámara Federal ordenó la reapertura de la investigación. Pero este caso es distinto, dijeron a LA NACION fuentes del Ministerio Público. Sostienen que en $LIBRA el fiscal pidió los sobreseimientos y el juez los dictó, y que la PIA, que no fue siquiera notificada, ya no tendría margen para intervenir en contra de lo sostenido por el fiscal del caso.\n\nLa única vía para una eventual reapertura de la causa sería una intervención de la Cámara Federal de Casación, especulan en Comodoro Py. Las presuntas víctimas excluidas de la causa presentaron un recurso de casación contra el fallo de Bertuzzi y Llorens. Estos camaristas no se lo concedieron (es decir, no les habilitaron el camino al tribunal superior), pero quienes buscan ser querellantes fueron directo, “en queja”, a esa cámara. Ahora les espera un proceso que, en el mejor de los casos, es largo. Y que podría ser muy corto si directamente les rechazaran su queja.\n\nEn la Casación coinciden en que no es posible que sean repuestos como querellantes antes del jueves próximo, cuando vencería el plazo para apelar los sobreseimientos. No dan los tiempos. Si Casación abre la queja, los camaristas deberían notificar a las partes, convocar a una audiencia y recién después decidir. La sala que tiene pendiente resolver este tema está integrada por Alejandro Slokar, Ángela Ledesma y Guillermo Yacobucci. Fuentes judiciales dijeron a LA NACION que hasta el momento los camaristas no tienen una decisión consensuada.\n\nLas presuntas víctimas podrían presentar de todos modos, antes del jueves, una apelación a los sobreseimientos de Martínez de Giorgi, confiando en que a futuro la Casación las reponga como parte. Un recurso extremo en una causa en la que hoy no intervienen, contra un fallo que nadie les notificó, y para intentar ser habilitadas a impulsar una causa desde cero, en contra de la fiscalía, con un juez que ya decidió que no había nada que investigar.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "El juez federal Marcelo Martínez de Giorgi sobreseyó a Javier Milei y Karina Milei en la causa $LIBRA."
          },
          {
            "text": "El 4 de septiembre, la Sala I de la Cámara Federal, en su primer día con nuevos jueces nombrados por Milei, confirmó el apartamiento de cinco inversores que pedían ser querellantes en la causa $LIBRA."
          },
          {
            "text": "El fiscal Eduardo Taiano promovió el sobreseimiento de todos los imputados en la causa $LIBRA en un dictamen que se mantuvo en reserva."
          },
          {
            "text": "Un experimentado funcionario de Comodoro Py dijo que \"la causa ya está herida de muerte\"."
          },
          {
            "text": "El fallo de la Cámara Federal que validó la exclusión de los querellantes en $LIBRA fue firmado por los camaristas Mariano Llorens y Pablo Bertuzzi."
          },
          {
            "text": "En el concurso del Consejo de la Magistratura, Bertuzzi quedó en el puesto 21° tras exámenes escritos y antecedentes."
          },
          {
            "text": "Tras la entrevista personal, el dictamen de mayoría de la comisión ubicó a Bertuzzi en el puesto 16°, cuando debía estar entre los seis primeros para integrar las ternas."
          },
          {
            "text": "El consejero Diego Barroetaveña revisó las entrevistas de todos los postulantes y, tras esa revisión, Bertuzzi pasó al sexto lugar."
          },
          {
            "text": "Milei nombró a Pablo Bertuzzi como juez de la Cámara Federal el 2 de septiembre."
          },
          {
            "text": "Milei designó a Ana Juan, esposa de Martínez de Giorgi, como jueza federal de Hurlingham, dos meses antes del nombramiento de Bertuzzi."
          },
          {
            "text": "A fines de 2023, Llorens y Bertuzzi revocaron un sobreseimiento de Cristina Kirchner en la causa de la ruta del dinero K."
          },
          {
            "text": "La Asociación Civil Bases Republicanas, ONG cercana al PRO, pidió ser querellante en la ruta del dinero K y reclamó la reapertura del caso."
          },
          {
            "text": "Llorens sostuvo que los argumentos de Bases Republicanas resultaban \"suficientes como para advertir la necesidad de despejar por completo la incertidumbre que presenta conocer la verdad de los hechos y la participación de la imputada\"."
          },
          {
            "text": "En $LIBRA, Llorens y Bertuzzi sostuvieron que los damnificados no probaron su condición de víctimas ni la existencia de un engaño que los hiciera invertir."
          },
          {
            "text": "La Procuraduría de Investigaciones Administrativas no intervino en la causa $LIBRA porque Taiano no le dio intervención, pese a que había abierto un expediente previo sobre $LIBRA."
          },
          {
            "text": "La PIA, dirigida por Sergio Rodríguez, logró la reapertura del caso Skanska luego de que la Corte Suprema validara como prueba una grabación interna de la empresa."
          },
          {
            "text": "La PIA reclamó en soledad la reapertura de la causa del Vacunatorio VIP y la Cámara Federal ordenó reabrir la investigación."
          },
          {
            "text": "Según fuentes del Ministerio Público, la PIA no fue notificada en $LIBRA y no tendría margen para intervenir en contra de lo sostenido por el fiscal."
          },
          {
            "text": "Las presuntas víctimas excluidas presentaron un recurso de casación que Bertuzzi y Llorens no concedieron, y luego recurrieron en queja ante la Cámara Federal de Casación."
          },
          {
            "text": "El plazo para apelar los sobreseimientos de la causa $LIBRA vencería el jueves próximo."
          },
          {
            "text": "La sala de Casación que debe resolver la queja está integrada por Alejandro Slokar, Ángela Ledesma y Guillermo Yacobucci."
          },
          {
            "text": "Según fuentes judiciales, los camaristas de Casación aún no tienen una decisión consensuada sobre la queja en $LIBRA."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Caso $LIBRA",
            "mentions": 9
          },
          {
            "name": "Javier Milei",
            "mentions": 7
          },
          {
            "name": "Karina Milei",
            "mentions": 1
          },
          {
            "name": "Marcelo Martínez de Giorgi",
            "mentions": 6
          },
          {
            "name": "Cámara Federal",
            "mentions": 5
          },
          {
            "name": "Eduardo Taiano",
            "mentions": 6
          },
          {
            "name": "Mariano Llorens",
            "mentions": 6
          },
          {
            "name": "Pablo Bertuzzi",
            "mentions": 9
          },
          {
            "name": "Consejo de la Magistratura",
            "mentions": 1
          },
          {
            "name": "Diego Barroetaveña",
            "mentions": 1
          },
          {
            "name": "Ana Juan",
            "mentions": 1
          },
          {
            "name": "Hurlingham",
            "mentions": 1
          },
          {
            "name": "Cristina Kirchner",
            "mentions": 3
          },
          {
            "name": "Ruta del dinero K",
            "mentions": 1
          },
          {
            "name": "Asociación Civil Bases Republicanas",
            "mentions": 3
          },
          {
            "name": "Pro",
            "mentions": 1
          },
          {
            "name": "Procuraduría de Investigaciones Administrativas",
            "mentions": 7
          },
          {
            "name": "Ministerio Público",
            "mentions": 2
          },
          {
            "name": "Sergio Rodríguez",
            "mentions": 1
          },
          {
            "name": "Caso Skanska",
            "mentions": 1
          },
          {
            "name": "Corte Suprema",
            "mentions": 1
          },
          {
            "name": "Vacunatorio VIP",
            "mentions": 1
          },
          {
            "name": "Cámara Federal de Casación",
            "mentions": 5
          },
          {
            "name": "Alejandro Slokar",
            "mentions": 1
          },
          {
            "name": "Ángela Ledesma",
            "mentions": 1
          },
          {
            "name": "Guillermo Yacobucci",
            "mentions": 1
          },
          {
            "name": "Comodoro Py",
            "mentions": 2
          },
          {
            "name": "LA NACION",
            "mentions": 2
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Revocan sobreseimiento de Cristina Kirchner en ruta del dinero K"
          },
          {
            "title": "Barroetaveña revisa entrevistas y Bertuzzi sube al sexto lugar"
          },
          {
            "title": "Milei nombra a Ana Juan jueza federal de Hurlingham"
          },
          {
            "title": "Milei nombra a Pablo Bertuzzi camarista federal"
          },
          {
            "title": "Cámara Federal confirma exclusión de querellantes en $LIBRA"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 22,
            "ok": 65,
            "evidencia_no_encontrada": 2,
            "fecha_inferida": 4,
            "fuente_parcial": 1
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "El 4 de septiembre, la Sala I de la Cámara Federal, en su primer día con nuevos jueces nombrados por Milei, confirmó el apartamiento de cinco inversores que pedían ser querellantes en la causa $LIBRA."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Milei nombró a Pablo Bertuzzi como juez de la Cámara Federal el 2 de septiembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En el concurso del Consejo de la Magistratura, Bertuzzi quedó en el puesto 21° tras exámenes escritos y antecedentes."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Tras la entrevista personal, el dictamen de mayoría de la comisión ubicó a Bertuzzi en el puesto 16°, cuando debía estar entre los seis primeros para integrar las ternas."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Cámara Federal",
              "y": 4.0,
              "etiqueta": "Cámara Federal",
              "descripcion": "Tribunal cuya Sala I confirmó la exclusión de los querellantes en el caso $LIBRA.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 560,
                "fin": 574,
                "cita": "Cámara Federal"
              },
              "alertas": []
            },
            {
              "x": "Caso $LIBRA",
              "y": 3.0,
              "etiqueta": "Caso $LIBRA",
              "descripcion": "Causa judicial por la promoción de la criptomoneda $LIBRA que terminó con el sobreseimiento de los imputados.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 0,
                "fin": 11,
                "cita": "Caso $LIBRA"
              },
              "alertas": []
            },
            {
              "x": "Javier Milei",
              "y": 2.0,
              "etiqueta": "Javier Milei",
              "descripcion": "Presidente sobreseído en el caso $LIBRA que promocionó la criptomoneda y nombró a jueces de la Cámara Federal.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 126,
                "fin": 132,
                "cita": "Javier"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Javier»"
              ]
            },
            {
              "x": "Karina Milei",
              "y": 2.0,
              "etiqueta": "Karina Milei",
              "descripcion": "Sobreseída junto a su hermano en el caso $LIBRA.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 135,
                "fin": 147,
                "cita": "Karina Milei"
              },
              "alertas": []
            },
            {
              "x": "Comodoro Py",
              "y": 2.0,
              "etiqueta": "Comodoro Py",
              "descripcion": "Sede de los tribunales federales donde se especula sobre la causa.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p5",
                "inicio": 1377,
                "fin": 1388,
                "cita": "Comodoro Py"
              },
              "alertas": []
            },
            {
              "x": "Cristina Kirchner",
              "y": 2.0,
              "etiqueta": "Cristina Kirchner",
              "descripcion": "Expresidenta cuyo sobreseimiento en la ruta del dinero K fue revocado por Llorens y Bertuzzi.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p8",
                "inicio": 2770,
                "fin": 2787,
                "cita": "Cristina Kirchner"
              },
              "alertas": []
            },
            {
              "x": "Ministerio Público",
              "y": 2.0,
              "etiqueta": "Ministerio Público",
              "descripcion": "Organismo del que depende la PIA y cuyas fuentes hablaron con LA NACION.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p10",
                "inicio": 4128,
                "fin": 4146,
                "cita": "Ministerio Público"
              },
              "alertas": []
            },
            {
              "x": "LA NACION",
              "y": 2.0,
              "etiqueta": "LA NACION",
              "descripcion": "Medio que recogió las fuentes del Ministerio Público y judiciales.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p12",
                "inicio": 5084,
                "fin": 5093,
                "cita": "LA NACION"
              },
              "alertas": []
            },
            {
              "x": "Marcelo Martínez de Giorgi",
              "y": 1.0,
              "etiqueta": "Marcelo Martínez de Giorgi",
              "descripcion": "Juez que sobreseyó a los Milei y excluyó a los querellantes del caso $LIBRA.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 326,
                "fin": 352,
                "cita": "Marcelo Martínez de Giorgi"
              },
              "alertas": []
            },
            {
              "x": "Eduardo Taiano",
              "y": 1.0,
              "etiqueta": "Eduardo Taiano",
              "descripcion": "Fiscal y único acusador del caso $LIBRA que promovió el sobreseimiento de todos los imputados.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 907,
                "fin": 921,
                "cita": "Eduardo Taiano"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": [
        "línea de tiempo omitida: 1 evento(s) sostenidos por la nota, hacen falta 3"
      ]
    }
  },
  "11": {
    "titulo": "Salmain no podía seguir siendo juez: los acusadores analizaron el fallo",
    "cuerpo": "La destitución de Gastón Salmain, el exjuez federal de Rosario procesado por presuntos pedidos de coimas vinculados con su actuación en la causa Attila, motivó una serie de cuestionamientos sobre los mecanismos de selección y control de los magistrados. Los tres integrantes del Consejo de la Magistratura que sostuvieron la acusación durante el juicio político -Luis Juez, Diego Barroetaveña y Jimena de la Torre- analizaron en diálogo con Infobae los fundamentos de la sentencia, las irregularidades acreditadas y las deficiencias institucionales que permitieron que accediera al cargo pese a sus antecedentes disciplinarios.\n\nEl Jurado de Enjuiciamiento de Magistrados de la Nación resolvió este jueves 29 de octubre, por unanimidad, remover a Salmain por haber ocultado su paso por el Poder Judicial y una sanción de cesantía impuesta por la Corte Suprema en 2002. La omisión se repitió en 33 concursos judiciales, incluido aquel por el que fue designado titular del Juzgado Federal N° 1 de Rosario. En cambio, el tribunal desestimó el cargo relacionado con su actuación en el expediente Attila Fideicomisos SRL, donde se investiga un presunto acuerdo para favorecer a una empresa a cambio de un beneficio económico indebido.\n\nTras perder la inmunidad de arresto que le otorgaba su condición de magistrado, el juez federal Carlos Vera Barros ordenó su detención inmediata, bajo la modalidad de prisión domiciliaria, en el marco de la investigación penal que continúa en Rosario.\n\nLa sentencia del jury fue dictada por el tribunal presidido por el juez de cámara Marcelo Bartumeu Romero, e integrado también por su colega Néstor Barral; las senadoras nacionales María Monte de Oca y María Florencia López; los diputados Nicolás Mayoraz y Christian Zulli; y Ana Fernández, en representación de los abogados de la matrícula federal.\n\nAl evaluar el resultado de ese proceso, el senador nacional por Córdoba Luis Juez, representante del Senado en el Consejo de la Magistratura, sostuvo: “El balance es positivo: Salmain no podía seguir siendo juez. Ocultar deliberadamente una cesantía del Poder Judicial en 33 concursos no es un error administrativo: es engañar al sistema para acceder a la magistratura. Quien oculta sus propios antecedentes no puede tener en sus manos los derechos y la libertad de los demás”.\n\nEl legislador también se refirió a la distinción entre el juicio político y la investigación penal: “El fallo explica claramente la diferencia entre la función del Jurado y la de la Justicia Federal que investiga los hechos en Rosario. En el considerando 2° señala: ‘El proceso penal tiene por objeto establecer la existencia del delito y la responsabilidad de su autor; el enjuiciamiento, determinar si el magistrado conserva las condiciones que la Constitución exige para permanecer en el cargo’”.\n\nSobre esa diferencia, completó: “Salmain perdió esas condiciones y fue destituido. La responsabilidad penal debe determinarse en la causa que tramita en Rosario. Como aclara el mismo considerando: ‘Unos mismos hechos pueden, por tanto, ser juzgados en ambas sedes con finalidades diversas, sin que lo resuelto en una condicione lo que corresponda resolver en la otra’”.\n\nDesde el estamento judicial, el camarista federal de Casación Penal Diego Barroetaveña, quien también integró la representación acusadora, coincidió con la valoración de la remoción.\n\n“El balance es positivo. El Jurado de Enjuiciamiento resolvió remover al juez Salmain por considerar demostrado que ocultó deliberadamente su desempeño anterior en el Poder Judicial y la cesantía dispuesta por la Corte Suprema de Justicia. Esa omisión se reiteró en 33 concursos, incluido aquel por el que accedió a la magistratura, y continuó después de su designación como juez”, expresó.\n\nEn cuanto al alcance del pronunciamiento, precisó: “El Jurado reafirmó, en consonancia con sus precedentes, que las conductas anteriores a la designación pueden ser valoradas cuando no fueron conocidas por el Senado. En este caso, el ocultamiento impidió que se evaluaran antecedentes relevantes para determinar su idoneidad y constituyó, por sí solo, una causal de mal desempeño, en esta ocasión lo suficientemente grave como para justificar su remoción. De ese modo, vulneró el proceso de selección establecido en la Constitución Nacional”.\n\nLa consejera Jimena de la Torre, representante de los abogados de la matrícula federal, respaldó igualmente la decisión: “El balance es positivo, en la medida en que una persona que nunca debió haber llegado a ser juez ya no ocupa el cargo, y eso trae mayor tranquilidad a toda la sociedad”.\n\nAl desarrollar su posición, destacó las garantías que rodean la permanencia de los magistrados en sus funciones.\n\n“Acusar a un magistrado por mal desempeño es un acto de suma trascendencia institucional, un hecho muy grave que debe ser tomado con la máxima responsabilidad. El nombramiento de un juez es un acto complejo, en el que intervienen los tres poderes del Estado, y los jueces gozan de estabilidad en sus cargos a condición de que conserven su buena conducta, no como privilegio personal, sino como garantía de su independencia en el ejercicio del cargo; es decir, para asegurarle a la sociedad que los jueces no serán presionados y podrán resolver conforme a las leyes y a su buen criterio”, manifestó.\n\nA continuación, precisó: “Por eso, remover a un magistrado es una decisión delicada que debe ser ejercida con suma prudencia. Nosotros entendimos que la actuación de Salmain en la causa Attila exhibía un mal desempeño, pero el tribunal dejó esos hechos a decisión de la Justicia penal y lo removió por el segundo cargo, es decir, por haber mentido para poder concursar y ser designado como juez”.\n\nEl cargo por presuntas coimas y los fundamentos del Jurado\n\nLa primera acusación estaba relacionada con la investigación penal en la que Salmain se encuentra procesado por presunto cohecho pasivo agravado, prevaricato e incumplimiento de los deberes de funcionario público. Según la hipótesis de los investigadores, habría favorecido al fideicomiso Attila mediante resoluciones que permitieron acceder a 10 millones de dólares al tipo de cambio oficial durante las restricciones cambiarias, a cambio de una presunta coima de 200.000 dólares.\n\nEn ese expediente declaró el financista Fernando Elías Whpei, quien se presentó como imputado colaborador y vinculó al exmagistrado con el supuesto acuerdo ilícito. El procesamiento, dictado en diciembre de 2025, fue confirmado parcialmente por la Cámara Federal de Rosario en marzo de este año.\n\nDurante el juicio político, los representantes del Consejo sostuvieron que las pruebas reunidas permitían acreditar ese cargo. Sin embargo, el Jurado consideró que la acusación se apoyaba en valoraciones provisorias de la investigación penal y que el supuesto acuerdo no había quedado demostrado de manera autónoma en el procedimiento de remoción.\n\nSobre ese punto, la sentencia estableció: “Un auto de procesamiento no suple esa convicción: es una valoración provisoria, dictada en otro proceso, formada con otro objeto y otro estándar, y sujeta a revisión en su propia sede”.\n\nEl senador Juez mantuvo su posición respecto de la prueba presentada por los acusadores. “Como acusadores, sostuvimos que las pruebas justificaban también ese cargo. El Jurado hizo una valoración diferente y explicó, en el considerando 2°: ‘Lo resuelto en aquella sede es la valoración provisoria de otro tribunal, que este Jurado no puede tomar como propia’”.\n\nLuego, al referirse al alcance de esa desestimación, indicó: “Pero hay que ser claros: esto no significa que el Jurado haya descartado las presuntas coimas. El fallo dice textualmente: ‘La desestimación tiene, por lo mismo, un alcance preciso: no importa pronunciamiento alguno sobre la existencia del acuerdo, sobre la regularidad de las decisiones dictadas ni sobre la responsabilidad del magistrado, cuya determinación corresponde a los tribunales ordinarios’”.\n\nBarroetaveña expresó una discrepancia similar con la valoración probatoria del tribunal y mencionó específicamente las declaraciones de Whpei.\n\n“Consideramos que las manifestaciones de Fernando Elías Whpei, examinadas conjuntamente con los datos objetivos que las corroboraban y las irregularidades advertidas en la tramitación de la causa Attila, constituían elementos probatorios suficientes para probar el acuerdo previo”, afirmó.\n\nAl aludir al criterio que finalmente prevaleció, agregó: “El Jurado realizó una valoración diferente que, si bien respetamos, no compartimos, y así lo hemos expuesto”.\n\nNo obstante, aclaró: “En cualquier caso, la desestimación del cargo no supone que el Jurado haya declarado inexistente el presunto acuerdo ni que haya establecido la regularidad de las decisiones adoptadas por Salmain. La determinación de eventuales responsabilidades penales, claro está, siempre corresponde a la Justicia penal”.\n\nDe la Torre, en tanto, reconstruyó las decisiones cuestionadas en Attila y las circunstancias en las que se produjo la operatoria cambiaria.\n\n“Las decisiones que tomó Salmain en el caso Attila fueron sumamente llamativas. En un momento de cepo y brecha cambiaria, en el que la gente solo podía comprar 200 dólares a precio oficial y cualquier excepción requería una autorización del BCRA, una empresa de Buenos Aires decidió explorar otro camino y se presentó directamente ante el Juzgado Federal de Rosario para que Salmain otorgara esa autorización”, relató.\n\nSobre la resolución que permitió concretar la operación, precisó: “Así, pese a la oposición del BCRA, aplicando normas que no correspondían al caso y sin darle intervención al fiscal, Salmain ordenó que se entregaran 10 millones de dólares a valor oficial, que se fugaron del país antes de que la Cámara decidiera revocar esa decisión por infundada. Entendimos que esas circunstancias configuraban un caso sancionable de manifiesto apartamiento del derecho”.\n\nLa consejera también se detuvo en los límites del control disciplinario sobre las resoluciones judiciales: “Sin embargo, la frontera entre un error judicial corregible por apelación y el mal desempeño es muy delicada, porque un abuso del cuestionamiento a los criterios judiciales podría violentar el principio de independencia de criterio de los jueces”.\n\nFinalmente, acerca de la evaluación realizada por el Jury, señaló: “El tribunal no centró su análisis en la forma de resolución del caso, sino en la necesidad de acreditar un acuerdo espurio entre el juez y la empresa. Ese acuerdo, que fue relatado por un arrepentido y que la Justicia penal entendió provisoriamente acreditado con otros indicios, no fue suficientemente debatido en el juicio político, por lo que quedó para ser resuelto en la causa judicial que tramita ante la Justicia Federal de Rosario”.\n\nDurante el proceso de remoción, la defensa de Salmain cuestionó los fundamentos de la acusación y la posibilidad de adoptar como propias las conclusiones provisorias de una investigación penal en curso. El Jurado finalmente desestimó ese primer cargo sin pronunciarse sobre la existencia del presunto acuerdo ni sobre la responsabilidad penal del exmagistrado.\n\nLos antecedentes ocultados y las fallas en los controles\n\nEl segundo cargo se remontaba al período en que Salmain trabajó como empleado del Juzgado Federal de la Seguridad Social N° 8. Había ingresado en mayo de 1997 y, después de una investigación administrativa, la Corte Suprema le impuso una sanción de cesantía mediante la resolución 39/02, del 11 de junio de 2002.\n\nEn aquella oportunidad, el máximo tribunal consideró probado que había intentado inducir a una empleada judicial a alterar el sistema informático de distribución de expedientes para dirigir determinadas ejecuciones previsionales hacia el juzgado donde prestaba funciones.\n\nAunque Salmain había presentado su renuncia meses antes, la Corte mantuvo la sanción y posteriormente rechazó el recurso con el que intentó revertirla.\n\nEntre 2016 y 2024, el entonces postulante participó en 33 concursos ante el Consejo de la Magistratura sin declarar ese antecedente laboral ni la cesantía. En sus presentaciones afirmó haberse dedicado al ejercicio libre de la abogacía.\n\nDurante el juicio político, el acusado sostuvo que no había informado su paso por el Poder Judicial porque esa experiencia no le sumaba puntos en los concursos. También argumentó que el reglamento exigía declarar las sanciones disciplinarias de los últimos diez años y que la medida aplicada en 2002 quedaba fuera de ese período.\n\nEl Jurado rechazó esa interpretación y distinguió entre el límite temporal para informar sanciones y la obligación de consignar los antecedentes laborales y las causas de desvinculación.\n\nEn los fundamentos de la sentencia, se destacó que Salmain conocía la sanción porque la había recurrido, así como las exigencias reglamentarias para acceder a la magistratura. En ese sentido, el fallo afirmó: “La omisión fue voluntaria y la lectura del plazo decenal, aun admitida, sólo alcanzaba al inventario de sanciones, no al empleo ni a su egreso, que el Reglamento exige declarar con independencia del puntaje”.\n\nLas reiteradas omisiones también motivaron cuestionamientos de los consejeros sobre los controles de antecedentes de quienes aspiran a ocupar cargos judiciales.\n\nJuez reconoció que el sistema no había detectado esa información durante numerosas postulaciones. “Es una falla seria que debemos revisar. Si pudo omitir esos antecedentes en 33 concursos sin que se detectara, los controles fueron insuficientes. No alcanza con recibir una declaración jurada: hay que verificar los antecedentes laborales y disciplinarios directamente con los organismos correspondientes”, advirtió.\n\nAl referirse a las responsabilidades derivadas de ese procedimiento, completó: “La responsabilidad de quien ocultó información es indiscutible, pero también debemos revisar por qué el sistema no la advirtió”.\n\nBarroetaveña coincidió en la necesidad de fortalecer los mecanismos de verificación, aunque distinguió la conducta del exmagistrado de las deficiencias administrativas.\n\n“La responsabilidad por el ocultamiento corresponde a Salmain, quien incumplió deliberadamente su obligación de proporcionar información completa y veraz sobre sus antecedentes, obligación que le imponía el propio Reglamento de Concursos. Sin embargo, que esas omisiones se hayan reiterado en 33 concursos sin ser detectadas exige una reflexión crítica sobre los controles institucionales”, expresó.\n\nEn cuanto a las medidas que considera necesarias, el presidente de la Casación Federal propuso: “Desde el Consejo de la Magistratura debemos revisar los mecanismos de verificación de antecedentes y fortalecer el intercambio de información con la Corte Suprema, otros organismos públicos y los colegios de abogados, para contrastar sistemáticamente los antecedentes de los postulantes con los registros oficiales”.\n\nY añadió: “Este caso debe servir para perfeccionar los controles y fortalecer la transparencia del sistema de selección de magistrados”.\n\nDe la Torre vinculó esas dificultades con la distribución de competencias administrativas entre la Corte Suprema y el Consejo.\n\n“Las funciones disciplinarias están repartidas entre el Consejo de la Magistratura, que controla el desempeño de los magistrados, y la Corte Suprema, que conserva las facultades de superintendencia sobre el resto del personal del Poder Judicial. Salmain fue expulsado cuando era empleado de la Justicia, porque se comprobó que había intentado sobornar a personal de la oficina de sorteos para que determinadas causas tramitaran en el juzgado en el que trabajaba. Ese registro quedó en poder de la Corte”, explicó.\n\nLa consejera continuó con una referencia a las posteriores postulaciones de Salmain: “14 años después, Salmain se presentó a concursar ante el Consejo, que desconocía ese antecedente, y omitió informarlo pese a que tenía la obligación de hacerlo”.\n\nEn relación con las reformas administrativas, planteó: “Son problemas de orden práctico que podrían solucionarse con la digitalización y sistematización de todos los procedimientos y las decisiones administrativas internas del Poder Judicial en su conjunto. Es un reclamo que venimos sosteniendo desde el inicio de nuestro mandato y que, finalmente, está avanzando con la reciente aprobación del Expediente Digital Administrativo, que se está implementando progresivamente en diferentes áreas del Consejo, para abandonar el papel definitivamente”.\n\nSobre la conducta del exjuez, concluyó su respuesta: “De todas maneras, Salmain tenía la obligación de informar ese antecedente de buena fe, y no lo hizo. Ese precedente le impedía concursar; nunca debería haber llegado a ser juez”.\n\nLa discusión sobre los antecedentes, en efecto, también se extendió al funcionamiento de los mecanismos disciplinarios y a las condiciones de acceso a la magistratura.\n\nAl realizar un balance de la actividad del Consejo durante la presidencia de Horacio Rosatti, Juez destacó la cantidad de procesos de remoción concluidos y la rapidez con la que se resolvieron algunos de ellos.\n\n“Es una señal positiva y hay datos concretos que lo demuestran. Desde que Horacio Rosatti asumió la presidencia del Consejo, fueron destituidos cuatro jueces: Bento, Poderti, López y Salmain. A ellos se suma Bailaque, que renunció antes del juicio de remoción”, enumeró.\n\nEn cuanto a la proporción de destituciones correspondientes a ese período, puntualizó: “De las 22 destituciones registradas desde 1999, cuatro se produjeron durante esta presidencia: casi el 20% del total. Además, tres -Poderti, López y Salmain- se resolvieron rápidamente en menos de un año”.\n\nEl senador relacionó esas cifras con el funcionamiento institucional de ambos organismos: “Esto demuestra que el Consejo y el Jurado pueden actuar frente a conductas incompatibles con la magistratura. La confianza en la Justicia se recupera con decisiones concretas y dejando claro que ningún juez está por encima de la ley”.\n\nDesde otra perspectiva, De la Torre vinculó la cantidad de procesos disciplinarios con los requisitos para acceder a los cargos judiciales.\n\n“En los últimos 3 años hemos iniciado juicios políticos contra 6 magistrados. Es una cantidad inédita en la historia del Poder Judicial y muestra una degradación en las calidades personales de algunos magistrados. Ello evidencia que tenemos un problema muy anterior: están accediendo al cargo personas que no cuentan con la idoneidad para cumplir funciones tan delicadas”, manifestó.\n\nA partir de ese diagnóstico, detalló las iniciativas impulsadas para modificar los concursos: “Por eso hemos hecho 7 propuestas concretas de mejoras a los concursos, para incorporar tecnología, reducir tiempos y aumentar la transparencia, limitar la discrecionalidad y establecer parámetros de evaluación objetivos sobre capacidad y mérito. Para que lleguen los mejores y no los acomodados. La propia Corte ha realizado una propuesta concreta en ese sentido, que espera ser tratada por el Consejo”.\n\nLa representante de los abogados también mencionó la elaboración de reglas de conducta para quienes ejercen la función judicial.\n\n“Además de saber derecho, los jueces tienen que tener una conducta personal y profesional impecable; deben ser referentes éticos, porque la sociedad necesita confiar en ellos para poder someter sus problemas a la resolución de la Justicia. Por eso impulsamos, junto a los colegios de abogados, un proyecto de Código de Ética Judicial, que está listo para ser aprobado”, señaló.\n\nSobre las consecuencias institucionales de los procesos de remoción, sostuvo: “La remoción de un magistrado es siempre la última opción, una mala noticia que debilita la credibilidad y legitimidad del sistema de Justicia frente a la sociedad, algo que deberíamos prevenir eligiendo personas idóneas, con normas de conducta claras para el desempeño de la función y con controles de gestión y desempeño efectivos y en tiempo real, que permitan hacer correcciones a tiempo y nos eviten tener que llegar a decisiones extremas”.\n\nFinalmente, al referirse a la continuidad de esas iniciativas desde el estamento de los abogados, expresó: “Es una agenda de trabajo para la modernización y transparencia del servicio de Justicia que venimos impulsando y vamos a mantener con Claudia Sarmiento desde la vocalía de Abogados en Acción”.\n\nEl camarista Barroetaveña, en tanto, situó el resultado del juicio político en el marco de las facultades constitucionales del Consejo de la Magistratura y del Jurado de Enjuiciamiento.\n\n“Esta destitución demuestra el funcionamiento de los mecanismos constitucionales de responsabilidad judicial. Es una política judicial que imperó durante estos cuatro años”, afirmó.\n\nY al describir la actuación de ambos organismos, agregó: “El Consejo de la Magistratura investigó los hechos y formuló la acusación, mientras que el Jurado de Enjuiciamiento, luego de sustanciar el proceso con las garantías correspondientes, resolvió remover al juez por mal desempeño”.\n\nEl juez federal también se refirió a la relación entre las garantías de permanencia de los magistrados y sus obligaciones institucionales.\n\n“La independencia judicial y la estabilidad de los magistrados son garantías esenciales para la administración de Justicia, pero deben convivir con mecanismos efectivos de control y rendición de cuentas. La estabilidad protege el ejercicio independiente de la función judicial, pero no exime a los jueces de sus responsabilidades constitucionales”, comentó a este medio.\n\nPara cerrar su valoración del proceso ligado a Salmain, Barroetaveña añadió: “La sentencia constituye una señal institucional positiva: demuestra que el sistema cuenta con herramientas para actuar frente a conductas incompatibles con la magistratura y contribuye a fortalecer la confianza pública en el Poder Judicial”.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "El Jurado de Enjuiciamiento de Magistrados de la Nación resolvió el jueves 29 de octubre, por unanimidad, remover al juez federal de Rosario Gastón Salmain."
          },
          {
            "text": "Salmain fue removido por haber ocultado su paso por el Poder Judicial y una sanción de cesantía impuesta por la Corte Suprema en 2002."
          },
          {
            "text": "Salmain omitió su antecedente judicial y la cesantía en 33 concursos judiciales, incluido el concurso por el que fue designado titular del Juzgado Federal N° 1 de Rosario."
          },
          {
            "text": "El Jurado de Enjuiciamiento desestimó el cargo contra Salmain relacionado con su actuación en el expediente Attila Fideicomisos SRL."
          },
          {
            "text": "Tras la pérdida de inmunidad de arresto, el juez federal Carlos Vera Barros ordenó la detención inmediata de Salmain bajo la modalidad de prisión domiciliaria."
          },
          {
            "text": "El tribunal del jury fue presidido por el juez de cámara Marcelo Bartumeu Romero e integrado por Néstor Barral, las senadoras María Monte de Oca y María Florencia López, los diputados Nicolás Mayoraz y Christian Zulli, y Ana Fernández en representación de los abogados."
          },
          {
            "text": "Luis Juez declaró que ocultar deliberadamente una cesantía del Poder Judicial en 33 concursos no es un error administrativo sino engañar al sistema para acceder a la magistratura."
          },
          {
            "text": "El considerando 2° de la sentencia establece que el proceso penal busca establecer la existencia del delito y la responsabilidad del autor, mientras que el enjuiciamiento determina si el magistrado conserva las condiciones constitucionales para permanecer en el cargo."
          },
          {
            "text": "El considerando 2° del fallo señala que unos mismos hechos pueden ser juzgados en sede penal y en el enjuiciamiento con finalidades diversas, sin que lo resuelto en una condicione a la otra."
          },
          {
            "text": "Diego Barroetaveña afirmó que la omisión de Salmain se reiteró en 33 concursos y continuó después de su designación como juez."
          },
          {
            "text": "Barroetaveña sostuvo que el Jurado reafirmó, en línea con sus precedentes, que las conductas anteriores a la designación pueden valorarse cuando no fueron conocidas por el Senado."
          },
          {
            "text": "Salmain está procesado por presunto cohecho pasivo agravado, prevaricato e incumplimiento de los deberes de funcionario público."
          },
          {
            "text": "Según la hipótesis de los investigadores, Salmain habría favorecido al fideicomiso Attila con resoluciones que permitieron acceder a 10 millones de dólares al tipo de cambio oficial a cambio de una presunta coima de 200.000 dólares."
          },
          {
            "text": "El financista Fernando Elías Whpei declaró como imputado colaborador en la causa Attila y vinculó a Salmain con el supuesto acuerdo ilícito."
          },
          {
            "text": "El procesamiento de Salmain fue dictado en diciembre de 2025 y confirmado parcialmente por la Cámara Federal de Rosario en marzo de este año."
          },
          {
            "text": "La sentencia del Jurado estableció que un auto de procesamiento es una valoración provisoria dictada en otro proceso y no suple la convicción requerida en el enjuiciamiento."
          },
          {
            "text": "El fallo indica que la desestimación del cargo Attila no implica pronunciamiento sobre la existencia del acuerdo, la regularidad de las decisiones ni la responsabilidad del magistrado."
          },
          {
            "text": "Jimena de la Torre afirmó que durante el cepo la gente solo podía comprar 200 dólares a precio oficial y cualquier excepción requería autorización del BCRA."
          },
          {
            "text": "De la Torre afirmó que Salmain ordenó, pese a la oposición del BCRA y sin intervención del fiscal, entregar 10 millones de dólares a valor oficial, que salieron del país antes de que la Cámara revocara la decisión por infundada."
          },
          {
            "text": "Salmain ingresó en mayo de 1997 como empleado del Juzgado Federal de la Seguridad Social N° 8."
          },
          {
            "text": "La Corte Suprema impuso a Salmain una sanción de cesantía mediante la resolución 39/02 del 11 de junio de 2002."
          },
          {
            "text": "La Corte Suprema consideró probado que Salmain intentó inducir a una empleada a alterar el sistema informático de distribución de expedientes para dirigir ejecuciones previsionales a su juzgado."
          },
          {
            "text": "Aunque Salmain había renunciado meses antes, la Corte mantuvo la sanción y luego rechazó su recurso."
          },
          {
            "text": "Entre 2016 y 2024 Salmain participó en 33 concursos ante el Consejo de la Magistratura sin declarar su antecedente laboral ni la cesantía, afirmando dedicarse al ejercicio libre de la abogacía."
          },
          {
            "text": "Salmain argumentó en el juicio político que el reglamento exigía declarar sanciones de los últimos diez años y que la de 2002 quedaba fuera de ese plazo."
          },
          {
            "text": "El fallo afirmó que la omisión fue voluntaria y que el plazo decenal solo alcanzaba al inventario de sanciones, no al empleo ni a su egreso."
          },
          {
            "text": "Diego Barroetaveña es presidente de la Cámara Federal de Casación Penal."
          },
          {
            "text": "El Consejo de la Magistratura aprobó recientemente el Expediente Digital Administrativo, que se implementa progresivamente en distintas áreas."
          },
          {
            "text": "Desde que Horacio Rosatti asumió la presidencia del Consejo de la Magistratura fueron destituidos cuatro jueces: Bento, Poderti, López y Salmain, y Bailaque renunció antes del juicio de remoción."
          },
          {
            "text": "De las 22 destituciones registradas desde 1999, cuatro se produjeron durante la presidencia de Rosatti en el Consejo, casi el 20% del total."
          },
          {
            "text": "Los procesos de remoción de Poderti, López y Salmain se resolvieron en menos de un año."
          },
          {
            "text": "Según Jimena de la Torre, en los últimos 3 años el Consejo inició juicios políticos contra 6 magistrados, una cantidad inédita en la historia del Poder Judicial."
          },
          {
            "text": "De la Torre afirmó haber presentado 7 propuestas concretas de mejora a los concursos y que la Corte Suprema realizó una propuesta que espera tratamiento del Consejo."
          },
          {
            "text": "De la Torre afirmó que impulsaron junto a colegios de abogados un proyecto de Código de Ética Judicial listo para ser aprobado."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Gastón Salmain",
            "mentions": 40
          },
          {
            "name": "Luis Juez",
            "mentions": 9
          },
          {
            "name": "Diego Barroetaveña",
            "mentions": 9
          },
          {
            "name": "Jimena de la Torre",
            "mentions": 9
          },
          {
            "name": "Consejo de la Magistratura",
            "mentions": 17
          },
          {
            "name": "Jurado de Enjuiciamiento de Magistrados de la Nación",
            "mentions": 20
          },
          {
            "name": "Infobae",
            "mentions": 2
          },
          {
            "name": "Causa Attila",
            "mentions": 8
          },
          {
            "name": "Attila Fideicomisos SRL",
            "mentions": 3
          },
          {
            "name": "Corte Suprema de Justicia de la Nación",
            "mentions": 11
          },
          {
            "name": "Juzgado Federal N° 1 de Rosario",
            "mentions": 3
          },
          {
            "name": "Rosario",
            "mentions": 8
          },
          {
            "name": "Carlos Vera Barros",
            "mentions": 1
          },
          {
            "name": "Marcelo Bartumeu Romero",
            "mentions": 1
          },
          {
            "name": "Néstor Barral",
            "mentions": 1
          },
          {
            "name": "María Monte de Oca",
            "mentions": 1
          },
          {
            "name": "María Florencia López",
            "mentions": 1
          },
          {
            "name": "Nicolás Mayoraz",
            "mentions": 1
          },
          {
            "name": "Christian Zulli",
            "mentions": 1
          },
          {
            "name": "Ana Fernández",
            "mentions": 1
          },
          {
            "name": "Senado de la Nación",
            "mentions": 3
          },
          {
            "name": "Córdoba",
            "mentions": 1
          },
          {
            "name": "Fernando Elías Whpei",
            "mentions": 3
          },
          {
            "name": "Cámara Federal de Rosario",
            "mentions": 2
          },
          {
            "name": "Banco Central de la República Argentina",
            "mentions": 2
          },
          {
            "name": "Juzgado Federal de la Seguridad Social N° 8",
            "mentions": 1
          },
          {
            "name": "Horacio Rosatti",
            "mentions": 2
          },
          {
            "name": "Claudia Sarmiento",
            "mentions": 1
          },
          {
            "name": "Abogados en Acción",
            "mentions": 1
          },
          {
            "name": "Cámara Federal de Casación Penal",
            "mentions": 2
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Salmain ingresa al Juzgado Federal de la Seguridad Social N° 8"
          },
          {
            "title": "Inicio del registro de destituciones de jueces"
          },
          {
            "title": "La Corte Suprema dispone la cesantía de Salmain"
          },
          {
            "title": "Salmain comienza a concursar ocultando antecedentes"
          },
          {
            "title": "Último de los 33 concursos con omisión"
          },
          {
            "title": "Procesamiento de Salmain en la causa Attila"
          },
          {
            "title": "Cámara Federal de Rosario confirma parcialmente el procesamiento"
          },
          {
            "title": "El Jurado de Enjuiciamiento destituye a Salmain"
          },
          {
            "title": "Ordenan la detención domiciliaria de Salmain"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 34,
            "ok": 81,
            "evidencia_no_encontrada": 2,
            "fecha_inferida": 3
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "El Jurado de Enjuiciamiento de Magistrados de la Nación resolvió el jueves 29 de octubre, por unanimidad, remover al juez federal de Rosario Gastón Salmain."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Salmain omitió su antecedente judicial y la cesantía en 33 concursos judiciales, incluido el concurso por el que fue designado titular del Juzgado Federal N° 1 de Rosario."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Luis Juez declaró que ocultar deliberadamente una cesantía del Poder Judicial en 33 concursos no es un error administrativo sino engañar al sistema para acceder a la magistratura."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El considerando 2° de la sentencia establece que el proceso penal busca establecer la existencia del delito y la responsabilidad del autor, mientras que el enjuiciamiento determina si el magistrado conserva las condiciones constitucionales para permanecer en el cargo."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Diego Barroetaveña afirmó que la omisión de Salmain se reiteró en 33 concursos y continuó después de su designación como juez."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según la hipótesis de los investigadores, Salmain habría favorecido al fideicomiso Attila con resoluciones que permitieron acceder a 10 millones de dólares al tipo de cambio oficial a cambio de una presunta coima de 200.000 dólares."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Jimena de la Torre afirmó que durante el cepo la gente solo podía comprar 200 dólares a precio oficial y cualquier excepción requería autorización del BCRA."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "De la Torre afirmó que Salmain ordenó, pese a la oposición del BCRA y sin intervención del fiscal, entregar 10 millones de dólares a valor oficial, que salieron del país antes de que la Cámara revocara la decisión por infundada."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La Corte Suprema impuso a Salmain una sanción de cesantía mediante la resolución 39/02 del 11 de junio de 2002."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Salmain ingresó en mayo de 1997 como empleado del Juzgado Federal de la Seguridad Social N° 8."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Entre 2016 y 2024 Salmain participó en 33 concursos ante el Consejo de la Magistratura sin declarar su antecedente laboral ni la cesantía, afirmando dedicarse al ejercicio libre de la abogacía."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "De las 22 destituciones registradas desde 1999, cuatro se produjeron durante la presidencia de Rosatti en el Consejo, casi el 20% del total."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según Jimena de la Torre, en los últimos 3 años el Consejo inició juicios políticos contra 6 magistrados, una cantidad inédita en la historia del Poder Judicial."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "De la Torre afirmó haber presentado 7 propuestas concretas de mejora a los concursos y que la Corte Suprema realizó una propuesta que espera tratamiento del Consejo."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "linea-tiempo",
          "tipo": "linea_tiempo",
          "titulo": "Línea de tiempo",
          "fuente": null,
          "enlace": null,
          "unidad": null,
          "origen_datos": null,
          "puntos": [
            {
              "x": "1997-05",
              "y": null,
              "etiqueta": "Salmain ingresa al Juzgado Federal de la Seguridad Social N° 8",
              "descripcion": "Salmain comenzó a trabajar como empleado del Juzgado Federal de la Seguridad Social N° 8.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p33",
                "inicio": 11349,
                "fin": 11353,
                "cita": "mayo"
              },
              "alertas": []
            },
            {
              "x": "1999",
              "y": null,
              "etiqueta": "Inicio del registro de destituciones de jueces",
              "descripcion": "Desde 1999 se registran 22 destituciones de magistrados, cuatro de ellas durante la presidencia de Rosatti en el Consejo.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p55",
                "inicio": 17491,
                "fin": 17495,
                "cita": "1999"
              },
              "alertas": []
            },
            {
              "x": "2002-06-11",
              "y": null,
              "etiqueta": "La Corte Suprema dispone la cesantía de Salmain",
              "descripcion": "Mediante la resolución 39/02, la Corte Suprema le impuso la cesantía por intentar manipular el sorteo de expedientes previsionales.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p33",
                "inicio": 11495,
                "fin": 11506,
                "cita": "11 de junio"
              },
              "alertas": []
            },
            {
              "x": "2016",
              "y": null,
              "etiqueta": "Salmain comienza a concursar ocultando antecedentes",
              "descripcion": "Desde 2016 participó en concursos ante el Consejo de la Magistratura sin declarar su paso por el Poder Judicial ni la cesantía.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p36",
                "inicio": 11949,
                "fin": 11953,
                "cita": "2016"
              },
              "alertas": []
            },
            {
              "x": "2024",
              "y": null,
              "etiqueta": "Último de los 33 concursos con omisión",
              "descripcion": "Hasta 2024 Salmain participó en 33 concursos, incluido el que lo llevó al Juzgado Federal N° 1 de Rosario, omitiendo sus antecedentes.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p36",
                "inicio": 11956,
                "fin": 11960,
                "cita": "2024"
              },
              "alertas": []
            },
            {
              "x": "2025-12",
              "y": null,
              "etiqueta": "Procesamiento de Salmain en la causa Attila",
              "descripcion": "Se dictó el procesamiento de Salmain por presunto cohecho pasivo agravado, prevaricato e incumplimiento de deberes en la causa Attila.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p17",
                "inicio": 6448,
                "fin": 6457,
                "cita": "diciembre"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": [
            "evento sin cita en la nota, no se grafica: Cámara Federal de Rosario confirma parcialmente el procesamiento (2026-03)",
            "evento sin cita en la nota, no se grafica: El Jurado de Enjuiciamiento destituye a Salmain (2026-10-29)",
            "evento sin cita en la nota, no se grafica: Ordenan la detención domiciliaria de Salmain (2026-10)"
          ]
        },
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Cámara Federal de Casación Penal",
              "y": 13.0,
              "etiqueta": "Cámara Federal de Casación Penal",
              "descripcion": "Tribunal que integra y preside Diego Barroetaveña.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 44,
                "fin": 51,
                "cita": "federal"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «federal»"
              ]
            },
            {
              "x": "Rosario",
              "y": 8.0,
              "etiqueta": "Rosario",
              "descripcion": "Ciudad donde Salmain fue juez y donde tramita la investigación penal.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 55,
                "fin": 62,
                "cita": "Rosario"
              },
              "alertas": []
            },
            {
              "x": "Consejo de la Magistratura",
              "y": 7.0,
              "etiqueta": "Consejo de la Magistratura",
              "descripcion": "Organismo que investigó los hechos, formuló la acusación y ante el cual Salmain concursó sin declarar antecedentes.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 279,
                "fin": 305,
                "cita": "Consejo de la Magistratura"
              },
              "alertas": []
            },
            {
              "x": "Corte Suprema de Justicia de la Nación",
              "y": 6.0,
              "etiqueta": "Corte Suprema de Justicia de la Nación",
              "descripcion": "Máximo tribunal que impuso la cesantía a Salmain en 2002 y conserva la superintendencia sobre el personal judicial.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 846,
                "fin": 859,
                "cita": "Corte Suprema"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Corte Suprema»"
              ]
            },
            {
              "x": "Causa Attila",
              "y": 3.0,
              "etiqueta": "Causa Attila",
              "descripcion": "Investigación penal por un presunto acuerdo para favorecer al fideicomiso Attila a cambio de una coima.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 139,
                "fin": 151,
                "cita": "causa Attila"
              },
              "alertas": []
            },
            {
              "x": "Luis Juez",
              "y": 2.0,
              "etiqueta": "Luis Juez",
              "descripcion": "Senador nacional por Córdoba y consejero que sostuvo la acusación contra Salmain en el juicio político.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 363,
                "fin": 372,
                "cita": "Luis Juez"
              },
              "alertas": []
            },
            {
              "x": "Diego Barroetaveña",
              "y": 2.0,
              "etiqueta": "Diego Barroetaveña",
              "descripcion": "Camarista federal de Casación Penal, presidente de la Casación Federal y consejero acusador en el juicio político.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 374,
                "fin": 392,
                "cita": "Diego Barroetaveña"
              },
              "alertas": []
            },
            {
              "x": "Jimena de la Torre",
              "y": 2.0,
              "etiqueta": "Jimena de la Torre",
              "descripcion": "Consejera representante de los abogados de la matrícula federal que integró la acusación contra Salmain.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 395,
                "fin": 413,
                "cita": "Jimena de la Torre"
              },
              "alertas": []
            },
            {
              "x": "Fernando Elías Whpei",
              "y": 2.0,
              "etiqueta": "Fernando Elías Whpei",
              "descripcion": "Financista imputado colaborador que vinculó a Salmain con el supuesto acuerdo ilícito.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p17",
                "inicio": 6294,
                "fin": 6314,
                "cita": "Fernando Elías Whpei"
              },
              "alertas": []
            },
            {
              "x": "Banco Central de la República Argentina",
              "y": 2.0,
              "etiqueta": "Banco Central de la República Argentina",
              "descripcion": "Entidad que se opuso a la autorización cambiaria otorgada por Salmain.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p27",
                "inicio": 9277,
                "fin": 9281,
                "cita": "BCRA"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «BCRA»"
              ]
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": []
    }
  },
  "12": {
    "titulo": "La visita del papa León XIV: actos en CABA y provincia y operativo de seguridad",
    "cuerpo": "El obispo auxiliar de San Isidro y secretario general de la Conferencia Episcopal Argentina, Raúl Pizarro, adelantó que el papa León XIV tendrá dos recorridos en papamóvil por la avenida del Libertador durante su visita a la Ciudad de Buenos Aires. La organización prevé accesos delimitados, sectores vallados, voluntarios y prioridad para jóvenes acreditados en la vigilia del martes.\n\nPizarro, que coordina la preparación eclesial del viaje, explicó en Radio Mitre que la jornada de mayor convocatoria será el lunes 9 de noviembre. Después de visitar el Pequeño Cottolengo Don Orione de Claypole por la mañana, el pontífice volverá a la Ciudad para celebrar una misa en el Monumento de los Españoles, en Palermo.\n\nEl Papa viajará desde Claypole en un vehículo cerrado y bajará en el túnel de la avenida del Libertador para subir al papamóvil. Desde allí comenzará un trayecto de poco más de dos kilómetros hasta el escenario donde se realizará la celebración.\n\n“Ahí abajo hay un lugar más seguro”, explicó Pizarro sobre el punto elegido para el cambio de vehículo. A partir de ese momento, el pontífice recorrerá la avenida a baja velocidad para saludar a los fieles.\n\nSegún describió Pizarro, la gente podrá ubicarse a ambos lados de la avenida del Libertador, dentro de los sectores organizados con vallas. El objetivo es que León XIV avance sin apuro y pueda tener contacto visual con quienes asistan a la misa.\n\n“La gente va a estar con corralitos. Entonces el Papa va a poder ir pasando más tranquilo y sin apuro para que todos lo vean, todos lo puedan saludar”, afirmó el obispo. También señaló que el pontífice podría detenerse durante el recorrido para saludar a niños que se acerquen desde los sectores habilitados.\n\nEl coordinador indicó que habrá cuatro accesos principales y que la entrada se organizará desde la zona de Olleros hacia adelante, además de los ingresos del lado del río. Allí habrá voluntarios y señalización para guiar a los asistentes hasta las áreas disponibles.\n\nUna vez que llegue al escenario, el Papa lo rodeará en el papamóvil y se dirigirá a una sacristía montada detrás de la estructura. Allí se preparará para la misa, prevista para las 11.30, de acuerdo con el programa publicado por la Santa Sede.\n\nLa vigilia del martes dará prioridad a jóvenes de 15 a 35 años\n\nEl segundo acto masivo en la Ciudad será el martes 10 por la noche, cuando León XIV regrese de Córdoba para presidir una vigilia con jóvenes en el Monumento de los Españoles. La actividad comenzará a las 20.15, aunque el predio abrirá desde el mediodía y tendrá propuestas artísticas desde las 16.\n\nPizarro dijo que el mecanismo será similar al del lunes: el Papa llegará al sector de Palermo y hará un recorrido en papamóvil. Sin embargo, la disposición del público tendrá una diferencia: quienes tengan entre 15 y 35 años y cuenten con acreditación previa accederán a los lugares más cercanos al escenario.\n\n“Es un evento abierto a todo el mundo, pero se les da prioridad a los que tienen entre 15 y 35 años que se hayan acreditado previamente”, señaló. Los jóvenes acreditados serán decenas de miles, según precisó, y ocuparán el área frontal para facilitar un encuentro más próximo con el pontífice.\n\nEl resto de los asistentes también podrá participar de la vigilia, aunque deberá respetar los accesos y la distribución que establezca la organización. Las indicaciones finales sobre circulación, cortes y sectores serán difundidas por los canales oficiales.\n\nAntes de las actividades abiertas al público, León XIV llegará a Aeroparque el domingo 8 de noviembre, visitará el Monumento a San Martín en Plaza San Martín y será recibido por el presidente Javier Milei en la Casa Rosada.\n\nPizarro definió la audiencia con el mandatario como una instancia protocolar, vinculada a la condición del pontífice como jefe de Estado de la Ciudad del Vaticano. Más tarde, el Presidente y el Papa pronunciarán discursos ante autoridades, gobernadores, legisladores, intendentes y miembros del cuerpo diplomático en el Palacio Libertad.\n\nLa visita reunirá dimensiones pastorales e institucionales. El lunes, además de la misa en Palermo, León XIV tendrá un encuentro con el mundo del trabajo en la Universidad Católica Argentina, se reunirá con referentes de comunidades cristianas y otras tradiciones religiosas, y celebrará vísperas con los obispos argentinos en la Catedral Metropolitana.\n\nLa seguridad podrá modificar aspectos de la organización\n\nPizarro sostuvo que la seguridad será uno de los componentes centrales del operativo y que los preparativos no admiten comparación con las visitas de Juan Pablo II, la última de ellas en 1987. La Conferencia Episcopal tomó contacto con organizadores de viajes papales recientes en Chile y España para conocer los criterios que aplica el Vaticano.\n\nEl obispo relató que las delegaciones de la Santa Sede les anticiparon que los equipos de seguridad tienen la última palabra sobre recorridos y modalidades de acceso. “Los que mandan son los de seguridad, porque te dicen: ‘Esto se puede, esto no se puede’”, afirmó.\n\nLa visita contará con dos papamóviles y la coordinación involucra al Gobierno nacional, la Iglesia, la Nunciatura Apostólica y equipos del Vaticano. El operativo incluye seguridad, movilidad, atención sanitaria, infraestructura y traslados.\n\nEl miércoles 11, tras una visita al Complejo Penitenciario Federal de Devoto, el Papa viajará a Luján para celebrar una misa en la basílica. Pizarro anticipó que los fieles deberán estacionar a unos cinco kilómetros del santuario y completar el trayecto a pie, salvo quienes necesiten usar los buses dispuestos por la organización.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "Raúl Pizarro es obispo auxiliar de San Isidro y secretario general de la Conferencia Episcopal Argentina."
          },
          {
            "text": "El papa León XIV tendrá dos recorridos en papamóvil por la avenida del Libertador durante su visita a Buenos Aires, según Raúl Pizarro."
          },
          {
            "text": "Pizarro declaró en Radio Mitre que la jornada de mayor convocatoria será el lunes 9 de noviembre."
          },
          {
            "text": "El lunes 9 de noviembre el Papa visitará por la mañana el Pequeño Cottolengo Don Orione de Claypole y luego celebrará una misa en el Monumento de los Españoles, en Palermo."
          },
          {
            "text": "El Papa cambiará de vehículo en el túnel de la avenida del Libertador y recorrerá en papamóvil poco más de dos kilómetros hasta el escenario."
          },
          {
            "text": "Pizarro dijo sobre el túnel: \"Ahí abajo hay un lugar más seguro\"."
          },
          {
            "text": "Pizarro afirmó: \"La gente va a estar con corralitos. Entonces el Papa va a poder ir pasando más tranquilo y sin apuro para que todos lo vean, todos lo puedan saludar\"."
          },
          {
            "text": "Habrá cuatro accesos principales a la misa de Palermo, con ingreso desde la zona de Olleros y del lado del río."
          },
          {
            "text": "La misa del lunes en Palermo está prevista para las 11.30, según el programa publicado por la Santa Sede."
          },
          {
            "text": "El martes 10 por la noche, tras regresar de Córdoba, León XIV presidirá una vigilia con jóvenes en el Monumento de los Españoles que comenzará a las 20.15; el predio abrirá al mediodía y habrá propuestas artísticas desde las 16."
          },
          {
            "text": "En la vigilia tendrán prioridad los jóvenes de 15 a 35 años acreditados previamente."
          },
          {
            "text": "Pizarro señaló: \"Es un evento abierto a todo el mundo, pero se les da prioridad a los que tienen entre 15 y 35 años que se hayan acreditado previamente\"."
          },
          {
            "text": "Los jóvenes acreditados para la vigilia serán decenas de miles, según Pizarro."
          },
          {
            "text": "León XIV llegará a Aeroparque el domingo 8 de noviembre, visitará el Monumento a San Martín en Plaza San Martín y será recibido por Javier Milei en la Casa Rosada."
          },
          {
            "text": "El Presidente y el Papa pronunciarán discursos ante autoridades y cuerpo diplomático en el Palacio Libertad."
          },
          {
            "text": "El lunes León XIV tendrá un encuentro con el mundo del trabajo en la Universidad Católica Argentina, se reunirá con referentes religiosos y celebrará vísperas con los obispos en la Catedral Metropolitana."
          },
          {
            "text": "La última visita de Juan Pablo II a la Argentina fue en 1987."
          },
          {
            "text": "La Conferencia Episcopal Argentina consultó a organizadores de viajes papales recientes en Chile y España."
          },
          {
            "text": "Pizarro afirmó: \"Los que mandan son los de seguridad, porque te dicen: 'Esto se puede, esto no se puede'\"."
          },
          {
            "text": "La visita contará con dos papamóviles."
          },
          {
            "text": "El miércoles 11, tras visitar el Complejo Penitenciario Federal de Devoto, el Papa celebrará una misa en la basílica de Luján."
          },
          {
            "text": "Los fieles que vayan a Luján deberán estacionar a unos cinco kilómetros del santuario y caminar, según Pizarro."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Papa León XIV",
            "mentions": 24
          },
          {
            "name": "Raúl Pizarro",
            "mentions": 12
          },
          {
            "name": "Conferencia Episcopal Argentina",
            "mentions": 2
          },
          {
            "name": "San Isidro",
            "mentions": 1
          },
          {
            "name": "Avenida del Libertador",
            "mentions": 4
          },
          {
            "name": "Ciudad de Buenos Aires",
            "mentions": 4
          },
          {
            "name": "Radio Mitre",
            "mentions": 1
          },
          {
            "name": "Pequeño Cottolengo Don Orione",
            "mentions": 1
          },
          {
            "name": "Claypole",
            "mentions": 2
          },
          {
            "name": "Monumento de los Españoles",
            "mentions": 2
          },
          {
            "name": "Palermo",
            "mentions": 3
          },
          {
            "name": "Santa Sede",
            "mentions": 3
          },
          {
            "name": "Córdoba",
            "mentions": 1
          },
          {
            "name": "Aeroparque",
            "mentions": 1
          },
          {
            "name": "Monumento a San Martín",
            "mentions": 1
          },
          {
            "name": "Plaza San Martín",
            "mentions": 1
          },
          {
            "name": "Javier Milei",
            "mentions": 4
          },
          {
            "name": "Casa Rosada",
            "mentions": 1
          },
          {
            "name": "Ciudad del Vaticano",
            "mentions": 4
          },
          {
            "name": "Palacio Libertad",
            "mentions": 1
          },
          {
            "name": "Universidad Católica Argentina",
            "mentions": 1
          },
          {
            "name": "Catedral Metropolitana",
            "mentions": 1
          },
          {
            "name": "Juan Pablo II",
            "mentions": 1
          },
          {
            "name": "Chile",
            "mentions": 1
          },
          {
            "name": "España",
            "mentions": 1
          },
          {
            "name": "Gobierno nacional",
            "mentions": 1
          },
          {
            "name": "Nunciatura Apostólica",
            "mentions": 1
          },
          {
            "name": "Complejo Penitenciario Federal de Devoto",
            "mentions": 1
          },
          {
            "name": "Luján",
            "mentions": 2
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Última visita de Juan Pablo II a la Argentina"
          },
          {
            "title": "León XIV llega a Aeroparque y visita Plaza San Martín"
          },
          {
            "title": "Milei recibe al Papa en la Casa Rosada"
          },
          {
            "title": "Discursos ante autoridades en el Palacio Libertad"
          },
          {
            "title": "Visita al Pequeño Cottolengo Don Orione de Claypole"
          },
          {
            "title": "Misa en el Monumento de los Españoles en Palermo"
          },
          {
            "title": "Encuentros en la UCA y vísperas en la Catedral"
          },
          {
            "title": "Vigilia con jóvenes en Palermo"
          },
          {
            "title": "Visita a Devoto y misa en la Basílica de Luján"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 21,
            "ok": 61,
            "evidencia_no_encontrada": 1,
            "fecha_inferida": 8
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "Pizarro declaró en Radio Mitre que la jornada de mayor convocatoria será el lunes 9 de noviembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La misa del lunes en Palermo está prevista para las 11.30, según el programa publicado por la Santa Sede."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En la vigilia tendrán prioridad los jóvenes de 15 a 35 años acreditados previamente."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El martes 10 por la noche, tras regresar de Córdoba, León XIV presidirá una vigilia con jóvenes en el Monumento de los Españoles que comenzará a las 20.15; el predio abrirá al mediodía y habrá propuestas artísticas desde las 16."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Pizarro señaló: \"Es un evento abierto a todo el mundo, pero se les da prioridad a los que tienen entre 15 y 35 años que se hayan acreditado previamente\"."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "León XIV llegará a Aeroparque el domingo 8 de noviembre, visitará el Monumento a San Martín en Plaza San Martín y será recibido por Javier Milei en la Casa Rosada."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El miércoles 11, tras visitar el Complejo Penitenciario Federal de Devoto, el Papa celebrará una misa en la basílica de Luján."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Avenida del Libertador",
              "y": 3.0,
              "etiqueta": "Avenida del Libertador",
              "descripcion": "Avenida por donde el Papa recorrerá en papamóvil.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 179,
                "fin": 201,
                "cita": "avenida del Libertador"
              },
              "alertas": []
            },
            {
              "x": "Palermo",
              "y": 3.0,
              "etiqueta": "Palermo",
              "descripcion": "Barrio donde se ubica el Monumento de los Españoles.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 706,
                "fin": 713,
                "cita": "Palermo"
              },
              "alertas": []
            },
            {
              "x": "Claypole",
              "y": 2.0,
              "etiqueta": "Claypole",
              "descripcion": "Localidad donde se encuentra el Pequeño Cottolengo Don Orione.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 589,
                "fin": 597,
                "cita": "Claypole"
              },
              "alertas": []
            },
            {
              "x": "Monumento de los Españoles",
              "y": 2.0,
              "etiqueta": "Monumento de los Españoles",
              "descripcion": "Sitio de la misa del lunes y la vigilia con jóvenes del martes.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 675,
                "fin": 701,
                "cita": "Monumento de los Españoles"
              },
              "alertas": []
            },
            {
              "x": "Santa Sede",
              "y": 2.0,
              "etiqueta": "Santa Sede",
              "descripcion": "Publicó el programa de la visita y envió delegaciones que anticiparon criterios de seguridad.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p8",
                "inicio": 2228,
                "fin": 2238,
                "cita": "Santa Sede"
              },
              "alertas": []
            },
            {
              "x": "San Isidro",
              "y": 1.0,
              "etiqueta": "San Isidro",
              "descripcion": "Diócesis de la que Pizarro es obispo auxiliar.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 22,
                "fin": 32,
                "cita": "San Isidro"
              },
              "alertas": []
            },
            {
              "x": "Conferencia Episcopal Argentina",
              "y": 1.0,
              "etiqueta": "Conferencia Episcopal Argentina",
              "descripcion": "Organismo episcopal que participa en la organización de la visita papal.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 60,
                "fin": 91,
                "cita": "Conferencia Episcopal Argentina"
              },
              "alertas": []
            },
            {
              "x": "Raúl Pizarro",
              "y": 1.0,
              "etiqueta": "Raúl Pizarro",
              "descripcion": "Obispo auxiliar de San Isidro y secretario general de la Conferencia Episcopal Argentina que coordina la preparación eclesial del viaje.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 93,
                "fin": 105,
                "cita": "Raúl Pizarro"
              },
              "alertas": []
            },
            {
              "x": "Papa León XIV",
              "y": 1.0,
              "etiqueta": "Papa León XIV",
              "descripcion": "Pontífice cuya visita a la Argentina incluye misas, vigilia y encuentros institucionales.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 123,
                "fin": 136,
                "cita": "papa León XIV"
              },
              "alertas": []
            },
            {
              "x": "Ciudad de Buenos Aires",
              "y": 1.0,
              "etiqueta": "Ciudad de Buenos Aires",
              "descripcion": "Ciudad donde se realizarán los principales actos masivos de la visita.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 225,
                "fin": 247,
                "cita": "Ciudad de Buenos Aires"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": [
        "línea de tiempo omitida: 1 evento(s) sostenidos por la nota, hacen falta 3"
      ]
    }
  },
  "13": {
    "titulo": "Visita del papa León XIV: cómo quedan los feriados de noviembre",
    "cuerpo": "Visita del papa León XIV a la Argentina: cómo quedan los feriados de noviembre tras la confirmación del Vaticano\n\nEl Poder Ejecutivo declaró el evento como “interés nacional” y creó una unidad especial para planificar la organización; el sumo pontífice estará en el país desde el 8 al 11\n\nTras haber sido intervenido quirúrgicamente hace dos semanas por un cáncer de pulmón, el Sumo Pontífice confirmó su visita a la Argentina del 8 al 11 de noviembre: recorrerá la ciudad de Buenos Aires, la provincia de Buenos Aires —donde encabezará una misa en Luján— y Córdoba. En este marco, se confirmaron los feriados que el Gobierno había previsto para organizar el operativo, a través del Decreto 1103/2026, publicado en el Boletín Oficial.\n\nEn el marco de mucha expectativa en torno a la primera visita papal desde Juan Pablo II, el Ejecutivo declaró de “interés nacional” la visita oficial de León XIV y las actividades oficiales, institucionales, protocolares y de organización vinculadas a su llegada. Además, producto de lo que definió como “la superposición con los desplazamientos laborales, educativos y comerciales propios de una jornada hábil”, fijó tres feriados.\n\nCuándo son los feriados\n\nConforme a la agenda prevista para la gira de León XIV, el Gobierno estableció feriado en todo el país el lunes 9 de noviembre.\n\nEn cambio, en función de los pedidos de autoridades locales, el Ejecutivo decretó feriado nacional pero con alcance territorial limitado el martes 10, en la provincia de Córdoba y la Ciudad de Buenos Aires; y el miércoles 11, en la provincia de Buenos Aires.\n\nEl decreto también creó, dentro de la Jefatura de Gabinete de Ministros, la Unidad Ejecutora Especial Temporaria “Visita de Su Santidad el Papa León XIV”, que tendrá a su cargo planificar, coordinar y conducir las acciones necesarias para la organización y realización de la visita. La estructura tendrá una vigencia de hasta 12 meses, contados desde la entrada en vigencia del decreto.\n\nAdemás de los feriados previstos por la visita del Sumo Pontífice, el lunes 23 de noviembre es feriado nacional en la Argentina por el Día de la Soberanía Nacional.\n\nCómo se aplican estos feriados\n\nEl lunes 9 de noviembre rige sobre todo el territorio nacional, por lo que todos los ciudadanos se verán alcanzados por la medida oficial. Distinto es el caso de los feriados de alcance territorial limitado, es decir, los que rigen para el martes 10 y el miércoles 11 de noviembre.\n\nSegún fuentes del Gobierno consultadas por LA NACION, en estos casos, los feriados se rigen según el domicilio en el que una persona cumple sus tareas laborales. Es decir, si alguien vive en la ciudad de Buenos Aires pero trabaja en el conurbano bonaerense, tendrá feriado el miércoles 11 de noviembre y —a la inversa— el feriado será el martes. Además, se indicó que estará garantizado el 75% de los servicios de transporte público para facilitar el traslado de quienes deban movilizarse entre distritos alcanzados y no alcanzados por la medida.\n\nLos operativos\n\nLa visita se extenderá durante cuatro días e incluirá actividades institucionales, pastorales y religiosas en la Ciudad de Buenos Aires, Claypole, Córdoba y Luján.\n\nLeón XIV llegará al país el domingo 8 de noviembre y participará de una ceremonia de bienvenida en la Casa Rosada. Antes, visitará el Monumento General San Martín y luego mantendrá un encuentro con el presidente Javier Milei. La jornada concluirá con una actividad en el Palacio Libertad.\n\nEl lunes 9, el Papa visitará el Pequeño Cottolengo Don Orione de Claypole y celebrará una misa en el Monumento a los Españoles, en Palermo. También se reunirá con sindicalistas y representantes de movimientos sociales, líderes de distintas comunidades cristianas y de otras tradiciones religiosas, además de mantener actividades con el episcopado argentino.\n\nEl martes 10 viajará a Córdoba, donde celebrará una misa en la explanada de la Escuela de Aviación Militar y se reunirá con obispos, clérigos y agentes pastorales. Por la tarde regresará a Buenos Aires para participar de una vigilia con jóvenes.\n\nFinalmente, el miércoles 11 visitará el Complejo Penitenciario Federal de Buenos Aires, celebrará una misa frente a la Basílica de Nuestra Señora de Luján y partirá hacia Lima, Perú.\n\nPor el despliegue previsto, el gobierno porteño informó que habrá cortes de calles y una zona estéril alrededor del Papa, que se extenderá desde el Monumento a los Españoles hasta la avenida Udaondo. La avenida del Libertador estará cortada el lunes 9 y el martes 10, cuando se realizarán la misa central y la vigilia con jóvenes.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "El papa León XIV fue intervenido quirúrgicamente hace dos semanas por un cáncer de pulmón."
          },
          {
            "text": "El papa León XIV visitará la Argentina del 8 al 11 de noviembre, recorriendo la ciudad de Buenos Aires, la provincia de Buenos Aires y Córdoba."
          },
          {
            "text": "Los feriados por la visita papal se establecieron mediante el Decreto 1103/2026, publicado en el Boletín Oficial."
          },
          {
            "text": "La visita de León XIV será la primera visita papal a la Argentina desde Juan Pablo II."
          },
          {
            "text": "El Poder Ejecutivo declaró de interés nacional la visita oficial de León XIV y las actividades vinculadas a su llegada."
          },
          {
            "text": "El Gobierno fijó tres feriados por la visita papal, justificados por la superposición con los desplazamientos laborales, educativos y comerciales propios de una jornada hábil."
          },
          {
            "text": "El lunes 9 de noviembre es feriado en todo el país por la visita del papa León XIV."
          },
          {
            "text": "El martes 10 de noviembre es feriado con alcance territorial limitado en la provincia de Córdoba y la Ciudad de Buenos Aires."
          },
          {
            "text": "El miércoles 11 de noviembre es feriado con alcance territorial limitado en la provincia de Buenos Aires."
          },
          {
            "text": "El decreto creó en la Jefatura de Gabinete la Unidad Ejecutora Especial Temporaria 'Visita de Su Santidad el Papa León XIV', con vigencia de hasta 12 meses."
          },
          {
            "text": "El lunes 23 de noviembre es feriado nacional en la Argentina por el Día de la Soberanía Nacional."
          },
          {
            "text": "Según fuentes del Gobierno, los feriados de alcance territorial limitado se rigen según el domicilio donde la persona cumple sus tareas laborales."
          },
          {
            "text": "Se garantizará el 75% de los servicios de transporte público durante los feriados de alcance territorial limitado."
          },
          {
            "text": "León XIV llegará el domingo 8 de noviembre, visitará el Monumento General San Martín, participará de una ceremonia de bienvenida en la Casa Rosada, se reunirá con Javier Milei y cerrará la jornada en el Palacio Libertad."
          },
          {
            "text": "El lunes 9 el Papa visitará el Pequeño Cottolengo Don Orione de Claypole y celebrará una misa en el Monumento a los Españoles, en Palermo."
          },
          {
            "text": "El martes 10 el Papa celebrará una misa en la explanada de la Escuela de Aviación Militar de Córdoba y por la tarde participará de una vigilia con jóvenes en Buenos Aires."
          },
          {
            "text": "El miércoles 11 el Papa visitará el Complejo Penitenciario Federal de Buenos Aires, celebrará misa frente a la Basílica de Luján y partirá hacia Lima, Perú."
          },
          {
            "text": "El gobierno porteño informó que habrá una zona estéril desde el Monumento a los Españoles hasta la avenida Udaondo y que la avenida del Libertador estará cortada el 9 y 10 de noviembre."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Papa León XIV",
            "mentions": 14
          },
          {
            "name": "Argentina",
            "mentions": 5
          },
          {
            "name": "Vaticano",
            "mentions": 1
          },
          {
            "name": "Poder Ejecutivo Nacional",
            "mentions": 7
          },
          {
            "name": "Decreto 1103/2026",
            "mentions": 3
          },
          {
            "name": "Boletín Oficial",
            "mentions": 1
          },
          {
            "name": "Ciudad de Buenos Aires",
            "mentions": 5
          },
          {
            "name": "Provincia de Buenos Aires",
            "mentions": 2
          },
          {
            "name": "Luján",
            "mentions": 2
          },
          {
            "name": "Córdoba",
            "mentions": 4
          },
          {
            "name": "Juan Pablo II",
            "mentions": 1
          },
          {
            "name": "Jefatura de Gabinete de Ministros",
            "mentions": 1
          },
          {
            "name": "Unidad Ejecutora Especial Temporaria \"Visita de Su Santidad el Papa León XIV\"",
            "mentions": 2
          },
          {
            "name": "Día de la Soberanía Nacional",
            "mentions": 1
          },
          {
            "name": "LA NACION",
            "mentions": 1
          },
          {
            "name": "Claypole",
            "mentions": 2
          },
          {
            "name": "Casa Rosada",
            "mentions": 1
          },
          {
            "name": "Monumento General San Martín",
            "mentions": 1
          },
          {
            "name": "Javier Milei",
            "mentions": 1
          },
          {
            "name": "Palacio Libertad",
            "mentions": 1
          },
          {
            "name": "Pequeño Cottolengo Don Orione",
            "mentions": 1
          },
          {
            "name": "Monumento a los Españoles",
            "mentions": 2
          },
          {
            "name": "Palermo",
            "mentions": 1
          },
          {
            "name": "Episcopado argentino",
            "mentions": 1
          },
          {
            "name": "Escuela de Aviación Militar",
            "mentions": 1
          },
          {
            "name": "Complejo Penitenciario Federal de Buenos Aires",
            "mentions": 1
          },
          {
            "name": "Basílica de Nuestra Señora de Luján",
            "mentions": 1
          },
          {
            "name": "Lima",
            "mentions": 1
          },
          {
            "name": "Perú",
            "mentions": 1
          },
          {
            "name": "Gobierno porteño",
            "mentions": 1
          },
          {
            "name": "Avenida Udaondo",
            "mentions": 1
          },
          {
            "name": "Avenida del Libertador",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "El Papa es operado por un cáncer de pulmón"
          },
          {
            "title": "Se publica el Decreto 1103/2026 sobre la visita papal"
          },
          {
            "title": "León XIV llega a la Argentina"
          },
          {
            "title": "Feriado nacional por la visita del Papa"
          },
          {
            "title": "Misa en el Monumento a los Españoles y visita a Claypole"
          },
          {
            "title": "Feriado en Córdoba y la Ciudad de Buenos Aires"
          },
          {
            "title": "El Papa viaja a Córdoba y vigilia con jóvenes"
          },
          {
            "title": "Feriado en la provincia de Buenos Aires"
          },
          {
            "title": "Misa en Luján y partida hacia Lima"
          },
          {
            "title": "Feriado por el Día de la Soberanía Nacional"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 17,
            "ok": 81,
            "fecha_inferida": 2
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "El lunes 9 de noviembre es feriado en todo el país por la visita del papa León XIV."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El papa León XIV visitará la Argentina del 8 al 11 de noviembre, recorriendo la ciudad de Buenos Aires, la provincia de Buenos Aires y Córdoba."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Los feriados por la visita papal se establecieron mediante el Decreto 1103/2026, publicado en el Boletín Oficial."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El miércoles 11 de noviembre es feriado con alcance territorial limitado en la provincia de Buenos Aires."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El martes 10 de noviembre es feriado con alcance territorial limitado en la provincia de Córdoba y la Ciudad de Buenos Aires."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El decreto creó en la Jefatura de Gabinete la Unidad Ejecutora Especial Temporaria 'Visita de Su Santidad el Papa León XIV', con vigencia de hasta 12 meses."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El lunes 23 de noviembre es feriado nacional en la Argentina por el Día de la Soberanía Nacional."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Se garantizará el 75% de los servicios de transporte público durante los feriados de alcance territorial limitado."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "León XIV llegará el domingo 8 de noviembre, visitará el Monumento General San Martín, participará de una ceremonia de bienvenida en la Casa Rosada, se reunirá con Javier Milei y cerrará la jornada en el Palacio Libertad."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El lunes 9 el Papa visitará el Pequeño Cottolengo Don Orione de Claypole y celebrará una misa en el Monumento a los Españoles, en Palermo."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El martes 10 el Papa celebrará una misa en la explanada de la Escuela de Aviación Militar de Córdoba y por la tarde participará de una vigilia con jóvenes en Buenos Aires."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El miércoles 11 el Papa visitará el Complejo Penitenciario Federal de Buenos Aires, celebrará misa frente a la Basílica de Luján y partirá hacia Lima, Perú."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El gobierno porteño informó que habrá una zona estéril desde el Monumento a los Españoles hasta la avenida Udaondo y que la avenida del Libertador estará cortada el 9 y 10 de noviembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "linea-tiempo",
          "tipo": "linea_tiempo",
          "titulo": "Línea de tiempo",
          "fuente": null,
          "enlace": null,
          "unidad": null,
          "origen_datos": null,
          "puntos": [
            {
              "x": "2026",
              "y": null,
              "etiqueta": "El Papa es operado por un cáncer de pulmón",
              "descripcion": "León XIV fue intervenido quirúrgicamente por un cáncer de pulmón dos semanas antes de confirmar su visita a la Argentina.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p3",
                "inicio": 696,
                "fin": 700,
                "cita": "2026"
              },
              "alertas": []
            },
            {
              "x": "2026",
              "y": null,
              "etiqueta": "Se publica el Decreto 1103/2026 sobre la visita papal",
              "descripcion": "El Gobierno declaró de interés nacional la visita de León XIV, fijó tres feriados y creó una unidad ejecutora especial en la Jefatura de Gabinete.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p3",
                "inicio": 696,
                "fin": 700,
                "cita": "2026"
              },
              "alertas": []
            },
            {
              "x": "2026-11-08",
              "y": null,
              "etiqueta": "León XIV llega a la Argentina",
              "descripcion": "El Papa llega al país, visita el Monumento General San Martín, participa de una ceremonia en la Casa Rosada, se reúne con Javier Milei y cierra la jornada en el Palacio Libertad.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p15",
                "inicio": 3218,
                "fin": 3232,
                "cita": "8 de noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-11-09",
              "y": null,
              "etiqueta": "Feriado nacional por la visita del Papa",
              "descripcion": "Rige un feriado en todo el territorio nacional por la visita de León XIV.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p6",
                "inicio": 1307,
                "fin": 1321,
                "cita": "9 de noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-11-09",
              "y": null,
              "etiqueta": "Misa en el Monumento a los Españoles y visita a Claypole",
              "descripcion": "El Papa visita el Pequeño Cottolengo Don Orione de Claypole, celebra misa en Palermo y se reúne con sindicalistas, líderes religiosos y el episcopado.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p6",
                "inicio": 1307,
                "fin": 1321,
                "cita": "9 de noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-11-11",
              "y": null,
              "etiqueta": "Feriado en la provincia de Buenos Aires",
              "descripcion": "Feriado nacional con alcance territorial limitado a la provincia de Buenos Aires.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p3",
                "inicio": 436,
                "fin": 451,
                "cita": "11 de noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-11-11",
              "y": null,
              "etiqueta": "Misa en Luján y partida hacia Lima",
              "descripcion": "El Papa visita el Complejo Penitenciario Federal, celebra misa frente a la Basílica de Luján y parte hacia Lima, Perú.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p3",
                "inicio": 436,
                "fin": 451,
                "cita": "11 de noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-11-23",
              "y": null,
              "etiqueta": "Feriado por el Día de la Soberanía Nacional",
              "descripcion": "El lunes 23 de noviembre es feriado nacional por el Día de la Soberanía Nacional.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p9",
                "inicio": 2048,
                "fin": 2063,
                "cita": "23 de noviembre"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": [
            "evento sin cita en la nota, no se grafica: Feriado en Córdoba y la Ciudad de Buenos Aires (2026-11-10)",
            "evento sin cita en la nota, no se grafica: El Papa viaja a Córdoba y vigilia con jóvenes (2026-11-10)"
          ]
        },
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Ciudad de Buenos Aires",
              "y": 4.0,
              "etiqueta": "Ciudad de Buenos Aires",
              "descripcion": "Distrito que recorrerá el papa y con feriado el martes 10.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 466,
                "fin": 488,
                "cita": "ciudad de Buenos Aires"
              },
              "alertas": []
            },
            {
              "x": "Córdoba",
              "y": 4.0,
              "etiqueta": "Córdoba",
              "descripcion": "Provincia que visitará el papa el martes 10, con feriado ese día.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 558,
                "fin": 565,
                "cita": "Córdoba"
              },
              "alertas": []
            },
            {
              "x": "Argentina",
              "y": 3.0,
              "etiqueta": "Argentina",
              "descripcion": "País que recibirá la visita papal y donde se fijaron feriados.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 30,
                "fin": 39,
                "cita": "Argentina"
              },
              "alertas": []
            },
            {
              "x": "Luján",
              "y": 3.0,
              "etiqueta": "Luján",
              "descripcion": "Ciudad donde el papa encabezará una misa.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 549,
                "fin": 554,
                "cita": "Luján"
              },
              "alertas": []
            },
            {
              "x": "Papa León XIV",
              "y": 2.0,
              "etiqueta": "Papa León XIV",
              "descripcion": "Sumo Pontífice que visitará la Argentina del 8 al 11 de noviembre.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 11,
                "fin": 24,
                "cita": "papa León XIV"
              },
              "alertas": []
            },
            {
              "x": "Provincia de Buenos Aires",
              "y": 2.0,
              "etiqueta": "Provincia de Buenos Aires",
              "descripcion": "Provincia con feriado el miércoles 11 donde el papa oficiará misa en Luján.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 493,
                "fin": 518,
                "cita": "provincia de Buenos Aires"
              },
              "alertas": []
            },
            {
              "x": "Claypole",
              "y": 2.0,
              "etiqueta": "Claypole",
              "descripcion": "Localidad donde el papa visitará el Pequeño Cottolengo Don Orione.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p14",
                "inicio": 3154,
                "fin": 3162,
                "cita": "Claypole"
              },
              "alertas": []
            },
            {
              "x": "Monumento a los Españoles",
              "y": 2.0,
              "etiqueta": "Monumento a los Españoles",
              "descripcion": "Sitio de la misa central en Palermo.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p16",
                "inicio": 3573,
                "fin": 3598,
                "cita": "Monumento a los Españoles"
              },
              "alertas": []
            },
            {
              "x": "Vaticano",
              "y": 1.0,
              "etiqueta": "Vaticano",
              "descripcion": "Santa Sede que confirmó la visita del papa.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 104,
                "fin": 112,
                "cita": "Vaticano"
              },
              "alertas": []
            },
            {
              "x": "Poder Ejecutivo Nacional",
              "y": 1.0,
              "etiqueta": "Poder Ejecutivo Nacional",
              "descripcion": "Gobierno que declaró de interés nacional la visita y fijó feriados por decreto.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 117,
                "fin": 122,
                "cita": "Poder"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Poder»"
              ]
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": []
    }
  },
  "14": {
    "titulo": "Los universitarios comienzan hoy un nuevo paro que se extenderá durante una semana",
    "cuerpo": "Los docentes universitarios y preuniversitarios iniciarán este miércoles una semana de paro nacional, en medio del reclamo sindical por la aplicación de la Ley de Financiamiento Universitario, la recomposición salarial y la asignación de recursos para el funcionamiento del sistema.\n\nLa medida, impulsada por la Federación Nacional de Docentes, Investigadores y Creadores Universitarios (CONADU Histórica), se extenderá hasta el lunes 3 de noviembre. La federación ratificó este martes, mediante una convocatoria pública, el paro resuelto en su Congreso Extraordinario.\n\nEl gremio convocó a la comunidad universitaria a acompañar el plan de lucha ante lo que define como un deterioro de los salarios y un escenario de restricciones presupuestarias para el sistema.\n\nEn el mensaje difundido por la federación, la organización planteó que lleva más de un año sin cumplirse la normativa aprobada para financiar a las universidades nacionales. “Frente al ajuste salarial y el ahogamiento presupuestario, respondemos con organización y la fuerza de la docencia universitaria y preuniversitaria de todo el país”, señalaron en el comunicado.\n\nLa medida de fuerza tiene tres demandas centrales. La primera es el cumplimiento efectivo de la Ley de Financiamiento Universitario, cuya aplicación es objeto de reclamos gremiales y judiciales. La segunda consiste en el pago de la deuda salarial que, según los sindicatos, afecta a docentes universitarios y preuniversitarios. El tercer punto apunta a garantizar partidas para las actividades de enseñanza, investigación, extensión y gestión de las instituciones.\n\nCONADU Histórica cuestionó la situación de los haberes y advirtió sobre las consecuencias que el conflicto puede tener para la continuidad de las tareas académicas. “Sin salarios dignos no hay universidad pública”, expresó la federación en la convocatoria que acompañó con la consigna “Milei cumplí con la ley”.\n\nSegún datos difundidos en una reunión de rectores, desde diciembre de 2023 las universidades nacionales registraron una caída presupuestaria real del 41,6%, mientras que los salarios del personal universitario perdieron más de 30% de poder adquisitivo. Las cifras forman parte de los argumentos que los sectores docentes incorporaron a sus reclamos.\n\nLos paros se extenderán hasta mediados de noviembre\n\nLa Asociación Gremial de Docentes de la Universidad Tecnológica Nacional (FAGDUT) anunció cuatro jornadas de paro de 24 horas, sin asistencia a los lugares de trabajo. La primera será este miércoles 28 de octubre, en simultáneo con el inicio de la medida convocada por CONADU Histórica, mientras que las restantes se realizarán el 3, 12 y 16 de noviembre.\n\nLa huelga alcanzará a las 30 facultades regionales de la Universidad Tecnológica Nacional (UTN), el Instituto Nacional Superior del Profesorado Técnico y el Centro de Estudios Bariloche. FAGDUT indicó que durante las jornadas de protesta no habrá clases presenciales ni virtuales en esas instituciones.\n\nAl igual que FAGDUT, la Federación Argentina del Trabajador de las Universidades Nacionales (FATUN) realizará paros de 24 horas, sin asistencia a los lugares de trabajo, el 28 de octubre y el 3, 12 y 16 de noviembre. Las medidas alcanzarán al personal no docente de las universidades públicas.\n\nLa resolución de FATUN fue adoptada por su Consejo Directivo, con representantes de 54 organizaciones sindicales. La federación también prevé impulsar acciones ante el fuero Contencioso Administrativo Federal para que los montos de la garantía salarial se incorporen a los salarios básicos, según lo previsto en el convenio colectivo.\n\nEn la Universidad de Buenos Aires (UBA), la Asociación Gremial Docente (AGD-UBA) confirmó su adhesión al paro nacional docente y preuniversitario hasta el 3 de noviembre. En cambio, la Asociación del Personal de la UBA (APUBA), que representa al personal no docente, no integra el cronograma de medidas convocado por FATUN para esas fechas, según informó AGD-UBA.\n\nEl comienzo simultáneo de las medidas docentes y no docentes podría alterar el dictado de clases y otras actividades en las universidades públicas, que informarán su modalidad de funcionamiento durante los días de protesta.\n\nTras la finalización del paro el 3 de noviembre, CONADU Histórica reunirá a su Congreso Extraordinario el día 6 para definir los próximos pasos del plan de lucha. Las medidas de FAGDUT y FATUN continuarán con nuevas jornadas previstas para el 12 y el 16 de noviembre.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "Los docentes universitarios y preuniversitarios inician un paro nacional de una semana el miércoles, convocado por CONADU Histórica, que se extenderá hasta el lunes 3 de noviembre."
          },
          {
            "text": "CONADU Histórica ratificó el martes mediante una convocatoria pública el paro resuelto en su Congreso Extraordinario."
          },
          {
            "text": "CONADU Histórica sostiene que lleva más de un año sin cumplirse la Ley de Financiamiento Universitario."
          },
          {
            "text": "CONADU Histórica afirmó en su comunicado: \"Frente al ajuste salarial y el ahogamiento presupuestario, respondemos con organización y la fuerza de la docencia universitaria y preuniversitaria de todo el país\"."
          },
          {
            "text": "La aplicación de la Ley de Financiamiento Universitario es objeto de reclamos gremiales y judiciales."
          },
          {
            "text": "CONADU Histórica expresó \"Sin salarios dignos no hay universidad pública\" en la convocatoria acompañada con la consigna \"Milei cumplí con la ley\"."
          },
          {
            "text": "Desde diciembre de 2023 las universidades nacionales registraron una caída presupuestaria real del 41,6%."
          },
          {
            "text": "Los salarios del personal universitario perdieron más del 30% de poder adquisitivo desde diciembre de 2023."
          },
          {
            "text": "FAGDUT anunció cuatro jornadas de paro de 24 horas sin asistencia los días 28 de octubre y 3, 12 y 16 de noviembre."
          },
          {
            "text": "El paro de FAGDUT alcanzará a las 30 facultades regionales de la UTN, el Instituto Nacional Superior del Profesorado Técnico y el Centro de Estudios Bariloche, sin clases presenciales ni virtuales."
          },
          {
            "text": "FATUN realizará paros de 24 horas del personal no docente el 28 de octubre y el 3, 12 y 16 de noviembre."
          },
          {
            "text": "La resolución de FATUN fue adoptada por su Consejo Directivo con representantes de 54 organizaciones sindicales."
          },
          {
            "text": "FATUN prevé impulsar acciones ante el fuero Contencioso Administrativo Federal para que la garantía salarial se incorpore a los salarios básicos según el convenio colectivo."
          },
          {
            "text": "AGD-UBA confirmó su adhesión al paro nacional docente y preuniversitario hasta el 3 de noviembre."
          },
          {
            "text": "Según AGD-UBA, APUBA no integra el cronograma de medidas convocado por FATUN para esas fechas."
          },
          {
            "text": "CONADU Histórica reunirá a su Congreso Extraordinario el 6 de noviembre para definir los próximos pasos del plan de lucha."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Federación Nacional de Docentes, Investigadores y Creadores Universitarios (CONADU Histórica)",
            "mentions": 9
          },
          {
            "name": "Ley de Financiamiento Universitario",
            "mentions": 3
          },
          {
            "name": "Javier Milei",
            "mentions": 1
          },
          {
            "name": "Asociación Gremial de Docentes de la Universidad Tecnológica Nacional (FAGDUT)",
            "mentions": 5
          },
          {
            "name": "Universidad Tecnológica Nacional (UTN)",
            "mentions": 2
          },
          {
            "name": "Instituto Nacional Superior del Profesorado Técnico",
            "mentions": 1
          },
          {
            "name": "Centro de Estudios Bariloche",
            "mentions": 1
          },
          {
            "name": "Federación Argentina del Trabajador de las Universidades Nacionales (FATUN)",
            "mentions": 6
          },
          {
            "name": "Universidad de Buenos Aires (UBA)",
            "mentions": 2
          },
          {
            "name": "Asociación Gremial Docente de la UBA (AGD-UBA)",
            "mentions": 2
          },
          {
            "name": "Asociación del Personal de la UBA (APUBA)",
            "mentions": 1
          },
          {
            "name": "Fuero Contencioso Administrativo Federal",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Comienza la caída presupuestaria de las universidades"
          },
          {
            "title": "CONADU Histórica ratifica el paro nacional"
          },
          {
            "title": "Inicia la semana de paro docente universitario"
          },
          {
            "title": "Primera jornada de paro de FAGDUT en la UTN"
          },
          {
            "title": "Primer paro no docente de FATUN"
          },
          {
            "title": "Finaliza el paro de CONADU Histórica"
          },
          {
            "title": "Segunda jornada de paro de FAGDUT y FATUN"
          },
          {
            "title": "Congreso Extraordinario de CONADU Histórica"
          },
          {
            "title": "Tercera jornada de paro de FAGDUT y FATUN"
          },
          {
            "title": "Cuarta jornada de paro de FAGDUT y FATUN"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 15,
            "ok": 30,
            "nombre_parcial": 1,
            "fecha_inferida": 9
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "Los salarios del personal universitario perdieron más del 30% de poder adquisitivo desde diciembre de 2023."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Desde diciembre de 2023 las universidades nacionales registraron una caída presupuestaria real del 41,6%."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "FAGDUT anunció cuatro jornadas de paro de 24 horas sin asistencia los días 28 de octubre y 3, 12 y 16 de noviembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Los docentes universitarios y preuniversitarios inician un paro nacional de una semana el miércoles, convocado por CONADU Histórica, que se extenderá hasta el lunes 3 de noviembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El paro de FAGDUT alcanzará a las 30 facultades regionales de la UTN, el Instituto Nacional Superior del Profesorado Técnico y el Centro de Estudios Bariloche, sin clases presenciales ni virtuales."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "FATUN realizará paros de 24 horas del personal no docente el 28 de octubre y el 3, 12 y 16 de noviembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "La resolución de FATUN fue adoptada por su Consejo Directivo con representantes de 54 organizaciones sindicales."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "AGD-UBA confirmó su adhesión al paro nacional docente y preuniversitario hasta el 3 de noviembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "CONADU Histórica reunirá a su Congreso Extraordinario el 6 de noviembre para definir los próximos pasos del plan de lucha."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Ley de Financiamiento Universitario",
              "y": 2.0,
              "etiqueta": "Ley de Financiamiento Universitario",
              "descripcion": "Normativa cuyo cumplimiento efectivo es la principal demanda de los gremios.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 156,
                "fin": 191,
                "cita": "Ley de Financiamiento Universitario"
              },
              "alertas": []
            },
            {
              "x": "Universidad Tecnológica Nacional (UTN)",
              "y": 2.0,
              "etiqueta": "Universidad Tecnológica Nacional (UTN)",
              "descripcion": "Universidad cuyas 30 facultades regionales serán alcanzadas por la huelga de FAGDUT.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p9",
                "inicio": 2359,
                "fin": 2391,
                "cita": "Universidad Tecnológica Nacional"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Universidad Tecnológica Nacional»"
              ]
            },
            {
              "x": "Asociación Gremial Docente de la UBA (AGD-UBA)",
              "y": 2.0,
              "etiqueta": "Asociación Gremial Docente de la UBA (AGD-UBA)",
              "descripcion": "Gremio docente de la UBA que confirmó su adhesión al paro nacional.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p13",
                "inicio": 3683,
                "fin": 3690,
                "cita": "AGD-UBA"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «AGD-UBA»"
              ]
            },
            {
              "x": "Federación Nacional de Docentes, Investigadores y Creadores Universitarios (CONADU Histórica)",
              "y": 1.0,
              "etiqueta": "Federación Nacional de Docentes, Investigadores y Creadores Universitarios (CONADU Histórica)",
              "descripcion": "Federación docente que impulsa la semana de paro nacional hasta el 3 de noviembre.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 312,
                "fin": 343,
                "cita": "Federación Nacional de Docentes"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Federación Nacional de Docentes»"
              ]
            },
            {
              "x": "Javier Milei",
              "y": 1.0,
              "etiqueta": "Javier Milei",
              "descripcion": "Presidente interpelado por la consigna gremial \"Milei cumplí con la ley\".",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p6",
                "inicio": 1888,
                "fin": 1893,
                "cita": "Milei"
              },
              "alertas": [
                "De 'Javier Milei' en la nota solo figura 'milei'.",
                "las menciones se contaron con la forma que figura en la nota: «Milei»"
              ]
            },
            {
              "x": "Asociación Gremial de Docentes de la Universidad Tecnológica Nacional (FAGDUT)",
              "y": 1.0,
              "etiqueta": "Asociación Gremial de Docentes de la Universidad Tecnológica Nacional (FAGDUT)",
              "descripcion": "Gremio docente de la UTN que anunció cuatro jornadas de paro de 24 horas.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p9",
                "inicio": 2322,
                "fin": 2391,
                "cita": "Asociación Gremial de Docentes de la Universidad Tecnológica Nacional"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Asociación Gremial de Docentes de la Universidad Tecnológica Nacional»"
              ]
            },
            {
              "x": "Instituto Nacional Superior del Profesorado Técnico",
              "y": 1.0,
              "etiqueta": "Instituto Nacional Superior del Profesorado Técnico",
              "descripcion": "Institución alcanzada por la huelga de FAGDUT.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p10",
                "inicio": 2776,
                "fin": 2827,
                "cita": "Instituto Nacional Superior del Profesorado Técnico"
              },
              "alertas": []
            },
            {
              "x": "Centro de Estudios Bariloche",
              "y": 1.0,
              "etiqueta": "Centro de Estudios Bariloche",
              "descripcion": "Institución alcanzada por la huelga de FAGDUT.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p10",
                "inicio": 2833,
                "fin": 2861,
                "cita": "Centro de Estudios Bariloche"
              },
              "alertas": []
            },
            {
              "x": "Federación Argentina del Trabajador de las Universidades Nacionales (FATUN)",
              "y": 1.0,
              "etiqueta": "Federación Argentina del Trabajador de las Universidades Nacionales (FATUN)",
              "descripcion": "Federación de no docentes que realizará paros de 24 horas en octubre y noviembre.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p11",
                "inicio": 3004,
                "fin": 3071,
                "cita": "Federación Argentina del Trabajador de las Universidades Nacionales"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Federación Argentina del Trabajador de las Universidades Nacionales»"
              ]
            },
            {
              "x": "Fuero Contencioso Administrativo Federal",
              "y": 1.0,
              "etiqueta": "Fuero Contencioso Administrativo Federal",
              "descripcion": "Fuero judicial ante el cual FATUN prevé impulsar acciones por la garantía salarial.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p12",
                "inicio": 3443,
                "fin": 3483,
                "cita": "fuero Contencioso Administrativo Federal"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [
        {
          "id": "salarios_por_sector",
          "visual": "lineas",
          "titulo": "Salarios registrados en términos reales entre noviembre de 2023 y julio de 2026: privado −3,4%, público −15,8% y total −7,9%",
          "unidad": "poder adquisitivo del salario, base 100 = noviembre de 2023",
          "referencia": 100.0,
          "series": [
            {
              "clave": "privado",
              "nombre": "Índice de salarios, sector privado registrado",
              "puntos": [
                {
                  "x": "2023-11",
                  "y": 100.0
                },
                {
                  "x": "2023-12",
                  "y": 88.5007994368515
                },
                {
                  "x": "2024-01",
                  "y": 88.04002807109964
                },
                {
                  "x": "2024-02",
                  "y": 88.68371755471472
                },
                {
                  "x": "2024-03",
                  "y": 87.86668487414445
                },
                {
                  "x": "2024-04",
                  "y": 90.39635002996998
                },
                {
                  "x": "2024-05",
                  "y": 93.43408005423431
                },
                {
                  "x": "2024-06",
                  "y": 95.32326933446316
                },
                {
                  "x": "2024-07",
                  "y": 97.37758516489482
                },
                {
                  "x": "2024-08",
                  "y": 98.18666785464319
                },
                {
                  "x": "2024-09",
                  "y": 98.4688407853591
                },
                {
                  "x": "2024-10",
                  "y": 99.67647914167388
                },
                {
                  "x": "2024-11",
                  "y": 100.50692590910843
                },
                {
                  "x": "2024-12",
                  "y": 100.5938164123558
                },
                {
                  "x": "2025-01",
                  "y": 100.68182914458362
                },
                {
                  "x": "2025-02",
                  "y": 100.59014818495243
                },
                {
                  "x": "2025-03",
                  "y": 99.07096271944239
                },
                {
                  "x": "2025-04",
                  "y": 98.82977666177065
                },
                {
                  "x": "2025-05",
                  "y": 99.29225245488
                },
                {
                  "x": "2025-06",
                  "y": 99.40373267615655
                },
                {
                  "x": "2025-07",
                  "y": 99.66773031465414
                },
                {
                  "x": "2025-08",
                  "y": 100.027435141982
                },
                {
                  "x": "2025-09",
                  "y": 99.33863414725917
                },
                {
                  "x": "2025-10",
                  "y": 99.0838184688812
                },
                {
                  "x": "2025-11",
                  "y": 98.75066117561698
                },
                {
                  "x": "2025-12",
                  "y": 98.44832842917721
                },
                {
                  "x": "2026-01",
                  "y": 97.73121375752459
                },
                {
                  "x": "2026-02",
                  "y": 96.45969037461668
                },
                {
                  "x": "2026-03",
                  "y": 95.22416204317786
                },
                {
                  "x": "2026-04",
                  "y": 96.54060498564914
                },
                {
                  "x": "2026-05",
                  "y": 96.39898402768345
                },
                {
                  "x": "2026-06",
                  "y": 96.44537086642991
                },
                {
                  "x": "2026-07",
                  "y": 96.57568100186332
                }
              ],
              "cambio_pct": -3.4243189981366884
            },
            {
              "clave": "publico",
              "nombre": "Índice de salarios, sector público registrado",
              "puntos": [
                {
                  "x": "2023-11",
                  "y": 100.0
                },
                {
                  "x": "2023-12",
                  "y": 84.0836016597014
                },
                {
                  "x": "2024-01",
                  "y": 78.13557164618318
                },
                {
                  "x": "2024-02",
                  "y": 79.42346679713273
                },
                {
                  "x": "2024-03",
                  "y": 79.43401599941441
                },
                {
                  "x": "2024-04",
                  "y": 78.473536710536
                },
                {
                  "x": "2024-05",
                  "y": 81.54635973947047
                },
                {
                  "x": "2024-06",
                  "y": 81.05250814085518
                },
                {
                  "x": "2024-07",
                  "y": 83.14723040553886
                },
                {
                  "x": "2024-08",
                  "y": 83.53117391666329
                },
                {
                  "x": "2024-09",
                  "y": 83.8948645923336
                },
                {
                  "x": "2024-10",
                  "y": 85.24078212914048
                },
                {
                  "x": "2024-11",
                  "y": 85.48781414953143
                },
                {
                  "x": "2024-12",
                  "y": 84.66860325469457
                },
                {
                  "x": "2025-01",
                  "y": 83.60339201190159
                },
                {
                  "x": "2025-02",
                  "y": 85.28975936153314
                },
                {
                  "x": "2025-03",
                  "y": 84.91887118285834
                },
                {
                  "x": "2025-04",
                  "y": 84.49600769315757
                },
                {
                  "x": "2025-05",
                  "y": 85.97333992840011
                },
                {
                  "x": "2025-06",
                  "y": 85.68894303789291
                },
                {
                  "x": "2025-07",
                  "y": 86.00754935673454
                },
                {
                  "x": "2025-08",
                  "y": 86.78141182335021
                },
                {
                  "x": "2025-09",
                  "y": 85.98504387272952
                },
                {
                  "x": "2025-10",
                  "y": 85.60473276490305
                },
                {
                  "x": "2025-11",
                  "y": 84.49967911847796
                },
                {
                  "x": "2025-12",
                  "y": 82.97141157809132
                },
                {
                  "x": "2026-01",
                  "y": 82.10735447183505
                },
                {
                  "x": "2026-02",
                  "y": 81.65496410345327
                },
                {
                  "x": "2026-03",
                  "y": 82.97014305390769
                },
                {
                  "x": "2026-04",
                  "y": 82.76614428784211
                },
                {
                  "x": "2026-05",
                  "y": 82.2407845987525
                },
                {
                  "x": "2026-06",
                  "y": 83.48053609799958
                },
                {
                  "x": "2026-07",
                  "y": 84.18223124657169
                }
              ],
              "cambio_pct": -15.817768753428307
            },
            {
              "clave": "registrado",
              "nombre": "Índice de salarios, total registrado",
              "puntos": [
                {
                  "x": "2023-11",
                  "y": 100.0
                },
                {
                  "x": "2023-12",
                  "y": 86.91070280199746
                },
                {
                  "x": "2024-01",
                  "y": 84.47467932613058
                },
                {
                  "x": "2024-02",
                  "y": 85.35000178552296
                },
                {
                  "x": "2024-03",
                  "y": 84.83087195998698
                },
                {
                  "x": "2024-04",
                  "y": 86.10415105280157
                },
                {
                  "x": "2024-05",
                  "y": 89.15463306366856
                },
                {
                  "x": "2024-06",
                  "y": 90.18611519516527
                },
                {
                  "x": "2024-07",
                  "y": 92.2548212090304
                },
                {
                  "x": "2024-08",
                  "y": 92.9108617367292
                },
                {
                  "x": "2024-09",
                  "y": 93.22237376992271
                },
                {
                  "x": "2024-10",
                  "y": 94.47981352658215
                },
                {
                  "x": "2024-11",
                  "y": 95.10027838428886
                },
                {
                  "x": "2024-12",
                  "y": 94.86087995751666
                },
                {
                  "x": "2025-01",
                  "y": 94.53376766542175
                },
                {
                  "x": "2025-02",
                  "y": 95.08210082904158
                },
                {
                  "x": "2025-03",
                  "y": 93.97638350506963
                },
                {
                  "x": "2025-04",
                  "y": 93.66972810536961
                },
                {
                  "x": "2025-05",
                  "y": 94.49757880477385
                },
                {
                  "x": "2025-06",
                  "y": 94.46658928849766
                },
                {
                  "x": "2025-07",
                  "y": 94.75015301166415
                },
                {
                  "x": "2025-08",
                  "y": 95.25903093004018
                },
                {
                  "x": "2025-09",
                  "y": 94.53142632715775
                },
                {
                  "x": "2025-10",
                  "y": 94.23149240988728
                },
                {
                  "x": "2025-11",
                  "y": 93.62038395171565
                },
                {
                  "x": "2025-12",
                  "y": 92.87673416491077
                },
                {
                  "x": "2026-01",
                  "y": 92.1067505014642
                },
                {
                  "x": "2026-02",
                  "y": 91.13011081045344
                },
                {
                  "x": "2026-03",
                  "y": 90.81285307197987
                },
                {
                  "x": "2026-04",
                  "y": 91.58186888232743
                },
                {
                  "x": "2026-05",
                  "y": 91.30269063699589
                },
                {
                  "x": "2026-06",
                  "y": 91.77880608379819
                },
                {
                  "x": "2026-07",
                  "y": 92.11413447873818
                }
              ],
              "cambio_pct": -7.885865521261826
            }
          ],
          "barras": [],
          "fuentes": [
            {
              "nombre": "Índice de salarios, sector privado registrado",
              "institucion": "INDEC",
              "id": "149.1_SOR_PRIADO_OCTU_0_25",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=149.1_SOR_PRIADO_OCTU_0_25&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-07",
              "rezago_meses": 3,
              "origen_datos": "guardado"
            },
            {
              "nombre": "Índice de salarios, sector público registrado",
              "institucion": "INDEC",
              "id": "149.1_SOR_PUBICO_OCTU_0_14",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=149.1_SOR_PUBICO_OCTU_0_14&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-07",
              "rezago_meses": 3,
              "origen_datos": "guardado"
            },
            {
              "nombre": "Índice de salarios, total registrado",
              "institucion": "INDEC",
              "id": "149.1_TL_REGIADO_OCTU_0_16",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=149.1_TL_REGIADO_OCTU_0_16&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-07",
              "rezago_meses": 3,
              "origen_datos": "guardado"
            },
            {
              "nombre": "IPC nacional, nivel general",
              "institucion": "INDEC",
              "id": "148.3_INIVELNAL_DICI_M_26",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNAL_DICI_M_26&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-08",
              "rezago_meses": 2,
              "origen_datos": "guardado"
            }
          ],
          "como_leerlo": "Cada línea es el índice de salarios dividido por el IPC, con el valor de noviembre de 2023 igual a 100. Por debajo de 100 compra menos que en ese mes.",
          "advertencias": [
            "El sector público incluye a docentes y universitarios, pero no los separa.",
            "Es un índice y no un monto en pesos."
          ],
          "motivos": [
            "salarios (×8)",
            "docentes (×11)",
            "universidades (×21)",
            "paro (×5)"
          ]
        },
        {
          "id": "universidades_constantes",
          "visual": "barras",
          "titulo": "Transferencias a universidades, en pesos de agosto de 2026: 3,86 billones en ene–ago 2026 contra 5,06 en ene–ago 2023 (−23,8%)",
          "unidad": "billones de pesos de agosto de 2026",
          "referencia": null,
          "series": [],
          "barras": [
            {
              "etiqueta": "ene–ago 2023",
              "valor": 5.064065643070648,
              "destacada": false
            },
            {
              "etiqueta": "ene–ago 2024",
              "valor": 3.3662318362911927,
              "destacada": false
            },
            {
              "etiqueta": "ene–ago 2025",
              "valor": 3.511510142274556,
              "destacada": false
            },
            {
              "etiqueta": "ene–ago 2026",
              "valor": 3.856836616236612,
              "destacada": true
            }
          ],
          "fuentes": [
            {
              "nombre": "Transferencias corrientes a universidades nacionales",
              "institucion": "Secretaría de Hacienda",
              "id": "379.9_GTOS_CORR_017_7_0_M_38_20",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=379.9_GTOS_CORR_017_7_0_M_38_20&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-08",
              "rezago_meses": 2,
              "origen_datos": "guardado"
            },
            {
              "nombre": "IPC nacional, nivel general",
              "institucion": "INDEC",
              "id": "148.3_INIVELNAL_DICI_M_26",
              "enlace": "https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNAL_DICI_M_26&limit=12&sort=desc&format=json",
              "ultimo_dato": "2026-08",
              "rezago_meses": 2,
              "origen_datos": "guardado"
            }
          ],
          "como_leerlo": "Cada barra suma lo transferido de enero hasta el mes indicado de cada año, llevado a pesos de agosto de 2026 con el IPC para poder compararlos.",
          "advertencias": [
            "Es solo la transferencia corriente a universidades, no todo el presupuesto universitario ni sus salarios.",
            "Mes a mes es muy irregular, por eso se suman períodos iguales de cada año.",
            "El nivel de 2023 puede reflejar cambios de imputación entre años."
          ],
          "motivos": [
            "universidades (×21)",
            "paro (×5)",
            "financiamiento (×2)"
          ]
        }
      ],
      "avisos": [
        "línea de tiempo omitida: 1 evento(s) sostenidos por la nota, hacen falta 3"
      ]
    }
  },
  "15": {
    "titulo": "Distinguieron a dos proyectos del CONICET: un software para epilepsia y una molécula para lesiones medulares",
    "cuerpo": "El desarrollo de un software para planificar la estimulación cerebral en pacientes con epilepsia resistente a fármacos obtuvo el primer puesto de la sexta edición del Premio Merck-CONICET de Innovación en Ciencias de la Salud, entregado en Buenos Aires.\n\nLa distinción recayó en el proyecto NViES, encabezado por el investigador Mariano Fernández Corazza. La convocatoria reunió 84 iniciativas científicas y tecnológicas vinculadas con la salud de distintos puntos de Argentina.\n\nDiez equipos llegaron a la instancia final y expusieron sus propuestas ante un gran jurado integrado, en representación del Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET), por Ricardo Allegri, investigador del Instituto de Neurociencias (INEU, CONICET-FLENI), y Marcela Michaut, investigadora del Instituto de Histología y Embriología de Mendoza “Dr. Mario H. Burgos” (IHEM, CONICET-UNCU).\n\nPor Merck Argentina, empresa alemana líder en ciencia y tecnología, participaron Natalia García, directora médica de la compañía en Argentina, y Mauricio Valiere, neurólogo y neurorradiólogo coordinador de la Unidad de Neurofibromatosis del Hospital Italiano de Buenos Aires.\n\nEl presidente del CONICET, Daniel Salamone, destacó el alcance de la convocatoria. “El premio pone en valor el talento científico argentino y fortalece la articulación público-privada para transformar el conocimiento en soluciones concretas”, afirmó durante la ceremonia.\n\nLa embajadora de Alemania en Argentina, Catalina Cullas, señaló que la iniciativa se consolidó como una actividad anual de la cooperación entre ambos países. “Largo plazo y continuidad son dos de las principales características de nuestra relación bilateral, también en el sector científico”, sostuvo.\n\nPor su parte, la secretaria de Innovación, Ciencia y Tecnología, Adriana Baravalle, afirmó que el objetivo es que “la investigación básica, que es clave, también se traduzca en resultados concretos que mejoren la salud de las personas”.\n\nUn software busca mejorar la planificación de cirugías por epilepsia\n\nEl proyecto ganador, denominado NeuroVisualizer for Electrical Stimulation (NViES), está orientado a la evaluación prequirúrgica de personas con epilepsia farmacorresistente. Fernández Corazza es investigador del Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET) en el Instituto de Investigaciones en Electrónica, Control y Procesamiento de Señales (LEICI, CONICET-UNLP).\n\nLa herramienta utiliza imágenes clínicas para elaborar un modelo tridimensional del cerebro y simular la activación de regiones cerebrales ante distintas combinaciones de electrodos. El objetivo es aportar información para definir qué zonas deben estudiarse durante la estimulación eléctrica intracraneal, una etapa previa a determinadas cirugías contra la epilepsia.\n\nSegún la presentación del equipo, el sistema podría ayudar a ajustar la planificación de esos estudios y, eventualmente, reducir los tiempos de internación.\n\n“Este impulso brindado al trabajo científico nos ayuda muchísimo y nos permite seguir avanzando”, afirmó Fernández Corazza. El investigador señaló que el equipo trabaja en una plataforma informática destinada a mejorar el abordaje de pacientes con epilepsia.\n\nUna molécula sintética para investigar la reparación de lesiones medulares\n\nEl segundo lugar fue para Héctor Ramiro Quintá, investigador del CONICET en el Hospital Alemán, por un proyecto enfocado en lesiones medulares traumáticas graves.\n\nSu equipo propone desarrollar un agonista sintético del receptor DCC, una molécula capaz de reproducir una señal asociada a la reparación de conexiones nerviosas. La investigación parte del estudio de la proteína Netrina-1 y busca evaluar, en modelos experimentales, si esa señal puede contribuir a la regeneración neuronal.\n\nEl trabajo se encuentra en una etapa de investigación y desarrollo. Si las pruebas arrojan resultados favorables, podría aportar una base para futuras estrategias terapéuticas frente a lesiones medulares, un campo en el que las alternativas de recuperación son limitadas.\n\n“Este subsidio representa una oportunidad importante, porque me va a permitir avanzar con mi proyecto”, sostuvo Quintá, quien agradeció el respaldo para continuar la investigación.\n\nEl certamen incorporará un foro para equipos de distintas ediciones\n\nDurante el acto, realizado en el Centro Cultural de la Ciencia de Buenos Aires, el CONICET y Merck anunciaron la creación de un foro para quienes participaron en las distintas ediciones del certamen. La propuesta prevé reunir a ganadores, finalistas y otros postulantes para intercambiar experiencias y acceder a instancias de capacitación.\n\nEl director general del Grupo Merck en Argentina, Marcelo Ponte, sostuvo que “impulsar el descubrimiento también significa generar espacios para que ese conocimiento pueda crecer y desarrollarse”. Añadió que la innovación requiere colaboración entre distintos actores.\n\nDesde su lanzamiento en 2021, el Premio Merck-CONICET, que cuenta con el apoyo de la Embajada de Alemania en Argentina, reunió cerca de 400 postulaciones de distintas regiones del país. La iniciativa propone vincular la investigación científica con el desarrollo de herramientas y tratamientos para el ámbito de la salud.\n\nEntre los temas previstos figuran el financiamiento, la propiedad intelectual, la regulación, el desarrollo de prototipos y la transferencia tecnológica. La iniciativa contará con la articulación de áreas del CONICET y el acompañamiento de la Embajada de Alemania en Argentina.\n\nSegún indicaron desde la organización, el proyecto de NViES recibió $13.000.000 y la iniciativa sobre reparación de lesiones medulares obtuvo $9.100.000. La sexta edición del premio cerró con dos desarrollos en etapas diferentes, vinculados con la neurología, que continuarán sus procesos de investigación con los fondos adjudicados.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "El proyecto NViES, un software para planificar la estimulación cerebral en pacientes con epilepsia resistente a fármacos, obtuvo el primer puesto de la sexta edición del Premio Merck-CONICET de Innovación en Ciencias de la Salud, entregado en Buenos Aires."
          },
          {
            "text": "El proyecto NViES está encabezado por el investigador Mariano Fernández Corazza."
          },
          {
            "text": "La sexta edición del Premio Merck-CONICET reunió 84 iniciativas científicas y tecnológicas vinculadas con la salud de distintos puntos de Argentina."
          },
          {
            "text": "Diez equipos llegaron a la instancia final de la sexta edición del Premio Merck-CONICET."
          },
          {
            "text": "El jurado por el CONICET estuvo integrado por Ricardo Allegri (INEU, CONICET-FLENI) y Marcela Michaut (IHEM, CONICET-UNCU)."
          },
          {
            "text": "Por Merck Argentina integraron el jurado Natalia García, directora médica de la compañía en Argentina, y Mauricio Valiere, coordinador de la Unidad de Neurofibromatosis del Hospital Italiano de Buenos Aires."
          },
          {
            "text": "El presidente del CONICET, Daniel Salamone, afirmó durante la ceremonia: \"El premio pone en valor el talento científico argentino y fortalece la articulación público-privada para transformar el conocimiento en soluciones concretas\"."
          },
          {
            "text": "La embajadora de Alemania en Argentina, Catalina Cullas, sostuvo: \"Largo plazo y continuidad son dos de las principales características de nuestra relación bilateral, también en el sector científico\"."
          },
          {
            "text": "La secretaria de Innovación, Ciencia y Tecnología, Adriana Baravalle, afirmó que el objetivo es que \"la investigación básica, que es clave, también se traduzca en resultados concretos que mejoren la salud de las personas\"."
          },
          {
            "text": "Mariano Fernández Corazza es investigador del CONICET en el Instituto LEICI (CONICET-UNLP)."
          },
          {
            "text": "Según la presentación del equipo, el sistema NViES podría ayudar a ajustar la planificación de estudios de estimulación eléctrica intracraneal y reducir los tiempos de internación."
          },
          {
            "text": "Fernández Corazza afirmó: \"Este impulso brindado al trabajo científico nos ayuda muchísimo y nos permite seguir avanzando\"."
          },
          {
            "text": "El segundo lugar fue para Héctor Ramiro Quintá, investigador del CONICET en el Hospital Alemán, por un proyecto sobre lesiones medulares traumáticas graves."
          },
          {
            "text": "El equipo de Quintá propone desarrollar un agonista sintético del receptor DCC a partir del estudio de la proteína Netrina-1."
          },
          {
            "text": "Quintá sostuvo: \"Este subsidio representa una oportunidad importante, porque me va a permitir avanzar con mi proyecto\"."
          },
          {
            "text": "El acto se realizó en el Centro Cultural de la Ciencia de Buenos Aires, donde CONICET y Merck anunciaron la creación de un foro para participantes de las distintas ediciones del certamen."
          },
          {
            "text": "El director general del Grupo Merck en Argentina, Marcelo Ponte, sostuvo que \"impulsar el descubrimiento también significa generar espacios para que ese conocimiento pueda crecer y desarrollarse\"."
          },
          {
            "text": "El Premio Merck-CONICET fue lanzado en 2021."
          },
          {
            "text": "Desde 2021 el Premio Merck-CONICET reunió cerca de 400 postulaciones de distintas regiones del país."
          },
          {
            "text": "El proyecto NViES recibió $13.000.000 como premio."
          },
          {
            "text": "El proyecto sobre reparación de lesiones medulares obtuvo $9.100.000 como premio."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET)",
            "mentions": 14
          },
          {
            "name": "Premio Merck-CONICET de Innovación en Ciencias de la Salud",
            "mentions": 6
          },
          {
            "name": "Buenos Aires",
            "mentions": 2
          },
          {
            "name": "NeuroVisualizer for Electrical Stimulation (NViES)",
            "mentions": 4
          },
          {
            "name": "Mariano Fernández Corazza",
            "mentions": 5
          },
          {
            "name": "Argentina",
            "mentions": 5
          },
          {
            "name": "Ricardo Allegri",
            "mentions": 1
          },
          {
            "name": "Instituto de Neurociencias (INEU, CONICET-FLENI)",
            "mentions": 1
          },
          {
            "name": "Marcela Michaut",
            "mentions": 1
          },
          {
            "name": "Instituto de Histología y Embriología de Mendoza “Dr. Mario H. Burgos” (IHEM, CONICET-UNCU)",
            "mentions": 1
          },
          {
            "name": "Merck Argentina",
            "mentions": 6
          },
          {
            "name": "Natalia García",
            "mentions": 1
          },
          {
            "name": "Mauricio Valiere",
            "mentions": 1
          },
          {
            "name": "Hospital Italiano de Buenos Aires",
            "mentions": 1
          },
          {
            "name": "Daniel Salamone",
            "mentions": 1
          },
          {
            "name": "Catalina Cullas",
            "mentions": 1
          },
          {
            "name": "Embajada de Alemania en Argentina",
            "mentions": 2
          },
          {
            "name": "Alemania",
            "mentions": 2
          },
          {
            "name": "Adriana Baravalle",
            "mentions": 1
          },
          {
            "name": "Secretaría de Innovación, Ciencia y Tecnología",
            "mentions": 1
          },
          {
            "name": "Instituto de Investigaciones en Electrónica, Control y Procesamiento de Señales (LEICI, CONICET-UNLP)",
            "mentions": 1
          },
          {
            "name": "Héctor Ramiro Quintá",
            "mentions": 3
          },
          {
            "name": "Hospital Alemán",
            "mentions": 1
          },
          {
            "name": "Centro Cultural de la Ciencia",
            "mentions": 1
          },
          {
            "name": "Marcelo Ponte",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Lanzamiento del Premio Merck-CONICET"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 19,
            "ok": 59,
            "evidencia_no_encontrada": 2
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "La sexta edición del Premio Merck-CONICET reunió 84 iniciativas científicas y tecnológicas vinculadas con la salud de distintos puntos de Argentina."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El equipo de Quintá propone desarrollar un agonista sintético del receptor DCC a partir del estudio de la proteína Netrina-1."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Desde 2021 el Premio Merck-CONICET reunió cerca de 400 postulaciones de distintas regiones del país."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El proyecto NViES recibió $13.000.000 como premio."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El proyecto sobre reparación de lesiones medulares obtuvo $9.100.000 como premio."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Argentina",
              "y": 7.0,
              "etiqueta": "Argentina",
              "descripcion": "País de origen de las iniciativas postuladas al premio.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 468,
                "fin": 477,
                "cita": "Argentina"
              },
              "alertas": []
            },
            {
              "x": "Buenos Aires",
              "y": 3.0,
              "etiqueta": "Buenos Aires",
              "descripcion": "Ciudad donde se entregó el premio.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 240,
                "fin": 252,
                "cita": "Buenos Aires"
              },
              "alertas": []
            },
            {
              "x": "Alemania",
              "y": 3.0,
              "etiqueta": "Alemania",
              "descripcion": "País cooperante con Argentina en el premio.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p6",
                "inicio": 1460,
                "fin": 1468,
                "cita": "Alemania"
              },
              "alertas": []
            },
            {
              "x": "Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET)",
              "y": 2.0,
              "etiqueta": "Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET)",
              "descripcion": "Organismo científico argentino coorganizador del Premio Merck-CONICET y al que pertenecen los investigadores premiados.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 604,
                "fin": 662,
                "cita": "Consejo Nacional de Investigaciones Científicas y Técnicas"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Consejo Nacional de Investigaciones Científicas y Técnicas»"
              ]
            },
            {
              "x": "Embajada de Alemania en Argentina",
              "y": 2.0,
              "etiqueta": "Embajada de Alemania en Argentina",
              "descripcion": "Representación diplomática que apoya el premio y acompañará el nuevo foro.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p21",
                "inicio": 5020,
                "fin": 5053,
                "cita": "Embajada de Alemania en Argentina"
              },
              "alertas": []
            },
            {
              "x": "Premio Merck-CONICET de Innovación en Ciencias de la Salud",
              "y": 1.0,
              "etiqueta": "Premio Merck-CONICET de Innovación en Ciencias de la Salud",
              "descripcion": "Certamen cuya sexta edición premió proyectos de software para epilepsia y una molécula para lesiones medulares.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 167,
                "fin": 225,
                "cita": "Premio Merck-CONICET de Innovación en Ciencias de la Salud"
              },
              "alertas": []
            },
            {
              "x": "Mariano Fernández Corazza",
              "y": 1.0,
              "etiqueta": "Mariano Fernández Corazza",
              "descripcion": "Investigador del CONICET en el LEICI que encabeza el proyecto ganador NViES.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 329,
                "fin": 354,
                "cita": "Mariano Fernández Corazza"
              },
              "alertas": []
            },
            {
              "x": "Ricardo Allegri",
              "y": 1.0,
              "etiqueta": "Ricardo Allegri",
              "descripcion": "Investigador del INEU que integró el jurado en representación del CONICET.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 678,
                "fin": 693,
                "cita": "Ricardo Allegri"
              },
              "alertas": []
            },
            {
              "x": "Instituto de Neurociencias (INEU, CONICET-FLENI)",
              "y": 1.0,
              "etiqueta": "Instituto de Neurociencias (INEU, CONICET-FLENI)",
              "descripcion": "Instituto al que pertenece Ricardo Allegri.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 712,
                "fin": 738,
                "cita": "Instituto de Neurociencias"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Instituto de Neurociencias»"
              ]
            },
            {
              "x": "Marcela Michaut",
              "y": 1.0,
              "etiqueta": "Marcela Michaut",
              "descripcion": "Investigadora del IHEM que integró el jurado en representación del CONICET.",
              "grupo": "person",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 764,
                "fin": 779,
                "cita": "Marcela Michaut"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": [
        "línea de tiempo omitida: 1 evento(s) sostenidos por la nota, hacen falta 3"
      ]
    }
  },
  "16": {
    "titulo": "Argentinos alcanzó a Boca en la Tabla Anual y complicó a River: todos los goles de la fecha 14",
    "cuerpo": "Se completó la fecha 14 del Torneo Clausura y arden las tablas con diversas definiciones: quiénes estarían llegando a los octavos de final del certamen, la lucha por la clasificación a las copas internacionales y por la permanencia ya que queda definir un lugar.\n\nLa actividad comenzó el viernes con la victoria de Gimnasia y Esgrima La Plata por 2-0 ante Sarmiento de Junín. El resultado le permitió al Lobo acercarse a los puestos de copas internacionales y consolidarse dentro de la zona de clasificación a los playoffs. Platense, a su vez, derrotó 2-1 a Independiente Rivadavia en Mendoza y puso fin a una serie de siete encuentros sin ganar. La jornada también incluyó el triunfo de Atlético Tucumán por 1-0 frente a Tigre en Victoria. La caída provocó la salida de Diego Dabove del conjunto local.\n\nEl sábado, Banfield y Lanús igualaron 1-1 en el Clásico del Sur, un resultado que dejó al Granate en el quinto lugar de la Zona A y en posiciones de Copa Sudamericana. En Córdoba, Defensa y Justicia venció 2-1 a Talleres y se ubicó cuarto en el grupo que lidera Instituto. San Lorenzo y Newell’s empataron sin goles en el Nuevo Gasómetro, mientras que Rosario Central superó 2-0 a Huracán en Rosario.\n\nEl domingo, Aldosivi derrotó 1-0 a Belgrano y sostuvo sus opciones de permanencia. Aunque deberá ganar sus próximos compromisos frente a Racing y River Plate, al que recibirá en Mar del Plata. El día continuó con el triunfo de Boca Juniors ante Independiente por 1-0 en Avellaneda, resultado que lo clasificó a los playoffs. Además, el Xeneize se mantiene como líder de la Tabla Anual y sigue dependiendo de sí mismo para ganar el título.\n\nEn tanto que River Plate le ganó 1-0 a Racing Club y se afianzó en el cuarto lugar de la Zona B, además de escalar al sexto puesto en la general y a tres puntos de la zona de Copa Libertadores.\n\nPrecisamente ese puesto al que aspira el Millonario está en poder de Vélez Sarsfield, que goleó 5-0 a Central Córdoba en Santiago del Estero y se subió al podio de la tabla anual. Además, el Fortín es escolta en el Grupo A con 27 unidades, a solo dos puntos del líder Instituto. En tanto, Barracas Central se impuso 2-1 ante el descendido Estudiantes de Río Cuarto y sueña con la Copa Sudamericana. Por lo pronto está en zona de playoffs del Clausura.\n\nEste lunes, Unión de Santa Fe le ganó 3-1 a Estudiantes de La Plata que está afuera de la zona de clasificación a copas internacionales a falta de dos fechas para terminar la fase regular. El Pincha quedó a 3 puntos del último que hoy está ingresando a la Copa Sudamericana, Lanús.\n\nEn el segundo encuentro de la jornada, Instituto de Córdoba venció 1-0 a Deportivo Riestra, se afirmó como líder en su zona y se clasificó a la Copa Sudamericana e incluso tiene chances de llegar a la Libertadores.\n\nEste martes se terminó la jornada con el triunfo de Argentinos Juniors 1-0 ante Independiente Rivadavia, en La Paternal. De este modo, el Bicho alcanzó a Boca Juniors en la cima de la Tabla Anual, aunque posee peor diferencia de gol. Asimismo, aseguró el pase a los playoffs al alcanzar también en la punta de la Zona B a Rosario Central.\n\nVale recordar que Belgrano de Córdoba ya aseguró su presencia en el máximo torneo de clubes del continente como campeón del Torneo Apertura. A ese cupo se sumarán los tres mejores de la Tabla Anual, el ganador de la Copa Argentina y el campeón del Clausura. Boca Juniors también podría acceder si vence a Atlético Mineiro en la final de la Copa Sudamericana, mientras que Estudiantes de La Plata tendrá la misma posibilidad si se consagra ante Palmeiras, una combinación que podría elevar a ocho la cantidad de equipos argentinos en el torneo de Conmebol.\n\nBoca Juniors encabeza la Tabla Anual con 57 puntos por encima de Argentinos Juniors, que también tiene 57 unidades, y Rosario Central, que aparece detrás con 56. En los lugares de Copa Sudamericana se ubican Vélez con 55 unidades, Instituto (53), Independiente Rivadavia (53), River Plate (52), Gimnasia y Esgrima La Plata (51), y Lanús (48). En la lucha por no descender, Estudiantes de Río Cuarto perdió la categoría tras caer ante River Plate en el Monumental, mientras que Aldosivi y Deportivo Riestra definirán al otro equipo que bajará a la Primera Nacional.\n\n*Las primeras dos tablas son de los Grupos A y B del Torneo Clausura\n\n*La tercera es la Tabla Anual: los tres primeros se clasificarán a la Libertadores y del cuarto al noveno a la Sudamericana, sacando a Belgrano que por ser campeón del Apertura jugará la Libertadores\n\nAGENDA DE LA FECHA 14 - TORNEO CLAUSURA\n\n- Viernes 23 de octubre\n\nGimnasia y Esgrima La Plata 2-0 Sarmiento\n\nGimnasia de Mendoza 1-2 Platense\n\nTigre 0-1 Atlético Tucumán\n\n- Sábado 24 de octubre\n\nBanfield 1-1 Lanús\n\nTalleres 1-2 Defensa y Justicia\n\nSan Lorenzo 0-0 Newell’s\n\nRosario Central 2-0 Huracán\n\n- Domingo 25 de octubre\n\nAldosivi 1-0 Belgrano\n\nIndependiente 0-1 Boca Juniors\n\nRiver Plate 1-0 Racing\n\nCentral Córdoba 0-5 Vélez\n\nBarracas Central 2-1 Estudiantes de Río Cuarto\n\n- Lunes 26 de octubre\n\nUNIÓN 3-1 Estudiantes de La Plata\n\nARGENTINOS 1-0 INDEPENDIENTE RIVADAVIA\n\nProgramación y árbitros de la fecha 15 de la Liga Profesional\n\nViernes 30 de octubre\n\n19.00 Estudiantes (Río Cuarto) – Gimnasia (Zona B)\n\nÁrbitro: Juan Pablo Loustau\n\nAsistente 1: Diego Bonfa\n\nAsistente 2: Federico Pomi\n\nCuarto árbitro: Lautaro Castagnola\n\nVAR: Nicolás LamolinaAVAR: Lucas Pardo\n\n19.00 Huracán – Tigre (Zona B)\n\nÁrbitro: Leandro Rey Hilfer\n\nAsistente 1: Eric Grunmann\n\nAsistente 2: Uriel García Leri\n\nCuarto árbitro: Jorge Broggi\n\nVAR: Juan Pafundi\n\nAVAR: Adrián Núñez Rodríguez\n\n21.15 Sarmiento – Rosario Central (Zona B)\n\nÁrbitro: Andrés Merlos\n\nAsistente 1: Marcelo Bistocco\n\nAsistente 2: Matías Balmaceda\n\nCuarto árbitro: Agustín Vegetti\n\nVAR: José Carreras\n\nAVAR: Mariano Ascensi\n\n21.15 Racing – Aldosivi (Zona B)\n\nÁrbitro: Nazareno Arasa\n\nAsistente 1: Gabriel Chade\n\nAsistente 2: Joaquín Badano\n\nCuarto árbitro: Ramiro Maglio\n\nVAR: Yamil Possi\n\nAVAR: Carla López\n\nSábado 31 de octubre\n\n17.00 Deportivo Riestra – Talleres (Zona A)\n\nÁrbitro: Darío Herrera\n\nAsistente 1: Sebastián Raineri\n\nAsistente 2: Javier Viglieti\n\nCuarto árbitro: David Cornejo\n\nVAR: Sebastián Habib\n\nAVAR: Diego Verlota\n\n19.15 Vélez – San Lorenzo (Zona A)\n\nÁrbitro: Facundo Tello\n\nAsistente 1: Miguel Savorani\n\nAsistente 2: Diego Martín\n\nCuarto árbitro: Nelson Sosa\n\nVAR: Fernando Espinoza\n\nAVAR: Javier Uziga\n\n21.30 Estudiantes – Instituto (Zona A)\n\nÁrbitro: Hernán Mastrángelo\n\nAsistente 1: Pablo Acevedo\n\nAsistente 2: Hugo Páez\n\nCuarto árbitro: Ignacio Cuicchi\n\nVAR: Fernando Echenique\n\nAVAR: Javier Delbarba\n\nDomingo 1° de noviembre\n\n15.00 Boca – River (Interzonal)\n\nÁrbitro: Nicolás Ramírez\n\nAsistente 1: Maximiliano Del Yesso\n\nAsistente 2: Pablo González\n\nCuarto árbitro: Sebastián Zunino\n\nVAR: Silvio Trucco\n\nAVAR: Gastón Suárez\n\n18.30 Newell’s – Unión (Zona A)\n\nÁrbitro: Daniel Edgardo Zamora\n\nAsistente 1: Juan Mamani\n\nAsistente 2: Lucas Vázquez\n\nCuarto árbitro: Juan Pafundi\n\nVAR: Germán Delfino\n\nAVAR: Iñaki Iparraguirre\n\n18.30 Belgrano – Barracas Central (Zona B)\n\nÁrbitro: Bryan Ferreyra\n\nAsistente 1: Cristian Navarro\n\nAsistente 2: Gerardo Lencina\n\nCuarto árbitro: Franco Morón\n\nVAR: Héctor Paletta\n\nAVAR: Carlos Córdoba\n\n20.45 Lanús – Gimnasia (Mza.) (Zona A)\n\nÁrbitro: Pablo Echavarría\n\nAsistente 1: Iván Núñez\n\nAsistente 2: Marcos Horticou\n\nCuarto árbitro: Mariano Negrete\n\nVAR: Adrián Franklin\n\nAVAR: Julio Fernández\n\nLunes 2 de noviembre\n\n19.00 Platense – Central Córdoba (Zona A)\n\nÁrbitro: Pablo Dóvalo\n\nAsistente 1: Maximiliano Castelli\n\nAsistente 2: Ernesto Callegari\n\nCuarto árbitro: Julián Jerez\n\nVAR: Gastón Monson Brizuela\n\nAVAR: Joaquín Gil\n\n19.00 Defensa y Justicia – Independiente (Zona A)\n\nÁrbitro: Sebastián Martínez\n\nAsistente 1: Pablo Gualtieri\n\nAsistente 2: Agustín Méndez\n\nCuarto árbitro: Gonzalo Creimermann\n\nVAR: Lucas Novelli\n\nAVAR: Maximiliano Silcan Jerez\n\n21.15 Atlético Tucumán – Argentinos (Zona B)\n\nÁrbitro: Yael Falcón Pérez\n\nAsistente 1: José Castelli\n\nAsistente 2: Iván Allende\n\nCuarto árbitro: Francisco Acosta\n\nVAR: Fabricio Llobet\n\nAVAR: Julián Beligoy\n\n21.15 Ind. Rivadavia Mza. – Banfield (Zona B)\n\nÁrbitro: Álvaro Carranza\n\nAsistente 1: Federico Cano\n\nAsistente 2: Daniel Zamora\n\nCuarto árbitro: Pablo Núñez\n\nVAR: Maximiliano Macheroni\n\nAVAR: Guillermo González",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "Gimnasia y Esgrima La Plata venció 2-0 a Sarmiento de Junín en la fecha 14 del Torneo Clausura."
          },
          {
            "text": "Platense derrotó 2-1 a Independiente Rivadavia en Mendoza y cortó una racha de siete partidos sin ganar."
          },
          {
            "text": "Atlético Tucumán venció 1-0 a Tigre en Victoria y la derrota provocó la salida de Diego Dabove como entrenador de Tigre."
          },
          {
            "text": "Banfield y Lanús empataron 1-1 en el Clásico del Sur y Lanús quedó quinto en la Zona A."
          },
          {
            "text": "Defensa y Justicia venció 2-1 a Talleres en Córdoba y se ubicó cuarto en el grupo que lidera Instituto."
          },
          {
            "text": "San Lorenzo y Newell's empataron 0-0 en el Nuevo Gasómetro."
          },
          {
            "text": "Rosario Central venció 2-0 a Huracán en Rosario."
          },
          {
            "text": "Aldosivi derrotó 1-0 a Belgrano y mantiene chances de permanencia."
          },
          {
            "text": "Boca Juniors venció 1-0 a Independiente en Avellaneda y se clasificó a los playoffs del Clausura."
          },
          {
            "text": "River Plate venció 1-0 a Racing, quedó cuarto en la Zona B y sexto en la Tabla Anual, a tres puntos de zona de Copa Libertadores."
          },
          {
            "text": "Vélez Sarsfield goleó 5-0 a Central Córdoba en Santiago del Estero."
          },
          {
            "text": "Vélez es escolta del Grupo A con 27 puntos, a dos del líder Instituto."
          },
          {
            "text": "Barracas Central venció 2-1 a Estudiantes de Río Cuarto, equipo ya descendido."
          },
          {
            "text": "Unión de Santa Fe venció 3-1 a Estudiantes de La Plata, que quedó a 3 puntos de Lanús, último en zona de Copa Sudamericana."
          },
          {
            "text": "Instituto de Córdoba venció 1-0 a Deportivo Riestra y se clasificó a la Copa Sudamericana."
          },
          {
            "text": "Argentinos Juniors venció 1-0 a Independiente Rivadavia en La Paternal e igualó a Boca en la cima de la Tabla Anual con peor diferencia de gol."
          },
          {
            "text": "Argentinos Juniors aseguró su lugar en los playoffs e igualó a Rosario Central en la punta de la Zona B."
          },
          {
            "text": "Belgrano de Córdoba ya aseguró su lugar en la Copa Libertadores como campeón del Torneo Apertura."
          },
          {
            "text": "Boca Juniors jugará la final de la Copa Sudamericana ante Atlético Mineiro."
          },
          {
            "text": "Estudiantes de La Plata jugará una final ante Palmeiras que le daría acceso a la Copa Libertadores."
          },
          {
            "text": "Hasta ocho equipos argentinos podrían jugar la Copa Libertadores según la combinación de resultados."
          },
          {
            "text": "En la Tabla Anual, Boca y Argentinos Juniors suman 57 puntos y Rosario Central 56."
          },
          {
            "text": "En la Tabla Anual, Vélez tiene 55 puntos, Instituto 53, Independiente Rivadavia 53, River 52, Gimnasia La Plata 51 y Lanús 48."
          },
          {
            "text": "Estudiantes de Río Cuarto perdió la categoría tras caer ante River Plate en el Monumental."
          },
          {
            "text": "Aldosivi y Deportivo Riestra definirán el segundo descenso a la Primera Nacional."
          },
          {
            "text": "Los tres primeros de la Tabla Anual clasifican a la Libertadores y del cuarto al noveno a la Sudamericana."
          },
          {
            "text": "El partido entre Gimnasia de Mendoza y Platense terminó 1-2."
          },
          {
            "text": "El superclásico Boca-River de la fecha 15 se juega el domingo 1 de noviembre a las 15.00."
          },
          {
            "text": "Nicolás Ramírez será el árbitro de Boca-River, con Silvio Trucco en el VAR."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Argentinos Juniors",
            "mentions": 5
          },
          {
            "name": "Boca Juniors",
            "mentions": 8
          },
          {
            "name": "River Plate",
            "mentions": 7
          },
          {
            "name": "Torneo Clausura",
            "mentions": 4
          },
          {
            "name": "Tabla Anual",
            "mentions": 7
          },
          {
            "name": "Gimnasia y Esgrima La Plata",
            "mentions": 4
          },
          {
            "name": "Sarmiento de Junín",
            "mentions": 3
          },
          {
            "name": "Platense",
            "mentions": 3
          },
          {
            "name": "Independiente Rivadavia",
            "mentions": 5
          },
          {
            "name": "Mendoza",
            "mentions": 1
          },
          {
            "name": "Atlético Tucumán",
            "mentions": 3
          },
          {
            "name": "Tigre",
            "mentions": 3
          },
          {
            "name": "Victoria",
            "mentions": 1
          },
          {
            "name": "Diego Dabove",
            "mentions": 1
          },
          {
            "name": "Banfield",
            "mentions": 3
          },
          {
            "name": "Lanús",
            "mentions": 5
          },
          {
            "name": "Clásico del Sur",
            "mentions": 1
          },
          {
            "name": "Córdoba",
            "mentions": 1
          },
          {
            "name": "Defensa y Justicia",
            "mentions": 3
          },
          {
            "name": "Talleres",
            "mentions": 3
          },
          {
            "name": "Instituto de Córdoba",
            "mentions": 6
          },
          {
            "name": "San Lorenzo",
            "mentions": 3
          },
          {
            "name": "Newell's Old Boys",
            "mentions": 3
          },
          {
            "name": "Nuevo Gasómetro",
            "mentions": 1
          },
          {
            "name": "Rosario Central",
            "mentions": 5
          },
          {
            "name": "Huracán",
            "mentions": 3
          },
          {
            "name": "Rosario",
            "mentions": 1
          },
          {
            "name": "Aldosivi",
            "mentions": 4
          },
          {
            "name": "Belgrano de Córdoba",
            "mentions": 5
          },
          {
            "name": "Racing Club",
            "mentions": 4
          },
          {
            "name": "Mar del Plata",
            "mentions": 1
          },
          {
            "name": "Independiente",
            "mentions": 3
          },
          {
            "name": "Avellaneda",
            "mentions": 1
          },
          {
            "name": "Vélez Sarsfield",
            "mentions": 5
          },
          {
            "name": "Central Córdoba",
            "mentions": 3
          },
          {
            "name": "Santiago del Estero",
            "mentions": 1
          },
          {
            "name": "Barracas Central",
            "mentions": 3
          },
          {
            "name": "Estudiantes de Río Cuarto",
            "mentions": 4
          },
          {
            "name": "Unión de Santa Fe",
            "mentions": 3
          },
          {
            "name": "Estudiantes de La Plata",
            "mentions": 5
          },
          {
            "name": "Deportivo Riestra",
            "mentions": 3
          },
          {
            "name": "La Paternal",
            "mentions": 1
          },
          {
            "name": "Copa Sudamericana",
            "mentions": 8
          },
          {
            "name": "Copa Libertadores",
            "mentions": 5
          },
          {
            "name": "Torneo Apertura",
            "mentions": 2
          },
          {
            "name": "Copa Argentina",
            "mentions": 1
          },
          {
            "name": "Atlético Mineiro",
            "mentions": 1
          },
          {
            "name": "Palmeiras",
            "mentions": 1
          },
          {
            "name": "Conmebol",
            "mentions": 1
          },
          {
            "name": "Estadio Monumental",
            "mentions": 1
          },
          {
            "name": "Primera Nacional",
            "mentions": 1
          },
          {
            "name": "Liga Profesional",
            "mentions": 1
          },
          {
            "name": "Nicolás Ramírez",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Gimnasia vence 2-0 a Sarmiento y abre la fecha"
          },
          {
            "title": "Platense gana en Mendoza y corta mala racha"
          },
          {
            "title": "Atlético Tucumán vence a Tigre; se va Dabove"
          },
          {
            "title": "Banfield y Lanús empatan en el Clásico del Sur"
          },
          {
            "title": "Defensa y Justicia vence a Talleres en Córdoba"
          },
          {
            "title": "San Lorenzo-Newell's sin goles; Central vence a Huracán"
          },
          {
            "title": "Aldosivi vence a Belgrano y sigue soñando"
          },
          {
            "title": "Boca vence a Independiente y se clasifica a playoffs"
          },
          {
            "title": "River le gana 1-0 a Racing"
          },
          {
            "title": "Vélez golea 5-0 a Central Córdoba"
          },
          {
            "title": "Barracas Central vence a Estudiantes de Río Cuarto"
          },
          {
            "title": "Unión vence 3-1 a Estudiantes de La Plata"
          },
          {
            "title": "Instituto vence a Riestra y asegura la Sudamericana"
          },
          {
            "title": "Argentinos alcanza a Boca en la Tabla Anual"
          },
          {
            "title": "Comienza la fecha 15 de la Liga Profesional"
          },
          {
            "title": "Vélez-San Lorenzo y Estudiantes-Instituto en el sábado"
          },
          {
            "title": "Superclásico Boca-River por el interzonal"
          },
          {
            "title": "Cierre de la fecha 15"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 28,
            "ok": 83,
            "nombre_parcial": 2,
            "fecha_inferida": 18
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "Gimnasia y Esgrima La Plata venció 2-0 a Sarmiento de Junín en la fecha 14 del Torneo Clausura."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Atlético Tucumán venció 1-0 a Tigre en Victoria y la derrota provocó la salida de Diego Dabove como entrenador de Tigre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Banfield y Lanús empataron 1-1 en el Clásico del Sur y Lanús quedó quinto en la Zona A."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Defensa y Justicia venció 2-1 a Talleres en Córdoba y se ubicó cuarto en el grupo que lidera Instituto."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "San Lorenzo y Newell's empataron 0-0 en el Nuevo Gasómetro."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Aldosivi derrotó 1-0 a Belgrano y mantiene chances de permanencia."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "River Plate venció 1-0 a Racing, quedó cuarto en la Zona B y sexto en la Tabla Anual, a tres puntos de zona de Copa Libertadores."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Vélez Sarsfield goleó 5-0 a Central Córdoba en Santiago del Estero."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Vélez es escolta del Grupo A con 27 puntos, a dos del líder Instituto."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Barracas Central venció 2-1 a Estudiantes de Río Cuarto, equipo ya descendido."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Unión de Santa Fe venció 3-1 a Estudiantes de La Plata, que quedó a 3 puntos de Lanús, último en zona de Copa Sudamericana."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Instituto de Córdoba venció 1-0 a Deportivo Riestra y se clasificó a la Copa Sudamericana."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Argentinos Juniors venció 1-0 a Independiente Rivadavia en La Paternal e igualó a Boca en la cima de la Tabla Anual con peor diferencia de gol."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En la Tabla Anual, Vélez tiene 55 puntos, Instituto 53, Independiente Rivadavia 53, River 52, Gimnasia La Plata 51 y Lanús 48."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En la Tabla Anual, Boca y Argentinos Juniors suman 57 puntos y Rosario Central 56."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El partido entre Gimnasia de Mendoza y Platense terminó 1-2."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Rosario Central venció 2-0 a Huracán en Rosario."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El superclásico Boca-River de la fecha 15 se juega el domingo 1 de noviembre a las 15.00."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Independiente",
              "y": 7.0,
              "etiqueta": "Independiente",
              "descripcion": "Club que perdió 1-0 ante Boca Juniors en Avellaneda.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 558,
                "fin": 571,
                "cita": "Independiente"
              },
              "alertas": []
            },
            {
              "x": "Córdoba",
              "y": 7.0,
              "etiqueta": "Córdoba",
              "descripcion": "Ciudad donde Defensa y Justicia venció a Talleres.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 976,
                "fin": 983,
                "cita": "Córdoba"
              },
              "alertas": []
            },
            {
              "x": "Copa Sudamericana",
              "y": 6.0,
              "etiqueta": "Copa Sudamericana",
              "descripcion": "Torneo continental cuyos cupos se disputan y cuya final juegan Boca y Estudiantes.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 954,
                "fin": 971,
                "cita": "Copa Sudamericana"
              },
              "alertas": []
            },
            {
              "x": "Rosario",
              "y": 6.0,
              "etiqueta": "Rosario",
              "descripcion": "Ciudad donde Rosario Central venció a Huracán.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 1157,
                "fin": 1164,
                "cita": "Rosario"
              },
              "alertas": []
            },
            {
              "x": "Tabla Anual",
              "y": 6.0,
              "etiqueta": "Tabla Anual",
              "descripcion": "Clasificación anual que define los cupos a copas internacionales.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 1580,
                "fin": 1591,
                "cita": "Tabla Anual"
              },
              "alertas": []
            },
            {
              "x": "Lanús",
              "y": 5.0,
              "etiqueta": "Lanús",
              "descripcion": "Club que empató con Banfield y ocupa el último puesto de Copa Sudamericana.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 827,
                "fin": 832,
                "cita": "Lanús"
              },
              "alertas": []
            },
            {
              "x": "Rosario Central",
              "y": 5.0,
              "etiqueta": "Rosario Central",
              "descripcion": "Club que venció 2-0 a Huracán y comparte la punta de la Zona B.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p3",
                "inicio": 1157,
                "fin": 1172,
                "cita": "Rosario Central"
              },
              "alertas": []
            },
            {
              "x": "River Plate",
              "y": 5.0,
              "etiqueta": "River Plate",
              "descripcion": "Club que venció 1-0 a Racing y se afianzó en el cuarto lugar de la Zona B.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 1353,
                "fin": 1364,
                "cita": "River Plate"
              },
              "alertas": []
            },
            {
              "x": "Boca Juniors",
              "y": 5.0,
              "etiqueta": "Boca Juniors",
              "descripcion": "Club líder de la Tabla Anual que venció a Independiente y se clasificó a los playoffs.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 1434,
                "fin": 1446,
                "cita": "Boca Juniors"
              },
              "alertas": []
            },
            {
              "x": "Independiente Rivadavia",
              "y": 4.0,
              "etiqueta": "Independiente Rivadavia",
              "descripcion": "Club mendocino que perdió ante Platense y ante Argentinos Juniors.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 558,
                "fin": 581,
                "cita": "Independiente Rivadavia"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [
        {
          "id": "tabla_anual",
          "visual": "ranking",
          "titulo": "Tabla Anual 2026 al 31 de octubre: Rosario Central 59, Boca Juniors 57 y Argentinos Juniors 57 puntos; del 1.º al 9.º hay 11 puntos de diferencia",
          "unidad": "puntos de la Tabla Anual 2026 (Apertura + Clausura)",
          "referencia": null,
          "series": [],
          "barras": [
            {
              "etiqueta": "1. Rosario Central",
              "valor": 59.0,
              "destacada": true
            },
            {
              "etiqueta": "2. Boca Juniors",
              "valor": 57.0,
              "destacada": true
            },
            {
              "etiqueta": "3. Argentinos Juniors",
              "valor": 57.0,
              "destacada": true
            },
            {
              "etiqueta": "4. Vélez Sarsfield",
              "valor": 55.0,
              "destacada": false
            },
            {
              "etiqueta": "5. Gimnasia y Esgrima La Plata",
              "valor": 54.0,
              "destacada": false
            },
            {
              "etiqueta": "6. Instituto",
              "valor": 53.0,
              "destacada": false
            },
            {
              "etiqueta": "7. Independiente Rivadavia",
              "valor": 53.0,
              "destacada": false
            },
            {
              "etiqueta": "8. River Plate",
              "valor": 52.0,
              "destacada": false
            },
            {
              "etiqueta": "9. Lanús",
              "valor": 48.0,
              "destacada": false
            }
          ],
          "fuentes": [
            {
              "nombre": "Tabla general de la temporada 2026, Primera División",
              "institucion": "Wikipedia en español (CC BY-SA 4.0)",
              "id": "Campeonato de Primera División 2026 (Argentina)",
              "enlace": "https://es.wikipedia.org/wiki/Campeonato_de_Primera_Divisi%C3%B3n_2026_%28Argentina%29",
              "ultimo_dato": "2026-10",
              "rezago_meses": 0,
              "origen_datos": "guardado"
            }
          ],
          "como_leerlo": "Cada barra son los puntos que suma el equipo entre el Apertura y el Clausura 2026, según la copia del 31 de octubre. Las barras oscuras son las tres primeras posiciones, que según la propia tabla clasifican a la Libertadores 2027; las siguientes, a la Sudamericana.",
          "advertencias": [
            "La tabla es una copia del 31 de octubre: si se jugaron partidos después de publicada la nota, los puntos pueden ser otros.",
            "Los datos de Wikipedia los editan voluntarios: se citan como Wikipedia y no como dato oficial de la AFA.",
            "No todos los equipos jugaron la misma cantidad de partidos."
          ],
          "motivos": [
            "Tabla Anual (×6)"
          ]
        }
      ],
      "avisos": [
        "línea de tiempo omitida: 0 evento(s) sostenidos por la nota, hacen falta 3"
      ]
    }
  },
  "17": {
    "titulo": "La calculadora del Superclásico",
    "cuerpo": "El Superclásico en la Bombonera de este domingo 1° de noviembre se desarrollará en un punto crucial del torneo. Boca Juniors recibirá a River Plate por la 15ª fecha del Torneo Clausura con los ojos de ambos puestos en las distintas tablas de la Liga Profesional de Fútbol.\n\nAntes del inicio de la anteúltima jornada, con todavía seis puntos en disputa, el Millonario aparece cuarto en la Zona B con 23 puntos detrás de Rosario Central (28), Argentinos Juniors (28) y Gimnasia La Plata (25). El dato clave es que está cuatro unidades por delante de Independiente Rivadavia (9° con 19), el primer equipo que no ingresaría a los playoffs. Es decir, como punto de partida, los de Leonardo Ponzio podrían asegurar en esta fecha su avance a la siguiente etapa del Clausura.\n\nSin embargo, uno de los focos principales de River está en la pelea por la clasificación a las copas. Para poder jugar la próxima Libertadores tiene dos caminos: ser campeón del Clausura en curso o pelear por uno de los tres boletos que repartirá al Tabla Anual. Y ahí la matemática es mucho más amplia...\n\nLos de Núñez hoy figuran 7° en la Tabla Anual con 52 puntos y dentro de la zona de clasificación a la Sudamericana. Boca Juniors (57), Argentinos Juniors (57) y Rosario Central (56) estarían metiéndose en la Libertadores 2027 por esa vía. Sin embargo, podrían liberarse dos cupos si el Xeneize es campeón de Copa Argentina o de la Sudamericana y si el Bicho o el Canalla se quedan con el título del Clausura.\n\nEn ese contexto, River tiene por delante hoy en día a Vélez (55), Instituto de Córdoba (53) e Independiente Rivadavia (53). Si bien hoy River está a cuatro y cinco puntos de distancia de los tres que irían por Tabla Anual, los posibles movimientos por títulos le permiten pensar que debe aspirar al menos a recortar diferencias con el Fortín. Vélez debe chocar todavía con San Lorenzo en Liniers y visitar a Unión en Santa Fe.\n\nUn detalle a tener en cuenta: Argentina tiene seis boletos disponibles para la Copa Libertadores (tres para campeones de Apertura, Clausura y Copa Argentina y otros tres por Tabla Anual), aunque se podrían abrir dos opciones más si Boca gana la Sudamericana de este año y Estudiantes conquista la Libertadores del 2026. En ese caso, irían ocho representantes del país al máximo torneo continental.\n\nA la espera de esas resoluciones para entender quiénes irán por la Tabla Anual, River hoy ya tiene virtualmente asegurada su clasificación al menos a la Sudamericana porque le lleva seis puntos de distancia a Defensa y Justicia (46), primer equipo por fuera de los seis que irían a esa Copa.\n\nPor el lado de Boca, los frentes abiertos son varios: Sudamericana, Copa Argentina, Clausura y Tabla Anual. Los de la Ribera podrían cerrar el 2026 ganando 5 títulos (a los cuatro hipotéticos mencionados, se le podría sumar el del Trofeo de Campeones que se disputará entre Belgrano de Córdoba y el campeón del Clausura el 19 de diciembre).\n\nLo primero que se le definirá al Xeneize es el título de Tabla Anual que hasta ahora lo tiene como líder junto a Argentinos Juniors, aunque virtualmente único puntero por la amplia diferencia de gol que le lleva al Bicho de La Paternal (requisito que definiría la corona en caso de igualdad de unidades). Si bien dependerá de resultados ajenos de rivales directos, Boca podría prácticamente sellar su boleto para la Libertadores independientemente de sus otras vías de clasificación (Sudamericana y Copa Argentina).\n\nYa clasificado a los octavos de los playoffs, también concretaría matemáticamente su ingreso al cuadro final para definir en condición de local al menos en el primer mata-mata. En tanto, obligaría a sus oponentes directos (Argentinos, Rosario Central y Vélez) a triunfar ya que de lo contrario quedará con una considerable ventaja a la espera del encuentro final por la fase regular ante Defensa y Justicia (también en la Bombonera, con día y horario a definir).\n\nLos dirigidos por el Vasco Arruabarrena definirán si ganan la Tabla Anual la semana que viene (al unísono, si sellan el boleto a la Libertadores 2027 por esa vía), dirimirán su suerte en la Copa Argentina el sábado 14 de noviembre contra Banfield en Mendoza (en la final ya espera Platense) y protagonizarán la final de la Sudamericana el sábado 21 frente a Atlético Mineiro en Barranquilla. En medio de esos partidos, afrontarán los octavos de final del Clausura.\n\nTABLAS DEL CLAUSURA Y LA ANUAL\n\nLA AGENDA DE LA FECHA 15\n\nViernes 30 de octubre\n\n19.00: Huracán-Tigre\n\n19.00: Estudiantes de Río Cuarto-Gimnasia La Plata\n\n21.15: Sarmiento-Rosario Central\n\n21.15: Racing-Aldosivi\n\nSábado 31 de octubre\n\n17.00: Deportivo Riestra-Talleres de Córdoba\n\n19.15: Vélez-San Lorenzo\n\n21.30: Estudiantes de La Plata-Instituto de Córdoba\n\nDomingo 1 de noviembre\n\n15.00: Boca Juniors-River Plate\n\n18.30: Belgrano de Córdoba-Barracas Central\n\n18.30: Newell’s-Unión de Santa Fe\n\n20.45: Lanús-Gimnasia de Mendoza\n\nLunes 2 de noviembre\n\n19.00: Platense-Central Córdoba de Santiago del Estero\n\n19.00: Defensa y Justicia-Independiente\n\n21.15: Independiente Rivadavia-Banfield\n\n21.15: Atlético Tucumán-Argentinos Juniors\n\nLOS PARTIDOS DE LA FECHA 16\n\nBoca Juniors-Defensa y Justicia\n\nAldosivi-River Plate\n\nArgentinos Juniors-Huracán\n\nRosario Central-Estudiantes de Río Cuarto\n\nInstituto de Córdoba-Newell’s\n\nUnión de Santa Fe-Vélez\n\nBarracas Central-Racing\n\nTigre-Sarmiento de Junín\n\nBanfield-Atlético Tucumán\n\nIndependiente-Deportivo Riestra\n\nTalleres de Córdoba-Estudiantes de La Plata\n\nSan Lorenzo-Platense\n\nCentral Córdoba de Santiago del Estero-Lanús\n\nGimnasia de Mendoza-Independiente Rivadavia de Mendoza",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "Boca Juniors recibirá a River Plate en la Bombonera el domingo 1° de noviembre por la 15ª fecha del Torneo Clausura."
          },
          {
            "text": "El Superclásico entre Boca Juniors y River Plate de la fecha 15 se juega a las 15.00."
          },
          {
            "text": "Antes de la fecha 15, River Plate es cuarto en la Zona B del Clausura con 23 puntos, detrás de Rosario Central (28), Argentinos Juniors (28) y Gimnasia La Plata (25)."
          },
          {
            "text": "Independiente Rivadavia es noveno en la Zona B con 19 puntos, primer equipo fuera de los playoffs, cuatro unidades detrás de River."
          },
          {
            "text": "River Plate es dirigido por Leonardo Ponzio."
          },
          {
            "text": "La Tabla Anual otorga tres cupos para la Copa Libertadores."
          },
          {
            "text": "River Plate figura séptimo en la Tabla Anual con 52 puntos, dentro de la zona de clasificación a la Sudamericana."
          },
          {
            "text": "En la Tabla Anual, Boca Juniors y Argentinos Juniors tienen 57 puntos y Rosario Central 56, ocupando los puestos de clasificación a la Libertadores 2027."
          },
          {
            "text": "En la Tabla Anual, Vélez tiene 55 puntos, e Instituto de Córdoba e Independiente Rivadavia tienen 53 puntos cada uno."
          },
          {
            "text": "A Vélez le resta enfrentar a San Lorenzo en Liniers y visitar a Unión en Santa Fe."
          },
          {
            "text": "Argentina tiene seis cupos para la Copa Libertadores: tres para los campeones de Apertura, Clausura y Copa Argentina y tres por Tabla Anual."
          },
          {
            "text": "Podrían ser ocho los representantes argentinos en la Libertadores si Boca gana la Sudamericana y Estudiantes conquista la Libertadores 2026."
          },
          {
            "text": "Defensa y Justicia tiene 46 puntos en la Tabla Anual y es el primer equipo fuera de los cupos a la Sudamericana, seis puntos detrás de River."
          },
          {
            "text": "El Trofeo de Campeones se disputará entre Belgrano de Córdoba y el campeón del Clausura el 19 de diciembre."
          },
          {
            "text": "Boca Juniors lidera la Tabla Anual junto a Argentinos Juniors y le saca amplia ventaja en diferencia de gol, criterio de desempate."
          },
          {
            "text": "Boca Juniors ya está clasificado a los octavos de final de los playoffs del Clausura."
          },
          {
            "text": "Boca cerrará la fase regular ante Defensa y Justicia en la Bombonera, con día y horario a definir."
          },
          {
            "text": "Boca Juniors es dirigido por el Vasco Arruabarrena."
          },
          {
            "text": "Boca jugará la semifinal de la Copa Argentina contra Banfield en Mendoza el sábado 14 de noviembre, y en la final espera Platense."
          },
          {
            "text": "Boca disputará la final de la Copa Sudamericana el sábado 21 de noviembre frente a Atlético Mineiro en Barranquilla."
          },
          {
            "text": "En la fecha 16, River Plate visitará a Aldosivi."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Superclásico Boca Juniors-River Plate",
            "mentions": 3
          },
          {
            "name": "La Bombonera",
            "mentions": 2
          },
          {
            "name": "Boca Juniors",
            "mentions": 14
          },
          {
            "name": "River Plate",
            "mentions": 12
          },
          {
            "name": "Torneo Clausura",
            "mentions": 9
          },
          {
            "name": "Liga Profesional de Fútbol",
            "mentions": 1
          },
          {
            "name": "Rosario Central",
            "mentions": 6
          },
          {
            "name": "Argentinos Juniors",
            "mentions": 7
          },
          {
            "name": "Gimnasia La Plata",
            "mentions": 2
          },
          {
            "name": "Independiente Rivadavia",
            "mentions": 4
          },
          {
            "name": "Leonardo Ponzio",
            "mentions": 1
          },
          {
            "name": "Copa Libertadores",
            "mentions": 7
          },
          {
            "name": "Copa Sudamericana",
            "mentions": 7
          },
          {
            "name": "Vélez Sarsfield",
            "mentions": 6
          },
          {
            "name": "Instituto de Córdoba",
            "mentions": 3
          },
          {
            "name": "San Lorenzo",
            "mentions": 3
          },
          {
            "name": "Liniers",
            "mentions": 1
          },
          {
            "name": "Unión de Santa Fe",
            "mentions": 3
          },
          {
            "name": "Santa Fe",
            "mentions": 1
          },
          {
            "name": "Argentina",
            "mentions": 2
          },
          {
            "name": "Copa Argentina",
            "mentions": 5
          },
          {
            "name": "Estudiantes de La Plata",
            "mentions": 3
          },
          {
            "name": "Defensa y Justicia",
            "mentions": 4
          },
          {
            "name": "Trofeo de Campeones",
            "mentions": 1
          },
          {
            "name": "Belgrano de Córdoba",
            "mentions": 2
          },
          {
            "name": "Vasco Arruabarrena",
            "mentions": 1
          },
          {
            "name": "Banfield",
            "mentions": 3
          },
          {
            "name": "Mendoza",
            "mentions": 1
          },
          {
            "name": "Platense",
            "mentions": 3
          },
          {
            "name": "Atlético Mineiro",
            "mentions": 1
          },
          {
            "name": "Barranquilla",
            "mentions": 1
          },
          {
            "name": "Aldosivi",
            "mentions": 2
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Comienza la fecha 15 del Torneo Clausura"
          },
          {
            "title": "Vélez recibe a San Lorenzo en Liniers"
          },
          {
            "title": "Superclásico Boca-River en la Bombonera"
          },
          {
            "title": "Cierre de la fecha 15 del Clausura"
          },
          {
            "title": "Boca define si gana la Tabla Anual"
          },
          {
            "title": "Boca enfrenta a Banfield por Copa Argentina"
          },
          {
            "title": "Final de la Sudamericana: Boca vs Atlético Mineiro"
          },
          {
            "title": "Trofeo de Campeones entre Belgrano y campeón del Clausura"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 21,
            "ok": 56,
            "nombre_parcial": 1,
            "fecha_inferida": 1
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "Boca Juniors recibirá a River Plate en la Bombonera el domingo 1° de noviembre por la 15ª fecha del Torneo Clausura."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El Superclásico entre Boca Juniors y River Plate de la fecha 15 se juega a las 15.00."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Antes de la fecha 15, River Plate es cuarto en la Zona B del Clausura con 23 puntos, detrás de Rosario Central (28), Argentinos Juniors (28) y Gimnasia La Plata (25)."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Independiente Rivadavia es noveno en la Zona B con 19 puntos, primer equipo fuera de los playoffs, cuatro unidades detrás de River."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "River Plate figura séptimo en la Tabla Anual con 52 puntos, dentro de la zona de clasificación a la Sudamericana."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En la Tabla Anual, Boca Juniors y Argentinos Juniors tienen 57 puntos y Rosario Central 56, ocupando los puestos de clasificación a la Libertadores 2027."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En la Tabla Anual, Vélez tiene 55 puntos, e Instituto de Córdoba e Independiente Rivadavia tienen 53 puntos cada uno."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Defensa y Justicia tiene 46 puntos en la Tabla Anual y es el primer equipo fuera de los cupos a la Sudamericana, seis puntos detrás de River."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El Trofeo de Campeones se disputará entre Belgrano de Córdoba y el campeón del Clausura el 19 de diciembre."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Boca disputará la final de la Copa Sudamericana el sábado 21 de noviembre frente a Atlético Mineiro en Barranquilla."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Boca jugará la semifinal de la Copa Argentina contra Banfield en Mendoza el sábado 14 de noviembre, y en la final espera Platense."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "En la fecha 16, River Plate visitará a Aldosivi."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "linea-tiempo",
          "tipo": "linea_tiempo",
          "titulo": "Línea de tiempo",
          "fuente": null,
          "enlace": null,
          "unidad": null,
          "origen_datos": null,
          "puntos": [
            {
              "x": "2026-10-30",
              "y": null,
              "etiqueta": "Comienza la fecha 15 del Torneo Clausura",
              "descripcion": "La 15ª fecha arranca el viernes con Huracán-Tigre, Estudiantes de Río Cuarto-Gimnasia La Plata, Sarmiento-Rosario Central y Racing-Aldosivi.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p14",
                "inicio": 4461,
                "fin": 4474,
                "cita": "30 de octubre"
              },
              "alertas": []
            },
            {
              "x": "2026-10-31",
              "y": null,
              "etiqueta": "Vélez recibe a San Lorenzo en Liniers",
              "descripcion": "Vélez, rival de River en la Tabla Anual, enfrenta a San Lorenzo a las 19.15 por la fecha 15.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p19",
                "inicio": 4615,
                "fin": 4628,
                "cita": "31 de octubre"
              },
              "alertas": []
            },
            {
              "x": "2026-11",
              "y": null,
              "etiqueta": "Boca define si gana la Tabla Anual",
              "descripcion": "En la última fecha de la fase regular, ante Defensa y Justicia, Boca definirá si gana la Tabla Anual y sella su boleto a la Libertadores 2027.",
              "grupo": null,
              "precision": "month",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 54,
                "fin": 63,
                "cita": "noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-11-01",
              "y": null,
              "etiqueta": "Superclásico Boca-River en la Bombonera",
              "descripcion": "Boca Juniors recibe a River Plate por la 15ª fecha del Torneo Clausura, en un momento clave para ambos en las tablas.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p23",
                "inicio": 4763,
                "fin": 4777,
                "cita": "1 de noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-11-02",
              "y": null,
              "etiqueta": "Cierre de la fecha 15 del Clausura",
              "descripcion": "La fecha se completa el lunes con partidos como Defensa y Justicia-Independiente y Atlético Tucumán-Argentinos Juniors.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p28",
                "inicio": 4932,
                "fin": 4946,
                "cita": "2 de noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-11-14",
              "y": null,
              "etiqueta": "Boca enfrenta a Banfield por Copa Argentina",
              "descripcion": "Boca juega ante Banfield en Mendoza por la Copa Argentina; en la final ya espera Platense.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p11",
                "inicio": 4144,
                "fin": 4159,
                "cita": "14 de noviembre"
              },
              "alertas": []
            },
            {
              "x": "2026-12-19",
              "y": null,
              "etiqueta": "Trofeo de Campeones entre Belgrano y campeón del Clausura",
              "descripcion": "Belgrano de Córdoba y el campeón del Clausura disputarán el Trofeo de Campeones, posible quinto título para Boca en 2026.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p8",
                "inicio": 2929,
                "fin": 2944,
                "cita": "19 de diciembre"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": [
            "evento sin cita en la nota, no se grafica: Final de la Sudamericana: Boca vs Atlético Mineiro (2026-11-21)"
          ]
        },
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Copa Sudamericana",
              "y": 7.0,
              "etiqueta": "Copa Sudamericana",
              "descripcion": "Torneo continental cuya final disputará Boca ante Atlético Mineiro.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 1178,
                "fin": 1190,
                "cita": "Sudamericana"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Sudamericana»"
              ]
            },
            {
              "x": "Argentina",
              "y": 6.0,
              "etiqueta": "Argentina",
              "descripcion": "País con seis cupos disponibles para la Libertadores.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 1389,
                "fin": 1398,
                "cita": "Argentina"
              },
              "alertas": []
            },
            {
              "x": "Rosario Central",
              "y": 5.0,
              "etiqueta": "Rosario Central",
              "descripcion": "Líder de la Zona B con 28 puntos y tercero en la Tabla Anual.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 419,
                "fin": 434,
                "cita": "Rosario Central"
              },
              "alertas": []
            },
            {
              "x": "Argentinos Juniors",
              "y": 5.0,
              "etiqueta": "Argentinos Juniors",
              "descripcion": "Colíder de la Zona B y de la Tabla Anual junto a Boca.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 441,
                "fin": 459,
                "cita": "Argentinos Juniors"
              },
              "alertas": []
            },
            {
              "x": "Copa Argentina",
              "y": 5.0,
              "etiqueta": "Copa Argentina",
              "descripcion": "Competencia en la que Boca jugará la semifinal ante Banfield.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p4",
                "inicio": 1384,
                "fin": 1398,
                "cita": "Copa Argentina"
              },
              "alertas": []
            },
            {
              "x": "Vélez Sarsfield",
              "y": 5.0,
              "etiqueta": "Vélez Sarsfield",
              "descripcion": "Rival directo de River en la Tabla Anual con 55 puntos.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p5",
                "inicio": 1540,
                "fin": 1545,
                "cita": "Vélez"
              },
              "alertas": [
                "De 'Vélez Sarsfield' en la nota solo figura 'velez'.",
                "las menciones se contaron con la forma que figura en la nota: «Vélez»"
              ]
            },
            {
              "x": "Boca Juniors",
              "y": 4.0,
              "etiqueta": "Boca Juniors",
              "descripcion": "Club local del Superclásico, líder de la Tabla Anual con varios frentes abiertos.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 112,
                "fin": 124,
                "cita": "Boca Juniors"
              },
              "alertas": []
            },
            {
              "x": "Independiente Rivadavia",
              "y": 4.0,
              "etiqueta": "Independiente Rivadavia",
              "descripcion": "Equipo de Mendoza noveno en la Zona B y con 53 puntos en la Tabla Anual.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 548,
                "fin": 571,
                "cita": "Independiente Rivadavia"
              },
              "alertas": []
            },
            {
              "x": "Defensa y Justicia",
              "y": 4.0,
              "etiqueta": "Defensa y Justicia",
              "descripcion": "Primer equipo fuera de zona de Sudamericana y rival de Boca en la última fecha.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p7",
                "inicio": 2522,
                "fin": 2540,
                "cita": "Defensa y Justicia"
              },
              "alertas": []
            },
            {
              "x": "Mendoza",
              "y": 4.0,
              "etiqueta": "Mendoza",
              "descripcion": "Sede del partido de Copa Argentina entre Boca y Banfield.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p11",
                "inicio": 4179,
                "fin": 4186,
                "cita": "Mendoza"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [
        {
          "id": "historial_superclasico",
          "visual": "barras",
          "titulo": "Superclásicos en Primera División: de 218 partidos, Boca ganó 80, River 73 y empataron 65",
          "unidad": "partidos de Primera División",
          "referencia": null,
          "series": [],
          "barras": [
            {
              "etiqueta": "Ganó Boca",
              "valor": 80.0,
              "destacada": false
            },
            {
              "etiqueta": "Empates",
              "valor": 65.0,
              "destacada": false
            },
            {
              "etiqueta": "Ganó River",
              "valor": 73.0,
              "destacada": false
            }
          ],
          "fuentes": [
            {
              "nombre": "Historial estadístico del Superclásico, Primera División",
              "institucion": "Wikipedia en español (CC BY-SA 4.0)",
              "id": "Superclásico del fútbol argentino",
              "enlace": "https://es.wikipedia.org/wiki/Supercl%C3%A1sico_del_f%C3%BAtbol_argentino",
              "ultimo_dato": "2026-10",
              "rezago_meses": 0,
              "origen_datos": "guardado"
            }
          ],
          "como_leerlo": "Cada barra cuenta los Superclásicos de Primera División hasta el 31 de octubre: los que ganó cada equipo y los que terminaron empatados.",
          "advertencias": [
            "Cuenta hasta el 31 de octubre: no incluye los partidos posteriores a esa copia.",
            "Es solo Primera División: sumando copas nacionales, internacionales y amistosos las cifras cambian.",
            "Los datos de Wikipedia los editan voluntarios: se citan como Wikipedia y no como dato oficial de la AFA."
          ],
          "motivos": [
            "Superclásico (×1)",
            "Boca (×7)",
            "River (×7)"
          ]
        },
        {
          "id": "tabla_anual",
          "visual": "ranking",
          "titulo": "Tabla Anual 2026 al 31 de octubre: Rosario Central 59, Boca Juniors 57 y Argentinos Juniors 57 puntos; del 1.º al 9.º hay 11 puntos de diferencia",
          "unidad": "puntos de la Tabla Anual 2026 (Apertura + Clausura)",
          "referencia": null,
          "series": [],
          "barras": [
            {
              "etiqueta": "1. Rosario Central",
              "valor": 59.0,
              "destacada": true
            },
            {
              "etiqueta": "2. Boca Juniors",
              "valor": 57.0,
              "destacada": true
            },
            {
              "etiqueta": "3. Argentinos Juniors",
              "valor": 57.0,
              "destacada": true
            },
            {
              "etiqueta": "4. Vélez Sarsfield",
              "valor": 55.0,
              "destacada": false
            },
            {
              "etiqueta": "5. Gimnasia y Esgrima La Plata",
              "valor": 54.0,
              "destacada": false
            },
            {
              "etiqueta": "6. Instituto",
              "valor": 53.0,
              "destacada": false
            },
            {
              "etiqueta": "7. Independiente Rivadavia",
              "valor": 53.0,
              "destacada": false
            },
            {
              "etiqueta": "8. River Plate",
              "valor": 52.0,
              "destacada": false
            },
            {
              "etiqueta": "9. Lanús",
              "valor": 48.0,
              "destacada": false
            }
          ],
          "fuentes": [
            {
              "nombre": "Tabla general de la temporada 2026, Primera División",
              "institucion": "Wikipedia en español (CC BY-SA 4.0)",
              "id": "Campeonato de Primera División 2026 (Argentina)",
              "enlace": "https://es.wikipedia.org/wiki/Campeonato_de_Primera_Divisi%C3%B3n_2026_%28Argentina%29",
              "ultimo_dato": "2026-10",
              "rezago_meses": 0,
              "origen_datos": "guardado"
            }
          ],
          "como_leerlo": "Cada barra son los puntos que suma el equipo entre el Apertura y el Clausura 2026, según la copia del 31 de octubre. Las barras oscuras son las tres primeras posiciones, que según la propia tabla clasifican a la Libertadores 2027; las siguientes, a la Sudamericana.",
          "advertencias": [
            "La tabla es una copia del 31 de octubre: si se jugaron partidos después de publicada la nota, los puntos pueden ser otros.",
            "Los datos de Wikipedia los editan voluntarios: se citan como Wikipedia y no como dato oficial de la AFA.",
            "No todos los equipos jugaron la misma cantidad de partidos."
          ],
          "motivos": [
            "Tabla Anual (×8)"
          ]
        }
      ],
      "avisos": []
    }
  },
  "19": {
    "titulo": "La Liga Profesional usará el fuera de juego semiautomático desde la final del Clausura",
    "cuerpo": "La Liga Profesional de Fútbol (LPF) de la Argentina incorporará el sistema de Fuera de Juego Semiautomático (SAOT, por sus siglas en inglés) a su plataforma VAR a partir de la final del Torneo Clausura 2026, programada para el 12 de diciembre en el Estadio Diego Armando Maradona de La Plata, con implementación total en todas las canchas desde el Clausura 2027.\n\nEl anuncio, realizado de manera oficial por la LPF y la Asociación del Fútbol Argentino (AFA), convierte al torneo local en el más reciente en adoptar una tecnología que ya opera en competencias como la Premier League, la UEFA, la CONMEBOL, la Ligue 1, el Brasileirão, la Serie A, la Liga MX y la Pro League, entre otras.\n\nEl SAOT funciona con una plataforma basada en inteligencia artificial y datos deportivos. El sistema construye una réplica digital del partido en tiempo real y permite analizar “cada jugada de fuera de juego con precisión milimétrica, optimizando los tiempos de revisión y respaldando la toma de decisiones arbitrales”, según el comunicado oficial de la LPF. Para ello, combina “cámaras de ultimísima generación como hardware de captura de imagen, mientras que el núcleo tecnológico reside en su avanzado software de procesamiento de datos”.\n\nEl presidente de la AFA, Claudio Tapia, habló sobre el anuncio: “Los fanáticos del fútbol argentino merecen la mejor experiencia en el día del partido y la tecnología de fuera de juego semiautomático es una solución crucial para tomar decisiones rápidas y precisas”. Al mismo tiempo, aseguró que la empresa que desarrolló el sistema lanzó el SAOT “más avanzado del fútbol mundial con resultados probados en las ligas más importantes y estamos encantados de ampliar nuestra alianza con ellos”.\n\n“Ya hemos demostrado que nuestra tecnología puede reducir significativamente los tiempos de decisión de las competencias más grandes del mundo. Ahora traemos esos beneficios al fútbol argentino”, fue la frase que difundieron de Steven Burton, Chief Partnerships Officer de “Genius Sports”, la empresa que desarrolló el sistema.\n\nLa llegada del sistema de fuera de juego semiautomático se produce en paralelo a una reestructuración más amplia del fútbol argentino. En la reunión del Comité Ejecutivo celebrada en Puerto Madero, la LPF aprobó por mayoría un nuevo formato de competencia para el Apertura y Clausura a partir de 2027: todos los equipos se enfrentarán entre sí al menos una vez por temporada, con 15 fechas por torneo, playoffs entre los 16 mejores de cada tramo y una Tabla Anual que definirá los clasificados a copas internacionales y los descensos.\n\nFue justamente en esa misma reunión donde Cristian Malaspina, presidente de Argentinos Juniors, anticipó la llegada del SAOT. “Se viene el VAR semiautomático en el fútbol argentino a partir del año que viene. El primer caso de éxito va a ser la final del 12 de diciembre de este año. Creo que es un crecimiento para el fútbol argentino. El año que viene, seguramente por tema de implementación a partir del segundo semestre, lo tendremos en todos los estadios de primera”, declaró Malaspina.\n\n“Esta nueva tecnología se utilizará en la final del actual Torneo Clausura que se disputará en el estadio Diego Armando Maradona de La Plata, el 12 de diciembre próximo y quedará definitivamete instalado para uso en todos los encuentros de la Liga Profesional de Fútbol a partir del Torneo Clausura del 2027″, especificó la LPF en su comunicado.",
    "filas": {
      "claims": {
        "claims": [
          {
            "text": "La Liga Profesional de Fútbol de Argentina incorporará el sistema de Fuera de Juego Semiautomático (SAOT) a su plataforma VAR a partir de la final del Torneo Clausura 2026."
          },
          {
            "text": "La final del Torneo Clausura 2026 está programada para el 12 de diciembre en el Estadio Diego Armando Maradona de La Plata."
          },
          {
            "text": "El sistema SAOT tendrá implementación total en todos los partidos de la Liga Profesional a partir del Torneo Clausura 2027."
          },
          {
            "text": "El anuncio de la incorporación del SAOT fue realizado de manera oficial por la LPF y la AFA."
          },
          {
            "text": "El fuera de juego semiautomático ya opera en competencias como la Premier League, la UEFA, la CONMEBOL, la Ligue 1, el Brasileirão, la Serie A, la Liga MX y la Pro League."
          },
          {
            "text": "Según el comunicado oficial de la LPF, el SAOT construye una réplica digital del partido en tiempo real y permite analizar cada jugada de fuera de juego con precisión milimétrica."
          },
          {
            "text": "Claudio Tapia, presidente de la AFA, dijo: \"Los fanáticos del fútbol argentino merecen la mejor experiencia en el día del partido y la tecnología de fuera de juego semiautomático es una solución crucial para tomar decisiones rápidas y precisas\"."
          },
          {
            "text": "Claudio Tapia afirmó que la empresa desarrolladora lanzó el SAOT \"más avanzado del fútbol mundial\" y que la AFA está encantada de ampliar su alianza con ella."
          },
          {
            "text": "El sistema de fuera de juego semiautomático que adoptará la LPF fue desarrollado por la empresa Genius Sports."
          },
          {
            "text": "Steven Burton, Chief Partnerships Officer de Genius Sports, dijo: \"Ya hemos demostrado que nuestra tecnología puede reducir significativamente los tiempos de decisión de las competencias más grandes del mundo. Ahora traemos esos beneficios al fútbol argentino\"."
          },
          {
            "text": "En una reunión del Comité Ejecutivo celebrada en Puerto Madero, la LPF aprobó por mayoría un nuevo formato de competencia para el Apertura y el Clausura a partir de 2027."
          },
          {
            "text": "Con el nuevo formato desde 2027, todos los equipos se enfrentarán al menos una vez por temporada, con 15 fechas por torneo y playoffs entre los 16 mejores de cada tramo."
          },
          {
            "text": "En el nuevo formato, una Tabla Anual definirá los clasificados a copas internacionales y los descensos."
          },
          {
            "text": "Cristian Malaspina, presidente de Argentinos Juniors, anticipó en la reunión del Comité Ejecutivo la llegada del SAOT y dijo: \"El primer caso de éxito va a ser la final del 12 de diciembre de este año\"."
          },
          {
            "text": "Malaspina declaró que el SAOT estaría en todos los estadios de primera división el año próximo, probablemente a partir del segundo semestre por razones de implementación."
          },
          {
            "text": "Según el comunicado de la LPF, la tecnología se usará en la final del Torneo Clausura en La Plata el 12 de diciembre y quedará instalada para todos los encuentros desde el Torneo Clausura 2027."
          }
        ]
      },
      "entities": {
        "nodes": [
          {
            "name": "Liga Profesional de Fútbol",
            "mentions": 9
          },
          {
            "name": "Fuera de Juego Semiautomático (SAOT)",
            "mentions": 7
          },
          {
            "name": "Torneo Clausura 2026",
            "mentions": 3
          },
          {
            "name": "Final del Torneo Clausura 2026",
            "mentions": 4
          },
          {
            "name": "Estadio Diego Armando Maradona",
            "mentions": 2
          },
          {
            "name": "La Plata",
            "mentions": 2
          },
          {
            "name": "Torneo Clausura 2027",
            "mentions": 2
          },
          {
            "name": "Asociación del Fútbol Argentino",
            "mentions": 2
          },
          {
            "name": "Claudio Tapia",
            "mentions": 2
          },
          {
            "name": "Genius Sports",
            "mentions": 3
          },
          {
            "name": "Steven Burton",
            "mentions": 1
          },
          {
            "name": "Cristian Malaspina",
            "mentions": 2
          },
          {
            "name": "Argentinos Juniors",
            "mentions": 1
          },
          {
            "name": "Comité Ejecutivo de la LPF",
            "mentions": 1
          },
          {
            "name": "Puerto Madero",
            "mentions": 1
          },
          {
            "name": "Premier League",
            "mentions": 1
          },
          {
            "name": "UEFA",
            "mentions": 1
          },
          {
            "name": "CONMEBOL",
            "mentions": 1
          },
          {
            "name": "Ligue 1",
            "mentions": 1
          },
          {
            "name": "Brasileirão",
            "mentions": 1
          },
          {
            "name": "Serie A",
            "mentions": 1
          },
          {
            "name": "Liga MX",
            "mentions": 1
          },
          {
            "name": "Pro League",
            "mentions": 1
          }
        ]
      },
      "timeline": {
        "events": [
          {
            "title": "Debut del fuera de juego semiautomático en la final del Clausura"
          },
          {
            "title": "Nuevo formato de competencia para Apertura y Clausura"
          },
          {
            "title": "Implementación total del SAOT desde el Clausura 2027"
          }
        ]
      },
      "validation": {
        "verificacion": {
          "resumen": {
            "parafraseada": 16,
            "ok": 56
          }
        },
        "tarjetas": [
          {
            "tarjeta": {
              "dicho": {
                "texto": "La final del Torneo Clausura 2026 está programada para el 12 de diciembre en el Estadio Diego Armando Maradona de La Plata."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "El fuera de juego semiautomático ya opera en competencias como la Premier League, la UEFA, la CONMEBOL, la Ligue 1, el Brasileirão, la Serie A, la Liga MX y la Pro League."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Con el nuevo formato desde 2027, todos los equipos se enfrentarán al menos una vez por temporada, con 15 fechas por torneo y playoffs entre los 16 mejores de cada tramo."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Cristian Malaspina, presidente de Argentinos Juniors, anticipó en la reunión del Comité Ejecutivo la llegada del SAOT y dijo: \"El primer caso de éxito va a ser la final del 12 de diciembre de este año\"."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          },
          {
            "tarjeta": {
              "dicho": {
                "texto": "Según el comunicado de la LPF, la tecnología se usará en la final del Torneo Clausura en La Plata el 12 de diciembre y quedará instalada para todos los encuentros desde el Torneo Clausura 2027."
              },
              "resultado": "sin_serie",
              "serie": null
            }
          }
        ]
      }
    },
    "datos": {
      "graficos": [
        {
          "id": "linea-tiempo",
          "tipo": "linea_tiempo",
          "titulo": "Línea de tiempo",
          "fuente": null,
          "enlace": null,
          "unidad": null,
          "origen_datos": null,
          "puntos": [
            {
              "x": "2026-12-12",
              "y": null,
              "etiqueta": "Debut del fuera de juego semiautomático en la final del Clausura",
              "descripcion": "La final del Torneo Clausura 2026, en el Estadio Diego Armando Maradona de La Plata, será el primer partido de la LPF con el sistema SAOT.",
              "grupo": null,
              "precision": "day",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 227,
                "fin": 242,
                "cita": "12 de diciembre"
              },
              "alertas": []
            },
            {
              "x": "2027",
              "y": null,
              "etiqueta": "Nuevo formato de competencia para Apertura y Clausura",
              "descripcion": "Desde 2027 todos los equipos se enfrentarán al menos una vez por temporada, con 15 fechas por torneo, playoffs entre los 16 mejores y una Tabla Anual para copas y descensos.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 357,
                "fin": 361,
                "cita": "2027"
              },
              "alertas": []
            },
            {
              "x": "2027",
              "y": null,
              "etiqueta": "Implementación total del SAOT desde el Clausura 2027",
              "descripcion": "El fuera de juego semiautomático quedará instalado en todos los partidos de la Liga Profesional a partir del Torneo Clausura 2027, previsto para el segundo semestre.",
              "grupo": null,
              "precision": "year",
              "cita": {
                "parrafo_id": "p1",
                "inicio": 357,
                "fin": 361,
                "cita": "2027"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        },
        {
          "id": "ranking-entidades",
          "tipo": "ranking",
          "titulo": "Entidades más mencionadas",
          "fuente": null,
          "enlace": null,
          "unidad": "menciones",
          "origen_datos": null,
          "puntos": [
            {
              "x": "Torneo Clausura 2027",
              "y": 5.0,
              "etiqueta": "Torneo Clausura 2027",
              "descripcion": "Torneo desde el cual el SAOT se implementará en todas las canchas.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 186,
                "fin": 192,
                "cita": "Torneo"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Torneo»"
              ]
            },
            {
              "x": "Fuera de Juego Semiautomático (SAOT)",
              "y": 3.0,
              "etiqueta": "Fuera de Juego Semiautomático (SAOT)",
              "descripcion": "Sistema tecnológico de detección de fuera de juego que se incorporará al VAR del fútbol argentino.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 78,
                "fin": 107,
                "cita": "Fuera de Juego Semiautomático"
              },
              "alertas": [
                "las menciones se contaron con la forma que figura en la nota: «Fuera de Juego Semiautomático»"
              ]
            },
            {
              "x": "Liga Profesional de Fútbol",
              "y": 2.0,
              "etiqueta": "Liga Profesional de Fútbol",
              "descripcion": "Liga argentina que incorporará el fuera de juego semiautomático y aprobó un nuevo formato de competencia.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 3,
                "fin": 29,
                "cita": "Liga Profesional de Fútbol"
              },
              "alertas": []
            },
            {
              "x": "Estadio Diego Armando Maradona",
              "y": 2.0,
              "etiqueta": "Estadio Diego Armando Maradona",
              "descripcion": "Estadio de La Plata donde se jugará la final del Clausura.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 249,
                "fin": 279,
                "cita": "Estadio Diego Armando Maradona"
              },
              "alertas": []
            },
            {
              "x": "La Plata",
              "y": 2.0,
              "etiqueta": "La Plata",
              "descripcion": "Ciudad donde se ubica el estadio de la final.",
              "grupo": "place",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 283,
                "fin": 291,
                "cita": "La Plata"
              },
              "alertas": []
            },
            {
              "x": "Final del Torneo Clausura 2026",
              "y": 1.0,
              "etiqueta": "Final del Torneo Clausura 2026",
              "descripcion": "Partido del 12 de diciembre en el que debutará el sistema semiautomático.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 176,
                "fin": 206,
                "cita": "final del Torneo Clausura 2026"
              },
              "alertas": []
            },
            {
              "x": "Torneo Clausura 2026",
              "y": 1.0,
              "etiqueta": "Torneo Clausura 2026",
              "descripcion": "Torneo cuya final será el primer partido en usar el SAOT en la Argentina.",
              "grupo": "event",
              "precision": null,
              "cita": {
                "parrafo_id": "p1",
                "inicio": 186,
                "fin": 206,
                "cita": "Torneo Clausura 2026"
              },
              "alertas": []
            },
            {
              "x": "Asociación del Fútbol Argentino",
              "y": 1.0,
              "etiqueta": "Asociación del Fútbol Argentino",
              "descripcion": "Entidad que realizó el anuncio oficial junto con la LPF.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 420,
                "fin": 451,
                "cita": "Asociación del Fútbol Argentino"
              },
              "alertas": []
            },
            {
              "x": "Premier League",
              "y": 1.0,
              "etiqueta": "Premier League",
              "descripcion": "Competencia que ya utiliza la tecnología.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 567,
                "fin": 581,
                "cita": "Premier League"
              },
              "alertas": []
            },
            {
              "x": "UEFA",
              "y": 1.0,
              "etiqueta": "UEFA",
              "descripcion": "Organización que ya utiliza la tecnología.",
              "grupo": "org",
              "precision": null,
              "cita": {
                "parrafo_id": "p2",
                "inicio": 586,
                "fin": 590,
                "cita": "UEFA"
              },
              "alertas": []
            }
          ],
          "marcas": [],
          "avisos": []
        }
      ],
      "contextos": [],
      "avisos": []
    }
  }
}
