import React from 'react'
import '../App.css'
import Typed from 'react-typed';
export default function AboutMe() {
    return (
        <div className="box">
            <div className="about">
                <p className="animated fadeInDown">18 yo</p>
                <p className="animated fadeInDown">IT Student</p>
                <p className="animated fadeInUp">Cracow</p>
                <p className="animated fadeInUp">Mobile apps</p>
                <p className="animated fadeInUp">Web apps</p>
                <p className="animated fadeInUp">Scripts</p>
                <p className="animated fadeInUp">Gamedev</p>
            </div>


        </div>
    )
}

const typed = {
    float: 'left',
}