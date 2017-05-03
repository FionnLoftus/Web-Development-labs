var hotel = {
	name: 'Quay',
	rooms : 40,
	booked : 25,
	checkAvailability : function() {
		return this.rooms - this.booked;
			}
};

document.getElementById("hotelName").innerHTML = hotel.name;
document.getElementById("rooms").innerHTML = hotel.checkAvailability();
