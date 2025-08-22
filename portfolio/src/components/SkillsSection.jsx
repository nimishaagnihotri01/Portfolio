import { useState } from "react";


const skills=[
    //frontend
    {name:"HTML/CSS", level: 95, category:"frontend"},
    {name:"javascript", level: 90, category:"frontend"},
    {name:"react", level: 95, category:"frontend"},
    {name:"typescript", level: 85, category:"frontend"},
    {name:"tailwind css", level: 90, category:"frontend"},
    {name:"next.js", level: 80, category:"frontend"},

    //backend
    {name:"node.js", level: 80, category:"backend"},
    {name:"express", level: 75, category:"backend"},
    {name:"mongo", level: 70, category:"backend"},
    {name:"sql", level: 65, category:"backend"},
    {name:"graphql", level: 60, category:"backend"},

    //tools
    {name:"git/github", level: 90, category:"tools"},
    {name:"docker", level: 70, category:"tools"},
    {name:"kubernetes", level: 85, category:"tools"},
    {name:"figma", level: 95, category:"tools"},
];


export const SkillsSection=()=>{
    const [activeCategory,setActiveCategory] =useState("all")
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, key)=>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level +"%"}}
                        />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};