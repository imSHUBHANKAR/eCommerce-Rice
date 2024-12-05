import React from 'react'
import CoverPage from './CoverPage'
import Rice from './items/Rice'
import Wheat from './items/Wheat'
import Pulse from './items/Pulse'

function AllProducts() {
  return (
    <div>
        <CoverPage/>
        <Rice/>
        <Wheat/>
        <Pulse/>
    </div>
  )
}

export default AllProducts