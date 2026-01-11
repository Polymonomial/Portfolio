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
                    {/* Skills grid layout - 5 icons per row */}
                    <div className="grid grid-cols-5 gap-3 md:gap-4 lg:gap-6 p-4">
                        {/* Row 1 */}
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=git" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="Git" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=github" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="GitHub" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=docker" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="Docker" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=c" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="C" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=cpp" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="C++" />
                        </div>
                        
                        {/* Row 2 */}
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=cs" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="C#" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=js" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="JavaScript" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=java" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="Java" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=linux" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="Linux" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=vim" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="Vim" />
                        </div>
                        
                        {/* Row 3 */}
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=figma" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="Figma" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=aws" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="AWS" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=postgres" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="PostgreSQL" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=react" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="React" />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=tailwind" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="Tailwind CSS" />
                        </div>
                        
                        {/* Row 4 - Last icon */}
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                            <img src="https://skillicons.dev/icons?i=ts" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="TypeScript" />
                        </div>
                    </div>
                </div>
                
            </div>
        
    )
}
export default About