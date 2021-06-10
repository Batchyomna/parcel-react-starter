
import React from 'react'

// logic here

export const App = () => {
    const isHappy = false

    return (
        isHappy 
            ? <h1>Bonjour, tu es content</h1>
            : <h1>Bonjour, tu n'es pas content</h1>
    )
}