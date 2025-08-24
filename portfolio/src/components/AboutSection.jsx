import { Code, User, Briefcase } from "lucide-react";

export const AboutSection =()=>{
    return <section id="about" className="py-24 px-4 relative">
    {" "}
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                    passionate Developer and tech creator
                </h3>
                <p className="text-muted-foreground"> I thrive at the intersection of design and technology, crafting solutions that are both innovative and user-centric. Whether it’s coding functional applications or designing seamless interfaces, I enjoy turning ideas into interactive realities that make an impact.</p>

                <p className="text-muted-foreground">Pursuing: B.Tech in Computer Engineering from Marwadi University (Current CGPA: 9.29) <br/><br/>12th Grade: KK Mandal Vidyalaya, Bihar (BSEB Board) Scored 79.2%.</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        {" "}
                        Get In Touch
                    </a>
                    <a href="https://drive.google.com/file/d/1iIA7YiEsoAjE7cbj_qv7a-WJQc00GP5P/view?usp=drivesdk"  target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300">
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Web Development</h4>
                            <p className="text-muted-foreground">I enjoy building responsive, user-friendly web applications. With skills in HTML, CSS, JavaScript, and TypeScript, I focus on the MERN stack to create full-stack projects that blend clean design with strong functionality.</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Programming</h4>
                            <p className="text-muted-foreground">I have a strong foundation in C, C++, JavaScript, and TypeScript, with experience in problem-solving that enhances my logical thinking and development skills.</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Tools used</h4>
                            <p className="text-muted-foreground">I use Git, VS Code, Canvas, WordPress to support my development and design work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>;
}