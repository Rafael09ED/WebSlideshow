import React from 'react'
import data from "../data/mediaList.json";

class MediaBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state = data;
        this.state.imageUrl = "";
        this.state.running = true;
        this.randomTime = this.randomTime.bind(this);
        this.selectRandomPicture = this.selectRandomPicture.bind(this);
    }

    componentDidMount() {
        this.randomTime();
        document.addEventListener('keyup',
            (event) => {
                if (event.key === 'ArrowRight') {
                    clearTimeout(this.timeout);
                    this.randomTime();
                }
            });
    }

    randomTime() {
        if (!this.state.running) return;
        this.selectRandomPicture();
        let randTime = (Math.random() * (this.state.max - this.state.min + 1) + this.state.min) * 1000;
        this.timeout = setTimeout(this.randomTime, randTime);
    }

    selectRandomPicture() {
        let list = this.state.imageUrlList;
        let index = Math.floor(Math.random() * list.length);
        this.setState({imageUrl: list[index]});
        console.log(list[index]);
    }

    render() {
        let image = this.state.imageUrl;
        if (image == null)
            return <h2>No image loaded</h2>;
        return (
            <div id="slideshowArea">
                <div className="container">
                    <img src={image} alt="" className="image"/>
                </div>
            </div>
        );
    }
}

export default MediaBackground
//fs: https://codepen.io/brianhaferkamp/pen/jGXoZK
//rnd: https://codepen.io/Ruegen/pen/oYpEbm