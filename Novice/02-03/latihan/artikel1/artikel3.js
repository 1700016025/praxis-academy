let meetup = {name:'JS',isActive:true,members:49};
const scheduleMeetup = (date, place) => {
  meetup.date = date;
  meetup.place = place;
  if (meetup.members < 50)
    meetup.isActive = false;
}
const publishMeetup = () => {
  if (meetup.isActive) {
    meetup.publish = true;
  }
}
scheduleMeetup('today','Bnagalore');
publishMeetup();
console.log(meetup);