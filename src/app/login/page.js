'use client'
import {signIn} from "next-auth/react";
import { useState } from "react";
import Image from 'next/image';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);


  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    await signIn('credentials',{email, password});
    setLoginInProgress(false); 
  }

  
  return (
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
        <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            disabled={loginInProgress}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            name="password"
            disabled={loginInProgress}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button disabled={loginInProgress} type="submit">Login</button>
          <div className="my-4 text-center text-gray-500">
            or login with provider
          </div>
          <button  className="flex items-center gap-4 justify-center">
            <Image src={'/google.png'} alt={''} width={24} height={32} />
            Login with google
          </button>
        </form>
      </section>
    );
  }
