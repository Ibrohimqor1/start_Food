import React from 'react'
import One from './one'
import Center from './center/center'
import End from './end'
const Board = () => {
  return (
    <div>
        <div className="row">
            <div className="col-1">
<One/>




            </div>
            <div className="col-8">
<Center/>
            </div>
            <div className="col-3">
<End/>
            </div>
        </div>
    </div>
  )
}

export default Board