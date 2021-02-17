import React from 'react';
import { connect } from 'react-redux';
import store from '../../../redux/reduxStore';
import DialogNames from './Dialog';

/*
const DialogContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          return <DialogNames messages={store.getState().messagesInfo} />
        }
      }
    </StoreContext.Consumer>);
}
*/


let mapStateToProps = (state = store.getState()) => {
  return{
    messages: state.messagesInfo
  };
}

// let mapDispatchToProps = (dispatch) => {
//   return{
//     send: () => {dispatch(addMessageCreator())},
//     updateTextArea: (text) => {dispatch(updateTextAreaActionCreator(text))},

//   };
// }

const DialogContainer = connect(mapStateToProps)(DialogNames);

export default DialogContainer;