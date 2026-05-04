export const LogoGrid = () => {
    const logos = Array(12).fill("LG");

    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((_, i) => (
                <div
                    key={i}
                    className="w-full aspect-[3/2] bg-brada-light/5 rounded flex items-center justify-center hover:bg-brada-light/10 transition-colors"
                >
                    <span className="text-brada-light/20 font-bold text-xl">LOGO {i + 1}</span>
                </div>
            ))}
        </div>
    );
};
