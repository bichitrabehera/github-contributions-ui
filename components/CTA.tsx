import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-green-950/10 to-black py-20 border-t border-green-900/30">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Display Your
          <br className="hidden sm:block" /> GitHub Activity?
        </h2>

        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Get started in seconds. Just three lines of code to add stunning GitHub
          contributions to your project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://github.com/bichitrabehera/github-contributions-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-600/20"
          >
            <FaGithub size={18} />
            View on GitHub
            <FaArrowRight size={16} />
          </Link>

          <Link
            href="https://www.npmjs.com/package/github-contributions-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 border border-gray-700"
          >
            View on NPM
            <FaArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-800">
          <p className="text-sm text-gray-500 mb-4">
            MIT License • Made with ❤️ by{" "}
            <Link
              href="https://bichitrabehera.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Bichitra Behera
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
