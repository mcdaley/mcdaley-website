//-----------------------------------------------------------------------------
// interfaces/blog.interfaces.ts
//-----------------------------------------------------------------------------

export interface IBlogPost {
  id:           string,
  title:        string,
  date:         string,
}

export interface IBlogData extends IBlogPost {
  contentHtml:  string,
}

