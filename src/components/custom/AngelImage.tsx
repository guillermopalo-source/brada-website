export const AngelImage = () => (
    <div className="relative w-full h-full min-h-[400px] bg-black rounded-lg overflow-hidden flex items-center justify-center border border-brada-light/10 group">
        <div className="text-center p-8">
            <div className="w-24 h-24 mx-auto mb-4 bg-brada-light/5 rounded-full flex items-center justify-center group-hover:bg-brada-light/10 transition-colors">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-brada-light/40"
                >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            </div>
            <p className="text-brada-light/40 font-serif italic text-lg">Angel Image Placeholder</p>
            <p className="text-brada-light/20 text-sm mt-2">Upload asset to public/assets/angel.png</p>
        </div>
    </div>
);
