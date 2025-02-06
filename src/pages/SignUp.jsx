import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUsers = { name, email, password }
        console.log(newUsers)
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast('Succesfully sign in')
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                toast('Not sign in, try again!')
            })
        
    }
  return (
    <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Sign up</h1>
      <form noValidate="" onSubmit={handleRegister} action="" className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            User name
          </label>
          <input
            type="text"
            name="name"
            id="username"
            placeholder="User name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            User email
          </label>
          <input
            type="email"
            name="email"
            id="username"
            placeholder="User email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required
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
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required
          />
        </div>
        <button className="block w-full p-3 text-center bg-blue-600 hover:bg-green-700 transition duration-500 font-semibold text-white rounded-sm dark:text-gray-50 dark:bg-violet-600">
          Sign up
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
         Have an account?
        <a
          rel="noopener noreferrer"
          href="/login"
          className="underline dark:text-gray-800"
        >
          Log in
        </a>
      </p>
    </div>
  );
};

export default SignUp;
