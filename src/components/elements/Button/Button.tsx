interface ButtonElementProps {
  classname?: string;
  children: React.ReactNode;
  onclick?: () => void;
}

const ButtonElement: React.FC<ButtonElementProps> = (props) => {
  return (
    <>
      <button
        type="button"
        className={`${
          props.classname ? props.classname : 'btn-primary btn-outline btn '
        }`}
        onClick={props.onclick}
      >
        {props.children}
      </button>
    </>
  );
};

export default ButtonElement;
