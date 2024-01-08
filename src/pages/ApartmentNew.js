// import React, { useState } from "react";
// import { Form, FormGroup, Label, Input, Button } from "reactstrap"
// import { useNavigate } from "react-router-dom";

// const [currentApt, setCurrentApt] = useState({
//     street: currentApt.street,
//     unit: currentApt.unit,
//     city: currentApt.city,
//     state: currentApt.state,
//     square_footage: currentApt.square_footage,
//     price: currentApt.price,
//     bedrooms: currentApt.bedrooms,
//     bathrooms: currentApt.bathrooms,
//     pets: currentApt.pets,
//     image: currentApt.image,
//     user_id: currentUser.id
//   })

//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         setNewApartment({...newApartment, [e.target.name]: e.target.value})
//     }
//     console.log("newApartment", newApartment)

//     const handleSubmit = () => {
//         createApartment(newApartment)
//         navigate("/apartments")
//     }

// return (
//     <>
//         <h2 className="add-an-apartment">Add an Apartment</h2>
//         <Form className="new-apartment-form">
//             <FormGroup>
//                 <Label for="street">
//                     street
//                 </Label>
//                 <Input id="street" street="street" placeholder="Place Apartment street here" type="text" onChange={handleChange} value={newApartment.street}/>
//             </FormGroup>
//             <FormGroup>
//                 <Label for="unit">
//                     unit
//                 </Label>
//                 <Input id="unit" name="unit" placeholder="Place Apartment unit here" type="text" onChange={handleChange} value={newApartment.unit}/>
//             </FormGroup>
//             <FormGroup>
//                 <Label for="city">
//                     city
//                 </Label>
//                 <Input id="city" name="city" placeholder="Place your city here" type="text" onChange={handleChange} value={newApartment.city}/>
//             </FormGroup>
//             <FormGroup>
//                 <Label for="state">
//                     state
//                 </Label>
//                 <Input id="state" name="state" placeholder="Place your state here" type="text" onChange={handleChange} value={newApartment.state}
//                 />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="square_footage">
//                     square_footage
//                 </Label>
//                 <Input id="square_footage" name="square_footage" placeholder="Place your square_footage here" type="text" onChange={handleChange} value={newApartment.square_footage}
//                 />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="price">
//                     price
//                 </Label>
//                 <Input id="price" name="price" placeholder="Place your price here" type="text" onChange={handleChange} value={newApartment.price}
//                 />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="state">
//                     state
//                 </Label>
//                 <Input id="state" name="state" placeholder="Place your state here" type="text" onChange={handleChange} value={newApartment.state}
//                 />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="state">
//                     state
//                 </Label>
//                 <Input id="state" name="state" placeholder="Place your state here" type="text" onChange={handleChange} value={newApartment.state}
//                 />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="state">
//                     state
//                 </Label>
//                 <Input id="state" name="state" placeholder="Place your state here" type="text" onChange={handleChange} value={newApartment.state}
//                 />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="state">
//                     state
//                 </Label>
//                 <Input id="state" name="state" placeholder="Place your state here" type="text" onChange={handleChange} value={newApartment.state}
//                 />
//             </FormGroup>
//             < Button onClick={handleSubmit} name="submit">
//                 Submit
//             </Button>
//         </Form>
//     </>
//     )
// }


// export default ApartmentNew