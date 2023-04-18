import { Button, Grid, Loading, Badge, StyledInput } from '@nextui-org/react';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import CloudFlareCaptcha from './Captcha';
import { LoginContext } from '@/context/LoginPopup';
import { Checkbox, Divider, Input, Radio, Spacer, Text } from '@geist-ui/core';
import ArrowRight from '@geist-ui/icons/arrowRight'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FullScreenClose, X } from '@geist-ui/icons';

export default function LoginPopup(props: {}) {

    const { showLogin, setShowLogin } = useContext(LoginContext);
    const [agreed, setAgreed] = useState(false)

    return (
        <div className='p-4 fixed inset-0 bg-opacity-70 backdrop-blur-lg flex justify-center items-center' style={{ zIndex: "9999" }}>
            <div className="bg-[#1A1C1E] sm:px-5 px-10 pt-10 rounded-lg shadow-lg flex flex-col relative border-gray-400 text-white">
                <a className="absolute top-4 right-4" onClick={() => { setShowLogin(false) }}>
                    <X />
                </a>
                <div className="flex flex-col gap-2 items-center text-center mb-4">

                    <h1 className="text-5xl font-bold">Login to <span className="text-blue-500">GitLog</span></h1>
                    <p className="text-2xl">Join early access now!  <span className="mx-2"> 🚀</span></p>

                    <div className="flex flex-col sm:flex-row gap-2 py-4">
                        <Button className="bg-[#2C2E34] hover:bg-blue-500 rounded-xl font-semibold text-lg align-center"><span className="flex flex-row gap-4"><FaGithub className="text-2xl" /> GitHub </span></Button>
                        <Button className="bg-[#2C2E34] hover:bg-blue-500 rounded-xl font-semibold text-lg align-center"><span className="flex flex-row gap-4"> <FaGoogle className="text-2xl" /> Google </span></Button>
                    </div>
                    <div className="w-full text-black-200">
                        <Divider type="secondary" />
                    </div>
                    <div className="flex flex-col w-full text-center sm:text-left text-white">
                        <Input width={"100%"} style={{ "color": "white" }} type="secondary" placeholder="..." scale={5 / 3} iconRight={<ArrowRight />}> <Spacer h={.5} />
                            <p className="text-xl font-semibold text-white">Email</p>
                        </Input>
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
