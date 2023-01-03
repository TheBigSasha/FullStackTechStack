import React from "react";
import {useQuery} from "@apollo/client";
import {GREETING} from "../graphql/queries";

export const Greeting: React.FC<{}> = () => {
    const {data, loading, error} = useQuery(GREETING);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    return <p>{data.greeting}</p>;
}
