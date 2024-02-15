export const layout = "layouts/libraries.njk";
export const title = "Frameworks";

export default function* ({ search, paginate }) {
  const posts = search.pages("type=framework", "date=desc");

  for (
    const data of paginate(posts, { url, size: 10 })
  ) {
    // Show the first page in the menu
    if (data.pagination.page === 1) {
      data.menu = {
        visible: true,
        order: 2,
      };
    }

    yield data;
  }
}

function url(n) {
  if (n === 1) {
    return "/frameworks/";
  }

  return `/frameworks/${n}/`;
}