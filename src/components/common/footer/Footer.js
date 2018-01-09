import React from 'react'

const Footer = () => {
    let currentTime = new Date()

    return (
        <footer>
            <p>Disclaimer: We do not give financial advice. Our videos are for informational purposes only.</p>
            <p>&copy;The Crypto Savages {currentTime.getFullYear()}</p>
        </footer>
    )
}

export default Footer