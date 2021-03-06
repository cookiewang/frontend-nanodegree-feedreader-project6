/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL defined and is not empty', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /*
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name defined and is not empty', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        var classValue = $('body').attr("class");
        it('the menu element is hidden by default', function() {
            expect(classValue).toEqual("menu-hidden");
        });

        /* Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu display when clicked and does it hide when clicked again', function() {
            $(".menu-icon-link").trigger("click");
            classValue = $('body').attr("class");
            expect(classValue).toEqual("");
            $(".menu-icon-link").trigger("click");
            classValue = $('body').attr("class");
            expect(classValue).toEqual("menu-hidden");
        });
    });

    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('there is at least .entry element within the .feed container', function() {
            expect($( "div.feed" ).find( "article.entry").length).not.toBe(0);
        });
    });

    /* Write a new test suite named "New Feed Selection"  */
     describe('New Feed Selection', function() {
        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var title1 = null;
         var title2 = null;
         //--- use loadFeed callback function to call loadFeed twice.

         beforeEach(function(done) {
             loadFeed(0, function() { //callback
                 title1 = $('.header-title').text();
                 loadFeed(1, function() { //callback
                     title2 = $('.header-title').text();
                     done();
                 });
             });

         });

         it('ensures when a new feed is loaded by the loadFeed function that the content actually changes', function() {
             expect(title1 != title2).toBe(true);
         });
     });

}());
