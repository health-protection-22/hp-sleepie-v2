import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { GiDna1 } from 'react-icons/gi';
import colors from '../../../../../../styles/Theme/colors';

export function DNAInput() {
  const [dnaFile, setDnaFile] = useState<File>();

  return (
    <div className="w-[25%] flex flex-col items-center gap-1">
      <span className="font-bold text-base text-gray-500">Optional</span>
      <div className="flex flex-col gap-2 py-4 px-4 bg-backgroundCart-secondary rounded-2xl">
        <span className="text-sm text-text-primary text-center">
          Upload your raw DNA to improve your results throught 19 differents parameters
        </span>
        <div className="w-full flex justify-center gap-3">
          <div className="p-2 bg-background-secondary rounded-md flex items-center">
            <GiDna1 />
          </div>
          <div className="p-2 bg-background-secondary rounded-sm flex justify-between items-center gap-2 cursor-pointer hover:opacity-70 duration-200">
            <FaUpload color={colors.text.primary} />
            <label htmlFor="dna-file" className="text-text-primary cursor-pointer">
              {dnaFile ? dnaFile.name : 'Upload from my computer'}
            </label>
            <input
              type="file"
              className="hidden"
              id="dna-file"
              name="dna-file"
              onChange={(ev) => {
                if (ev.target.files) {
                  setDnaFile(ev.target.files[0]);
                }
              }}
              // @ts-ignore
              accept={['.raw', '.pdf']}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
