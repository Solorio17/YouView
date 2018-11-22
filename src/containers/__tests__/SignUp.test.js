import React from 'react';
import { shallow, mount } from 'enzyme';
import SignUp from '../SignUp';

describe("Sign Up Form", () => {
    it("doesn't crash", () => {
        shallow(<SignUp />);
    });

    let shallow_wrapper, mounted_wrapper;

    beforeEach( () => {
        shallow_wrapper = shallow(<SignUp/>);
        mounted_wrapper = mount(<SignUp/>);
    });

    it("includes a form", () => {
        let form = shallow_wrapper.find('form');
        expect(form.length).toBe(1);
    });

    it("includes a submit button", () => {
        let button = shallow_wrapper.find('button');
        expect(button.length).toBe(1);
    });

    it('renders the EmailInput component', ()=>{
        let EmailInput = shallow_wrapper.find('EmailInput');
        expect(EmailInput.length).toBe(1);
    });
});