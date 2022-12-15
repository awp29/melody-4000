/** @jsxImportSource @emotion/react */

import { darken } from "polished";

interface Props {
  className?: string;
  children: React.ReactNode;

  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PrimaryButton: React.FC<Props> = (props) => {
  const { className, children, onClick } = props;

  return (
    <button
      className={className}
      css={{
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "12px 16px",
        fontSize: "16px",
        "&: hover": {
          backgroundColor: "#6941C6",
        },
        "&:active": {
          backgroundColor: darken(0.1, "#6941C6"),
        },
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
