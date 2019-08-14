import React, { Component } from 'react'
import queryString from 'query-string'

class comp extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.location.search) // Retorna el valor en raw del query string
        this.values = queryString.parse(this.props.location.search) // Al instalar e importar query-string, lo pasamos a objeto

    }

    values = undefined


    render() {

        return (

            <div>
                <h3>Los valores de la query string para un componente de clase son {this.values.from} y {this.values.to}</h3>
            </div>
        )
    }

}

export default comp
