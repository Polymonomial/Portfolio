import linkedinIcon from '/src/assets/InBug-White.png';
import emailIcon from '/src/assets/email.webp';
import githubIcon from '/src/assets/github-mark-white.png';
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 md:py-4 overflow-auto flex-1">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-3 md:gap-4 mb-2">
          <a href="https://www.linkedin.com/in/brendan-chang-44b1a71a2" target="_blank"><img src={linkedinIcon} alt="linkedin Icon" className="w-6 h-6 hover:scale-125 transition-transform duration-200"/></a>
          <a href="mailto:brendanjchang@yahoo.com.hk"><img src={emailIcon} alt="Email Icon" className="w-6 h-6 hover:scale-125 transition-transform duration-200"/></a>
          <a href="https://github.com/Polymonomial" target="_blank"><img src={githubIcon} alt="GitHub Logo" className="w-6 h-6 hover:scale-125 transition-transform duration-200"/></a>
        </div>
        <p className="font-sans font-thin text-xs md:text-sm">BRENDAN CHANG &copy; 2026</p>
      </div>
    </footer>
  );
}
export default Footer;