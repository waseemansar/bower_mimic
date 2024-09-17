# Bower Search Mimic - React Application

This project is a responsive web application that mimics the behavior of the [Bower search page](https://bower.io/search/). It allows users to search for projects and view results with pagination, sorting by stars, and rank. The application is built using React, TypeScript, TailwindCSS, and integrates the [Libraries.io](https://libraries.io) API for fetching data.

## Features

-   **Responsive Layout**: The application includes a header, left sidebar, footer, and content area for a clean and organized interface.
-   **Project Search**: Users can search for projects by name.
-   **Sorting**: Projects can be sorted by the number of stars and rank.
-   **Pagination**: The results are paginated, with 5 items per page and a numerical page selector.
-   **Shadcn UI**: Shadcn UI components are used to create a modern, consistent design.
-   **Unit Tests**: Business logic is unit tested using Vitest and React Testing Library.

## Tech Stack

-   **React**: JavaScript library for building user interfaces.
-   **TypeScript**: Strongly typed programming language that builds on JavaScript.
-   **Vite**: Fast build tool for modern web applications.
-   **TailwindCSS**: Utility-first CSS framework for rapid UI development.
-   **TanStack Query**: For data fetching and caching.
-   **Shadcn UI**: Beautifully designed components that we can copy and paste into our apps..
-   **Vitest**: Native Vite testing framework.
-   **React Testing Library**: Tools for testing React components effectively.

## Setup Instructions

### Prerequisites

Ensure the following are installed on your system:

-   [Node.js](https://nodejs.org/)
-   [Yarn](https://yarnpkg.com/) (package manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/waseemansar/bower_mimic.git
    cd bower_mimic
    ```

2. Install the dependencies:

    ```bash
    yarn install
    ```

3. Create a `.env` file in the root directory based on the `.env.example` file, and set up your environment variables:

    ```bash
    cp .env.example .env
    ```

4. Add your [Libraries.io API key](https://libraries.io/account) in the `.env` file:

    ```
    VITE_API_KEY=your_libraries_io_api_key
    ```

5. Start the development server:

    ```bash
    yarn start
    ```

6. Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the application.

### Running Tests

To run the unit tests, use the following command:

```bash
yarn test
```
