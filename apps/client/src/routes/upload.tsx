import React, { useState } from 'react';
import { Button, styled } from '@mui/material';
import { useUploadMutation } from '../store/services/videos.api';

export const Upload: React.FC = () => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const [file, setFile] = useState<File | null>();
  const [upload] = useUploadMutation();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex h-fit w-fit flex-col items-center justify-center gap-4 rounded-lg border border-solid border-slate-200 p-4">
        <h2>Upload a video</h2>
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
        >
          Select file
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => {
              if (!event.target.files) {
                throw Error('No File Selected');
              }

              setFile(event.target.files[0]);
            }}
          />
        </Button>
        <div>{file ? `File: ${file.name}` : `No File Selected`}</div>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              setFile(null);
            }}
          >
            Clear
          </Button>
          <Button
            onClick={async () => {
              if (!file) {
                throw new Error('No File Selected');
              }

              const formData = new FormData();
              formData.append('file', file);

              upload(formData).unwrap();
            }}
            variant="contained"
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};
