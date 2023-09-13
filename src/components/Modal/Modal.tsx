export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed left-0 top-0 right-0 h-full  bg-[#00000080] z-[100] flex justify-center items-center">
      {children}
    </div>
  );
}
