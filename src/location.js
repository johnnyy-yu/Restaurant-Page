export function locationPage() {
    const content = document.querySelector("#content");
    const location = document.createElement("div");
    location.id = "container-location";
    location.textContent = "Real City - Maple Dr"
    content.append(location);

    const locationContainer = document.querySelector("#container-location");
    
    (function phoneNumber () {
        const phone = document.createElement("div");
        phone.id = "phoneNumber";
        phone.textContent = "(123) 456-7890"
        locationContainer.appendChild(phone);
    })();

    (function address () {
        const addressHeading = document.createElement("div");
        addressHeading.id = "address-heading";
        addressHeading.textContent = "Address:";
        locationContainer.appendChild(addressHeading);

        const address = document.createElement("div");
        address.id = "address";
        address.textContent = "123 W Maple Dr\nReal City, CA 12345"
        locationContainer.appendChild(address)
    })();

    (function hour () {
        const hoursHeading = document.createElement("div");
        hoursHeading.id = "hours-heading";
        hoursHeading.textContent = "Hours";
        locationContainer.appendChild(hoursHeading);

        const hoursContainer = document.createElement("ul");
        hoursContainer.className = "location-hours"
        locationContainer.appendChild(hoursContainer);

        const container = document.querySelector(".location-hours");

        const daysAndHours = (day, time) => {
            const aDay = document.createElement("li");
            aDay.className = day;
            container.appendChild(aDay);
            
            const aDayClassName = "." + day 
            const aDayContainer = document.querySelector(aDayClassName);

            const days = document.createElement("div");
            days.id = day + "ID"
            days.textContent = day;
            aDayContainer.appendChild(days);

            const hours = document.createElement("div");
            hours.textContent = time;
            aDayContainer.appendChild(hours);
        };

        const mondayThursday = (() =>  {
            daysAndHours("Monday-Thursday", "10:00 AM - 9:00 PM");
        })();

        const friday = (() => {
            daysAndHours("Friday", "10:00 AM - 10:00 PM");
        })();

        const saturday = (() => {
            daysAndHours("Saturday", "10:00 AM - 12:00 AM");
        })();

        const sunday = (() => {
            daysAndHours("Sunday", "Closed");
        })();
    })();
}