import React from 'react'

export default function OptionSelection({ arrayItems, selectOption }) {
    return <>
        <h1>Use AI for common daily tasks!</h1>

        <div className='grid-main'>
            {arrayItems.map((item) => {
                return (
                    <div key={item.id} className='grid-child' onClick={() => selectOption(item.option)}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </>
}