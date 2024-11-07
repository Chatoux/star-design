import React from 'react';
import Header from '../components/Header';

const ServicesPage = () => {
    return (
        <div className="bg-white">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Our Services</h1>
                <p className="mb-4">We offer a range of services to meet all your interior design needs, from consultation to full-scale project management.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Image src="/service-1.jpg" alt="Service 1" width={400} height={300} className="rounded-lg" />
                    <Image src="/service-2.jpg" alt="Service 2" width={400} height={300} className="rounded-lg" />
                </div>
            </main>
        </div>
    );
};

export default ServicesPage;
