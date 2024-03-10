import React from "react";

export default function PokeDexCard({ id, children }: any) {

    return (
        <div id={id} className="flex flex-col justify-center space-y-2">
            <div className=" relative overflow-hidden h-32 rounded-t-3xl min-w-[380px] w-full bg-[red]/80">
                {/* circle top middle cut in half horizontal */}
                <div className="h-44 w-44 rounded-full bg-ochre-900 border border-ochre-100 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2">
                </div>
                <div className="h-40 w-40 rounded-full bg-ochre-100 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2">
                </div>
            </div>
            {children}
            <div className="h-32 overflow-hidden relative rounded-b-3xl min-w-[380px] w-full bg-[red]/80">
                <div className="h-44 w-44 rounded-full bg-ochre-900 border border-ochre-100 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                </div>
                <div className="h-40 w-40 rounded-full bg-ochre-100 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                </div>
            </div>
        </div>
    )
}