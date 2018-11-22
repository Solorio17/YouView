import React from 'react';
import { shallow, mount } from 'enzyme';
import EmailInput from '../EmailInput';

describe("Email Input", () => {
    it("doesn't crash", () => {
        shallow(<EmailInput />);
    });

    let shallow_wrapper, mounted_wrapper;
    beforeEach( () => {
        shallow_wrapper = shallow(<EmailInput/>);
        mounted_wrapper = mount(<EmailInput/>);
    });

    it("includes email label", () => {
        let email_label = shallow_wrapper.find("label[htmlFor='Email']");
        expect(email_label.length).toBe(1);
    });

    it("includes email input", () => {
        let email_input = shallow_wrapper.find("input");
        expect(email_input.length).toBe(1);
    });

    it('checks for empty input', ()=>{
        let email_input = mounted_wrapper.find('input');
        email_input.simulate('focus');
        email_input.simulate('blur');
        expect(email_input.instance().className).toEqual('form-control is-invalid');
    });

    it("checks input value onChange", () => {
        let email_input = mounted_wrapper.find("input");
        email_input.simulate('change', {target: {value:"she knows"}});
        expect(email_input.instance().value).toEqual("she knows");
    });

    it("checks state value based on input onChange", () => {
        let email_input = shallow_wrapper.find("input");
        email_input.simulate('change', { target: {value: "Jello"}});
        shallow_wrapper.update();
        
        expect(shallow_wrapper.find("input").props().value).toEqual("Jello");
        expect(shallow_wrapper.state('email')).toEqual("Jello");
    });

    it("checks for the wrong value on the input", () => {
        let email_input = mounted_wrapper.find('input');
        email_input.simulate('change', {target: {value: 'asd@.com'}});
        email_input.simulate('blur');

        expect(email_input.instance().value).toEqual('asd@.com');
        expect(email_input.instance().className).toEqual('form-control is-invalid');
    });

});