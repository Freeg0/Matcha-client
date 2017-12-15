import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'

const userInfos = localStorage.getItem('userinfos');
console.log(userInfos);
const extra = (
  <a>
    <Icon name='user' />
    16 Friends <br/>
  Username : xxxx <br/>
  Name : xxxx <br/>
  Surname : xxxx <br/>
  Sex : xxx <br/>
  Orientation : xxx <br/>

    </a>

)


const Profile = () => (
  <Card className='profileCard'
    image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Your Profile'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)

export default Profile;