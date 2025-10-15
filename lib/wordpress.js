import axios from 'axios';

const GRAPHQL_ENDPOINT = "https://plum-spider-437602.hostingersite.com/graphql";

export async function getBlogs() {
  const query = `
    query {
      posts {
        nodes {
          id
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(GRAPHQL_ENDPOINT, { query });

    const posts = response.data.data.posts.nodes;

    // Transform into shape expected by front-end
    return posts.map(post => ({
      id: post.id,
      title: { rendered: post.title },
      excerpt: { rendered: post.excerpt },
      slug: post.slug,
      featuredimageurl: post.featuredImage?.node?.sourceUrl || '',
    }));
  } catch (error) {
    console.error("Error fetching blogs from GraphQL:", error);
    return [];
  }
}
