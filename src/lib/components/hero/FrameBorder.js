"use client"


export default function FrameBorder(props) {

    let orientation = "vertical-rl";

    if (props.orientation === 'right') {
        orientation = "sideways-lr";
    }

    return (
        <div className="relative bg-[url('/frame_border_background.jpg')] flex flex-col justify-between items-center h-screen w-30 border-2 border-secondary z-10">
            <div className="flex justify-center items-center w-full h-1/4 px-10 max-h-9/10">
                <img
                    src="/hugo_artrish.png"
                    alt=""
                    className="flex pointer-events-none invert"
                />
            </div>

            <div className="flex justify-center items-center w-full h-1/2 border-2 border-secondary border-x-0">
                <h2 style={{ fontFamily: "var(--serif-font)", writingMode: orientation }} className="inline-block text-center text-xl text-white m-auto">•Hugo Malezet - Portfolio•</h2>
            </div>

            <div className="flex justify-center items-center w-full h-1/4 px-10">
                <img
                    src="/malezet_artrish.png"
                    alt=""
                    className="flex pointer-events-none invert max-h-9/10"
                />
            </div>
        </div>
    );
}