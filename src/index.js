import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import Error from './Error'


class App extends React.Component{
  state = {lat: null,errorMessage: ''}  
 
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude,}),
      error => this.setState({errorMessage: error.message,})
    );
  };
  renderContent(){
    if (this.state.errorMessage && !this.state.lat){
      return <div><Error message={this.state.errorMessage}/></div>
    };
    if (!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat} />
      }
    return <div><Loader message="Waiting for location access . . ."/></div>
  };
  render(){
    return <div>{this.renderContent()}</div>
  };
};

ReactDOM.render(<App />, document.getElementById("root"));