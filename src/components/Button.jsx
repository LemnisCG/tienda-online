function Button({ onClick, children, value }) {
  const className = `btn ${value}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
