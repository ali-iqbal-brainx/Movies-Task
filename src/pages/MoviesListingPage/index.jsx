import React from "react";
import './styles.scss';

function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}


function VideoIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
    )
}


function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}

const MoviesListingPage = () => {
    return (
        <div className="min-h-screen bg-[#0a3d62] text-white">
            <header className="flex items-center justify-between p-6">
                <h1 className="text-3xl font-bold">
                    My movies <VideoIcon className="inline-block w-6 h-6 ml-2" />
                </h1>
                <div className="flex items-center space-x-4">
                    <button className="text-white">Logout</button>
                    <UserIcon className="w-6 h-6" />
                </div>
            </header>
            <main className="p-6">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="bg-[#1e5f74] rounded-lg overflow-hidden">
                            <img src="/placeholder.svg" alt="Movie" className="w-full h-[300px] object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">Movie 1</h2>
                                <p className="text-sm text-gray-300">2021</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 space-x-4">
                    <button className="px-4 py-2 text-white bg-[#1e5f74] rounded">Prev</button>
                    <button className="px-4 py-2 text-white bg-[#1e5f74] rounded">1</button>
                    <button className="px-4 py-2 text-white bg-[#1e5f74] rounded">2</button>
                    <button className="px-4 py-2 text-white bg-[#1e5f74] rounded">Next</button>
                </div>
            </main>
        </div>
    )
}

export default MoviesListingPage;
