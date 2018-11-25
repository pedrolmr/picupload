
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', post => {
      post.increments()
      post.string('title', 120)
      post.text('image')
      post.text('description')

      post
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
};
