"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import { Dumps } from "./ui/Dumps";

function IxbGallery() {
    return (
        <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <Dumps items={info} direction="right" speed="slow" />
        </div>
    );
}

const info = [
    {
        img: "/dumps/ixb/1.webp",
        name: "Photo IXB 1",
    },
    {
        img: "/dumps/ixb/2.webp",
        name: "Photo IXB 2",
    },
    {
        img: "/dumps/ixb/3.webp",
        name: "Photo IXB 3",
    },
    {
        img: "/dumps/ixb/4.webp",
        name: "Photo IXB 4",
    },
    {
        img: "/dumps/ixb/5.webp",
        name: "Photo IXB 5",
    },
];

export default IxbGallery;
