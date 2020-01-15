import React, { Component } from 'react';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import data from "./images.json";



class App extends Component {
state = {
data,
score: 0
}

handleClickEvent = () => {
    console.log("you clicked me")
}
render () {
    return (
        <div>
            <Header/>
            <div>
                {this.state.data.map(item => (
                    <ImageCard
                        key={item.id}
                        id={item.id}
                        clicked={this.handleClickEvent}
                        img= {item.img}
                    />
                ))
}
            </div>
        </div>
    );
};


};

export default App;
