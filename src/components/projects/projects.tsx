import fragmentIcon from '/src/assets/fragment_ss.png';
function About() {
    return (
        <div>
            <div className="h-24 relative flex justify-center"><h1 className="text-4xl font-bold mb-4 relative z-10 font-sans bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent text-5xl">Projects</h1>   </div>
             <div className="w-full max-w-6xl mx-auto p-8 flex">
                
                <div className="flex-col flex flex-1 items-center pr-20 justify-center">
                    <a href="https://github.com/Polymonomial/fragments" target="_blank"><img className="hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300" src={fragmentIcon} alt="AWS Microservices Mockup" /></a>
                </div>
                <div className="flex flex-col mr-8 flex-1 items-end">
                    <div className="h-24 relative"><h1 className="text-4xl font-bold mb-4 relative z-10">AWS microservices mockup</h1><div className="absolute top-0 left-0 font-sans bg-gradient-to-br from-red-500 to-yellow-500 h-5 w-18 z-0"></div>   </div>
                    <p className="text-lg mb-4">
                        This is a mockup of a microservices project using AWS. It is a simple app that allows user to perform RESful api calls to create, read, update, and delete informations that are stored in a DynamoDB database. The app uses AWS cognito to simulate the authorization and authentication process in a real world app. The app runs on AWS S3 and uses docker to simulate what a production ready application functions in the real world.
                    </p>
                    <p className="text-lg mb-4">
                        This project uses docker containers to simulate microservices architecture. AWS S3 runs the back-end server, which handles the API requests and interacts with the DynamoDB database. The front-end is hosted on AWS S3 as a static website, allowing users to interact with the application through a user-friendly interface.
                    </p>
                    
                </div>
                
                
            </div>
        </div>
        
    );
};

export default About;   