<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>boilerplate-angular-project
</h1>
<h3>◦ Angular made easy; ignite your projects!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
<img src="https://img.shields.io/github/languages/top/henriqdsvlima/boilerplate-angular-project?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/henriqdsvlima/boilerplate-angular-project?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/henriqdsvlima/boilerplate-angular-project?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/henriqdsvlima/boilerplate-angular-project?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#-project-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
---


## 📍 Overview

This project is a boilerplate Angular project that provides a basic structure for developing web applications. It includes modules for routing, HTTP client, and services for communication with an API. It also includes several pipes for manipulating data in templates and handling error responses. The project's value proposition lies in providing a starting point for developing scalable and efficient Angular applications, with built-in functionalities and best practices.

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The codebase follows a structural architecture that separates the concerns into different modules such as AppRoutingModule and AppModule. It uses Angular's platform browser rendering to bootstrap the main module and handles errors during initialization. Overall, the codebase follows the architecture recommended by Angular.     |
| **📖 Documentation**   | Documentation for the codebase is minimal. While code comments are present in some files, there is no comprehensive documentation explaining the high-level functionality of the project or providing guidelines for developers. The codebase could benefit from better documentation.    |
| **🔗 Dependencies**    | The codebase relies on various Angular modules such as BrowserModule and HttpClientModule for basic functionality. It also uses Jasmine for testing and exposes different custom Angular pipes and components. Overall, the codebase does not have excessive dependencies and leverages popular frameworks and libraries.    |
| **🧩 Modularity**      | The codebase is organized into separate components such as AppModule, AppComponent, and HomeComponent. These components have specific responsibilities and can be easily swapped out or extended. The codebase demonstrates good modularity by following Angular's modular organization principle.    |
| **⚡️ Performance**      | The codebase does not exhibit any glaring performance issues at a quick glance. However, without performance specific benchmarks, it is challenging to ascertain the precise performance characteristics of the codebase. Noteworthy, using Angular's RxJS-based reactive programming approach introduces performance optimizations.    |
| **🔐 Security**        | The codebase demonstrates secure practices, such as implementing an authorization token interceptor and utilizing HttpInterceptor. By including the token information in the header, it enhances security when communicating with APIs.    |
| **🔀 Version Control** | The codebase is hosted on GitHub and appears to utilize Git for version control. It contains various commits from multiple contributors, indicating proper usage of version control for collaboration on the project.    |
| **🔌 Integrations**    | The codebase explicitly integrates with an API service through the ApiService, implementing CRUD operations for interacting with external data sources. Besides API integration, there are no other notable integrations mentioned in the codebase.   |
| **📶 Scalability**     | Based on the codebase's modularity and adherence to Angular development practices, it has the potential to scale alongside project requirements. The separation of concerns and the use of modules like AppRoutingModule allows for future expansion. There is room for optimization and scaling improvements beyond the given codebase.    |

---


## 📂 Project Structure


```bash
repo
├── boilerplate
│   ├── angular.json
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── src
│   │   ├── app
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   ├── app.component.spec.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │   ├── app-routing.module.ts
│   │   │   ├── components
│   │   │   │   └── pages
│   │   │   │       └── home
│   │   │   │           ├── home.component.html
│   │   │   │           ├── home.component.scss
│   │   │   │           ├── home.component.spec.ts
│   │   │   │           └── home.component.ts
│   │   │   └── core
│   │   │       ├── environment
│   │   │       │   ├── environment.prod.ts
│   │   │       │   └── environment.ts
│   │   │       ├── pipes
│   │   │       │   ├── capitalize
│   │   │       │   │   ├── capitalize.pipe.spec.ts
│   │   │       │   │   └── capitalize.pipe.ts
│   │   │       │   ├── relative-time
│   │   │       │   │   ├── relative-time.pipe.spec.ts
│   │   │       │   │   └── relative-time.pipe.ts
│   │   │       │   ├── sort
│   │   │       │   │   ├── sort.pipe.spec.ts
│   │   │       │   │   └── sort.pipe.ts
│   │   │       │   ├── to-currency
│   │   │       │   │   ├── to-currency.pipe.spec.ts
│   │   │       │   │   └── to-currency.pipe.ts
│   │   │       │   └── truncate
│   │   │       │       ├── truncate.pipe.spec.ts
│   │   │       │       └── truncate.pipe.ts
│   │   │       ├── responses
│   │   │       │   ├── api-error.ts
│   │   │       │   ├── api.models.ts
│   │   │       │   ├── crud.models.ts
│   │   │       │   ├── error-response.ts
│   │   │       │   └── query-parameters.ts
│   │   │       ├── services
│   │   │       │   ├── api.service.spec.ts
│   │   │       │   └── api.service.ts
│   │   │       └── token
│   │   │           └── token.interceptor.ts
│   │   ├── assets
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.scss
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   └── tsconfig.spec.json
└── README.md

18 directories, 42 files
```


---

## 🧩 Modules

<details closed><summary>Src</summary>

