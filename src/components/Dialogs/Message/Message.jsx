import React from 'react';
import s from './Message.module.css';

const Replicas = (props) => {

  let replicas = [
    { author: "author name", word: "user's replica" },
    { author: "author name", word: "user's replica 2" },
    { author: "author name", word: "user's replica 3" }
  ];

  let textArea = React.createRef();

  let onSend = () => {
    // props.dispatch(addMessageCreator());
    props.send()
  }

  let onUpdateTextArea = () => {
    let text = textArea.current.value;
    // props.dispatch(updateTextAreaActionCreator(text));
    props.update(text);
  }


  let messages = replicas.map((val) => {
    return (
      <h2>{val.word}</h2>
    )
  });

  return (
    <div className={s.DialogContent}>
      <div className={s.DialogMessages}>
        {messages}
      </div>

      <div className={s.DialogWriter}>
        <textarea ref={textArea} value={props.messageText} placeholder="Say 'Hi' or some other kind of shit;" onChange={onUpdateTextArea} />
        <button className={s.postButton} onClick={onSend}>Send</button>
      </div>
    </div>
  );
}

export default Replicas;