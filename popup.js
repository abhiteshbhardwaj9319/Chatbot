// popup.js
function openSidePanel() {
    const sidePanel = window.open('side_panel.html', 'SidePanel', 'width=600,height=500');
  }
document.addEventListener('DOMContentLoaded', function () {
    // Function to make an API call to Bing AI Chatbot
    function callBingAIChatbot(userQuestion) {
      // Replace 'YOUR_BING_AI_API_ENDPOINT' with the actual API endpoint for Bing AI Chatbot
      // You might need to provide any necessary API keys or authentication tokens here
      const bingAiEndpoint = 'YOUR_BING_AI_API_ENDPOINT';
  
      // Example of sending a sample request to Bing AI Chatbot with user's question
      // You can customize the API request based on the requirements of your specific chatbot
      fetch(bingAiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: userQuestion })
      })
        .then(response => response.json())
        .then(data => {
          // Process the received response from Bing AI Chatbot
          const chatbotResponse = data.response; // Adjust this based on your API response structure
  
          // Display the chatbot response to the user
          const chatbotInterface = document.getElementById('chatbot-interface');
          chatbotInterface.innerHTML = chatbotResponse;
        })
        .catch(error => {
          console.error('Error calling Bing AI Chatbot:', error);
          // Handle error scenarios, e.g., show an error message to the user
        });
    }
  
    // Function to make an API call to Midjourney AI for an image
    function callMidjourneyAIForImage() {
      // Replace 'YOUR_MIDJOURNEY_AI_API_ENDPOINT' with the actual API endpoint for Midjourney AI
      // You might need to provide any necessary API keys or authentication tokens here
      const midjourneyAiEndpoint = 'YOUR_MIDJOURNEY_AI_API_ENDPOINT';
  
      // Example of sending a sample request to Midjourney AI
      // You can customize the API request based on the requirements of your specific use case
      fetch(midjourneyAiEndpoint)
        .then(response => response.blob()) // Assumes the response contains an image as a Blob
        .then(imageBlob => {
          // Create an image element and display the received image to the user
          const imgElement = document.createElement('img');
          imgElement.src = URL.createObjectURL(imageBlob);
  
          // Display the image on the chatbot interface
          const chatbotInterface = document.getElementById('chatbot-interface');
          chatbotInterface.innerHTML = '';
          chatbotInterface.appendChild(imgElement);
        })
        .catch(error => {
          console.error('Error calling Midjourney AI:', error);
          // Handle error scenarios, e.g., show an error message to the user
        });
    }
  
    // Function to display the text input box
    function displayTextInputBox() {
      const chatbotInterface = document.getElementById('chatbot-interface');
      chatbotInterface.innerHTML = `
        <input type="text" id="user-question" placeholder="Type your question here">
        <button id="submit-btn">Submit</button>
      `;
  
      // Event listener for the submit button
      document.getElementById('submit-btn').addEventListener('click', function () {
        const userQuestion = document.getElementById('user-question').value;
        if (userQuestion.trim() !== '') {
          // Call the appropriate API based on the button clicked
          const buttonClicked = chatbotInterface.getAttribute('data-button');
          if (buttonClicked === 'funny-bot') {
            callBingAIChatbot(userQuestion);
          } else if (buttonClicked === 'image-create') {
            callMidjourneyAIForImage();
          }
        }
      });
  
      // Event listener for Enter key press in the text input box
      document.getElementById('user-question').addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
          document.getElementById('submit-btn').click();
        }
      });
    }
  
    // Event listeners for the buttons
    // document.getElementById('funny-bot').addEventListener('click', function () {
    //   const chatbotInterface = document.getElementById('chatbot-interface');
    //   chatbotInterface.setAttribute('data-button', 'funny-bot');
    //   displayTextInputBox();
    // });
  
    // document.getElementById('image-create').addEventListener('click', function () {
    //   const chatbotInterface = document.getElementById('chatbot-interface');
    //   chatbotInterface.setAttribute('data-button', 'image-create');
    //   displayTextInputBox();
    // });

    document.getElementById('funny-bot').addEventListener('click', function () {
        openSidePanel();
      });
    
      document.getElementById('image-create').addEventListener('click', function () {
        openSidePanel();
      });
  
    document.getElementById('connect').addEventListener('click', function () {
      // Replace 'YOUR_LINKEDIN_PROFILE_URL' with the URL to your LinkedIn profile
      const linkedinProfileUrl = 'YOUR_LINKEDIN_PROFILE_URL';
      window.open(linkedinProfileUrl, '_blank');
    });
  });
  