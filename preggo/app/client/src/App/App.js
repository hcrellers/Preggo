import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ContentItem from '../../component/ContentItem';


//GET request to server from client
axios.get('http://localhost:8000/api/', {
  
})
.then(response => {
  
})
.catch(error => {

});

//POST request to server from client
axios.post('http://localhost:8000/api/', {
  
})
.then(response => {
  
})
.catch(error => {

});

//PUT request to server from client
axios.put('http://localhost:8000/api/', {
  
})
.then(response => {
  
})
.catch(error => {

});

//DELETE request to server from client
axios.delete('http://localhost:8000/api/', {
  
})
.then(response => {
  
})
.catch(error => {

});

class App extends Component {
  render() {
    return (
      <div>
        <ContentItem />
      </div>
    );
  }
}

export default App;