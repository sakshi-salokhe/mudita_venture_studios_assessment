# mudita_venture_studios_assessment

# Specs:
1. LLM: Free LLM Model used using Ollama (Model: Llama2)
2. API Framework: ExpressJS
3. Frontend Framework: VueJS

# Running Ollama LLM server
- After installing Ollama from [here](https://ollama.com/download), download the model by running the command `ollama pull llama2` in your terminal. 
    - This will download the modal.
- Then run `ollama serve` to run the model as a service to be accessed by our API.


# Running the app
- If UI has any changes, run `npm run build`.
- To run the server: `node backend/server.js`
- App runs at `http://localhost:` (frontend runs from express backend server)