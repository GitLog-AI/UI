// components/AuthComponent.tsx
import {
    Avatar,
    Badge,
    Button,
    Dropdown,
    Grid,
    Link,
    Text,
} from "@nextui-org/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utils/firebase/app";
import { useContext } from "react";
import { LoginContext } from "@/context/LoginPopup";


export default function AuthComponent() {
    const [user, loading] = useAuthState(auth);
    const { showLogin, setShowLogin } = useContext(LoginContext);

    console.log(user?.displayName);
    if (user) {
        return (
            <Avatar
                squared
                size="lg"
                text={user.displayName ?? "User"}
                onClick={() => window.location.assign("/api/auth/login")}
                pointer
            />
        );
    }

    if (loading) {
        return (
            <Avatar
                squared
                size="lg"
                text={"Join"}
                onClick={() => window.location.assign("/api/auth/login")}
                pointer
            />
        );
    }

    return (
        <Avatar
            squared
            size="lg"
            text={"Join"}
            onClick={() => setShowLogin(true)}
            pointer
        />
    );
}

