exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('meetings', table => {
    table.increments('id');
    table.string('meeting_name');
    table.timestamp('time');
    table.integer('attendees');
    table.decimal('cost');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('meetings');
};
