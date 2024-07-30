import React from 'react'
import DisplayEachElement from './displayEachElement'

const DisplayItems = ({itemList}) => {

    console.log("Printing itemList -> ", itemList)
  return (
    <div className=''>
      {
        itemList.map((ele,index,itemList) => (
            <DisplayEachElement key = {index} element = {ele} itemList = {itemList} index = {index}/>
        ))
      }
    </div>
  )
}

export default DisplayItems
