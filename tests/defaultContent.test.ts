import { test } from "node:test";
import { strict as assert } from "node:assert";
import { defaultHomeContent, defaultSobreContent } from "../src/data/defaultContent";

test("Sofia Zanforlin é coordenadora no Início e no Sobre", () => {
  assert.equal(defaultHomeContent.equipe.members.find((member) => member.name.includes("Sofia Zanforlin"))?.role, "Coordenadora");
  assert.equal(defaultSobreContent.coordenacao.members.find((member) => member.name.includes("Sofia Zanforlin"))?.role, "Coordenadora");
});

test("Carolina Leite é coordenadora no Início e no Sobre", () => {
  assert.equal(defaultHomeContent.equipe.members.find((member) => member.name.includes("Carolina Leite"))?.role, "Coordenadora");
  assert.equal(defaultSobreContent.coordenacao.members.find((member) => member.name.includes("Carolina Leite"))?.role, "Coordenadora");
});