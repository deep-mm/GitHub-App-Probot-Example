# GitHub-App-Probot-Example
This is an example of GitHub App developed with Probot and hosted on Azure Functions. This App allows to create repository in an organization based on title of new issue created.

![image](https://user-images.githubusercontent.com/29853549/128023303-1f3993f8-1ca8-43f8-ac04-02d3972b4eb0.png)

To run the app locally:
> npm start

To have the app running on Azure function app, 3 app settings needs to be added to Configuration > App Settings
1. APP_ID
2. PRIVATE_KEY
3. WEBHOOK_SECRET

![image](https://user-images.githubusercontent.com/29853549/128023424-f3c4bf01-2f41-47c4-bfd7-4af80e6e5f34.png)
