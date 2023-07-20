import React from 'react'

const handleDropdownChange = (event) => {
  setInputMode(event.target.value);
};

const parseFastaFile = (fileContent) => {
  const lines = fileContent.split(/\r?\n/);
  const sequences = [];
  let currentSequence = "";

  for (const line of lines) {
    if (line.startsWith(">")) {
      if (currentSequence) {
        sequences.push(currentSequence);
      }
      currentSequence = "";
    } else {
      currentSequence += line.trim();
    }
  }
  if (currentSequence) {
    sequences.push(currentSequence);
  }
  return sequences;
}

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) {
    alert("No file selected.");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const fileContent = e.target.result;
    const sequences = parseFastaFile(fileContent);
    if (sequences.length < 2) {
      alert("The FASTA file should contain at least two sequences.");
      return;
    }
    const sequenceA = sequences[0];
    const sequenceB = sequences[1];
    setSequenceA(sequenceA);
    setSequenceB(sequenceB);
  };
  reader.readAsText(file);


  export default function fastaInput() {



  }
}

export default fastaInput