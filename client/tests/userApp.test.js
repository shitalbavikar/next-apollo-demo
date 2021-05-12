import React from 'react';
import { shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MockedProvider } from '@apollo/react-testing';
import {Users} from '../components/Users/Users';
import { GET_USERS_INFO } from '../lib/queries/getUsersInfo';
enzyme.configure({ adapter: new Adapter()});
const mocks = [
  {
    request: {
      query: GET_USERS_INFO
    },
    result: {
      data: {
          "node": {
            "id": "0",
            "firstName": "Orville",
            "lastName": "Kohler",
            "address": "766 Blick Harbors\nNew Rosie, OH 92693-0883",
            "email": "Gregg.Cassin@yahoo.com",
            "phone": "142-776-5571"
          }
        }
      }
    }
];
describe('userApp', () => {
  it('mock the button click', () => {
    const wrapper =shallow(
      <MockedProvider mocks={mocks} >
            <Users />
      </MockedProvider>
    );

    const mockOnClick = jest.fn();
    const buttonWrapper = shallow(<button onClick={mockOnClick} />);
    buttonWrapper.find('button').simulate('click', 'junk')
    expect(mockOnClick.mock.calls.length).toEqual(1);
     
  });
});