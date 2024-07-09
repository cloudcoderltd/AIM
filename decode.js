const { GoogleAuth } = require('google-auth-library');
const axios = require('axios');
const fs = require('fs');

// Replace with your service account key file path
const KEYFILEPATH = 'ccl-aim-425312-ab0fc00f5b91.json';

// Replace with the actual package name, subscription ID, and token from the decoded data
const packageName = 'com.cloud.aim';
const subscriptionId = 'aim.pro';
const token = 'kodipbojbloaagomdlcnoape.AO-J1OxOmlPbsZgXm7EEfsuRIDGVQnsmTBeNuuxdSwWLA_dY5rcHLCaaDsFfIbD-eZH_AQKAa9U4VwRxYPItU51PRfHd0SYA';

// The URL for the Google Play Developer API
const url = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${packageName}/purchases/subscriptions/${subscriptionId}/tokens/${token}`;

async function getSubscriptionInfo() {
    try {
        // Create a Google Auth client
        const auth = new GoogleAuth({
            keyFile: KEYFILEPATH,
            scopes: ['https://www.googleapis.com/auth/androidpublisher']
        });

        // Get the client
        const client = await auth.getClient();

        // Get the access token
        const accessTokenResponse = await client.getAccessToken();
        const accessToken = accessTokenResponse.token;

        // Debug information
        console.log('Access Token:', accessToken);

        // Make the API request to get subscription info
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        // Log the subscription info
        console.log('Subscription Info:', response.data);
    } catch (error) {
        console.error('Error fetching subscription info:', error.response ? error.response.data : error.message);
    }
}

// Call the function to get subscription info
getSubscriptionInfo();
