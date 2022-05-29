import React,{useContext} from 'react'
import {praveen} from './Data'

const Technology = () => {
  const [name,setName]=useContext(praveen)
  return (
    <React.Fragment>
    <div><h1>Technology</h1></div>
    {name.map(item=>
      <img className='Techimage' src={item.ImageAsset3} alt="technology"/>)}
    {name.map(item=>
      <h4>{item.BlogContent3}</h4>)}
      {name.map(item=>
       <h2 className='TechTitle'> {item.CategoryName3}</h2>)}
       {name.map(item=><h2 className='Publish'>{item.PublishedDate}</h2>)}
    </React.Fragment>
  )
}

export default Technology