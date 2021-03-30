function wordCounter(text) {
  if (text.length === 0) {
    return 0;
  }

  function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function (element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }

  function sentenceCounter(text) {
    let sentenceCount = 0;
    const sentenceArray = text.split(".");
    sentenceArray.forEach(function (sentence) {
      sentenceCount++;
    });
    return sentenceCount - 1;
  }

  function specificWordCounter(text) {
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function (word) {
      if (word === "crazy")
        wordCount++;
    });
    return wordCount;
  }