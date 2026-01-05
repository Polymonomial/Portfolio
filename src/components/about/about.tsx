function About() {
    return (
        
            <div className="w-full max-w-6xl mx-auto p-8 flex">
                <div className="flex flex-col mr-8 flex-1">
                    <div className="h-24 relative"><h1 className="text-4xl font-bold mb-4 relative z-10">About Me</h1><div className="absolute top-0 left-0 font-sans bg-gradient-to-br from-red-500 to-yellow-500 h-5 w-18 z-0"></div>   </div>
                    <p className="text-lg mb-4">
                        Hello! I'm Brendan Chang, a Bachelor of software development student at Seneca Polytechnic. With experience in front-end, back-end, database and much more, I enjoy tackling complex problems and turning ideas into reality.
                    </p>
                    <p className="text-lg mb-4">
                        When I'm not coding, I enjoy cooking, gaming, and exploring new technologies. I'm always eager to learn and grow in my field, and I'm excited to connect with like-minded individuals.
                    </p>
                    <p className="text-lg">
                        Feel free to reach out to me for collaboration, networking, or just to say hi!
                    </p>
                </div>
                <div className="flex-col flex flex-1">
                        <a href="https://skillicons.dev">
                            <img src="https://skillicons.dev/icons?i=git,kubernetes,docker,c,vim" />
                        </a>
                </div>
                
            </div>
        
    )
}
export default About