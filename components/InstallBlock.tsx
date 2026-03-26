import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

function InstallBlock() {
  const [copied, setCopied] = useState(false);

  const command = "npm install github-contributions-ui";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 flex items-center bg-gradient-to-r from-gray-900/50 to-green-950/20 border border-green-900/30 rounded-lg overflow-hidden">
        <code className="text-gray-300 font-mono text-sm px-4 py-3 flex-1 overflow-x-auto">
          {command}
        </code>

        <button
          onClick={handleCopy}
          className="p-3 hover:bg-green-950/30 transition-colors duration-200 text-gray-400 hover:text-green-400"
          title="Copy to clipboard"
        >
          {copied ? (
            <FiCheck className="text-green-500" size={18} />
          ) : (
            <FiCopy size={18} />
          )}
        </button>
      </div>
    </div>
  );
}

export default InstallBlock;