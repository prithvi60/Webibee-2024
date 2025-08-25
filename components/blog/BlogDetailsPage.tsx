"use client";
import { PortableText } from "next-sanity";
import ContactForm from "../contact/ContactForm";
import { Link as ScrollLink } from "react-scroll";
import ReactPlayer from "react-player";

const extractTOC = (blocks: any[]) => {
    return blocks
        .filter((block) => block._type === "block" && /^h[2]$/.test(block.style))
        .map((block) => {
            const originalText = block.children.map((child: any) => child.text).join(" ");

            // For TOC display only → remove colon/semicolon
            const displayText = originalText.replace(/[:;]+/g, "");

            // Use sanitized version for ID too
            const id = displayText.toLowerCase().replace(/[^\w]+/g, "-");

            return { text: displayText, id, level: block.style };
        });
};


const BlogDetailsPage = ({ post }: { post: any }) => {
    const toc = extractTOC(post.blockContent);

    return (
        <section className="relative w-full h-full flex flex-col lg:flex-row lg:justify-between gap-8 xl:gap-12 mx-auto lg:max-w-full xl:max-w-fit 2xl:ml-80 px-7 py-12 sm:py-16 xl:py-20">
            <div className="font-Gilroy space-6 md:space-y-10 lg:w-[65%]">
                <h2 className="text-2xl font-bold tracking-normal capitalize font-Gilroy text-secondary md:text-3xl xl:text-4xl"></h2>
                <h3
                    className={`font-EbGaramond text-4xl xl:text-6xl tracking-wider font-medium text-center md:text-start`}
                >
                    <strong className="text-info">{post.title}</strong>
                </h3>
                {/* Render TOC only if enabled */}
                {post.toc && toc.length > 0 && (
                    <nav className="mt-6 mb-10 bg-gray-50 border-2 w-max border-info/60 rounded-lg">
                        <h4 className="text-lg font-bold px-4 py-4 text-info border-b-2 border-info/60 mb-3">
                            Table of Contents
                        </h4>
                        <ul className="space-y-2 px-4 pb-4 text-base md:text-lg font-medium">
                            {toc.map((item, idx) => (
                                <li
                                    key={idx}
                                    className={`ml-${(parseInt(item.level[1]) - 2) * 4}`}
                                >
                                    <ScrollLink
                                        to={item.id}
                                        smooth={true}
                                        offset={-40}
                                        duration={500}
                                        spy={true}
                                        className="cursor-pointer hover:text-info"
                                        activeClass="text-info font-semibold"
                                    >
                                        {item.text}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                <div className="max-w-7xl font-Poppins prose prose-blue mx-auto prose-p:leading-relaxed prose-p:mt-4 prose-p:mb-4 prose-blockquote:leading-relaxed prose-blockquote:text-lg lg:prose-blockquote:text-xl prose-video:m-0">
                    <PortableText
                        value={post.blockContent}
                        components={customComponents}
                    />
                </div>
            </div>

            <div className="w-full lg:w-[35%]">
                <ContactForm seo blog />
            </div>
        </section>
    );
};

export default BlogDetailsPage;

const customComponents = {
    types: {
        image: ({ value }: { value: { imageUrl?: string; alt?: string } }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={value?.imageUrl}
                alt={value?.alt || "Image"}
                className="w-full h-full max-w-md max-h-full mx-auto mt-20 mb-20 md:mt-20 md:mb-10"
            />
        ),
        // ✅ Video Upload rendering
        videoUpload: ({ value }: { value: { url: string; caption?: string } }) => (
            <div className=" flex flex-col items-center">
                <video
                    controls
                    className="w-full h-fit max-w-3xl rounded-lg shadow-lg"
                    src={value?.url}
                />
                {value.caption && (
                    <p className="mt-2 text-center text-sm">{value.caption}</p>
                )}
            </div>
        ),

        // ✅ External Video Embed rendering
        videoEmbed: ({ value }: { value: { url: string; title?: string } }) => (
            <div className="my-8">
                <div className="w-full h-fit max-w-3xl rounded-lg shadow-lg mx-auto overflow-hidden">
                    <ReactPlayer
                        src={value.url}
                        controls
                        width="100%"
                        height="480px"
                    />
                </div>
                {value.title && (
                    <p className="mt-2 text-center text-sm">{value.title}</p>
                )}
            </div>
        )
    },
    block: {
        h2: (props: any) => {
            const children = props.children;
            const id = String(children)
                .toLowerCase()
                .replace(/[^\w]+/g, "-");
            return <h2 id={id}>{children}</h2>;
        },
        // h3: (props: any) => {
        //     const children = props.children;
        //     const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
        //     return <h3 id={id}>{children}</h3>;
        // },
        // h4: (props: any) => {
        //     const children = props.children;
        //     const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
        //     return <h4 id={id}>{children}</h4>;
        // },
        // h5: (props: any) => {
        //     const children = props.children;
        //     const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
        //     return <h5 id={id}>{children}</h5>;
        // },
    },
};
