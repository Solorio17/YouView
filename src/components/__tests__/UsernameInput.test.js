import React from 'react';
import { shallow, mount } from 'enzyme';
import UsernameInput from '../UsernameInput';

describe('UsernameInput', ()=>{
    it('renders without crashing', ()=>{
        shallow(<UsernameInput/>);
    });

    let shallow_username, mounted_username;

    beforeEach( () => {
        shallow_username = shallow(<UsernameInput/>);
        mounted_username = mount(<UsernameInput/>);
    });

    it('includes a username label', ()=>{
        let username_label = shallow_username.find('label[htmlFor="Username"]');
        expect(username_label.length).toBe(1);
    });

    it('includes a username input', ()=>{
        let username_input = shallow_username.find('input');
        expect(username_input.length).toBe(1);
    });

    it('checks the input value onChange', ()=>{
        let username_input = mounted_username.find('input');
        username_input.simulate('change', {target: {value: 'changing'}});
        expect(username_input.instance().value).toEqual('changing');
    });

    it('checks state value based on input onChange', ()=>{
        let username_input = shallow_username.find("input");
        username_input.simulate('change', { target: {value: "Water"}});
        shallow_username.update();
        
        expect(shallow_username.find("input").props().value).toEqual("Water");
        expect(shallow_username.state('username')).toEqual("Water");
    });

    it('checks for the wrong value on the input', ()=>{
        let username_input = mounted_username.find('input');
        username_input.simulate('change', {target: {value: 'io'}});
        expect(username_input.instance().value).toBe('io');
        expect(username_input.instance().className).toBe('form-control is-invalid');
    });

    it('checks for the correct value on the input', ()=>{
        let username_input = mounted_username.find('input');
        username_input.simulate('change', {target: {value: 'myUsername'}});
        expect(username_input.instance().value).toBe('myUsername');
        expect(username_input.instance().className).toBe('form-control is-valid');
    });

})