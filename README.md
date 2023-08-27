# Wiki Search App

A simple web application for searching Wikipedia articles using the MediaWiki API. The app allows users to input search queries, fetch relevant articles, and display results dynamically.

## HTML Structure

- `section.wiki`
  - `div.container`
    - `img`
    - `h3` (text)
    - `form.form`
      - `input.form-input` (type='text')
      - `button.submit-btn` (type='submit')
  - `div.results`
    - `div.articles`
      - `a`
        - `h4`
        - `p` (lorem20)

## API Docs

- [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page)

## Initial Setup

1. Select the form, input, and results elements.
2. Listen for submit events on the form.
3. If the input value is empty, display an error.
4. Implement the `fetchPages()` function.
5. Pass the valid input value into `fetchPages()`.

## Fetch Pages

- Display a loading indicator while fetching data.
- Construct a dynamic URL for API requests.
- Handle and display errors, if any.
- If there are no search results, show a message indicating no items.
- Implement the `renderResults()` function.
- Pass the valid results into `renderResults()`.

## Render Results

1. Iterate over the list of search results.
2. Extract the title, snippet, and page ID from each result.
3. Set up a card to display each article.
4. Arrange the results within the `div.articles` element in a list format.
