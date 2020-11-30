import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';


let startLogout, wrapper;

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />)
});

test("correctly renders header component", () => {
    expect(wrapper).toMatchSnapshot();
});

test('calls correct function on click', (done) => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
    done();
});