import React from 'react';
import { shallow, render } from 'enzyme';
import Avatar from './Avatar';

test('Avatar should exists', function() {
  const avatar = shallow(<Avatar />);

  expect(avatar).toBeDefined;
});

test('Avatar should contain the src image', () => {
  const avatar = render(<Avatar src="myAvatarUrl" />);

  expect(avatar.attr('src')).toEqual('myAvatarUrl');
});

it('should contain buh as alt', () => {
  const avatar = render(<Avatar alt="buh" />);

  expect(avatar.attr('alt')).toEqual('buh');
});
