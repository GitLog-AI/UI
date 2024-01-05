import { Button, Grid, Loading, Badge, StyledInput } from '@nextui-org/react';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import CloudFlareCaptcha from './Captcha';
import { LoginContext } from '@/context/LoginPopup';
import { Checkbox, Divider, Input, Radio, Spacer, Text, useInput } from '@geist-ui/core';
import ArrowRight from '@geist-ui/icons/arrowRight'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FullScreenClose, X } from '@geist-ui/icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "@/utils/firebase/app";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function LoginPopup(props: {}) {
    // State
    const { showLogin, setShowLogin } = useContext(LoginContext);
    const [agreed, setAgreed] = useState(true)
    const [user, loading] = useAuthState(auth)
    const { state: emailState, setState: setEmailState, reset, bindings } = useInput(localStorage.getItem('email') || '');
    const [invalidEmail, setInvalidEmail] = useState(false)

    // Authentication
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, googleProvider)
        // console.log(result.user)
    }
    const signInWithGithub = async () => {
        const result = await signInWithPopup(auth, githubProvider)
        // console.log(result.user)
    }

    const signInWithEmail = async () => {
        // Check correct email
        function isValidEmail(email: string): boolean {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const authURL = (isLocalhost ? 'http://localhost:3000/' : 'https://gitlog.ai')
        const actionCodeSettings = {
            // URL the user will be redirected to after clicking the email link
            url: authURL,
            // This must be true for email link sign-in.
            handleCodeInApp: true,
        };


        if (isValidEmail(emailState)) {
            setInvalidEmail(false)
            sendSignInLinkToEmail(auth, emailState, actionCodeSettings)
                .then(() => {
                    // The link was successfully sent. Inform the user.
                    // Save the email locally so you don't need to ask the user for it again
                    // if they open the link on the same device.
                    localStorage.setItem('email', emailState);
                    toast.info('Check your email for a special link!', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "dark",
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ...
                });
        }
        else {
            setInvalidEmail(true)
        }
    }

    useEffect(() => {
        if (user) {
            setShowLogin(false)
        }
    }, [user])

    return (
        <div className='p-4 fixed inset-0 bg-opacity-70 backdrop-blur-lg flex justify-center items-center' style={{ zIndex: "9999" }}>
            <div className="bg-[#1A1C1E] sm:px-5 px-10 pt-10 rounded-lg shadow-lg flex flex-col relative border-gray-400 text-white">
                <a className="absolute top-4 right-4" onClick={() => { setShowLogin(false) }}>
                    <X />
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        pauseOnHover
                        theme="dark"
                    />
                </a>
                <div className="flex flex-col gap-2 items-center text-center mb-4">

                    <h1 className="text-5xl font-bold">Login to <span className="text-blue-500">GitLog</span></h1>
                    <p className="text-2xl">Join now!  <span className="mx-2"> 🚀</span></p>

                    <div className="flex flex-col sm:flex-row gap-2 py-4">
                        <Button onClick={signInWithGithub} className="bg-[#2C2E34] hover:bg-blue-500 rounded-xl font-semibold text-lg align-center"><span className="flex flex-row gap-4"><FaGithub className="text-2xl" /> GitHub </span></Button>
                        <Button onClick={signInWithGoogle} className="bg-[#2C2E34] hover:bg-blue-500 rounded-xl font-semibold text-lg align-center"><span className="flex flex-row gap-4"> <FaGoogle className="text-2xl" /> Google </span></Button>
                    </div>
                    <div className="w-full text-black-200">
                        <Divider type="secondary" />
                    </div>
                    <p className="text-2xl font-semibold text-white">Email</p>
                    <div className="relative  w-full h-full text-center sm:text-left text-white">
                        <Input {...bindings} width={"100%"} style={{ "color": "white" }} type={invalidEmail ? "error" : "secondary"} placeholder="..." scale={5 / 3} />
                        <div className="absolute top-0 right-1 h-full flex items-center">
                            <a className="cursor-pointer hover:cursor-pointer" onClick={signInWithEmail}><ArrowRight /></a>
                        </div>
                    </div>
                    <div className="pt-4 text-sm">
                        <Radio type={"success"} checked={agreed} onChange={() => { setAgreed(!agreed) }}>
                            <div className="text-xs sm:text-md">
                                Accept <a className="underline" href={"/terms"}>Terms</a> and <a className="underline" href="/privacy">Privacy Policy</a>
                            </div>
                        </Radio>
                    </div>
                </div>
            </div>
        </div >

    );



}

// server side 

export async function getServerSideProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}
