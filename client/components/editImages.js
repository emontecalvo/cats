import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class editImages extends React.Component {

  constructor(props) {
    super(props);
  }

  editPicPost(comboToEdit) {
    this.props.dispatch(actions.edit_pic_facts(comboToEdit));
  }

  render() {
    return(
          <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              let text = e.target.text.value
              let fact = e.target.fact.value
              this.props.comboToEdit[0].url = text
              this.props.comboToEdit[1] = fact
              this.editPicPost(this.props.comboToEdit)

            }}
          >
        <div className="editArea">
          <img src={this.props.comboToEdit[0].url} className="imgDisplayEdit" />
          <br />
          <textarea rows="1" cols="50" name="text" defaultValue={this.props.comboToEdit[0].url}/>
          <br />
          <textarea rows="4" cols="50" name="fact" defaultValue={this.props.comboToEdit[1]}/>
          <br />
          <button type="submit">
            save
          </button>
        </div>
  </form>
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
}))(editImages);