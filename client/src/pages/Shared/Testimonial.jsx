import React from 'react'

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Alex P.",
            role: "Software Engineer",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "Recru!t simplified the job hunt significantly. Within weeks of creating my profile, I landed interviews with top tech companies. Highly recommended!"
        },
        {
            id: 2,
            name: "Sarah M.",
            role: "Product Designer",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "The platform's interface is so intuitive. I could easily track my applications and the resources helped me prepare for my interviews."
        },
        {
            id: 3,
            name: "James L.",
            role: "Marketing Graduate",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            text: "I was struggling to find openings for freshers. This portal connected me with startups looking for exactly my skill set. Thank you!"
        }
    ];

    return (
        <section className="container mx-auto my-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Users Say</h2>
                <p className="text-gray-600 text-xl font-medium max-w-2xl mx-auto">
                    Discover how Recru!t has made a positive impact on the careers of our users.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item) => (
                    <div key={item.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="rounded-full w-14 h-14 mr-4 object-cover border-2 border-blue-500"
                            />
                            <div>
                                <h4 className="font-bold text-gray-900">{item.name}</h4>
                                <p className="text-sm text-blue-600 font-medium">{item.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic leading-relaxed">"{item.text}"</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonial
