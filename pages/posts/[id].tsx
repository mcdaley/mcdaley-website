//-----------------------------------------------------------------------------
// pages/posts/[id].ts
//-----------------------------------------------------------------------------
import Head                 from 'next/head'
import Link                 from 'next/link'
import {
  GetStaticPaths,
  GetStaticProps,
}                           from 'next'

import Layout               from '../../components/layout'
import Date                 from '../../components/date'
import { IBlogPost }        from '../../interfaces/blog.interfaces'
import {
  getAllPostIds,
  getPostData,
}                           from '../../lib/posts'

/**
 * @function  Post
 */
export default function Post({postData} : {postData: IBlogPost}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1>{postData.title}</h1>
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

      <br />
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </Layout>
  )
}

/**
 * Builds the dynamic routes for all of the blog posts using the markdown
 * files in the "/posts" directory.
 * 
 * @function  getStaticPaths
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

/**
 * @function  getStaticProps
 */
export const getStaticProps = async ( {params} : {params: IBlogPost} ) => {
  /////////////////////////////////////////////////////////////////////////////
  // TODO: 11/08/2021
  // I do not understand how the getPostData() method is returning a 
  // Promise? It doesn't return a Promise in the example code, but it only
  // works if I add the "await"
  //
  // Also, I could not get this to work with the ": GetStaticProps" option
  // as outlined in Nextjs documentation. I specifically set the data type
  // for the "params", which seems like the right thing to do.
  /////////////////////////////////////////////////////////////////////////////
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
