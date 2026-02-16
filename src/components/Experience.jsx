import logo1 from '../assets/logo1.png';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Frontend Web Developer Intern",
            company: "Ceylon Innovation (PVT) LTD",
            duration: "2025 - 2026",
            logo: logo1,
        }
    ];

    return (
        <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16" id="experience">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="flex justify-center mb-2">
                        {/* Decorative Icon */}
                        <div className="relative">
                            <div className="w-4 h-4 rounded-full bg-gray-200 border border-gray-400"></div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 border-t border-r border-gray-300 rounded-full opacity-50"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-wide">Experience</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                        My professional journey and work history in the tech industry.
                    </p>
                </div>

                {/* Experience List */}
                <div className="flex flex-col gap-6">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 border cursor-pointer transition-all duration-300 bg-white border-gray-200 hover:bg-[#FF5400] hover:border-[#FF5400] hover:shadow-lg hover:scale-[1.02]"
                        >
                            {/* Left Side: Logo & Info */}
                            <div className="flex flex-col md:flex-row gap-6 md:items-center w-full">
                                {/* Logo Box */}
                                <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md">
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Role & Company */}
                                <div className="flex flex-col">
                                    <h3 className="text-xl md:text-2xl font-bold mb-1 transition-colors duration-300 text-black group-hover:text-white">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm transition-colors duration-300 text-gray-500 group-hover:text-white/80">
                                        {exp.company}
                                    </span>
                                </div>
                            </div>

                            {/* Right Side: Duration */}
                            <div className="mt-4 md:mt-0 font-medium tracking-wide uppercase text-sm border-l-0 md:border-l-2 pl-0 md:pl-6 md:w-48 flex-shrink-0 transition-colors duration-300 text-black border-gray-200 group-hover:text-white group-hover:border-white/30">
                                {exp.duration}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience;
