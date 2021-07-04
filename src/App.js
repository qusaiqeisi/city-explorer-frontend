'uesr strict'
import React, { Component } from 'react'
const axios = require('axios').default;
// import Image from 
// import Alert from 'react-bootstrap/Alert'


export class App extends Component {

  constructor(){
    super();
    this.state ={
    displayName : '',
    lat_:'',
    lon_:'',
    // show:false

    }
    }
    handelDisplyName=(e)=>{
      this.setState({
        displayName:e.target.value
      })
    }
  submiter =async(e)=>{ 
    e.preventDefault();
    try{
      let axiosrespons = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.026b4205f25fc66edc3ea21cf7c30c05&q=${this.state.displayName}&format=json`)
      console.log(axiosrespons);
      let lat=axiosrespons.data[0].lat;
      let lon=axiosrespons.data[0].lon;
      console.log(lat);
      console.log(lon);
     console.log(this.state.displayName);
      this.setState({
        displayName:axiosrespons.data[0].display_name,
        lat_:axiosrespons.data[0].lat,
        lon_:axiosrespons.data[0].lon,
        // show:! this.state.show
      })

      // console.log(lat);

    }catch(error){
      this.setState(({
        error:'map not found '
      }))
    }
  }
  

  render() {
    return (
      <div>
        <h1>hello from the other said</h1>

        <form  onSubmit={(e)=>{this.submiter(e)}}>
          <input type="text"  placeholder="amman" onChange={(e)=>{this.handelDisplyName(e)}}/>
          <button >search</button>
        </form>
        <br/>
        <br/>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.3bda2d41fe8feadb05c61e7ffe7be774&center=${this.state.lat_},${this.state.lon_}&zoom=12&format=png`} width="400px" height="400px" />
        <h2>city-name:{this.state.displayName}</h2>
        <h2>latitude:{this.state.lat_}</h2>
        <h2>longitude:{this.state.lon_}</h2>
      </div>
      
    )
  }
}

export default App
