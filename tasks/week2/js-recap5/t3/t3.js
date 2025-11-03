const testGet = async () => {
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  }

  try {
    const res = await fetch("https://reqres.in/api/unknown/23", options);

    if (!res.ok) throw new Error(`Response failed, status ${res.status}:\n${res}`);
    const data = await res.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

testGet();
