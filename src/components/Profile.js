import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';
import {  REGISTER_USER_SUCCESS } from '../actions/types';
import {reactLocalStorage} from 'reactjs-localstorage';

const userdata = reactLocalStorage.getObject('user');
console.log('userdata : ', userdata);
const extra = (
  <a>
    <Icon name='user' />
    16 Matchs <br/>
    Name : {userdata.nom} <br/>
    Surname : {userdata.prenom} <br/>
    Sex : {userdata.sex} <br/>
    Orientation : {userdata.orient} <br/>
    </a>
);

const Profile = () => (
  <div>
    <Card className='profileCard'
      image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
      header={userdata.username}
      meta='Your Profile'
      description= {"Votre description : " + userdata.descripion}
      extra={extra}
    />
    <br/>
  </div>
);

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  console.log('user', user);
  return { user };
};

export default connect(mapStateToProps, {}) (Profile);
