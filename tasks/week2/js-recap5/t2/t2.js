const testPost = async () => {
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': 'reqres-free-v1'
    },
    body: JSON.stringify({name: 'Aleksi', job: 'Web developer'})
  }

  try {
    const res = await fetch("https://reqres.in/api/users/1", options);
    if (!res.ok) throw new Error(`Response failed, status ${res.status}`);
    const data = await res.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

testPost();
