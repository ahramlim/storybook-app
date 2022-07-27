import React from "react";

import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Button } from "./Button2";

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                 <Story/>
            </div>
        )
    ]
} as ComponentMeta<typeof Button>
// 기본 포맷을 정해두고 bind로 제어 
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

  
// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
