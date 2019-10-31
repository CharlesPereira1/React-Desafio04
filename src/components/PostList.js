import React, { Component } from 'React'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Charles Pereira",
          avatar: "http://url-da-imagem.com/imagem.jpg",
        },
        date: "31 Out 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }//,
      // {
      //id: 2
      //restante dos dados de um novo post
      // }
    ]
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
