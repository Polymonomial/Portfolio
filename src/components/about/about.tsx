function About() {
    return (
        
            <div className="w-full max-w-6xl mx-auto p-4 md:p-8 flex flex-col md:flex-row">
                <div className="flex flex-col mb-8 md:mb-0 md:mr-8 flex-1">
                    <div className="h-16 md:h-24 relative"><h1 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">About Me</h1><div className="absolute top-0 left-0 font-sans bg-gradient-to-br from-red-500 to-yellow-500 h-4 md:h-5 w-16 md:w-18 z-0"></div>   </div>
                    <p className="text-base md:text-lg mb-4">
                        Hello! I'm Brendan Chang, a Bachelor of software development student at Seneca Polytechnic. With experience in front-end, back-end, database and much more, I enjoy tackling complex problems and turning ideas into reality.
                    </p>
                    <p className="text-base md:text-lg mb-4">
                        When I'm not coding, I enjoy cooking, gaming, and exploring new technologies. I'm always eager to learn and grow in my field, and I'm excited to connect with like-minded individuals.
                    </p>
                    <p className="text-base md:text-lg">
                        Feel free to reach out to me for collaboration, networking, or just to say hi!
                    </p>
                </div>
                <div className="flex-col flex flex-1 items-center justify-center">
                    {/* Two circle formation with all skill icons */}
                    <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                        
                        {/* Inner circle - 8 core skills (very tight radius) */}
                        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=git" className="w-8 h-8" alt="Git" />
                        </div>
                        <div className="absolute top-48 right-48 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=github" className="w-8 h-8" alt="GitHub" />
                        </div>
                        <div className="absolute top-1/2 right-40 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=docker" className="w-8 h-8" alt="Docker" />
                        </div>
                        <div className="absolute bottom-48 right-48 transform translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=c" className="w-8 h-8" alt="C" />
                        </div>
                        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=cpp" className="w-8 h-8" alt="C++" />
                        </div>
                        <div className="absolute bottom-48 left-48 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=cs" className="w-8 h-8" alt="C#" />
                        </div>
                        <div className="absolute top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=js" className="w-8 h-8" alt="JavaScript" />
                        </div>
                        <div className="absolute top-48 left-48 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=java" className="w-8 h-8" alt="Java" />
                        </div>

                        {/* Outer circle - 6 additional skills + 2 empty squares (tighter outer radius) */}
                        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=linux" className="w-8 h-8" alt="Linux" />
                        </div>
                        <div className="absolute top-24 right-24 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=vim" className="w-8 h-8" alt="Vim" />
                        </div>
                        <div className="absolute top-1/2 right-12 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=figma" className="w-8 h-8" alt="Figma" />
                        </div>
                        <div className="absolute bottom-24 right-24 transform translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=aws" className="w-8 h-8" alt="AWS" />
                        </div>
                        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=postgres" className="w-8 h-8" alt="PostgreSQL" />
                        </div>
                        <div className="absolute bottom-24 left-24 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=react" className="w-8 h-8" alt="React" />
                        </div>
                        <div className="absolute top-1/2 left-12 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=tailwind" className="w-8 h-8" alt="Tailwind CSS" />
                        </div>
                        <div className="absolute top-24 left-24 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=ts" className="w-8 h-8" alt="TypeScript" />
                        </div>
                    </div>
                </div>
                
            </div>
        
    )
}
export default About