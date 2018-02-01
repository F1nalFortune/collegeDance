import React from 'react';

class ContactForm extends React.Component{
  state = { 
    firstName: '',
    email: '',
    comment: '',
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    const { firstName, email, comment } = this.state;

    this.setState({
      firstName: '',
      email: '',
      comment: '',
    });

  }

  render() {
    return (
      <form 
        id="myForm" 
        className="ui form" 
      >
        <input
          name="firstName" 
          placeholder='First Name' 
          value={this.state.firstName} 
          onChange={e => this.change(e)}
          />
        <div className="field">
          <input 
            name="email"
            placeholder='Email' 
            value={this.state.email} 
            onChange={e => this.change(e)}
            />
        </div>
        <textarea 
          name="comment"
          placeholder='Reason for Contact' 
          value={this.state.comment} 
          onChange={e => this.change(e)}
          />
        <button type="submit" onClick={e => this.onSubmit(e)}>Submitzor</button>
      </form>
    );
  }
}

export default ContactForm;