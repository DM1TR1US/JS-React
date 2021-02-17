import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect.js';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId  = this.props.match.params.userId || 2;

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (

      <Profile {...this.props} profile={this.props.profile}/>

    );
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToPropsRedirect = (state) => ({
  isLogged: state.auth.isLogged
})

AuthRedirectComponent = connect(mapStateToPropsRedirect)(AuthRedirectComponent);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);