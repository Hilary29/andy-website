'use client';

import Image from 'next/image';

export default function Biography() {
    return (
        <section className="bg-white pt-20  pb-40  relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-primary-900 tracking-[0.3em] mb-6 uppercase">
            BIOGRAPHY
          </h1>
          

                {/* Content Container */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    {/* Text Section */}
                    <section className="flex-1 text-lg sm:text-xl text-black font-medium leading-relaxed space-y-6">
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
