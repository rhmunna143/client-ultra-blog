This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Project: Ultra Blog

## Live Website: https://ultrablog.vercel.app
## Sever-side source code: https://github.com/rhmunna143/server-ultra-blog
## Storybook static link: https://sunny-belekoy-ec81b9.netlify.app

Running the Project Locally
1. Clone the repository

First, you need to clone the repository to your local machine. You can do this with the following command:

`git clone <repository_url>`

Replace <repository_url> with the URL of your Git repository.

2. Install the dependencies

Navigate into the project directory and install the necessary dependencies using npm (Node Package Manager):

`cd <project_directory>
npm install`

Replace <project_directory> with the name of the directory that was created when you cloned the repository.

3. Run the development server

Next.js comes with a built-in development server. You can start it with the following command:

`npm run dev`

This command starts the development server on http://localhost:3000. Open this URL in your web browser to view your project.

Remember to replace <repository_url> and <project_directory> with your specific details.


# The API's:

## Users

Register Route

1. URL: api/auth/register
- Method: POST
- Description: Allows users to register by providing their username, password, full name, image link, and email. The password is hashed before storing it in the database.
- Request Body: JSON object with the following properties:
- username: User's username
- password: User's password
- image_link: Link to the user's image (optional)
- email: User's email (optional)
- full_name: User's full name (optional)
image_link: Link to the user's image (optional)
email: User's email (optional)

2. Login Route

- URL: api/auth/login
- Method: POST
- Description: Allows users to log in by providing their username and password. Upon successful login, a JSON Web Token (JWT) is generated and set as an HTTP-only cookie.
- Request Body: JSON object with the following properties:
- username: User's username
- password: User's password

3. Update User Route

- URL: api/auth/update-user/:id
- Method: PUT
- Description: Allows authenticated users to update their profile details. Users can update their username, full name, image link, and email.
- Request Body: JSON object with the following properties:
- newUsername: New username (optional)
- full_name: New full name (optional)
- image_link: New image link (optional)
- email: New email (optional)

4. Logout Route

- URL: api/auth/logout
- Method: POST
- Description: Allows logged-in users to log out. Clears the JWT token cookie.
- Request Body: None

5 .Check Login Route

- URL: api/auth/check-login
- Method: GET
- Description: Allows authenticated users to check if they are logged in. Returns the user's details if they are logged in.
- Request Body: None

## Blog Posts

6. Create a New Post

- URL: api/posts/
- Method: POST
- Description: Allows authenticated users to create a new post by providing a title, content, and an optional image link.
- Request Body: JSON object with the following properties:
- title: Title of the post
- content: Content of the post
- image_link: Link to an image related to the post (optional)

7. Get All Posts

- URL: api/posts/
- Method: GET
- Description: Retrieves all posts from the database.
- Request Body: None

8. Get All Posts by the Current User

- URL: api/posts/users-post
- Method: GET
- Description: Retrieves all posts authored by the current user.
- Request Body: None

9. Get a Single Post

- URL: api/posts/:id
- Method: GET
- Description: Retrieves a single post by its ID.
- Request Body: None


10. Update a Post

- URL: api/posts/:id
- Method: PUT
- Description: Allows authenticated users to update their own posts by providing a new title, content, and an optional image link.
- Request Body: JSON object with the following properties:
- title: New title of the post
- content: New content of the post
- image_link: New link to an image related to the post (optional)

11. Delete a Post

- URL: api/posts/:id
- Method: DELETE
- Description: Allows authenticated users to delete their own posts by providing the post ID.
- Request Body: None

# Live API's:

1. Posts API

- Base URL: https://server-ultra-blog.vercel.app/api/posts

- Create a New Post
- URL: /
- Method: POST
- Description: Create a new post.
- Request Body: JSON object with title, content, and optionally image_link.
##
- Get All Posts
- URL: /
- Method: GET
- Description: Retrieve all posts.
##
- Get All Posts by the Current User
- URL: /users-post
- Method: GET
- Description: Retrieve all posts authored by the current user.
##
- Get a Single Post
- URL: /:id
- Method: GET
- Description: Retrieve a single post by its ID.
##
- Update a Post
- URL: /:id
- Method: PUT
- Description: Update a post by its ID.
- Request Body: JSON object with title, content, and optionally image_link.
##
- Delete a Post
- URL: /:id
- Method: DELETE
- Description: Delete a post by its ID.
##
2. Authentication (User) API

- Base URL: https://server-ultra-blog.vercel.app/api/auth

- Register User
- URL: /register
- Method: POST
- Description: Register a new user.
- Request Body: JSON object with username, password, full_name, image_link, and email.
##
- Login User
- URL: /login
- Method: POST
- Description: Log in a user.
- Request Body: JSON object with username and password.
##
- Update User
- URL: /update-user/:id
- Method: PUT
- Description: Update user details.
- Request Body: JSON object with newUsername, full_name, image_link, and email.
##
- Logout User
- URL: /logout
- Method: POST
- Description: Log out a user.
##
- Check Login Status
- URL: /check-login
- Method: GET
- Description: Check if a user is logged in.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


