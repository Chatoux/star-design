import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import styles from './styles/Home.module.css';

const HomePage = () => {
    return (
        <div className="bg-white">
            <Header />
            <main className="container mx-auto px-4">
                <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
                    <div className="text-center bg-white bg-opacity-50 p-8 rounded-md">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Star Design</h1>
                        <p className="mb-8">Transforming Spaces with Elegance and Style</p>
                        <a href="/services" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Explore Our Services</a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
