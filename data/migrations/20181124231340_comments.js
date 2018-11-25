
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', comment => {
      comment.increments()
      comment.string('content', 255)

      comment
      .integer('post_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('posts')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comments');
};
