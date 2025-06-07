export function formatBlogPosts(posts, {
  filterOutDrafts = true,
  filterOutFuturePosts = true,
  sortByDate = true,
  limit = undefined,
} = {}) {

  const filteredPosts = posts.reduce((acc, post) => {
    const {pubDate, draft } = post.data;
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(pubDate) > new Date()) return acc;

    // add post to acc
    acc.push(post)

    return acc;
  }, [])

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;

}

// source https://www.youtube.com/watch?v=Eq0j71oLsFs