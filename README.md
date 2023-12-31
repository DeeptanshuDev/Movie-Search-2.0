# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

















# Movie-Search-App
This is an LWC Component for movie search


****App Architecture**
![image](https://github.com/DeeptanshuDev/Movie-Search-App/assets/46113041/441e7440-586c-4708-a146-25f651794c35)


**Introduction of API**
OMDB API - The Open Movie Database
The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
https://www.omdbapi.com/


Step 1:
Create "Remote Site Settings" for omdbApi and MovieImage
![image](https://github.com/DeeptanshuDev/Movie-Search-App/assets/46113041/5f6cd362-e97c-4b02-ba82-2dd70ef98b27)

![image](https://github.com/DeeptanshuDev/Movie-Search-App/assets/46113041/147a34ba-c8fd-4097-a4b8-98fff33961ff)

Step 2:
Create "Trusted URLs" for omdbApi and MovieImage
![image](https://github.com/DeeptanshuDev/Movie-Search-App/assets/46113041/833c575d-0b86-4255-b4d2-f7b9c3b36df2)

![image](https://github.com/DeeptanshuDev/Movie-Search-App/assets/46113041/090d75cb-fba8-4761-b1af-7fc632444e91)

Step 3: 
Create movieSearch component to search the movie
![image](https://github.com/DeeptanshuDev/Movie-Search-2.0/assets/46113041/12020d95-67e8-415a-873a-a5dc062aec2d)

Step 4:
Create movieTile component to show the search result
![image](https://github.com/DeeptanshuDev/Movie-Search-2.0/assets/46113041/8f5623ab-2f5f-430c-a5ec-a336192a298a)

Step 5:
Create movieDetail component to show the details of the selected movie
![image](https://github.com/DeeptanshuDev/Movie-Search-2.0/assets/46113041/c159f498-8e8c-4348-9286-16f082faa36d)


![image](https://github.com/DeeptanshuDev/Movie-Search-2.0/assets/46113041/2f6d98e1-cca9-4fd4-9280-7bfc82dc4feb)

Step 6:
Enable Digital Experience on Salesforce Org Setup -> Digital Experience

Step 7:
Create a new site by clicking "All Sites" on Setup -> Digital Experience -> Sites -> New

Step 8:
Choose the Build your own LWR Template and give the Site Name

Step 9:
Access to Guest Users(Builder -> Setting -> General)

Step 10:
Related CSP Setting(Builder -> Setting -> Security&Privacy)

Step 11:
Activate Site

Step 12:
Publish Changes - Every time you make any changes on LWC component then site needs to publish everytime
















