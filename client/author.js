const createAuthor = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
  
    const response = await fetch("/api/authors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, contact }),
    });
  
    const data = await response.json();
    console.log(data);
  };
  
  const getAuthors = async () => {
    const response = await fetch("/api/authors");
    const data = await response.json();
    console.log(data);
  };
  
  const getAuthorById = async (id) => {
    const response = await fetch(`/api/authors/${id}`);
    const data = await response.json();
    console.log(data);
  };
  
  const updateAuthor = async (id) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
  
    const response = await fetch(`/api/authors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, contact }),
    });
  
    const data = await response.json();
    console.log(data);
  };
  
  const deleteAuthor = async (id) => {
    const response = await fetch(`/api/authors/${id}`, {
      method: "DELETE",
    });
  
    const data = await response.json();
    console.log(data);
  };
  