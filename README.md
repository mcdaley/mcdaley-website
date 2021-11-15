# Migrate __mcdaley.com__ Website to Nextjs and Tailwind CSS
Learning how to build a website using Nextjs and Tailwind CSS by recreating my website, wwww.mcdaley.com which is currently built in gatsby.

## To Do
[x] Copy my blog posts to this project.
[x] Add blog post summary to blog post lists.
[x] Add blog image to the BlogPostSummary.
[x] Refactor BlogSummaryList and BlogSummary to use code format in react examples.
[x] Add group hover for each blog post
[] Redesign Navbar component
  [] Fix Navbar to use the whole page and move links to the far right.
  [] Replace text links w/ icons for mobile screen
  [] Style navbar links to display the active page.
  [] Add a logo next to the "Logo Here"
[] Remove all of the old "css" files
  [x] Remove "styles.container" from index.tsx
  [] Redesign the footer using tailwind
  [] Look at layout from gatsby version of mcdaley.com
[x] Refactor the Navbar
  [x] Create separate Navbar component.
[] Update the favicon.ico to use the robot
[] Refactor the page layout to use the Grad w/ colspans (similar to bootstrap).
[] Style the home page.
[] Add the left sidebar w/ my info on it.
[] Add responsive behavior to website
[x] Add styling to the Blog posts
[] Reorganize blog posts into separate directories
  [] Migrate each blog post to its own directory
  [] Change logic of getStaticPaths to read directories and files
  [] Copy images from "public" to the blog directory.
  [] Rename files from ".md" to ".mdx"
[] Code Cleanup 
  [x] Replace function input type of <any> in Blog Summary List and 
     replace w/ correct React type "React.ReactNode"
  [x] Remove "contentHtml" from IBlogPost interface and require "source"
  [] Figure out the type for "source" in IBlogPost interface.
