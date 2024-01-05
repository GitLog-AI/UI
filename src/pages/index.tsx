import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Typewriter from "typewriter-effect"
import AuthComponent from './components/AuthComponent';
import NavBar from './components/Nav';
import { Badge, Text, useTheme, Card, Row, Button, Link, Loading, gray, Image } from '@nextui-org/react';
import Disclaimer from './components/Disclaimer';
import { useRouter } from 'next/router';
import LoginPopup from './components/LoginPopup';
import { LoginContext } from '@/context/LoginPopup';
import Footer from './components/Footer';
import { auth } from "@/utils/firebase/app";
import { useAuthState, useSignInWithEmailLink } from 'react-firebase-hooks/auth';
import { FaDiscord } from 'react-icons/fa';
import { UserCredential, isSignInWithEmailLink, signInWithEmailLink, getAuth } from 'firebase/auth';
import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
const Globe = dynamic(import('react-globe.gl'), { ssr: false });

export default function Home() {
  // State
  const { isDark, type } = useTheme();
  const { showLogin, setShowLogin } = useContext(LoginContext);
  const [user, loading] = useAuthState(auth)
  const router = useRouter();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const hasAgreedDisclaimer = localStorage.getItem('hasAgreedDisclaimer');
    if (hasAgreedDisclaimer != "true") {
      setDisplay(true);
    }

    if (user) {
      return
    }

    if (isSignInWithEmailLink(auth, window.location.href)) {
      // now in case user clicks the email link on a different device, we will ask for email confirmation
      let email = localStorage.getItem('email');
      if (!email) {
        email = window.prompt('Please provide your email');
      }
      else {
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            // we can get the user from result.user but no need in this case
            console.log(result.user);

          }).catch((err) => {

          })
      }

    }
  }, []);

  return (
    <>

      <div className="h-screen flex flex-col justify-between">
        <Head>
          <title> GitLog | Track your Journey </title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <meta name="description" content="" />
          <meta name="keywords" content=' ' />
        </Head>

        {/* Modals */}

        {display && (
          <div className="disclaimer">
            <Disclaimer setDisplay={setDisplay} />
          </div>
        )}

        {
          showLogin && (
            <LoginPopup />
          )
        }

        {/* Content */}

        <div className='flex flex-col justify-center items-center '>
          <NavBar />


          <div className={"flex flex-col md:flex-row items-center justify-between gap-12 "}>

            {/* Text */}
            <div>
              <div className={"grid gap-8 w-full"}>
                <div className={"m-2 text-center"}>
                  <h5 className={'text-5xl font-extrabold text-blue-500'}> Welcome to GitLog </h5>
                  <p className="font-semibold p-2 text-2xl text-gray-500">
                    AI-Powered Tracking Platform Designed for Developers
                  </p>
                  <Globe
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    backgroundColor='#000000'
                    enablePointerInteraction={true}
                  />
                </div>
              </div>
              <div className="sm:mt-3 lg:mt-2 cursor-pointer    flex flex-column justify-center text-center align-center" onClick={() => { setShowLogin(true) }}>
                <Card css={{
                  // background: "linear-gradient(45deg, #4d55d1 -20%, #ad32e5 50%)",
                  mw: 350,
                  border: "none",
                  position: "relative",
                  animation: "float 3s ease-in-out infinite"
                }} isHoverable
                  className="bg-blue-500"
                >
                  <Card.Divider />
                  <Card.Body css={{ py: "$10", justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                    <Text size="$3xl" b>
                      Join
                    </Text>

                  </Card.Body>
                  <Card.Divider />
                </Card>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div >
    </>
  );
}



