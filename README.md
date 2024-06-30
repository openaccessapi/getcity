# getcity
This project is an example of how to accurately retrieve a user's location, city, and other data from a combination of browser location and a secure web service. In contrast to IP/Location techniques, this example is unaffected by proxies and reallocated IP addresses.

# GetCity Example Project

This project demonstrates how to obtain a user's location information from their browser and use it to call the [Reverse Geocode API](https://rapidapi.com/openaccess/api/reverse-geocode1) to get detailed city information. 

## Benefits

- **User-Friendly**: Easily and acccurately fetches the user's location directly from their browser.
- **Informative**: Provides detailed city information including population, timezone, and sunrise/sunset times.
- **Practical Example**: Illustrates how to integrate browser geolocation with a web service API in a Node.js application.

## Preview of output
![Preview](screenshot.jpg "Preview of Data")

## API Response Structure

The API returns a JSON object with the following structure:

```json
{
  "success": true,
  "location": {
    "city": "Long Island City",
    "country": "US",
    "latitude": 40.74482,
    "longitude": -73.94875,
    "distance": 1.947279774738963,
    "municipality": "NY",
    "population": 25595,
    "sunrise": "2024-06-19T09:25:38.981Z",
    "sunset": "2024-06-20T00:31:24.776Z",
    "timezone": "America/New_York",
    "localTime": "2024-06-19T03:24:59.385-04:00",
    "timezoneOffset": -4
  }
}
```

### Fields

- `success`: Indicates the success of the API call.
- `location`: An object containing the following fields:
  - `city`: The name of the city.
  - `country`: The country code.
  - `latitude`: Latitude of the location.
  - `longitude`: Longitude of the location.
  - `distance`: Distance from the given coordinates in KM.
  - `municipality`: The municipality or region (state).
  - `population`: Population of the city.
  - `sunrise`: Sunrise time in ISO format.
  - `sunset`: Sunset time in ISO format.
  - `timezone`: Timezone of the location.
  - `localTime`: Local time at the location.
  - `timezoneOffset`: Timezone offset from UTC.

## Installation

Clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/openaccessapi/getcity.git
cd getcity
npm install
```

## Usage

1. **Obtain an API Key**: Sign up for an API key at [RapidAPI](https://rapidapi.com/openaccess/api/reverse-geocode1).
2. **Update your API key in app.js**:
    ```
    const API_KEY = 'your key here';
    ```
3. **Run the Project**:
    ```bash
    node app.js
    ```
4. **Open Your Browser**: Navigate to `http://localhost:30001` to see the example in action.

## License

This project is licensed under the MIT License.

Tested with Node version v16.20.2
