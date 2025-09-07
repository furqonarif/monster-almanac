const Scroll = ({ children }) => {
  const style = {
    overflowY: "auto",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "16px",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    height: "75vh",
    maxHeight: "800px",
    width: "90%",
    margin: "20px auto",
    color: "#fff",
  };

  return (
    <>
      <style>{`
        /* Scrollbar khusus untuk Webkit browser (Chrome, Edge, Safari) */
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          border: 2px solid transparent; /* kasih jarak biar bulat */
          background-clip: padding-box;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 247, 255, 1);
        }
      `}</style>

      <div style={style}>{children}</div>
    </>
  );
};

export default Scroll;