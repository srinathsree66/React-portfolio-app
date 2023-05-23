import React from 'react';
import {
    FaAngular,
    FaGithub,
    FaLinkedinIn,
    FaReact,
    FaTwitter,
} from 'react-icons/fa';
import { SiFigma, SiTailwindcss } from 'react-icons/si';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Stackinfo = () => {
    const [text] = useTypewriter({
        words: ['Professional Coder.', 'Full Stack Developer.', 'UI Designer.'],
        loop: true,
        typeSpeed: 10,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>
                    Hi I'm {''}
                    <span className='text-designColor capitalize'>
                        Srinath Sree
                    </span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a<span> {text}</span>
                    <Cursor
                        cursorBlinking='true'
                        cursorStyle='|'
                        cursorColor='#ff014f'
                    />
                </h2>

                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                    I am a passionate and skilled developer With a strong
                    foundation in software development principles, I am
                    dedicated to creating efficient, scalable, and user-friendly
                    solutions. I thrive in collaborative environments and enjoy
                    taking on new challenges.
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Find me in
                    </h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <a
                                href='https://github.com/srinathsree66'
                                target='_blank'
                                className='bannerIcon'
                                rel='noreferrer'
                            >
                                <FaGithub />
                            </a>
                        </span>
                        <span className='bannerIcon'>
                            <a
                                className='bannerIcon'
                                href='https://twitter.com/Srinath799'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter />
                            </a>
                        </span>
                        <span className='bannerIcon'>
                            <FaLinkedinIn />
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        BEST SKILL ON
                    </h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <FaAngular />
                        </span>
                        <span className='bannerIcon'>
                            <FaReact />
                        </span>
                        <span className='bannerIcon'>
                            <SiTailwindcss />
                        </span>
                        <span className='bannerIcon'>
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stackinfo;