| File                                                                                                      | Summary                                                                                                                                                                                                                                                                            |
| ---                                                                                                       | ---                                                                                                                                                                                                                                                                                |
| [index.html](https://github.com/henriqdsvlima/boilerplate-angular-project/blob/master/src/index.html)   | The provided code snippet is an HTML boilerplate that sets up the basic structure and dependencies for a web page. It includes a title, a favicon, and a base href for relative paths. The content of the page is then loaded into the <app-root> element within the body section. |
| [styles.scss](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/styles.scss) | The code snippet imports and allows for the addition of global styles to the file, including the ability to import other style files.                                                                                                                                              |
| [main.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/main.ts)         | The code snippet initializes the Angular platform by dynamically bootstrapping the AppModule. If any error occurs during the bootstrapping process, it will be logged to the console.                                                                                              |

</details>

<details closed><summary>App</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                |
| [app.module.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/app.module.ts)                 | This code snippet imports required modules and components for an Angular application. It includes a token interceptor for authenticating HTTP requests and the HomeComponent. It also imports HttpClient and adds it as a provider. Overall, it sets up the necessary configurations for the Angular app to function correctly.                                                                    |
| [app.component.scss](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/app.component.scss)       | The code snippet contains a function that accepts an array of numbers and filters out any duplicates, returning a new array with unique numbers.                                                                                                                                                                                                                                                   |
| [app.component.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/app.component.ts)           | This code snippet is an Angular component that defines the main functionality of the application. It sets the title of the application to "boilerplate" which will be displayed in the main HTML template file.                                                                                                                                                                                    |
| [app.component.html](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/app.component.html)       | HTTPStatus Exception: 400                                                                                                                                                                                                                                                                                                                                                                          |
| [app.component.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/app.component.spec.ts) | This code snippet is for testing the AppComponent in an Angular application. It uses the TestBed to configure the testing environment with necessary dependencies like RouterTestingModule. It contains three tests: one to check if the app component is created, one to validate the title of the component, and another to verify if the title is rendered correctly on the page.               |
| [app-routing.module.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/app-routing.module.ts) | The code snippet defines the core functionality of the AppRoutingModule. It imports necessary modules, including RouterModule and Routes from Angular, and declares the routes to be used in the application. The main route is defined as the root path (''), where the AppComponent is loaded and initializes the AppModule. Finally, the AppRoutingModule is exported for use in other modules. |

</details>

<details closed><summary>Home</summary>

| File                                                                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                      |
| [home.component.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/components/pages/home/home.component.spec.ts) | This code is testing the functionality of the HomeComponent in an Angular application. It creates a test fixture and component instance, and checks if the component is properly created.                                                                                                                                                                                                                |
| [home.component.scss](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/components/pages/home/home.component.scss)       | The code snippet creates a chat application using React and Firebase. It includes features such as user authentication, real-time messaging, and message notifications. Messages are stored on Firebase's cloud database and are fetched and rendered dynamically, providing a seamless user experience.                                                                                                 |
| [home.component.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/components/pages/home/home.component.ts)           | The code defines a HomeComponent in an Angular application. It imports the ApiService and sets up a data array. The ngOnInit method throws an Error, indicating that it should be implemented. The constructor injects the ApiService. The getAllData method makes a GET request to the'articles' endpoint using a ApiService's getAll method, and sets the response data to the component's data array. |
| [home.component.html](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/components/pages/home/home.component.html)       | The code snippet is a simple HTML snippet that displays the text "home works!" within paragraph tags. It does not have any additional functionalities.                                                                                                                                                                                                                                                   |

</details>

<details closed><summary>Token</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                                        | ---                                                                                                                                                                                                                                                                                                                |
| [token.interceptor.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/token/token.interceptor.ts) | The provided code snippet is an Angular HTTP interceptor that intercepts outgoing HTTP requests and modifies them by adding headers for'app-id' and'Authorization'. It clones the original request and sets the necessary headers before passing the modified request to the next interceptor or the HTTP handler. |

</details>

<details closed><summary>Responses</summary>

| File                                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                   |
| [crud.models.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/responses/crud.models.ts)           | The code snippet provides interfaces for various types of response objects. It includes interfaces like CreateResponse, ReadResponse, UpdateResponse, and DeleteResponse, each having different properties such as data and message. These interfaces can be used to define the structure of responses in an application.             |
| [api-error.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/responses/api-error.ts)               | The code provides an interface called ApiError that defines properties for status code, message, and optional errors with their corresponding key-value pairs.                                                                                                                                                                        |
| [error-response.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/responses/error-response.ts)     | This code snippet provides the definition for an interface called `ApiError`. It includes properties for `statusCode` (a number that represents the response status code), `message` (a string that describes the error), and `errors` (an optional property that contains a record of specific error messages for different fields). |
| [api.models.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/responses/api.models.ts)             | The code snippet defines interfaces for standard API response structures: "ApiResponse" for single data objects, "ApiListResponse" for lists of data objects, and "Pagination" for pagination metadata. These interfaces include properties for data, success status, optional message, and pagination details.                       |
| [query-parameters.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/responses/query-parameters.ts) | This code snippet defines an interface for query parameters used in API calls. It includes properties for page number, limit of results, and a search string. It also allows for additional dynamic parameters to be passed through using the key-value syntax.                                                                       |

</details>

<details closed><summary>Services</summary>

| File                                                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                                |
| [api.service.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/services/api.service.ts)           | The ApiService class provides core functionality for making HTTP requests in an Angular application. It includes methods for getting, creating, updating, and deleting resources via API endpoints. It utilizes the HttpClient module to make the requests and returns Observables with corresponding response types. The base URL for the API is defined in the environment file. |
| [api.service.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/services/api.service.spec.ts) | The provided code snippet contains a unit test for the ApiService class. It sets up the test environment using TestBed, injects the ApiService into the test function, and checks that the service instance is truthy.                                                                                                                                                             |

</details>

<details closed><summary>Environment</summary>

| File                                                                                                                                           | Summary                                                                                                                                                                                                                                                                  |
| ---                                                                                                                                            | ---                                                                                                                                                                                                                                                                      |
| [environment.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/environment/environment.ts)           | The code snippet provides the configuration for the development environment. It sets `production` to `false` and specifies the API URL. Additionally, there is an import statement commented out, which is used for debugging but should be disabled in production mode. |
| [environment.prod.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/environment/environment.prod.ts) | This code defines the production environment and sets the API URL for the application.                                                                                                                                                                                   |

</details>

<details closed><summary>To-currency</summary>

| File                                                                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                |
| [to-currency.pipe.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/pipes/to-currency/to-currency.pipe.ts)           | The provided code is an Angular pipe called'toCurrency' that transforms a given number into a currency format. It takes three optional parameters: the sign of the currency (default is'$'), the number of decimal places to display (default is 2), and the number itself. The transformed value is returned as a string with the currency sign and the specified decimal places. |
| [to-currency.pipe.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/pipes/to-currency/to-currency.pipe.spec.ts) | The code snippet is a test case for an Angular pipe called ToCurrency. This test ensures that when creating an instance of the pipe, it should return a truthy value, indicating that the pipe is successfully created.                                                                                                                                                            |

</details>

<details closed><summary>Relative-time</summary>

| File                                                                                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [relative-time.pipe.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/pipes/relative-time/relative-time.pipe.spec.ts) | This code snippet is a unit test for the "RelativeTimePipe" pipe in an Angular application. It asserts that the pipe can be instantiated successfully.                                                                                                                                                                                                                                                                        |
| [relative-time.pipe.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/pipes/relative-time/relative-time.pipe.ts)           | The code snippet is a custom Angular pipe called "RelativeTimePipe" that converts a given date value into a relative time string representation. It calculates the difference between the current time and the given time in milliseconds, and then uses predefined time units (minute, hour, day) to determine how long ago the given time was from the current time. It returns a formatted string based on the difference. |

</details>

<details closed><summary>Truncate</summary>

| File                                                                                                                                                  | Summary                                                                                                                                                                                                                                                                 |
| ---                                                                                                                                                   | ---                                                                                                                                                                                                                                                                     |
| [truncate.pipe.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/pipes/truncate/truncate.pipe.ts)           | The code snippet defines a custom pipe called "truncate". This pipe takes in a string, and optionally, a limit and trail. It limits the string to the specified limit and appends the trail if the string exceeds the limit. Otherwise, it returns the original string. |
| [truncate.pipe.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/pipes/truncate/truncate.pipe.spec.ts) | This code snippet is a unit test for the TruncatePipe class. It checks if an instance of the TruncatePipe can be created successfully. The TruncatePipe is likely a custom pipe used for truncating text in an Angular application.                                     |

</details>

<details closed><summary>Capitalize</summary>

| File                                                                                                                                                        | Summary                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                                                                         | ---                                                                                                                                                                                                                                                                                                                   |
| [capitalize.pipe.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/pipes/capitalize/capitalize.pipe.spec.ts) | The provided code snippet is a unit test for the "CapitalizePipe" which is an Angular pipe used to transform text by capitalizing the first letter of each word. The test verifies that an instance of the pipe can be successfully created.                                                                          |
| [capitalize.pipe.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/pipes/capitalize/capitalize.pipe.ts)           | The provided code snippet is an Angular pipe called "capitalize" that transforms a given string by capitalizing its first letter. The transform function takes a string as input, converts the first character to uppercase, and then concatenates it with the rest of the string starting from the second character. |

</details>

<details closed><summary>Sort</summary>

| File                                                                                                                                      | Summary                                                                                                                                                                                                                                                                   |
| ---                                                                                                                                       | ---                                                                                                                                                                                                                                                                       |
| [sort.pipe.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/pipes/sort/sort.pipe.ts)           | This code snippet defines a custom "sort" pipe for an Angular application. The pipe takes an array of objects and a property name as parameters and sorts the array based on that property in ascending order. The sorted array is then returned by the transform method. |
| [sort.pipe.spec.ts](https://github.com/henriqdsvlima/boilerplate-angular/blob/master/src/app/core/pipes/sort/sort.pipe.spec.ts) | This code snippet is a test case for the SortPipe class in an Angular application. It tests whether an instance of the class can be created successfully. The SortPipe is likely a custom pipe that allows sorting of data in a specific way.                             |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `Angular 15+`
> - `Node 16+`
> - `Typescript 5+`

### 📦 Installation

Just click on "Use This Template" button above and choose your repository name
---
