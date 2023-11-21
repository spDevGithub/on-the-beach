# Start here

Thanks for sending over the technical task. I had a lot of fun with this one.

## How does it work?

The app is written in typescript and react using a basic create-react-template with a few extra packages added later to facilitate additional testing

- To begin, run the `npm i` command.
- Once installation is complete, run `npm start`

## Testing approach

I wrote various unit tests for the application but haven't got complete coverage due to time constraints. You can see the tests in action by running

- `npm test`, for unit tests
- `npm run test:e2e` for cypress
- `npm run test:e2e-open` to watch cypress do its thing

## Committing

If you fancy making some changes, feel free! Husky will run prettier against any changes made

- pushing the branch to github will run the test action
- Feel free to take a look at my commit history to see the development process


# On the Beach Frontend Software Engineer code test

Produce a HTML, CSS and JavaScript representation of the given `design.png` with the following features:

- Sort the results by price (this should be the default)
- Sort the results by star rating and highlight when active
- Sort the results alphabetically by hotel name and highlight when active
- Ability to toggle expanded hotel description

We are looking for a client side solution, there should be no server logic involved.

Feel free to use JavaScript libraries or frameworks. Imagine this will be a component added to a large website.

You may use things like CSS Preprocessors and JavaScript build tools, but if you do please include the dependencies/source files.
Feel free to source your own icons.

Things we like:

- Semantic HTML
- Modular CSS
- Error/warning free JavaScript
- Tests
- Clean flow of state throughout the application

![](design.png)
