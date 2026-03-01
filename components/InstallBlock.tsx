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
    <div className="mt-10 text-sm text-gray-500">
      <p className="mb-2">Install with</p>

      <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-lg px-2 py-2">
        <code className="text-gray-300 font-mono text-sm">
          {command}
        </code>

        <button
          onClick={handleCopy}
          className="ml-4 p-2 rounded-md hover:bg-neutral-800 transition"
        >
          {copied ? (
            <FiCheck className="text-green-500" size={16} />
          ) : (
            <FiCopy className="text-gray-400" size={16} />
          )}
        </button>
      </div>
    </div>
  );
}

export default InstallBlock;