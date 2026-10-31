from typing import Literal

from pydantic import BaseModel, Field


class Parsed(BaseModel):
    niche: str = Field(description="política | economía | policiales | sociedad | deportes | cultura | ciencia | internacional | otro")
    summary: str
    paragraphs: list[str]


class EntityNode(BaseModel):
    id: str = Field(description="slug estable, ej. 'javier-milei'")
    name: str
    type: Literal["person", "org", "place", "event"]
    mentions: int
    description: str
    role: Literal["protagonist", "source", "mentioned"] = "mentioned"
    aliases: list[str] = Field(default=[], description="otras formas en que la nota la nombra, tal como aparecen")
    org_kind: Literal["consultancy", "government", "media", "club", "company", "ngo", "other"] | None = None


class EntityEdge(BaseModel):
    source: str
    target: str
    relation: str
    relation_type: Literal["membership", "accusation", "decision", "versus", "location", "visit", "other"] = "other"
    evidence: str = Field(description="cita textual del artículo que sustenta la relación")


class Entities(BaseModel):
    nodes: list[EntityNode]
    edges: list[EntityEdge]


class Claim(BaseModel):
    text: str
    paragraph_index: int
    type: Literal["statistic", "quote", "event", "attribution"]
    checkable: bool
    needs_source: bool = Field(description="true si el artículo no cita fuente para esta afirmación")
    verification_query: str = Field(description="búsqueda sugerida para verificar")
    confidence: float = Field(ge=0, le=1)
    source: str | None = Field(default=None, description="quién lo dice, tal como lo nombra la nota; null si la nota lo afirma sin atribuir")
    source_kind: Literal["official", "consultancy", "person", "media", "document"] | None = None


class Claims(BaseModel):
    claims: list[Claim]


class Event(BaseModel):
    date: str = Field(description="ISO 8601, parcial permitido: 2024, 2024-03, 2024-03-15")
    precision: Literal["day", "month", "year"]
    title: str
    description: str
    paragraph_index: int
    date_text: str | None = Field(default=None, description="la fecha tal como figura en la nota")
    date_end: str | None = Field(default=None, description="ISO 8601 parcial, solo para rangos")
    entities: list[str] = Field(default=[], description="actores y lugares del evento, tal como los nombra la nota")


class Timeline(BaseModel):
    events: list[Event]


class Editorial(BaseModel):
    tone: str
    framing: str
    sentiment: float = Field(ge=-1, le=1)
    missing_angles: list[str]
    follow_up_questions: list[str]
    sources_cited: list[str]


class Figure(BaseModel):
    text: str = Field(description="fragmento literal de la nota donde está la cifra")
    paragraph_index: int
    value: float
    value_min: float | None = None
    value_max: float | None = None
    unit: Literal["percent", "ars", "usd", "count", "points", "goals", "other"]
    indicator: str
    period: str | None = Field(default=None, description="ISO 8601 parcial: 2026, 2026-10, 2026-10-26")
    source: str | None = Field(default=None, description="quién da la cifra, tal como lo nombra la nota; null si es dato propio")
    kind: Literal["observed", "projection", "change", "target"]
    subject: str | None = None


class Figures(BaseModel):
    figures: list[Figure]


NODES: dict[str, type[BaseModel]] = {
    "entities": Entities,
    "claims": Claims,
    "timeline": Timeline,
    "editorial": Editorial,
    "figures": Figures,
}
