import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';

describe('<EmployeeRow />', () => {
    let wrapper;
    beforeEach(()=> {
        const employee = {
            username: 'johndoe',
            email: 'john.doe@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            admin: true
        }

        wrapper = shallow(<EmployeeRow employee={employee}/>)
    })

    it('should render values as expected', () => {
        expect(wrapper.find('td')).toHaveLength(5)
        expect(wrapper.find('td').at(0).text()).toEqual('johndoe')
    })
});
