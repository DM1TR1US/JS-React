import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getStatus, setUserProfile, updateStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.js';
import { compose } from 'redux';
import { profileAPI } from '../../api/api.js';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.loggedId;

    profileAPI.getProfile(userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      });

    this.props.getStatus(userId);
  }


  render() {
    return (

      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />

    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  loggedId: state.auth.userId,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, { setUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);