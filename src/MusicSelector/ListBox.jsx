import React from 'react'

const ListBox = ({ items, clicked }) => {
    const onClick = e => {
        e.preventDefault();
        clicked(e.target.id)
    }
  return (
      <div className="col-sm-6 px-0">
          <div className='list-group'>
              {
              items.map(item => 
                  <button
                      key={item.track.id}
                      onClick={onClick}
                      className="list-group-item list-group-item-action list-group-item-light text-center"
                      id={item.track.id}
                  >
                      {item.track.name}
              </button>)
          }
          </div>

    </div>
  )
}

export default ListBox;