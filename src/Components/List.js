import React from 'react'

export default function List(props) {
    const { data, title } = props;
    return (
        <div>
            <h4>{title}</h4>
            {data.map((carItem, index) => {
                return <div className="card" key={index}>
                    <p>Car name:{carItem.name}</p>
                    <p>Car place:{carItem.place}</p>
                    <p>Car price:{carItem.price}</p>
                </div>
            })}
        </div>
    )
}
