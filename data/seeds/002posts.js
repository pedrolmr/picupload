
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          title: 'I died my hair!',
          image: 'https://exsecratus.com/wp-content/uploads/parser/mens-blue-hair-1.jpg',
          description: 'description here',
          user_id: 1
        },
        {
          title: 'Feeling down...',
          image: 'https://i.ytimg.com/vi/4DY7htuJWG8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAlBicBVicTrI2UZcdmC_HgPDDlRQ',
          description: 'description here......',
          user_id: 1
        },
        {
          title: 'THE TRUTH!',
          image: 'https://i.ytimg.com/vi/X7mM_-Is-W8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCBwy-hDWEwsXYQ58LbHXwUbAb7Ug',
          description: 'description here......!!!',
          user_id: 1
        },

        {
          title: 'The last hope for my channel', 
          image: 'https://i.ytimg.com/vi/ygGb3N_Nko4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCtSHz0a-TvXIkjMJOtv1huPpwYCg',
          description: 'description here...',
          user_id: 2
        },
        {
          title: 'How long will I keep doing Youtube? QnA',
          image: 'https://i.ytimg.com/vi/ggsqvFsgoKk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCSP0XFZ07j-HKle-WwQZ9iyaaq0A',
          description: 'description here...!!!!!!!!!!!!',
          user_id: 2
        },

        {
          title: 'I won 9.3 trillion dollars (not clickbait)', 
          image: 'http://www.gstatic.com/tv/thumb/v22vodart/170620/p170620_v_v8_al.jpg', 
          description: 'description here!!!',
          user_id: 3
        }

      ]);
    });
};
