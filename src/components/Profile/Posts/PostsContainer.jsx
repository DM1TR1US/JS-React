import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateTextAreaActionCreator } from '../../../redux/profileReducer';
import Posts from './Posts';


/*
const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addPost = () => {
          let action = addPostActionCreator();
          store.dispatch(action);
          // props.dispatch(addPostActionCreator());
        };

        let updateTextArea = (text) => {
          let action = updateTextAreaActionCreator(text);
          store.dispatch(action);
        };

        return <Posts updateTextArea={updateTextArea} addPost={addPost} posts={store.getState().profilePage}/>
      }}
    </StoreContext.Consumer>
  );
}
*/

let mapStateToProps = (state) => {
  return{
    posts: state.profilePage.postData,
    text: state.profilePage.newPostText
  };
}

let mapDispatchToProps = (dispatch) => {
  return{
    updateTextArea: (text) => {dispatch(updateTextAreaActionCreator(text))},
    addPost: () => {dispatch(addPostActionCreator())},

  };
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;






