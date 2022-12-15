/** @jsxImportSource @emotion/react */

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Nav: React.FC<Props> = (props) => {
  const { className, children } = props;

  return (
    <nav
      className={className}
      css={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "60px",
        borderBottom: "1px solid black",
        padding: "0px 20px",
        backgroundColor: "white",
      }}
    >
      {children}
    </nav>
  );
};

export default Nav;
