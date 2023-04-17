import React from "react";

export default function Footer() {

    return (
        <footer className={"w-full px-2.5"}>
            <div className={"text-sm text-gray-400"}>


                <div className="sm:px-0 mx-auto flex justify-between pb-1 gap-3">
                    <div className="text-sm flex flex-col gap-1">
                        <a href="/privacy">
                            Privacy Policy
                        </a>
                        <a href="/terms">
                            Terms of Conditions
                        </a>
                    </div>
                    <p className="flex text-sm items-end">&copy; 2023 GitLog</p>
                </div>
            </div>
        </footer>
    );
};


