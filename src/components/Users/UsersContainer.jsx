import React from 'react';
import { connect } from 'react-redux';
import { buttonDisabler, changeFollowed, changePage, getUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersAPI extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (p) => {
    this.props.changePage(p);
    this.props.getUsers(p, this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : <Users usersCount={this.props.usersCount} pageSize={this.props.pageSize}
        currentPage={this.props.currentPage} changeFollowed={this.props.changeFollowed}
        onPageChanged={this.onPageChanged} users={this.props.users}
        buttonsDisabled = {this.props.buttonsDisabled} />}
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    buttonsDisabled: state.usersPage.buttonsDisabled
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     changeFollow: (userId) => { dispatch(changeFollow(userId)) },
//     setUsers: (users) => { dispatch(setUsers(users)) },
//     setUsersCount: (usersCount) => { dispatch(setUsersCount(usersCount)) },
//     changePage: (p) => { dispatch(changePage(p)) },
//     changeFetch: (isFetching) => { dispatch(changeFetch(isFetching)) }
//   }
// }

export default connect(mapStateToProps,
  { changeFollowed, changePage, getUsers}
)(UsersAPI);