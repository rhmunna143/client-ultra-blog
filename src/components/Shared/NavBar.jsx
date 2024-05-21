"use client"

import { AllContext } from "@/context/AllContext";
import Link from "next/link";
import { useContext } from "react";

const NavBar = () => {
    const { currentUser, loading, logout } = useContext(AllContext);

    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={"/"}>Home</Link></li>

                            <li><Link href={"/profile"}>Profile</Link></li>
                        </ul>
                    </div>

                    <a className="btn btn-ghost text-xl">Ultra Blog</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={"/"}>Home</Link></li>


                        <li><Link href={"/profile"}>Profile</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        currentUser && <p>{currentUser?.username}</p>
                    }
                    
                    {
                        loading ? <p>Loading...</p> : currentUser ? (
                            <button onClick={logout} className="btn btn-ghost">Logout</button>
                        ) : (
                            <Link className="btn btn-ghost" href={"/login"}>Login</Link>
                        )
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;