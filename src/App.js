import React, { Component } from 'react';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import data from "./images.json";



class App extends Component {
state = {
data,
score: 0,
images: []
}

handleClickEvent = () => {
    this.shuffle();
}

shuffle = () => {
    let shuffledImages = this.state.data;
    shuffledImages = shuffledImages.sort(() => Math.random() - 0.42);

    this.setState({
        images: shuffledImages
    })
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
