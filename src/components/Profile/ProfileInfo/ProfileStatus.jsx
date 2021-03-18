import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  editingChange = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  saveStatus = () => {
    this.props.updateStatus(this.state.status);
    this.editingChange();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onClick={this.editingChange}>{this.props.status || "Set status"}</span>
          </div>
        }
        {this.state.editMode &&
          <div onBlur={this.editingChange}>
            <input onChange={this.onStatusChange} autoFocus value={this.state.status} />
            <button onMouseDown={this.saveStatus}>Save</button>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;