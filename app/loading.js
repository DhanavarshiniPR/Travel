"use client";
export default function LoadingPage() {
  return (
    <div className="loading-page">
      <h1>Loading...</h1>
      <style jsx>{`
        .loading-page {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e2e3e5;
          color: #495057;
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
        }
      `}</style>
    </div>
  );
}
