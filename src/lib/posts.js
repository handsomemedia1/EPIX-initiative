export const posts = [
  // Empty initially as requested by the empty state. 
  // Adding posts here will automatically render them on the Blog page.
  /*
  {
    slug: "example-post",
    title: "Example Research Insight",
    category: "Research Insights",
    date: "2025-06-01",
    excerpt: "This is a brief summary of the research insight...",
    content: "Full content goes here..."
  }
  */
];

export async function getPosts() {
  return posts;
}
