import {useMutation} from "@apollo/client";
import {ECHO} from "../graphql/mutations";
import React from "react";

export const Echo: React.FC<{}> = () => {
    const [echo, {data, loading, error}] = useMutation(ECHO);
    const [message, setMessage] = React.useState("");

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            {data && <code>From Server: {data.echo}</code>}
            <input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
            <button onClick={() => echo({variables: {message}})}>Echo</button>
        </>
    );


}
