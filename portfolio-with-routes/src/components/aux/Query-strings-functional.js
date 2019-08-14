import React from 'react'
import queryString from 'query-string'

const component = props => {

    console.log(props.location.search) // Retorna el valor en raw del query string
    const values = queryString.parse(props.location.search) // Al instalar e importar query-string, lo pasamos a objeto

    return (

        <div>
            <h3>Los valores de la query string para un componente funcional son {values.from} y {values.to}</h3>
        </div>
    )
}

export default component
