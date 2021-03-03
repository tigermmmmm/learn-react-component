import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: ['大话西游', "赌神"]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })}
                </ul>
                <button onClick={e => this.addMovies()}>添加电影</button>
            </div>
        );
    }

    addMovies() {
        // this.setState({
        //     movies: [...this.state.movies, "白蛇传"]
        // })
        this.setState({
            movies: ["白蛇传", ...this.state.movies]
        })
    }
}

export default App;