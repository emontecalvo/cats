import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class newPic extends React.Component {

  constructor(props) {
        super(props);
        this.addPic = this.addPic.bind(this);
  }

  addPic(comboToAdd) {
    this.props.dispatch(actions.add_pic(comboToAdd));
  }

  render() {
    return(
       <div>
       <div className="form_container">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                let text = e.target.text.value
                let fact = e.target.fact.value
                this.addPic([text, fact])
                e.target.text.value = ''
                e.target.fact.value = ''
              }}
            >

        <input type="text" placeholder="image path / url" name="text" />
        <br />
        <input type="text" placeholder="interesting fact" name="fact" />
        <br />
      <button type="submit">
        post pic
      </button>
    </form>
    </div>
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
}))(newPic);
