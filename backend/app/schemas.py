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


class EntityEdge(BaseModel):
    source: str
    target: str
    relation: str
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


class Claims(BaseModel):
    claims: list[Claim]


class Event(BaseModel):
    date: str = Field(description="ISO 8601, parcial permitido: 2024, 2024-03, 2024-03-15")
    precision: Literal["day", "month", "year"]
    title: str
    description: str
    paragraph_index: int


class Timeline(BaseModel):
    events: list[Event]


class Editorial(BaseModel):
    tone: str
    framing: str
    sentiment: float = Field(ge=-1, le=1)
    missing_angles: list[str]
    follow_up_questions: list[str]
    sources_cited: list[str]


NODES: dict[str, type[BaseModel]] = {
    "entities": Entities,
    "claims": Claims,
    "timeline": Timeline,
    "editorial": Editorial,
}
