function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 overflow-auto flex-1">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-2">
          <a href="https://www.linkedin.com/in/brendan-chang-44b1a71a2" target="_blank"><img src="/src/assets/InBug-White.png" alt="linkedin Icon" className="w-6 h-6"/></a>
          <img src="/src/assets/email.webp" alt="Email Icon" className="w-6 h-6"/>
          <a href="https://github.com/Polymonomial" target="_blank"><img src="/src/assets/github-mark-white.png" alt="GitHub Logo" className="w-6 h-6"/></a>
        </div>
        <p className="font-sans font-thin text-xs">BRENDAN CHANG &copy; 2026</p>
      </div>
    </footer>
  );
}
export default Footer;