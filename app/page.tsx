export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#05070c",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          marginBottom: "20px",
          letterSpacing: "-2px"
        }}
      >
        Hairdemic
      </h1>

      <h2
        style={{
          maxWidth: "900px",
          fontWeight: 400,
          fontSize: "34px",
          lineHeight: 1.3
        }}
      >
        Quality hair care and positive hair experiences should be accessible
        for everyone.
      </h2>

      <p
        style={{
          marginTop: "40px",
          maxWidth: "700px",
          fontSize: "22px",
          color: "#bbbbbb"
        }}
      >
        Every hair journey begins with one story.
      </p>

      <button
        style={{
          marginTop: "60px",
          padding: "18px 36px",
          fontSize: "18px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          background: "white",
          color: "black",
          fontWeight: 600
        }}
      >
        Begin Investigation
      </button>
    </main>
  );
}
