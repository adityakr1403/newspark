"use client";
import React, {useContext, useState} from 'react';
import {RiCloseLargeFill} from "react-icons/ri";
import {LiaMinusSolid, LiaPlusSolid} from "react-icons/lia";
import {IoNewspaperOutline} from "react-icons/io5";
import {Baskervville} from "next/font/google";
import {MdCall} from "react-icons/md";
import {FaMicrophone} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import {PopOutMenuContext} from "@/contexts/popOutMenuContext";
import {headerMenuConfiguration} from "@/applicationConfiguration/menuConfiguration";
import Link from "next/link";

const baskerVille = Baskervville({weight: "400", subsets: ["latin"]});

const PopOutMenu = () => {
    const {menuIsOpen, setMenuIsOpen} = useContext(PopOutMenuContext);

    return (
        <div
            className={`${menuIsOpen ? 'right-0 block' : '-right-full hidden'} flex fixed top-0 max-w-sm flex-grow h-screen z-20 md:hidden `}>
            {/*close button*/}
            <div className="">
                <button className="text-white bg-black/50 p-4" onClick={() => {
                    setMenuIsOpen(false)
                }}><RiCloseLargeFill className="text-lg"/></button>
            </div>
            <div className="p-4 bg-white overflow-auto">
                {/*menu items*/}
                <div className="flex flex-col gap-2 ">
                    {/*<div className="flex items-center gap-2 p-2 justify-between">*/}
                    {/*    <div className="">Home</div>*/}
                    {/*    <div className="">{1 === 1 ? <LiaPlusSolid/> : <LiaMinusSolid/>}</div>*/}
                    {/*</div>*/}
                    {
                        headerMenuConfiguration.items.map((item, index) => {
                            return (
                                <Link key={index} href={item.url} onClick={() => setMenuIsOpen(false)}
                                      className="flex items-center gap-2 p-2 justify-between">
                                    <div className="">{item.label}</div>
                                    {/*<div className="">{1 === 1 ? <LiaPlusSolid/> : <LiaMinusSolid/>}</div>*/}
                                </Link>
                            );
                        })
                    }
                </div>
                <hr className="my-5"/>
                <div className="flex flex-col gap-4 items-start">
                    <div className={`${baskerVille.className} flex justify-start items-center`}>
                        <IoNewspaperOutline className="text-5xl"/>
                        <div className="text-4xl"> Newspark</div>
                    </div>
                    <div className="">
                        Do am he horrible distance marriage so throughout. Afraid assure square so happenmr an before.
                        His many same been well can high that.
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className=""><MdCall/></div>
                            <div className="">On Your Mobile</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className=""><FaMicrophone/></div>
                            <div className="">On Smart Speakers</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className=""><IoIosMail/></div>
                            <div className="">Contact Newspark</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopOutMenu;