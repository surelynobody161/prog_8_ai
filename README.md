# prog-8-ai

This is a simple health advice application built with Node.js, Express, and the Azure OpenAI API. The project consists of a client and server part, where the client interacts with the server to generate health tips and advice using the language model.

## Features
- Users can enter a health-related question and get a response from the AI.
- The server communicates with the Azure OpenAI API to process the request.
- User-friendly interface with a text area for input and a button to get health advice.

## Installation

### 1. Clone the repository

git clone https://github.com/surelynobody161/prog_8_ai.git

** install dependencies**
Navigate to the project folder and install dependencies for both the client and server.

# In the root project folder
npm install

# In the client folder
cd client
npm install

# In the server folder
cd ../server
npm install

**Configure your environment**
Create a .env file in the server folder and add your Azure OpenAI API credentials.

AZURE_OPENAI_API_KEY=your_api_key_here
AZURE_OPENAI_API_VERSION=your_api_version_here
AZURE_OPENAI_API_INSTANCE_NAME=your_instance_name_here
AZURE_OPENAI_API_DEPLOYMENT_NAME=your_deployment_name_here

Run the project
Run the server and client simultaneously:

# In the root folder
npm run server
npm run client
