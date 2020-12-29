import React from 'react';
import '../App.css'

function BlueFooter(){
    return(
        <footer className="blueFooter">
            <span className="left">
            <i class="fas fa-code-branch"></i> master* <i class="far fa-times-circle"></i> 0 <i class="fas fa-exclamation-triangle"></i> 0 
                </span>
                
                <span className="right">
                Ln 1, Col 8 &nbsp; Spaces:1&nbsp;&nbsp; &nbsp;&nbsp; UTF-8 &nbsp;&nbsp; &nbsp;LF&nbsp; &nbsp;&nbsp; JavaScript &nbsp; 
                <i class="far fa-bell"></i>
                </span>
        </footer>
    );
}

export default BlueFooter