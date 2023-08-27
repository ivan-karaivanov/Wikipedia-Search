const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=searchValue';

const page_url = 'href=http://en.wikipedia.org/?curid=${pageid}';

/* 

- API Parameters for Searching -
- `list=search`: Perform a full-text search operation.
- `srsearch="inputValue"`: Search for page titles or content that matches the given input value.
- `srlimit=20`: Specifies the maximum number of pages to be returned in the response.
- `format=json`: Request the response to be in JSON format.
- `origin=*`: Used to fix CORS (Cross-Origin Resource Sharing) errors when making requests from web browsers.

*/