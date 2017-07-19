import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MessageRow from './MessageRow.js'

it( 'renders defaults', () => {

	const wrapper = shallow(<MessageRow text={ 'Hello World' }
          postedDate={ '2016-10-25T04:45:47.802339Z' }
          key={ '1' } />);


	const COLS_IN_ROW = 2

	expect( wrapper.find( 'td' ).length ).toEqual( COLS_IN_ROW );
	expect( wrapper.contains( <td>Hello World</td> ))
		.toEqual(true)
})
