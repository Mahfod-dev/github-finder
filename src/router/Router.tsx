import { BrowserRouter, Route,Routes } from "react-router-dom"
import RootLayout from "./RootLayout"
import { NotFound,HomePage,AboutPage,UserDetail } from "../pages"

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="/user/:login" element={<UserDetail/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default Router