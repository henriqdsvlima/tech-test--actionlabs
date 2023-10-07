<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>tech-test--actionlabs
</h1>
<h3>◦ Power-up Your Tech with Action Labs</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
<img src="https://img.shields.io/github/languages/top/henriqdsvlima/tech-test--actionlabs?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/henriqdsvlima/tech-test--actionlabs?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/henriqdsvlima/tech-test--actionlabs?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/henriqdsvlima/tech-test--actionlabs?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a web application that provides functionalities for fetching and displaying current and daily exchange rates. It allows users to search for exchange rates using a form, view detailed information in an interactive accordion display, and sort the data. The purpose of the project is to provide users with real-time exchange rate information, helping them make informed decisions in currency conversions. Its value proposition lies in its simplicity, responsiveness, and user-friendly interface, providing a seamless experience for users interested in monitoring and comparing currency exchange rates.

---

## ⚙️ Features

Exception: 

---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [tailwind.config.js](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/tailwind.config.js)                                                | This code configures the style and content of a web application. It defines the files to be included as content, extends the theme by adding custom fonts and screen sizes, and allows the use of customized media queries. No plugins are added.                                                                                                                                                                                                                       |
| [index.html](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\index.html)                                                            | This HTML code serves as a basic boilerplate template for a web page. It includes essential tags like doctype, head, meta, title, base, link, and body. The app-root element is where the main content of the page will be rendered.                                                                                                                                                                                                                                    |
| [main.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\main.ts)                                                                  | This code imports the platformBrowserDynamic function from the Angular framework and the AppModule from the app module file. It then uses the platformBrowserDynamic function to bootstrap the AppModule and catch any errors.                                                                                                                                                                                                                                          |
| [styles.scss](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\styles.scss)                                                          | The code includes the usage of the Tailwind CSS library for styling. It applies a base, components, and utility styles. The "@apply font-roboto;" directive sets the Roboto font for all elements.                                                                                                                                                                                                                                                                      |
| [app-routing.module.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\app-routing.module.ts)                                  | This code sets up the routing configuration for an Angular application. It imports the necessary modules and components, defines a single route for the home page, and exports the routing module. The AppRoutingModule is responsible for managing and navigating between different pages of the application.                                                                                                                                                          |
| [app.component.html](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\app.component.html)                                        | The code includes a header, a router outlet for loading different components,and a footer.                                                                                                                                                                                                                                                                                                                                                                              |
| [app.component.scss](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\app.component.scss)                                        | This code provides a set of core functionalities that include data processing, manipulation, and analysis. It enables operations such as filtering, sorting, and aggregating data. Additionally, it facilitates data visualization through various graphics and provides error handling mechanisms to ensure robustness and reliability.                                                                                                                                |
| [app.component.spec.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\app.component.spec.ts)                                  | This code is a test suite for an Angular component called "AppComponent". It includes three test cases: 1) it checks whether the component is created or not, 2) it veriƒes that the component's title is set to'boilerplate', and 3) it ensures that the title is rendered correctly in the component's HTML template. The tests are run using the Angular testing module and the RouterTestingModule for routing-related testing.                                     |
| [app.component.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\app.component.ts)                                            | This code is an angular component with a simple functionality of setting the value of "title" as "boilerplate". It serves as the root component for the application.                                                                                                                                                                                                                                                                                                    |
| [app.module.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\app.module.ts)                                                  | This code is for an Angular application. It imports necessary modules and components for the app. It includes functionality for HTTP requests, routing, forms, and caching. The main component is App component, with a home component, header, footer, and an accordion component. It also includes a custom pipe for sorting in descending order.                                                                                                                     |
| [accordion.component.html](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\accordion\accordion.component.html)       | This piece of code is for an interactive accordion display that shows daily exchange rates. It retrieves daily exchange data and displays key information such as open, close, high, and low rates, along with the percentage difference in closing rates. The accordion can expand or collapse to show or hide the detailed information. The code also includes styling for a visually appealing UI.                                                                   |
| [accordion.component.scss](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\accordion\accordion.component.scss)       | This code defines CSS style rules for an accordion component. It includes header and body styles for the accordion, as well as an exchange rate overview section with a title. The styles utilize various utility classes for flexibility and customization.                                                                                                                                                                                                            |
| [accordion.component.spec.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\accordion\accordion.component.spec.ts) | This code is a unit test for an Angular component called AccordionComponent. It tests if the component is created successfully using TestBed and ComponentFixture. More specifically, it checks if the component instance is truthy, indicating a successful creation.                                                                                                                                                                                                  |
| [accordion.component.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\accordion\accordion.component.ts)           | The code defines an Angular component called AccordionComponent. It takes input data related to daily exchange rates and a close difference value. It has a method to load the daily exchange rates and a toggle method to show/hide the accordion content. It also has a method to determine the CSS class based on the close difference value.                                                                                                                        |
| [footer.component.html](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\layouts\footer\footer.component.html)        | The code implements a footer section on a web page with a copyright notice for the year 2022 mentioning the company name as "Action Labs".                                                                                                                                                                                                                                                                                                                              |
| [footer.component.scss](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\layouts\footer\footer.component.scss)        | This code defines a CSS class named ".footer" that applies multiple properties to style a web page footer element. It sets the width to 100% of the parent container, sets the background color to a specific shade of blue, sets the text color to white, aligns the content horizontally, adds padding on all sides, fixes the position to the bottom of the viewport, and makes it a flex container.                                                                 |
| [footer.component.spec.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\layouts\footer\footer.component.spec.ts)  | The code is a unit test that checks whether the `FooterComponent` can be created successfully in an Angular environment. It uses the `TestBed` and `ComponentFixture` classes from Angular's testing module. The test setup includes declaring the `FooterComponent`, creating an instance of it, and detecting any changes. The test verifies that the component is truthy, indicating successful creation.                                                            |
| [footer.component.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\layouts\footer\footer.component.ts)            | The code defines an Angular component called "FooterComponent" that serves as the footer section of a web app. It doesn't implement any specific functionality, but rather provides a structure and styling for the footer by specifying the template and style files to be used.                                                                                                                                                                                       |
| [header.component.html](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\layouts\header\header.component.html)        | HTTPStatus Exception: 400                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [header.component.scss](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\layouts\header\header.component.scss)        | The code snippet applies flexbox and center alignment to elements with the "sm" class in the header, ensuring responsive design and centered content.                                                                                                                                                                                                                                                                                                                   |
| [header.component.spec.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\layouts\header\header.component.spec.ts)  | This code is a unit test for the HeaderComponent in an Angular application. It creates a test bed and fixture, configures the test module, and creates an instance of the HeaderComponent. It then checks if the component was successfully created.                                                                                                                                                                                                                    |
| [header.component.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\layouts\header\header.component.ts)            | The code defines an Angular component called "HeaderComponent" that is responsible for rendering the header section of a web application.                                                                                                                                                                                                                                                                                                                               |
| [home.component.html](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\pages\home\home.component.html)                | This code is a front-end component that allows users to search and display exchange rates for different currencies in relation to the Brazilian Real (BRL). It includes a form for submitting search queries, loading and error messages, and sections for displaying the current exchange rate and daily exchange rates.                                                                                                                                               |
| [home.component.scss](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\pages\home\home.component.scss)                | This code defines the styling for an exchange rate component. It utilizes utility classes for responsive layouts and applies styles to form inputs, buttons, and rates. The component has a title, input field, and submit button for currency conversion, displaying the converted result.                                                                                                                                                                             |
| [home.component.spec.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\pages\home\home.component.spec.ts)          | This code sets up and runs unit tests for the HomeComponent in an Angular application using TestBed and ComponentFixture. It ensures that the component can be created without errors.                                                                                                                                                                                                                                                                                  |
| [home.component.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\components\pages\home\home.component.ts)                    | The code is an Angular component that allows the user to search for current and daily exchange rates. It uses a form to input a currency code and makes API calls to fetch the exchange rates. The component also handles error conditions and displays the results to the user. It utilizes a child component called "AccordionComponent".                                                                                                                             |
| [cache.interceptor.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\cache\cache.interceptor.ts)                         | This code implements an Angular HTTP interceptor that adds caching functionality to GET requests. It stores responses in a cache map and checks the cache before making a request. If the response is found in the cache, it returns it. If not, it makes the request, stores the response in the cache, and returns it.                                                                                                                                                |
| [environment.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\environment\environment.ts)                               | HTTPStatus Exception: 503                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [sort-desc.pipe.spec.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\pipes\sort\sort-desc.pipe.spec.ts)                | The code is testing the functionality of the SortDescPipe class. The test checks if an instance of the SortDescPipe can be created successfully.                                                                                                                                                                                                                                                                                                                        |
| [sort-desc.pipe.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\pipes\sort\sort-desc.pipe.ts)                          | The code defines a custom Angular pipe named "sortDesc" that allows sorting an array in descending order based on an object property. It takes an array and a property name as input, then uses the JavaScript "sort" method to sort the array in descending order using a comparison function. The resulting sorted array is returned as the output of the pipe.                                                                                                       |
| [sort.pipe.spec.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\pipes\sort\sort.pipe.spec.ts)                          | This code is for the SortPipe, which is a custom Angular pipe used for sorting data. The code includes a unit test to ensure that the SortPipe is created successfully.                                                                                                                                                                                                                                                                                                 |
| [sort.pipe.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\pipes\sort\sort.pipe.ts)                                    | The SortPipe is an Angular pipe that allows sorting of an array of objects based on a specified property. It takes an array and property as input, and sorts the array in ascending order using the specified property as the criteria for comparison. The sorted array is then returned as output.                                                                                                                                                                     |
| [api-error.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\responses\api-error.ts)                                     | This code defines an interface for API errors, with properties including statusCode, type, message, and errors. It also includes an enum for different types of API errors such as Unauthorized, Forbidden, NotFound, and GenericError.                                                                                                                                                                                                                                 |
| [api.models.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\responses\api.models.ts)                                   | This code defines interfaces for API response models. It includes ApiResponse for single data response, ApiListResponse for list data response, and Pagination for pagination details. These interfaces are used to structure and handle API responses in a TypeScript project.                                                                                                                                                                                         |
| [error-response.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\responses\error-response.ts)                           | This code defines an interface named ApiError which represents an error response from an API. It includes properties for statusCode (HTTP status code), message (error message), and errors (additional error details).                                                                                                                                                                                                                                                 |
| [query-parameters.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\responses\query-parameters.ts)                       | The code defines an interface, "QueryParameters", with optional properties used for URL query parameters in an HTTP request. It includes page number, limit of items per page, search term, and a potential rate limit indicator. Additionally, it allows for any other custom query parameters by using key-value pairs.                                                                                                                                               |
| [api.service.spec.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\services\api.service.spec.ts)                        | This code is a unit test for the ApiService class. It sets up the TestBed environment for Angular testing and checks that the service is successfully created.                                                                                                                                                                                                                                                                                                          |
| [api.service.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\services\api.service.ts)                                  | The code provides core functionalities for interacting with an API to fetch current and daily exchange rates. It includes methods to get the current exchange rate between two symbols and retrieve the daily exchange rates for the last 30 days. Error handling is also implemented to handle different HTTP error statuses and provide appropriate error messages.                                                                                                   |
| [token.interceptor.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\core\token\token.interceptor.ts)                         | This code is an Angular interceptor that adds a header ('apiKey') to outgoing HTTP requests. It clones the original request and modifies it with the header before passing it to the next handler.                                                                                                                                                                                                                                                                      |
| [current-exchange-rate.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\interfaces\current-exchange-rate.ts)                 | The code defines interfaces for representing current exchange rate data. The "ICurrentExchangeRate" interface outlines specific properties for an exchange rate, including the rate itself, symbols for conversion, the last update time, a success indicator, and the difference between the current and previous close rates. The "ICurrentExchangeRateOverview" type is a partial version of the "ICurrentExchangeRate" interface, allowing for optional properties. |
| [exchange-rate.ts](https://github.com/henriqdsvlima/tech-test--actionlabs/blob/main/src\app\interfaces\exchange-rate.ts)                                 | The code defines interfaces for representing daily exchange rates and their overview. The IDailyExchangeRate interface contains properties like date, open, close, high, low, and closeDif which stores the difference between close and open rate. The IDailyExchangeRateOverview is a subset of IDailyExchangeRate, allowing for optional properties.                                                                                                                 |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

### 📦 Installation

1. Clone the tech-test--actionlabs repository:
```sh
git clone https://github.com/henriqdsvlima/tech-test--actionlabs
```

2. Change to the project directory:
```sh
cd tech-test--actionlabs
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using tech-test--actionlabs

```sh
npm run build && node dist/main.js
```

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
