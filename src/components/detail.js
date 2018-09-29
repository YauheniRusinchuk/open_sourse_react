import React from 'react';


class Detail extends React.Component {
  render(){
    return(
      <div>
        <h1> {this.props.match.params.ct} </h1>
      </div>
    );
  }
}

export default Detail;
