$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SimpleScenario.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4143284754,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate google search text field",
  "description": "",
  "id": "google-search;validate-google-search-text-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to google page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I validate the search text field",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_open_a_browser()"
});
formatter.result({
  "duration": 98421995,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_navigate_to_google_page()"
});
formatter.result({
  "duration": 1808632660,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_validate_the_search_text_field()"
});
formatter.result({
  "duration": 34051574,
  "status": "passed"
});
formatter.after({
  "duration": 1316656991,
  "status": "passed"
});
});