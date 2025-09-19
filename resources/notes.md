https://www.metadapi.com/API-Products/Zip-Code-API

elements:

current weather
    -weather icon
        -json.currentConditions.icon
    -current temp 
        -json.currentConditions.temp
    -max temp 
        -json.currentConditions.tempmax
    -min temp 
        -json.currentConditions.tempmin
    -current conditions 
        -json.currentConditions.conditions
    -humidity 
        -json.currentConditions.humidity

two day forecast (json.days[1] & days[2])
    - temp
    - weather icon


~

needed: 

- what happens when the user uses a stupid request?
    - dialogue box or absolute element
        - "Not like that!"
