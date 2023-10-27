import React from "react"
import { Card, CardBody, CardTitle, CardImg, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentIndex = ({apartments}) => {
  return (
    <>
      <h2>Choose your apartment now!</h2>
      <main>
        
        {apartments?.map((apartment, index) => {
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
                    {`${apartment.bedrooms} beds and ${apartment.bedrooms} bathrooms in ${apartment.state}`}
                  </CardTitle>
                  <Button>
                    <NavLink to={`/apartmentsshow/${apartment.id}`} className="nav-link">
                      See more details
                    </NavLink>
                  </Button>
                </CardBody>
              </Card>

          )
        })}
      </main>
    </>
  )
}

export default ApartmentIndex