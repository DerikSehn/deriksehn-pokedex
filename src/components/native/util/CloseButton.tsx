
export default function CloseButton({ onClick, className }: { onClick?: any, className?: string }) {
    return (
        <button
            onClick={onClick}
            className={"text-blue-gray-500 focus:outline-none p-2 rounded-full border-none bg-zinc-50 hover:bg-slate-200 transition-colors " + className}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 scale-125 text-gray-500"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    )
}