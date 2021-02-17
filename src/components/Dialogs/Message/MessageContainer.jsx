import React from 'react';
import { connect } from 'react-redux';
import { addMessageCreator, updateTextAreaActionCreator } from '../../../redux/messagesReducer';
import Replicas from './Message';

/*
const MessageContainer = (props) => {

  return (
    <StoreContext.Consumer>
      { (store) => {
          let send = () => {
            store.dispatch(addMessageCreator());
          }

          let updateTextArea = (text) => {
            store.dispatch(updateTextAreaActionCreator(text));
          }
          return <Replicas messages={store.getState().messagesInfo} Send={send} Update={updateTextArea} />
        }
      }
    </StoreContext.Consumer>);
}

*/

let mapStateToProps = (state) => {
  return{
    messageText: state.newMessageText,
  };
}

let mapDispatchToProps = (dispatch) => {
  return{
    send: () => {dispatch(addMessageCreator())},
    update: (text) => {dispatch(updateTextAreaActionCreator(text))},

  };
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Replicas);

export default MessageContainer;