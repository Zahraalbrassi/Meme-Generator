import React from 'react'
import memeData from '../memeData'
function Meme() {
  const [memeImage, setMemeImage]= React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"

  })
  function handelChange(event){
const {name,value}= event.target
setMemeImage (prevMemeImage => {
  return{
  
    ...prevMemeImage,
  [name] : value}
})
  }


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
            name='topText'
            onChange={handelChange}
            value={memeImage.topText}
             />
            <input
            className='form--input'
            type='text' 
            placeholder='Bottom Text'
            name='bottomText'
            onChange={handelChange}
            value={memeImage.bottomText}
            
            />
            <button className='form--button'
            onClick={getmemeimage}
             >Get a New meme image 🖼</button>
        </div>
        <div className='meme'>
        <img src={memeImage.randomImage}  className="meme--image"/>
        <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
                </div>
    </main>
    </div>
  )
}

export default Meme