# charts-api
REST API for chartexhibition.com

## Usage

### Create a chart
``` Powershell
Invoke-WebRequest -Uri https://XXXXXXXXXX.execute-api.ap-southeast-2.amazonaws.com/dev/charts -Method POST -Body '{ "name": "Test name", "address" : "Test address", "url" : "http://chartexhibition.com/" }'
```

### List all charts
``` Powershell
Invoke-WebRequest -Uri https://XXXXXXXXXX.execute-api.ap-southeast-2.amazonaws.com/dev/charts -Method Get
```

### Get a chart
``` Powershell
Invoke-WebRequest -Uri https://XXXXXXXXXX.execute-api.ap-southeast-2.amazonaws.com/dev/charts/<id> -Method Get
```

### Update a chart
``` Powershell
Invoke-WebRequest -Uri https://XXXXXXXXXX.execute-api.ap-southeast-2.amazonaws.com/dev/charts/<id> -Method PUT -Body '{ "name": "Test name", "address" : "Test address2", "url" : "http://chartexhibition.com/" }'
```

### Delete a chart
``` Powershell
Invoke-WebRequest -Uri https://XXXXXXXXXX.execute-api.ap-southeast-2.amazonaws.com/dev/charts/<id> -Method Delete
```
