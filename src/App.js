import React, {Component} from "react";
import SW from "./ShowWeather.js";
const api = {
  key: "275fd0046cf9a01822f8c7f23c316139",
  base :"https://api.openweathermap.org/data/2.5/"
}

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      weather: "",
      query:"",
    };
    this.search=this.search.bind(this);
  }

  search(e){
    fetch(`${api.base}weather?q=${this.CityName.value}&units=metric&appid=${api.key}`)
    .then(res=>res.json())
    .then(result => {
      console.log(result);
    this.setState({
      query:this.CityName.value,
      weather:[result.main.temp,result.main.humidity,result.main.pressure],
    });
  
  });
  e.preventDefault();
  }
  render(){
    return (
      <div className="wrap" >
       <h1 className="heading" ><i class="fas fa-cloud-sun"></i> Search City Weather <br></br>Information</h1>
      <div className="App" > 
      <form>
         <input type="text" ref= { (a)=> this.CityName =a} placeholder=" Enter City Name" ></input> 
         <i onClick={this.search} id="searchbtn" class="fas fa-search"></i>
      </form>
      <SW CN={this.state.query} TEMP={this.state.weather[0]} HMDT={this.state.weather[1]} PRSR={this.state.weather[2]} ></SW>
      </div>
      <p>Copyright 2021,@agdevtrack<br></br>All right reserved</p>
      </div>
    );
  }
}

export default App

/*fetch('https://example.com')
.then(responce=responce.json());
,then(data=console.log(data));  data of json is getting stored in data variable 
<button onClick={this.search} type="submit" >check</button> 
<p> {this.state.query} has temprature {this.state.weather} </p>*/ 