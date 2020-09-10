  
  /* Function to POST data */
  const postData = async (url = "", data = {}) => {
    console.log("postData Function running", data);
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    try {
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    postData('http://localhost:8081/meaningCloud', {url: formText})
    .then(res => res.json())
    .then(function(res) {
        const getData = Object.getData(res);
        document.getElementById('polarity').innerHTML = `Polarity: ${getData.score_tag}`;
        document.getElementById("agreement").innerHTML = `Agreement: ${getData.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${getData.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${getData.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${getData.irony}`;
    })
}

export { handleSubmit}
