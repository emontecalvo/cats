import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import Slider from 'react-image-slider';


class sliderMain extends React.Component {

  editPicStart(picPost) {
    this.props.dispatch(actions.edit_pic_start(picPost));
  }

  removePic2Post(picPost) {
    this.props.dispatch(actions.remove_pic_facts(picPost));
  }

	render () {
  	return (
    	<div>
              <Slider images={this.props.picCombo} isInfinite delay={5000}>
                {this.props.picCombo.map((picture, key) => <div key={key}>
                                                              <div>
                                                                <img src={picture[0].url} className="imgDisplay" />
                                                                <p className="factDisplay">{picture[1]}</p>
                                                                <button className="edit" onClick={() => this.editPicStart(picture)}>edit</button>
                                                                <button className="remove" onClick={() => this.removePic2Post(picture)}>remove</button>
                                                              </div>
                                                        </div>)}
               </Slider>
          </div>
        )   
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
}))(sliderMain);