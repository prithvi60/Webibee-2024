import { PortableText } from "next-sanity";
import Image from "next/image";
import ContactForm from "../contact/ContactForm";

const BlogDetailsPage = ({ post }: { post: any }) => {

    return (
        <section className="relative w-full h-full flex flex-col lg:flex-row lg:justify-between gap-8 xl:gap-12 mx-auto lg:max-w-full xl:max-w-fit 2xl:ml-80 px-7 py-12 sm:py-16 xl:py-20">
            <div className="font-Gilroy space-6 md:space-y-10 lg:w-[70%]">
                <h2 className="text-2xl font-bold tracking-normal capitalize font-Gilroy text-secondary md:text-3xl xl:text-4xl">

                </h2>
                <h3 className={`font-EbGaramond text-4xl xl:text-6xl tracking-wider font-medium text-center md:text-start`}>
                    <strong className="text-info">{post.title}</strong>
                </h3>
                <div className="relative overflow-hidden w-full h-[35vh] md:h-[75vh] sm:px-20 xl:px-64 rounded-md">
                    <Image
                        fill
                        alt={post.imageAlt}
                        quality={100}
                        title="background image"
                        src={post.imageUrl}
                        className="object-cover object-center"
                    />
                </div>
                <div className="max-w-7xl font-Poppins prose prose-blue mx-auto prose-h1:text-3.5xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h3:text-2xl prose-h3:font-bold prose-h4:text-2xl prose-h4:font-bold prose-p:leading-relaxed prose-p:text-lg lg:prose-p:text-xl prose-p:mt-4 prose-p:mb-4 prose-blockquote:leading-relaxed prose-blockquote:text-lg lg:prose-blockquote:text-xl prose-list:list-disc prose-list-decimal">
                    <PortableText value={post.blockContent} components={customComponents} />
                </div>
            </div>
            <div className="w-full lg:w-[30%]">
                <ContactForm seo blog />
            </div>
        </section>
    )
}

export default BlogDetailsPage

const customComponents = {
    types: {
        image: ({ value }: { value: { imageUrl?: string; alt?: string } }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={value?.imageUrl} // Use the resolved `imageUrl` from GROQ
                alt={value?.alt || "Image"}
                className="w-full h-full max-w-md max-h-full mx-auto mt-20 mb-20 md:mt-20 md:mb-10"
            />
        ),
    },
};