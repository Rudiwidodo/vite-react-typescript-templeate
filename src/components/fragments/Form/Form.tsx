type FormMethod = 'POST' | 'GET';

interface FormFragmentProps {
  action: string;
  method: FormMethod;
  onclick: () => void;
  children: React.ReactNode;
}

const FormFragment: React.FC<FormFragmentProps> = (props) => {
  return (
    <>
      <form action={props.action} method={props.method} onClick={props.onclick}>
        {props.children}
      </form>
    </>
  );
};
export default FormFragment;
