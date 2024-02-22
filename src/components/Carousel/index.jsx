import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Cookies from "js-cookie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carosel = ()=>{
  const [Urls , setUrls] = useState('');
  useEffect(()=>{
    const fetchUrls = async ()=>{
        const url = 'https://apis.ccbp.in/restaurants-list/offers'
        const token = Cookies.get('token')
        const options = {
          method:'GET',
          headers:{
            'Content-Type':'Application/json',
            'Accept':'Application/json',
            'Authorization':`Bearer ${token}`
          }
        }
        try{
          const response = await fetch(url , options)
          const data = await response.json()
          if(response.ok){
         
          setUrls(data.offers)
          }
          else{
            console.log('error : ' , data.error_msg)
          }
        }
        catch(e){
          console.log('Error in fetching' , e)
        }
        
    }
    fetchUrls();

  } ,[])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className=" w-10/12 md:w-2/4 m-auto" {...settings}>
      
     
       
          {Urls===''?<h3 className="text-center">Offer </h3>:<img className="h-40  " src={Urls[0].image_url} alt='offer 1' />}
        
   
     
          {Urls===''?<h3>Offer </h3>:<img className="h-40 m-auto" src={Urls[1].image_url} alt='offer 2' />}
      
    
     
          {Urls===''?<h3>Offer </h3>:<img className="h-40 m-auto" src={Urls[2].image_url} alt='offer 3' />}
         
   
     
          {Urls===''?<h3>Offer </h3>:<img className="h-40 m-auto" src={Urls[3].image_url} alt='offer 4' />}
        
    
     
    </Slider>
  );
}

export default Carosel



