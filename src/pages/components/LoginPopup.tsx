import { Button, Grid, Loading, Badge, StyledInput } from '@nextui-org/react';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import CloudFlareCaptcha from './Captcha';
import { LoginContext } from '@/context/LoginPopup';

export default function LoginPopup(props: {}) {

    const { showLogin, setShowLogin } = useContext(LoginContext);


    return (
        <div className='fixed inset-0 bg-opacity-70 bg-gray-100 backdrop-blur-lg flex justify-center items-center' style={{ zIndex: "9999" }}>
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col relative">
                <div className="absolute top-4 right-4">
                    {/* <Badge color="secondary" style={{ border: 'none' }}> Early Access </Badge> */}
                </div>
                <div className="flex flex-col gap-2 items-center text-center mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-black">Login to GitLog</h1>
                        <p className="text-gray-600">Join the community and unlock amazing features!</p>
                    </div>
                    <div className="flex gap-2">
                        <Button className="bg-gray-500 rounded-xlg">Github</Button>
                        <Button className="bg-gray-500 rounded-xlg">Google</Button>
                    </div>
                    <div className="text-black">
                        ---
                    </div>
                    <div>
                        <p className={"text-black"}>Email</p>
                        <StyledInput className="bg-black" />
                    </div>
                </div>
            </div>
        </div>

    );



}
