import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      console.log(auth);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-gray-400 to-indigo-500">
  <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-5 backdrop-blur-md mx-2">
    <div className="text-center">
      <img
        className="w-20 h-20 mx-auto mb-4"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
        alt="Your Company"
      />
      <h1 className="text-white text-3xl font-bold">CodeCraft</h1>
      <span className="text-gray-300">Sign in to your account</span>
    </div>

    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
      <Input
        type="email"
        label="Login"
        icon={MdOutlineAlternateEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="Password"
        icon={FaKey}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white text-sm">
        Login
      </Button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </form>
  </div>
</div>
  );
};

export default Login;
