import React,{useContext} from 'react'
import {praveen} from './Data'

const Bollywood = () => {
  const [name,setName]=useContext(praveen)
  return(
    <React.Fragment>
    <div className='container1'>
    <h1>Bollywood</h1>
    {name.map(item=>
    <img className='image' src={item.image1}  alt=""/>
    )}
    {name.map(item=>
      <h2 className='Title'>{item.Title1}</h2>)}
    </div>
    <div>
    {name.map(item=>
      <h6 className='subtitle'>{item.Description1}</h6>)}
    </div>  
    <div>
    {name.map(item=>
      <h3 className='Month'>{item.PublishedDate1}</h3>)}
    </div>
    
    </React.Fragment>
    
  )
}
export default Bollywood