import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';


test("correctly renders header component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});