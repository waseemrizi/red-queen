import React, {useEffect} from 'react'
import './style.css';
import useWebAnimations from "@wellyshen/use-web-animations";

export const RedQueenRace = () => {
    var playbackrateRQ = 1;
    var playbackrateBG = 0;
    /* Background animations */
const sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
    playbackRate: playbackrateBG
  };
  
  const sceneryTimingforeground = {
    duration: 12000,
    iterations: Infinity,
    playbackRate: playbackrateBG
  };

  const background1movement = useWebAnimations({
      keyframes: sceneryFrames,
      timing: sceneryTimingBackground,
  });

  const background2movement  = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground
  });

  const foreground1movement  = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingforeground,
  });

    const foreground2movement  = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingforeground,
  });

  const spriteFrames = [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" }
  ];

  const spriteTiming = {
    
        easing: "steps(7, end)",
        direction: "reverse",
        duration: 6000,
        playBackRate: 1,
        iterations: Infinity,
    };
  

  const redQueen_alice = useWebAnimations({
    keyframes: spriteFrames,
    timing: spriteTiming,
  });

  const adjustBackgroundPlayback = () => {
    if (playbackrateRQ < .8) {
      playbackrateBG = ( playbackrateRQ / 2 ) * -1;
    
    } else if (playbackrateRQ > 1.2) {
        playbackrateBG = ( playbackrateRQ / 2 );
    } else {
      playbackrateBG = 0;
    } 
    foreground1movement.getAnimation().playbackRate = playbackrateBG
    foreground2movement.getAnimation().playbackRate = playbackrateBG
    background1movement.getAnimation().playbackRate = playbackrateBG
    background2movement.getAnimation().playbackRate = playbackrateBG  
  }; 

  

  useEffect(() => {
      
      const fganimation = foreground1movement.getAnimation();
fganimation.currentTime = fganimation.effect.getTiming().duration / 2;

const bganimation = background1movement.getAnimation();
bganimation.currentTime = bganimation.effect.getTiming().duration / 2;

    setInterval(() => {
        /* Set decay */
        if (playbackrateRQ > .4) {
            playbackrateRQ *= 0.9;
          redQueen_alice.getAnimation().playbackRate = playbackrateRQ;  
        } 
        adjustBackgroundPlayback();
      }, 3000);


      document.addEventListener("click", () => {
          playbackrateRQ *= 1.1;
        redQueen_alice.getAnimation().playbackRate = playbackrateRQ;
        adjustBackgroundPlayback();
      } );
  },)
  
  
    return (<div>
            <div className="wrapper">
  <div className="sky"></div>
  <div className="earth">
    <div id="red-queen_and_alice">
      <img id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" 
      alt="Alice and the Red Queen running to stay in place."
        ref={redQueen_alice.ref}
      />
    </div>
  </div>

  <div className="scenery" id="foreground1" ref={foreground1movement.ref}>
    <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "/>
  </div>
  <div className="scenery" id="foreground2" ref={foreground2movement.ref}>    
    <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
    <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
  </div>
  <div className="scenery" id="background1" ref={background1movement.ref}>
    <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
  </div>
  <div className="scenery" id="background2" ref={background2movement.ref}>
    <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>

    <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
    <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
  </div>
</div>
        </div>);
    
};


