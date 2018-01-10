import React from 'react'

const Footer = () => {
    let currentTime = new Date()

    return (
        <footer>
            <p>Disclaimer: The information provided from The Crypto Savages is for informational purposes only. It should not be considered legal or financial advice. You should consult with an attorney or other professional to determine what may be the best for your individual needs.
                The Crypto Savages do not make any guarantee or other promise as to any results that may be obtained from using our content. No one should make any investment decision without first consulting his or her own financial advisor and conducting his or her own research and due diligence.
            </p>
            <p>&copy;The Crypto Savages {currentTime.getFullYear()}</p>
        </footer>
    )
}

export default Footer