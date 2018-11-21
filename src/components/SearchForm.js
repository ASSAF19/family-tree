import React, { Component } from 'react';
@inject("store")
@observer

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
      render() {
        return (
          <div className='app'>
            <h1>hihi</h1>
            <button onClick={this.togglePopup.bind(this)}>show popup</button>
            <button onClick={() => {alert('woooooooot?');}}>try me when popup is open</button>
            <p>Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br /></p>
            {this.state.showPopup ? 
              <Popup
                text='Close Me'
                closePopup={this.togglePopup.bind(this)}
              />
              : null
            }
          </div>
        );
      }
    };
    
    
    @observable username = "";
    
    inputChange = ()=>{
        this.username [e.target.name] = e.target.value;

    }
    submitForm = ()=>{

    }


    render() {
        return (
            <div className="container">
                <input type="text" name="Username" onChange={this.inputChange} value={this.username} />
                <input type="button" onClick={this.submitForm} value="submit" /> submit </div>
        );
    }
}




