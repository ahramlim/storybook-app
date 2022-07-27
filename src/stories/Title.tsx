import React from "react";

export interface TitleProps {
    /**
   * 보여주고 싶은 텍스트입니다
   */
    text?: string;
}

function Title({ text }: TitleProps) {
    return <h1>{ text }</h1>
}
export default Title;