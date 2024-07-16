// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    //  This URL points to the API endpoint from which you’ll fetch user data.
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById("api-data");

  // Fetch Data Using try-catch
  try {
    // Asynchronously get data from apiUrl
    const response = await fetch(apiUrl);
    // Convert the response to JSON
    const users = await response.json();


    // Clear the Loading Messag
    dataContainer.innerHTML = '';

    // Loop through the users array with forEach, and for each user, do the following
    // Create a <li> element.
    // Set the text content of the <li> to the user’s name.
    const userList = document.createElement('ul');
    users.forEach(user => {
      const list = document.createElement('li')
      list.textContent = user.name;

    // Append the <li> to userList
      userList.appendChild(list);
    });

     // Append userList to dataContainer
    dataContainer.appendChild(userList);

  } catch (err) {
    // Clear the existing content of dataContainer
    dataContainer.innerHTML = '';
    // Set its text content to indicate an error occurred
    dataContainer.textContent = 'Failed to load user data.';
}
}

  // Invoke fetchUserData on DOMContentLoaded
  // This ensures your data fetching logic runs once the HTML document has fully loaded.
  document.addEventListener('DOMContentLoaded', fetchUserData);


