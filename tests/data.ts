import { Project } from "@/api/projects";

export const projects: Project[] = [
    {
        description: "TypeScript is a language for application scale JavaScript development",
        homepage: "https://www.typescriptlang.org/",
        keywords: ["TypeScript", "Microsoft", "compiler", "language", "javascript", "typechecker"],
        name: "typescript",
        rank: 35,
        repository_url: "https://github.com/microsoft/TypeScript",
        stars: 100188,
    },
    {
        description: "TypeScript definitions for node",
        homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node",
        keywords: ["definition", "dts", "hacktoberfest", "types", "typescript", "typescript-definitions", "typings"],
        name: "@types/node",
        rank: 34,
        repository_url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
        stars: 48234,
    },
    {
        description: "React package for working with the DOM.",
        homepage: "https://reactjs.org/",
        keywords: ["react", "declarative", "frontend", "javascript", "library", "ui"],
        name: "react-dom",
        rank: 33,
        repository_url: "https://github.com/facebook/react",
        stars: 227362,
    },
    {
        description: "React is a JavaScript library for building user interfaces.",
        homepage: "https://reactjs.org/",
        keywords: ["react", "declarative", "frontend", "javascript", "library", "ui"],
        name: "react",
        rank: 32,
        repository_url: "https://github.com/facebook/react",
        stars: 227362,
    },
    {
        description: "Promise based HTTP client for the browser and node.js",
        homepage: "https://axios-http.com",
        keywords: ["xhr", "http", "ajax", "promise", "node", "hacktoberfest", "http-client", "javascript", "nodejs"],
        name: "axios",
        rank: 31,
        repository_url: "https://github.com/axios/axios",
        stars: 105165,
    },
    {
        description: "WebJar for react",
        homepage: "https://www.webjars.org",
        keywords: ["declarative", "frontend", "javascript", "library", "react", "ui"],
        name: "org.webjars.bowergithub.facebook:react",
        rank: 15,
        repository_url: "https://github.com/facebook/react",
        stars: 227472,
    },
    {
        description: "WebJar for react",
        homepage: "http://webjars.org",
        keywords: [],
        name: "org.webjars.bower:react",
        rank: 16,
        repository_url: "https://github.com/reactjs/react-bower",
        stars: 69,
    },
    {
        description: "React package for working with the DOM.",
        homepage: "https://reactjs.org/",
        keywords: ["react", "declarative", "frontend", "javascript", "library", "ui"],
        name: "react-dom-1",
        rank: 33,
        repository_url: "https://github.com/facebook/react",
        stars: 227472,
    },
    {
        description: "Bindings of the ReactJS library for building interactive interfaces.",
        homepage: "https://github.com/cleandart/react-dart",
        keywords: ["dart", "dart-wrapper", "javascript", "react-js", "reactjs"],
        name: "react-test",
        rank: 15,
        repository_url: "https://github.com/cleandart/react-dart",
        stars: 411,
    },
    {
        description:
            "React is a JavaScript library for building user interfaces. It's declarative, efficient, and extremely flexible. What's more, it works with the libraries and frameworks that you already know. \nhttp://facebook.github.io/react/",
        homepage: "http://facebook.github.io/react/index.html",
        keywords: ["", "declarative", "frontend", "javascript", "library", "react", "ui"],
        name: "react-router",
        rank: 13,
        repository_url: "https://github.com/facebook/react",
        stars: 227472,
    },
];

export const sortedProjectsByStars = [...projects].sort((a, b) => b.stars - a.stars);

export const filteredProjectsByNameReact = [...projects].filter((project) => project.name === "react");
