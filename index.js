const events = [
  {
    title: "Conference on Javascript",
    date: new Date("2022-10-01"),
    location: "San Francisco, CA",
    attendees: new Set(["Simon", "Marylyn", "Vincent"])
  },
  {
    title: "Workshop on Datascience",
    date: new Date("2022-11-15"),
    location: "New York, NY",
    attendees: new Set(["Cyril", "Diana", "John"])
  },
  {
    title: "Symposium on Job selection",
    date: new Date("2022-12-10"),
    location: "Los Angeles, CA",
    attendees: new Set(["Brian ", "Mellisa", "Brandon "])
  }
];
//question2:Use the Array methods .filter() and .map() to display all events that are happening in the next 7 days
const now = new Date();
const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

const upcomingEvents = events
  .filter(event => event.date >= now && event.date < nextWeek)
  .map(event => event.title + " on " + event.date + " at " + event.location);

console.log(upcomingEvents);

//question3:Create a WeakMap to store the event's organizer, with the event's title as the key and the organizer's name as the value.
const eventsOrganizer = new WeakMap();

eventsOrganizer.set(events[0].attendees, "John Smith");
eventsOrganizer.set(events[1].attendees, "Jane Doe");
eventsOrganizer.set(events[2].attendees, "Bob Johnson");

console.log(eventsOrganizer.get(events[0].attendees)); // "John Smith"
console.log(eventsOrganizer.get(events[1].attendees)); // "Jane Doe"
console.log(eventsOrganizer.get(events[2].attendees)); // "Bob Johnson"

//question4:Use destructuring assignment to extract the title, date, and location properties from each event object and display them in a table format.
console.log("Events in next 7 days:");
console.log("Title | Date | Location");

events.forEach(({title,date,location}) => {
    console.log(`${title} | ${date.toLocaleDateString()} | ${location}`);
});

//question5:Create a function that adds a new attendee to an event. This function should take in the event title and the attendee's name as arguments. Use the .add() method of the Set to add the attendee to the event's attendees property.
function addAttendee(eventsTitle, attendeeName) {
    const event = events.find(event => event.title === eventsTitle);
    if (event) {
        event.attendees.add(attendeeName);
    }
 }
addAttendee("Conference on javascript","Mark Johnson");

console.log(events[0].attendees)

//question6 Create a function that converts the event array to a JSON string using the .stringify() method. Use the .toJSON() method to add a custom property "formattedDate" to each event object that displays the date in the format "MM/DD/YYYY".
function convertToJSON(){
    events.forEach(event => {
        event.formattedDate = `${event.date.getMonth()+1}/${event.date.getDate()}/${event.date.getFullYear()}`;
    });
    return JSON.stringify(events);
}
const eventsJsonString = convertToJSON();
console.log(eventsJsonString);

//question7 Use the Object.keys(), Object.values(), and Object.entries() methods to display the properties and values of the first event object in the array.
console.log("Event properties: ", Object.keys(events[0]));
console.log("Event values: ", Object.values(events[0]));
console.log("Event properties and values: ", Object.entries(events[0]));

//question8 Use the .forEach() method to iterate over the events array and console.log the title and date of each event.
events.forEach(event => {
    console.log(`Event: ${event.title} - Date: ${event.date.toLocaleDateString()}`);
});

//question9 Bonus: Implement functionality to delete events from the array using the .splice() method.
function deleteEvent(eventTitle) {
    const eventIndex = events.findIndex(event => event.title === eventTitle);
    if (eventIndex >= 0) {
        events.splice(eventIndex, 1);
    }
  console.log(events);
}

//question10 bonus:Use the .reduce() method to find the event with the most attendees
  function findEventWithMostAttendees() {
    const eventWithMostAttendees = events.reduce((maxEvent, currentEvent) => {
      if (currentEvent.attendees.size > maxEvent.attendees.size) {
        return currentEvent;
      }
      return maxEvent;
    });
    console.log(`Event with most attendees: ${eventWithMostAttendees.title}`);
  }
  findEventWithMostAttendees();














