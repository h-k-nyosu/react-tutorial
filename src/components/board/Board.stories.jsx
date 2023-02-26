import React from 'react';

import { Board } from './Board';

export default {
    title: 'components/Board',
    component: Board,
};

const Template = (args) => <Board {...args} />;

export const Case1 = Template.bind({});
Case1.args = {
    squares: Array(9).fill(null),
    onClick: () => console.log('clicked'),
};

export const Case2 = Template.bind({});
Case2.args = {
    squares: ['X', 'O', null, null, null, null, null, null, null],
    onClick: () => console.log('clicked'),
};

export const Case3 = Template.bind({});
Case3.args = {
    squares: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
    onClick: () => console.log('clicked'),
};

export const Case4 = Template.bind({});
Case4.args = {
    squares: ['X', 'O', '△', 'X', 'O', '△', 'X', 'O', '△'],
    onClick: () => console.log('clicked'),
};

export const Case5 = Template.bind({});
Case5.args = {
    squares: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    onClick: () => console.log('clicked'),
};

export const Case6 = Template.bind({});
Case6.args = {
    squares: ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    onClick: () => console.log('clicked'),
};

export const Case7 = Template.bind({});
Case7.args = {
    squares: ['△', '△', '△', '△', '△', '△', '△', '△', '△'],
    onClick: () => console.log('clicked'),
};