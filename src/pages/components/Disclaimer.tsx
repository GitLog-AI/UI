import { Button, Grid, Loading, Badge } from '@nextui-org/react';
import { Dispatch, SetStateAction, useState } from 'react';
import CloudFlareCaptcha from './Captcha';

export default function Disclaimer(props: { setDisplay: Dispatch<SetStateAction<boolean>> }) {
    const [verified, setVerified] = useState<boolean>()
    const { setDisplay } = props
    const handleYes = () => { setDisplay(false); localStorage.setItem('hasAgreedDisclaimer', "true"); }

    return (
        <div className='fixed inset-0 bg-opacity-70 bg-gray-100 backdrop-blur-lg flex justify-center items-center' style={{ zIndex: "9999" }}>
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col relative">
                <div className="absolute top-4 right-4">
                    {/* <Badge color="secondary" style={{ border: 'none' }}> Early Access </Badge> */}
                </div>
                <div className="flex items-center mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-black">Welcome to GitLog</h1>
                    </div>
                </div>
                <div>
                    <p className="text-gray-700">Checking if you are a human...</p>
                </div>
                <div className="flex flex-col gap-4 pt-4 justify-center items-center">
                    <CloudFlareCaptcha setVerified={setVerified} />
                    {verified ?
                        <Button color="success" className='bg-green-500 w-1/2' onClick={handleYes}>
                            Agree
                        </Button> :
                        <Button color="success" className='bg-green-500 w-1/2'>
                            <Loading color="currentColor" size="sm" />
                        </Button>
                    }
                </div>
            </div>
        </div>




    );



}
