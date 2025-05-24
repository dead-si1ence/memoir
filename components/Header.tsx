import Link from "next/link";
import React from "react";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg border border-gray-300 p-4 shadow-lg m-4">
      <div className="flex flex-row items-center justify-between w-full">
        <Link
          href="/"
          className="text-white font-bold hover:text-gray-300 text-2xl"
        >
          Memoir
        </Link>
        <div className="flex flex-row items-center space-x-4">
          <nav className="flex flex-row space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/Settings" className="text-gray-300 hover:text-white">
              Settings
            </Link>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
