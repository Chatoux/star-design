import React from 'react';
import Header from '../components/Header';

const AboutPage = () => {
    return (
        <div className="bg-white">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">About Us</h1>
                <p className="mb-4">Star Design is a premier interior design and decor business dedicated to transforming spaces with elegance and style. With years of experience and a keen eye for detail, we ensure every project reflects our client&apos;s vision perfectly.</p>
                <Image src="/about-us.jpg" alt="About Star Design" width={800} height={600} className="rounded-lg" />
            </main>
        </div>
    );
};

export default AboutPage;
