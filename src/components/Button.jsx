const Button = (props) => {
  return (
    <button {...props} className="bg-neutral-600 hover:bg-neutral-700 text-white rounded-md p-2">
      {props.children}
    </button>
  );
};

export default Button;
