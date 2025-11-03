const table = document.getElementById('restaurants');
const modal = document.getElementById('modal');
const restaurantInfo = modal.querySelector('#restaurant-info');
const dailyMenu = modal.querySelector('#daily-menu');

const fetchData = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Fetch failed, status ${res.status}\n${res}`);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const getAllRestaurants = async () => {
  const url = "https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants";
  const data = await fetchData(url);
  return data;
}

const getDailyMenu = async (restaurantId) => {
  const url = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurantId}/en`;
  const data = await fetchData(url);
  return data;
}

const initTable = (items, target) => {
  items.forEach((item) => {
    target.appendChild(createRestaurantRow(item));
  });
}

const createRestaurantRow = (restaurant) => {
  const el = document.createElement('tr');

  const nameEl = document.createElement('td');
  nameEl.textContent = restaurant.name;

  const addressEl = document.createElement('td');
  addressEl.textContent = restaurant.address;

  el.append(nameEl, addressEl);

  el.addEventListener('click', async (e) => {
    e.preventDefault();
    el.classList.add('highlight');

    createRestaurantInfo(restaurant, restaurantInfo);
    await createDailyMenu(restaurant, dailyMenu);

    modal.showModal();
  });

  return el;
}

const createRestaurantInfo = (restaurant, target) => {
  target.innerHTML = '';

  const name = document.createElement('h3');
  name.textContent = restaurant.name;

  target.append(
    name,
    createParagraph(restaurant.address),
    createParagraph(restaurant.postalCode),
    createParagraph(restaurant.city),
    createParagraph(restaurant.phone),
    createParagraph(restaurant.company)
  );
}

const createDailyMenu = async (restaurant, target) => {
  const dailyMenu = await getDailyMenu(restaurant._id);

  if (!dailyMenu.courses) return;

  target.innerHTML = '';
  console.log(dailyMenu);

  dailyMenu.courses.forEach((course) => {
    target.appendChild(createParagraph(`${course.name}; ${course.diets.join(", ")}; ${course.price}`))
  });
}

const createParagraph = (content) => {
  const p = document.createElement('p');
  p.textContent = content;
  return p;
}

document.addEventListener('DOMContentLoaded', async () => {
  const restaurants = await getAllRestaurants();
  console.log(restaurants);

  initTable(restaurants.sort((a, b) => a.name.localeCompare(b.name)), table);

  document.getElementById('close-modal').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.highlight').classList.remove('highlight');
    modal.close();
  });
});
