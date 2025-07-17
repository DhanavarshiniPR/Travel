"use client";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Error</h1>
      <p>Something went wrong. Please try again later.</p>
      <style jsx>{`
        .error-page {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f8d7da;
          color: #721c24;
          text-align: center;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}
