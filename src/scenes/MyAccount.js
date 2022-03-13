import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function MyAccount() {
    const { user } = useContext(UserContext);

    return (
        <section className="container">
            <h1>My Account</h1>
        </section>
    )
}