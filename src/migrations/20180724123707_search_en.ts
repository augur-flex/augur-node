import * as Knex from "knex";

exports.up = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTableIfExists("search_en").then((): PromiseLike<any> => {
    return knex.schema.raw(`CREATE VIRTUAL TABLE search_en USING fts4(marketId, content)`);
  });
};

exports.down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTableIfExists("search_en");
};
