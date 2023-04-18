import React from "react";
import { useRouter } from 'next/navigation'

import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "@/utils/firebase/app";

function Login() {
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    const [user, loading] = useAuthState(auth)

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result.user)
    }

    const signInWithGithub = async () => {
        const result = await signInWithPopup(auth, githubProvider)
        console.log(result.user)
    }

    if (loading) {
        return <div>Loading</div>
    }

    if (user) {
        return (
            <>
                <h1>Welcome {user.displayName}</h1>
                <button onClick={() => auth.signOut()}>Logout</button>

            </>


        )
    }

    return (
        <>
            <div className={"flex flex-col gap-8"}>

                <button onClick={signInWithGoogle}>Login With Google</button>
                <button onClick={signInWithGithub}>Login with Github</button>

            </div>
        </>
    )
}

export default Login;