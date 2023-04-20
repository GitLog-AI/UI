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

type AuthComponentProps = {
    withDropDown?: boolean
}

export default function AuthComponent(props: AuthComponentProps) {
    const [user, loading] = useAuthState(auth);
    const { showLogin, setShowLogin } = useContext(LoginContext);
    const { withDropDown } = props

    if (user) {
        // DEFINE ROLE

        if (withDropDown) {
            return (
                <Grid>
                    <Dropdown placement="bottom-left">
                        <Dropdown.Trigger>
                            <Avatar text={user.displayName ?? ""} squared size="lg" pointer />
                        </Dropdown.Trigger>
                        <Dropdown.Menu
                            aria-label="Avatar Actions"
                            css={{
                                $$dropdownMenuWidth: "175px",
                                $$dropdownMenuMinWidth: "175px",
                                $$alignItems: "center",
                            }}
                        >
                            <Dropdown.Item key="delete">

                                <a
                                    style={{
                                        display: "flex",
                                        gap: "25px",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                    onClick={() => auth.signOut()}
                                >
                                    <p className="text-red-600 text-lg">
                                        Log Out
                                    </p>
                                </a>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Grid>
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

