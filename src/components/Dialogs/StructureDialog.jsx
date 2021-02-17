import React from 'react';
import DialogNames from './Dialog/Dialog';
import s from './StructureDialog.module.css';
import MessageContainer from './Message/MessageContainer';
import DialogContainer from './Dialog/DialogContainer';


const StructureDialog = (props) => {

  

  return (
    <div className={s.Container}>

      <DialogContainer />
      <MessageContainer />

    </div>
  );
}

export default StructureDialog;