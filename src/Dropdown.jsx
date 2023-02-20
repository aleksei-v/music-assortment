
import React from 'react'


const Dropdown = ({options, changed, selectedValue, label}) => {


    const dropdownChanged = e => {
        changed(e.target.value)
    }

  return (
      <div className='col-sm-4 row form-group px-0'>
          <label className='form-label col-sm-3'>{label}</label>
          <select value={selectedValue} onChange={dropdownChanged} className="form-control form-control-sm col-sm-10">
               <option key={0}>Select...</option>
              {options.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>

      </div>
  )
}

export default Dropdown