import React, {useState} from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentEdit from "./pages/ApartmentEdit"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockApartments from "./mockApartments.js"
import mockUsers from "./mockUsers.js"
import './App.css';
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import SignUp from "./pages/SignUp"


const App = () => {

  const [currentUser, setCurrentUser] = useState(null)
  console.log(currentUser);
  const [apartments, setApartments] = useState([])

  const url = "http://localhost:3000"
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


  return (
    <>
    <Header signup={signup}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apartments" element={<ApartmentIndex />} />
      <Route path="/apartmentsshow" element={<ApartmentShow />} />
      <Route path="/apartmentsnew" element={<ApartmentNew />} />
      <Route path="/apartmentsedit" element={<ApartmentEdit />} />
      <Route path="/myapartments" element={<ApartmentProtectedIndex />} />
      <Route path="/signup" element={<SignUp signup={signup} />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
