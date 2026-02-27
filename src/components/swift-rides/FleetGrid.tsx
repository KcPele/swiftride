"use client";

const fleetData = [
  {
    name: "Camry Muscle 2010",
    image: "/images/fleet-camry-muscle-2010.png",
    ownerName: "Kayode Jamiu",
    status: "Active",
  },
  {
    name: "Honda Civic 2007",
    image: "/images/fleet-honda-civic-2007.png",
    ownerName: "Abdulbasit Abdulrasheed",
    status: "Active",
  },
  {
    name: "Peugeot 206 2005",
    image: "/images/fleet-peugeot-206-2005.png",
    ownerName: "Tao Feek",
    status: "Active",
  },
  {
    name: "Peugeot 406",
    image: "/images/fleet-peugeot-406.png",
    ownerName: "Ahmad Nagya Kudu",
    status: "Active",
  },
  {
    name: "Toyota Corolla 2010",
    image: "/images/fleet-toyota-corolla-2010.png",
    ownerName: "Sunday Yohanna",
    status: "Active",
  },
];

/* SVG icons matching FontAwesome used in original */
const UserCircleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 496 512"
    fill="#555"
    style={{ marginRight: 6, flexShrink: 0 }}
  >
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9s27.9-2.7 40.9-6.9c2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 512 512"
    fill="#28a745"
    style={{ marginRight: 5, flexShrink: 0 }}
  >
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);

export default function FleetGrid() {
  return (
    <section style={{ padding: "60px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 30,
          }}
        >
          {fleetData.map((car) => (
            <div
              key={car.name}
              style={{
                background: "#fff",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                transition: "transform 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Car Image */}
              <div
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  color: "#aaa",
                  fontSize: "3rem",
                }}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: 20 }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: 5,
                    color: "#111",
                  }}
                >
                  {car.name}
                </h3>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#555",
                    fontSize: "0.95rem",
                    margin: "8px 0",
                  }}
                >
                  <UserCircleIcon />
                  {car.ownerName}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 8,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: "0.9rem",
                      color: "#28a745",
                      fontWeight: 500,
                    }}
                  >
                    <CheckCircleIcon />
                    {car.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
