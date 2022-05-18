function handleSubmit(event) {
    event.preventDefault()
    
    //pull elements to update for sentiment analysis
    let agreementTxt = document.getElementById('agreement');
    let subjectivityTxt = document.getElementById('subjectivity');
    let confidenceTxt = document.getElementById('confidence');
    let ironyTxt = document.getElementById('irony');
    let url = document.getElementById('url');

    // check what text was put into the form field
    //let text = document.getElementById('text').value
    //Client.checkForName(text)
    
    
/* Function to POST data - recycled from weather app */
    const postData = async (url = '', data = {}) => {
        const response = await fetch (url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        try {
            const newData = await response.json();
            return newData;
        }
        catch(error) {
            console.log('error', error);
        }
    };

    console.log("::: Form Submitted :::")
    
    /* for testing
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */
    
    let analysis = await postData ('http://localhost:8081/apicall')
    .then(function(res) {
        agreementTxt.insertAdjacentHTML(beforeend, res.agreement);
        subjectivityTxt.insertAdjacentHTML(beforeend, res.subjectivity);
        confidenceTxt.insertAdjacentHTML(beforeend, res.confidence);
        ironyTxt.insertAdjacentHTML(beforeend, res.irony);
    })
}

export { handleSubmit }
