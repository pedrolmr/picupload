
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', user => {
      user.increments()
      user.string('name', 255)
      user.description('description')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
