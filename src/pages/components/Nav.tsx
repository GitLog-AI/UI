import React, { useContext } from "react";
import { Navbar, Button, Link, Text, Card, Radio, Progress, Badge, SwitchEvent } from "@nextui-org/react";
import AuthComponent from "./AuthComponent";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { FaDiscord, FaPatreon, FaReddit, FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/router';


export default function NavBar() {
    const router = useRouter();
    const { isDark, type } = useTheme();
    const { setTheme } = useNextTheme();
    return (
        <Navbar isBordered variant="floating">
            <Navbar.Brand >
                <Text
                    b
                    css={{
                        paddingRight: "8px"
                    }}
                    weight="bold"
                    size={30}

                >
                    <div>
                        <a className="flex text-blue-500" onClick={() => location.assign("/")}>
                            GitLog
                        </a>
                    </div>
                </Text>
                <Badge enableShadow disableOutline color="default" >Early Access</Badge>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="highlight-rounded" activeColor={"secondary"}>
                <Navbar.Link href="/early" isActive={router.pathname === '/early'}>Early Access</Navbar.Link>
                <Navbar.Link href="/pricing" isActive={router.pathname === '/pricing'}>Pricing</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content hideIn="xs">
                <Navbar.Item>
                    <div className="flex items-center">
                        <a href="https://discord.gg/euvyufrnDa"><FaDiscord className="h-6 w-6 mx-2 text-gray-600 hover:text-gray-800" /></a>
                        <a href="https://twitter.com/DeepPorn_AI"><FaTwitter className="h-6 w-6 mx-2 text-gray-600 hover:text-gray-800" /></a>
                        <a href="https://www.reddit.com/r/deeppornai/"><FaReddit className="h-6 w-6 mx-2 text-gray-600 hover:text-gray-800" /></a>
                        <a href="https://www.patreon.com/DeepPorn_AI"><FaPatreon className="h-6 w-6 mx-2 text-gray-600 hover:text-gray-800" /></a>
                    </div>
                </Navbar.Item>
                <Navbar.Item>
                    <Switch
                        color={"primary"}
                        iconOn={<svg
                            fill="white"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24">
                            <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
                            <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />

                        </svg>}
                        iconOff={<svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                            />
                        </svg>}
                        checked={isDark}
                        onChange={(e) => { setTheme(e.target.checked ? 'dark' : 'light') }}
                    />

                </Navbar.Item>
                <Navbar.Item >
                    <AuthComponent />
                </Navbar.Item>

            </Navbar.Content>




            <Navbar.Toggle showIn="xs" />
            <Navbar.Collapse>
                <Navbar.CollapseItem activeColor={"secondary"}>
                    <div className="flex flex-row w-full  justify-between">
                        <div className="flex items-center">
                            <a href="https://discord.gg/euvyufrnDa"><FaDiscord className="h-6 w-6 mx-2 text-gray-600 hover:text-gray-800" /></a>
                            <a href="https://twitter.com/DeepPorn_AI"><FaTwitter className="h-6 w-6 mx-2 text-gray-600 hover:text-gray-800" /></a>
                            <a href="https://www.reddit.com/r/deeppornai/"><FaReddit className="h-6 w-6 mx-2 text-gray-600 hover:text-gray-800" /></a>
                            <a href="https://www.patreon.com/DeepPorn_AI"><FaPatreon className="h-6 w-6 mx-2 text-gray-600 hover:text-gray-800" /></a>
                        </div>
                        <div className="flex items-center gap-4 justify-center">
                            <Switch
                                color={"secondary"}
                                iconOn={<svg
                                    fill="white"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24">
                                    <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
                                    <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />

                                </svg>}
                                iconOff={<svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                                    />
                                </svg>}
                                checked={isDark}
                                onChange={(e) => { setTheme(e.target.checked ? 'dark' : 'light') }}
                            />
                            <AuthComponent />
                        </div>
                    </div>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem activeColor={"secondary"}>
                    <h6 className="font-bold"> Navigate </h6>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem activeColor={"secondary"}>
                    <Progress color="primary" size="xs" value={0} />
                </Navbar.CollapseItem>
                <Navbar.CollapseItem activeColor={"secondary"}>
                    <Link onClick={() => window.location.assign("/explore")}> Early Access </Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem activeColor={"secondary"}>
                    <Link onClick={() => window.location.assign("/pricing")}> Pricing </Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem activeColor={"secondary"}>
                    <h6 className="font-bold"> Account </h6>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem activeColor={"secondary"}>
                    <Progress color="primary" size="xs" value={0} />
                </Navbar.CollapseItem>
                <Navbar.CollapseItem activeColor={"secondary"}>
                    <Link onClick={() => window.location.assign("/api/auth/logout")}> Logout </Link>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    )

}