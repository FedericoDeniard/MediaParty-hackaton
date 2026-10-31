from verificador.verificacion import verificar_enriquecimientos

CUERPO = (
    "La inflación fue de 1,9% en septiembre, según el INDEC.\n\n"
    "El ministro dijo: “vamos a bajar la inflación” y agregó que el dólar cerró a $1536 "
    "el 15 de marzo de 2026."
)


def estados(informe):
    return [i.estado for i in informe.items]


def test_claim_literal_ok_con_cita_copiada():
    inf = verificar_enriquecimientos(CUERPO, {"claims": {"claims": [
        {"text": "La inflación fue de 1,9% en septiembre", "paragraph_index": 99}]}})
    item = inf.items[0]
    assert item.estado == "ok" and item.cita_copiada == "La inflación fue de 1,9% en septiembre"
    assert item.ubicacion.parrafo_id == "p1"
    assert not inf.hay_bloqueos
    assert any(a.codigo == "paragraph_index_discrepa" for a in item.alertas)


def test_claim_parafraseada_fiel():
    inf = verificar_enriquecimientos(CUERPO, {"claims": {"claims": [
        {"text": "En septiembre el IPC marcó 1,9 por ciento"}]}})
    assert estados(inf) == ["parafraseada"] and not inf.hay_bloqueos


def test_claim_con_cifra_inventada_bloquea():
    inf = verificar_enriquecimientos(CUERPO, {"claims": {"claims": [
        {"text": "En septiembre el IPC marcó 3,4%"}]}})
    assert estados(inf) == ["no_respaldada"] and inf.hay_bloqueos
    assert "3,4%" in inf.items[0].alertas[0].detalle
    assert inf.model_dump_json()


def test_claim_con_cita_inventada_bloquea():
    inf = verificar_enriquecimientos(CUERPO, {"claims": {"claims": [
        {"text": 'El ministro dijo "vamos a subir la inflación"'}]}})
    assert estados(inf) == ["no_respaldada"] and inf.hay_bloqueos


def test_claim_tolera_comillas_tipograficas_y_espacios_dobles():
    inf = verificar_enriquecimientos(CUERPO, {"claims": {"claims": [
        {"text": 'dijo: "vamos  a bajar la inflación"'}]}})
    assert estados(inf) == ["ok"] and not inf.items[0].ubicacion.exacta


def test_entidades():
    inf = verificar_enriquecimientos(CUERPO, {"entities": {
        "nodes": [{"name": "indec"}, {"name": "Banco Mundial"}],
        "edges": [{"evidence": "según el INDEC"}, {"evidence": "según el FMI"}]}})
    assert estados(inf) == ["ok", "nombre_no_encontrado", "ok", "evidencia_no_encontrada"]
    assert inf.hay_bloqueos


def test_timeline():
    inf = verificar_enriquecimientos(CUERPO, {"timeline": {"events": [
        {"date": "2026-03-15", "precision": "day"},
        {"date": "2026-03", "precision": "month"},
        {"date": "2019", "precision": "year"},
        {"date": "2026-04-02", "precision": "day"}]}})
    assert estados(inf) == ["ok", "ok", "fecha_inferida", "fecha_inferida"]
    assert not inf.hay_bloqueos


def test_fuentes_citadas():
    inf = verificar_enriquecimientos(CUERPO, {"editorial": {"sources_cited": ["INDEC", "Reuters"]}})
    assert estados(inf) == ["ok", "fuente_no_encontrada"] and inf.hay_bloqueos
    assert inf.resumen == {"ok": 1, "fuente_no_encontrada": 1}


def test_claves_faltantes_y_datos_rotos():
    assert verificar_enriquecimientos(CUERPO, {}).items == []
    inf = verificar_enriquecimientos(CUERPO, {"claims": {"claims": [{"text": None}, 5]}})
    assert estados(inf) == ["malformado", "malformado"] and inf.hay_bloqueos
