import React from "react";
import {useParams} from "react-router-dom";
export default function user() {
    const {userId} = useParams();
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Contact Page</h1>
        </div>
    );
}