import React from 'react'

export default function About(fromRouteData) {
    console.log('id:',fromRouteData)
    return (
        <div>
             <h2>About Page</h2>
             <h3>{fromRouteData.match.params.id}</h3>
        </div>
    )
}
