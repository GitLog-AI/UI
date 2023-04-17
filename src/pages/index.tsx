import { useEffect, useState } from 'react';
import Head from 'next/head';
import Typewriter from "typewriter-effect"
import AuthComponent from './components/AuthComponent';
import NavBar from './components/Nav';
import { Badge, Text, useTheme, Card, Row, Button, Link, Loading, gray, Image } from '@nextui-org/react';
import Disclaimer from './components/Disclaimer';
import { useRouter } from 'next/router';
import Footer from './components/Footer';

export default function Home() {
  const { isDark, type } = useTheme();

  const router = useRouter();

  function signup() {
    router.push('/api/auth/login');
  }

  // display state for disclaimer
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const hasAgreedDisclaimer = localStorage.getItem('hasAgreedDisclaimer');
    if (hasAgreedDisclaimer != "true") {
      setDisplay(true);
    }
  }, []);

  return (
    <>

      <div className="h-screen flex flex-col justify-between">
        <Head>
          <title>GitLog</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <meta name="description" content="AI Generated Porn. See what you want how you want. Discover the growing collection of AI generated porn." />
          <meta name="keywords" content='AI Porn, AI Generated Porn, AI Generative Porn, Porn AI, make ai porn, 
        generative porn, porn using AI, ai porn, deepporn, deepporn.ai '/>
        </Head>

        {/* Modals */}

        {display && (
          <div className="disclaimer">
            <Disclaimer setDisplay={setDisplay} />
          </div>
        )}

        {/* Content */}

        <div className='flex flex-col justify-center items-center '>
          <NavBar />


          <div className={"flex flex-col md:flex-row items-center justify-between p-12 gap-12 "}>

            {/* Text */}
            <div>
              <div className={"grid gap-8 w-full"}>
                <div className={"m-2 text-center"}>
                  <h5 className={isDark ? 'text-5xl font-extrabold' : 'text-5xl font-extrabold text-black'}> AI Tracking. <span className="text-blue-500 inherit">Welcome</span> to early access.</h5>
                  <p className="font-semibold p-4 pb-2 text-2xl text-gray-500">
                    How are you keeping track of your learning?
                  </p>
                  <div className={isDark ? "text-2xl font-semibold" : "text-2xl font-semibold text-black"}>
                    <Typewriter

                      onInit={(typewriter) => {
                        typewriter
                          .typeString('<strong>Join now!</strong>')
                          .start();
                      }}
                    />

                  </div>

                </div>
              </div>
              <div className="sm:mt-3 lg:mt-5 cursor-pointer    flex flex-column justify-center text-center align-center" onClick={() => { window.location.assign("/explore") }}>
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