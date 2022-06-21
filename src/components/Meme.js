import React from 'react'
//import memeData from '../memeData'
function Meme() {
  const [memeImage, setMemeImage]= React.useState({
    topText:"",
    bottomText:"",
    randomImage:""

  })
  React.useEffect(function(){
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
 
  },[])
 
  function handelChange(event){
const {name,value}= event.target
setMemeImage (prevMemeImage => {
  return{
  
    ...prevMemeImage,
  [name] : value}
})
  }


  const [allMemeImages, setAllMemeImages]  = React.useState([])

    

    function getmemeimage(){

const randomNumber =Math.floor(Math.random() * allMemeImages.length)
 //url = memesArray[randomNumber].url
       // console.log(randomNumber)
       const url =allMemeImages[randomNumber].url
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