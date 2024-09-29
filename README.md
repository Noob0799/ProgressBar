# ProgressBar
A Progress Bar built using React with few accessibility attributes added like { role: "progressbar", aria-valuemax="100" aria-valuemin="0" aria-valuenow="current-value"}  
Link to live app: https://noob-progress-bar.netlify.app/
- The Progress Bar shows the live percentage from 0 to 100
- Initially, the text below the Progress Bar shows "Loading..."
- When percentage reaches 100, the text changes to "Completed". This is handled by an onComplete function passed as a prop to the ProgressBar component to make it scalable. This function can be replaces by anything depending on what the user wants to accomplish when the loading is complete i.e the percentage reaches 100

## Initial State
![image](https://github.com/user-attachments/assets/211795b4-3ab6-4a6e-9f91-de24f16dcb6e)

## Intermediate State at 52%
![image](https://github.com/user-attachments/assets/64f575a9-1aca-4f86-8358-4b2738235105)

## Final State at 100%
![image](https://github.com/user-attachments/assets/acf122d5-548f-40be-b124-06974771dc10)
