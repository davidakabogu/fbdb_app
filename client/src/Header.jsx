import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";

export default function Header() {
  const { user } = useContext(UserContext);
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div>
      {/* Header Component */}
      <header className="flex p-2 justify-between items-center -border-8 bg-green-600 rounded-md">
        {/* Logo Component */}
        <Link
          to={"/"}
          id="logo-image"
          href=""
          className="flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 -rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
          <span className="font-bold text-xl"> FBDB </span>
        </Link>

        {/* Menu Component */}
        <div id="menu" className="flex gap-3 pr-24">
          <a href="/zones">Zones</a>

          <div className="border border-black "></div>

          <a href="/schools">Schools</a>

          <div className="border border-black"></div>

          <a href="/states">States</a>

          <div className="border border-black"></div>

          <a href="/age" >Age</a>

          <div className="border border-black"></div>

          <a href="/sports"> Sports </a>

        </div>

        {/* Search Bar Component */}
        <div className="flex border border-green-500 rounded-full px-4 gap-2 py-2 shadow-md shadow-grey-500 items-center">
          <input
            onChange={handleKeywordChange}
            type="text"
            placeholder="Search Active Athletes"
          />

          {/* Search Icon */}
          <a href={`/search?q=${keyword}`} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </a>
        </div>

        {/* user login component */}
        {/* drop down menu */}
        <Link
          to={user ? "/account" : "/login"}
          className="flex border border-green-500 rounded-full px-4 py-2 gap-2 items-centre"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
          {/* User Icon */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </div>
          {!!user && <div>{user.name}</div>}
        </Link>
      </header>
    </div>
  );
}
