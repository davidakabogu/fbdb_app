import { useContext, useState } from "react";
import axios from "axios";
import { Link, Navigate} from "react-router-dom";
import { UserContext } from "../UserContext.jsx";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const {data} = await axios.post("/login", { email, password });
      setUser(data);
      alert("Login Successful");
      setRedirect(true);
    } catch (e) {
      alert("Login Failed");
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mt-32">

        {/* Login Form */}
        <h1 className="text-4xl text-center mb-4">Login to your account</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500 ">
            Don&apos;t have an acconut ?
            <Link className="underline text-black ml-1" to={"/register"}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
