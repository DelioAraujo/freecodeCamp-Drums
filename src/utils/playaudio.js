export const playAudio = (event, setAudioPlayed) => {
    const button = event.target;
    const audio = button.querySelector('audio');
    if (audio) {
      audio.play();
      const buttonId = button.id;
      setAudioPlayed(buttonId)
    }
  };