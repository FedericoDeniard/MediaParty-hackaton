/* Datos reales de ejemplo, generados por el verificador sobre notas del corpus (01, 02, 07, 13, 14, 17 y 19)
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
      "contextos": [],
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
