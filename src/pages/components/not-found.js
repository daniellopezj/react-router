import React, { PureComponent } from "react";
import "./generic-page.css";
class PagenotFound extends PureComponent {
    handleBeforePage =()=>{
        this.props.history.goBack();
        // this.props.history.go(-2); regresa dos paginas
    }
    handleRandomVideo =()=>{
        const random = Math.round( Math.random()*(10-1)+1);
        this.props.history.push(`/videos?id=${random}`);
    }
    handleNextPage =()=>{
        this.props.history.goForward();
    }
    render() {
    return (
      <div className="Page NorFound">
        <h1>404</h1>
        <h1 className="SadFace">:(</h1>
        <h2>No hemos encontrado la pagina que buscabas.</h2>
        <button className="Button" onClick={this.handleBeforePage}>
          Go to before Route
        </button>
        <button className="Button" onClick={this.handleRandomVideo}>
          Random Video
        </button>
        <button className="Button" onClick={this.handleNextPage}>
          Go to next Route
        </button>
      </div>
    );
  }
}

export default PagenotFound;
