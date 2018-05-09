import React, {Component} from 'react';
import MediaBackground from './MediaBackground';


class App extends Component {
    render() {
        let background = <MediaBackground/>;
        return (
            <div>
                {background}
            </div>
        );
    }
}

export default App;
