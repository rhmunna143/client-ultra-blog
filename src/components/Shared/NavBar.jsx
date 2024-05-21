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

                            {
                                currentUser && <li><Link href={"/new-post"}>New Post</Link></li>
                            }

                            {
                                currentUser && <li><Link href={"/profile"}>Profile</Link></li>
                            }
                        </ul>
                    </div>

                    <Link className="btn btn-ghost text-3xl text-blue-600 font-permanent-marker" href={"/"}>UltraBlog</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={"/"}>Home</Link></li>

                        {
                            currentUser && <li><Link href={"/new-post"}>New Post</Link></li>
                        }

                        {
                            currentUser && <li><Link href={"/profile"}>Profile</Link></li>
                        }


                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        currentUser && <p className="mx-4">{currentUser?.username}</p>
                    }



                    {
                        currentUser && <button onClick={logout} className="btn btn-ghost">Logout</button>
                    }

                    {
                        !currentUser && <Link href={"/login"} className="btn btn-ghost">Login</Link>
                    }

                    {
                        !currentUser && <Link href={"/signup"} className="btn btn-ghost">Sign Up</Link>
                    }
                </div>
            </div>
        </nav >
    );
};

export default NavBar;