export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-center md:text-left">
          <span className="text-xl font-black text-blue-600 tracking-tighter block mb-1">
            LUXE.
          </span>
          <p className="text-sm text-gray-500 max-w-xs">
            Your one-stop destination for premium lifestyle products.
          </p>
        </div>

        <div className="text-sm text-gray-400">
          © 2026 Luxe Store. Powered by FakeStore API.
        </div>

      </div>
    </footer>
  );
}