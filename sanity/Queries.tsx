import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
*[_type == "post"]|order(publishedAt desc) {
  title,
  slug,
  summary,
  publishedAt,
  body,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "plainBody": blockContent[].children[].text
}`;

export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug][0] {
  title,
  summary,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  blockContent[]{
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt
    }
  }
}
`

