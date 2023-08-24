import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"

Outlet

const AuthLayout = () => {
  return (
    <div className='contenido-portada'>
      <Header />
      <div className="contentLayout" >

        <div className="box" >

          <Sidebar />
        </div>
        <main className="box" >
          <Outlet />

        </main>

      </div>
    </div>
  )
}

export default AuthLayout