
import React from 'react';
import Experience from './Experience';
import Education from './Education';

const about = ({ year }) => {
    return (
        <div>
            <h3>Recibido el año mediante el render de la ruta ({year})</h3>
            <div style={{ width: '40%', float: "left" }}>
                <Education />
            </div>
            <div style={{ width: '60%', float: "right" }}>
                <Experience />
            </div>
        </div>
    )
}

export default about;