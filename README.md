# Migrate __mcdaley.com__ Website to Nextjs and Tailwind CSS
Learning how to build a website using Nextjs and Tailwind CSS by recreating my website, wwww.mcdaley.com which is currently built in gatsby.

## Local Storage


## To Do
[x] Enhance Navbar
  [x] Style navbar links to display the active page.
[x] Blog Posts
  [x] Add links to previous and next blog post - look at using localStorage
  [x] Restyle the "Back Home" link
[] Code Cleanup 
  [x] Replace function input type of <any> in Blog Summary List and 
     replace w/ correct React type "React.ReactNode"
  [x] Remove "contentHtml" from IBlogPost interface and require "source"
  [] Figure out the type for "source" in IBlogPost interface, React.ReactNode?)
      - Causes error in vscode in the MDXRemote component
  [] Update the favicon.ico to use the robot
  [x] Shorten the blog excerpts.
  [x] Remove SVG logo from the navbar
  [x] Fix Footer and page margins
  [x] Replace goofy picture of me
[x] Reorganize blog posts into separate directories
  [x] PROBLEM: I CANNOT FIGURE OUT HOW TO LOAD IMAGES IN /blog-posts 
  [x] Migrate each blog post to its own directory
  [x] Change logic of getStaticPaths to read directories and files
  [x] Copy images from "public" to the blog directory.
  [x] Rename files from ".md" to ".mdx"
[] Add SEO using next/head
[] Add sitemap using the nextjs plugin
[] About Page - Look at updating the content
  [] Add LinkedIn content w/ my overview statement and then work experience
[] Upload to vercel and do some QA
