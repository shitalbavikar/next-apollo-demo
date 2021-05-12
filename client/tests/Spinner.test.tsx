import * as React from 'react';
import * as enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Spinner} from '../components/Spinner/Spinner';

const adapter = new Adapter();
enzyme.configure({adapter});

    test('should render Spinner', () => {
        const SpinnerComponent = shallow(<Spinner />);
        expect(SpinnerComponent).toMatchSnapshot();
    });

