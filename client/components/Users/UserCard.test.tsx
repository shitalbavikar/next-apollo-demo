import * as React from 'react';
import * as enzyme from 'enzyme';
import {render} from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {UserCard} from './UserCard';

const adapter = new Adapter();
enzyme.configure({adapter});

const mockUserInfo = {
      "id": "0",
      "firstName": "Fabiola",
      "lastName": "Bins",
      "address": "430 Brett Creek\nWest Hardy, DC 60461",
      "email": "Schmitt.Nellie@yahoo.com",
      "phone": "450-921-8625"
    };
    const UserCardComponent = shallow(<UserCard userInfo={mockUserInfo}/>);
    test('should render User Card', () => {
        console.log(UserCardComponent.find('div'));
        expect(UserCardComponent.find('div'));
    });

