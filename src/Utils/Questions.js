 const questions = [
    {
        text: "Hi there! I'm SciAstra ChatBot. What's your name?",
        sender: "bot",
        input: "text",
      },
      {
        text: "Great! Now, please provide your phone number.",
        sender: "bot",
        input: "text",
      },

    {
      text: "What is your primary goal for using SciAstra?",
      options: ["IIT JEE", "NEET", "IISc/IISERs", "Other"],
    },
    {
      text: "Are you preparing for board exams alongside competitive exams?",
      options: [
        "Yes, both",
        "Only competitive exams",
        "Only board exams",
        "I haven't decided yet",
      ],
    },
    {
      text:
        "What level of difficulty do you find most challenging in your preparation?",
      options: ["Easy", "Moderate", "Difficult", "I'm not sure"],
    },
    {
      text: "Which subjects are you focusing on?",
      options: ["Physics", "Chemistry", "Mathematics", "Biology"],
    },
    {
      text: "How would you rate your current understanding of the subjects?",
      options: ["Strong", "Average", "Weak", "I'm not sure"],
    },
    {
      text: "How do you prefer to attend classes?",
      options: ["Live classes", "Recorded classes", "Both", "Not sure"],
    },
    {
      text: "Do you enjoy interactive learning and discussions?",
      options: ["Yes!", "No", "Sometimes", "I'm unsure"],
    },
    {
      text: "Are you aware of the scholarship opportunities at SciAstra?",
      options: [
        "Yes, and I'm interested",
        "No, tell me more",
        "Not sure",
        "I don't need a scholarship",
      ],
    },
    {
      text: "How often do you prefer doubt-clearing sessions?",
      options: ["Regularly", "Occasionally", "Rarely", "Never"],
    },
    {
      text: "What motivated you to choose SciAstra for your exam preparation?",
      options: [
        "Recommendations",
        "Online reviews",
        "Features offered",
        "Other",
      ],
    },
    {
      text: "Which exam offer caught your interest the most?",
      options: [
        "IISc Bengaluru",
        "IIT Madras",
        "NISER Bhubaneswar & CEBS Mumbai",
        "Other",
      ],
    },
    {
      text: "How do you prefer to study for exams?",
      options: ["Self-study", "Group study", "Both", "I'm not sure"],
    },
    {
      text: "What challenges do you face in your current exam preparation?",
      options: [
        "Time management",
        "Understanding concepts",
        "Motivation",
        "Other",
      ],
    },
    {
      text: "How did you hear about SciAstra?",
      options: [
        "Online ads",
        "Social media",
        "Friends/family",
        "Other",
      ],
    },
    {
      text:
        "Would you like to receive updates and tips from SciAstra via email or notifications?",
      options: [
        "Yes, please",
        "No, thanks",
        "Not sure yet",
        "I've already subscribed",
      ],
    },
  ];

  export default questions