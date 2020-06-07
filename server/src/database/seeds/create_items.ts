import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lâmpada", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Papés e Papelão", image: "papeis-papelao.svg" },
    { title: "Residuos Eletrônicos", image: "eletronico.svg" },
    { title: "Residuos Orgânicos", image: "organicos.svg" },
    { title: "Ôleo de Cozinha", image: "oleo.svg" },
  ]);
}
