Feature: Title is Bing

    Scenario: Check if title is Bing
        Given I open Bing search page 'https://www.bing.com'
        Then the title is 'Bing'
