import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const DialogNames = (props) => {

  let chatWith = props.messages.messagesWith.map((val) => {
    return (
      <div className={s.dialog + " " + s.active}>
        <NavLink to={"/messages/" + val.id + "/" + val.name.toLowerCase()}>{val.name}</NavLink>
      </div>
    )
  });
  
  return (
    <div className={s.DialogNames}>
      {chatWith}
    </div>
  );
}

export default DialogNames;