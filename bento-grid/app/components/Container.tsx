import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='container mx-auto p-4 max-w-7xl relative'>
            {children}
        </div>
    )
}

export default Container