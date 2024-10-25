import {OAuth2Client} from "google-auth-library";
import path from "path";
import fs from "fs";
import {google} from "googleapis";

const SCOPES = ['https://www.googleapis.com/auth/blogger'];

const authenticate = async (): Promise<OAuth2Client> => {
    const credentialsPath = path.join(process.cwd(), 'credentials.json');
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

    const {client_secret, client_id, redirect_uris} = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID ?? client_id,
        process.env.GOOGLE_CLIENT_SECRET ?? client_secret,
        process.env.GOOGLE_REDIRECT_URI ?? redirect_uris[0]
    );

    // Check if we have previously stored a token.
    const tokenPath = path.join(process.cwd(), 'token.json');
    if (fs.existsSync(tokenPath)) {
        const token = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
        oAuth2Client.setCredentials(token);
    } else {
        // Get new token
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES,
        });
        console.log('Authorize this app by visiting this url:', authUrl);
        // After getting the code from the URL, exchange it for tokens
        const {tokens} = await oAuth2Client.getToken(process.env.GOOGLE_ACCESS_CODE ?? '');
        oAuth2Client.setCredentials(tokens);
        // Store the token to disk for later program executions
        fs.writeFileSync(tokenPath, JSON.stringify(tokens));
    }

    return oAuth2Client;
};

export {authenticate};