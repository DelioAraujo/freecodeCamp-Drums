 export const playKey = (event, setAudioPlayed) => {
    const key = event.key.toUpperCase();
    const buttons = Array.from(document.querySelectorAll('.drum-pad'));
    const button = buttons.find((btn) => btn.textContent === key);
    if (button) {
      const audio = button.querySelector('audio');
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        const buttonId = button.id;
        setAudioPlayed(buttonId);
      }
    }
  };
