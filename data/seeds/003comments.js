
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          content: 'Why did you do it??',
          post_id: 1
        },
        {
          content: 'It looks nice',
          post_id: 1
        },

        {
          content: 'I hope you feel better...',
          post_id: 2
        },
        {
          content: 'Keep your head up!',
          post_id: 2
        },

        {
          content: 'Can\'t believe it',
          post_id: 3
        },
        {
          content: 'NICE!!!!!!!!!',
          post_id: 3
        },

        {
          content: 'LOLOLOLOL',
          post_id: 4
        },
        {
          content: 'cool video',
          post_id: 4
        },

        {
          content: 'You are not funny!',
          post_id: 4
        },
        {
          content: 'I love the editing',
          post_id: 4
        },

        {
          content: 'You will last only 2 months!',
          post_id: 5
        },
        {
          content: 'Why am I subscribed to this channel',
          post_id: 5
        },

        {
          content: 'It is not your money!!!',
          post_id: 6
        },
        {
          content: 'Your dad gave you that money!!!!!!!',
          post_id: 6
        },
      ]);
    });
};
