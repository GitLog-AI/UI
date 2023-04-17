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



export default function AuthComponent() {

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

