import React,{PureComponent} from 'react';
import './generic-page.css'
class PagenotFound extends PureComponent{
    render(){
        return(
            <div className="Page NorFound">
                <h1>404</h1>
                <h1 className="SadFace">:(</h1>
                <h2>No hemos encontrado la pagina que buscabas.</h2>
            </div>
        )
    }
}

export default PagenotFound;