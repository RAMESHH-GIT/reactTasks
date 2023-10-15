import React, { useState, useEffect } from "react";

const AppTask2 = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [postDetails, setPostDetails] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!selectedUser) return;

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [selectedUser]);

  useEffect(() => {
    const fetchPostDetails = async () => {
      if (!selectedPost) return;

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${selectedPost}`);
        const data = await response.json();
        setPostDetails(data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchPostDetails();
  }, [selectedPost]);

  const handleUserChange = (event) => {
    const selectedUser = event.target.value;
    setSelectedUser(selectedUser);
    setSelectedPost("");
  };

  const handlePostChange = (event) => {
    const selectedPost = event.target.value;
    setSelectedPost(selectedPost);
  };

  return (
    <div>
      <h2>Select a user:</h2>
      <select value={selectedUser} onChange={handleUserChange}>
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <h2>Select a post:</h2>
      <select value={selectedPost} onChange={handlePostChange} disabled={!selectedUser}>
        <option value="">Select a post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>

      {Object.keys(postDetails).length > 0 && (
        <div>
          <h2>Post Details</h2>
          <p>Title: {postDetails.title}</p>
          <p>Body: {postDetails.body}</p>
          {/* Display other post details as needed */}
        </div>
      )}
    </div>
  );
};

export default AppTask2;
