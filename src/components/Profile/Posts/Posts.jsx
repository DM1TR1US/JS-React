import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {

  let textArea = React.createRef();

  let onAddPost = () => {
      props.addPost();
      // props.dispatch(addPostActionCreator());
  };

  let updateTextArea = () => {
    let text = textArea.current.value; 
    props.updateTextArea(text);
    // props.dispatch(updateTextAreaActionCreator("post", text));
  };


  let coutPosts = props.posts.map(p => {
    return(
      <div className={s.mainContent__userPosts}>
        <div className={s.user_post}>
          <a href="#">{p.UserName}</a>
          <h2>{p.title}</h2>
          <p>{p.text}</p>

          <div className={s.user_post__reactionBlock}>
            <button className={s.user_post__reaction}>LIKE</button>
            <button className={s.user_post__reaction}>COMMENT</button>
          </div>
        </div>
      </div>
    );
  });

    // <Post UserName={p.UserName} title={p.title} text={p.text} />);

  return (
    <div>
    
      <div>
        <h2>Write new one:</h2>
        <textarea ref={textArea} value={props.text} onChange = {updateTextArea} />
        <button className={s.postButton} onClick={onAddPost}>Post</button>
      </div>

      {coutPosts}
    </div>
  );
}

export default Posts;