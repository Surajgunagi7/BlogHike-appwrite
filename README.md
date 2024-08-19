# BlogHike

Welcome to BlogHike, a blogging platform where you can share your thoughts, read others' blogs, and engage with a community of writers. This project is built with modern web technologies and offers features for creating, editing, and viewing blog posts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **User Authentication:** Sign up, log in, and manage your account.
- **Post Management:** Create, edit, and delete your blog posts.
- **Responsive Design:** Enjoy a seamless experience on both desktop and mobile devices.
- **Dark Mode:** Switch between light and dark themes for better readability.
- **Dynamic Content:** Fetch and display posts with real-time updates.

## Technologies Used

- **Frontend:** ReactJS, Tailwind CSS
- **Backend:** Appwrite (for authentication, database, and storage)
- **State Management:** Redux Toolkit
- **Form Handling:** react-hook-form
- **Editor:** Tiny MCE
- **Design:** Tailwind CSS

## Installation

To get started with BlogHike, follow these steps:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/yourusername/bloghike.git
    cd bloghike
    ```

2. **Install Dependencies:**
    ```bash
    npm i
    ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the necessary environment variables. Example:
    ```env
    VITE_APPWRITE_URL = <your-appwrite-endpoint>
    VITE_APPWRITE_PROJECT_ID = <your-appwrite-project-id>
    VITE_APPWRITE_DATABASE_ID = <your-appwrite-database-id>
    VITE_APPWRITE_COLLECTIONS_ID = <your-appwrite-collections-id>
    VITE_APPWRITE_BUCKET_ID = <your-appwrite-bucket-id>
    VITE_TINYMCE_API_KEY = <your-tinymce-apiKey-id>
    ```

4. **Run the Development Server:**
    ```bash
    npm run dev
    ```

5. **Navigate to `http://localhost:<Port Number>` in your browser to view the application.**

## Usage

- **Home Page:** View recent posts posted by you.
- **Login Page:** Authenticate to access personalized features.
- **All Posts:** List of all the Posts by the Users.
- **Post Creation:** Use the form to create and publish new posts.
- **Post Editing:** Edit or delete your existing posts.

## Contributing

We welcome contributions to BlogHike! If you'd like to contribute, please follow these steps:

1. **Fork the Repository**
2. **Create a New Branch:**
    ```bash
    git checkout -b feature/your-feature
    ```
3. **Make Your Changes**
4. **Commit Your Changes:**
    ```bash
    git commit -am 'Add new feature'
    ```
5. **Push to the Branch:**
    ```bash
    git push origin feature/your-feature
    ```
6. **Create a Pull Request**

## Thank You