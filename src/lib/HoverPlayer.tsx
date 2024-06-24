// This is a simple play button SVG that you can use in your hover player
type AppProps = {
  message: string;
  play: Function,
  bounds: {
    x: number,
    y: number,
    top: number,
    left: number,
    width: number,
    height: number,
  }
  // play:(e: React.MouseEvent<HTMLElement>) => void,
};
const PlayButton = ({ message, play, bounds, activeElCoords }: AppProps) => (
  activeElCoords && (<div>
    <svg
      id="play-button"
      onClick={() => play()}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        cursor: "pointer",
        background: "#6B78FC",
        borderRadius: "50%",
        position: 'absolute',
        top: activeElCoords ? activeElCoords.top - 10 :  0,
        left: activeElCoords ? activeElCoords.left - 10 :  0,
      }}
    >
      <path
        d="M16.3711 11.3506C16.8711 11.6393 16.8711 12.361 16.3711 12.6497L10.3711 16.1138C9.87109 16.4024 9.24609 16.0416 9.24609 15.4642L9.24609 8.53603C9.24609 7.95868 9.87109 7.59784 10.3711 7.88651L16.3711 11.3506Z"
        fill="white"
      />
    </svg>
  </div>)
);

/**
 * **TBD:**
 * Implement a hover player that appears next to the paragraph when the user hovers over it
 * The hover player should contain a play button that when clicked, should play the text of the paragraph
 * This component should make use of the useHoveredParagraphCoordinate hook to get information about the hovered paragraph
 */

export default function HoverPlayer({ message, play, bounds, activeElCoords }: AppProps) {
  return <PlayButton play={play} message={message} bounds={bounds} activeElCoords={activeElCoords} />
}
