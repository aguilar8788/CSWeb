import React from 'react'

const Images = () => {
    return (
        <div className="savages">
            <div className="imageContainer">
                <div className="bio">
                    <img className="savageImage" src={require('../../../images/JT.png')}/>
                    <p>Joe Tynan</p>
                    <p>Infrastructure Analyst</p>
                </div>
                <div className="bio">
                    <img className="savageImage" src={require('../../../images/PA.png')} />
                    <p>Peter Aguilar</p>
                    <p>Freelance web/iOS Developer.</p>
                </div>
                <div className="bio">
                    <img className="savageImage" src={require('../../../images/KV.png')} />
                    <p>Kiril Valtchev</p>
                    <p>Senior Risk Management Analyst</p>
                </div>
            </div>
        </div>
    )
}

export default Images