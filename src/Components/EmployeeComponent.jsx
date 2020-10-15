import React, { Component, Fragment } from 'react'
import faker from 'faker/locale/en_IND';
import EmployeeList from './EmployeeList';
class EmployeeComponent extends Component {
    state = { 
        employeeData: [
            {
                emp_id: 1,
                emp_photo : faker.image.avatar(),
                emp_name: 'mani',
                emp_dob: new Date('1996-04-21'),
                emp_salary: 300000,
                emp_designation: "java developer",
                emp_education: 'BE',
                emp_city: 'Mysore',
                emp_gender : 'Male'
            },
            {
                emp_id: 2,
                 emp_photo : faker.image.avatar(),
                emp_name: 'arun',
                emp_dob: new Date('1995-04-21'),
                emp_salary: 400000,
                emp_designation: "Nodejs developer",
                emp_education: 'BTECH',
                emp_city: 'Mandya',
                emp_gender : 'Male'
                
            },
            {
                emp_id: 3,
                emp_photo : faker.image.avatar(),
                emp_name: 'sonali',
                emp_dob: new Date('1997-04-21'),
                emp_salary: 300000,
                emp_designation: "React developer",
                emp_education: 'BTECH',
                emp_city: 'Bangalore',
                emp_gender : 'Female'
            }
        ]
     }
    render() { 
        return ( 
            <Fragment>
                <EmployeeList employeeData={this.state.employeeData} />
            </Fragment>
         );
    }
}
 
export default EmployeeComponent;