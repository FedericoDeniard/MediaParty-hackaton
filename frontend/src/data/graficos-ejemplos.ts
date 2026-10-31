/* Datos reales de ejemplo, generados por el verificador sobre las notas 01, 02 y 14 del corpus
   (`armar_graficos` con las series guardadas al 2026-10-31). No se editan a mano: se regeneran. */
import type { GraficosNota } from '../components/graficos/types.ts'

export interface EjemploDeNota {
  titulo: string
  datos: GraficosNota
}

export const ejemplos: Record<string, EjemploDeNota> = {
  "01": {
    "titulo": "A cuánto llegará el índice de inflación de octubre según las consultoras",
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
  "14": {
    "titulo": "Los universitarios comienzan hoy un nuevo paro que se extenderá durante una semana",
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
  }
}
