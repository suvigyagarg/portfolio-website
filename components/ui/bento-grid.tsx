import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import { InfiniteScroll } from "./infinite-scroll";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImage

}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id?: number
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImage?: string
}) => {
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 space-y-4 border border-white/[0.1] bg-black shadow-none flex flex-col justify-between",
                className,
            )}
            style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6} &&'flex justify-center h-full'`}>
                <div className="w-full h-full absolute">
                    {
                        img && (
                            <img
                                src={img}
                                alt={img}
                                className={cn(imgClassName, 'object-cover object-center')}
                            />
                        )
                    }
                </div>
                <div className={`absolute right-0 -bottom-5${id === 5 && 'w-full opacity-80'} `} >
                    {
                        spareImage && (
                            <img
                                src={spareImage}
                                alt={spareImage}
                                className={'object-cover object-center w-full h-full'}
                            />
                        )
                    }
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div
                            className=" absolute z-50 flex items-center justify-center text-white font-bold "
                        />
                    </BackgroundGradientAnimation>
                )}
                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 '
                )}>
                    <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10" >
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg text-white  lg:text-3xl max-w-96 z-50">
                        {title}
                    </div>

                    {id === 2 && <GlobeDemo />}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-0">
               <InfiniteScroll direction="up" speed={30} className="flex flex-col " height={400}>
                    {['React.js', "Next.js", "Javascript","Typescript"].map((item ,i) => (
                                    <span key={i} className="text-white py-2 font-semibold lg:py-3 my-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] " >
                                        {item}
                                    </span>
                                ))}
               </InfiniteScroll>

               <InfiniteScroll direction="down" speed={30} className="flex flex-col gap-3 lg:gap-8" height={400}>
                    {['MongoDB', "Docker", "PostgreSQL" ,"Express"].map((item ,i) => (
                                    <span key={i} className="text-white py-2 lg:py-3 font-semibold my-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] " >
                                        {item}
                                    </span>
                                ))}
               </InfiniteScroll>

                            
                        </div>
                        )}
                {id === 6 && (
                    <div className="mt-5 relative">
                     <div className={`absolute -bottom-5 right-0`}>

                     </div>
                    </div>
                )}

                </div>
            </div>
        </div>

    );
};
