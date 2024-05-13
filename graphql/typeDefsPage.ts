export const typeDefsPage = `#graphql

type InstaPost {
  text : String
  postUrl : String
  imageSrc : String
  videoSrc : String
  isVideo : Boolean
}

type LinkedInPost {
  text : String
  postUrl : String
  imageSrc : String
  article : String
  videoSrc : String
}

type Query {
  insta_Posts : [InstaPost]
  linkedIn_Posts : [LinkedInPost]
}
`;
