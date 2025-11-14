# Steps to run The File!
1. Clone the repository onto your Local Machine.
2. Run (npm install) in the terminal to install all the dependencies required to run the file.
3. Type npm run dev in the terminal to start the server.
4. Go to Postman and copy the URL of the server and paste it in the input box.
5. Now select The type of the route such as (POST, DELETE & POST).

# POST Route
1. Select the POST Route from the Route Selector in the Postman.
2. Copy and Paste (http://localhost:3000/api/parts) in the input box.
3. Pass the JSON data in the body Section -
{ "id": 3,
"name":"str",
"category":"Flange",
"material":"Steel",
"diameter":10}
4. Click the send Button.
5. message will pop up in the terminal of the postman ({message: Part added Successfully!})

 # GET Route
1. Select the GET Route from the Route Selector in the Postman.
2. Copy and Paste (http://localhost:3000/api/parts) in the input box.
3. Click the send Button.
4. All CAD Parts will be displayed in the output terminal.

# DELETE Route
1. Select the DELETE Route from the Route Selector in the Postman.
2. Copy and Paste (http://localhost:3000/api/parts/id) in the input box.
3. Pass the id of the Part which you want to delete in the /id endpoint such as - (http://localhost:3000/api/parts/2)
4. Click the send Button.
5. message will pop up in the terminal of the postman ({message: Part Deleted Successfully!})

# Video Proof Of Running Code :-
https://github.com/user-attachments/assets/9ab99dcc-b62c-4d9c-aa3b-c871d259f15e
