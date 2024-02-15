import  { Component } from 'react';
import axios from 'axios';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'mimama' } })
      .then((res) => {
        console.log(res.data);
        this.setState({
          items: res.data.books,
          DataisLoaded: true,
        });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    console.log(items); 
    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>
        </div>
      );
    else {
      return (
        <div>
          {this.state.items.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <div className='div2'> 
              <img src={item.imageLinks.smallThumbnail} alt="" />
              <p>{item.description}</p>
              </div>
              <h4>{item.authors}</h4>
              <hr />
            </div>
          ))}
        </div>
      );
    }
  }
}
