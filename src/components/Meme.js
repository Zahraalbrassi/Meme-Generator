import React from 'react'
import memeData from '../memeData'
function Meme() {
  const [memeImage, setMemeImage]= React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"

  })

  const [allMemeImages, setAllMemeImages]  = React.useState(memeData)

    

    function getmemeimage(){
const memesArray = allMemeImages.data.memes
const randomNumber =Math.floor(Math.random() * memesArray.length)
 //url = memesArray[randomNumber].url
       // console.log(randomNumber)
       const url =memesArray[randomNumber].url
        setMemeImage (prevMemeImage =>({
          ...prevMemeImage,
          randomImage: url 
        }))
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
        <img src={memeImage.randomImage}  className="meme--image"/>
    </main>
    </div>
  )
}

export default Meme