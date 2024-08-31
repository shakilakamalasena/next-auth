import { login } from "@/actions";

const LoginForm = () => {
    return (
        <form action={login}>
            <input
                type="text"
                name="username"
                required
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                required
                placeholder="Password"
            />
            <button>Login</button>
        </form>
    );
};

export default LoginForm;
