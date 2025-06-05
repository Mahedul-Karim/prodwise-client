import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const Login = () => {
  return (
    <main className="grid sm:grid-cols-[1fr_0.7fr] lg:grid-cols-[1fr_0.5fr] h-[100dvh] overflow-clip">
      <div className="bg-background hidden sm:grid place-items-center">
        <img
          src="/login.png"
          alt=""
          className="max-h-[600px] w-full object-contain"
        />
      </div>
      <aside>
        <LoginForm />
      </aside>
    </main>
  );
};

export default Login;
