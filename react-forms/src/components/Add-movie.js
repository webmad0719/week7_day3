import React, { Component } from 'react';

class AddMovie extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            director: '',
            hasOscars: false,
            IMDbRating: '',
            genre: 'Seleccionar'
        }
    }


    handleFormSubmit = e => {
        e.preventDefault()

        // Validaciones
        if (this.state.genre === 'Seleccionar') {
            alert("Selecciona un género, merluzo")
            return
        }

        this.props.addMovie(this.state)
        this.setState({
            title: '',
            director: '',
            hasOscars: false,
            IMDbRating: '',
            genre: 'Seleccionar'
        })
    }

    /*
    handleTitleInput = e => this.setState({ title: e.target.value })
    handleDirectorInput = e => this.setState({ director: e.target.value })
    handleOscarsInput = e => this.setState({ hasOscars: e.target.checked })
    handleRatingInput = e => this.setState({ IMDbRating: e.target.value })
    */

    handleInputChange = e => {


        let { name, value } = e.target

        if (name === 'hasOscars') {
            value = e.target.checked
        }

        this.setState({ [name]: value })
    }



    render() {
        return (

            <section>

                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Título: <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Director: <br />
                        <input type="text" name="director" value={this.state.director} onChange={this.handleInputChange} />
                    </label>

                    <label>
                        ¿Oscar?: <br />
                        <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Puntuación: <br />
                        <input type="text" name="IMDbRating" value={this.state.IMDbRating} onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Género:
                        <select name="genre" onChange={this.handleInputChange} value={this.state.genre}>
                            <option value={this.state.genre}>{this.state.genre}</option>
                            <option value="Terror">Terror</option>
                            <option value="Drama">Drama</option>
                            <option value="Comedia">Comedia</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </label>

                    <input type="submit" value="Enviar" />
                </form>

            </section>

        )
    }
}

export default AddMovie;