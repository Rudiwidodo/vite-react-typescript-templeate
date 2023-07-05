type InputTypes = 'text' | 'email' | 'password' | 'file' | 'number';

interface InputElementProps {
  type: InputTypes;
  classname?: string;
  id: string;
  name: string;
  placeholder: string;
  onchange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  read: boolean;
}

const InputElement: React.FC<InputElementProps> = (props) => {
  return (
    <>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onchange}
        placeholder={props.placeholder}
        readOnly={props.read}
        required={props.required}
        className={`${
          props.classname
            ? props.classname
            : 'input-bordered input-accent input w-full max-w-xs'
        }`}
      />
    </>
  );
};

export default InputElement;
