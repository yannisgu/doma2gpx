

var fs = require('fs')

var data = JSON.parse(fs.readFileSync('./data.json').toString())
console.log(data.RouteCoordinates[0])

let gpx = fs.readFileSync('./template.gpx').toString()

let trackPointForGpx = ''

const waypoints = data.RouteCoordinates[0]
for(const waypoint of waypoints) {
  trackPointForGpx += `<trkpt lat="${waypoint[0]}" lon="${waypoint[1]}" />`
}

gpx = gpx.replace('##track##', trackPointForGpx)

console.log(gpx)

fs.writeFileSync('./data.gpx', gpx)