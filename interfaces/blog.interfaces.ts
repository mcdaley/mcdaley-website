//-----------------------------------------------------------------------------
// interfaces/blog.interfaces.ts
//-----------------------------------------------------------------------------

export interface IBlogMetadata {
  id:           string,
  title:        string,
  date:         string,
}

export interface IBlogPost extends IBlogMetadata {
  contentHtml:  string,
}

