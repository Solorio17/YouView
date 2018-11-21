import React from 'react';
import { shallow, mount } from 'enzyme';
import SignUp from '../SignUp';

describe("Sign Up Form", () => {
    it("doesn't crash", () => {
        shallow(<SignUp />);
    });

    let shallowSignUp, mountedSignUp;

    beforeEach( () => {
        shallowSignUp = shallow(<SignUp/>);
        mountedSignUp = mount(<SignUp/>);
    });

    it("includes a form", () => {
        let form = shallowSignUp.find('form');
        expect(form.length).toBe(1);
    });

    it("includes a submit button", () => {
        let button = shallowSignUp.find('button');
        expect(button.length).toBe(1);
    });

    it('renders the EmailInput component', ()=>{
        let EmailInput = shallowSignUp.find('EmailInput');
        expect(EmailInput.length).toBe(1);
    });
});