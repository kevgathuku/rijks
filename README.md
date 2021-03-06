## Rijksmuseum

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Project Setup

- Clone the repo and navigate to the newly created folder

```bash
git clone git@github.com:kevgathuku/rijks.git
cd rijks
```

- You first need to obtain an API key by registering for a [Rijksstudio](https://www.rijksmuseum.nl/en/rijksstudio) account. You will be given a key instantly upon request, which you can find at the advanced settings of your Rijksstudio account.

- Copy the `.env.example` file to `.env`

```bash
  cp .env.example .env
```

- Add your API Key in the `.env` file

- To start the server, run the command:

```bash
  npm run start
```

The server runs on `http://localhost:8000`

To start the client (frontend), run the command:

```bash
  cd client
  npm run start
```

The client runs on `http://localhost:3000`

### Available Functionality

Items Listing - Lists the first 10 items from the API. 🔗 [Link](http://localhost:3000)

Details View - Lists an art object's details 🔗 [Link](http://localhost:3000/collection/SK-A-500)

Filter View - Filters art objects by material or type 🔗[Link](<http://localhost:3000/filterCollection?material=oak%20(wood)>)

### Potential Improvements

- Better Grid view for the homepage and Filter view
- Pagination functionality, where more items are loaded either on scroll or on clicking a `Load more` button
- Better error handling
- Caching API responses
