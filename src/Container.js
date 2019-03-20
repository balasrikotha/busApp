import React, { Component } from 'react'
const ApiK = 'AIzaSyAdieiJad-Cvlk9W_e-YqhsLVYb-BzJcOk';
export class Container extends Component {
  render() {
    if(!this.props.loaded){
        return <div>Loading.......</div>
    }
    return (
      <div>Map will go here </div>
    )
  }
}

export default GoogleApiComponent({
    apiKey : ApiK
})(Container)
