# GYANT TEST
Todo medical application built using MERN stack.

# INSTALLATION
"npm install" for the backend
"cd client" then => "npm install -g" to install all the dependencies on the client.

In case of "Error: PostCSS plugin tailwindcss requires PostCSS 8" then follow this instructions:
https://tailwindcss.com/docs/installation#post-css-7-compatibility-build

also install: "npm install @craco/craco" dependencies.

Create a cluster mongodb Atlas URL and replace it into the file "app.js"

# USAGE
"npm run dev" to run the backend
"cd client" then => "npm run start" to run the frontend

1) Signup a user
2) Register a "bundle" of EHR condition and its code into "REGISTER CONDITION" tab
3) Go to Medical cases to "create" and assign the EHR code condition(choose one of the dropdown list)
4) Review the bunch of previous assigned case, update and "DONE", it will be save on the DB as resolved = true with a time stamp(when created and updated).
5) If no cases its avaliable a message "You are done!" will display, otherwise "Pending for review" will show.

# CONTACT
Please do not hesitate to contact me if I can provide further information on this matter: jona5917@gmail.com, Jonathan

# THANKS