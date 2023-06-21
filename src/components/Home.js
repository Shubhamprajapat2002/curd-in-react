import React, { useState } from 'react';
import initialData from './Data';

const Home = () => {

    const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAdd = () => {
    const newId = data.length + 1;
    const newData = { ...formData, id: newId };
    setData([...data, newData]);
    setFormData({ name: '', email: '' });
  };

  const handleEdit = (id) => {
    const item = data.find((item) => item.id === id);
    setFormData({ ...item });
  };

  const handleUpdate = () => {
    const updatedData = data.map((item) => {
      if (item.id === formData.id) {
        return { ...formData };
      }
      return item;
    });
    setData(updatedData);
    setFormData({ name: '', email: '' });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
       <div>
      

    <div style={{marginLeft:"40%"}}  className='container'>
      <h2>Codes For Tomorrow</h2>
    </div>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {formData.id ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}

      <h2>Data List</h2>
      <table>
        <thead>
          <tr >
            <th>ID</th>
            <th >Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Home
