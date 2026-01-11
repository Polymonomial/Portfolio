function FrontPageAttraction() {    
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center w-full max-w-6xl px-4 md:px-8 gap-8 md:gap-50 justify-center">
                <div className="p-4 md:p-8 w-80 md:w-130 h-40 md:h-150 flex flex-col justify-evenly flex-shrink-0">
                    <h1 className="font-sans bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent font-extrabold text-3xl md:text-5xl self-start">BRENDAN</h1>
                    <h1 className="font-sans bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent font-extrabold text-3xl md:text-5xl self-end">CHANG</h1>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-yellow-500 p-4 md:p-8 rounded-lg shadow-lg w-80 md:w-130 h-40 md:h-150 flex flex-col justify-evenly flex-shrink-0">
                    <h1 className="font-sans text-white font-extrabold text-3xl md:text-5xl self-start">CHANGE</h1>
                    <h1 className="font-sans text-white font-extrabold text-3xl md:text-5xl self-center">INNOVATE</h1>
                    <h1 className="font-sans text-white font-extrabold text-3xl md:text-5xl self-end">PROSPER</h1>
                </div>
            </div>
        </div>
    )
}

export default FrontPageAttraction; 