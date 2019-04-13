import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('<Navigation />', () => {

    let wrapper
    beforeEach(()=>{
        wrapper = shallow(
            <Navigation/>
        )
    })

    it('should render navigation component correctly', () => {
        expect(wrapper).toHaveLength(1)
    })
});