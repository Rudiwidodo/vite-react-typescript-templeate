type FormMethod = 'POST' | 'GET';

interface FormFragmentProps {
  action: string;
  method: FormMethod;
  children: React.ReactNode;
}

const FormFragment: React.FC<FormFragmentProps> = (props) => {
  return (
    <>
      <form action={props.action} method={props.method}>
        {props.children}
      </form>
    </>
  );
};
export default FormFragment;
