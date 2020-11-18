import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../components/PageNotFound';

test("renders not found page", () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
});