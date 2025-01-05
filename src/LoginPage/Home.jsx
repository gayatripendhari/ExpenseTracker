import React from "react";

const Home = ({ onStartTracking }) => {
  return (
    <div style={styles.container}>
      <img
        src="https://img.freepik.com/premium-vector/investment-statistic-with-money-illustration-growth-investment-finance-business-icon-concept-white-isolated_138676-623.jpg"
        alt="Track expenses"
        style={styles.image}
      />
      <div style={styles.text}>
        <h2 style={styles.boldText}>Keep Track of your Income and Expenses</h2>
        <p>Look everywhere you can to cut a little bit from your expenses. It will all add up to a meaningful sum.</p>
        <button style={styles.button} onClick={onStartTracking}>
          Start Tracking Your Expenses
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" },
  image: { maxWidth: "50%", marginRight: "20px" },
  text: { maxWidth: "50%", fontWeight:"50px" },
  boldText: { fontWeight: "bold" },
  button: { marginTop: "10px", padding: "10px 15px", cursor: "pointer", background: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" },
};

export default Home;
