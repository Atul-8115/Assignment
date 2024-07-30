
import { useState } from 'react'
import './App.css'
import DisplayItems from './Components/displayItems'
import DisplayEachElement from './Components/displayEachElement'

function App() {
  const [item, setItem] = useState('')
  const [itemList, setItemList] = useState([])

  const handleChange = (e) => {
     setItem(e.target.value)
  }

  const handleSubmit = () => {
    setItemList((prev) => [...prev,item])
    setItem(" ")
  }

  const handleDelete = (index) => {
    setItemList(itemList.filter((_,i) => i !== index))
  }
  return (
    <div className='w-[100vw] h-[100vh] bg-slate-700 flex flex-col'>
      <div className='flex items-start justify-center mx-auto flex-col gap-2'>
          <input
            value={item}
            type='text'
            name='itemName'
            placeholder='Enter your item name'
            className='mt-5 bg-slate-300 text-lg'
            onChange={handleChange}
          />
          <button 
              className='bg-yellow-700 ml-5'
              onClick={handleSubmit}
          >Add Item</button>

      </div>

      {/* Displaying Component */}

      <h2 className='text-white text-xl mt-5'>Item Lists</h2>
      <div className=''>
      {
        itemList.map((ele,index) => (
            <DisplayEachElement key = {index} element = {ele} index = {index} del = {() => handleDelete(index)}/>
        ))
      }
    </div>
    </div>
  )
}

export default App
