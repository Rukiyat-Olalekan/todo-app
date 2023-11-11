export async function postData(data) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("User data not submitted");
    }
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
