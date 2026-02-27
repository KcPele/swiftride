interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        padding: "140px 0 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#f8f9fa",
        backgroundImage:
          "linear-gradient(rgba(255,102,0,0.05), rgba(255,102,0,0.05))",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: 10,
          color: "#111",
          fontWeight: 800,
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            maxWidth: 600,
            margin: "0 auto",
            color: "#555",
            fontSize: "1.1rem",
            lineHeight: 1.6,
            padding: "0 20px",
          }}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
}
