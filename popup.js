document.addEventListener('DOMContentLoaded', () => {

  //slides
  document.getElementById('add-slide').addEventListener('click', function() {
    // Prompt the user to enter a new URL
    var newUrl = prompt('Please enter the new Google Slides URL:');
    
    // Check if the user entered a URL
    if (newUrl) {
      // Find the iframe and replace its src attribute with the new URL
      document.getElementById('slide-frame').src = newUrl;
    }
  });

  // Pomodoro Timer
  const container = document.getElementById('pomodoro-timer');
  container.addEventListener('mouseover', () => {
    container.style.borderRadius = '9%';
    container.style.color = '#FFFFFF';
    container.style.backgroundColor = 'rgb(53,50,50)'; // Change to the hover color
    container.style.boxShadow = '10px 10px 15px rgba(0, 0, 0, 0.4);';
  });

  container.addEventListener('mouseout', () => {
    container.style.color = '#000000';
    container.style.backgroundColor = '#F3F4F6'; // Revert to the original color
  });

  let pomodoroMinutes = 25;
  let pomodoroSeconds = 0;
  let pomodoroInterval;

  const updateTimer = () => {
    document.getElementById('minutes').innerText = String(pomodoroMinutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(pomodoroSeconds).padStart(2, '0');
  };

  document.getElementById('start-pomodoro').addEventListener('click', () => {
    if (!pomodoroInterval) {
      pomodoroInterval = setInterval(() => {
        if (pomodoroSeconds === 0) {
          if (pomodoroMinutes === 0) {
            clearInterval(pomodoroInterval);
            pomodoroInterval = null;
          } else {
            pomodoroMinutes--;
            pomodoroSeconds = 59;
          }
        } else {
          pomodoroSeconds--;
        }
        updateTimer();
      }, 1000);
    }
  });

  document.getElementById('reset-pomodoro').addEventListener('click', () => {
    clearInterval(pomodoroInterval);
    pomodoroInterval = null;
    pomodoroMinutes = 25;
    pomodoroSeconds = 0;
    updateTimer();
  });

  updateTimer();

  // Poll

  const containera = document.getElementById('poll');
const inputTask1= document.getElementById('question');
const inputTask2= document.getElementById('option1');
const inputTask3= document.getElementById('option2');
const inputTask4= document.getElementById('option3');


containera.addEventListener('mouseover', () => {
  containera.style.borderRadius = '20px';
  containera.style.color = '#FFFFFF'; // This affects all text including input
  containera.style.backgroundColor = 'rgb(53,50,50)';
  // containera.style.boxShadow = '10px 10px 15px rgba(0, 0, 0, 0.4)';
  
  // Ensure input text remains black
  inputTask1.style.color = '#000000';
  inputTask2.style.color = '#000000';
  inputTask3.style.color = '#000000';
  inputTask4.style.color = '#000000';
});

containera.addEventListener('mouseout', () => {
  containera.style.color = '#000000';
  containera.style.backgroundColor = '#F3F4F6';
  
  // Reset input text color if needed
  inputTask1.style.color = '#000000';
  inputTask2.style.color = '#000000';
  inputTask3.style.color = '#000000';
  inputTask4.style.color = '#000000';
});
  
  const pollQuestionElement = document.getElementById('poll-question');
    const pollFormElement = document.getElementById('poll-form');
    const pollResultsElement = document.getElementById('poll-results');
    const createPollSection = document.getElementById('create-poll-section');
    const createPollButton = document.getElementById('create-poll');
    
    createPollButton.addEventListener('click', () => {
      const question = document.getElementById('question').value.trim();
      const option1 = document.getElementById('option1').value.trim();
      const option2 = document.getElementById('option2').value.trim();
      const option3 = document.getElementById('option3').value.trim();
      
      if (!question || !option1 || !option2 || !option3) {
        alert('Please fill out all fields.');
        return;
      }
      
      const pollQuestions = [
        {
          question: question,
          options: [option1, option2, option3]
        }
      ];

      const currentQuestion = pollQuestions[0];
      const pollResponses = new Array(currentQuestion.options.length).fill(0);

      pollQuestionElement.textContent = currentQuestion.question;
      pollFormElement.innerHTML = '';
      pollResultsElement.innerHTML = '';

      currentQuestion.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.classList.add('poll-option');
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'poll';
        input.value = index;
        
        const span = document.createElement('span');
        span.textContent = option;
        
        const barContainer = document.createElement('div');
        barContainer.className = 'poll-bar-container';
        
        const bar = document.createElement('div');
        bar.className = 'poll-bar';
        
        barContainer.appendChild(bar);

        input.addEventListener('change', function() {
          pollResponses[index]++;
          updatePollResults();
        });

        label.appendChild(input);
        label.appendChild(span);
        label.appendChild(barContainer);
        pollFormElement.appendChild(label);
      });

      function updatePollResults() {
        const totalVotes = pollResponses.reduce((sum, votes) => sum + votes, 0);
      
        const labels = pollFormElement.querySelectorAll('label span');
        labels.forEach((span, index) => {
          const votes = pollResponses[index];
          const percentage = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(2) : 0;
          span.textContent = `${currentQuestion.options[index]}: ${votes} votes (${percentage}%)`;
        });
      }
      

      // createPollSection.style.display = 'none';
    });
   

  // Daily Growth Checklist
  const container3 = document.getElementById('dgc');
const inputTask = document.getElementById('new-task');

container3.addEventListener('mouseover', () => {
  container3.style.borderRadius = '20px';
  container3.style.color = '#FFFFFF'; // This affects all text including input
  container3.style.backgroundColor = 'rgb(53,50,50)';
  // container3.style.boxShadow = '10px 10px 15px rgba(0, 0, 0, 0.4)';
  
  // Ensure input text remains black
  inputTask.style.color = '#000000';
});

container3.addEventListener('mouseout', () => {
  container3.style.color = '#000000';
  container3.style.backgroundColor = '#F3F4F6';
  
  // Reset input text color if needed
  inputTask.style.color = '#000000';
});

  const checklist = document.getElementById('checklist');
  const newTaskInput = document.getElementById('new-task');

  document.getElementById('add-task').addEventListener('click', () => {
    const taskText = newTaskInput.value.trim(); // Trim whitespace
    if (taskText) {
      // Create a new button
      const button = document.createElement('button');
      button.className = 'task-button';
      button.innerText = taskText;

      // Add event listener to change color on click
      button.addEventListener('click', () => {
        button.style.backgroundColor = '#554ef1'; // Change background color
        button.style.color = 'white'; // Change text color if needed
      });

      // Append to the checklist
      checklist.appendChild(button);

      // Clear the input field
      newTaskInput.value = '';
    }
  });


  //calendar
  function getCalendarUrl() {
    return localStorage.getItem('calendarUrl');
  }

  // Function to set the calendar URL in localStorage
  function setCalendarUrl(url) {
    localStorage.setItem('calendarUrl', url);
  }

  // Function to prompt the user for a calendar URL
  let calendarUrl = "https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your_Timezone";

  const updateCalendarButton = document.getElementById('update-calendar');
  const calendarIframe = document.getElementById('calendar-iframe');

  updateCalendarButton.addEventListener('click', () => {
    // Prompt the user to enter a new URL
    const newUrl = prompt('Please enter the new calendar URL:');

    // Validate and update the URL
    if (newUrl) {
      calendarUrl = newUrl; // Update the stored URL
      calendarIframe.src = calendarUrl; // Update iframe src
    }
  });




  // Chat Box


const chatInput = document.querySelector('.chat-input textarea');
const sendChatBtn = document.querySelector('.chat-input button');
const chatbox = document.querySelector(".chatbox");

const predefinedResponses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm a chatbot, so I don't have feelings, but thanks for asking!",
    "help": "Sure, I'm here to help. What do you need assistance with?",
    "bye": "Goodbye! Have a great day!",
    "html boilerplate": `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>
    `,
    "what is hyperverge": "HyperVerge is a deep-learning startup that provides AI-powered solutions for identity verification, fraud detection, and more. They specialize in computer vision technology and have developed solutions used in various industries including banking, finance, and telecom."
};

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = `<p>${message.replace(/\n/g, '<br>')}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

const generateResponse = (incomingChatLi, userMessage) => {
    const messageElement = incomingChatLi.querySelector("p");
    const response = predefinedResponses[userMessage.toLowerCase()] || "I'm sorry, I don't understand that.";
    messageElement.innerHTML = response.replace(/\n/g, '<br>');
    chatbox.scrollTo(0, chatbox.scrollHeight);
};

const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "chat-outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "chat-incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi, userMessage);
    }, 600);

    chatInput.value = '';
};

sendChatBtn.addEventListener("click", handleChat);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        handleChat();
    }
});




 

});
