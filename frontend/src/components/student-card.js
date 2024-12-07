import React from "react";

const StudentCard = ({ student, onCardClick }) => {
  return (
    <div 
      style={styles.card} 
      onClick={() => onCardClick(student)}
    >
      <h3 style={styles.title}>{student.name}</h3>
    </div>
  );
};

const styles = {
  card: {
    border: "5px solid #9D6E49",
    borderRadius: "20px",
    width: "200px",
    height: "50px",
    padding: "16px",
    margin: "16px",
    cursor: "pointer",
    backgroundColor: "#C49D81",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: "0",
    fontSize: "24px",
    color: "#F8F1EB",
  },
};

export default StudentCard;
