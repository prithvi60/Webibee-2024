import { gql } from "@apollo/client";

export const Get_LinkedInPosts = gql`
  query linkedin {
    linkedIn_Posts {
      article
      imageSrc
      videoSrc
      postUrl
      text
    }
  }
`;

export const Get_InstaPosts = gql`
  query instagram {
    insta_Posts {
      imageSrc
      isVideo
      postUrl
      text
      videoSrc
    }
  }
`;
