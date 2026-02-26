Feature: Google Video Search

  Scenario: Buscar videos de Arjona en Google
    Given I am on the google page
    When I search for "Arjona"
    And I click on the Videos tab
    And I click the first video result
    Then the video page should open
