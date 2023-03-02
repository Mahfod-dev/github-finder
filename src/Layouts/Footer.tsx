import {memo} from 'react'

export const Footer =memo(() => {

    const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>

        <div>
            CopyRight &copy; {footerYear} Github App
        </div>

    </footer>
  )
})