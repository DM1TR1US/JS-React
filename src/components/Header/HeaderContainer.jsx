import React from 'react';
import Header from './Header';
import *  as axios from 'axios';
import { changeFetch, setUser } from '../../redux/authReducer';
import Preloader from '../common/Preloader/Preloader';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let { email, id, login } = response.data.data;
                this.props.setUser(email, id, login);
            }
        });
    }

    render() {
        // if (this.props.isFetch) {
            return (
                <Header {...this.props} />
            );
        // } else {
            // return (
                // <Preloader />
            // );
        // }
    }
}

const mapStateToProps = (state) => ({
    isFetch: state.auth.isFetching,
    isLogged: state.auth.isLogged,
    login: state.auth.login
});

export default connect(mapStateToProps, { setUser })(HeaderContainer);