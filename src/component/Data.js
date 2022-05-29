import React, { createContext, useState } from 'react'
export const praveen=createContext()
const Data = (props) => {
    const [name,setName]=useState([{

        "Title1" : " Catch waves an adventure guide",
        "Description1":"Gujarat is vastly underrated and it's a mystery to us why the region in more well-",
        "CategoryName1"  : "Bollywood",
        "PublishedDate1" : "January 15 2022",
        "image1"        :"https://wallpapercave.com/wp/mXXyO8i.jpg",
        "BlogContent1"   : "The film will also star Priyanka Chopra and Alia Bhatt in the lead roles along with Katrina Kaif",
        "Likes1"         : "1000K"

    },
    {
   
    "Title" : " Justin Bieber to perform in New Delhi on October 18",
    "CategoryName"  : "Hollywood",
    "PublishedDate" : "January 15 2022",
    "Image2"    : "https://th.bing.com/th/id/OIP.HrSVxdGolso3nXX2JLguCQHaEK?pid=ImgDet&rs=1",
    "BlogContent"   : "Pop star Justin Bieber is set to bring his Justice World Tour to New Delhi on October 18,",
    "Likes1"         : "100K",
    },
    
   {
    "Title" : " Justin Bieber to perform in New Delhi on October 18",
    "CategoryName3"  : "Technology",
    "PublishedDate3" : "June 15 2022",
    "ImageAsset3"    : "https://www.thewowstyle.com/wp-content/uploads/2020/01/Implementing-New-Technology.jpg",
    "BlogContent3"   : "Technology is the use of scientific knowledge for practical purposes or applications, cally,",
    "Likes1"         : "100K",
   
  
     }])
  return (
    <praveen.Provider value={[name,setName]}>
      {props.children}
    </praveen.Provider>
  )
}

export default Data