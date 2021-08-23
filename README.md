Placeholder
===========

Just a docker image that responds to all http requests

## Usage

Published docker image is at `coenhyde/http-placeholder`. 

### ENV Options

`PLACEHOLDER_HOST_BIND` - Host to bind the http listener to. Default: `0.0.0.0`.

`PLACEHOLDER_PORT_BIND` - Port to bind the http listener to. Default: `3000`.

`PLACEHOLDER_RESPONSE_CODE` - HTTP Status Code to return. Default: `200`.

`PLACEHOLDER_MSG` - Text to return in the HTTP body. Default: `Dr. Crane isn't here right now, but if you'd like to make an appointment...`.
