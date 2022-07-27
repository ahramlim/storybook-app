import React from "react";
import { Meta, Story } from "@storybook/react";

import Counter from "./Counter";

// 어떤 이름으로 스토리북에 올릴 것인지, 어떤 설정으로 렌더링할지 정의
export default {
    title: "Components/Counter", //스토리북에 올릴 component폴더 계층 구조
    component: Counter, //스토리를 만들 컴포넌트 이름
} as Meta<typeof Counter>;

const Template: Story = (args) => <Counter {...args} />;

export const Basic = Template.bind({});