import React from 'react'
import memeData from '../memeData'

function Memes() {
    const [memeImage, setMemeImage]= React.useState("")

    let url
    function getmemeimage(){
const memesArray = memeData.data.memes
const randomNumber =Math.floor(Math.random * memesArray.length)
 //url = memesArray[randomNumber].url
        //console.log(randomNumber)
        setMemeImage(memesArray[randomNumber].url) 
    }
  return (
    <div>
        <main>
        <div  className='form'>
            <input 
            className='form--input'
            type='text' 
            placeholder='Top Text'
             />
            <input
            className='form--input'
            type='text' 
            placeholder='Bottom Text'
            />
            <button className='form--button'
            onClick={getmemeimage}
             >Get a New meme image 🖼</button>
        </div>
        <img src={memeImage} />
    </main>
    </div>
  )
}

export default Memes