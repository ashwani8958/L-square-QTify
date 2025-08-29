# L-square-QTify

Getting Started
We are delighted to welcome you to the Take Home Session by Crio.Do😀. Before we begin our learning adventure, we recommend that you complete the following prerequisites to ensure a smooth learning experience during the sessions.

Step 1 : Development Environment:
During our sessions, you will work on your local system to simulate real-world take-home assignments. Make sure the following tools are installed.
Visual Studio Code (VSCode) IDE: https://code.visualstudio.com/download

After installing VSCode, open it and head over to the extensions tab on the left. Search and install the following extensions:
ES7+ React/Redux/React-Native snippets: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets 
ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
Prettier: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode 
Color Highlight: https://github.com/naumovs/vscode-ext-color-highlight 
Configure the following settings in VSCode:
Go to File > Preferences > Type “autosave” in search box > Choose “onFocusChange” > Close the settings tab

NodeJS LTS version: https://nodejs.org/en/download/
After installing, restart your system and open terminal/command prompt and type “node -v”. This should return the version number. If it says command not found, it means that your setup is incorrect and you might have to try again.
GIT: https://git-scm.com/downloads



Step 2 : To provide some dummy content and readme, you have to fork (create a copy) of our git repository.
Go to this GitHub repository.
Click Fork and proceed with the steps.
Now the repository would have been created under your account.
Clone this repository in your system. (Check online on how to clone repo)
Open this repository in VSCode.
Create a sample.txt file inside the repo (This is to check if our git installation is working correctly)
CRA (create-react-app): https://create-react-app.dev/docs/getting-started
Open terminal in VS code and change the working directory to your project folder(which will be empty initially) and then execute the following commands:
npx create-react-app qtify
cd qtify
npm start


Open the terminal inside vscode, and type git add . and press enter.
Type git commit -m “Test commit” and press enter.
Type git push
It should ask you for your credentials like username and password. For the username, enter your github ID/github email ID and for password, follow these steps.
Head over to https://github.com/settings/tokens and Generate new token (classic). Give the name as “crio-take-home”, choose expiration as “No expiration” and click the entire “repo” checkmark and create a token.
You will now see a token on the screen. Copy and paste this in a safe place like notepad. Go back to vscode and paste this token in the password field.
Check if the file got pushed to your repository. You can visit the repo on your profile in the browser and check.
Congratulations! Your git setup is complete

Step 3 : Vercel Continuous Deployment (from GitHub):
Sign up on vercel using the email option. Use the same email address with which you have created your GitHub account.
On your Vercel dashboard, Click on Add New -> Project

Choose Continue with GitHub

An Authorize Vercel window will open up, scroll down in it and click on Authorize Vercel.

Click on Install:

In the Installing Vercel window, scroll down and select Only select repositories and then search for your repository name which contains your QTify project and select it.

Click on Install.

Enter your GitHub password and click on Confirm.

You will get the Installation Approved message. Click on Go to Dashboard.

On the Vercel dashboard, click on Import in front of your project repository.
Enter the name of your project and click on Deploy.

Wait for some minutes as it takes some time for the deployment to complete. And upon successful completion of deployment, you will be redirected to the following page:

Click on the site image as shown below:

You will be redirected to your deployed application:

Congratulations! You have successfully deployed your application to Vercel. Now, whenever you change the code and push it to your GitHub, the deployment will reoccur automatically and you will see the latest implementation in your deployed link. 