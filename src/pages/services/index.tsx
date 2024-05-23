import React from 'react';
// import './App.css'; // Import your CSS file
import AnimatedText from './AnimatedText';
const Services = () => {

    return (
        <>
            <div className="App">
                <section className="h-screen">
                    <p className="text-4xl md:text-[200px] md:leading-relaxed">
                        Scroll down...
                    </p>
                </section>
                <section className="flex h-[150vh] flex-col items-center justify-center">
                    <AnimatedText text="Hello, world!" />
                    Scroll down more...
                </section>
                <section className="flex min-h-[150vh] flex-col items-center justify-center">
                    <AnimatedText
                        text="This is a cool animation!"
                    />
                </section>
            </div>
        </>
    )
}

export default Services
