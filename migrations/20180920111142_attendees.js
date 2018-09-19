exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('attendees', table => {
    table.integer('user_id');
    table.integer('meeting_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('attendees');
};
