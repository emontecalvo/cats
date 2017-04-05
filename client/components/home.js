import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() { 
    if (this.props.showEdit2) {
      return <div><NewEdit /></div>
    }
    else if (this.props.showFacts) {
      return (
          <div>
            <div>
              <h3>CAT FACTS</h3>
          </div>
        )   
    } else {

    }

    return (
      <div>
        <h3>CAT FACTS!</h3>

        <button className="btn" onClick={ () => this.buttonCombo() }>Click me to see some cat factoids!</button>
      </div>
    )
  }

}



export default connect((state, props) => ({

}))(Home);