import React, { Component } from "react";
import Search from "../components/search";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { bindActionCreators } from "redux";

class SearchContainer extends Component {
  state = {
    value: "",
    exitVerification: false,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.input.value, 'submit')
    // fetch(`http://miapi.com/buscar/${this.input.value}`).then((data)=>{
    // })
    this.props.actions.searchAsyncEntities(this.input.value);
  };
  setInputRef = (element) => {
    this.input = element;
  };
  handleInputChange = (event) => {
    this.setState({
      value: event.target.value.replace(" ", "-"),
      exitVerification: !!(event.target.value.length),//igual que operadores ternarios
    });
  };
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
        exitVerification={this.state.exitVerification}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(SearchContainer);
