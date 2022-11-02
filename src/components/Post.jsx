import React from 'react';
import './Post.scss';

//blocos que será repetido no feed
class Post extends React.Component{
  render() {
    return (
      <article className="post">
        <header className="post__header">
          <div className="user">
            <a href="#" className="user__thumb">
              <img src="assets/img/profiles/yoda/yoda-profile.jpg"/>
            </a>

            <a href="#" className="user__name">Mestre Yoda</a>
          </div>

          <button className="post__context">
            <i className="fas fa-ellipsis-h"/>
          </button>
        </header>

        <figure className="post__figure">
          <img src="assets/img/profiles/yoda/yoda-1.jpg" alt=""/>
        </figure>

        <nav className="post__controls">
          <button 
          className="post__control"
          >
            <i className='far fa-heart' />
          </button>

          <button className="post__control">
            <i className="far fa-comment"/>
            <span className="comments__counter">
              
            </span>
          </button>

          <button className="post__control">
            <i className="far fa-bookmark"/>
          </button>
        </nav>


        
          <div className="post__status">
            <div className="user">
              <a href="#" className="user__thumb">
                <img src="" alt=""/>
              </a>

              <span>
               comentado por <a href="#"> pessoa(s)</a>
            </span>
            </div>
          </div>
       
      </article>
    );
  }
}

export default Post;