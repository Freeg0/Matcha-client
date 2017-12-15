import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../app.css';

const Home = () => {
    return (
        <div>
            <h1>{this.props.user.username}</h1>
        </div>
    );
}

const mapStateToProps = ({ auth }) => {
    const { user } = auth;
    return { user };
};

export default connect(mapStateToProps, {
})(Home);