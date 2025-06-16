# Timestamp Microservice

A simple Node.js and Express API that returns Unix and UTC timestamps for valid date strings or milliseconds.

## Features

- Returns current date and time when no date is provided  
- Accepts both Unix timestamps and date strings  
- Returns error for invalid dates  

## API Endpoints

### GET `/api/:date?`

#### `/api/`
Returns the current time in Unix and UTC format.

```json
{
  "unix": 1650000000000,
  "utc": "Fri, 15 Apr 2022 12:00:00 GMT"
}
```
