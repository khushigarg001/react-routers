import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/khushigarg001")
    //     .then(res => res.json())
    //     .then(data => {console.log(data), setData(data)})
    // })


    return(
        <>
        <div className="flex flex-col justify-center items-center py-10 text-white text-3xl bg-gray-600">
        <div >Github account: {data.login}</div>
        <div >Github followers: {data.followers}</div>
        <img className=" w-100 ml-auto px-10" src={data.avatar_url} alt="Git pfp" width={300} />
        </div>
        </>
    )

}

export default Github;

export const githubInfoLoader = async (params) => {
    const response = await fetch("https://api.github.com/users/khushigarg001")
    return response.json();
}