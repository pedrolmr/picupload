
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'markiplier', description: 'I\'m a gamer'},
        { name: 'Pewdiepie', description: 'I\'m as old as youtube' },
        { name: 'Iron Man', description: 'I\'m part of the avengers'}
      ]);
    });
};
