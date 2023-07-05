import '@/app/App.css';

import Login from '@/pages/auth/Login';

const App: React.FC = () => {
  return (
    <>
      <div className="flex h-screen w-full min-w-full flex-col items-center justify-center gap-y-3 bg-white">
        <Login />
      </div>
    </>
  );
};

export default App;
