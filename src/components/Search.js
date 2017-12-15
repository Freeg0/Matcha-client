import React, { Component } from 'react';
import { Grid, Image, Input, Form } from 'semantic-ui-react'

const Profile = () => (
    <div>
    <Input className='searchButton' loading icon='user' iconPosition='left' placeholder='Search...' />
    <Form.Input
            min={100}
            max={5000}
            name='hide'
            onChange={this.handleChange}
            step={100}
            type='range'
    />
    <Input
    size='mini'
    icon='tags'
    iconPosition='left'
    label={{ tag: true, content: 'Filter Tag' }}
    labelPosition='right'
    placeholder='Enter tags'
    />
    <div className='searchResultDiv'>
    <Grid className='searchResult'>
        <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column width={9}>
            Test lalallalalala
        </Grid.Column>
        <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/media-paragraph.png' />
        </Grid.Column>
    </Grid>
    <Grid className='searchResult'>
        <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column width={9}>
            Test sfjqfjqsjkfhdsqfhdlsqfhdklsqhfdlksqfdqs
        </Grid.Column>
        <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/media-paragraph.png' />
        </Grid.Column>
    </Grid>
    <Grid className='searchResult'>
        <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column width={9}>
            Test dsqfdsqfkdqslfhdsqfbdsqhofodsiqfdsqiofqs
        </Grid.Column>
        <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/media-paragraph.png' />
        </Grid.Column>
    </Grid>
    </div>
    </div>
)

export default Profile;