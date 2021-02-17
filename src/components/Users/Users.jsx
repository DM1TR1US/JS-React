import React from 'react';
import { NavLink } from 'react-router-dom';
import { buttonDisabler } from '../../redux/usersReducer';
import s from './Users.module.css';

let Users = (props) => {

  let pagesCount = Math.ceil(props.usersCount / props.pageSize);

  let pages = [];

  let forOut = props.currentPage + 4;

  if (forOut <= pagesCount) {
    for (let i = props.currentPage - 4; i <= forOut; i++) {
      if (i > 0 && i <= pagesCount) {
        pages.push(i);
      }
    }
  }

  return (
    <div className={s.mainContent}>
      <div className={s.pagesNav}>
        {
          pages.map((p) => <span className={props.currentPage === p ? s.pageActive : s.pageDefault} onClick={() => props.onPageChanged(p)}><a href="#">{p}</a></span>)
        }
      </div>
      {
        props.users.map(u =>
          <div className={s.userBlock} key={u.id}>
            <NavLink to={'/profile/' + u.id}>
              <div><img src={u.photos.small} alt = "img" /></div>
            </NavLink>
            <div><p>{u.name}</p><p>From {u.city}, {u.country}</p></div>
            <button disabled={props.buttonsDisabled.includes(u.id)} onClick={() => {u.followed ? props.changeFollowed(u.id, true) : props.changeFollowed(u.id, false) }}>{u.followed ? "Unfollow" : "Follow"}</button>
          </div>
        )
      }
    </div>)
}

export default Users