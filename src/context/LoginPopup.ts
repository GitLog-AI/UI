import React, { SetStateAction, createContext, useState, Dispatch } from 'react';

// Define type
type LoginContextType = {
    showLogin: boolean;
    setShowLogin: Dispatch<SetStateAction<boolean>>;
};



// Create the context
export const LoginContext = createContext<LoginContextType>({
    showLogin: false,
    setShowLogin: () => { }
})

