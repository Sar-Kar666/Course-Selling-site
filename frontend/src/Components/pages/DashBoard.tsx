
import '../../App.css'
import { Button } from '../Button'
import { Courses } from '../Courses'

import { Text } from '../Text'
import { AuroraBackground } from '../ui/AuroraBackground'
import { HeroText } from '../HeroText'
import { CourseIcon } from '../../icons/CourseIcon'
import { CourseIconFourth } from '../../icons/CourseIconFourth'
import { Link } from 'react-router-dom'


export function DashBoard() {

 
  return <div className='bg-gray-100 h-full top-0 left-0'>
    

    <div className=' pr-5 pl-5 sm:pr-40 sm:pl-40'>
      <div className='pt-6  '>
      
        <AuroraBackground children={<HeroText/>}  className='rounded-md h-80 w-full  sm:min-w-100 sm:h-100'/>
      </div>
      
      <Text />

      <div className=' grid grid-cols-1  pt-4 gap-6 sm:grid sm:grid-cols-2 sm:gap-5  md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-3 lg:gap-6 xl:grid xl:grid-cols-4 xl:gap-6'>
       
        <Courses image={<CourseIcon />} title={"Solana Bootcamp"} price={1299} details={"by SOLANA"}
         />

        <Courses image={<CourseIconFourth/>} title={"Solana "} price={1299} details={"by SOLANA"} />

         <Courses image={<CourseIcon />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />

        <Courses image={<CourseIconFourth />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />



      </div>
     
      <div className='flex justify-evenly'>
      </div>
      <div className='pt-10 pb-10 flex justify-center '>
        <Link to={"/courses"}><Button variant={"secondary"} title={"Load More..."} /></Link>
        
      </div>

    </div>
 
 
  </div>
}



