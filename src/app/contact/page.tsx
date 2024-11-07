import React from 'react';
import Header from '../components/Header';

const ContactPage = () => {
    return (
        <div className="bg-white">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <form className="bg-gray-100 p-8 rounded-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-bold">Name</label>
                        <input type="text" id="name" className="w-full p-2 border border-gray-200 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-200 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 font-bold">Message</label>
                        <textarea id="message" rows={4} className="w-full p-2 border border-gray-200 rounded"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
                </form>
            </main>
        </div>
    );
};

export default ContactPage;
