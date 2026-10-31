from pathlib import Path

import anthropic
from pydantic import BaseModel

MODEL = "claude-opus-5-5"
PROMPTS = Path(__file__).parent / "prompts"

client = anthropic.AsyncAnthropic()


def load_prompt(node: str, niche: str | None) -> str:
    for folder in (niche, "default"):
        p = PROMPTS / (folder or "default") / f"{node}.md"
        if p.exists():
            return p.read_text()
    raise FileNotFoundError(f"no prompt for node {node}")


async def extract[T: BaseModel](node: str, niche: str | None, text: str, schema: type[T]) -> T:
    r = await client.messages.parse(
        model=MODEL,
        max_tokens=16000,
        system=load_prompt(node, niche),
        messages=[{"role": "user", "content": text}],
        output_format=schema,
    )
    if r.stop_reason == "refusal":
        raise RuntimeError(f"refused: {r.stop_details}")
    return r.parsed_output
