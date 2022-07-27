import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  size?: "small" | "large";
  label: string;
  onClick?: () => void;
}

// function Button({ label, size, ...props }: ButtonProps) {
//     return (
//         <Styled.Button size="small">
//           <div className="button" role="button" {...props}>
//             {label}
//           </div>
//         </Styled.Button>
//       );
// }

export const Button = ({
    label,
    size = 'small',
    ...props
}: ButtonProps) => {
    return (
        <Styled.Button className="ButtonContainer" size="small">
          <button className="button" type="button" {...props}>
            {label}
          </button>
        </Styled.Button>
      );
}

const Styled = {
    Button: styled.button<{ size: "small" | "large" }>`
      /* display: flex; */
      /* justify-content: center; */
      /* align-items: center; */
      width: ${({ size }) => (size === "small" ? "148px" : "176px")};
      /* border-bottom: 1px solid #fff; */
      .button {
        padding: 11px 0;
        cursor: pointer;
        color: #fff;
        text-align: center;
        font-family: JejuMyeongjo;
        font-size: 14px;
      }
    `,
};