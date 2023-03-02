import {Outlet} from 'react-router-dom'
import {Navbar,Footer} from '../Layouts'

export default function RootLayout(){
  return (
    <div className='flex justify-between flex-col h-screen'>
        <Navbar/>
        
        <Outlet/>

        <Footer/>
    </div>
  )
}