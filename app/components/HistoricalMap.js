
"use client"; // Ensures it's a client component
import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const HistoricalMap = () => {
  const statePopulation = {
  'Alabama': 4903185,
  'Alaska': 731545,
  'Arizona': 7278717,
  'Arkansas': 3017804,
  'California': 39512223,
  'Colorado': 5758736,
  'Connecticut': 3565287,
  'Delaware': 973764,
  'District of Columbia': 705749,
  'Florida': 21477737,
  'Georgia': 10617423,
  'Hawaii': 1415872,
  'Idaho': 1787065,
  'Illinois': 12671821,
  'Indiana': 6732219,
  'Iowa': 3155070,
  'Kansas': 2913314,
  'Kentucky': 4467673,
  'Louisiana': 4648794,
  'Maine': 1344212,
  'Maryland': 6045680,
  'Massachusetts': 6892503,
  'Michigan': 9986857,
  'Minnesota': 5639632,
  'Mississippi': 2976149,
  'Missouri': 6137428,
  'Montana': 1068778,
  'Nebraska': 1934408,
  'Nevada': 3080156,
  'New Hampshire': 1359711,
  'New Jersey': 8882190,
  'New Mexico': 2096829,
  'New York': 19453561,
  'North Carolina': 10488084,
  'North Dakota': 762062,
  'Ohio': 11689100,
  'Oklahoma': 3956971,
  'Oregon': 4217737,
  'Pennsylvania': 12801989,
  'Rhode Island': 1059361,
  'South Carolina': 5148714,
  'South Dakota': 884659,
  'Tennessee': 6829174,
  'Texas': 28995881,
  'Utah': 3205958,
  'Vermont': 623989,
  'Virginia': 8535519,
  'Washington': 7614893,
  'West Virginia': 1792147,
  'Wisconsin': 5822434,
  'Wyoming': 578759}
  const stateClosingTimes = [
    {
      "State": "Alabama",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 9,
      "TimeSixteen": "8:26:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "AL",
      "AnticipatedCall": "2024-11-05T08:00:00"
    },
    {
      "State": "Alaska",
      "ClosingTime": "1:00:00 AM",
      "ElectoralVotes": 3,
      "TimeSixteen": "11:58:00 PM",
      "DaySixteen": "11/9/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:59:00 PM",
      "DayTwenty": "11/11/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Hawaii-Aleutian Time Zone",
      "Abbreviation": "AK",
      "AnticipatedCall": "2024-11-06T00:00:00"
    },
    {
      "State": "Arizona",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 11,
      "TimeSixteen": "11/9/2016",
      "DaySixteen": "3:43:00 AM",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "2:51:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "AZ",
      "AnticipatedCall": "2024-11-06T03:00:00"
    },
    {
      "State": "Arkansas",
      "ClosingTime": "8:30:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "9:08:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:30:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "AR",
      "AnticipatedCall": "2024-11-05T21:00:00"
    },
    {
      "State": "California",
      "ClosingTime": "11:00:00 PM",
      "ElectoralVotes": 54,
      "TimeSixteen": "11:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "11:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Pacific Time Zone", 
      "Abbreviation": "CA",
      "AnticipatedCall": "2024-11-05T23:00:00"
    },
    {
      "State": "Colorado",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 10,
      "TimeSixteen": "10:43:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "9:37:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "CO",
      "AnticipatedCall": "2024-11-05T22:00:00"
    },
    {
      "State": "Connecticut",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 7,
      "TimeSixteen": "9:26:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "CT",
      "AnticipatedCall": "2024-11-05T20:00:00"
    },
    {
      "State": "Delaware",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "DE",
      "AnticipatedCall": "2024-11-05T20:00:00"
    },
    {
      "State": "District of Columbia",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "9:27:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "DC",
      "AnticipatedCall": "2024-11-05T21:00:00"
    },
    {
      "State": "Florida",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 30,
      "TimeSixteen": "10:50:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "12:35:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "FL",
      "AnticipatedCall": "2024-11-06T00:00:00"
    },
    {
      "State": "Georgia",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 16,
      "TimeSixteen": "11:33:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:59:00 PM",
      "DayTwenty": "11/19/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "GA",
      "AnticipatedCall": "2024-11-09T21:00:00M"
    },
    {
      "State": "Hawaii",
      "ClosingTime": "12:00:00 AM",
      "ElectoralVotes": 4,
      "TimeSixteen": "11:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "12:06:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Hawaii-Aleutian Time Zone", 
      "Abbreviation": "HI",
      "AnticipatedCall": "2024-11-06T00:00:00"
    },
    {
      "State": "Idaho",
      "ClosingTime": "11:00:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "11:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Pacific Time Zone", 
      "Abbreviation": "ID",
      "AnticipatedCall": "2024-11-05T23:00:00"
    },
    {
      "State": "Illinois",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 19,
      "TimeSixteen": "8:58:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Central Time Zone", 
      "Abbreviation": "IL",
      "AnticipatedCall": "2024-11-05T21:00:00"
    },
    {
      "State": "Indiana",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 11,
      "TimeSixteen": "7:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:52:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "IN",
      "AnticipatedCall": "2024-11-05T21:00:00"
    },
    {
      "State": "Iowa",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "12:00:00 AM",
      "DaySixteen": "11/9/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "12:21:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "IA",
      "AnticipatedCall": "2024-11-06T00:00:00"
    },
    {
      "State": "Kansas",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:59:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "KS",
      "AnticipatedCall": "2024-11-05T21:00:00"
    },
    {
      "State": "Kentucky",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 8,
      "TimeSixteen": "7:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "7:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "KY",
      "AnticipatedCall": "2024-11-05T19:00:00"
    },
    {
      "State": "Louisiana",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 8,
      "TimeSixteen": "9:28:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "LA",
      "AnticipatedCall": "2024-11-05T21:00:00"
    },
    {
      "State": "Maine",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "1:56:00 AM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D3/Trump R1",
      "TimeTwenty": "3:06:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "ME",
      "AnticipatedCall": "2024-11-06T02:00:00"
    },
    {
      "State": "Maryland",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 10,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "MD",
      "AnticipatedCall": "2024-11-05T20:00:00"
    },
    {
      "State": "Massachusetts",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 11,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "MA",
      "AnticipatedCall": "2024-11-05T20:00:00"
    },
    {
      "State": "Michigan",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 15,
      "TimeSixteen": "2:00:00 PM",
      "DaySixteen": "11/28/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "5:58:00 PM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Central Time Zone", 
      "Abbreviation": "MI",
      "AnticipatedCall": "2024-11-06T18:00:00"
    },
    {
      "State": "Minnesota",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 10,
      "TimeSixteen": "11:09:00 AM",
      "DaySixteen": "11/9/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "12:13:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Central Time Zone", 
      "Abbreviation": "MI",
      "AnticipatedCall": "2024-11-06T00:00:00"
    },
    {
      "State": "Mississippi",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "8:11:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "MS",
      "AnticipatedCall": "2024-11-05T20:00:00"
    },
    {
      "State": "Missouri",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 10,
      "TimeSixteen": "10:25:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "10:31:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "MO",
      "AnticipatedCall": "2024-11-05T22:00:00"
    },
    {
      "State": "Montana",
      "ClosingTime": "10:00:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "10:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "12:20:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "MT",
      "AnticipatedCall": "2024-11-05T23:00:00"
    },
    {
      "State": "Nebraska",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 5,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "NE",
      "AnticipatedCall": "2024-11-05T21:00:00"
    },
    {
      "State": "Nevada",
      "ClosingTime": "10:00:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "12:02:00 AM",
      "DaySixteen": "11/9/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "12:13:00 PM",
      "DayTwenty": "11/7/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "NV",
      "AnticipatedCall": "2024-11-06T00:00:00"
    },
    {
      "State": "New Hampshire",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "6:04:00 PM",
      "DaySixteen": "11/14/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "10:51:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "NH",
      "AnticipatedCall": "2024-11-05T23:00:00"
    },
    {
      "State": "New Jersey",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 14,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "NJ",
      "AnticipatedCall": "2024-11-05T20:00:00M"
    },
    {
      "State": "New Mexico",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 5,
      "TimeSixteen": "9:21:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "NM",
      "AnticipatedCall": "2024-11-05T21:00:00"
    },
    {
      "State": "New York",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 28,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "AL",
      "AnticipatedCall": "2024-11-05T21:00:00"
    },
    {
      "State": "North Carolina",
      "ClosingTime": "7:30:00 PM",
      "ElectoralVotes": 16,
      "TimeSixteen": "11:11:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:59:00 PM",
      "DayTwenty": "11/13/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "NY",
      "AnticipatedCall": "2024-11-09T20:00:00"
    },
    {
      "State": "North Dakota",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "ND",
      "AnticipatedCall": "2024-11-05T21:00:00"
    },
    {
      "State": "Ohio",
      "ClosingTime": "7:30:00 PM",
      "ElectoralVotes": 17,
      "TimeSixteen": "10:36:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "12:19:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "OH",
      "AnticipatedCall": "2024-11-06T00:00:00"
    },
    {
      "State": "Oklahoma",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 7,
      "TimeSixteen": "8:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "OK",
      "AnticipatedCall": "2024-11-05T20:00:00"
    },
    {
      "State": "Oregon",
      "ClosingTime": "11:00:00 PM",
      "ElectoralVotes": 8,
      "TimeSixteen": "11:05:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "11:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "OR",
      "AnticipatedCall": "2024-11-05T23:00:00"
    },
    {
      "State": "Pennsylvania",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 19,
      "TimeSixteen": "1:35:00 AM",
      "DaySixteen": "11/9/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:25:00 AM",
      "DayTwenty": "11/7/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "PA",
      "AnticipatedCall": "2024-11-06T00:00:00"
    },
    {
      "State": "Rhode Island",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "8:39:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "RI",
      "AnticipatedCall": "2024-11-05T20:00:00"
    },
    {
      "State": "South Carolina",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 9,
      "TimeSixteen": "8:09:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "7:56:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "SC",
      "AnticipatedCall": "2024-11-05T20:00:00"
    },
    {
      "State": "South Dakota",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "SD",
      "AnticipatedCall": "2024-11-05T21:00:00M"
    },
    {
      "State": "Tennessee",
      "ClosingTime": "8:00:00 PM",
      "ElectoralVotes": 11,
      "TimeSixteen": "8:13:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "8:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Central Time Zone", 
      "Abbreviation": "TN",
      "AnticipatedCall": "2024-11-05T20:00:00"
    },
    {
      "State": "Texas",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 40,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "1:06:00 AM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "TX",
      "AnticipatedCall": "2024-11-05T22:00:00"
    },
    {
      "State": "Utah",
      "ClosingTime": "10:00:00 PM",
      "ElectoralVotes": 6,
      "TimeSixteen": "11:52:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "11:08:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "UT",
      "AnticipatedCall": "2024-11-05T23:00:00"
    },
    {
      "State": "Vermont",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "7:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "7:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "VT",
      "AnticipatedCall": "2024-11-05T19:00:00"
    },
    {
      "State": "Virginia",
      "ClosingTime": "7:00:00 PM",
      "ElectoralVotes": 13,
      "TimeSixteen": "10:40:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "7:36:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "VA",
      "AnticipatedCall": "2024-11-05T20:00:00"
    },
    {
      "State": "Washington",
      "ClosingTime": "11:00:00 PM",
      "ElectoralVotes": 12,
      "TimeSixteen": "11:28:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Clinton D",
      "TimeTwenty": "11:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Pacific Time Zone", 
      "Abbreviation": "WA",
      "AnticipatedCall": "2024-11-05T23:00:00"
    },
    {
      "State": "West Virginia",
      "ClosingTime": "7:30:00 PM",
      "ElectoralVotes": 4,
      "TimeSixteen": "7:30:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "7:30:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Eastern Time Zone", 
      "Abbreviation": "WV",
      "AnticipatedCall": "2024-11-05T19:30:00"
    },
    {
      "State": "Wisconsin",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 10,
      "TimeSixteen": "2:29:00 AM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "2:16:00 PM",
      "DayTwenty": "11/4/2020",
      "WinnerTwenty": "Biden D",
      "Zone": "Central Time Zone", 
      "Abbreviation": "WI",
      "AnticipatedCall": "2024-11-06T02:00:00"
    },
    {
      "State": "Wyoming",
      "ClosingTime": "9:00:00 PM",
      "ElectoralVotes": 3,
      "TimeSixteen": "9:00:00 PM",
      "DaySixteen": "11/8/2016",
      "WinnerSixteen": "Trump R",
      "TimeTwenty": "9:00:00 PM",
      "DayTwenty": "11/3/2020",
      "WinnerTwenty": "Trump R",
      "Zone": "Mountain Time Zone", 
      "Abbreviation": "WY",
      "AnticipatedCall": "2024-11-05T21:00:00"
    }
         ]
  const combinedData = stateClosingTimes.map(stateInfo => {
    const population = statePopulation[stateInfo.State];
    return { ...stateInfo, Population: population };
  });
  
console.log(combinedData[8])
  

  const [usStates, setUsStates] = useState(null);
  d3.json("/us-states.geojson")
  .then((data) => {
    console.log("GeoJSON data loaded:", data);
    setUsStates(data);
  })
  .catch((error) => {
    console.error("Error loading geojson data:", error);
  });

  

  useEffect(() => {
    if (!usStates || !usStates.features) return; // Ensure `usStates` and `features` are loaded
  
    // Clear any previous SVG if present
    d3.select("#map").select("svg").remove();
    
    const width = 960;
    const height = 600;
    const svg = d3.select("#map")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  
    const projection = d3.geoAlbersUsa().scale(1000).translate([width / 2, height / 2]);
    const path = d3.geoPath().projection(projection);
  
    const stateDataMap = new Map(combinedData.map(d => [d.State, d]));
  
    // Find the earliest and latest AnticipatedCall times
    const startTime = Math.min(...combinedData.map(d => new Date(d.AnticipatedCall).getTime()));
    const endTime = Math.max(...combinedData.map(d => new Date(d.AnticipatedCall).getTime()));
    const duration = endTime - startTime;
  
    // Tooltip element
    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("padding", "8px")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "#a45b8e")
      .style("border-radius", "4px")
      .style("pointer-events", "none")
      .style("opacity", 0);
  
    // Draw the map with initial color
    svg.selectAll("path")
      .data(usStates.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#ccc")
      .attr("stroke", "#a45b8e")
      .attr("stroke-width", 1.5)
      .on("mouseover", function (event, d) {
        const stateName = d.properties.NAME;
        const stateData = stateDataMap.get(stateName);
  
        if (stateData) {
          tooltip
            .transition()
            .duration(200)
            .style("opacity", 1);
          tooltip
            .html(`
              <strong>${stateName}</strong><br>
              Population: ${stateData.Population.toLocaleString()}<br>
              Electoral Votes: ${stateData.ElectoralVotes}<br>
              Winner: ${stateData.WinnerTwenty}
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
  
          d3.select(this)
            .attr("stroke", "#333")
            .attr("stroke-width", 3);
        }
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", function () {
        tooltip
          .transition()
          .duration(500)
          .style("opacity", 0);
  
        d3.select(this)
          .attr("stroke", "#a45b8e")
          .attr("stroke-width", 1.5);
      });
  
    // Start the animation
    const timer = d3.timer((elapsed) => {
      // Calculate the current time based on the elapsed duration
      const currentTime = startTime + (elapsed / duration) * (endTime - startTime);
  
      // Fill each state as its AnticipatedCall time passes
      svg.selectAll("path")
        .attr("fill", function(d) {
          const stateName = d.properties.NAME;
          const stateData = stateDataMap.get(stateName);
  
          if (stateData && new Date(stateData.AnticipatedCall).getTime() <= currentTime) {
            // Color based on WinnerTwenty
            const winner = stateData.WinnerTwenty.slice(-1);
            return winner === "R" ? "red" : winner === "D" ? "blue" : "white";
          }
          return "#ccc"; // Default color before anticipated call
        });
  
      // Stop the timer after the last state has been filled
      if (currentTime >= endTime) {
        timer.stop();
      }
    });
  
  }, [usStates]);

  return<div>
    <h1>Historical Electoral Map Here (2020)</h1>
    <div id="map" style={{ width: "100%", height: "100%" }}></div>
  </div>
  
};

export default HistoricalMap;
