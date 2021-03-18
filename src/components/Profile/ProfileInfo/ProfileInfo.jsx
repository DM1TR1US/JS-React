import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  } else {

    let contacts = [];
    for(let key in props.profile.contacts){
      let val = props.profile.contacts[key];
      if(val){
        contacts.push(<li><a href={val} target="_blank">{key}</a></li>)
      }
    }

    return (
      <div className={s.mainContent__userInfo}>

        <div className={s.userHeader}>
          <img className={s.user_wrappers} src="https://contentcoms.co.uk/wp-content/uploads/2017/05/case-study-header-placeholder.png" />
          <img className={s.user_photo} src={props.profile.photos.large} />
          <h1 className={s.user_name}>{props.profile.fullName}</h1>
          <p className={s.user_description}>{props.profile.aboutMe}</p>
          <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
          <ul>
            {contacts}
          </ul>
        </div>

      </div>
    );
  }
}

export default ProfileInfo;