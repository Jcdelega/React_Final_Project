const Profile = ({ user }) => {
  return (
    <div>
      <h1>Profile</h1>
      {user && <p>Username: {user.username}</p>}
      {/* ... contenido de la página ... */}
    </div>
  );
};

export default Profile;