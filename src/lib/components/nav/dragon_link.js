"use client";



export default function DragonLink(props) {
    const src = "/dragon_symbols/" + props.dragon;

    return (
        <div className="relative font-serif w-fit group transition-all duration-500">
            <img src={src} alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 color-accent w-48 opacity-30 group-hover:opacity-50 transition-all duration-500 z-1010" />
            <a href={props.href} className="relative text-accent! underline-center text-center uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl z-1015 hover:text-secondary! transition-all duration-500">{props.text}</a>
        </div>
    );
}
