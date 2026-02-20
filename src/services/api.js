const BASE_URL = "http://localhost:8080/api/employees";

export const getEmployees = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
}

export const addEmployee = async (employee) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    });
    return response.json();
}

export const deleteEmployee = async (id) => {    
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
}