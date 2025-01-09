let a = 1
async function callAPI() {
  console.log("callAPI 1");
  a++

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log("callAPI 2");

    const data = await res.json();
    console.log("callAPI 3");

    return data;      
  }

  console.log("st 1");
  callAPI();
  console.log("st 2");
  callAPI().then(res => console.log("res"))
  console.log("st 3",a);

  