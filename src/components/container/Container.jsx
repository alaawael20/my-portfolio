import "./Container.css";

const CustomContainer = ({ children, className = "" }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default CustomContainer;
