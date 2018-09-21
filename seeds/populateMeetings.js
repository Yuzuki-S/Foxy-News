exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetings')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('meetings').insert([
        {
          id: 1,
          meeting_name: 'symesharr',
          time: Date.now(),
          duration_seconds: 360,
          attendees: 3,
          cost: 300.0
        },
        {
          id: 2,
          meeting_name: 'harrsymes',
          time: Date.now(),
          duration_seconds: 160,
          attendees: 5,
          cost: 450.0
        }
      ]);
    });
};
