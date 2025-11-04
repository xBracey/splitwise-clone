import { useState } from "react";
import { Button } from "../Button";
import { RegisterBox } from "./RegisterBox";
import { LoginBox } from "./LoginBox";

const LoginRegisterBox = () => {
  const [isLogin, setIsLogin] = useState(true);

  const onSwitchLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg-contessa-700 flex flex-col gap-6 overflow-hidden rounded-md p-6 text-white md:min-w-[600px]">
      <h2 className="text-center text-2xl">{isLogin ? "Login" : "Register"}</h2>

      {isLogin ? <LoginBox /> : <RegisterBox />}

      <div className="bg-cashmere-600 -mx-6 -mb-6 flex items-center justify-center gap-4 p-4">
        <p>
          {isLogin
            ? `Haven't got an account, register here`
            : "Already got an account, login here"}
        </p>

        <Button
          onClick={onSwitchLoginRegister}
          className="bg-peach-yellow-300 hover:bg-peach-yellow-100 text-contessa-900"
        >
          {isLogin ? "Register" : "Login"}
        </Button>
      </div>
    </div>
  );
};

export default LoginRegisterBox;
