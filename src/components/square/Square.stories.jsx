import React from 'react';

import { Square } from './Square';

export default {
    title: 'components/Square',
    component: Square,
};

const Template = (args) => <Square {...args} />;

export const Case1 = Template.bind({});
Case1.args = {
    value: 'X',
    onClick: () => console.log('clicked'),
};

export const Case2 = Template.bind({});
Case2.args = {
    value: 'O',
    onClick: () => console.log('clicked'),
};

export const Case3 = Template.bind({});
Case3.args = {
    value: '△',
    onClick: () => console.log('clicked'),
};

export const Case4 = Template.bind({});
Case4.args = {
    value: null,
    onClick: () => console.log('clicked'),
};
