import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 1100px;
  max-width: 100%;
  min-height: 600px;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signingIn !== true
      ? `
  transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	`
      : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  text-align: center;
  font-size: 20px;
  color: hsla(0, 100%, 45%, 0.89);
`;

export const Input = styled.input`
  padding: 18px 15px;
  margin: 8px 0;
  width: 100%;
  margin-bottom: 10px;
  outline: none;
  &:focus {
    border-bottom: 2px solid #ff4b2b;
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: hsla(0, 100%, 45%, 0.89);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  margin-top: 10px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: hsl(274, 21%, 23%);
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  //   border-color: red;
  &:hover {
    background-color: hsla(0, 100%, 45%, 0.89);
  }
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  text-align: end;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signingIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: ${(props) =>
    props.signingIn
      ? `url(images/latest-game-1.jpg)`
      : `url(images/ghost.jpg)`} !important;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    z-index: -1;
  }

  ${(props) =>
    props.signingIn !== true ? `transform: translateX(50%);` : null}
`;


export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signingIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) =>
    props.signingIn !== true ? `transform: translateX(20%);` : null}
`;
export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: hsla(0, 100%, 45%, 0.89);
`;
