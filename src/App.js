import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Memes from './components/Memes';
import React from 'react';
import Meme from './components/Meme'
import Count from './components/Count';
import Star from './components/Star';
import Head from './components/Head';
import Body from './components/Body';
import boxes from './components/boxes';
import Box from './components/Box';
import Joke from './components/Joke';
import jokeData from './jokeData';
import Forms from './components/Forms';
import SignUp from './components/SignUp';
import WindowTracker from './components/WindowTracker';



function App() {
  
 
  return (
    <div  >
    <Header />
    <Meme />
     </div>
  );
}
 export default App;
  //const [show, setShow] = React.useState(true)
  //function toggle(){
   // console.log("logged")
    //setShow(prevShow => !prevShow)
  //}
  
 //<button   onClick={toggle}>
 //Toggle WindowTracker
//</button>
//{show }
 //const jokeElement = jokeData.map(joke =>{
  //return(
  //<Joke 
 //key={joke.id}
 //setup={joke.setup}
 //punchLine={joke.punchline}
 // />
  //)
//})
 //const [massages, setMassages] = React.useState(["a","b"])
  //{
    //massages.length==0 ?<h1> 
     // you're all Coguht up </h1>
     // : 
     // <h1>You have {massages.length} unread {massages.length >1 ? " massages": " massage"}</h1>
  //}
//}
//const [squares, setSquares]= React.useState(boxes)

 
//function toggle(id) {
  //setSquares(prevSquares => {
      //return prevSquares.map((square) => {
          //return square.id === id ? {...square, on: !square.on} : square
      //})
  //})
//}

//const squareElements = squares.map(square => (
 // <Box 
      //key={square.id} 
      //on={square.on} 
      //toggle={() => toggle(square.id)}
  ///>
//))

//const [contect, setContect]= React.useState({
  //firstName:"John",
  //lastName:"Doe",
  //Image:"user.jpg",
 // Phone: '0917504269',

  //email: 'johndoe@gmail.com',
  //isFavorite: true
//})
 
//function toggleFavorite(){
  //setContect(prevContect => {
 // return {
//...prevContect,
//isFavorite : ! prevContect.isFavorite
 // }

 // })
//}
//<img className='card--image' src={`../images/${contect.Image}`}  />
//<Star  isFilled ={contect.isFavorite} handeleClick={toggleFavorite}/>
  //<h2>{contect.firstName} {contect.lastName}</h2>
  //<p>{contect.Phone}</p>
     //<p>{contect.email}</p>
//const [contect, setContect] = React.useState({
  //firstName : "John",
  //lastName : "Doe",
  //phone:"09655522225",
  //Email:"johndoe@gmail,com",
  //isFavorite: false


//})
//let starIcon = ( contect.isFavorite == true)? "star-filled.png" : "star-empty.png"
 //function toggleFavorite(){
//setContect(prevContect =>{
  //return{
    //...prevContect,
    //isFavorite: ! prevContect.isFavorite
  //}
//})
//}
//<main>
//<article className='card'>
 // <img src='./images/user.jpg'  className='card--image'/>

//<div className="card--info">

//<img src= {`../images/${starIcon}`} className='card--fav' onClick={toggleFavorite} />
 // <h2> {contect.firstName} {contect.lastName}</h2>
 // <p className='card--contect'> {contect.phone}</p>
  //<p className='card--contect'> {contect.Email}</p>
//</div>
 //</article>
//</main>

//const [thingsArray, setThingsArray] = React.useState(["Thing 1","Thing 2"])
 
 //function addThings(){
 //setThingsArray(prevThingsArray => {
  // return [...prevThingsArray, `Thing ${prevThingsArray.length +1}`]
 //})
 //}
 
//const thingsEleament = thingsArray.map(thing=> <p key={thing}> {thing}</p>)
//<button onClick={addThings}>AddItems</button>
//{thingsEleament}

//const [isGoingOut, setIsGoingOut] = React.useState(true);
 
  //function changeMind(){
   // setIsGoingOut (prevState => !prevState)}
//<h1 className="state--title">Do I feel like going out tonight?</h1>
//<div onClick={changeMind} className="state--value">
    //<h1>{(isGoingOut== true) ? 'Yes': 'No'}</h1>

     //<button onClick={addItem}>Add Item</button>
//{thingsEleament} 
//const thingsArray = ["thing1" ,"thing2"]
//const thingsEleament = thingsArray.map(thing => <p key={thing}>{thing}</p>)
   //function addItem(){
     //const newThingsText =`thing ${thingsArray.length + 1}`
     //thingsArray.push(newThingsText)
     //console.log(thingsArray)
   //}
 //const [count,setCount]=useState(0)
 //function add(){
   //setCount(prevCount=>prevCount+1)
 //}
 //function subtract(){
//setCount(prevCount=>prevCount-1)
 //}

 // <div className='counter' >
 //<button className='counter--minus' onClick={subtract} >-</button>
//<div className='counter--count'>
//<h1>{count}</h1></div>
 //<button className='counter--plus' onClick={add}>+
 
 //</button>
 
   // </div>