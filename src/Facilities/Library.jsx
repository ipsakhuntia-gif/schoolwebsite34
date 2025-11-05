// import React from "react";

// const Library = () => {
//   const styles = {
//     section: {
//       padding: "40px 20px",
//       fontFamily: "Arial, sans-serif",
//     },
//     hero: {
//       background: "url('https://via.placeholder.com/1200x400') center/cover",
//       color: "#fff",
//       textAlign: "center",
//       padding: "80px 20px",
//       borderRadius: "10px",
//     },
//     heading: { fontSize: "36px", marginBottom: "10px" },
//     subheading: { fontSize: "20px", fontStyle: "italic" },
//     about: { margin: "40px auto", maxWidth: "800px", textAlign: "center" },
//     rules: {
//       background: "#f9f9f9",
//       padding: "20px",
//       borderRadius: "10px",
//       margin: "30px auto",
//       maxWidth: "600px",
//     },
//     categories: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
//       gap: "20px",
//       marginTop: "30px",
//     },
//     card: {
//       background: "#fff",
//       padding: "15px",
//       borderRadius: "10px",
//       boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//       textAlign: "center",
//     },
//   };

//   const categories = [
//     "Fiction",
//     "Non-Fiction",
//     "Science & Technology",
//     "History",
//     "Magazines & Journals",
//     "Digital Resources",
//   ];

//   return (
//     <div style={styles.section}>
//       {/* Hero Section */}
//       <div style={styles.hero}>
//         <h1 style={styles.heading}>Our School Library</h1>
//         <p style={styles.subheading}>
//           A Gateway to Knowledge and Imagination
//         </p>
//       </div>

//       {/* About */}
//       <div style={styles.about}>
//         <h2>About the Library</h2>
//         <p>
//           Our library houses over 10,000 books, journals, and digital resources.
//           It is designed to provide a peaceful environment for reading and
//           research, helping students develop knowledge, creativity, and a love
//           for lifelong learning.
//         </p>
//       </div>

//       {/* Rules */}
//       <div style={styles.rules}>
//         <h3>Library Rules</h3>
//         <ul>
//           <li>Maintain silence inside the library.</li>
//           <li>Return borrowed books within 15 days.</li>
//           <li>Library timing: 8:00 AM – 5:00 PM.</li>
//         </ul>
//       </div>

//       {/* Categories */}
//       <h2 style={{ textAlign: "center" }}>Book Categories</h2>
//       <div style={styles.categories}>
//         {categories.map((cat, i) => (
//           <div key={i} style={styles.card}>
//             📖 {cat}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Library;

























import React from "react";

const Library = () => {
  const styles = {
    section: {
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    hero: {
      background: "url('https://via.placeholder.com/1200x400') center/cover",
      color: "#fff",
      textAlign: "center",
      padding: "80px 20px",
      borderRadius: "10px",
    },
    heading: { fontSize: "36px", marginBottom: "10px" },
    subheading: { fontSize: "20px", fontStyle: "italic" },
    about: { margin: "40px auto", maxWidth: "800px", textAlign: "center" },
    rules: {
      background: "#f9f9f9",
      padding: "20px",
      borderRadius: "10px",
      margin: "30px auto",
      maxWidth: "600px",
    },
    categories: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "20px",
      marginTop: "30px",
    },
    card: {
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
  };

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Science & Technology",
    "History",
    "Magazines & Journals",
    "Digital Resources",
  ];

  return (
    <div style={styles.section}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heading}>Our School Library</h1>
        <p style={styles.subheading}>
          A Gateway to Knowledge and Imagination
        </p>
      </div>

      {/* About */}
      <div style={styles.about}>
        <h2>About the Library</h2>
        <p>
          Our library houses over 10,000 books, journals, and digital resources.
          It is designed to provide a peaceful environment for reading and
          research, helping students develop knowledge, creativity, and a love
          for lifelong learning.
        </p>
      </div>

      {/* Rules */}
      <div style={styles.rules}>
        <h3>Library Rules</h3>
        <ul>
          <li>Maintain silence inside the library.</li>
          <li>Return borrowed books within 15 days.</li>
          <li>Library timing: 8:00 AM – 5:00 PM.</li>
        </ul>
      </div>

      {/* Categories */}
      <h2 style={{ textAlign: "center" }}>Book Categories</h2>
      <div style={styles.categories}>
        {categories.map((cat, i) => (
          <div key={i} style={styles.card}>
            📖 {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;