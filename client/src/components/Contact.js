import React from 'react';
import { Header } from 'semantic-ui-react';
import ContactForm from './ContactForm';
import $ from 'jquery';





class Contact extends React.Component{
  state = {
    fields: {},
  }

  onSubmit = fields => {
    this.setState({ fields });
    console.log("App comp got: ", fields)
    const array = [];
    array.push(fields);
    console.log(array);

  };

  submit = (values) => {
    console.log(values);
  }


  render(){
    return(
        <div>
        <Header textAlign="center" as="h1" className="title style">Contact</Header>
        <ContactForm 
          id="myForm" 
          onSubmit=
          {fields => this.onSubmit(fields)}
           />
          <p id="datas">
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>    
    )
  }

}

export default Contact;
