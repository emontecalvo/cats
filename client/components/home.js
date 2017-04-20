import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {parseString} from 'xml2js';
import xmlToJson from './xmlToJson';
import SliderMain from './sliderMain';
import EditImages from './editImages';
import NewPic from './newPic';


class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(actions.initialText());
    this.props.dispatch(actions.initialFact());
  }

  buttonCombo() {
    this.props.dispatch(actions.make_combo());
  }

  factSort() {
    this.props.dispatch(actions.sort_facts());
  }

  render() { 
    if (this.props.showEdit) {
      return <div><EditImages /></div>
    }
    else if (this.props.showFacts) {
      return (
          <div>
            <div className="carousel">
              <div className="sidebox">
                <div className="dropdown">
                  <button className="addBtn">add pic</button>
                  <ul className="dropdown-menu">
                    <NewPic />
                  </ul>
                </div>
                <button className="orderBtn" onClick={ () => this.factSort() }>order by short facts</button>
              </div>
                <h3>CAT FACTS</h3>
              <div>
                <SliderMain />
              </div>
            </div>
          </div>
        )
    } else {
        return (
          <div className="intro">
            <p>don't know anything about cats?</p>
            <img src='https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/11055429_1400133086971029_511286067_n.jpg' className="dog"/>
            <br />
            <button className="introBtn" onClick={ () => this.buttonCombo() }>get cat facts!</button>
          </div>
        )
    }
  }
}


export default connect((state, props) => ({
  picText: state.picText,
  picFact: state.picFact,
  picCombo: state.picCombo,
  showFacts: state.showFacts,
  comboToEdit: state.comboToEdit,
  comboToAdd: state.comboToAdd,
  showEdit: state.showEdit
}))(Home);