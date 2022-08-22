import {_, createElement, refreshCSS} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library@master/domFunctions.js';
import User from './class/User.js';

let users = [];
const form = _('#userRegister');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    let 
        nameUser = _('#registerName').value,
        ageUser = _('#registerAge').value,
        newUser = new User({
            name: nameUser,
            age: ageUser
        })
    ;

    const clearInputs = () => {
        _('#registerName').value = '';
        _('#registerAge').value = '';
    };
    
    users.push(newUser);
    newUser.printUserInfo('.user__list');
    clearInputs();
});