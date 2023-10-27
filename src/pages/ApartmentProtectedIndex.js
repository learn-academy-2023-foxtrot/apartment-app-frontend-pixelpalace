import React from "react"
import { CardGroup, Card, CardBody, CardImg, CardTitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom"


const ApartmentProtectedIndex = ({apartments, currentUser}) => {
  const currentApts = apartments.filter(apt => apt.user_id === currentUser.id)
  return (
    <>
      <h2>ProtectedIndex component</h2>
      <main>
        {currentApts?.map((apartment, index) => {
            return(
                  <Card
                    style={{
                      width: '18rem'
                    }}
                    key={index}
                  >
                    <CardImg
                      alt={`profile picture for ${apartment.street}`}
                      src={apartment.image}
                    />
                    <CardBody>
                      <CardTitle tag="h5">
                        {`${apartment.bedrooms} beds and ${apartment.bathrooms} bathrooms in ${apartment.state}`}
                      </CardTitle>
                      <Button>
                        <NavLink 
                          to={`/apartmentsshow/${apartment.id}`} 
                          className="nav-link"
                        >
                          see your apartment
                        </NavLink>
                      </Button>
                      <Button>
                        <NavLink 
                          to={"/apartmentsedit"} 
                          className="nav-link"
                        >
                          Update this property
                        </NavLink>
                       </Button>
                      <Button>
                        Delete this property
                      </Button>
                    </CardBody>
                  </Card>
                  )
          })}
      </main>
    </>
  )
}

export default ApartmentProtectedIndex