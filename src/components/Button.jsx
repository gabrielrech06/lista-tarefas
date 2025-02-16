const Button = (props) => {
  return (
    <button {...props} className="bg-neutral-500 p-2 rounded-md text-white">
      {props.children}
    </button>
  );
};

export default Button;
