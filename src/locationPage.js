import mapPic from "./img/map.png";

export default function locationPage() {
  const page = (() => {
    const location = document.createElement("div");
    location.className = "location-page";
    document.querySelector("main").appendChild(location);

    const map = document.createElement("img");
    map.src = mapPic;
    document.querySelector(".location-page").appendChild(map);

    const nearestLocation = document.createElement("div");
    nearestLocation.className = "nearest";
    nearestLocation.textContent = "NEAREST LOCATION";
    document.querySelector(".location-page").appendChild(nearestLocation);
  })();

  const locationInfo = (() => {
    const locationContainer = (() => {
      const container = document.createElement("div");
      container.className = "location-container";
      document.querySelector(".nearest").appendChild(container);
    })();

    const infoContainer = document.querySelector(".location-container");

    const locationName = (() => {
      const name = document.createElement("div");
      name.className = "location-name"
      name.textContent = "Artisan Korean Fried Chicken, Real City"
      infoContainer.appendChild(name);
    })();

    const phoneNumber = (() => {
      const phone = document.createElement("div");
      phone.id = "phoneNumber";
      phone.textContent = "(123) 456-7890";
      infoContainer.appendChild(phone);
    })();

    const address= (() => {
      const address = document.createElement("div");
      address.id = "address";
      address.textContent = "123 W Maple Dr, Real City, CA 12345";
      infoContainer.appendChild(address);
    })();

    const hour = (() => {
      const hoursContainer = document.createElement("ul");
      hoursContainer.className = "location-hours";
      document.querySelector(".nearest").appendChild(hoursContainer);

      const container = document.querySelector(".location-hours");

      const daysAndHours = (day, time) => {
        const aDay = document.createElement("li");
        aDay.className = day;
        container.appendChild(aDay);

        const aDayContainer = document.querySelector(`.${day}`);

        const days = document.createElement("div");
        days.id = day + "ID";
        days.textContent = day;
        aDayContainer.appendChild(days);

        const hours = document.createElement("div");
        hours.textContent = time;
        aDayContainer.appendChild(hours);
      };

      const mondayThursday = (() => {
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
  })();
}
