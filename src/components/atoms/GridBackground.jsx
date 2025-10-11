export default function GridBackground({ children }) {
  return (
    <div className="dotted-grid w-full min-h-screen h-full bg-gray-100 relative">
      {children}
    </div>
  );
}
