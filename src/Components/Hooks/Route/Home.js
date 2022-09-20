import React, { Fragment } from 'react'
// import Empolyee from './Empolyee'

function Home() {
    const Empolyee = [
        {
            id: '01',
            name: 'Yash',
            age: '23',
            sex: 'Male'
        },
        {
            id: '02',
            name: 'Rushabh',
            age: '29',
            sex: 'Male'
        },
        {
            id: '03',
            name: 'Aaddii',
            age: '25',
            sex: 'Male'
        }
    ]
    const handleDelete = (id) => {
        var index = Empolyee.map(function(e){
            return e.id
        }).indexOf(id);

        Empolyee.splice(index,1)
    }
  return (
    <div>
        <table border>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Sex</td>
                    <td>Action</td>
                </tr>
            </thead>

            {
                Empolyee && Empolyee.length > 0 ?
                (
                    Empolyee.map((item , index) => {
                        return(
                            <Fragment key={index}>
                            <tbody>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.sex}</td>
                                    <td><button onClick={() => alert(item.id)}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                                </tr>
                            </tbody>
                            </Fragment>
                        )
                    })
                ) : (
                    "No Data Found"
                )
            }
        </table>
    </div>
  )
}

export default Home