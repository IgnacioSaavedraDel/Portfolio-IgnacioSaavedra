function SoundToggleButton({ soundOn, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="text-lg hover:scale-110 transition-transform w-20 text-center"
    >
      {soundOn ? "( ˶°ㅁ°) !!" : "(° × ° )"}
    </button>
  );
}

export default SoundToggleButton;
