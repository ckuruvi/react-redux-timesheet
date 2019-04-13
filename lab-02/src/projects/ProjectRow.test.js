import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ProjectRow from './ProjectRow';

describe('<ProjectRow />', () => {
    let wrapper;

    beforeEach(() => {
        const project = {
            name: 'NAME',
            description: 'DESCRIPTION'
        };
        wrapper = shallow(<ProjectRow project={project} />);
    });

    it('should instantiate the project row component', () =>{
        expect(wrapper).toHaveLength(1)
    })

    it('should render values into expected calls', () => {
        expect(wrapper.find('td')).toHaveLength(2)
    })

    it('renders correctly', () => {
        const project = {
            name: 'NAME',
            description: 'DESCRIPTION'
        };
        const tree = renderer.create(<ProjectRow project={project} />).toJSON()
        expect(tree).toMatchSnapshot();
    })

});
