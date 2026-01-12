function Header() {
    return (
        <header 
            className="fixed top-0 left-0 right-0 shadow-lg shadow-black/30 bg-gradient-to-r from-red-800 to-orange-300 text-black p-2 md:p-4 flex flex-col md:flex-row justify-start items-center w-full z-50"
        >
            <h1 className="text-lg md:text-2xl font-bold mb-2 md:mb-0 md:mr-8 text-neutral-50">Brendan Chang</h1>
            <nav className="flex space-x-4 md:space-x-6">
                <a href="#about" className="hover:text-gray-600 transition-colors text-neutral-50">About</a>
                <a href="#projects" className="hover:text-gray-600 transition-colors text-neutral-50">Projects</a>
            </nav>
        </header>
    )
}

export default Header