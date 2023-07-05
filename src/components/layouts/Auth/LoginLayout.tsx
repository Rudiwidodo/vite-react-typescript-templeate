import ButtonElement from '@/components/elements/Button/Button';
import InputElement from '@/components/elements/Input/Input';
import FormFragment from '@/components/fragments/Form/Form';

interface LoginLayoutProps {
  title: string;
}

const LoginLayout: React.FC<LoginLayoutProps> = (props) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-5 font-serif text-3xl font-medium">
            {props.title}
          </h2>
          <FormFragment
            action="#"
            method="POST"
            onclick={() => console.log('ok')}
          >
            <div className="mt-5">
              <InputElement
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                read={false}
                required={true}
                onchange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  console.log(evt.target.value)
                }
              />
            </div>
            <div className="mt-5">
              <InputElement
                type="password"
                id="password"
                name="password"
                placeholder="enter your pssword"
                read={false}
                required={true}
                onchange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  console.log(evt.target.value)
                }
              />
            </div>
            <div className="card-actions mt-5 justify-end">
              <ButtonElement>Login</ButtonElement>
            </div>
          </FormFragment>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
