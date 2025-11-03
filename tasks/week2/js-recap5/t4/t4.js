const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error(`Fetch failed, status ${res.status}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

(async () => {
  try {
    const url = "https://reqres.in/api/users";
    const options = {
      method: 'POST',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: JSON.stringify({name: 'Aleksi', job: 'Web developer'})
    }

    const data = await fetchData(url, options);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
