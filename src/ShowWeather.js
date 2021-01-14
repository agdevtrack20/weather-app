import React,{Component} from "react";

class ShowWeather extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Weath" >
                <h3> Place (city):  {this.props.CN}<br></br>Temprature(°C): {this.props.TEMP}<br></br> Humidity(g/cm3): {this.props.HMDT} <br></br> Pressure(psi): {this.props.PRSR} </h3>
            </div>

        );
    }
}

export default ShowWeather