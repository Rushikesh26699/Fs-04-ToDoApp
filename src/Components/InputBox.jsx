import React from 'react'
// import { GlobalContext } from '../App'
import '../CSS_files/InputBox.css'

const InputBox = ({currList,setCurrList,currValue,setCurrValue}) => {
  // const { currList, setCurrList, currValue, setCurrValue, edit, setEdit } = useContext(GlobalContext)
  // console.log(edit);
  return (
    <>
      <div className="inputdiv">
        <input type="text" name="" id="" value={currValue} onChange={(e) => {
          setCurrValue(e.target.value)
        }} />
          <button onClick={() => {
            if (currValue !== '') {
              setCurrList([...currList, { currValue: currValue, id: `${Date.now()}` }])
              setCurrValue('')
            }

          }}

          >ADD</button>
      </div>
    </>
  )
}

export default InputBox;