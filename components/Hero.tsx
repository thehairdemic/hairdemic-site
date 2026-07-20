export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        position: "relative"
      }}
    >
      <div
        style={{
          width: 220,
          height: 220,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#ffffff 0%,#ff4ea8 35%,#5d7cff 70%,transparent 100%)",
          filter: "blur(1px)",
          boxShadow:
            "0 0 120px rgba(255,78,168,.45),0 0 200px rgba(93,124,255,.20)",
          marginBottom: 60
        }}
      />

      <h1
        style={{
          fontSize: "clamp(56px,8vw,96px)",
          fontWeight: 700,
          letterSpacing: "-4px"
        }}
      >
        Hairdemic
      </h1>

      <h2
        style={{
          maxWidth: 900,
          fontSize: "clamp(24px,3vw,38px)",
          fontWeight: 300,
          lineHeight: 1.3,
          marginTop: 20
        }}
      >
        Quality hair care and positive hair experiences should be accessible for
        everyone.
      </h2>

      <p
        style={{
          marginTop: 40,
          color: "#b7b7b7",
          maxWidth: 700,
          fontSize: 22
        }}
      >
        Every hair journey begins with one story.
      </p>

      <button
        style={{
          marginTop: 60,
          padding: "18px 36px",
          borderRadius: 999,
          border: "none",
          fontSize: 18,
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        Begin Investigation
      </button>
    </section>
  );
}
