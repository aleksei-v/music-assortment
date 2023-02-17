
import React from 'react'


const Dropdown = ({options, changed, selectedValue}) => {


    const dropdownChanged = e => {
        changed(e.target.value)
    }

  return (
      <>
          <select value={selectedValue} onChange={dropdownChanged}>
              {options.map((item, idx) => <option key={idx} value={item.id}>{item.name}</option>)}
          </select>

      </>
  )
}

export default Dropdown