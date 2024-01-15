import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { EmailIcon, KeyIcon } from "../../components/Common/Icons/Icons";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900">
      <div className="w-full max-w-md rounded-xl shadow-lg p-5  mx-2">
        <div className="text-center">
          <img
            className="w-20 h-20 mx-auto mb-4"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
            alt="CodeCraft"
          />
          <h1 className="text-white text-3xl font-bold">CodeCraft</h1>
          <span className="text-gray-300">Sign in to your account</span>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleLogin}>
          <Input
            type="email"
            label="Login"
            icon={EmailIcon}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            white
          />
          <Input
            type="password"
            label="Password"
            icon={KeyIcon}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            white
          />
          <Button type="submit" className="w-full py-2 px-4 bg-blue-500 rounded-md text-white text-sm">
            Login
          </Button>

          <div className="text-white">
            <p>Forgot password?</p>
          </div>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
