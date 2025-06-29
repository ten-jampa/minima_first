import { Client } from "@gradio/client";

async function testAPI() {
    try {
        console.log("Testing API connection...");
        
        // Connect to the client
        const client = await Client.connect("Ten-Jampa/minima_first");
        console.log("Connected to client successfully");
        
        // Get a test image
        const response = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
        const exampleImage = await response.blob();
        console.log("Test image loaded");
        
        // Make prediction
        const result = await client.predict("/predict", { 
            img: exampleImage, 
        });
        
        console.log("API Response:", result);
        console.log("Response data:", result.data);
        console.log("Response type:", typeof result.data);
        console.log("Full response data:", JSON.stringify(result.data, null, 2));
        
        return result;
    } catch (error) {
        console.error("API Test failed:", error);
        throw error;
    }
}

// Run the test
testAPI(); 