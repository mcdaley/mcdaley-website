# Migrate __mcdaley.com__ Website to Nextjs and Tailwind CSS
Learning how to build a website using Nextjs and Tailwind CSS by recreating my website, wwww.mcdaley.com which is currently built in gatsby.

## To Do
[x] Copy my blog posts to this project.
[x] Add blog post summary to blog post lists.
[x] Add blog image to the BlogPostSummary.
[x] Refactor BlogSummaryList and BlogSummary to use code format in react examples.
[x] Add group hover for each blog post
[x] Redesign Navbar component
  [x] Fix Navbar to use the whole page and move links to the far right.
  [x] Add a logo next to the "Logo Here"
[x] Remove all of the old "css" files
  [x] Remove "styles.container" from index.tsx
  [x] Redesign the footer using tailwind
  [x] Look at layout from gatsby version of mcdaley.com
[x] Refactor the Navbar
  [x] Create separate Navbar component.
[x] Update Home Page Design
  [x] Refactor the page layout to use the Grad w/ colspans (similar to bootstrap).
  [x] Remove extra background colors in blog posts
  [x] Add the left sidebar w/ my info on it.
  [x] Hide left sidebar for mobile screens.
  [x] Add top container on mobile
[x] Add styling to the Blog posts
[x] About Page
  [x] Add background section
  [x] Add skills
  [x] Add personal section
  [] Add LinkedIn content w/ my overview statement and then work experience
[] Reorganize blog posts into separate directories
  [] Migrate each blog post to its own directory
  [] Change logic of getStaticPaths to read directories and files
  [] Copy images from "public" to the blog directory.
  [] Rename files from ".md" to ".mdx"
[] Enhance Navbar
  [] Style navbar links to display the active page.
  [] Replace LOGO HERE w/ MCDALEY.COM
  [] Pick color for navbar background
[] Code Cleanup 
  [x] Replace function input type of <any> in Blog Summary List and 
     replace w/ correct React type "React.ReactNode"
  [x] Remove "contentHtml" from IBlogPost interface and require "source"
  [] Figure out the type for "source" in IBlogPost interface, React.ReactNode?)
  [] Update the favicon.ico to use the robot
  [] Fix image alignment of the Blog Summary List on the home page.
  [] Shorten the blog excerpts.
[] Blog Posts
  [] Add links to previous and next blog post
  [] Restyle the "Back Home" link
