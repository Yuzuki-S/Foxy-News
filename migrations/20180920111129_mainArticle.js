exports.up = function(knex, Promise) {
  return knex.schema.createTable('mainArticle', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('article')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('mainArticle')
};