import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const { signInUser } = useContext(AuthContext)
   const navigate = useNavigate()
  
      const handleLogin = e => {
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          // const newUsers = { email, password }
          // console.log(newUsers)
          signInUser(email, password)
              .then(result => {
                toast('Succesfully Login!')
                  console.log(result.user)
                  navigate('/')
              })
              .catch(error => {
                  console.log(error)
                  toast('Invalid login!', error)
              })
          
      }
  return (
    <div>
      <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form noValidate="" onSubmit={handleLogin} action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              User email
            </label>
            <input
              type="email"
              name="email"
              id="username"
              placeholder="User email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center bg-blue-600 hover:bg-green-700 transition duration-500 font-semibold text-white rounded-sm dark:text-gray-50 dark:bg-violet-600">
            Sign in
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account? 
          <a
            rel="noopener noreferrer"
            href="/signup"
            className="underline text-blue-400 dark:text-gray-800"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
