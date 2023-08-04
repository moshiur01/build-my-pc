### Application Live URL: https://build-my-pc-bice.vercel.app/

### Project Explanation:

- This project is a PC Builder website developed using Next.js,Next Auth and the uses of Redux. The main goal of the website is to allow users to build their own PC by selecting various PC components and view product details.

- The web app it allows users to pick PC components from many categories. Each area of the category (CPU, Motherboard, RAM, and so on) includes a "Choose" button. By clicking on this button, the visitor is taken to a page that displays at least three components from that category. Each component card has a "Add To Builder" button, which updates the status of the specified category area on the PC Builder page. The user can add at least 5-6 components to finish the PC construction, and after doing so, the "Complete Build" button is enabled.

- In this project , I use different Next.js data fetching methods for different pages, such as static site generation (SSG) for the home page and featured category sections, and server-side rendering (SSR) for the PC Builder page. It also uses Redux to manage the state of the selected components in the PC Builder page.

### Project Instruction:

- git clone <https://github.com/moshiur01/build-my-pc>
- npm i
- add .env file
- run the project on local server using `npm run dev`
