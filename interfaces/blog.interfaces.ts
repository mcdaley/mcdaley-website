//-----------------------------------------------------------------------------
// interfaces/blog.interfaces.ts
//-----------------------------------------------------------------------------

/**
 * @interface IBlogMetadata
 */
export interface IBlogMetadata {
  id:           string,
  title:        string,
  date:         string,
  cover?:       string,
  excerpt:      string,
}

/**
 * @interface IBlogPost
 */
export interface IBlogPost extends IBlogMetadata {
  contentHtml:  string,
  source?:      any,
}

