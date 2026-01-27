'use client';

import Image from 'next/image';

export default function page() {
    return (
        <section className="bg-black py-20 sm:py-40 min-h-screen">
            <div className="container mx-auto px-4 sm:px-20">
                {/* Title */}

                <section className=" pb-16  md:pb-24">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary-500 tracking-[0.2em] mb-6 uppercase">
                            BIOGRAPHY
                        </h1>
                        <div className="w-20 h-px bg-primary-900 mx-auto mb-8" />
                        <p className="text-primary-50 text-base md:text-lg tracking-wide max-w-2xl mx-auto">
                            Who is Andy Donfack?
                        </p>
                    </div>
                </section>

                {/* Content Container */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    {/* Text Section */}
                    <section className="flex-1 text-lg sm:text-xl text-white/90 font-medium leading-relaxed space-y-6">
                        <p className="text-justify">
                            Born in 2001 in Yaounde, Andy&apos;s Donfack journey into art has been one of discovery and learning. Despite having a formal background in engineering, his heart has always found solace in the strokes of a pencil and the shades of charcoal.

                        </p>

                        <p className="text-justify">
                            Based in Cameroon, Andy is a drawing artist who works with paper, pencils, and charcoal to bring smiles to faces through his art.                        </p>
                    </section>

                    {/* Image Section */}
                    <section className="flex-1 w-full flex justify-center">
                        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-square lg:aspect-auto">
                            <Image
                                alt="Andy Donfack"
                                src="/images/me.jpeg"
                                width={590}
                                height={694}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
