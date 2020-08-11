import React from 'react'

export default function Banner({ banner, children }) {
    return (
        <div className={banner}>
            {children}
        </div>
    )
}
Banner.defaultProps = { banner: "defaultBanner" }