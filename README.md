NOTE: The link in the description leads to a static page which has a static database (typicode) that is meant for only fetching the data.
To see it in action, follow the below steps
1.  yarn install
2.  in services folder, paste this in axios baseURL : "http://localhost:8000"   
3.  in a separate terminal, run the command "yarn run json:server"  (this will make the json-server watch db.json)
4.  do yarn start