import React, { Component } from 'react'
import ImprovedCard from './Improved-card'
import AddMovie from './Add-movie'

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true },
                { title: "Star Wars", director: "Rian Johnson", hasOscars: true },
                { title: "Campamento Flippy", director: "Rian Johnson", hasOscars: true },
                { title: "Sharknado 78", director: "Almodóvar", hasOscars: false },
                { title: "Rompe Ralph", director: "Rian Johnson", hasOscars: false },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: true }
            ],
            showOscarAwarded: true
        }
    }


    deleteOneMovie = idx => {

        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(idx, 1)

        this.setState({
            movies: moviesCopy
        })
    }

    addOneMovie = movie => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.push(movie)

        this.setState({
            movies: moviesCopy
        })
    }

    toggleMovies = () => this.setState({ showOscarAwarded: !this.state.showOscarAwarded })


    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.hasOscars === this.state.showOscarAwarded)

        return (

            <div>

                <h3>Añadir película</h3>

                <AddMovie addMovie={this.addOneMovie} />

                <hr></hr>

                <h3>Listado de películas</h3>

                <div className="row">
                    {
                        filteredMovies.map((elm, idx) => {
                            return <ImprovedCard key={idx} {...elm} deleteMovie={() => this.deleteOneMovie(idx)} />
                        })
                    }

                    <button className="btn btn-dark filterMovies" onClick={this.toggleMovies}>
                        {this.state.showOscarAwarded ?
                            ' Mostrar sólo películas sin Oscar' :
                            'Mostrar sólo películas con Oscar'
                        }
                    </button>
                </div>
            </div>

        )
    }
}


export default MoviesList
