export const UsersSearchGrid = ({children}:{children:React.ReactNode})=>{

    return (

        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                {children}
            </div>
         </div>
    

    )


}