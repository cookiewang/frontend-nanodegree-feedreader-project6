# Feed Reader Jasmine Testing

## Spec JS File Location

jasmine/spec/feedreader.js`

## Testing cases

- a test suite just contains a related set of tests. This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
- in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
- in the allFeeds object and ensures it has a name defined and that the name is not empty.
- ensures the menu element is hidden by default.
- ensures the menu changes visibility when the menu icon is clicked.
- ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
- ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## How to Run

Download the repository.

Click on index.html
