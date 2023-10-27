import React, {useState, useEffect} from "react"
import { Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import NotFound from "./pages/NotFound"
import LogIn from "./pages/LogIn"
import './App.css';
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments"



const App = () => {

  const [currentUser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState([])

  const url = "http://localhost:3000"

  const readApartments = () => {
    fetch(`${url}/apartments`)
      .then(response => response.json())
      .then(payload => setApartments(payload))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem("currentUser")
    if(loggedIn) {
      setCurrentUser(JSON.parse(loggedIn))
    }
    readApartments()
  }, [])

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      // store the token
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      localStorage.setItem("currentUser", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }
  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      // store the token
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }
  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token") 
      },
      method: "DELETE"
    })
    .then(payload => {
      localStorage.removeItem("token")
      localStorage.removeItem("currentUser")  
      setCurrentUser(null)
    })
    .catch(error => console.log("log out errors: ", error))
  }
  


  return (
    <>
    <Header currentUser={currentUser} signup={signup} login={login} logout={logout}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp signup={signup} />}/>
      <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />
      <Route path="/apartmentsshow/:id" element={<ApartmentShow apartments={apartments} />} />
      <Route path="/login" element={<LogIn login={login} />} />
      { currentUser && (
        <Route 
          path="/myapartments" 
          element={
            <ApartmentProtectedIndex 
              currentUser={currentUser}
              apartments={apartments}
            />
          } 
        />
      )}
      <Route path="/apartmentsnew" element={<ApartmentNew />} />
      <Route path="/apartmentsedit" element={<ApartmentEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer currentUser={currentUser}/>
    </>
  )
}

export default App;
