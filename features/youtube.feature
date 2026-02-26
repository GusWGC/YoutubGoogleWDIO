Feature: YouTube Video Playback

  Scenario: Play the first video and interact with it
    Given I am on the youtube page
    When I search for "shakira"
    And I play the first video

    Then the video should continue playing
