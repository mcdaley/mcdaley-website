# Migrate __mcdaley.com__ Website to Nextjs and Tailwind CSS
Learning how to build a website using Nextjs and Tailwind CSS by recreating my website, wwww.mcdaley.com which is currently built in gatsby.

## To Do
[x] Enhance Navbar
  [x] Style navbar links to display the active page.
[] Blog Posts
  [] Add links to previous and next blog post - look at using localStorage
  [] Restyle the "Back Home" link
[] Code Cleanup 
  [x] Replace function input type of <any> in Blog Summary List and 
     replace w/ correct React type "React.ReactNode"
  [x] Remove "contentHtml" from IBlogPost interface and require "source"
  [] Figure out the type for "source" in IBlogPost interface, React.ReactNode?)
  [] Update the favicon.ico to use the robot
  [] Fix image alignment of the Blog Summary List on the home page.
  [] Shorten the blog excerpts.
  [] Remove SVG logo from the navbar
[] Reorganize blog posts into separate directories
  [] PROBLEM: I CANNOT FIGURE OUT HOW TO LOAD IMAGES IN /blog-posts 
  [] Migrate each blog post to its own directory
  [] Change logic of getStaticPaths to read directories and files
  [] Copy images from "public" to the blog directory.
  [] Rename files from ".md" to ".mdx"
[] Add SEO using next/head
[] Add sitemap using the nextjs plugin
[] About Page - Look at updating the content
  [] Add LinkedIn content w/ my overview statement and then work experience
