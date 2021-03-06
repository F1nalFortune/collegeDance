import React, { Component } from 'react';
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import { handleLogin } from '../actions/auth';
import { connect } from 'react-redux';

class Login extends Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.dispatch(handleLogin(email, password, this.props.history))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return(
<div>
  <div className="container">
    <div className="row">
      <Segment className="col s12 m8 l8 offset-l2" basic>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              autoFocus
              required
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    </div>
  </div>


</div>
    )
  }
}

export default connect()(Login);